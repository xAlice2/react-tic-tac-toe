import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * In JavaScript classes, you need to always call super when defining the constructor 
 * of a subclass. All React component classes that have a constructor should start with 
 * a super(props) call.
 ===================================================================================== */


/**
 * By calling this.setState from an onClick handler in the Square’s render method, 
 * we tell React to re-render that Square whenever its <button> is clicked. After 
 * the update, the Square’s this.state.value will be 'X', so we’ll see the X on 
 * the game board. If you click on any Square, an X should show up.
 ===================================================================================== */








// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
