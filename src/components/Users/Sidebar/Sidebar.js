import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ViewListIcon from '@material-ui/icons/ViewList';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';
import { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
      fetch('http://localhost:5000/isAdmin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email: loggedInUser.email})
      })
      .then(res => res.json())
      .then(data => setIsAdmin(data))
  },[])
  return (
    <div>
        <ListItem button>
            <ListItemIcon>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <Link to="/orderUser" className="navbarLinks">
            <ListItem button>
                    <ListItemIcon>
                    <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Order" />
            </ListItem>
        </Link>
        <Link to="/orderListUser"  className="navbarLinks">
        <ListItem button>
            <ListItemIcon>
            <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="Order List" />
        </ListItem>
        </Link>
        <Link to="/reviewUser"  className="navbarLinks">
        <ListItem button>
            <ListItemIcon>
            <RateReviewIcon />
            </ListItemIcon>
            <ListItemText primary="Review" />
        </ListItem>
        </Link>

        {
          isAdmin && 
          
              <Link to="/newAdmin"  className="navbarLinks">
                <ListItem button>
                    <ListItemIcon>
                    <SupervisorAccountIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Admin" />
                </ListItem>
              </Link>
        }
        { isAdmin &&
              <Link to="/allOrders"  className="navbarLinks">
              <ListItem button>
                  <ListItemIcon>
                  <BorderAllIcon />
                  </ListItemIcon>
                  <ListItemText primary="All Orders" />
              </ListItem>
              </Link>
        }
        { isAdmin &&
              <Link to="/addServices"  className="navbarLinks">
              <ListItem button>
                  <ListItemIcon>
                  <SettingsApplicationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Services" />
              </ListItem>
              </Link>
        }
        
        <ListItem button onClick={()=>setLoggedInUser({})}>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
        </ListItem>
    </div>
  );
};

export default Sidebar;