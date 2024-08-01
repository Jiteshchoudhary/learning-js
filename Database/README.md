#### SQL is a programming language used to interact with rdbms.

# sql has four major operation is crud

1.  *** MYsql lets begin***
inside the databases we have tables 

create database  if not exists database_name;
show databases;
drop database database_name;

## create table
## synatx create table table_name(column_name datatype constraint); 
1. create table student (id int primary key,
name varchar(50));

## insert data into 
## syntax insert into tablename values();
insert into student("jitesh");

## types of sql commands
## DDL (DATA DEFINATION LANGUAGE): CREATE ALTER RENAME TURNCATE & DROP

## DQL (DATA QUERY LANGUAGE): SELECT

## DML (DATA MANIPULATE LANGUAGE): INSERT UPDATE DELETE

## DCL (DATA Control Language): grant & revoke permission to users

## TCL (Transcation Conrtol Language): start transcation commit rollback



## database related queries
create database
show database;
drop database
show tables;

create database if not exists student;
show databaes;
drop database;
show tables;

## table related queries
## create table tablename(column_name datatype constraint);
create table student (id int primary autoincrement, name varchar(50));

## drop table 
drop table student;

## get table data select * from student;

## insert data into table  (order must be same as insert into data)
## insert into table_name (name) values("jitesh"),("mainsh");


## keys 
## primary key (unique id and auto increment and not null) 
## Foreign key  (reference of parent key)
create table address (id int, user_id int,
foreign key (user_id) references User(id)
);
## constraints sql constriants are used for specify rules for data in a tables 
## popular constarnats (not null , unique)


## sql quries 
## select * from users;
## select distinct city from users; //for unique data

## where to define some conditions;

## where clause operator 
## arithmetic :- +,-,*,/,%  SELECT * FROM OrderDetails where Quantity+20>70;
## comparison : =, !=, >,<,>=,<=
## example select *from student where roleno>35;

## logical operators:- AND, OR,NOT,IN,BETWEEN,ALL,LIKE,ANY
## examples 
## select * from student where age >21 and gender='male';

## select * from student where age >21 or gender='male';


## Bitwise Operators: &, | 

## between mtlb range me se okay
## select *from customer where amount between 500 and 9500;

## in operator
## select *from customer where id in(1,2,3,4);

## select *from customer where id not in (34,344);

## limit clause for limit the data
select * from student where marks >75 limit 4;

## order clauses for sorting asc or desc;
//write query to find top 3 marks students 
//offset is used to skip the data
## select * from user order by marks desc limit 3;

## write query to find second highest student marks
## select * from students order by marks desc limit 1 offset 1;

## Aggerate functions ()
it is used to perform caln it return single values
count,max,min,sum,avg
## count the rows 
select count (id) from users;
select max (price) from users;
select min (price) from users;
select sum (price) from users;
select avg (order) from users;

## group by clause 
//it is group that row has same value 
generally we use group by with some aggregation functions.

count no of students in each city 
select city, count(name) from student group by city;

## jis columns se group by bana rahe he keval wahi column ayega select me along with aggregate function agar other columns select kare toh error ajyegi 
select city,name from user group by city; //it will throw an error of 1000 becuase it is not defined in group by clause

write query to find avg marks from each city;
select city, avg(marks) from student
group by city order by asc;

## having clause 
used when we want to apply condition after grouping.

example
count no of students in each city where max marks cross 90;

select city, count(name) from student
group by city having max(marks) > 90;

//now we have sell by city and we want total of it so use ROLLUP() in that cases

select city,sum(p_price) from sale group by rollup(city) order by sum(p_price);
// yeh last column null karke total de dega for more accurate we use this 
select coalesce(p_name,'total'),
sum(p_price) from sale group by rollup(p_name) 
order by sum(total_price);


## general order
## select * from tablename where condition group by column having condition order by column asc;

## table related queruies 
## update (to update existing rows)
## by default safe update mode is on means it will not allowed to updates so first need to enable it.
## set sql_safe_updates=0;
## update table_name set col1=val1 where id>43;

## delete (to delete existing rows)
## delete from student where id=34;

## revisiting fk
## cascading on delete and on update -> mtlb parent table me se koi delete ho gaya toh woh chij child table me reflect ho jaye mtlb depertment delete hoga toh teacher bhi delete ho jayega

## table reatled queries 
## alert (to change the schema )

## add column
alter table student add column age int;

## drop column
alter table student drop column age;

## rename table 
alter table student rename to mystudent;

## change column (to change data type or rename)
alter table student change column age stu_age int;

## modify (modify datatype/constraint)
alter table student modify age varchar(2);


## table realted queries 
## truncate (to delete table data);
truncate table student;

## join sql 
## inner join (common in both)
## left join right join full join (outer join)

## syntax return match in both tables
## syntax 
## select t1.col,t1.col2,t2.col1,t2.col2 from t1 inner join t2 on t1.id=t2.id;

## sql sub quries 
## it contain two sql select statement 
## select columns from table where col_name operator (subquery);

## views  it is temprory table 
## suppose a complex query and you run in sql bar bar then ham us query ko save karke rakhe dege jese har koi us query ko access kar payega okay. it is create a temp view table on server
## syntax CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
example :-> create view student_view as select * from student id=32;

## next time we need to fetch data we use directly 
## like that 
## select *from student_view;
## use this to get view list 
## SHOW FULL TABLES IN practise WHERE TABLE_TYPE = 'VIEW';


## stored procedure
## stored routine:- An sql statement can be stored on database server which can call n no of times
## two types 1) stored procedure 2) user defined functions

## stored procedure:- set of sql statments and procedural logic that can perform such operation of crud.
## LETS YOU CREATE UPDATE CUSTOM PROCDEURE
## create PROCEDURE updateStudent(
    IN p_id int,
    IN p_name varchar(100)
    )
    BEGIN
    update student 
    set name = p_name
    WHERE id=p_id;
    END;

## NOW USE CUSTOM procedure of it
## CALL updateStudent(1, 'AAkash');

## 2) user defined function defined by user to return value to perform their logic
## mtlb ham jo subquries karte he use ek function me dal do then woh ham us function ko use kar lege bar bar okay

## windows functions also know as analytic function allow you to perform caln across a set of rows related to the current row.
## defined by an over() clause

select sum(salary) from emplyoee;
//it return the single value of it 
select fname ,salary,sum(salary) over (order by salary) from employees
output is 
id fname salary sum 
1  a      5      5 
2  b      2      7

## benefits of windows functions
## advanced analytics:- running total ,moving average,rank calcuation and cummulative distributions

## non-ageragete-> they do not collpase row they give more details

## flexibility: they can use in various clauses of sql with select order by having and lots of flexibility in writing quries.