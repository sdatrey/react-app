import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import FirstPage from './components/first-page/First-page';
import SecondPage from './components/second-page/second-page';
const Routes = () => {
    return(
    <BrowserRouter>
       < Switch>
       <Route path="/" exact component={FirstPage}/>
         <Route path="/SecondPage" exact component={SecondPage}/>

       </Switch>

    </BrowserRouter>
    )
}
 
export default Routes;