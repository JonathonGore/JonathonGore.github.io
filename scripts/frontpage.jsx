import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar, Messager, } from './views.jsx';

var rootElement = React.createElement('div', {},
    React.createElement(MenuBar, {}),
    React.createElement(Messager, {})
);

ReactDOM.render(rootElement, document.getElementById('app'))
