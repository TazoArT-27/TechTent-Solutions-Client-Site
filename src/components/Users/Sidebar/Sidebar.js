import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ViewListIcon from '@material-ui/icons/ViewList';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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