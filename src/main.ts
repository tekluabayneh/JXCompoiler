import { helper } from "./helper";
import render from "./render";

console.log(helper("h1", { ClassName: "name" }, "name"));
console.log(
  render({
    NodeName: "h1",
    props: { ClassName: "heading" },
    children: ["name"],
  })
);
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
  { NodeName: "p", props: { ClassName: "paragraph" }, children: ["this is the long paragrah may  be this one work man"] },
  { NodeName: "div", props: { ClassName: "div" }, children: ["this is the div Element"] },
  { NodeName: "section", props: { ClassName: "section" }, children: ["this is the section Element"] },
];

let maped = list.map((Element) => {
  document.body.appendChild(render(Element));
});
document.body.appendChild(Element);
