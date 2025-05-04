# ingredients-tracker-web

A web application for tracking ingredients, managing recipes, groups, devices, and users with multilingual support built using Angular.

## Table of Contents

- [Features](#features)
- [Stack](#stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
- [Configuration](#configuration)

## Features

- User registration and login with JWT authentication
- Group creation, management, and user administration
- Device creation, activation, and listing
- Product management with searchable lists and editable counts
- Recipe creation, editing, detailed viewing, and cooking functionality
- Ingredient and category selectors with pagination and search
- Multilingual support (English and Ukrainian)
- Responsive layout with header, footer, and navigation

## Stack

- Angular 17
- TypeScript
- Bootstrap 5

## Installation

### Prerequisites

- Node.js (Recommended LTS version)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Shchoholiev/ingredients-tracker-web.git

# Navigate to the project directory
cd ingredients-tracker-web

# Install dependencies
npm install

# Run development server
npm start
```

The application will be served at `http://localhost:4200/`. It supports hot reload on source code changes.

## Configuration

### Environment Variables

The API base URLs and image storage URL are configured in the Angular environment files located in `src/environments/environment.ts`.

Update the following properties as needed:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://your-api-url.com',            // Base URL for backend API requests
  imageStorageUrl: 'https://your-image-storage/' // Base URL for loading images
};
```

### Localization

By default, the app uses the language saved in `localStorage` under the key `language` or defaults to English (`en`). Supported languages include English (`en`) and Ukrainian (`ua`).

Language can be switched via buttons in the app footer, which update `localStorage` and reload translations dynamically.
