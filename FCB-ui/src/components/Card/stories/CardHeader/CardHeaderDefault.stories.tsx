import { makeStyles } from "@griffel/react";
import { Button, CardHeader ,Text} from "FCB-ui";
import { MoreHorizontal20Regular } from "fish-ui-sy-react-icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "16px",
  },
  header: {
    width: "300px",
  },
});

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const Default = () => {
  const styles = useStyles();

  const powerpointLogoURL = resolveAsset("pptx.png");

  return (
    <div className={styles.container}>
      <CardHeader
        className={styles.header}
        image={{
          as: "img",
          src: powerpointLogoURL,
          alt: "Microsoft PowerPoint logo",
        }}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
        description={<Text>Developer</Text>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
        description={<Text>Developer</Text>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        image={{
          as: "img",
          src: powerpointLogoURL,
          alt: "Microsoft PowerPoint logo",
        }}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        image={{
          as: "img",
          src: powerpointLogoURL,
          alt: "Microsoft PowerPoint logo",
        }}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
        description={<Text>Developer</Text>}
      />

      <CardHeader
        className={styles.header}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <CardHeader
        className={styles.header}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
        description={<Text>Developer</Text>}
      />

      <CardHeader
        className={styles.header}
        image={{
          as: "img",
          src: powerpointLogoURL,
          alt: "Microsoft PowerPoint logo",
        }}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
      />

      <CardHeader
        className={styles.header}
        header={
          <Text>
            <b>App Name</b>
          </Text>
        }
      />
    </div>
  );
};

export default Default;
