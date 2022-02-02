import React from 'react'
import {
  AppBar,
  Button,
  makeStyles,
  Switch,
  TextField,
  Toolbar
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AppsIcon from '@mui/icons-material/Apps'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  logo: {
    height: 25
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6)
  },
  icons: {
    paddingRight: theme.spacing(5)
  },
  grow: {
    flexGrow: 1
  },
  listItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4
  },
  subheader: {
    textTransform: 'uppercase'
  }
}))

function Header({ darkMode, setDarkMode }) {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.menuIcon}
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={
            theme.palette.type === 'dark'
              ? '/images/branco.png'
              : '/images/preto.png'
          }
          alt="logo"
          className={classes.logo}
        />
        <div className={classes.grow} />
        <TextField
          className={classes.menuIcon}
          fullWidth
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="Pesquisar"
        />
        <div className={classes.grow} />
        <Switch
          className={classes.icons}
          color="primary"
          value={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <IconButton
          className={classes.icons}
          size="large"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <VideoCallIcon />
        </IconButton>
        <IconButton
          className={classes.icons}
          size="large"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <AppsIcon />
        </IconButton>
        <IconButton
          className={classes.icons}
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MoreVertIcon />
        </IconButton>

        <Button
          startIcon={<AccountCircleIcon />}
          variant="outlined"
          color="primary"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
