
# Handmade Craft Server

Welcome to the Handmade Craft Server! This server provides endpoints to manage handmade craft products. It includes features for creating, reading, updating, and deleting products.

## Installation

To get started with the Handmade Craft Server, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sakthi-lucia0567/Handmade_Crafts/
   ```

2. **Install dependencies:**
   ```bash
   cd handmade-craft-server
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory of the project.
   - Define environment variables such as `PORT`, `DATABASE_URL`, and `JWT_SECRET`.

4. **Run the server:**
   ```bash
   npm start
   ```

## Usage

Once the server is up and running, you can interact with it using HTTP requests. Here are the available endpoints:

[Handmade Craft Server Postman Collection](https://hevenlydemon.postman.co/workspace/Lucifer-Workspace~507e4dff-905a-4d06-a1b0-235262c544ad/collection/18246487-69af5aa7-5715-4e31-becd-7039ca14d1f4?action=share&creator=18246487&active-environment=18246487-efbbace3-ab7d-4723-9b75-0744ebc35355)

- **POST /products**  
  Create a new product. Requires authentication.

- **GET /products**  
  Get all products.

- **GET /products/:id**  
  Get a specific product by ID.

- **PUT /products/:id**  
  Update a product by ID. Requires authentication.

- **DELETE /products/:id**  
  Delete a product by ID. Requires authentication.

### Authentication

This server uses JWT (JSON Web Tokens) for authentication. To access endpoints that require authentication, include a valid JWT token in the `Authorization` header of your HTTP requests.

## Validation

Validation middleware is implemented to ensure that requests meet certain criteria before being processed. This helps maintain data integrity and security.

## Folder Structure

- **controller:** Contains controller functions for handling HTTP requests.
- **middleware:** Contains custom middleware functions.
- **models:** Contains Sequelize models for interacting with the database.
- **routes:** Defines routes for different endpoints.
- **validate:** Contains validation schemas for request body and parameters.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README template according to your specific project requirements.
