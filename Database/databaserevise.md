hamesa group by jisme each lika rheta he usi se hota he group by okay

means like that 
Total Revenue for Each Company (means each company means group by company becase after each  company table come).


# MySQL Examples and Explanation

This document contains a collection of MySQL queries demonstrating key concepts such as `JOIN`, `GROUP BY`, `ORDER BY`, `HAVING`, `UNION`, subqueries, and correlated queries. Each example is accompanied by a brief explanation.

## Table of Contents

1. [JOIN Examples](#join-examples)
2. [GROUP BY Examples](#group-by-examples)
3. [ORDER BY Examples](#order-by-examples)
4. [HAVING Examples](#having-examples)
5. [UNION Examples](#union-examples)
6. [Subqueries Examples](#subqueries-examples)
7. [Correlated Queries Examples](#correlated-queries-examples)

## JOIN Examples

### 1. INNER JOIN

**Description**: Combines rows from two or more tables based on a related column.

```sql
SELECT c.company_name, s.revenue
FROM companies c
INNER JOIN sales s ON c.company_id = s.company_id;

 LEFT JOIN
Description: Returns all rows from the left table and matched rows from the right table. Returns NULL for unmatched rows in the right table.

sql
Copy code
SELECT c.company_name, SUM(s.revenue) AS total_revenue
FROM companies c
LEFT JOIN sales s ON c.company_id = s.company_id
GROUP BY c.company_name;
Explanation: This query returns all companies along with their total revenue. If a company has no sales, its total revenue will be NULL.


RIGHT JOIN
Description: Returns all rows from the right table and matched rows from the left table. Returns NULL for unmatched rows in the left table
SELECT s.revenue, c.company_name
FROM sales s
RIGHT JOIN companies c ON s.company_id = c.company_id;

Explanation: This query retrieves all sales data and the corresponding company names, ensuring all companies are listed even if they have no associated sales.

FULL OUTER JOIN (Not supported in MySQL, but can be simulated)
Description: Returns all rows when there is a match in either left or right table.
SELECT c.company_name, s.revenue
FROM companies c
LEFT JOIN sales s ON c.company_id = s.company_id
UNION
SELECT c.company_name, s.revenue
FROM companies c
RIGHT JOIN sales s ON c.company_id = s.company_id;
Explanation: This simulates a full outer join by combining results from a left join and a right join, ensuring all companies and sales are included.


 CROSS JOIN
Description: Returns the Cartesian product of two tables.

SELECT c.company_name, g.game_name
FROM companies c
CROSS JOIN games g;

GROUP BY Examples

Basic GROUP BY
Description: Groups rows sharing a property to perform aggregate calculations.

sql
Copy code
SELECT company_name, COUNT(*) AS total_games
FROM games
GROUP BY company_name;
Explanation: This query counts the total number of games for each company.

2. GROUP BY with SUM
Description: Groups rows and calculates the total revenue per group.

sql
Copy code
SELECT company_name, SUM(revenue) AS total_revenue
FROM sales
GROUP BY company_name;
Explanation: This query calculates the total revenue for each company.

3. GROUP BY with AVG
Description: Calculates the average rating for each game type.

sql
Copy code
SELECT game_type, AVG(rating) AS average_rating
FROM games
GROUP BY game_type;
Explanation: This query retrieves the average rating of games grouped by their type.

4. GROUP BY with multiple columns
sql
Copy code
SELECT game_type, company_name, COUNT(*) AS total_games
FROM games
GROUP BY game_type, company_name;
Explanation: This counts the total number of games for each combination of game type and company.

5. GROUP BY with ORDER BY
sql
Copy code
SELECT company_name, SUM(revenue) AS total_revenue
FROM sales
GROUP BY company_name
ORDER BY total_revenue DESC;
Explanation: This query groups sales by company and orders the results by total revenue in descending order.

ORDER BY Examples
1. Basic ORDER BY
Description: Sorts results in ascending or descending order.

sql
Copy code
SELECT game_name, rating
FROM games
ORDER BY rating DESC;
Explanation: This retrieves all game names and ratings, sorted by rating in descending order.

2. ORDER BY with multiple columns
sql
Copy code
SELECT company_name, revenue, game_type
FROM games
ORDER BY game_type, revenue DESC;
Explanation: This sorts the results first by game_type and then by revenue in descending order.

3. ORDER BY with LIMIT
sql
Copy code
SELECT company_name, SUM(revenue) AS total_revenue
FROM sales
GROUP BY company_name
ORDER BY total_revenue DESC
LIMIT 5;
Explanation: This retrieves the top 5 companies by total revenue.

4. ORDER BY with NULL values
sql
Copy code
SELECT company_name, revenue
FROM sales
ORDER BY revenue IS NULL, revenue DESC;
Explanation: This orders the results by placing NULL values at the end and sorting the rest in descending order.

5. ORDER BY with OFFSET
sql
Copy code
SELECT company_name, SUM(revenue) AS total_revenue
FROM sales
GROUP BY company_name
ORDER BY total_revenue DESC
LIMIT 10 OFFSET 5;
Explanation: This skips the first 5 rows and retrieves the next 10 companies by total revenue.

HAVING Examples
1. Basic HAVING
Description: Filters groups based on aggregate values.

sql
Copy code
SELECT company_name, SUM(revenue) AS total_revenue
FROM sales
GROUP BY company_name
HAVING total_revenue > 1000000;
Explanation: This retrieves companies that have total revenue greater than 1,000,000.

2. HAVING with COUNT
sql
Copy code
SELECT game_type, COUNT(*) AS total_games
FROM games
GROUP BY game_type
HAVING COUNT(*) > 5;
Explanation: This retrieves game types with more than 5 games.

3. HAVING with multiple conditions
sql
Copy code
SELECT company_name, AVG(rating) AS average_rating
FROM games
GROUP BY company_name
HAVING average_rating > 4 AND COUNT(*) > 10;
Explanation: This retrieves companies with an average rating greater than 4 and more than 10 games.

4. HAVING with SUM
sql
Copy code
SELECT company_name, SUM(revenue) AS total_revenue
FROM sales
GROUP BY company_name
HAVING SUM(revenue) > 5000000;
Explanation: This retrieves companies with total revenue greater than 5,000,000.

5. HAVING with ORDER BY
sql
Copy code
SELECT company_name, COUNT(*) AS total_games
FROM games
GROUP BY company_name
HAVING total_games > 3
ORDER BY total_games DESC;
Explanation: This retrieves companies with more than 3 games, sorted by the number of games in descending order.

UNION Examples
1. Basic UNION
Description: Combines the results of two or more SELECT statements.

sql
Copy code
SELECT company_name FROM companies
UNION
SELECT company_name FROM partners;
Explanation: This retrieves unique company names from both companies and partners tables.

2. UNION ALL
Description: Combines results including duplicates.

sql
Copy code
SELECT company_name FROM companies
UNION ALL
SELECT company_name FROM partners;
Explanation: This retrieves all company names from both tables, including duplicates.

3. UNION with different columns
sql
Copy code
SELECT company_name, revenue FROM companies
UNION
SELECT partner_name, revenue FROM partners;
Explanation: This combines company names and partner names with their revenue. Both SELECT statements must have the same number of columns with compatible data types.

4. UNION with ORDER BY
sql
Copy code
SELECT company_name FROM companies
UNION
SELECT company_name FROM partners
ORDER BY company_name;
Explanation: This retrieves unique company names from both tables and orders the result alphabetically.

5. UNION with GROUP BY
sql
Copy code
SELECT company_name FROM companies
GROUP BY company_name
UNION
SELECT partner_name FROM partners
GROUP BY partner_name;
Explanation: This retrieves unique company names and partner names, ensuring no duplicates.

Subqueries Examples
1. Basic Subquery
Description: A query within another query.

sql
Copy code
SELECT company_name
FROM companies
WHERE company_id IN (SELECT company_id FROM sales WHERE revenue > 50000);
Explanation: This retrieves company names for companies that have made sales greater than 50,000.

2. Subquery in SELECT
sql
Copy code
SELECT company_name,
       (SELECT COUNT(*) FROM sales WHERE sales.company_id = companies.company_id) AS total_sales
FROM companies;
Explanation: This retrieves company names along with their total number of sales.

3. Subquery in WHERE
sql
Copy code
SELECT game_name
FROM games
WHERE company_id = (SELECT company_id FROM companies WHERE company_name = 'ABC Games');
Explanation: This retrieves game names for a specific company.

4. Subquery with JOIN
sql
Copy code
SELECT c.company_name, s.revenue
FROM companies c
JOIN (SELECT company_id, SUM(revenue) AS revenue FROM sales GROUP BY company_id) s ON c.company_id = s.company_id;
Explanation: This retrieves company names along with their total revenue using a subquery to aggregate sales.

5. Correlated Subquery
sql
Copy code
SELECT company_name
FROM companies c
WHERE EXISTS (SELECT * FROM sales s WHERE s.company_id = c.company_id AND s.revenue > 50000);
Explanation: This retrieves company names that have at least one sale exceeding 50,000 using a correlated subquery.

Correlated Queries Examples
1. Basic Correlated Query
Description: A subquery that refers to columns from the outer query.

sql
Copy code
SELECT c.company_name
FROM companies c
WHERE EXISTS (SELECT * FROM sales s WHERE s.company_id = c.company_id AND s.revenue > 100000);
Explanation: This retrieves company names that have at least one sale greater than 100,000.

2. Correlated Subquery with COUNT
sql
Copy code
SELECT c.company_name
FROM companies c
WHERE (SELECT COUNT(*) FROM sales s WHERE s.company_id = c.company_id) > 5;
Explanation: This retrieves company names with more than 5 sales.

3. Correlated Subquery with AVG
sql
Copy code
SELECT c.company_name
FROM companies c
WHERE (SELECT AVG(rating) FROM games g WHERE g.company_id = c.company_id) > 4;
Explanation: This retrieves company names with an average game rating greater than 4.

4. Correlated Subquery with multiple tables
sql
Copy code
SELECT c.company_name
FROM companies c
WHERE (SELECT SUM(revenue) FROM sales s WHERE s.company_id = c.company_id) > 
(SELECT AVG(revenue) FROM sales);
Explanation: This retrieves companies whose total revenue exceeds the average revenue across all companies.

5. Correlated Subquery with NOT EXISTS
sql
Copy code
SELECT c.company_name
FROM companies c
WHERE NOT EXISTS (SELECT * FROM sales s WHERE s.company_id = c.company_id AND s.revenue < 100);
Explanation: This retrieves company names that do not have any sales under 100.

Conclusion
This document provides a foundational understanding of common MySQL queries and operations. Each example showcases how to manipulate and retrieve data using various SQL techniques.

vbnet
Copy code

This `README.md` serves as a useful guide for understanding key SQL concepts, complete with explanations and example queries. You can adjust the examples or explanations as needed to fit your specific requirements or learning objectives!









Alias we have two types one is column level and another is table level
example 
select name as fname from user;

table name alais are useful in join also
select * from user as u;
select u.name,u.age, add.id, add.name from users as u 
inner join address as add on add.id==u.id;


types of operator
operators are used to perform some operations.
1) assignment operator  =>  =  
2) arthirmatic opertor =>  + - / * 
3)relationoperator =>  >,<,<=,>=,!<,
4)logical operator-> and or not 
5)set operator -> union union all
6) speical operator 
   postivie operator      negative operator 
   in                        not in 
   between                   not between 
   is null                   is not null
   like                      not like


2) arithmatic operator:- to perfrom some math caln like add, sub,mul,div;
syntax 
column name arithmatic operator 
1) write a query to display employee salaries after adding 1000;
select salary, salary+100 as result from employee;

2) write a query to update emp salary with an increment of 10% or working with job is analyst

update emp set salary = salary + salary *10/100 where job ="analyst";

//here we can also fetch old column with new add on column
SELECT *, Price+20 as increasePrice
FROM Products; 

Relational operators:- 
   compare a specific column value with even user defined conditions

example:-
write a query to display list of emp whore are joined before 1981;
select * from emply where join_date <'1981-01-01';

//lets start with js then move to others also okay


A **subquery** in MySQL is a query within another query, usually enclosed in parentheses. Subqueries allow you to perform complex queries by embedding one query inside another, typically to retrieve data based on the result of the subquery. The main query is referred to as the **outer query**, and the embedded query is the **subquery** or **inner query**.

### Types of Subqueries in MySQL

Subqueries in MySQL can be classified into several types based on where and how they are used:

1. **Single-row Subquery**
2. **Multi-row Subquery**
3. **Scalar Subquery**
4. **Correlated Subquery**
5. **Non-correlated Subquery**
6. **Nested Subquery**
7. **Inline View Subquery**
8. **EXISTS Subquery**

Let's explore each of these types in detail:

### 1. **Single-row Subquery**
A **single-row subquery** returns only one row of results. Typically, it's used with comparison operators such as `=`, `<`, `>`, `<=`, `>=`, or `<>`.

**Example:**
```sql
SELECT employee_id, first_name, last_name 
FROM employees 
WHERE salary = (SELECT MAX(salary) FROM employees);
```
- The subquery `(SELECT MAX(salary) FROM employees)` returns the highest salary, and the outer query finds the employee(s) with that salary.

### 2. **Multi-row Subquery**
A **multi-row subquery** returns more than one row. These subqueries are used with operators like `IN`, `ANY`, `ALL`.

**Example:**
```sql
SELECT employee_id, first_name, last_name 
FROM employees 
WHERE department_id IN (SELECT department_id FROM departments WHERE location_id = 1700);
```
- The subquery returns all department IDs for a specific location, and the outer query fetches employees from those departments.

### 3. **Scalar Subquery**
A **scalar subquery** returns a single value (one row and one column). Scalar subqueries can be used in any place where a single value is expected, such as in a `SELECT` clause.

**Example:**
```sql
SELECT first_name, last_name, 
       (SELECT department_name FROM departments WHERE department_id = employees.department_id) AS department_name
FROM employees;
```
- This subquery returns the department name for each employee.

### 4. **Correlated Subquery**
A **correlated subquery** is a subquery that depends on values from the outer query. The subquery is executed once for every row processed by the outer query.

**Example:**
```sql
SELECT e1.first_name, e1.salary 
FROM employees e1 
WHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e1.department_id = e2.department_id);
```
- The subquery `(SELECT AVG(e2.salary)...)` uses a value from the outer query (`e1.department_id`), meaning it runs for each employee.

### 5. **Non-correlated Subquery**
A **non-correlated subquery** is independent of the outer query and runs only once. The result of the subquery is used to evaluate the outer query.

**Example:**
```sql
SELECT first_name, last_name 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);
```
- The subquery calculates the average salary once, and the outer query compares each employee’s salary against that value.

### 6. **Nested Subquery**
A **nested subquery** refers to having a subquery inside another subquery. These are used to perform complex queries by breaking them into smaller, manageable steps.

**Example:**
```sql
SELECT employee_id, first_name, last_name 
FROM employees 
WHERE department_id = (SELECT department_id FROM departments WHERE manager_id = (SELECT employee_id FROM employees WHERE first_name = 'John'));
```
- The innermost subquery finds John’s employee ID, the middle subquery finds the department managed by John, and the outer query retrieves employees in that department.

### 7. **Inline View Subquery**
An **inline view subquery** is used in the `FROM` clause of an SQL statement. The subquery acts as a temporary view that the outer query can then reference.

**Example:**
```sql
SELECT department_id, AVG(salary) AS avg_salary 
FROM (SELECT department_id, salary FROM employees WHERE salary > 5000) AS high_paid_employees
GROUP BY department_id;
```
- The subquery `(SELECT department_id, salary FROM employees WHERE salary > 5000)` creates a "virtual" table of employees with high salaries, and the outer query groups them by department.

### 8. **EXISTS Subquery**
The **EXISTS** operator checks whether a subquery returns any rows. It returns `TRUE` if the subquery returns one or more rows and `FALSE` otherwise.

**Example:**
```sql
SELECT first_name, last_name 
FROM employees e 
WHERE EXISTS (SELECT 1 FROM departments d WHERE e.department_id = d.department_id);
```
- The subquery checks if the department ID from the employees table exists in the departments table. If it does, the employee is returned.

### Summary of Subquery Types:
| Subquery Type       | Description                                                                                              |
|---------------------|----------------------------------------------------------------------------------------------------------|
| Single-row Subquery | Returns a single row of data and is used with comparison operators.                                       |
| Multi-row Subquery  | Returns multiple rows and is used with `IN`, `ANY`, `ALL`.                                                |
| Scalar Subquery     | Returns a single value and is used where a single value is required.                                      |
| Correlated Subquery | Depends on values from the outer query and is executed multiple times (once per row).                     |
| Non-correlated Subquery | Independent of the outer query and executed only once.                                                |
| Nested Subquery     | A subquery within another subquery, useful for complex logic.                                             |
| Inline View Subquery | Used in the `FROM` clause as a temporary table or view.                                                  |
| EXISTS Subquery     | Checks whether a subquery returns any rows, used with the `EXISTS` clause.                               |

### Performance Considerations:
- **Subqueries** can sometimes result in poor performance, especially correlated subqueries that must run for each row of the outer query.
- Where possible, **joins** (especially `INNER JOIN` and `LEFT JOIN`) are often more efficient than subqueries in terms of performance.