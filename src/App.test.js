/**
 * @jest-environment node
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('test test to pass test test', () => {
  const x = 1+1;
  expect(x).to.equal(2);
})

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
