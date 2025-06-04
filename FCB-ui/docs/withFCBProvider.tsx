import { FCBProvider, webLightTheme } from "../src";

export const withFCBProvider = (Story) => {
  const theme = webLightTheme;
  return (
    <FCBProvider>
      <div
        style={{
          padding: "48px 24px",
          backgroundColor: theme.colorNeutralBackground2,
        }}
      >
        <Story />
      </div>
    </FCBProvider>
  );
};
