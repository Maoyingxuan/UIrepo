import * as React from "react";

/**
 * @internal
 */
export type UseControllableStateOptions<State> = {

  defaultState?: State | (() => State);
  state: State | undefined;
  initialState: State;
};

function isFactoryDispatch<State>(
  newState: React.SetStateAction<State>
): newState is (prevState: State) => State {
  return typeof newState === "function";
}

// 受控以及非受控
export const useControllableState = <State>(
  options: UseControllableStateOptions<State>
): [State, React.Dispatch<React.SetStateAction<State>>] => {
  const [internalState, setInternalState] = React.useState<State>(() => {
    if (options.defaultState === undefined) {
      return options.initialState;
    }
    return isInitializer(options.defaultState)
      ? options.defaultState()
      : options.defaultState;
  });

  const setControlledState = React.useCallback(
    (newState: React.SetStateAction<State>) => {
      if (isFactoryDispatch(newState)) {
        newState(options.state as State);
      }
    },
    [options.state]
  );
  return isControlled(options.state)
    ? [options.state, setControlledState] // 受控组件
    : [internalState, setInternalState]; // 非受控组件
};

function isInitializer<State>(
  value: State | (() => State)
): value is () => State {
  return typeof value === "function";
}

const isControlled = <V>(
  controlledValue: V | undefined
): controlledValue is V => {
  return controlledValue !== undefined;
};
