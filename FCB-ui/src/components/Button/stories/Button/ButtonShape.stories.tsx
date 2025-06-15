import { makeStyles } from "@griffel/react";
import { Button } from "FCB-ui";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

const Shape = () => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <Button>Rounded</Button>
      <Button shape="circular">Circular</Button>
      <Button shape="square">Square</Button>
    </div>
  );
};

export default Shape;
