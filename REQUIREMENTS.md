# API Requirements
Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. 

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
The API will have a base url of `http://localhost:8081/api/v1` although the parts of this url can be changed in the .env file.

The following endpoints are in that base url:

#### products
- Index = `/products` GET
- Show = `/products/:id` GET
- Create [token required] = `/products` POST

#### users
- Index [token required] = `/users` GET
- Show [token required] = `/users/:id` GET
- Create [token required] = `/users` POST
- Create first user = `/users/genesis` POST

#### orders
- Index Current orders for all users [token required] = `/orders/incomplete` GET
- Show Current order for specific user (args: user id)[token required] = `/orders/incomplete/:user_id` GET
- Create = `/orders` POST


## Data Shapes
The models and database have the following properties/fields:

#### product
- id (PK) = BIGSERIAL
- name = VARCHAR(100)
- price = DECIMAL

#### users
- id (PK) = BIGSERIAL
- firstname = VARCHAR(100)
- lastname = VARCHAR(100)
- password (hashed) = VARCHAR(100)

#### orders
- id (PK) = BIGSERIAL
- user_id (FK)
- order_complete = BOOLEAN

#### orderline
This table joins many orders with many products.
- id (PK) = BIGSERIAL
- order_id (FK)
- product_id (FK)
- quantity = INTEGER