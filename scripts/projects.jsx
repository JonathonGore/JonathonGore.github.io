import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar, threePanelView, fourPanelView } from './views.jsx';


var FontAwesome = require('react-fontawesome');

var commanderDescription = "Commander is a 2D sidescrolling adventure desktop application designed and " +
"built by me. The user controls the character while trying to kill enemies and collect as many coins as possible. " +
"The game allows a full range of motion including the ability to jump onto enemies." +
"Commander was written a period of a few months, and completed in " +
"early 2015. It is written in Java and makes use of Java's Swing library. In addition " +
"I implemented simple animation into my game, to make it look more appealing. " +
"Commander also allows users to save highscores locally."

var rootElement =
React.createElement('div', {},
    React.createElement(MenuBar, {}),
    React.createElement('div', {className: "projects-body"},
        React.createElement('h1', {className: "title"},
            "Projects",
            React.createElement(FontAwesome, {name: 'code', className: 'padded-icon'})
        ),
        React.createElement(threePanelView, {
            title: "Commander",
            link: "https://github.com/JonathonGore/Commander",
            icon: "github",
            description: commanderDescription,
            image1: "media/CommandeStartScreen.PNG",
            image2: "media/Capture_2.PNG"
        }),
        React.createElement(fourPanelView, {
            title: "Quadris",
            description: commanderDescription,
            image1: "media/Quadris.png",
            image2: "media/QuadrisHint.png",
            image3: "media/QuadrisHint.png"
        })
    )
);

ReactDOM.render(rootElement, document.getElementById('projects'))
