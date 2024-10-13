how to setup as typescript 
always setup ts in local avoid global things okay

npm i typescript 
npm i ts-node

to run that code install depencies in dev also 
npm i -D typescript 
npm i -D ts-node

after that initialize the ts project

npx tsc --init 
//this will create ts config file and setting of configuration

after writing ts file you need to compile 

hello.ts 
npx tsc hello.ts //then it will generate hello.js
node hello.js 

want to run ts directly without compile 
use ts-node
npx ts-node hello.ts
