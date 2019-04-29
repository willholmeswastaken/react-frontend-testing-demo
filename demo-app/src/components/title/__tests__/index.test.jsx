import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '..';


configure({ adapter: new Adapter() });

const setup = propOverrides => {
     const props = Object.assign({
         titleText: 'test'
     }, propOverrides);

     const wrapper = shallow(<Title {...props} />);

     return {
         wrapper,
         props,
         isTitleRendered: wrapper.contains(props.titleText),
         isUsingHeader: wrapper.exists('h1')
     }
}

describe('<Title />', () => {
    it('renders the correct title on the component', () => {
        const { isTitleRendered } = setup();
        expect(isTitleRendered).toBeTruthy();
    })
    it('does not render a title on the component', () => {
        const { isTitleRendered } = setup({ titleText: '' });
        expect(isTitleRendered).toBeFalsy();
    })
    it('is using a <h1> element', () => {
        const { isUsingHeader } = setup();
        expect(isUsingHeader).toBeTruthy();
    })
})