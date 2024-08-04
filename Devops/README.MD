===========Nginx setup==============
use this method to create a proper nginx server this is best approach
best way to create nginx server on ec2 instance always follow this approach
sudo apt update
sudo apt install nginx	// Start installing Nginx
sudo systemctl start nginx // Start the NGINX service
sudo systemctl status nginx // Check whether Nginx is running correctly
sudo systemctl enable nginx //the service starts automatically at when your server restarts
Configure Nginx to Serve the app
Create a new configuration file for your domain
step-1
1) sudo nano /etc/nginx/sites-available/mydomain.com   //replace mydomain.com with your this create a file
step-2)
2) paste the following code in this file
noted-> proxy_pass me apn jis port pe apna server run ho raha he woh dalege last me jese 5000 3000 etc
server {
        client_max_body_size 64M;
        listen 80;
        server_name mydomain.com;
        location / {
                proxy_pass             http://127.0.0.1:5000;
                proxy_read_timeout 	60;
                proxy_connect_timeout  60;
                proxy_redirect     	off;
                # Allow the use of websockets
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}
step-3) Enable the file by creating a link from it to the sites-enabled directory, which Nginx reads from during startup:
sudo ln -s /etc/nginx/sites-available/mydomain.com /etc/nginx/sites-enabled/
step-4) sab kuch sahi he check karne ke liye run this command
 sudo nginx -t
step-5) now restart the server
 sudo systemctl restart nginx (edited) 
2:49
Jitesh Choudhary
============SSL Certificate generate on server===============
1) step go to dns setting of domain and map the domain with ip and test it in browser.
          choose domain type aaa category
once it will map then hit the url in browser check it is running or not like that
example https://api.tradible.io=>3.68.92.21 yeh apko bad gateway return karege  aab aap server pe jake ssl setup karlo then it work fine
2) step now go to the server on ec2 instace login
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d mydomain.com -d www.mydomain.com  //yeh comand tabhi work karege jab apka domain map hoga ip ke sath apke dns server pe
wait for few second if success then it will run on https otherwise check with dns server
3) step-3
sudo sytemctl restart nginx //now just restart the server and enjoy (edited) 
2:49
Jitesh Choudhary
====================How to setup node on server===================
1) Setup node on server with nvm  //hamese ise he install karna chaiye taki specifc version apn install kar paye
     1) curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
     2) . ~/.nvm/nvm.sh
     3) nvm install 16.20.0 (edited) 
2:53
Jitesh Choudhary
==================How to deploy the code on server===================
1) step-1 create a directory with project name
   1) mkdir chatApis
   2) clone the directory using git
   3) create env using sudo nano .env add credentail here   and press ctrl+s and ctrl+x and that's it.
   4) run npm i to install the packages
2) now setup pm2 this will run over server forever
1)  npm install pm2@latest -g
2)  pm2 start src/server.js
3) pm2 list // this will give you list with id of  server is runing
4) pm2 commands -> pm2 restart id,  pm2 stop id, pm2 start src/server.js
pm2 start dist/main.js  --name kc-be-dev
3) step-3)
1) go to aws console in instance and add your port in inbound setting also (edited) 
2:58
Jitesh Choudhary
================AWS MySql setup on server local==================================
In some case we are create ec2 but we not wants use rds service of aws so we create a local database on server
this command will help you
setup mysql on ec2 instace
sudo apt update
sudo apt install mysql-server
sudo systemctl status mysql
sudo mysql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password_here';
mysql> FLUSH PRIVILEGES;
mysql> exit
$ sudo mysql -u root -p
Note:- When we try to connect with remote database which on our server in that case you need pem file to connect with workbench
2:58
Jitesh Choudhary
=================How to setup postgresql on server==========================
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl status postgresql
sudo systemctl start postgresql
now reset the password of postgrsql user for that
logout from current psql
go to main directory
run this command
sudo -i -u postgres
psql
ALTER USER postgres PASSWORD 'new_password';
sudo systemctl start postgresql
now restart the postgresql server
jispe normal swagger chal raha he waha se access karege apn db ko
now just goto home directory after that
cd /etc/postgresql/14/main
now update this
postgresql.conf
listen_address = '*'
also update pg_hb.confg
# TYPE DATABASE USER CIDR-ADDRESS  METHOD
host  all  all 0.0.0.0/0 scram-sha-256
now just login
sudo -i -u postgres
psql
CREATE DATABASE kcweb;
\l to get the list of db
pm2 start ./dist/main.js --name kc-backend (edited)
2:59
Jitesh Choudhary
=============how to serve request on https ===================
cd /etc/nginx/sites-enabled
isme ek default file rehti he woh main he bas usi ko edit kar do jake okay sir
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    root /home/ubuntu/backend/kc-backend;
    index index.html index.htm index.nginx-debian.html;
    location / {
        try_files $uri $uri/ =404;
    }
    # Redirect HTTP to HTTPS for apidev.jitesh.com
    if ($host = apidev.jitesh.com) {
        return 301 https://$host$request_uri;
    }
    # Redirect HTTP to HTTPS for apidev.jitesh.xyz
    if ($host = apidev.jitesh.xyz) {
        return 301 https://$host$request_uri;
    }
    return 404;
}
server {
    listen [::]:443 ssl;
    listen 443 ssl;
    server_name apidev.jitesh.com;
    root /home/ubuntu/backend/kc-backend;
    index index.html index.htm index.nginx-debian.html;
    location / {
        proxy_pass http://127.0.0.1:3000;
        #try_files $uri $uri/ =404; yeh complusry he
    }
# for socket connection
     location /socket.io/ {
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $host;
      proxy_pass http://127.0.0.1:3000;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
#socket end here
    ssl_certificate /etc/letsencrypt/live/apidev.jitesh.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/apidev.jitesh.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
server {
    listen [::]:443 ssl;
    listen 443 ssl;
    server_name apidev.jitesh.xyz;
    root /home/ubuntu/backend/web3backend/kc-backend;
    index index.html index.htm index.nginx-debian.html;
    location / {
        proxy_pass http://127.0.0.1:4000;
        #try_files $uri $uri/ =404;
    }
    ssl_certificate /etc/letsencrypt/live/apidev.jitesh.xyz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/apidev.jitesh.xyz/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

