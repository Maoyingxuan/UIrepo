import { makeStyles } from "@griffel/react";
import {
  FCBProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from "FCB-ui";

const themeMap = {
  webLight: webLightTheme,
  webDark: webDarkTheme,
  teamsLight: teamsLightTheme,
  teamsDark: teamsDarkTheme,
  teamsHC: teamsHighContrastTheme,
};

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Default = ({theme}:{theme: keyof typeof themeMap}) => {
  const styles = useStyles();
  return (
    <>
      <div>
        <FCBProvider className={styles.provider} theme={themeMap[theme]}>
          <div className={styles.text}>Web Light Theme</div>
        </FCBProvider>
      </div>
      {/* <div>
        <FCBProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
        </FCBProvider>
      </div>
      <div>
        <FCBProvider className={styles.provider} theme={webDarkTheme}>
          <div className={styles.text}>webDarkTheme</div>
        </FCBProvider>
      </div>
      <div>
        <FCBProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
        </FCBProvider>
      </div>
      <div>
        <FCBProvider
          className={styles.provider}
          theme={teamsHighContrastTheme}
        >
          <div className={styles.text}>teamsHighContrastTheme</div>
        </FCBProvider>
      </div> */}
    </>
  );
};

Default.args = {
  theme: 'webLight',
};

Default.argTypes = {
  theme: {
    control: 'radio',
    options: Object.keys(themeMap),
    description: '切换主题',
  },
};
