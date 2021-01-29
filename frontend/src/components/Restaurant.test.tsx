import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Restaurant from './Restaurant';

test('render online restaurant', () => {
  const data = {
    blurhash: 'UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX',
    launch_date: '2020-04-20',
    location: [
      24.938082,
      60.17626
    ],
    name: 'Sea Chain',
    online: true,
    popularity: 0.956990414084132
  };

  const component = render(
    <Restaurant list={data} key={0} />
  );

  expect(component.container).toHaveTextContent(
    'Sea Chain'
  );

  expect(component.container).toHaveTextContent(
    'online'
  );
});

test('render offline restaurant', () => {
  const data = {
    blurhash: 'UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX',
    launch_date: '2020-04-20',
    location: [
      24.938082,
      60.17626
    ],
    name: 'Sea Chain',
    online: false,
    popularity: 0.956990414084132
  };

  const component = render(
    <Restaurant list={data} key={0} />
  );

  expect(component.container).toHaveTextContent(
    'Sea Chain'
  );

  expect(component.container).toHaveTextContent(
    'offline'
  );
});