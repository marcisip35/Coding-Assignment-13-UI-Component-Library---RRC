# Marc Isip UI Garden

## Clone 

```bash
https://github.com/marcisip35/Coding-Assignment-12-Web-Component-Library---RRC.git
```

## Local Setup

Run these commands inside the project folder:

```bash
npm install
```

```bash
npm start
```

Open:

```txt
http://localhost:3000
```

## Run Storybook

```bash
npm run storybook
```

Open:

```txt
http://localhost:6006
```

## Run tests

```bash
npm test
```

## Build the app

```bash
npm run build
```

## Build with Docker

Build the Docker image:

```bash
docker build -t isip_marc_assignment12 .
```

Run the Docker container:

```bash
docker run --name isip_marc_coding_assignment12 -p 8083:80 isip_marc_assignment12
```

Open:

```txt
http://localhost:8083
```

or:

```txt
http://127.0.0.1:8083
```

## Docker details

Container name:

```txt
isip_marc_coding_assignment12
```

Working directory:

```txt
/isip_marc_ui_garden
```

## About the project

The project was made with React, TypeScript, Storybook, styled-components, and Docker.

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
