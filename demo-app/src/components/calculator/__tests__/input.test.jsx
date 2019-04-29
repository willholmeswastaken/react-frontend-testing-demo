import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../input';


configure({ adapter: new Adapter() });

const setup = propOverrides => {
     const props = Object.assign({
         title: 'test',
         onChange: jest.fn()
     }, propOverrides);

     const wrapper = shallow(<Input {...props} />);

     return {
         wrapper,
         props,
         isTitleRendered: wrapper.contains(props.title),
         changeValue: val => wrapper.find('.value-input').simulate('change', { target: { value: val }})
     }
}

describe('<Input />', () => {
    it('renders the correct title on the component', () => {
        const { isTitleRendered } = setup();
        expect(isTitleRendered).toBeTruthy();
    })
    it('onchange is hit when the value is updated', () => {
        const { props, changeValue } = setup();
        const valueToUpdate = 2;
        changeValue(valueToUpdate);
        expect(props.onChange).toHaveBeenCalledWith(valueToUpdate);
    })
})