# Poc Wynn Resorts

This is a project created with [Next.js](https://nextjs.org/) with app router + [Mantine](https://mantine.dev/).

## Stack Tech

This project was built with the following stack:

- [Nextjs](https://nextjs.org/)
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/) + [Axios](https://axios-http.com/docs/intro) 
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## Installation

Before starting, you need to have Node.js and npm (Node Package Manager) installed on your computer. If you don't have them yet, you can download and install Node.js from https://nodejs.org. Installing Node.js will also install npm.
the project uses node v22.11.0

1) Clone the repository
2) Go to the folder cloned
3) Install the dependencies with `npm install` command. This installs all the dependencies listed in the package.json file.
4) execute the comamnd `npm run dev` this should start the server in your local machine.

## npm scripts

### Build and dev scripts

the project uses node v22.11.0, please ensure you have that specifc version you can use [NVM](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to support multiples versions of node in you local machine.

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


## Features

- Internationalization Selector (By default is taking the most popular 15 languages) taking en consideration the route.
  <img width="2056" alt="Screenshot 2025-03-27 at 3 53 29 PM" src="https://github.com/user-attachments/assets/57f05940-0070-413d-b069-a6b3a7345199" />

- Defaults links will redirect to under construction sections.
  <img width="2056" alt="Screenshot 2025-03-27 at 3 54 08 PM" src="https://github.com/user-attachments/assets/70b6412d-ac93-4b28-b2e0-63bd1a229474" />

- Form Register Step 1.
  ![Wynn-Resorts-Test--03-27-2025_03_57_PM](https://github.com/user-attachments/assets/99d7b723-b193-4195-a862-200fa8213336)

- Form Register Errors  
  ![Wynn-Resorts-Test--03-27-2025_03_58_PM](https://github.com/user-attachments/assets/6653a4c3-e744-4557-acf3-66ae51b08b87)

- Form Register Step 2
  By default it's selected email option.

  ![Wynn-Resorts-Test--03-27-2025_04_00_PM](https://github.com/user-attachments/assets/dc0a2976-3f98-46b4-9691-b816152a4e9e)

  A notification will apear once the request with the mock respond with 200 success code.
  <img width="2056" alt="Screenshot 2025-03-27 at 4 03 09 PM" src="https://github.com/user-attachments/assets/2b9cc8a9-faf9-4abf-b9ea-c5194a717add" />

- Form Register Step 3.
  Important Note: Since we don't have a real backend implementation you can use any code of 4 digits to complete the registration
  <img width="2056" alt="Screenshot 2025-03-27 at 4 07 44 PM" src="https://github.com/user-attachments/assets/59d13de3-7fb7-4805-8fcf-4ab7743b36f1" />

  Note: you can click in the link to resend the code, this will hit the server again for a new code, you can see the request in the network, again any code of 4 digits will work.

  once the code is verified in the system (faking right now this part, the system is now able to thegister the user and comple the registration).
  
- Success completition of the form.
  <img width="2056" alt="Screenshot 2025-03-27 at 4 05 24 PM" src="https://github.com/user-attachments/assets/a98b5753-8af9-4137-a5e9-9000dfcf812b" />

- Responsiveness: Some Examples
  - Mobile Menu 
  <img width="635" alt="Screenshot 2025-03-27 at 4 45 17 PM" src="https://github.com/user-attachments/assets/9705a5a2-210b-400a-858d-d8a46fa55e6f" />

  - Register Page
  
  ![Wynn-Resorts-Test--03-27-2025_04_45_PM (1)](https://github.com/user-attachments/assets/fabdeaa7-3f26-4115-9a58-6179a6bf1035)

## Features

The theme selector was not part of the initial scope, but a mechanism was implemented to change the theme without a button in the UI, the way to change between themes is through the combination of keys `ctrl+t`. 

<img width="2056" alt="Screenshot 2025-03-27 at 4 39 30 PM" src="https://github.com/user-attachments/assets/08bed249-efc7-4326-996b-fce3dc21b3c8" />




  


