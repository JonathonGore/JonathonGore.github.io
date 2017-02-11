import React from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

export class MenuBar extends React.Component {
  render() {
      return (
          React.createElement(Navbar, {},
                React.createElement(Nav, {},
                    React.createElement(NavItem, {
                        href: "index.html#",
                        className: 'no-left-padding'
                    },
                            React.createElement(FontAwesome, {name: 'home', size: '2x'}),
                            React.createElement('div', {className: "nav-item-text"}, "Home")
                    )
                ),
                React.createElement(Nav, { pullRight: true },
                    React.createElement(NavItem, {
                        href: "ProjectsPage.html"
                    },
                            React.createElement(FontAwesome, {name: 'code', size: '2x'}),
                            React.createElement('div', {className: "nav-item-text"}, "Projects")
                    ),
                    React.createElement(NavItem, {
                        href: "https://github.com/JonathonGore",
                        target: "_blank"
                    },
                            React.createElement(FontAwesome, {name: 'github', size: '2x'}),
                            React.createElement('div', {className: "nav-item-text"}, "Github")
                    ),
                    React.createElement(NavItem, {
                        href: "docs/resume.pdf"
                    },
                            React.createElement(FontAwesome, {name: 'file-text', size: '2x'}),
                            React.createElement('div', {className: "nav-item-text"}, "Resume")
                    ),
                    React.createElement(NavItem, {
                        href: "mailto: jgore@uwaterloo.ca",
                        target: "_blank"
                    },
                            React.createElement(FontAwesome, {name: 'envelope', size: '2x'}),
                            React.createElement('div', {className: "nav-item-text last-item"}, "Contact")
                    )
                )
          )
      );
    }
}
