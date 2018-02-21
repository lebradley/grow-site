import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';

it('should render the navigation component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
});