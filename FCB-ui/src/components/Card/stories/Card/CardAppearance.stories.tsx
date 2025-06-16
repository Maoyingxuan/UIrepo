import * as React from "react";
import {
  tokens,
  Button,
  Text,
  Card,
  CardHeader,
  type CardProps,
} from "FCB-ui";
import { MoreHorizontal20Regular } from "fish-ui-sy-react-icons";
import { makeStyles, mergeClasses } from "@griffel/react";

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

  title: { margin: "0 0 12px" },

  description: { margin: "0 0 12px" },

  card: {
    width: "480px",
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  logo: {
    borderRadius: "4px",
    width: "48px",
    height: "48px",
  },

  text: { margin: "0" },
});

const ExampleHeader = ({ title, description }: Record<string, string>) => {
  const styles = useStyles();

  return (
    <header>
      {title ? (
        <Text block className={styles.title}>
          {title}
        </Text>
      ) : null}

      {description ? (
        <Text block className={styles.description}>
          {description}
        </Text>
      ) : null}
    </header>
  );
};

const CardExample = ({ className, ...props }: CardProps) => {
  const styles = useStyles();

  const onClick = React.useCallback(() => console.log("Interactive!"), []);

  return (
    <Card
      {...props}
      className={mergeClasses(className, styles.card)}
      onClick={onClick}
    >
      <CardHeader
        image={
          <img
            className={styles.logo}
            src={resolveAsset("app_logo.svg")}
            alt="App name logo"
          />
        }
        header={<Text weight="semibold">App Name</Text>}
        description={<Text className={styles.caption}>Developer</Text>}
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
  );
};

const Appearance = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section>
        <ExampleHeader
          title="Filled (Default)"
          description="This is the default style to use for cards. Use this style variant for most of your card
          designs."
        />
        <CardExample />
      </section>

      <section>
        <ExampleHeader
          title="Filled Alternative"
          description="Use if your card is being displayed on a lighter gray or white surface. This ensures that you
          have adequate contrast between the card surface and the background of the application."
        />
        <CardExample appearance="filled-alternative" />
      </section>

      <section>
        <ExampleHeader
          title="Outline"
          description="Use when you don't want a filled background color but a discernable outline (border) on the
          card."
        />
        <CardExample appearance="outline" />
      </section>

      <section>
        <ExampleHeader
          title="Subtle"
          description="This variant doesn't have a background or border for the card container. However, it does include
          interaction states that display a visible footprint when interacting with the card item."
        />
        <CardExample appearance="subtle" />
      </section>
    </div>
  );
};

export default Appearance;
