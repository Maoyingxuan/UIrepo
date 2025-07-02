import { type ForwardRefComponent } from "FCB-ui";
import * as React from "react";

import { CardProps } from "./Card.types";
import { useCardStyles } from "./useCardStyles.styles";

/**
 * A card provides scaffolding for hosting actions and content for a single topic.
 */
export const Card: ForwardRefComponent<CardProps> = React.forwardRef(
  (props, ref) => {
    const { children, ...restProps } = props;
    const styles = useCardStyles(props);

    return (
      <div
        {...restProps}
        ref={ref as React.Ref<HTMLDivElement>}
        className={styles.root}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
