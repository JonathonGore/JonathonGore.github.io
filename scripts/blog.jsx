import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar, threePanelView, fourPanelView } from './views.jsx';


var FontAwesome = require('react-fontawesome');

var rootElement =
React.createElement('div', {},
    React.createElement(MenuBar, {})
);

ReactDOM.render(rootElement, document.getElementById('projects'))
