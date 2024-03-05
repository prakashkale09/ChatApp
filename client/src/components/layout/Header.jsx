import React, { Suspense, lazy, useState} from 'react'
import { AppBar,Box, Typography,Toolbar,IconButton, Tooltip, Backdrop } from '@mui/material'
import { orange } from '../../constants/color'
import {Menu as MenuIcon} from "@mui/icons-material"
import {Search as SearchIcon,Add as AddIcon,Group as GroupIcon,Logout as LogoutIcon,Notifications as NotificationsIcon } from "@mui/icons-material"
import { useNavigate} from 'react-router-dom';

const SearchDialog=lazy(()=>import("../specific/Search"));
const NotificationDialog=lazy(()=>import("../specific/Notifications"));
const NewGroupDialog=lazy(()=>import("../specific/NewGroup"));



const Header = () => {
const navigate = useNavigate();

const[isMobile,setIsMobile]= useState(false);
const[isSearch,setIsSearch]= useState(false);
const[isNewGroup,setIsNewGroup]= useState(false);
const[isNotification,setIsNotification]= useState(false);



    const handleMobile=()=>{
        console.log("Mobile");
        setIsMobile(prev=>!prev);
    };
    const openSearch=()=>{
        console.log("search");
        setIsSearch(prev=>!prev);  
      };
    const openNewGroup=()=>{
        console.log("New Group");
        setIsNewGroup(prev=>!prev)
    };
    const openNotification=()=>
    {
        setIsNotification(prev=>!prev);
    };
    const logOutHnadler=()=>
    {
        console.log("LogOut");
    };
    const navigateToGroup=()=> navigate("/groups");
  return (
  <>
  <Box sx = {{flexGrow:1}} height={"4rem"}>
    <AppBar position="static" sx={{
        bgcolor: orange,
    }}>
        <Toolbar>

            <Typography variant="h6"
            sx={{
                display:{xs:"none",sm:"block"},
            }}>
                ChatApp
            </Typography>
            <Box  sx={{
                display:{xs:"block",sm:"none"},
            }}>
              <IconButton color="Inherit" onClick={handleMobile}>
                <MenuIcon/>
                </IconButton>  
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Box>
                <IconBtn 
                title = {"Search"}
                icon = {<SearchIcon/>}
                onClick={openSearch}
                />

                <IconBtn 
                title = {"NewGroup"}
                icon = {<AddIcon/>}
                onClick={openNewGroup}
                />

                <IconBtn 
                title = {"Manage Groups"}
                icon = { <GroupIcon/>}
                onClick={navigateToGroup}
                />
                 <IconBtn 
                title = {"Notifications"}
                icon = { <NotificationsIcon/>}
                onClick={openNotification}
                />
                 <IconBtn 
                title = {"LogOut"}
                icon = { <LogoutIcon/>}
                onClick={logOutHnadler}
                />


                  
            </Box>
        </Toolbar>
        </AppBar>
  </Box>
  {isSearch && (<Suspense fallback={<Backdrop open/>}><SearchDialog/></Suspense>)}

  {isNotification && (<Suspense fallback={ <Backdrop open/>}><NotificationDialog/></Suspense>)}

  {isNewGroup && (<Suspense fallback={<Backdrop open/>} ><NewGroupDialog/></Suspense>)}
  </>

 
    
  );
};
const IconBtn = ({title,icon,onClick})=>
{
  return (
      <Tooltip title={title}>
          <IconButton color="inherit" size="large" onClick={onClick}>
              {icon}
          </IconButton>
      </Tooltip>
  );
}

export default Header;
