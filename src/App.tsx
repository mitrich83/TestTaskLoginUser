import React, {useEffect} from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {Menu} from '@mui/icons-material';
import {Redirect, Route, Switch} from 'react-router-dom';
import {CircularProgress} from '@mui/material';
import {Users} from './UI/users/Users';
import {Login} from './UI/login/Login';
import {UserType} from './DAL/api';



function App() {
/*  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
  const isInitialized = useSelector<AppRootStateType>(state => state.app.isInitialized)*/

  const logoutHandler = () => {
    // dispatch(logoutTC())
  }

 /* if (!isInitialized) {
    return <div
        style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
      <CircularProgress/>
    </div>
  }*/

  return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
          {/*  <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu/>
            </IconButton>
            <Typography variant="h6">
              News
            </Typography>*/}
            {/*{isLoggedIn && */}
            <Button color="inherit" onClick={logoutHandler}>Log out</Button>
          </Toolbar>
          {/*{status === 'loading' && <LinearProgress/>}*/}
        </AppBar>
        <Container fixed>
          <Switch>
            <Route path={'/users'} render={() => <Users />}/>
            <Route exact path={'/login'} render={() => <Login/>}/>
            <Route exact path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            <Redirect from={'*'} to={'/404'}/>
          </Switch>
        </Container>
      </div>
  )
}

export default App
