import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Product from '../../components/product';
// connects react 15.5 enzyme-adapter which is required since Enzyme 3.0.0
require('../enzyme_setup');

//const Product = require('../../components/product');

describe('verify stock display logic', () => {
    test('should show "In Stock" when param is true', () => {
        const prod = mount(<Product instock='true' />);
        expect(prod.text()).toEqual('In Stock');
    });
    // test('should show "Out of Stock" when param is true', () => {
    //     const prod = shallow(<Product />);
    //     expect(prod.text()).toEqual('Out of Stock');
    // });
});