import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoverSpinner from './components/CoverSpinner';
import './app.scss';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => <h2> 404 not found</h2>;

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </div>
      <CoverSpinner />
    </>
  );
}

export default App;
