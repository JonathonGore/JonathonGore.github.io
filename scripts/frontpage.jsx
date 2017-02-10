import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

var rootElement =
  React.createElement(Navbar, {},
        React.createElement(Navbar.Header, {},
            React.createElement(Navbar.Brand, {},
                React.createElement('a', { href: "index.html#"}, "Home")
            )
        ),
        React.createElement(Navbar.Collapse, {},
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
  )

ReactDOM.render(rootElement, document.getElementById('app'))
