import type {
  HorizontalSpacingTokens,
  VerticalSpacingTokens,
} from "FCB-ui";
import { teamsLightTheme } from "FCB-ui";

const theme = teamsLightTheme;

const SpacingHorizontal = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "auto auto 1fr",
      gap: "10px",
      alignItems: "center",
    }}
  >
    {(
      Object.keys(theme).filter((tokenName) =>
        tokenName.startsWith("spacingHorizontal")
      ) as (keyof HorizontalSpacingTokens)[]
    ).map((spacingToken) => [
      <div key={spacingToken}>{spacingToken}</div>,
      <div key={`${spacingToken}-value`}>{theme[spacingToken]}</div>,
      <div
        key={`${spacingToken}-demo`}
        style={{
          width: theme[spacingToken],
          height: "2em",
          background: "#00CC6A",
        }}
      />,
    ])}
  </div>
);

const SpacingVertical = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "auto auto 1fr",
      gap: "10px",
      alignItems: "center",
    }}
  >
    {(
      Object.keys(theme).filter((tokenName) =>
        tokenName.startsWith("spacingVertical")
      ) as (keyof VerticalSpacingTokens)[]
    ).map((spacingToken) => [
      <div key={spacingToken}>{spacingToken}</div>,
      <div key={`${spacingToken}-value`}>{theme[spacingToken]}</div>,
      <div
        key={`${spacingToken}-demo`}
        style={{
          height: theme[spacingToken],
          width: "20em",
          background: "#CC006A",
        }}
      />,
    ])}
  </div>
);

export const Spacing = () => (
  <>
    <h2>Vertical</h2>
    <SpacingVertical />
    <h2>Horizontal</h2>
    <SpacingHorizontal />
  </>
);

export default {
  title: "主题/spacing",
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: false,
      },
    },
  },
};
