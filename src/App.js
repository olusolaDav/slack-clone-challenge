import {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
//import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { ThemeProvider } from "styled-components";

const LightTheme = {
  Background: "white",
  sidebarBackground: "#041C44",
  barBorder: "1px solid  #0C0C0B",
  sidebarColorNewMessage: "#15092b",
  sidebarFill: "#3F0E40",
  headerBackground: "#040634",
  headerColor: "#fff",
  hover: "#040634",
  chatColor: "black",
  inputColor: "black",
  inputBackground: "#DCDCDC",
  chatBorder: "1px solid rgba(83, 39, 83,.13)",
  sendButtonB: "#BCBCBB",
  sendButtonC: "#00d"
};

const DarkTheme = {
  sidebarBackground: "#1C1C1C",
  sidebarColorNewMessage: "#15092b",
  sidebarFill: "#3F0E40",
  barBorder: "1px solid  rgba(250, 252, 255, 0.8)",
  hover: "#000",
  headerBackground: "#0C0C0B",
  headerColor: "#fff",
  chatColor: "white",
  Background: "#000",
  inputColor: "white",
  inputBackground: "#343434",
  chatBorder: "1px solid rgba(255, 255, 255,.13)",
  sendButtonB: "#54545C",
  sendButtonC: "white"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}




function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}> 
    <div className="App">
      <Router>
        {/*  <Login /> */}
          
          <Container>
            <Header theme={theme} setTheme={setTheme} />
            <Main>
              <Sidebar /> 
              <Switch>
                <Route path="/">
                  <Chat  />
                </Route>
                <Route path="/">
                  
                </Route>
              </Switch>
            </Main>
          </Container> 
      </Router>
    </div>
    </ThemeProvider>
  )
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
