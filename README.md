# template-next-ts-pwa

[![License](https://img.shields.io/badge/license-MIT-a31f34)](./LICENSE)

A project template for Next.js PWA, with TypeScript.

## Requirements

## Getting Started

Clone this template:

```bash
git clone https://github.com/saltchang/template-next-ts-pwa.git
```

Rename to your app's name:

```bash
cp -r template-next-ts-pwa <your-app>
cd <your-app>
```

Set up the project:

```bash
# replace the project name to yours
sed -i 's/template-next-ts-pwa/<your-app>/g' package.json README.md yarn.lock

# run this if you are on a BSD systems like macOS
sed -i '.bak' 's/template-next-ts-pwa/<your-app>/g' package.json README.md yarn.lock
```

You can also choose to reset the git repository (optional):

```bash
rm -rf .git
git init
```

## Usage

Install the dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn dev
```

Run test:

```bash
yarn test
```

Build the Production package:

```bash
yarn build
```

Run the Production package:

```bash
yarn start
```

Run linting:

```bash
yarn lint

# with fix
yarn lint-fix
```

Format documents:

```bash
yarn format
```
