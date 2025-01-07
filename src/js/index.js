import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap';
import './icons.js';

import Home from "./component/home.jsx"; // Home se encargará de todo
import '../styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Home />);