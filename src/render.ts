type VNode =
  | string
  | {
      NodeName: string;
      props?: { ClassName: string };
      children: Array<string>;
    };
const render = (VNode: VNode) => {
  if (typeof VNode == "string") {
    return document.createTextNode(VNode);
  }

  let Element = document.createElement(VNode.NodeName);

  let attribute: { [key: string]: string } = VNode.props || {};

  Object.keys(attribute).forEach((k) => Element.setAttribute(k, attribute[k]));

  (VNode.children || []).forEach((E) => Element.appendChild(render(E)));

  return Element;
};

export default render;
