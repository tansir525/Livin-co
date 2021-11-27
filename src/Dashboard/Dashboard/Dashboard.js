import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "react-bootstrap";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../../Pages/Login/PrivateRoute/AdminRoute";
import AllUsers from "../AllUsers/AllUsers";
import AddReview from "../AddReview/AddReview";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div className="container mt-5 ">
        <Link to="/home">
          {" "}
          <Button className="btn btn-warning  mb-3 mx-auto">Home</Button>{" "}
        </Link>
        <Link to="/explore">
          {" "}
          <Button className="btn btn-warning  mb-3 mx-auto">
            Back To Booking
          </Button>{" "}
        </Link>

        <Link to={`${url}`}>
          {" "}
          <Button className="btn btn-warning  mb-3 mx-auto">
            My Bookings
          </Button>{" "}
        </Link>
        {admin && (
          <Box>
            <Link to={`${url}/makeAdmin`}>
              {" "}
              <Button className="btn btn-warning   mb-3 mx-auto">
                MakeAdmin
              </Button>{" "}
            </Link>
            <Link to={`${url}/allusers`}>
              {" "}
              <Button className="btn btn-warning  mb-3 mx-auto">
                Check All Users
              </Button>{" "}
            </Link>
            <Link to={`${url}/addreview`}>
              {" "}
              <Button className="btn btn-warning  mb-3 mx-auto">
                Review Us
              </Button>{" "}
            </Link>
          </Box>
        )}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/allusers`}>
            <AllUsers></AllUsers>
          </AdminRoute>
          <AdminRoute path={`${path}/addreview`}>
            <AddReview></AddReview>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

// import React from "react";
// import { Container } from "react-bootstrap";
// import useAuth from "../../Hooks/useAuth";

// const Dashboard = () => {
//   const { user } = useAuth();
//   return (
//     <Container className="my-5 ">
//       <button
//         class="btn btn-primary"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasWithBothOptions"
//         aria-controls="offcanvasWithBothOptions"
//       >
//         Dashboard
//       </button>
//       <h1 className="text-center mt-5 p-5">Welcome {user.displayName}</h1>
//       <div
//         class="offcanvas offcanvas-start"
//         data-bs-scroll="true"
//         tabindex="-1"
//         id="offcanvasWithBothOptions"
//         aria-labelledby="offcanvasWithBothOptionsLabel"
//       >
//         <div class="offcanvas-header">
//           <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
//             Backdroped with scrolling
//           </h5>
//           <button
//             type="button"
//             class="btn-close text-reset"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div class="offcanvas-body">
//           <p>
//             Try scrolling the sjhvckja rest of the page to see this option in
//             action.
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Dashboard;
