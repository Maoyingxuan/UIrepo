import type { ForwardRefComponent } from 'FCB-ui';
import React from 'react';

import { mergeClasses } from '@griffel/react';

import { textClassNames, useTextStyles } from './useTextStyles.styles';
export type Textprops =  React.HTMLAttributes<HTMLDivElement> &  {
    /**
   * 父容器对齐
   *
   * @default start
   */
  align?: "start" | "center" | "end" | "justify";

  /**
   * 应用块显示
   *
   * @default false
   */
  block?: boolean;

  /**
   * 字体
   *
   * @default base
   */
  font?: "base" | "monospace" | "numeric";

  /**
   * 斜体
   *
   * @default false
   */
  italic?: boolean;

  /**
   * 字号
   *
   * @default 300
   */
  size?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

  /**
   * 删除线
   *
   * @default false
   */
  strikethrough?: boolean;

  /**
   * 截断
   *
   * @default false
   */

  truncate?: boolean;

  /**
   * 下划线
   *
   * @default false
   */
  underline?: boolean;

  /**
   * 字重
   *
   * @default regular
   */
  weight?: "regular" | "medium" | "semibold" | "bold";

  /**
   * 换行
   *
   * @default true
   */
  wrap?: boolean;
}
export const Text: ForwardRefComponent<Textprops> = React.forwardRef((
  {
    align = "start",
    block = false,
    font = "base",
    italic = false,
    size = 300,
    strikethrough = false,
    truncate = false,
    underline = false,
    weight = "regular",
    wrap = true,
    className,
    children,
    ...rest
  },
  ref
) => {
  const styles = useTextStyles()
  return (
    <span
      ref = {ref as React.Ref<HTMLHeadingElement & HTMLPreElement>}
      className={
        mergeClasses(
          textClassNames.root,
          styles.root,
          wrap === false && styles.nowrap,
          truncate && styles.truncate,
          block && styles.block,
          italic && styles.italic,
          underline && styles.underline,
          strikethrough && styles.strikethrough,
          underline && strikethrough && styles.strikethroughUnderline,
          size === 100 && styles.base100,
          size === 200 && styles.base200,
          size === 400 && styles.base400,
          size === 500 && styles.base500,
          size === 600 && styles.base600,
          size === 700 && styles.hero700,
          size === 800 && styles.hero800,
          size === 900 && styles.hero900,
          size === 1000 && styles.hero1000,
          font === "monospace" && styles.monospace,
          font === "numeric" && styles.numeric,
          weight === "medium" && styles.weightMedium,
          weight === "semibold" && styles.weightSemibold,
          weight === "bold" && styles.weightBold,
          align === "center" && styles.alignCenter,
          align === "end" && styles.alignEnd,
          align === "justify" && styles.alignJustify,
          className,
        )
      }
      {...rest}
    >{children}</span>
  );
})
