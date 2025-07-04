import { Button } from "FCB-ui";
import { CalendarMonthRegular } from "fish-ui-sy-react-icons";

import { makeStyles } from "@griffel/react";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

const Icon = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Button icon={<CalendarMonthRegular />}>
        With calendar icon before contents
      </Button>
      <Button icon={<CalendarMonthRegular />} iconPosition="after">
        With calendar icon after contents
      </Button>
    </div>
  );
};

export default Icon;
