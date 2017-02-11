import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar } from './views.jsx';
import { Router, Route, Link, browserHistory } from 'react-router'

var rootElement = React.createElement(MenuBar, {});

ReactDOM.render(rootElement, document.getElementById('app'))
