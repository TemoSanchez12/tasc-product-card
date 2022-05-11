import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';

import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe mostrar el componenete correctamente con la imagen pasada por parametreo', () => {
    const wrapper = renderer.create(<ProductImage img="./coffee-mug.png" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
