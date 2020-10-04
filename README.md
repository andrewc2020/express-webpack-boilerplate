## Expack - Express and Webpack Boilerplate
Expack is the bare-bones Express and Webpack boilerplate with ES6+ babel transpilation, ESLint linting, Hot Module Reloading, and Jest test framework enabled.

Worked example from Ben Grunfield's great article https://medium.com/@binyamin/creating-an-react-express-webpack-boilerplate-application-667d7dc28cad

Alternatively download his git repository

git clone https://github.com/bengrunfeld/expack.git

# Expack has two build modes: Development and Production.

When you run npm run buildDev, Javascript, HTML, and CSS files are unminified and not uglified, meaning that you can easily inspect them in Chrome Dev Tools. Hot Module Reloading is enabled via webpack-dev-middleware and webpack-hot-middleware.

When you run npm run buildProd, Javascript, HTML, and CSS files are all minified and uglified, and images are encoded as Base64 directly into your CSS file, which results in less calls to the server for image files.

# Installation & Usage
git clone https://github.com/andrewc2020/express-webpack-boilerplate.git
cd expack
npm install

npm run buildDev        // for development
    // OR
npm run buildProd

npm start               // navigate to localhost:8080 for local dev
For testing
npm test                // runs test
npm run coverage        // generates a coverage report


