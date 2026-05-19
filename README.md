# MecafuturoApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deploy to GitHub Pages (GitHub Actions)

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### How it works

- On every push to `main`, the workflow installs dependencies and builds the app.
- The build uses a dynamic `base-href` based on the repository name.
- The generated files in `dist/mecafuturo-app` are published to GitHub Pages.
- A `404.html` copy of `index.html` is created to support Angular SPA fallback.

### First-time setup (GitHub)

1. Open your repository on GitHub.
2. Go to **Settings > Pages**.
3. In **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push changes to the `main` branch.
5. Wait for the workflow **Deploy Angular to GitHub Pages** to finish.

### Workflow location

- `.github/workflows/deploy-gh-pages.yml`

### Published URL

For repository `OWNER/mecafuturo-app`, your site URL will be:

`https://OWNER.github.io/mecafuturo-app/`
