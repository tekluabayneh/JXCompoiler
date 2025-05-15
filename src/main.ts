import "./style.css";
import render from "./render";
import * as monaco from "monaco-editor";
const my = document.getElementById("editor")! as HTMLElement;
const showBtn = document.getElementById("ResultBtn")! as HTMLButtonElement;
let HTMLElementShow = document.querySelector(".Result")! as HTMLElement;

const toggleShowResult = () => {
  HTMLElementShow.classList.toggle("Result_show");
};
showBtn.addEventListener("click", toggleShowResult);

let model = monaco.editor.createModel(
  `{
NodeName:'h1',
props:{ClassName:'heading'},
children:["This is a default text from Teklu!"],
}`,
  "javascript"
);

let editor = monaco.editor.create(my, {
  value: "function hello() {\n  console.log('Hi')\n",
  model: model,
  theme: "vs-dark",
});

editor.onDidChangeModelContent(() => {
  let value = editor.getValue();
  let ReactObject = eval("(" + value + ")");
  let renderValue = render(ReactObject);
  document.querySelector(".Result")!.appendChild(renderValue);
});

let defaultObject = {
  NodeName: "p",
  props: { ClassName: "heading" },
  children: ["This is a default text from Teklu!"],
};

let defaultElement = render(defaultObject);
document.querySelector(".Result")!.appendChild(defaultElement);
