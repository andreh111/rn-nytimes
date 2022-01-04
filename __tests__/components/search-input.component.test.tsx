import React from 'react';
import renderer from 'react-test-renderer';

import SearchInput from '../../src/components/search-input/search-input.component';

describe('search-input.component test', () => {
  it('search-input.component should match snapshot', () => {
    const component = renderer.create(<SearchInput
          query='python' 
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
