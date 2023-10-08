import Brand from "@/assets/Brand";
import { themeChange } from "@/store/slices/userSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

function Header(props: any) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Brand />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Handy solver
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {user.theme == "dark" ? (
              <IconButton aria-label="light mode" onClick={() => dispatch(themeChange("light"))}>
                <WbSunnyIcon sx={{ fill: "#ffffff" }} />
              </IconButton>
            ) : (
              <IconButton aria-label="dark mode" onClick={() => dispatch(themeChange("dark"))}>
                <DarkModeIcon sx={{ fill: "#ffffff" }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
