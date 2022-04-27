import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductCard, { ProductImage, ProductButtons, ProductTitle } from '../.';

const App = () => {
  return (
    <ProductCard
      product={{
        id: '1',
        title: 'Producto Ejemplo',
        img: 'alguna_imagen.png',
      }}
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
    >
      {args => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
