import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';

import { product2 } from '../data/product';

describe('ProductImage', () => {
  
    test('debe de mostrar el componente correctamente el productImage', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://img.jpg" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (<ProductImage img="https://img.jpg" />)
                }
            </ProductCard>
            
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

});