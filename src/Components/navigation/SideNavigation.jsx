import { Box, Drawer, IconButton, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import Groups3Icon from '@mui/icons-material/Groups3';


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

  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current path', currentPath)
    if (activeTab !== currentPath) {
      setActiveTab(routePaths[currentPath])
    }

  }, [currentPath])

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

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  }

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
            style={{ position: "absolute", top: 0, left: 0, zIndex: 100, padding: "30px" }}
          >
            <MenuIcon color='primary' sx={{ fontSize: "25px" }} />
          </IconButton>
          <Drawer
            anchor="left"
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
                sx={{ display: { md: 'none' }, marginLeft: "auto", color: "#fff" }}
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
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("") }}
                  active={activeTab === "Home"}
                />
                <SideNavTab
                  Icon={AutoStoriesIcon}
                  text={'Courses'}
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("courses") }}
                  active={activeTab === "Courses"}
                />
                <SideNavTab
                  Icon={AddBoxIcon}
                  text={'Add New Course'}
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("add-new-course") }}
                  active={activeTab === "AddNewCourse"}
                />
                <SideNavTab
                  Icon={Groups3Icon}
                  text={'Tutors'}
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("tutors") }}
                  active={activeTab === "Tutors"}
                />
                <SideNavTab
                  Icon={SchoolIcon}
                  text={'Subscribers'}
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("subscribers") }}
                  active={activeTab === "Subscribers"}
                />
                <SideNavTab
                  Icon={PersonIcon}
                  text={'Admin Profile'}
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("admin-profile") }}
                  active={activeTab === "AdminProfile"}
                />
                {
                  admin.permissions === "owner" &&
                  <SideNavTab
                    Icon={SupervisorAccountIcon}
                    text={'Admins'}
                    navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("admin-management") }}
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
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("") }}
                active={activeTab === "Home"}
              />
              <SideNavTab
                Icon={AutoStoriesIcon}
                text={isMediumScreen ? null : 'Courses'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("courses") }}
                active={activeTab === "Courses"}
              />
              <SideNavTab
                Icon={AddBoxIcon}
                text={isMediumScreen ? null : 'Add New Course'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("add-new-course") }}
                active={activeTab === "AddNewCourse"}
              />
              <SideNavTab
                Icon={Groups3Icon}
                text={isMediumScreen ? null : 'Tutors'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("tutors") }}
                active={activeTab === "Tutors"}
              />
              <SideNavTab
                Icon={SchoolIcon}
                text={isMediumScreen ? null : 'Subscribers'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("subscribers") }}
                active={activeTab === "Subscribers"}
              />
              <SideNavTab
                Icon={PersonIcon}
                text={isMediumScreen ? null : 'Admin Profile'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("admin-profile") }}
                active={activeTab === "AdminProfile"}
              />
              {
                admin.permissions === "owner" &&
                <SideNavTab
                  Icon={SupervisorAccountIcon}
                  text={isMediumScreen ? null : 'Admins'}
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("admin-management") }}
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
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("") }}
                active={activeTab === "Home"}
              />
              <SideNavTab
                Icon={AutoStoriesIcon}
                text={isSmallScreen ? null : 'Courses'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("courses") }}
                active={activeTab === "Courses"}
              />
              <SideNavTab
                Icon={AddBoxIcon}
                text={isSmallScreen ? null : 'Add New Course'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("add-new-course") }}
                active={activeTab === "AddNewCourse"}
              />
              <SideNavTab
                Icon={Groups3Icon}
                text={isSmallScreen ? null : 'Tutors'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("tutors") }}
                active={activeTab === "Tutors"}
              />
              <SideNavTab
                Icon={SchoolIcon}
                text={isSmallScreen ? null : 'Subscribers'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("subscribers") }}
                active={activeTab === "Subscribers"}
              />
              <SideNavTab
                Icon={PersonIcon}
                text={isSmallScreen ? null : 'Admin Profile'}
                navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("admin-profile") }}
                active={activeTab === "AdminProfile"}
              />
              {
                admin.permissions === "owner" &&
                <SideNavTab
                  Icon={SupervisorAccountIcon}
                  text={isSmallScreen ? null : 'Admins'}
                  navigateFunction={() => { isDrawerOpen && closeDrawer(); handleNavigation("admin-management") }}
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