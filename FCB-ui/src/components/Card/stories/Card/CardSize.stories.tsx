import {
  Card,
  CardHeader,
  type CardProps,
  Text,
  tokens,
} from "FCB-ui";
import * as React from "react";

import { makeStyles, mergeClasses } from "@griffel/react";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    columnGap: "16px",
    rowGap: "36px",
  },

  title: { margin: "0 0 12px" },

  card: {
    width: "300px",
    maxWidth: "100%",
    height: "fit-content",
  },

  flex: {
    gap: "4px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  appIcon: {
    borderRadius: "4px",
    height: "32px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  cardFooter: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Title = ({ children }: React.PropsWithChildren<{}>) => {
  const styles = useStyles();

  return (
    <Text block className={styles.title}>
      {children}
    </Text>
  );
};

const CardExample = (props: CardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} {...props}>
      <header className={styles.flex}>
        <img
          className={styles.appIcon}
          src={resolveAsset("logo.svg")}
          alt="Application one logo"
        />
        <img
          className={styles.appIcon}
          src={resolveAsset("logo2.svg")}
          alt="Application two logo"
        />
      </header>

      <CardHeader
        header={
          <Text weight="semibold">
            Alert in Teams when a new document is uploaded in channel
          </Text>
        }
        description={
          <Text className={styles.caption}>By Microsoft</Text>
        }
      />

      <footer className={mergeClasses(styles.flex, styles.cardFooter)}>
        <span>Automated</span>
        <span>3290</span>
      </footer>
    </Card>
  );
};

const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section>
        <Title>'small'</Title>
        <CardExample size="small" />
      </section>

      <section>
        <Title>'medium' (Default)</Title>
        <CardExample size="medium" />
      </section>

      <section>
        <Title>'large'</Title>
        <CardExample size="large" />
      </section>
    </div>
  );
};

export default Size;
