import React from 'react';
import './App.css';
import * as data  from './assets/Resources.json'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MembersPageComponent } from './components/MemberPage';
import { nanoid } from 'nanoid';
import { Member } from './services/VariableStore';
import { makeStyles, Container } from '@material-ui/core';
import { NavbarComponent } from './components/Navbar.component';

/*
  General layout of the app. contains navigation, main gameplay and menus
*/
//material-ui in file styling. this functions just like scss/sass
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
  },
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  },
}));
//the application needs to rerender for every increment of a resource, but also every new resource that is made
const App: React.FC = () => {
  const classes = useStyles();

  const generateRoutes = (members: Member[]) => {
    return(
      <Switch>
        {
          members.map(member => {
            console.log(member.name)
            return <Route key={nanoid()} exact path={`/${member.name}`} render={() => <MembersPageComponent/>}/>
          })
        }
      </Switch>
    );
  }
  //move the appbar and drawer into the navbar component and fix padding there.
  //currently the appbar overlaps with the content, making it partially invisible
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <NavbarComponent/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Container className={classes.container}>
            {generateRoutes(data.members)}
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
