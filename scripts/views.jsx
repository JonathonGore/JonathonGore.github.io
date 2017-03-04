import React from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { Col, Image, Row, } from 'react-bootstrap';
import { ControlLabel, FormControl, FormGroup, Button, } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return xhr;
}

export class Message extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             msg: props.msg,
             type: props.type,
             key: 1
         };
     }

     render() {
         return (
             React.createElement('div', {},
                React.createElement('div', {
                    className: this.state.type + " chat-msg"
                },
                    React.createElement('p', {}, this.state.msg)
                ),
                React.createElement('div', {className: "clear"})
            )
         );
     }
 }

export class Messager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            messages: [React.createElement(Message, {
                key: 0,
                type: "chatbot-msg",
                msg: "Hey there, who are you?"
            })],
            count: 2,
            id: props.id
        };
        self = this;
    }

    sendMessage(message){
        var url = "http://localhost:9000/message";
        var params = "msg=" + self.state.msg + "&id=" + self.state.id;
        var xhr = createCORSRequest('POST', url);
        if (!xhr) {
          throw new Error('CORS not supported');
        }

        // When the request successfully completes
        xhr.onload = function() {
            var responseText = xhr.responseText;
            self.setState((prevState, props) => ({
                messages: prevState.messages.concat(
                    React.createElement(Message, {
                        key: prevState.count,
                        type: "chatbot-msg",
                        msg: responseText
                    })
                ),
                count: prevState.count + 1
            }));
            console.log(responseText);
        };

        // If there is an error
        xhr.onerror = function() {
            console.log('There was an error!');
        };
        //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);

        self.setState((prevState, props) => ({
            messages: prevState.messages.concat(
                React.createElement(Message, {
                    key: prevState.count,
                    type: "user-msg",
                    msg: prevState.msg
                })
            ),
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            React.createElement('div', {className: "message-container"},
                React.createElement('section', {
                    className: 'chat-area',
                    id: "chat-area"
                }, this.state.messages),
                React.createElement(ControlLabel, {}, "Enter your message below:"),
                React.createElement(Row, {},
                    React.createElement(Col, {md: 10, id: "r-inner-padding"},
                        React.createElement(FormControl, {
                            type: "text",
                            id: "message-box",
                            onChange: function(event) {
                                self.setState({msg: event.target.value});
                            }
                        })
                    ),
                    React.createElement(Col, {md: 2, id: "l-inner-padding"},
                        React.createElement(Button, {
                            type: "submit",
                            onClick: this.sendMessage,
                            id: "submit-button"
                        }, "Send")
                    )
                )
            )
        );
    }
}

export class threePanelView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            link: props.link,
            icon: props.icon,
            description: props.description,
            image1: props.image1,
            image2: props.image2
        };
      }

    render() {
        return (
            React.createElement('div', {className: "three-panel"},
                React.createElement('h3', {className: "project-header"},
                    React.createElement('a',
                        {href: this.state.link},
                        this.state.title,
                        React.createElement(FontAwesome, {name: this.state.icon, className: 'padded-icon'})
                    )
                ),
                React.createElement(Row, {},
                    React.createElement(Col, {md:4},
                        React.createElement('div', {}, this.state.description),
                        React.createElement('a', {
                            href: this.state.link,
                            target: "_blank"
                        }, "Source on GitHub")
                    ),
                    React.createElement(Col, {md:4},
                        React.createElement(Image, {src: this.state.image1})
                    ),
                    React.createElement(Col, {md:4},
                        React.createElement(Image, {src: this.state.image2})
                    )
                )
            )
        );
    }
}

export class fourPanelView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            link: props.link,
            icon: props.icon,
            description: props.description,
            image1: props.image1,
            image2: props.image2,
            image3: props.image3
        };
      }

    render() {
        return (
            React.createElement('div', {className: "four-panel"},
                React.createElement('h3', {className: "project-header"},
                    React.createElement('a',
                        {href: this.state.link},
                        this.state.title,
                        React.createElement(FontAwesome, {name: 'github', className: 'padded-icon hidden'})
                    )
                ),
                React.createElement(Row, {},
                    React.createElement(Col, {md:4},
                        React.createElement('div', {}, this.state.description),
                        React.createElement('a', {
                            href: this.state.link,
                            target: "_blank"
                        }, "Source on GitHub")
                    ),
                    React.createElement(Col, {md: 8},
                        React.createElement(Col, {md:4},
                            React.createElement(Image, {src: this.state.image1})
                        ),
                        React.createElement(Col, {md:4},
                            React.createElement(Image, {src: this.state.image2})
                        ),
                        React.createElement(Col, {md:4},
                            React.createElement(Image, {src: this.state.image3})
                        )
                    )
                )
            )
        );
    }
}



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
