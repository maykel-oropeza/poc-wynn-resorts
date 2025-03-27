# Poc Wynn Resorts

This is a project created with [Next.js](https://nextjs.org/) with app router + [Mantine](https://mantine.dev/).

## Features

This project was built with the following stack:

- [Nextjs](https://nextjs.org/)
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/) + [Axios](https://axios-http.com/docs/intro) 
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

the project uses node v22.11.0, please ensure you have a the version.

To test locally `npm run dev` is the command

- `dev` – start dev server (Dev Mode).

To make some test and see how It will look in production try first `npm run build` and then `npm run start`

- `start` – run the bundle for production (this needs a build bundle so be sure you ran a build first).
- `build` – bundle application for production.


### Testing scripts

- `test` – runs vitest tests (just once).
- `test:watch` – starts test in watch mode (Await until one test is modified).

### Other scripts

- `lint` – runs ESLint