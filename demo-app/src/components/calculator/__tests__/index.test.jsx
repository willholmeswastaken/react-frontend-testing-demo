import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calculator from '..';


configure({ adapter: new Adapter() });

describe('<Calculator />', () => {
    it('renders the correct elements', () => {
        const wrapper = shallow(<Calculator />);
        expect(wrapper.exists('Title')).toBeTruthy();
        expect(wrapper.exists('Result')).toBeTruthy();
        expect(wrapper.find('Input').length).toBe(2);
    })
})