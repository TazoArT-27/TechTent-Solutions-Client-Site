import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom';
import './ListItems.css';
import { UserContext } from './../../../App';


const ListItems = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
        <ListItem button>
            <ListItemIcon>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <Link to="/orderPage" className="navbarLinks">
            <ListItem button>
                    <ListItemIcon>
                    <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
            </ListItem>
        </Link>
        <Link to="/customersPage"  className="navbarLinks">
        <ListItem button>
            <ListItemIcon>
            <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        </Link>
      {/* <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem> */}
      {/* <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem> */}

    
      <ListSubheader inset>Management</ListSubheader>
      <Link to="/addAdmin" className="navbarLinks">
        <ListItem button>
            <ListItemIcon>
            <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Admin" />
        </ListItem>
      </Link>
      <Link to="/addService" className="navbarLinks">
        <ListItem button>
            <ListItemIcon>
            <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Add Service" />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Services" />
      </ListItem>
      <ListItem button onClick={()=>setLoggedInUser({})}>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
};

export default ListItems;

// export const mainListItems = (
  
//   );