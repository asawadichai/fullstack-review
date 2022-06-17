CREATE DATABASE repo;

USE repo;

/*will need id, full_name, html_url, watchers from github*/

CREATE TABLE repos (
  id int NOT NULL PRIMARY KEY,
  full_name varchar(255),
  html_url varchar(255),
  watchers int
)

/* mysql -u root < repo.sql