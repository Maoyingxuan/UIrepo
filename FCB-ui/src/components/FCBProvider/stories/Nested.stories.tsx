import { FCBProvider,tokens } from "FCB-ui";

import { makeStyles } from "@griffel/react";

const useStyles = makeStyles({
  example: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    border: `5px solid ${tokens.colorBrandStroke1}`,
    borderRadius: "5px",
    margin: "5px",
  },
  text: {
    padding: "5px",
    fontSize: "18px",
  },
});

export const Nested = () => {
  const styles = useStyles();
  return (
    <FCBProvider>
      <div className={styles.example}>
        <div className={styles.text}>Web Light Theme using brand tokens</div>
        <FCBProvider
          theme={{
            colorBrandStroke1: "red",
            colorBrandBackground2: "green",
            colorBrandForeground2: "yellow",
            // 更多的 theme 属性
          }}
        >
          <Child />
        </FCBProvider>
        <Child />
      </div>
    </FCBProvider>
  );
};

function Child() {
  const styles = useStyles();
  return (
    <div className={styles.example}>
      <div className={styles.text}>
        Child Nested FcbProvider with partial theme
      </div>
    </div>
  );
}