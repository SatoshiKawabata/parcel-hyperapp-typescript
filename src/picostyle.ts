import { h, VNode } from "hyperapp";
import picostyle, { Component, StyleProps, Styles } from "picostyle";
let _p: (element: string | Component<object>) =>
  (styles: Styles | StyleProps) => (...children: any[]) => VNode | string | number | null;

if (typeof picostyle !== "function") {
  // tslint:disable-next-line:no-var-requires
  const p = require("picostyle");
  _p = p(h);
} else {
  _p = picostyle(h);
}

export const pstyle = _p;
