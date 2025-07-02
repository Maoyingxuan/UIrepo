import {
  Button,
  Card,
  CardHeader,
  CardPreview,
  Text,
  tokens,
} from "FCB-ui";
import { MoreHorizontal20Regular } from "fish-ui-sy-react-icons";
import * as React from "react";

import { makeStyles } from "@griffel/react";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  card: {
    width: "360px",
    maxWidth: "100%",
    height: "fit-content",
  },

  section: {
    width: "fit-content",
  },

  title: { margin: "0 0 12px" },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: { margin: "0" },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Title = ({ children }: React.PropsWithChildren<any>) => {
  const styles = useStyles();

  return (
    <Text block className={styles.title}>
       maomao{children}
    </Text>
  );
};

const Orientation = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <Title>'vertical' (Default)</Title>
        <p>With image as part of header</p>

        <Card className={styles.card}>
          <CardHeader
            image={
              <img
                className={styles.headerImage}
                src={resolveAsset("app_logo.svg")}
                alt="App Name Document"
              />
            }
            header={<Text weight="semibold">App Name</Text>}
            description={
              <Text className={styles.caption}>Developer</Text>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More options"
              />
            }
          />

          <p className={styles.text}>
            Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
            Marshmallow pastry jujubes toffee sugar plum.
          </p>
        </Card>
      </section>

      <section className={styles.section}>
        <Title>'horizontal'</Title>
        <p>With image as part of preview</p>

        <Card className={styles.card} orientation="horizontal">
          <CardPreview className={styles.horizontalCardImage}>
            <img
              className={styles.horizontalCardImage}
              src={resolveAsset("app_logo.svg")}
              alt="App Name Document"
            />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">App Name</Text>}
            description={
              <Text className={styles.caption}>Developer</Text>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More options"
              />
            }
          />
        </Card>
      </section>
    </div>
  );
};

export default Orientation;
