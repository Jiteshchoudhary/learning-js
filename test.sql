1) SQL query to update dateofjoining to 15th july 2012 for empid=1;

update Employee set dateofjoining="15th july 20212" where empid=1;

2) sql query to select all student name where age is greater then 22.
select name from student where age>22;

3) sql query to find all the Employee with salary between 4000 and 8000;
select * from Employee where salary between 4000 and 8000;

4) sql query to find the name of employee beginging with S.
select * from where name like 'S%';

5) SQL query to display the full name.
select concat(firstName,lastName) from employee;

6) write a query to fetch employees whose firstName ends with an alphabet 'A' and contains 4 alphbates.
select * from employee where firstName like '___A';

7) write a query to fetch details empoye first name anuska and somanth not in that.
select * from employee where firstName not In ('anuska','somanth');

8) write a query to  display current date;
select current_date, current_time, current_timestamp;

9)write an sql query to fetch the employee first name and replace the A with '@'
select replace(firstName, 'A','@') from employee;

10) write an sql query to fetch the domain from an email address;
