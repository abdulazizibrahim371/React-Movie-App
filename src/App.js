import { reduceRight } from 'lodash';
import './App.css';
import Movies from "./components/movies";
import Customers from './components/customers';
import Rentals from './rentals';
import NotFound from './notFound';
import {Route, Switch, Redirect} from "react-router-dom";
import LoginForm from './components/loginForm';
import NavBar from './navBar';
//import Customers from './components/customers';

function App() {
  return (
    <div>
    <NavBar />
   <main className='Container'>
     <Switch>
     <Route path="/loginForm" component={LoginForm}></Route>
     <Route path="/movies" component={Movies}></Route>
     <Route path="/customers" component={Customers}></Route>
     <Route path="/rentals" component={Rentals}></Route>
     <Route path="/not-found" component={NotFound}></Route>
     <Redirect from='/' exact to='/movies' />
     <Redirect to="/not-found"/>
     </Switch>
   </main>
   </div>
  );
}

export default App;
