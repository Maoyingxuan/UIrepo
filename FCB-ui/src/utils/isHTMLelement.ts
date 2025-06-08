export function isHTMLElement<
  ConstructorName extends HTMLElementConstructorName = "HTMLElement",
>(
  element?: unknown,
  options?: {
    constructorName?: ConstructorName;
  }
): element is InstanceType<(typeof globalThis)[ConstructorName]> {
  const typedElement = element as Node | null | undefined;
  return Boolean(
    typedElement?.ownerDocument?.defaultView &&
      typedElement instanceof
        typedElement.ownerDocument.defaultView[
          options?.constructorName ?? "HTMLElement"
        ]
  );
}
type HTMLElementConstructorName =
  | "HTMLElement"
  | "HTMLAnchorElement"
  | "HTMLAreaElement"
  | "HTMLAudioElement"
  | "HTMLBaseElement"
  | "HTMLBodyElement"
  | "HTMLBRElement"
  | "HTMLButtonElement"
  | "HTMLCanvasElement"
  | "HTMLDataElement"
  | "HTMLDataListElement"
  | "HTMLDetailsElement"
  // NOTE: dialog is not supported in safari 14, also it was removed from lib-dom starting typescript 4.4
  // | 'HTMLDialogElement'
  | "HTMLDivElement"
  | "HTMLDListElement"
  | "HTMLEmbedElement"
  | "HTMLFieldSetElement"
  | "HTMLFormElement"
  | "HTMLHeadingElement"
  | "HTMLHeadElement"
  | "HTMLHRElement"
  | "HTMLHtmlElement"
  | "HTMLIFrameElement"
  | "HTMLImageElement"
  | "HTMLInputElement"
  | "HTMLModElement"
  | "HTMLLabelElement"
  | "HTMLLegendElement"
  | "HTMLLIElement"
  | "HTMLLinkElement"
  | "HTMLMapElement"
  | "HTMLMetaElement"
  | "HTMLMeterElement"
  | "HTMLObjectElement"
  | "HTMLOListElement"
  | "HTMLOptGroupElement"
  | "HTMLOptionElement"
  | "HTMLOutputElement"
  | "HTMLParagraphElement"
  | "HTMLParamElement"
  | "HTMLPreElement"
  | "HTMLProgressElement"
  | "HTMLQuoteElement"
  | "HTMLSlotElement"
  | "HTMLScriptElement"
  | "HTMLSelectElement"
  | "HTMLSourceElement"
  | "HTMLSpanElement"
  | "HTMLStyleElement"
  | "HTMLTableElement"
  | "HTMLTableColElement"
  | "HTMLTableRowElement"
  | "HTMLTableSectionElement"
  | "HTMLTemplateElement"
  | "HTMLTextAreaElement"
  | "HTMLTimeElement"
  | "HTMLTitleElement"
  | "HTMLTrackElement"
  | "HTMLUListElement"
  | "HTMLVideoElement";
