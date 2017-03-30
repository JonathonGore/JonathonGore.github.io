import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar, Messager, } from './views.jsx';
import { Col, Image, Row, } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

var description = "My name is Jonathon Gore, or if you want you can call me Jack." +
                  " I am a second year student studying computer science at the" +
                  " University of Waterloo. I am very much excited by the field" +
                  " of Computer Science, I have a passion for game design and " +
                  "video games. I have experience creating my own desktop games in Java and C++," +
                  " to which you will find links to on my site. I have gained professional experience " +
                  "from working at WeMesh Inc and Oracle Corp. I am looking to further my education" +
                  " as well as continually increase my own knowledge." +
                  "The technologies I am most experienced with are Java, C++, C, Javascript, Scala, Bash and Git." +
                  "On this page you will notice a messaging interface with which you can chat with my" +
                  " (work in progress) chat bot. Why don't you ask him what his favourite colour is!"

var rootElement = React.createElement('div', {},
    React.createElement(MenuBar, {}),
    React.createElement(Row, {},
        React.createElement(Col, {md: 5},
            React.createElement('div', {className: "text-area"}, description)
        ),
        React.createElement(Col, {md: 7},
            React.createElement('div', {className: 'chatbot-display'},
                React.createElement('h3', {className: "project-header"},
                    React.createElement('a',
                        {
                            href: 'https://github.com/JonathonGore/ChatBot',
                        },
                        'Chatbot',
                        React.createElement(FontAwesome, {name: 'github', className: 'padded-icon'})
                    )
                ),
                React.createElement(Messager, {id: guid()})
            )

        )
    )
);

ReactDOM.render(rootElement, document.getElementById('app'))
