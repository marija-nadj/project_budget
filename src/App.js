import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { BudgetActual } from './components/BudgetActual';
import { CostList } from './components/CostList';
import { AddCost } from './components/AddCost';

import { GlobalProvider } from './context/MainState';


function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
    <Balance/>
    <BudgetActual/>
    <CostList/>
    <AddCost/>
    </div>
    </GlobalProvider>
    
  );
}

export default App;
