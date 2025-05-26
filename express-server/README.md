# Express Server

A simple Express server that listens on port 8001. It uses Nodemon for automatic code reloading during development.

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd express-server
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

### Running the Server

Start the server with automatic reloading:
```sh
yarn start
```
The server will be available at [http://localhost:8001](http://localhost:8001).

### Docker

To use Docker:

1. Build the Docker image:
   ```sh
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 8001:8001 express-server
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.