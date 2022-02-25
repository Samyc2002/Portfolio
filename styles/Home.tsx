import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    }
  })
);