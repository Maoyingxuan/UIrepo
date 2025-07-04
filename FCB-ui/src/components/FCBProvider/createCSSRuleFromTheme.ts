import type { PartialTheme,Theme } from "FCB-ui";

/**
 * 根据theme，创建一个css规则，
 * .fcb-ui-FCB {
 *    --borderRadiusNone: 0;
 *    --borderRadiusSmall: 2px;
 *    略...
 * }
 */

export function createCSSRuleFromTheme(
  selector: string,
  theme: Theme | PartialTheme | undefined
): string {
  if (theme) {
    const cssVarsAsString = (
      Object.keys(theme) as (keyof typeof theme)[]
    ).reduce((cssVarRule, cssVar) => {
      return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
    }, "");

    return `${selector} { ${cssVarsAsString} }`;
  }

  return `${selector} {}`;
}
