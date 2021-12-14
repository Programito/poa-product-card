import { useProduct } from '../hooks/useProduct'
import React, { createContext } from 'react'

import styles from '../styles/styles.module.css'

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
// import { ProductTitle } from './ProductTitle';
// import { ProductImage } from './ProductImage';
// import { ProductButtons } from './ProductButtons';



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;



// interface ProductButtonsProps {
//     increaseBy: (value: number)=> void,
//     counter: number
// }

// export const ProductButtons = ({counter, increaseBy}: ProductButtonsProps) => {


export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[],
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void;
    value?: number,
    initialValues?: InitialValues 
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {


    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues})

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {/* <img className={styles.productImg} src='./coffee-mug.png' alt="Coffee Mug" /> */}
                {/* <img className="{styles.productImg}" src={noImage} alt="Coffee Mug" /> */}

                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                })}

                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />

            <ProductButtons increaseBy={increaseBy} counter={counter} />  */}
            </div>
        </Provider>
    )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;