import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

var rootElement =
  React.createElement(Navbar, {},
        React.createElement(Nav, {},
            React.createElement(NavItem, {
                href: "index.html#",
                target: "_blank"
            },
                    React.createElement(FontAwesome, {name: 'home', size: '2x'}),
                    React.createElement('div', {className: "nav-item-text"}, "Home")
            )
        ),
        React.createElement(Nav, { pullRight: true },
            React.createElement(NavItem, {
                href: "https://github.com/JonathonGore",
                target: "_blank"
            },
                    React.createElement(FontAwesome, {name: 'github', size: '2x'}),
                    React.createElement('div', {className: "nav-item-text"}, "Github")
            )
        )
  )

ReactDOM.render(rootElement, document.getElementById('app'))
