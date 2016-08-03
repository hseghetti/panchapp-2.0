var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/layout/app');

function render () {
    ReactDOM.render(<App />, document.getElementById("main-app"));
};

render();
