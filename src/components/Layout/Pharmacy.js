import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ViewListIcon from '@material-ui/icons/ViewList';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Pharmacy() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon />}
            >
                Add
            </Button>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<UpdateIcon />}
            >
                Update
            </Button>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ViewListIcon />}
            >
                View All
            </Button>

            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
        </div>
    );
}