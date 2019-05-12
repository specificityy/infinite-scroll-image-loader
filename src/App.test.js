import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

describe('App', () => {
    it('renders cards Grid', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Grid')).toHaveLength(1);
    });

    it('renders cards inside of Grid', () => {
        const wrapper = mount(<App cards={[{ id: 1 }, { id: 2 }]} />);
        expect(wrapper.find('Grid').find('Card')).toHaveLength(2);
    });
});
