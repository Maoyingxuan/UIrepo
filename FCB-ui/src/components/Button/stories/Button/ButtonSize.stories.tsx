import { Button } from "FCB-ui";
import { CalendarMonthRegular } from "fish-ui-sy-react-icons";

import { makeStyles } from "@griffel/react";

const useStyles = makeStyles({
  innerWrapper: {
    alignItems: "start",
    columnGap: "15px",
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    minWidth: "min-content",
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Button size="small">Small</Button>
        <Button size="small" icon={<CalendarMonthRegular />}>
          Small with calendar icon
        </Button>
      </div>
      <div className={styles.innerWrapper}>
        <Button>Medium</Button>
        <Button icon={<CalendarMonthRegular />}>
          Medium with calendar icon
        </Button>
      </div>
      <div className={styles.innerWrapper}>
        <Button size="large">Large</Button>
        <Button size="large" icon={<CalendarMonthRegular />}>
          Large with calendar icon
        </Button>
      </div>
    </div>
  );
};
export default Size;
