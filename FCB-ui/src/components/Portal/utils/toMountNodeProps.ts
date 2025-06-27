import { type PortalProps } from "FCB-ui";

function isHTMLElement(node: any): node is HTMLElement {
  return typeof HTMLElement === "object"
    ? node instanceof HTMLElement
    : node && typeof node === "object" && node !== null && node.nodeType === 1 && typeof node.nodeName === "string";
}

/**
 * The function that normalizes the `mountNode` prop into an object with element and className props.
 *
 * @param mountNode - an HTML element or an object with props
 */
export function toMountNodeProps(mountNode: PortalProps["mountNode"]): {
  element?: HTMLElement | null;
  className?: string;
} {
  if (isHTMLElement(mountNode)) {
    return { element: mountNode };
  }

  if (typeof mountNode === "object") {
    if (mountNode === null) {
      return { element: null };
    }

    return mountNode;
  }

  return {};
}
