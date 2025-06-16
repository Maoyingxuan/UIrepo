import {  Button } from "FCB-ui";
import {
  ArrowReply16Regular,
  MoreHorizontal20Regular,
  Share16Regular,
} from "fish-ui-sy-react-icons";
import { CardFooter } from "FCB-ui";
import { makeStyles } from "@griffel/react";

const useStyles = makeStyles({
  footer: {
    width: "300px",
  },
});

const Default = () => {
  const styles = useStyles();

  return (
    <CardFooter
      className={styles.footer}
      action={
        <Button appearance="transparent" icon={<MoreHorizontal20Regular />} />
      }
    >
      <Button icon={<ArrowReply16Regular />}>Reply</Button>
      <Button icon={<Share16Regular />}>Share</Button>
    </CardFooter>
  );
};

export default Default;
