import * as React from "react";

/**
 * @internal
 * Allows a component to be tagged as a FishUI trigger component.
 *
 * Triggers are special-case components: they attach event listeners and other props on their child,
 * and use them to trigger another component to show. Examples include `MenuTrigger` and `Tooltip`.
 *
 * A component can be tagged as a trigger as follows:
 * ```ts
 * const MyComponent: React.FC<MyComponentProps> & FcbTriggerComponent = ...;
 *
 * MyComponent.isFcbTriggerComponent = true; // MUST also set this to true
 * ```
 */
export type FcbTriggerComponent = {
  isFcbTriggerComponent?: boolean;
};

/**
 * A trigger may have a children that could be either:
 * 1. A single element
 * 2. A render function that will receive properties and must return a valid element or null
 * 3. null or undefined
 */
export type TriggerProps<TriggerChildProps = unknown> = {
  children?:
    | React.ReactElement
    | ((props: TriggerChildProps) => React.ReactElement | null)
    | null;
};
