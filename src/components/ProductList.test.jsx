import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductList } from './ProductList';

describe('<ProductList/>', () => {
    it('Should render a list of products', () => {
        const mockProducts = [
            {
                id: 1,
                name: "Soja Texturizada",
                price: 30,
            },
            {
                id: 2,
                name: "Tempeh",
                price: 15,
            },
            {
                id: 3,
                name: "Tofu",
                price: 25
            },
        ];
        render(<ProductList items={mockProducts} />)
        const products = screen.getAllByRole('listitem');

        expect(products).toHaveLength(3);
    })
})