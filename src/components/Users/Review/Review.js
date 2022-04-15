import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useState } from 'react';

const drawerWidth = 240;
  
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));



const Review = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [info, setInfo] = useState({
      name: loggedInUser.name
    })

    const onSubmit = (data) => {
      // const newOrder = {...loggedInUser}
      data.email = loggedInUser.email;
      data.photoURL = loggedInUser.photoURL;
      fetch('http://localhost:5000/review', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                alert('Submitted Successfully')
            }

        })
    }

    return (
        <div>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Link to="/home" className="homeLink">
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Home
                    </Typography>
                </Link>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                </Typography>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    <h6>{loggedInUser.name}, you can share your experience with us.</h6>
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                </Toolbar>
            </AppBar>   
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List><Sidebar/></List>
            </Drawer> 
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                    <div className="p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <input defaultValue="test" {...register("example")} /> */}
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input name="name" {...register("name", { required: true })} type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" value={info.name}/>
                            {errors.name && <span className="text-danger">Name is required</span>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Review</label>
                            <input name="review" {...register("review", { required: true })} type="text" class="form-control" id="exampleFormControlInput1" placeholder="say something"/>
                            {errors.review && <span className="text-danger">Review is required</span>}
                        </div>
                        <input type="submit" />
                    </form>
                    </div>
            </main>
            </div>
        </div>
    );
};

export default Review;