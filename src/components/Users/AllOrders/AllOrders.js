import React from 'react';
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
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'





const drawerWidth = 240;
  
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, 
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
    textDecoration: 'none',
    color: 'white'
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
  table: {
    minWidth: 650,
  },
}));

const OrderList = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [orders, setOrders] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/allOrders'
      )
      .then(res => res.json())
      .then(data => setOrders(data))
      console.log(setOrders)
    }, [])

    const handleDeleteOrder = (id) => {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
          method: 'DELETE',
          headers:{'Content-type' : 'application/json'}
      })
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Deleted Successfully',
        })
      })
     
      .catch(error => console.log(error))
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
                <table class="table">
                  <thead class="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                  </tr>
                  </thead>
                  <tbody>
                  {orders.map((row) => (
                    <tr>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.service}</td>
                    <td>
                    <button onClick={() => handleDeleteOrder(row._id)} type="submit" class="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                              ))}
                  </tbody>
                </table>
                </div>
            </main>
            </div>
          </div>
    );
};

export default OrderList;