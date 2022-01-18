CREATE DATABASE IF NOT EXISTS rate_movies;
USE rate_movies;

DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rates;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY AUTO_INCREMENT,
    movie_name VARCHAR(60) NOT NULL,
    movie_year YEAR NOT NULL,
    movie_time INT NOT NULL,
    movie_update DATETIME,
    movie_delete INT
);

CREATE TABLE users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    user_pass VARCHAR(10) NOT NULL
);

CREATE TABLE rates(
	rate_id INT PRIMARY KEY AUTO_INCREMENT,
    rate_valuetion INT NOT NULL,
    movie_id INT,
    user_id INT,
    CONSTRAINT fk_movies
    FOREIGN KEY(movie_id)
    REFERENCES movies(movie_id),
    CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
);