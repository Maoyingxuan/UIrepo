import { Button } from "FCB-ui";
import { makeStyles } from "@griffel/react";


const useClasses = makeStyles({
  root: {
    backgroundColor: "red",
    padding: "100px",
    // border: `10px solid ${tokens.colorNeutralForeground1}`
    border: '10px solid pink',
  },
});

export const Custom = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button primary label="Button" />
    </div>
  );
};
