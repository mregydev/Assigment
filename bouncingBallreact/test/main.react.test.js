import React from 'react';
import renderer from 'react-test-renderer';
import mainComp from '../src/Components/Container/main.jsx';

test('main window should be rendered', () => {
  const component = renderer.create(
    <mainComp></mainComp>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});



