import { helper } from "./helper";
import "./style.css";
import render from "./render";
import * as monaco from "monaco-editor";
const my = document.getElementById("editor")! as HTMLElement;
let model = monaco.editor.createModel(
  "//start write you code here",
  "javascript"
);

monaco.editor.create(my, {
  value: "function hello() {\n  console.log('Hi')\n",
  model: model,
  theme: "vs-dark",
});

let value = model.getValue();
console.log(value)


let Element = render({
  NodeName: "h1",
  props: { ClassName: "heading" },
  children: ["name"],
});

let list = [
  {
    NodeName: "h1",
    props: { ClassName: "heading" },
    children: ["name"],
  },
  {
    NodeName: "p",
    props: { ClassName: "paragraph" },
    children: ["this is the long paragrah may  be this one work man"],
  },
  {
    NodeName: "div",
    props: { ClassName: "div" },
    children: ["this is the div Element"],
  },
  {
    NodeName: "section",
    props: { ClassName: "section" },
    children: ["this is the section Element"],
  },
];

let maped = list.map((Element) => {
  document.body.appendChild(render(Element));
});

document.body.appendChild(Element);
