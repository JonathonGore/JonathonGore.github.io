import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBar, Messager, } from './views.jsx';
import { Col, Image, Row, } from 'react-bootstrap';

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
                  " of Computer Science, I have a passion for game design, and " +
                  "video games. I have experience creating my own desktop games," +
                  " to which you will find links to on my site. I have experience " +
                  "both through my own projects and through courses coding in Java, " +
                  "C#, C, C++, Scala, Go, Racket, HTML, CSS, and C++."

var rootElement = React.createElement('div', {},
    React.createElement(MenuBar, {}),
    React.createElement(Row, {},
        React.createElement(Col, {md: 5},
            React.createElement('div', {className: "text-area"}, description)
        ),
        React.createElement(Col, {md: 7},
            React.createElement(Messager, {id: guid()})
        )
    )
);

ReactDOM.render(rootElement, document.getElementById('app'))
