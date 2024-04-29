# Angular Workspace Boilerplate

Welcome to our Angular workspace boilerplate!

Our Angular workspace utilizes a powerful approach by incorporating multiple projects within a single workspace. This methodology empowers users to develop shareable libraries efficiently. For enterprises, it facilitates the adoption of a "monorepo" development style, consolidating all Angular projects into a single repository with global configuration.

By leveraging this boilerplate, developers can significantly enhance productivity, mitigate risks, and elevate the overall quality of applications. The structured approach of our workspace minimizes duplication and eliminates redundant code, thereby streamlining development efforts and fostering codebase sustainability.

We invite you to explore this documentation to grasp the full potential of our Angular workspace and unlock opportunities for seamless and scalable application development.

<!-- Getting Started start -->

## Getting Started

### Prerequisites

Before you begin, please make sure you have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager)
- Angular CLI (Command Line Interface)
  If you haven't installed these dependencies yet, you can download and install them from their respective websites:

- [Node.js](https://nodejs.org/en)
- Angular CLI: You can install it globally using npm by running the following command:

```bash
npm install -g @angular/cli
```

### Cloning the Repository

To get started with our Angular workspace, you'll need to clone the repository to your local machine. Follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:

```bash
git clone <repository_url>
```

### Installing Dependencies

Once the repository is cloned, navigate into the project directory using the terminal or command prompt. Then, install the project dependencies by running:

```bash
cd <project_directory>
npm install
```

<!-- Project Structure start -->

## Project Structure

Our Angular workspace is organized to promote modularity, reusability, and maintainability across projects. Below is an overview of the directory structure:

```bash
/my-workspace
├── /.github             # GitHub-specific files (e.g., workflows)
├── /.vscode             # Visual Studio Code configurations
├── /.docker             # Docker configurations
├── /projects            # Contains multiple Angular projects
│   ├── /apps            # Angular applications
│   │   ├── /app1        # Example Angular application 1
│   │   ├── /app2        # Example Angular application 2
│   │   └── (...others)   # Additional Angular applications
│   └── /libs            # Reusable libraries
│       ├── /utils       # Utility library
│       ├── /ui-kits     # UI component library
│       └── (...others)   # Additional libraries
├── /node_modules        # Installed npm packages for the workspace
├── angular.json         # Angular workspace configuration
├── package.json         # Workspace-wide dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Documentation for the workspace
```

In this structure:

- /.github: This directory contains GitHub-specific files, such as workflows or issue templates.
- /.vscode: Visual Studio Code configurations, which may include settings, extensions, or tasks specific to development.
- /.docker: Docker configurations for containerization and deployment.
- /projects: This directory contains both Angular applications and reusable libraries.
  - /apps: Angular applications reside here, each in its own subdirectory.
  - /libs: Reusable libraries (e.g., utility functions, UI components) are stored in this directory.
- /node_modules: This directory contains all the installed npm packages for the workspace.
- angular.json: Configuration file for the Angular workspace, defining project-specific settings and build configurations.
- package.json: Workspace-wide dependencies are listed in this file.
- tsconfig.json: TypeScript configuration for the workspace.
- README.md: Documentation for the workspace, providing instructions, overview, and guidelines for developers.

With this structured organization, our workspace encourages collaboration, facilitates code sharing, and enhances productivity across projects.

### Application Folder Structure

```bash
app1
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── layouts/
│   │   │   ├── layout1/
│   │   │   │   ├── ...(other files and folders)
│   │   │   │   └── layout1.module.ts
│   │   │   ├── layout2/
│   │   │   │   ├── ...(other files and folders)
│   │   │   │   └── layout2.module.ts
│   │   │   └── others/
│   │   │       ├── ...(other files and folders)
│   │   │       └── others.module.ts
│   │   └── pages/
│   │       ├── page1/
│   │       │   ├── ...(other files and folders)
│   │       │   └── page1.module.ts
│   │       ├── page2/
│   │       │   ├── ...(other files and folders)
│   │       │   └── page2.module.ts
│   │       └── others/
│   │           ├── ...(other files and folders)
│   │           └── others.module.ts
│   ├── assets
│   │   ├── images
│   │   └── styles
│   │       └── layout
│   │           ├── _config.scss
│   │           ├── _mixins.scss
│   │           ├── _utils.scss
│   │           ├── _variables.scss
│   │           └── layout.scss
│   ├── environments
│   │   ├── environment.dev.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── default.conf
├── entrypoint.sh
├── Dockerfile
├── tsconfig.app.json
└── tsconfig.spec.json
```

In this structure:

- src: Contains the source code for the Angular application.
  - app: Contains the main components, modules, and routing configurations for the application.
    - layouts: Contains layout modules for different page layouts.
      - layout1: Example layout module for a specific layout style.
        - layout1.module.ts: Module file for the layout.
    - pages: Contains page modules for different pages of the application.
      - page1: Example page module for a specific page.
        - page1.module.ts: Module file for the page.
          ...(other pages): Additional page modules.
  - assets: Contains static assets such as images and stylesheets.
    - images: Contains image assets used in the application.
    - styles: Contains stylesheets for the application, including layout-specific styles.
    - layout: Contains styles specific to layout components.
  - environments: Contains environment configuration files for different environments.
    - environment.dev.ts: Development environment configuration.
    - environment.ts: Default environment configuration.
- favicon.ico: Favicon icon for the application.
- index.html: Main HTML file for the application.
- main.ts: Main entry file for bootstrapping the application.
- styles.scss: Main stylesheet for global styles.
- default.conf: Nginx configuration file for serving the Angular application.
- entrypoint.sh: Shell script for custom entrypoint actions (e.g., environment variable substitution).
- Dockerfile: Dockerfile for building the Angular application image.
- tsconfig.app.json: TypeScript configuration file for the Angular application.
- tsconfig.spec.json: TypeScript configuration file for the application's unit tests.

### Library Folder Structure

```bash
lib1
├── src
│   ├── lib
│   │   ├── lib.module.ts
│   │   ├── components
│   │   │   ├── component1
│   │   │   │   ├── component1.component.ts
│   │   │   │   ├── component1.component.html
│   │   │   │   ├── component1.component.scss
│   │   │   │   └── component1.component.spec.ts
│   │   │   ├── component2
│   │   │   │   ├── component2.component.ts
│   │   │   │   ├── component2.component.html
│   │   │   │   ├── component2.component.scss
│   │   │   │   └── component2.component.spec.ts
│   │   │   └── ...
│   │   ├── services
│   │   │   │   ├── service1.service.ts
│   │   │   │   └── service2.service.ts
│   │   │   └── ...
│   │   ├── directives
│   │   │   │   ├── directive1.directive.ts
│   │   │   │   └── directive2.directive.ts
│   │   │   └── ...
│   │   └── pipes
│   │       │   ├── pipe1.pipe.ts
│   │       │   └── pipe2.pipe.ts
│   │       └── ...
│   ├── assets
│   │   ├── ...
│   ├── constants
│   │   ├── ...
│   └── interfaces
│       ├── ...
├── README.md
└── package.json
```

This structure organizes the library's source code into directories for different types of components, services, directives, pipes, assets, constants, and interfaces, making it easier to navigate and maintain the library codebase.

<!-- Configuration start -->

## Configuration

Our Angular workspace provides flexible configuration options to adapt to various development environments and requirements. Below are the key configuration files and settings:

### angular.json

The `angular.json` file is the main configuration file for the Angular workspace. It defines settings and options for projects, such as build configurations, asset paths, and project targets. Some important configurations include:

- projects: This section defines the configuration for each project in the workspace, including build options, architect targets, and file paths.
- defaultProject: Specifies the default project to use when running CLI commands without specifying a project name.
- architect: Contains configurations for different targets, such as build, serve, test, and lint.

### package.json

The `package.json` file contains metadata about the project and its dependencies. It also includes scripts for various tasks, such as building, testing, and serving the application. Key configurations include:

- dependencies/devDependencies: Lists the dependencies required for the project, including Angular packages, third-party libraries, and development tools.
- scripts: Defines custom scripts to automate common tasks, such as starting the development server (npm start) or running tests (npm test).

### tsconfig.json

The `tsconfig.json` file is the configuration file for TypeScript, the language used in Angular applications. It specifies compiler options, such as target version, module resolution, and output directory. Important configurations include:

compilerOptions: Contains settings for the TypeScript compiler, such as target version, module format, and strict mode options.
include/exclude: Specifies the files or directories to include or exclude from compilation.

### Environment Configuration

Angular supports environment-specific configuration files to manage different settings for development, staging, and production environments. By default, our Angular boilerplate provides `environment.ts` and `environment.dev.ts` files for production and development environments, respectively. You can customize these files or create additional environment files as needed.

<!-- Development start -->

## Development

we provide comprehensive guidelines, best practices, and useful commands to empower you in streamlining the development process of your Angular projects. Let's dive in and explore how to make the most out of our workspace for efficient and effective development.

#### Guidelines

- Writing Angular Components, Services, and Modules
- Follow Angular's best practices and style guide for writing components, services, and modules.
- Use meaningful names for variables, functions, and components to enhance code readability.
- Break down complex components into smaller, reusable components to promote modularity and maintainability.
- Utilize Angular's dependency injection system to manage dependencies and improve testability.

#### Path Configuration in `tsconfig.json`

To enhance module resolution and simplify imports within your Angular projects, we've configured path aliases in the `tsconfig.json` file. This allows you to import modules using logical names rather than relative paths. Here's an example of the configuration:

```bash
  "@apps/*": ["projects/apps/*"],
  "@app1/*": ["projects/apps/app1/src/*"],
  "@app2/*": ["projects/apps/app2/src/*"],
  "@libs/*": ["projects/libs/*"],
  "@ui-kits/*": ["projects/libs/ui-kits/src/*"],
  "@utils/*": ["projects/libs/utils/src/*"]
```

With this setup, you can import modules using aliases like `@apps/app1`, `@libs/ui-kits`, or `@utils/shared`.

#### Coding Conventions

- Adhere to consistent coding conventions and formatting standards across the project.
- Configure linters and formatters (e.g., ESLint, Prettier) to enforce coding standards automatically.
- Maintain a clean and organized codebase by regularly refactoring and optimizing code.

#### VS Code Settings

We've included sample VS Code settings to improve your development experience. These settings can enhance code formatting, linting, and overall productivity.

##### settings.json:

```bash
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}
```

##### extensions.json:

```bash
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

These settings enable automatic code formatting on save, using Prettier as the default formatter, and perform ESLint fixes automatically.

#### ESLint Configuration

We've also provided an .eslintrc.json file with Angular recommended rules and configurations for linting your code. This ensures consistent code quality and adherence to best practices.

### Running the Development Server

To start the development server for a specific Angular application, you can use the following command:

```bash
npm run start:app1
```

Replace app1 with the name of the Angular application you want to run. This command starts the development server on the specified port (e.g., 4201) and opens it in the default web browser.

### Building Production-Ready Assets

To build production-ready assets for a specific Angular application, you can use the following command:

```bash
npm run build:app1
```

Replace app1 with the name of the Angular application you want to build. This command compiles the application and generates optimized bundles for deployment.

<!-- Testing start -->

## Testing

Testing is an essential aspect of software development, ensuring that your Angular applications are robust, reliable, and bug-free. In this section, we'll cover different types of testing and how to run tests in your Angular workspace.

Angular provides robust testing utilities for writing unit tests and end-to-end tests for your applications. Use tools like Karma and Jasmine for unit testing, and Protractor for end-to-end testing.

Run unit tests using the following command:

```bash
ng test
```

Ensure that all tests pass before deploying changes to production.

### Debugging

Angular applications can be debugged using browser developer tools or IDEs like Visual Studio Code. Use breakpoints, console logging, and debugging tools to identify and fix issues efficiently.

### Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Testing Angular Applications](https://angular.io/guide/testing)

<!-- Deployment start -->

## Deployment

Once you've developed and tested your Angular application, it's time to deploy it to a production environment for users to access. In this section, we'll cover different deployment strategies and how to deploy your Angular projects, including using Docker.

### Local Deployment

Before deploying to a production environment, you can deploy your Angular application locally for testing and development purposes.

Running a Local Development Server
To run your Angular application locally, use the following command:

```bash
start:app1": "ng serve --project=app1 --port=4201 --open",
// Starts the development server for app1 on port 4201 and opens it in the default browser.
"start:app2": "ng serve --project=app2 --port=4202 --open",
// Starts the development server for app2 on port 4202 and opens it in the default browser.
```

This command starts a local development server and serves your the selected Angular application at command port like http://localhost:4201. You can access the application in your web browser to test and verify its functionality.

### Production Deployment with Docker

If you choose to deploy your Angular application using Docker, you can utilize the following folder structure and deployment mechanism:

```bash
/my-workspace
├── /.docker
│   ├── /app1
│   │   ├── docker-compose-app1.yml
│   │   └── ...
│   ├── /app2
│   │   ├── docker-compose-app2.yml
│   │   └── ...
│   └── ...
├── /projects
│   ├── /apps
│   │   ├── /app1
│   │   │   ├── entrypoint.sh
│   │   │   ├── nginx.conf
│   │   │   └── Dockerfile
│   │   └── (...others)
│   └── (...other files)
└── (...other files)

```

In this structure:

- /.docker: Contains Docker-related configurations for each Angular application.
  - /app1: Docker configuration for Angular application 1.
    - docker-compose-app1.yml: Docker Compose file for managing the Docker containers.
    - .env: Environment variables file for configuring Docker containers.
  - /app2: Docker configuration for Angular application 2 (similar structure as app1).
  - others...: Additional Docker configurations for other Angular applications if needed.
- /projects/apps/app1: Contains Angular application-specific files. - entrypoint.sh: Shell script for custom entrypoint actions (e.g., environment variable substitution). - nginx.conf: Nginx configuration for serving the Angular application. - Dockerfile: Dockerfile for building the Angular application image.
  You can customize Docker Compose files, environment variables, and other configurations according to your project's requirements and deployment needs.

### Continuous Deployment with GitLab CI/CD

To automate the deployment process, you can set up continuous integration and continuous deployment (CI/CD) pipelines using GitLab CI/CD. Here's a basic example of a GitLab CI/CD pipeline configuration:

```bash
# .gitlab-ci.yml

stages:
  - build
  - deploy

build:
  stage: build
  script:
    - ng build --prod

deploy:
  stage: deploy
  script:
    - docker-compose -f /.docker/app1/docker-compose-app1.yml up -d
  only:
    - master

```

This GitLab CI/CD pipeline:

Builds the Angular application for production (`ng build --prod`) in the `build` stage.
Deploys the application using Docker Compose in the `deploy` stage, but only on the `master` branch.

#### Pipeline Setup

```bash
    my-workspace/
    └── .github/
        └── workflows/
            ├── build1.yml
            ├── build2.yml
            └── others...
```

You can customize the pipeline configuration to match your specific deployment requirements and environment.

#### Additional Resources

- [Angular Deployment Documentation](https://angular.io/guide/deployment)
- [Docker Documentation](https://docs.docker.com/guides/)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- [Nginx Documentation](https://nginx.org/en/docs/)

<!-- Troubleshooting start -->

## Troubleshooting

Encountering issues during development is common, but don't worry—we've got you covered! Below are some common problems developers may face while working with our Angular workspace, along with their possible solutions.

### 1. Compilation Errors

Problem:
You encounter compilation errors when running the development server or building the application.

Solution:

- Check the error messages in the terminal for details on what caused the compilation to fail.
- Verify that all dependencies are correctly installed by running npm install.
- Ensure that your code follows TypeScript syntax and Angular's coding conventions.
- Update Angular CLI and related packages to the latest versions using npm update.

### 2. Dependency Installation Issues

Problem:
You encounter errors or issues during the installation of project dependencies.

Solution:

- Make sure you have Node.js and npm installed on your system. If not, download and install them from the official Node.js website.
- Check your internet connection, as npm relies on the internet to download packages from the npm registry.
- Delete the node_modules folder and package-lock.json file, then run npm install again to reinstall dependencies from scratch.
- Verify that your package.json file is correctly configured and does not contain any syntax errors.

### 3. Linting Errors

Problem:
You receive linting errors or warnings when running linting tasks.

Solution:

- Review the linting errors displayed in the terminal or console, and address them accordingly.
- Run linting tasks with the --fix flag to automatically fix fixable issues: npm run lint -- --fix.
- Ensure that your IDE or code editor is configured to use the appropriate ESLint settings.

### 4. Application Not Loading or Displaying Incorrectly

Problem:
Your Angular application does not load in the browser, or it displays incorrectly.

Solution:

- Check the browser's developer console for any JavaScript errors or warnings.
- Verify that all necessary files (HTML, CSS, JavaScript) are correctly referenced and loaded.
- Ensure that your Angular components, templates, and styles are written correctly and do not contain any syntax errors.
- Check network requests in the browser's developer tools to identify any failed or blocked requests.

### 5. Integration Issues with Third-Party Libraries

Problem:
You encounter issues when integrating third-party libraries or packages into your Angular application.

Solution:

- Refer to the documentation or support resources provided by the third-party library for guidance on integration with Angular.
- Make sure you are using compatible versions of the library with your Angular project.
- Check for any additional configuration or setup required by the library, such as importing modules or configuring services.

### 6. Slow Performance

Problem:
Your development server or application build process is slow or unresponsive.

Solution:

- Close unnecessary applications or processes running on your computer to free up system resources.
- Consider upgrading your hardware (e.g., CPU, RAM) if your system is struggling to handle the workload.
- Optimize your Angular application code, such as reducing unnecessary computations or optimizing asset sizes.
- Use tools like Angular CLI's --prod flag for production builds to enable optimizations and minimize bundle sizes.

### 7. Other Issues

If you encounter any other issues not covered above, feel free to reach out to our support team or community forums for assistance. Provide as much detail as possible, including error messages, steps to reproduce the issue, and any relevant configuration or code snippets.

<!-- Additional Resources start -->

## Additional Resources

### Angular Documentation

- [Official Angular Documentation](https://angular.io/docs): The official documentation for Angular, providing comprehensive guides, tutorials, and references for Angular developers.

### Community Forums and Support

- [Stack Overflow](https://stackoverflow.com/): Ask questions, seek help, and engage with the Angular community on Stack Overflow.
- [Angular Reddit](https://www.reddit.com/): Join discussions, share insights, and stay updated with the latest news and trends in the Angular community on Reddit.

### Angular CLI

- [Angular CLI Documentation](https://angular.io/cli): Explore the official documentation for Angular CLI, including commands, options, and usage examples.

### Continuous Integration and Deployment

- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/): Explore the documentation for GitLab CI/CD, a built-in CI/CD solution provided by GitLab.

### Docker

- [Docker Documentation](https://docs.docker.com/): Dive into the official documentation for Docker, a platform for developing, shipping, and running applications in containers.
- [Docker Compose Documentation](https://docs.docker.com/compose/): Learn how to define and run multi-container Docker applications using Docker Compose.

### Version Control

- [Git Documentation](https://git-scm.com/doc): Explore the official documentation for Git, a distributed version control system used for tracking changes in codebases.
- [GitHub Guides](https://github.com/git-guides): Access guides and resources for using GitHub, a popular platform for hosting and collaborating on Git repositories.

<!-- Appendix start -->

## Appendix

### Glossary

- Angular: A popular open-source web application framework maintained by Google for building dynamic single-page applications (SPAs).
- Angular CLI: A command-line interface for Angular development, providing tools and utilities for creating, building, and testing Angular applications.
- Docker: A platform for developing, shipping, and running applications in containers, providing an efficient and consistent environment across different environments.
- CI/CD: Continuous Integration and Continuous Deployment/Delivery, a set of practices and processes aimed at automating software development, testing, and deployment tasks.
- Git: A distributed version control system used for tracking changes in codebases and collaborating on software development projects.
- GitHub: A web-based hosting service for version control using Git, providing features such as code hosting, collaboration, and project management.
- GitLab: A web-based DevOps lifecycle tool that provides Git repository management, CI/CD pipelines, and project planning features.
- Nginx: A high-performance web server and reverse proxy server commonly used for serving static files and as a frontend proxy for HTTP, HTTPS, and TCP/UDP traffic.
- Angular Material: A UI component library for Angular applications that follows the Material Design guidelines, providing pre-built components for building consistent user interfaces.

### Frequently Asked Questions (FAQ)

- Q: How do I update Angular CLI to the latest version?

  - A: You can update Angular CLI to the latest version using the following command:
    ```bash
    npm install -g @angular/cli@latest
    ```

- Q: How can I generate a new component in my Angular project?

  - A: You can generate a new component using Angular CLI's generate command:
    ```bash
    ng generate component component-name
    ```

- Q: What is the difference between Angular modules and Angular components?

  - A: Angular modules are used to organize the application into cohesive blocks of functionality, while Angular components are the building blocks of Angular applications, representing specific elements of the user interface.

- Q: How do I debug Angular applications?

  - A: You can use browser developer tools, such as Chrome DevTools, for debugging Angular applications. Additionally, you can use Angular CLI's built-in debugging tools and techniques, such as console.log statements and Angular's ng directives.
