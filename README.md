# Anythink Market Servers

This project contains two backend servers: a FastAPI server implemented in Python and an Express server implemented in Node.js. Both provide routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: Implementation of the FastAPI server with routes for adding and retrieving tasks.
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package.
- `python-server/requirements.txt`: Lists dependencies for the FastAPI server.
- `python-server/Dockerfile`: Builds the Docker image for the FastAPI server.
- `express-server/src/app.js`: Implementation of the Express server with routes for adding and retrieving tasks.
- `express-server/package.json`: Node.js dependencies and scripts for the Express server.
- `express-server/Dockerfile`: Builds the Docker image for the Express server.
- `docker-compose.yml`: Defines and runs both the Python and Node.js servers as Docker services.

## Migration Details

The project has been updated to include a Node.js Express server in addition to the original Python FastAPI server. Both servers expose similar endpoints for managing tasks.

- **Python FastAPI server** runs on port **8000**.
- **Node.js Express server** runs on port **8001**.

You can use either server for development or testing. Both are started together using Docker Compose.

## Getting Started

To run both servers using Docker, follow these steps:

1. Build and start the Docker containers:

   ```sh
   docker compose up
   ```

   This command will build the Docker images for both servers and start the containers as defined in `docker-compose.yml`.

2. The servers will be available at:
   - FastAPI (Python): [http://localhost:8000](http://localhost:8000)
   - Express (Node.js): [http://localhost:8001](http://localhost:8001)

## API Routes

Both servers provide the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.
