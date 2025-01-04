
# Feature Flag Project

## Overview

Feature flags (also known as feature toggles) are a powerful technique in software development that allows teams to enable or disable features in a production environment without deploying new code. This approach provides greater flexibility in managing features, testing, and rolling out changes gradually.

## Getting Started

To use this project locally, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Install [Git](https://git-scm.com/) for version control.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Real-Dev-Squad/feature-flag-frontend.git
   cd feature-flag-frontend
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

### Running the Project

To run the project locally, use the following command:

```bash
pnpm dev
```

This will start the development server, and you can access the application at `http://localhost:5173/`.

## Running Tests

To run the tests for this project, use the following command:

```bash
pnpm test
```

## Linting and Formatting

To maintain code quality and consistency, we use linting and formatting tools. Here are the commands to run them:

- **Linting**: To check for code quality issues, run:
  ```bash
  pnpm lint
  ```

  To fix linting issues, run:
  ```bash
  pnpm lint:fix
  ```

- **Formatting**: To format the code according to our style guidelines, run:
  ```bash
  pnpm format
  ```

  To fix formatting issues, run:
  ```bash
  pnpm format:fix
  ```

## Accessibility Considerations

We are committed to making our site ally-friendly. This means that as we build pages and components, we keep accessibility best practices in mind to ensure an inclusive experience for all users.

## Writing Tests

We emphasize the importance of testing in our development process. Here are some key points regarding our testing strategy:

- **Unit Tests**: We write unit tests for all new features to ensure that individual components function as expected.
- **Integration Tests**: Integration tests are implemented to verify that different parts of the application work together correctly. (We write them for pages).
