# Storefront Backend Project
This Node app serves the API for a pet store using Express.

## Installation
Run `npm install`.

## Environmental Variables
This project requires a `.env` file in the root with these variables:
    
    | Variable              | Value     |
    | :-------------------: | :-------: |
    | APP_HOST              | localhost |
    | APP_PATH              | /api/v1   |    
    | APP_PORT              | 8081      |
    | PG_HOST               |           |
    | PG_DATABASE           |           |
    | PG_DATABASE_TEST      |           |
    | PG_USER               |           |
    | PG_PASSWORD           |           |
    | BCRYPT_PASSWORD       |           |
    | BCRYPT_PEPPER         |           |
    | BCRYPT_SALT_ROUNDS    |           |
    | ENV                   | dev       |

## Build and Run
Run `npm run prebuild` the first time.
After that `npm run start` will take care of building and starting the server.

## Database Migrations
Run `db-migrate up` to create the following tables in your local database:
- `orders` (plural as per spec)
- `product` (singular as per spec) (with a rabbit called Fluffy added as an example)
- `users` (plural because `user` is an existing Postgres table)

## Manually Testing the Endpoints
The API can be tested using Postman although if you use VS Code my recommendation is [humao.rest-client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Rest files (e.g. `src\model\product.rest`) are included to test the endpoints using this extension.


# INSTRUCTIONS FROM UDACITY

## Steps to Completion

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
