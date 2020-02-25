import React from 'react';
import ReactDOM from 'react-dom';
var hW1 = React.createElement('h3', null, 'Hello World!')
var hW2 = React.createElement('h3', null, 'Nice to meet you')

var div1 = React.createElement('div', null, hW1);

ReactDOM.render(
  div1,
  document.getElementById('app')
)
