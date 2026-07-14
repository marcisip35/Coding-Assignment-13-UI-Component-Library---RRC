# Marc Isip Component Library

## Build in Localhost

## 1. Clone

```bash
https://github.com/marcisip35/Coding-Assignment-13-UI-Component-Library---RRC.git
```

## 2. Build with Docker

Build the Docker image:

```bash
docker build -t isip_marc_coding_assignment13 .
```

Run the Docker container:

```bash
docker run -d --name isip_marc_coding_assignment13 -p 8018:80 isip_marc_coding_assignment13
```

Open:

```txt
http://localhost:8018
```

or:

```txt
http://127.0.0.1:8018
```

## Docker details

Container name:

```txt
isip_marc_coding_assignment13
```

Working directory:

```txt
/isip_marc_ui_garden_build_checks
```

## Local Setup

Run these commands inside the project folder:

```bash
npm install
```

Installing also sets up the Husky pre-commit hooks.

```bash
npm start
```

Open:

```txt
http://localhost:3000
```

## Testing the checks

Check formatting with Prettier:

```bash
npm run format:check
```

Fix formatting:

```bash
npm run format
```

Run ESLint:

```bash
npm run lint
```

Run the component tests:

```bash
npm test
```

Test the Husky pre-commit hook by breaking the formatting in any file, for example adding extra spaces in a component, then trying to commit:

```bash
git add .
git commit -m "test"
```

The format check fails and the commit is blocked. Run `npm run format` to fix the file and commit again.

Test the GitHub Actions workflow by skipping the local hook and pushing the bad file anyway:

```bash
git commit --no-verify -m "test"
git push
```

The workflow runs on GitHub, the format check fails, and the build shows as failed in the Actions tab. GitHub also sends an email about the failed run.

## Assignment Steps

### 1. Prettier

Installed Prettier as a dev dependency with an exact version:

```bash
npm install --save-dev --save-exact prettier
```

Added a `.prettierrc` file for the config and a `.prettierignore` file so Prettier skips generated folders like build and coverage.

Added two scripts to package.json:

```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

### 2. ESLint

Create React App already comes with ESLint, so nothing new was installed. The only change was adding a lint script to package.json:

```json
"lint": "eslint src --ext .ts,.tsx"
```

### 3. Tests

The test script from assignment 12 already runs all component tests once and exits, so it works in the hook and the workflow without changes.

### 4. Husky

Installed Husky and set it up:

```bash
npm install --save-dev husky
npx husky init
```

This creates a `.husky/pre-commit` file and adds a prepare script to package.json so the hooks activate on npm install.

The pre-commit file runs these checks in order:

```bash
npm run format:check
npm run lint
npm test
```

If any check fails, the commit is blocked.

### 5. GitHub Actions

Added a workflow file at `.github/workflows/ci-pipeline.yml`. Every push to main runs the same three checks.

If a check fails, the build is marked as failed and GitHub sends an email. This catches commits even if the local hooks were skipped.

## About the project

The project was made with React, TypeScript, Storybook, styled-components, Prettier, ESLint, Husky, GitHub Actions, and Docker.

## Components

The project includes these components:

- Button
- Label
- Text
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter
- Dropdown
- RadioButton
- Img
- HeroImage
- Card

Each component has its own folder in:

```txt
src/components
```

## Run Storybook

```bash
npm run storybook
```

Open:

```txt
http://localhost:6006
```
