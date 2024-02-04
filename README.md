<h1 align="center">
  <img src="./fasty-task-server.svg" alt="Fasty-Task Server" width="200">
  <br>
  Fasty-Task Server
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://github.com/standard/semistandard"><img src="https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg" alt="js-semistandard-style"></a>
  <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3"></a>
</p>

The backend for `fasty-task`, an app to manage your scholar life. This backend only deploys an `API`, you will need to connect it to a `MongoDB` database using environment vars and use a compatible client _(see my [official web one](https://github.com/IsmaCortGtz/fasty-task-react))_.

> [!CAUTION]
> The current version is in dev and can break some features.


### Table of Content

- [Documentation](#documentation-)
- [Requirements](#requirements-)
- [Run Locally](#run-locally-%EF%B8%8F)
- [License](#license-)


## Documentation 📕

You can see the documentation [here](./docs/README.md).



## Requirements 📋

`fasty-task-server` need the following to run:
- [Node.js](https://nodejs.org/) v18+ _(you can use [nvm](https://github.com/nvm-sh/nvm))_.
- [npm](https://www.npmjs.com/package/npm) _(normally included with node.js)_.
- MondoDB _(I recomend [MongoDB Atlas](https://www.mongodb.com/atlas/))_.



## Run Locally 🛠️

1. Clone the project

```bash
  git clone https://github.com/IsmaCortGtz/fasty-task-server.git
```

2. Go to the project directory

```bash
  cd fasty-task-server
```

3. Install dependencies

```bash
  npm install
```

4. Config `.env` file using this [guide](./docs/Environment%20Vars.md).

5. Start the server

```bash
  npm run start
```



## License 🚨

This proyect is under the [**GPL v3**](https://www.gnu.org/licenses/gpl-3.0) license.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)