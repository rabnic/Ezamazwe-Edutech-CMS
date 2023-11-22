import { Box, Drawer, IconButton, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import SideNavTab from './SideNavTab'
import SideNavLogoutTab from './SideNavLogoutTab'
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import MenuIcon from '@mui/icons-material/Menu';
import { Cancel, Menu } from '@mui/icons-material';
import { useAdminContext } from '../../context/adminContext';


const routePaths = {
  "": "Home",
  "courses": "Courses",
  "add-new-course": "AddNewCourse",
  "tutors": "Tutors",
  "tutor-applications": "TutorApplications",
  "subscribers": "Subscribers",
  "admin-profile": "AdminProfile",
  "admin-management": "AdminManagement",
}

function SideNavigation() {
  const { signOut, isAuthenticated } = useAuthContext();
  const location = useLocation();
  const { admin } = useAdminContext();


  const currentPath = location.pathname.replace("/", "")
  console.log("currentPath", currentPath)
  const [activeTab, setActiveTab] = useState(routePaths[currentPath]);
  console.log("activeTab", activeTab)

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    setActiveTab(routePaths[path]);
    navigate(path, { replace: true })
  }

  const handleSignOut = () => {
    signOut()
  }


  const isSmallScreen = useMediaQuery('(max-width:576px)')

  const isMediumScreen = useMediaQuery('(max-width:900px)')

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, position: "relative", left: "15px", top: "15px" }}

          >
            <MenuIcon color='#000' sx={{ fontSize: "25px" }} />
          </IconButton>
          <Drawer
            anchor="top"
            open={isDrawerOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", bgcolor: "primary.main", width: { xs: "100%", md: "100%", lg: "100%" }, height: "100%" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <Cancel />
              </IconButton>
              <Box
                component="img"
                sx={{
                  width: "80%",
                  marginTop: "10px",
                }}
                alt="Ezamazwe Logo"
                src={require('../../assets/LogoTransparent.png')}
              />
              <Box sx={{ display: "flex", width: "100%", flexDirection: "column", gap: 2, alignItems: "center", justifyContent: "flex-start", paddingLeft: "15px" }}>
                <SideNavTab
                  Icon={HomeIcon}
                  text={'Home'}
                  navigateFunction={() => { handleNavigation("") }}
                  active={activeTab === "Home"}
                />
                <SideNavTab
                  Icon={AutoStoriesIcon}
                  text={'Courses'}
                  navigateFunction={() => { handleNavigation("courses") }}
                  active={activeTab === "Courses"}
                />
                <SideNavTab
                  Icon={AddBoxIcon}
                  text={'Add New Course'}
                  navigateFunction={() => { handleNavigation("add-new-course") }}
                  active={activeTab === "AddNewCourse"}
                />
                <SideNavTab
                  Icon={AddBoxIcon}
                  text={'Tutors'}
                  navigateFunction={() => { handleNavigation("tutors") }}
                  active={activeTab === "Tutors"}
                />
                <SideNavTab
                  Icon={SchoolIcon}
                  text={'Subscribers'}
                  navigateFunction={() => { handleNavigation("subscribers") }}
                  active={activeTab === "Subscribers"}
                />
                <SideNavTab
                  Icon={PersonIcon}
                  text={'Admin Profile'}
                  navigateFunction={() => { handleNavigation("admin-profile") }}
                  active={activeTab === "AdminProfile"}
                />
                {
                  admin.permissions === "owner" &&
                  <SideNavTab
                    Icon={SupervisorAccountIcon}
                    text={'Admins'}
                    navigateFunction={() => { handleNavigation("admin-management") }}
                    active={activeTab === "AdminManagement"}
                  />
                }
              </Box>
              <Box sx={{ marginTop: "auto", width: "calc(100% - 15px)", display: "flex", justifyContent: "center", height: "80px", paddingRight: "15px" }}>
                <SideNavLogoutTab
                  Icon={LogoutIcon} text={"Sign Out"} navigateFunction={handleSignOut} />
              </Box>
            </Box>
          </Drawer>
        </>
      ) : (
        isMediumScreen ? (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", bgcolor: "primary.main", width: { xs: "100%", md: "100%", lg: "100%" }, height: "100%" }}>
            <Box
              component="img"
              sx={{
                width: "80%",
                marginTop: "10px",
              }}
              alt="Ezamazwe Logo"
              src={require('../../assets/LogoTransparent.png')}
            />
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", gap: 2, alignItems: "center", justifyContent: "flex-start", paddingLeft: "15px" }}>
              <SideNavTab
                Icon={HomeIcon}
                text={isMediumScreen ? null : 'Home'}
                navigateFunction={() => { handleNavigation("") }}
                active={activeTab === "Home"}
              />
              <SideNavTab
                Icon={AutoStoriesIcon}
                text={isMediumScreen ? null : 'Courses'}
                navigateFunction={() => { handleNavigation("courses") }}
                active={activeTab === "Courses"}
              />
              <SideNavTab
                Icon={AddBoxIcon}
                text={isMediumScreen ? null : 'Add New Course'}
                navigateFunction={() => { handleNavigation("add-new-course") }}
                active={activeTab === "AddNewCourse"}
              />
              <SideNavTab
                Icon={AddBoxIcon}
                text={isMediumScreen ? null : 'Tutors'}
                navigateFunction={() => { handleNavigation("tutors") }}
                active={activeTab === "Tutors"}
              />
              <SideNavTab
                Icon={SchoolIcon}
                text={isMediumScreen ? null : 'Subscribers'}
                navigateFunction={() => { handleNavigation("subscribers") }}
                active={activeTab === "Subscribers"}
              />
              <SideNavTab
                Icon={PersonIcon}
                text={isMediumScreen ? null : 'Admin Profile'}
                navigateFunction={() => { handleNavigation("admin-profile") }}
                active={activeTab === "AdminProfile"}
              />
              {
                admin.permissions === "owner" &&
                <SideNavTab
                  Icon={SupervisorAccountIcon}
                  text={isMediumScreen ? null : 'Admins'}
                  navigateFunction={() => { handleNavigation("admin-management") }}
                  active={activeTab === "AdminManagement"}
                />
              }
            </Box>
            <Box sx={{ marginTop: "auto", width: "calc(100% - 15px)", display: "flex", justifyContent: "center", height: "80px", paddingRight: "15px" }}>
              <SideNavLogoutTab
                Icon={LogoutIcon} text={isMediumScreen ? null : "Sign Out"} navigateFunction={handleSignOut} />
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", bgcolor: "primary.main", width: { xs: "100%", md: "100%", lg: "100%" }, height: "100%" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <Cancel />
            </IconButton>
            <Box
              component="img"
              sx={{
                width: "80%",
                marginTop: "10px",
              }}
              alt="Ezamazwe Logo"
              src={require('../../assets/LogoTransparent.png')}
            />
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", gap: 2, alignItems: "center", justifyContent: "flex-start", paddingLeft: "15px" }}>
              <SideNavTab
                Icon={HomeIcon}
                text={isSmallScreen ? null : 'Home'}
                navigateFunction={() => { handleNavigation("") }}
                active={activeTab === "Home"}
              />
              <SideNavTab
                Icon={AutoStoriesIcon}
                text={isSmallScreen ? null : 'Courses'}
                navigateFunction={() => { handleNavigation("courses") }}
                active={activeTab === "Courses"}
              />
              <SideNavTab
                Icon={AddBoxIcon}
                text={isSmallScreen ? null : 'Add New Course'}
                navigateFunction={() => { handleNavigation("add-new-course") }}
                active={activeTab === "AddNewCourse"}
              />
              <SideNavTab
                Icon={AddBoxIcon}
                text={isSmallScreen ? null : 'Tutors'}
                navigateFunction={() => { handleNavigation("tutors") }}
                active={activeTab === "Tutors"}
              />
              <SideNavTab
                Icon={SchoolIcon}
                text={isSmallScreen ? null : 'Subscribers'}
                navigateFunction={() => { handleNavigation("subscribers") }}
                active={activeTab === "Subscribers"}
              />
              <SideNavTab
                Icon={PersonIcon}
                text={isSmallScreen ? null : 'Admin Profile'}
                navigateFunction={() => { handleNavigation("admin-profile") }}
                active={activeTab === "AdminProfile"}
              />
              {
                admin.permissions === "owner" &&
                <SideNavTab
                  Icon={SupervisorAccountIcon}
                  text={isSmallScreen ? null : 'Admins'}
                  navigateFunction={() => { handleNavigation("admin-management") }}
                  active={activeTab === "AdminManagement"}
                />
              }
            </Box>
            <Box sx={{ marginTop: "auto", width: "calc(100% - 15px)", display: "flex", justifyContent: "center", height: "80px", paddingRight: "15px" }}>
              <SideNavLogoutTab
                Icon={LogoutIcon} text={isSmallScreen ? null : "Sign Out"} navigateFunction={handleSignOut} />
            </Box>
          </Box>
        ))}


    </>
  )
}

export default SideNavigation