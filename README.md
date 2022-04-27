# TASC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Temo Sanchez

## Ejemplo

```
import {ProductCard, ProductImage, ProductButtons, ProductTitle} from 'tasc-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {(args) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>


```
