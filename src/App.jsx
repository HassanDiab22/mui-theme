import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import MontyTheme from "./theme/MontyTheme";
import themesConfig from "./theme/themesConfig";
import PreviewButtons from "./theme/PreviewDesign/PreviewButtons";
import PreviewIcons from "./theme/PreviewDesign/PreviewIcons";
import PreviewTables from "./theme/PreviewDesign/PreviewTables";

const drawerWidth = 240;

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const toggleDarkMode = () => setDarkMode(!isDarkMode);
  const toggleDialog = () => setDialogOpen(!dialogOpen);

  return (
    <MontyTheme
      theme={isDarkMode ? themesConfig.defaultDark : themesConfig.default}
      direction="ltr"
    >
      {/* Top Navigation */}
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI Component Showcase
          </Typography>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
            label="Dark Mode"
          />
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: drawerWidth }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div className="p-6 pt-20 flex flex-col items-center bg-background-default min-h-screen">
        <Card sx={{ width: "80%", maxWidth: 600, mb: 4 }}>
          <CardContent>
            <Typography variant="h5" color="primary">
              Themed Card
            </Typography>
            <Typography variant="body1" color="secondary">
              This is a card styled with your theme.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Primary Button
            </Button>
            <Button variant="outlined" color="secondary" sx={{ mt: 2, ml: 2 }}>
              Secondary Button
            </Button>
          </CardContent>
        </Card>

        {/* Form */}
        <Card sx={{ width: "80%", maxWidth: 600, mb: 4 }}>
          <CardContent>
            <Typography variant="h6">Form Example</Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
            />
            <Button variant="contained" color="success" sx={{ mt: 2 }}>
              Submit
            </Button>
          </CardContent>
        </Card>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{ width: "80%", maxWidth: 600, mb: 4 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Product 1</TableCell>
                <TableCell align="right">$10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product 2</TableCell>
                <TableCell align="right">$20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dialog (Popup) */}
        <Button variant="contained" color="warning" onClick={toggleDialog}>
          Open Dialog
        </Button>
        <Dialog open={dialogOpen} onClose={toggleDialog}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <Typography>This is a dialog box to test MUI modals.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleDialog} color="error">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <PreviewButtons />
        <PreviewIcons />
        <PreviewTables />
      </div>
    </MontyTheme>
  );
};

export default App;
