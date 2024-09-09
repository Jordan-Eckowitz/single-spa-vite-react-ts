# Overview

This is a boilerplate setup showing how to use [Single-SPA](https://single-spa.js.org/) with [Vite](https://vitejs.dev/). This is achieved using [vite-plugin-single-spa](https://github.com/WJSoftware/vite-plugin-single-spa). This has been created with Vite React Typescript support in mind but you could expand this to support any other Vite project types.

## Why Use This Approach Instead of the [Single-SPA Recommended Setup](https://single-spa.js.org/docs/recommended-setup/)?

- Single-SPA uses Webpack which becomes very slow to run in development mode as an application scales. Vite uses ESBuild during development, and Rollup for builds, greatly improving performance.
- Vite is constantly being updated to support different frontend frameworks (with best practices out-of-the-box).

## What's Included?

- Root application (`packages/root`)
- Microfrontend application (`packages/mife`)
- Util application (just contains shared dependencies imported into the `mife` application) (`packages/util`)
- Hot Module Reloading (HMR) Support
- Dev mode import map dependencies - `packages/root/src/importmap.dev.json`
- Production mode import map dependencies - `packages/root/src/importmap.json`
- Shared Dev & Production mode NPM import map dependencies - `packages/root/src/importmap.shared.json`

## Vite Configs

The `vite.config.ts` files included in each package have some inputs that you can update as you build out your microfrontends.

- `ENTRY_POINT` - single-spa entry point which contains references to lifecycles and shared exports.
- `PORT` - Port for running local server and build previews - must be unique to each application.
- `APPLICATION_EXTERNALS` - These are single-spa applications, that are imported inside individual applications, as dependencies. These externals are made available within each application via the root config import map. For more details on why this is required see here: https://github.com/WJSoftware/vite-plugin-single-spa/discussions/160.
- `NPM_EXTERNALS` - These are NPM packages, which are imported via the root config import map, in the built environment. They will be excluded from the Rollup builds to reduce the final build size.

## Setup

This has been setup using a [pnpm workspace](https://pnpm.io/workspaces). This monorepo approach is useful for getting started as everything lives in a common repository. This can easily be split up into independent repositories.

To get started first install pnpm if you haven't already.

```bash
npm install -g pnpm
```

Then simply run the install command to finish the setup.

```bash
pnpm install
```

If you haven't already its useful to add the [Single-SPA Browser Extension](https://single-spa.js.org/docs/devtools/#installation-links).

## Commands

### Start all packages

```bash
pnpm start
```

### Build all packages

```bash
pnpm build
```

### Preview all built packages

```bash
pnpm start:build
```
