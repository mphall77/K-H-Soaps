DROP DATABASE IF EXISTS soap_log;

CREATE DATABASE soap_log;

\c soap_log;

CREATE TABLE soaps (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL
);