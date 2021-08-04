import React from "react";
import "../Header.css";
import Button from "@material-ui/core/Button";
import {alpha, AppBar,emphasize, Toolbar} from "@material-ui/core";
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import HomeIcon from '@material-ui/icons/Home';
import Chip from "@material-ui/core/Chip";
import withStyles from "@material-ui/core/styles/withStyles";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {yellow} from "@material-ui/core/colors";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


export default function HeaderComponent() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Breadcrumbs aria-label="breadcrumb">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="BooksStore"
                            icon={<HomeIcon fontSize="small"/>}
                            onClick={() => history.push("/books")}
                        />
                        <StyledBreadcrumb component="a" href="#" label="Избранное" onClick={handleClick}/>
                        <StyledBreadcrumb component="a"
                                          href="#"
                                          label="Администратор"
                                          icon={<SupervisorAccountIcon fontSize="small"/>}
                                          onClick={handleClick}/>
                    </Breadcrumbs>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Название…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <Button onClick = {() => history.push("/books/add") }> <AddIcon style={{ color: yellow[500] }} fontSize="large"></AddIcon> </Button>
                    <div className="button-left">
                        <Button className color="inherit">Войти</Button>
                        <Button className color="inherit">Выйти</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}