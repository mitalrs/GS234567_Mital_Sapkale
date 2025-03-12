// import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './router';
import '@testing-library/jest-dom';
// import Store from '../Pages/Store';
// import SKU from '../Pages/SKU';
// import Planning from '../Pages/Planning';
// import Charts from '../Pages/Charts';

describe('AppRoutes', () => {
  test('renders Store component by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Store/i)).toBeInTheDocument();
  });

  test('renders SKU component when navigating to /sku', () => {
    render(
      <MemoryRouter initialEntries={['/sku']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText(/sku/i)).toBeInTheDocument();
  });
});
