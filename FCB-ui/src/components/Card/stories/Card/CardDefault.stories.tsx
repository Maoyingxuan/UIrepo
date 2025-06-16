
import { ArrowReplyRegular, ShareRegular } from "fish-ui-sy-react-icons";
import { Card, CardFooter, CardHeader, CardPreview , Button, Text} from "FCB-ui";
import { makeStyles } from "@griffel/react";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
  },
});

const Default = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <img
            src={resolveAsset("avatar_elvia.svg")}
            alt="Elvia Atkins avatar picture"
          />
        }
        header={
          <Text>
            <b>Elvia Atkins</b> mentioned you
          </Text>
        }
        description={<Text>5h ago · About us - Overview</Text>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset("doc_template.png")}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
};

export default Default;
