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
  // a util application just serves as a "package" with shared dependencies that will be used in other applications
  // therefore, no root component is needed
  rootComponent: () => null,
});
// IMPORTANT:  Because the file is named spa.tsx, the string 'spa'
// must be passed to the call to cssLifecycleFactory.
const cssLc = cssLifecycleFactory("spa" /* optional factory options */);
export const bootstrap = [cssLc.bootstrap, lc.bootstrap];
export const mount = [cssLc.mount, lc.mount];
export const unmount = [cssLc.unmount, lc.unmount];

/**
 * shared dependencies
 * these can be imported in other applications in this format:
 * import { title } from "@demo/util";
 */
export { title, DummyComponent } from "./utils";
