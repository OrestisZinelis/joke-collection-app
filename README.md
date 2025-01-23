# Jokes Collection App

## Description

Get some jokes!!! Choose between random jokes or programming jokes. Read the setup first, and when you're ready, reveal the punchline. Add your favorite jokes to your collection and rate them.

## Features

### Jokes Page

- Fetch 10 random or programming jokes.
- View the setup and reveal the punchline when ready.
- Add jokes to your collection.

### Collection Page

- **Search Functionality**: Search jokes by setup or punchline.
- **Filter by Rating**: Display jokes based on their rating.
- **Sorting**: Sort jokes by rating or alphabetically (by setup).
- **Rate Jokes**: Assign ratings to jokes in your collection.
- **Remove Jokes**: Delete jokes from your collection.
- **Statistics**: View total jokes in the collection and the average rating.

Jokes are saved locally using the `jokes-collection` key in `localStorage`.

## Tech Stack

- **Vue 3** (Script Setup Syntax)
- **TypeScript**
- **Pinia**
- **TailwindCSS**
- **Axios**
- **Vue Router**
- **FontAwesome**
- **Vite**
- **Prettier**
- **ESLint**

## Getting Started

1. Install dependencies:

```sh
npm install
```

2. Run the development server:

```sh
npm run dev
```

3. Open the app in your browser at `http://localhost:5173`.

## Usage

- Navigate to the Jokes page to fetch random or programming jokes.
- Save your favorite jokes to the collection and rate them.
- Go to the Collection page to manage your jokes, search, filter, and view statistics.

## Development

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## License

This project is licensed under the MIT License.
