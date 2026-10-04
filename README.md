# LinkedIn Clone Frontend

A React + Tailwind CSS landing page inspired by LinkedIn’s homepage and core marketing sections. The project is structured as a clean frontend starter with reusable components and a lightweight production-ready setup.

## Features

- Responsive LinkedIn-style landing page
- Header navigation with action buttons
- Primary sign-in form and CTA sections
- Article and job exploration blocks
- Tailwind-based styling for fast UI iteration
- Clean, reusable component structure

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Font Awesome icons
- Create React App

## Project Structure

```bash
src/
  App.js
  App.css
  index.css
  index.js
  components/
    Header.js
    Footer.js
    Layout.js
    Section.js
public/
  index.html
  favicon.ico
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open http://localhost:3000 in your browser.

## Production Build

```bash
npm run build
```

This generates a production-ready build in the `build` folder.

## Deploy to GitHub Pages

The `main` branch is deployed automatically to GitHub Pages by the workflow in
`.github/workflows/deploy.yml`, which configures Pages and publishes the app on
each push to `main`:

https://riteshnegi08.github.io/Linkedin-clone/

## Notes

- The project was cleaned up to remove default CRA boilerplate and unused assets.
- The app follows a standard React frontend structure suitable for a portfolio or learning project.
- Tailwind is configured for reusable, scalable styling.

## Scripts

- `npm start` - run the app locally
- `npm run build` - create a production build
- `npm test` - run tests if added later

## License

This project is for educational and portfolio use.
