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
