import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';

var rootElement =
  React.createElement(Navbar, {},
        React.createElement(Navbar.Header, {},
            React.createElement(Navbar.Brand, {},
                React.createElement('a', { href: "index.html#"}, "Home")
            )
        ),
        React.createElement(Navbar.Collapse, {},
            React.createElement(Nav, { pullRight: true },
                React.createElement(NavItem, {},
                    //React.createElement(Icon, { name: "spinner"})
                    "hi"
                )
            )
        )
  )

ReactDOM.render(rootElement, document.getElementById('app'))
