# POA-Product-Card

Este es un paquete de pruebas de desplieque en NPM

### Testeando

## Ejemplo


```

import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'poa-product-card'

```


```

    <ProductCard
            
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({reset, isMaxCountReached, maxCount, count, increaseBy}) => (
                        <>
                            <ProductImage  />
                            <ProductTitle  />
                            <ProductButtons />
                        </>
                    )
                }

     </ProductCard>

```