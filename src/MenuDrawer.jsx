import React from 'react'
import {
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Toolbar
} from '@material-ui/core'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import { Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

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

function MenuDrawer() {
  const classes = useStyles()
  return (
    <Hidden mdDown>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.ListItemText
                }}
                primary={'Inicio'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.ListItemText
                }}
                primary={'Explorar'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.ListItemText
                }}
                primary={'Subscrições'}
              />
            </ListItem>
          </List>
          <Divider />
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.ListItemText
              }}
              primary={'Biblioteca'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.ListItemText
              }}
              primary={'Histórico'}
            />
          </ListItem>
          <Divider />
          <Box p={6}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AccountCircleIcon />}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.subheader}
              >
                O Melhor do youtube
              </ListSubheader>
            }
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Música'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Esportes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Jogos'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Filmes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Notícias'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Ao vivo'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Destaques'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Videos 360'}
              />
            </ListItem>
          </List>
          <Divider />
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText
              }}
              primary={'Procurar mais'}
            />
          </ListItem>
          <Divider />
        </Box>
      </Drawer>
    </Hidden>
  )
}

export default MenuDrawer
