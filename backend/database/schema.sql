-- Create Database
CREATE DATABASE IF NOT EXISTS store_rating_system;

USE store_rating_system;

-- USERS TABLE

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(60) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    address VARCHAR(400),

    role ENUM('admin', 'user', 'owner')
        DEFAULT 'user',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

);

-- STORES TABLE

CREATE TABLE stores (

    id INT AUTO_INCREMENT PRIMARY KEY,

    owner_id INT NOT NULL,

    name VARCHAR(120) NOT NULL,

    email VARCHAR(150) UNIQUE NOT NULL,

    address VARCHAR(400),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_store_owner
    FOREIGN KEY(owner_id)
    REFERENCES users(id)
    ON DELETE CASCADE

);

-- RATINGS TABLE

CREATE TABLE ratings (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    store_id INT NOT NULL,

    rating TINYINT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CHECK (rating BETWEEN 1 AND 5),

    UNIQUE(user_id, store_id),

    CONSTRAINT fk_rating_user
    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_rating_store
    FOREIGN KEY(store_id)
    REFERENCES stores(id)
    ON DELETE CASCADE

);

-- INDEXES

CREATE INDEX idx_user_name
ON users(name);

CREATE INDEX idx_user_email
ON users(email);

CREATE INDEX idx_store_name
ON stores(name);

CREATE INDEX idx_store_address
ON stores(address);

CREATE INDEX idx_rating_user
ON ratings(user_id);

CREATE INDEX idx_rating_store
ON ratings(store_id);