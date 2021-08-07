DROP DATABASE IF EXISTS soaps_shop;

CREATE DATABASE soaps_shop;

\c soaps_shop;

CREATE TABLE soaps(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    photo TEXT NOT NULL,
    description VARCHAR(500) NOT NULL,
    price NUMERIC NOT NULL,
);