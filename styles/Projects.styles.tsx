import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
    toolbar: theme.mixins.toolbar,
}));