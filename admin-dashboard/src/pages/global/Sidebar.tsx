import { Sidebar, Menu, MenuItem, sidebarClasses, menuClasses } from "react-pro-sidebar";
import { tokens } from "../../assets/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarOutlinedIcon from "@mui/icons-material/CalendarOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    // <Box
    //   sx={{
    //     "& .ps-sidebar-inner": {
    //       background: `${colors.primary[400]} !important`,
    //     },
    //     "& .ps-icon-wrapper": {
    //       backgroundColor: "transparent !important",
    //     },
    //     "& .ps-inner-item": {
    //       padding: "5px 35px 5px 30px !important",
    //     },
    //     "& .ps-inner-item:hover": {
    //       color: "#868dfb !important",
    //     },
    //   }}
    // >
      <Sidebar collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: `${colors.primary[400]} !important`,
            backgroundColor: 'transparent',
          },
          [`.${sidebarClasses.root}`]: {
            border: '0px !important'
          },
          [`.${menuClasses.button}:hover`]: {
            color: '#868dfb',
            backgroundColor: `${colors.primary[400]}`
          }
        }}

      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img alt="" width="100px" height="100px" style={{ cursor: 'pointer', borderRadius: '50%'}}/>
                </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
  );
};

export default SideBar;
