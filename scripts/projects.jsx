import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar } from './views.jsx';
import { Col, Image, Row, } from 'react-bootstrap';

var FontAwesome = require('react-fontawesome');

var commanderDescription = "Commander is a 2D sidescrolling adventure desktop application I designed and " +
"built on my own. I wrote this game over a period of a few months, finishing in " +
"early 2015. It is written in Java and makes use of Java's Swing library. In addition " +
"I implemented simple animation into my game, to make it look more appealing. " +
"Additionally the game also allows users to save highscores locally."

var rootElement =
React.createElement('div', {},
    React.createElement(MenuBar, {}),
    React.createElement('div', {className: "projects-body"},
        React.createElement('h1', {className: "title"},
            "Projects",
            React.createElement(FontAwesome, {name: 'code', className: 'padded-icon'})
        ),
        React.createElement('h3', {className: "project-header"},
            React.createElement('a',
                {href:"https://github.com/JonathonGore/Commander"},
                "Commander",
                React.createElement(FontAwesome, {name: 'github', className: 'padded-icon'})
            )
        ),
        React.createElement(Row, {},
            React.createElement(Col, {md:4},
                React.createElement('div', {}, commanderDescription),
                React.createElement('a', {
                    href:"https://github.com/JonathonGore/Commander",
                    target: "_blank"
                }, "Source on GitHub")
            ),
            React.createElement(Col, {md:4},
                React.createElement(Image, {src:"media/CommandeStartScreen.PNG"})
            ),
            React.createElement(Col, {md:4},
                React.createElement(Image, {src:"media/Capture_2.PNG"})
            )
        )
    )
);

ReactDOM.render(rootElement, document.getElementById('projects'))
