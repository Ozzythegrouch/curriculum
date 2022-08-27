### Things to keep in mind
- shell commands are case sensitive
- single quotes only
- statements are case insensitive
- statements must end in a semi-colon

### Postgres Shell Commands
These are postgres shell commands, not statements
```
\c <someDatabase>
\dt
\du
\l
\q
```

### Create a database
```
CREATE DATABASE <someDB>;
```

### Create a table for students
```
CREATE TABLE students (
  id serial primary key,
  firstName varchar(50) not null,
  lastName varchar(50) not null,
  city varchar(50) not null
);
```

### Create a table for cities
```
CREATE TABLE cities (
  id serial primary key,
  city varchar(50) not null,
  state varchar(50) not null
);
```

### Drop a column
```
ALTER TABLE students 
DROP COLUMN city;
```

### Add a column
If you add a column that must contain a value, you have to set the value at the same time you create the column
```
ALTER TABLE students
ADD COLUMN state varchar(50) not null DEFAULT 'foo';
```

### Change a column name
```
ALTER TABLE cities 
RENAME COLUMN name TO city;
```

### Add a column to be a foreign key
The table that holds the foreign key must already exist
```
ALTER TABLE students
ADD COLUMN city_id integer references cities DEFAULT 1;
```

### Modify the data in a column
```
UPDATE students
SET state = 'Georgia' 
WHERE firstName = 'Christopher';
```

### Insert values into the students table
```
insert into students
  (firstName, lastName, city)
values
  ('Christopher', 'Bond', 'Atlanta')
;
```

### Insert values into the cities table
```
insert into cities
  (city, state)
values
  ('Atlanta', 'Georgia')
;
```

### Finding all records
```
select * from students;
```

### Finding a set of records based on some criteria
```
select * from students where firstName='Christopher';
select * from students where firstName ilike 'christopher';
select * from students where firstName ilike '%toph%';
```

### Join two tables
Caveat: this shows all columns from both tables
```
SELECT * FROM students JOIN cities
on students.city_id = cities.id;
```

### Join two tables while specifying columns and column order
```
SELECT students.firstName, students.lastName, cities.city FROM students JOIN cities
on students.city_id = cities.id;
```