SELECT students.firstName, students.lastName, cities.city FROM students JOIN cities
on students.city_id = cities.id;
