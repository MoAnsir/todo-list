import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './css/style.css';
import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App.js';
render(<App/>, document.getElementById('app'));


//import { CustomTextInput } from './components/App.js';
//render(<CustomTextInput/>, document.getElementById('app'));