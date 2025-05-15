import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../layouts/Container/Container";
import PageLayout from "../layouts/PageLayout/PageLayout";
import ButtonCard from "../../shared/components/ButtonCard/ButtonCard";

import { increaseCountInCart, decreaseCountInCart, deleteFromCart } from "../../redux/cart/cart-slice";
import { selectCart, selectTotalCartPrice, selectTotalCartItems } from "../../redux/cart/cart-selector";
import CartItem from "./CartItem/CartItem";
import CartForm from "./CartForm/CartForm";


import styles from "./Cart.module.css"

const Cart = () => {
    const items = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalCartPrice);
    const totalCount = useSelector(selectTotalCartItems)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onIncreaseCart = useCallback((id) => {
        dispatch(increaseCountInCart(id));

    }, [dispatch])

    const onDecreaseCart = useCallback(
        (id) => {
            dispatch(decreaseCountInCart(id));
        },
        [dispatch]
    );

    const onDeleteFromCart = useCallback(
        (id) => {
            dispatch(deleteFromCart(id));
        },
        [dispatch]
    );

    if (items.length === 0) {
        return (
            <Container>
                <PageLayout title="Shopping cart" buttonLabel="Back to the store" buttonLink="/categories">
                    <p className={styles.emptyMessage}>Looks like you have no items in your basket currently.</p>
                    <div onClick={() => navigate("/categories")}>
                        <ButtonCard title="Continue Shopping" />
                    </div>
                </PageLayout>
            </Container>
        );
    }

    const elements = items.map((item) => (
        <CartItem key={item.id} {...item}
            onIncreaseCart={onIncreaseCart}
            onDecreaseCart={onDecreaseCart}
            onDeleteFromCart={onDeleteFromCart} />

    ))
    return (

        <Container>
            <PageLayout title="Shopping cart" buttonLabel="Back to the store" buttonLink="/categories">
                <div className={styles.container}>
                    <div className={styles.left}>
                        {elements}
                    </div>

                    <CartForm totalPrice={totalPrice} totalCount={totalCount} className={styles.formWrapper} />

                </div>
            </PageLayout>
        </Container>

    )
}
export default Cart;