import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import { cssLifecycleFactory } from "vite-plugin-single-spa/ex";

const lc = singleSpaReact({
  React,
  ReactDOMClient,
  errorBoundary(err: any, _info: any, _props: any) {
    return <div>Error: {err}</div>;
  },
  // use loadRootComponent attribute, instead of rootComponent, to ensure preamble code is injected into the root component before mounting.
  // see vite.config.ts for details on the preamble.
  loadRootComponent: async () => {
    const { default: App } = await import("./App");
    return App;
  },
});
// IMPORTANT:  Because the file is named spa.tsx, the string 'spa'
// must be passed to the call to cssLifecycleFactory.
const cssLc = cssLifecycleFactory("spa" /* optional factory options */);
export const bootstrap = [cssLc.bootstrap, lc.bootstrap];
export const mount = [cssLc.mount, lc.mount];
export const unmount = [cssLc.unmount, lc.unmount];
