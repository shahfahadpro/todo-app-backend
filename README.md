<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Todo App Backend

## Description

A simple backend API for a Todo application, built with [NestJS](https://github.com/nestjs/nest) (TypeScript). It uses in-memory storage for managing todo lists and their corresponding items, designed with modularity in mind.

## Features

- **Framework:** Built with NestJS v11.
- **Language:** TypeScript.
- **Architecture:** Modular design (`TodoModule`) separating concerns.
  - **Controllers:** Handle incoming HTTP requests (`TodoController`).
  - **Services:** Encapsulate business logic and data access (`TodoService`).
- **Data Storage:** In-memory array storage within `TodoService` (easily replaceable with a database connection later).
- **Validation:** Uses Data Transfer Objects (DTOs) and `class-validator` with a global `ValidationPipe` for automatic request payload validation.
- **Unique IDs:** Uses UUIDs (`uuid` package) for unique list and item identifiers. Route parameters are validated using `ParseUUIDPipe`.
- **CORS:** Enabled via `app.enableCors()` to allow requests from frontend applications running on different origins.

## API Endpoints

The base URL is `/todos`.

| Method  | Path                     | Description            | Body (JSON)                                       | Response (JSON)           |
| :------ | :----------------------- | :--------------------- | :------------------------------------------------ | :------------------------ |
| `POST`  | `/`                      | Create a new todo list | `{ "title": "string" }`                           | Created `TodoList` object |
| `GET`   | `/`                      | Get all todo lists     | N/A                                               | `TodoList[]`              |
| `POST`  | `/:listId/items`         | Add item to a list     | `{ "title": "string", "description"?: "string" }` | Created `TodoItem` object |
| `PATCH` | `/:listId/items/:itemId` | Update item's status   | `{ "completed": boolean }`                        | Updated `TodoItem` object |

_(Note: `:listId` and `:itemId` parameters in the path must be valid UUID strings)_

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode (reloads on file changes)
npm run start:dev

# production mode
npm run start:prod
```

## License

This project is [MIT licensed](LICENSE).
