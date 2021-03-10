# Storefront Backend Project
This Node app serves an [API for a pet store](http://localhost:8081/api/v1) using Express.

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

## Database Creation
Create your dev and test Postgres databases locally and specify their host, database names and credentials in the `.env` file.

## Database Migrations
Run `npm run create-test-db` and `npm run create-dev-db` to create a test and a dev database each with the following tables:
- `orders` (plural as per spec)
- `product` (singular as per spec) (with a rabbit called Fluffy added as an example)
- `users` (plural because `user` is an existing Postgres table)
- `orderline`

Top tip: Keep an eye on the progress of this in [pgAdmin](http://127.0.0.1:51429/browser/).

## Jasmine Tests
Run `npm run test` to run the Jasmine tests.

## Manually Testing the Endpoints
The API can be tested using Postman, although if you already use VS Code you may prefer to use [humao.rest-client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). REST files (e.g. `src\model\product.rest`) are included to easily test the endpoints using the extension.


# TODO:
- Add tests and mocks for all models.
- Endpoints must have tests and be CORS enabled.
- Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.
- Before submitting project, spin it up and test each endpoint to make sure they match requirements.