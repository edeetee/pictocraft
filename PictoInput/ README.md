# Webpack Starter Template

This is a basic Webpack project template for a web app written in ES6 & LESS.

This assumes you have a directory structure as follows:

```
package.json
webpack.config.js
src/
  index.js
  static/
    index.html
```

---

## Installation

**1. Clone the repo and start your own:**

```sh
git clone git@gist.github.com:3c83db422f03ef66ea36.git
rm -rf .git
git init
```

**2. Install dependencies:**

```sh
npm install
```

That's it.

## Development Workflow

**Start the live-reload dev server:**

```sh
PORT=8080 npm run dev
```

Open up http://localhost:8080/webpack-dev-server/ to see your app.
The app gets reloaded as files change.

## Deployment Workflow

To deploy your static app, upload the contents of `build/` to a web server.

Or, push this repo to heroku. `http-server` is used to serve the files in `build/`.

Or, and like the best option, deploy this to Firebase. Use this [firebase.json](https://gist.github.com/developit/b27ad8af7eacf92d2ef9).