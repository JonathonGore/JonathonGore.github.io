import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar, threePanelView, fourPanelView } from './views.jsx';


var FontAwesome = require('react-fontawesome');

var commanderDescription = "Quadris is desktop tetris game written for my CS246 class at the University of Waterloo." +
"it is written in C++, making use of the X11 graphics library. Throughout the project " +
"many common design patterns are used, such as the observer and factory pattern." +
" Making use of such patterns made for reuasble and extensible modularized code." +
"The feature of this project I am most proud of is the hint system. The hint system works " +
"By analyzing the placement of blocks on the screen and from that determining the ideal " +
"place to drop the next block. The hint given by the computer is illustrated by a black block " +
"The appears temporarily on the screen. It can be seen in the images accompanying this text." +
" The source code for this project can be made available to potential employers upon request."

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
