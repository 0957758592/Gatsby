import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { type } from 'os';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

type FilterTypes = {
    filterData: Function
}
111
export default function Filter({filterData}: FilterTypes) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-basic"
                    className={classes.textField}
                    label="Filter"
                    onChange ={(e) => { filterData(e.target.value) }}
                />
            </div>
        </form>
    );
}
