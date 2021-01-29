import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Restaurants from './Restaurants';

const data = [
  {
      blurhash: 'UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX',
      launch_date: '2020-04-20',
      location: [
          24.938082,
          60.17626
      ],
      name: 'Sea Chain',
      online: true,
      popularity: 0.956990414084132
  },
  {
      blurhash: 'UDSoswyZVqm.p%cRjLaKUgZ+k.kWrFZ%a$kX',
      launch_date: '2020-11-26',
      location: [
          24.938908,
          60.160413
      ],
      name: 'Salt',
      online: true,
      popularity: 0.8954324472876662
  },
  {
      blurhash: 'UDSYr*v7X%kVq0cOi%etTca$nibqr4a8bqk7',
      launch_date: '2020-01-05',
      location: [
          24.930132,
          60.152363
      ],
      name: 'Fake Tomato Mafia',
      online: true,
      popularity: 0.7953685298092403
  },
  {
      blurhash: 'UKNaZ$xnRXaQO5WEt2f7DfRpo?k8MptKV}ou',
      launch_date: '2020-03-14',
      location: [
          24.924752,
          60.179213
      ],
      name: 'Charming Pepper Emporium',
      online: true,
      popularity: 0.741748846018373
  },
  {
      blurhash: 'ULFgVE}sE3bvGNORnUj=A1JCoaniMUj0tMS5',
      launch_date: '2020-09-24',
      location: [
          24.936465,
          60.178633
      ],
      name: 'Loving Meat Basket',
      online: true,
      popularity: 0.7400471016913404
  },
  {
      blurhash: 'ULDK46wNI@jJ15NuxDbF0Ys+W.oc?8n+RoWF',
      launch_date: '2020-03-06',
      location: [
          24.943776,
          60.153804
      ],
      name: 'Vegetable Factory',
      online: true,
      popularity: 0.7332623605450638
  },
  {
      blurhash: 'UQCBXU,@JQn,${xEWXWo31OTwzW-N4Ncs+sV',
      launch_date: '2020-01-12',
      location: [
          24.925688,
          60.178389
      ],
      name: 'Cucumber Hotel',
      online: true,
      popularity: 0.6259073873586668
  },
  {
      blurhash: 'UKB#lk=qEmxC-}t2Rooc2^OY#+bHMSRUo]nj',
      launch_date: '2020-02-03',
      location: [
          24.933311,
          60.160549
      ],
      name: 'Horrific Lettuce',
      online: true,
      popularity: 0.5322843011301973
  },
  {
      blurhash: 'UNDVs2}5JWOFFyt2$eRoGZKPniw[VyRoS}t2',
      launch_date: '2020-05-04',
      location: [
          24.945715,
          60.167827
      ],
      name: 'Real Pizza Factory',
      online: true,
      popularity: 0.5045108175927286
  },
  {
      blurhash: 'U6T69eube;rHy,lNf%a3V5aOkUknu:ZTg1k-',
      launch_date: '2020-09-25',
      location: [
          24.95136,
          60.157142
      ],
      name: 'Rosemary',
      online: false,
      popularity: 0.8514554035262657
  }
];

test('render all 10 restaurants', () => {
  const component = render(
    <Restaurants lists={data}/>
  );

  const offset = 5;
  const all = component.container.querySelectorAll('.slick-slide');
  for (let i = 0; i < data.length; i++)
    expect(all[i+offset]).toHaveTextContent(data[i].name);
});

test('render 5 active restaurants of 10 restaurants', () => {
  const component = render(
    <Restaurants lists={data}/>
  );

  const active = component.container.querySelectorAll('.slick-active');
  for (let i = 0; i < 5; i++)
    expect(active[i]).toHaveTextContent(data[i].name);
});

test('render current restaurants', () => {
  const component = render(
    <Restaurants lists={data}/>
  );

  const current = component.container.querySelector('div.slick-slide.slick-active.slick-current');
  expect(current).toHaveTextContent(data[0].name);
});

describe('click next botton', () => {
  test('render current restaurants after click next', () => {
    const component = render(<Restaurants lists={data} />);
    const button = component.getByText('Next');
    fireEvent.click(button);

    const current = component.container.querySelector('div.slick-slide.slick-active.slick-current');
    expect(current).toHaveTextContent(data[1].name);
  });

  test('render 5 active restaurants after click next', () => {
    const component = render(<Restaurants lists={data} />);
    const button = component.getByText('Next');
    fireEvent.click(button);

    const active = component.container.querySelectorAll('.slick-active');
    for (let i = 0; i < 5; i++)
      expect(active[i]).toHaveTextContent(data[i+1].name);
  });
});

describe('click previous botton', () => {
  test('render current restaurants after click next', () => {
    const component = render(<Restaurants lists={data} />);
    const button = component.getByText('Previous');
    fireEvent.click(button);

    const current = component.container.querySelector('div.slick-slide.slick-active.slick-current');
    expect(current).toHaveTextContent(data[9].name);
  });

  test('render 5 active restaurants after click next', () => {
    const component = render(<Restaurants lists={data} />);
    const button = component.getByText('Previous');
    fireEvent.click(button);

    const active = component.container.querySelectorAll('.slick-active');
    for (let i = 0; i < 5; i++)
      expect(active[i]).toHaveTextContent(data[((i-1)<0)?(i-1+10):(i-1)].name);
  });
});