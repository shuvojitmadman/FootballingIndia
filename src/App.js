import React from 'react';
import { Route } from 'react-router';
import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';



const App= () => (
<div>
<Route path="/" exact component= {HomePage}></Route>
<Route path="/Login" exact component= {LoginPage}></Route>
</div>
);

export default App;
