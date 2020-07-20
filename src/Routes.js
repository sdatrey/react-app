import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import FirstPage from './components/first-page/First-page';
import SecondPage from './components/second-page/second-page';
import ThirdPage from './components/third-page/third-page';
const Routes = () => {
    return(
    <BrowserRouter>
       <Switch>
       <Route path="/" exact component={FirstPage}/>
       <Route path="/SecondPage" exact component={SecondPage}/>
       <Route path="/ThirdPage" exact component={ThirdPage}/> 

       </Switch>

    </BrowserRouter>
    )
}
 
export default Routes;