import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Title from "../Components/Title";
import Modal from "../Components/Modal";
import "./Cart.css";

const Cart = (props) => {
    /* Toggle terms modal. */
    const [termsClicked, setTermsClicked] = useState(false);
    /* Activate checkout button when checkbox is checked. */
    const [checked, setChecked] = useState(false);
    const activateCheckOutBtn = () => setChecked(!checked);
    const { cartItems, onAdd, onRemove } = props;
    /* Calculating tot amount of products with initial value of 0 */
    const itemsPrice = cartItems.reduce(
        (accumulator, current) => accumulator + current.price * current.qty,
        0
    );
    const checkoutBtnAlert = () => alert("Implement Checkout");
    const totalPrice = itemsPrice;

    const contShopBtnStyle = {
        width: "11rem",
        backgroundColor: "#EECC51",
    };

    const readTermsBtnStyle = {
        backgroundColor: "#8DA2EB",
    };

    const checkoutBtnInactiveStyle = {
        backgroundColor: "#E7F4E5",
        color: "#B5B5B5",
    };

    const checkoutBtnActiveStyle = {
        backgroundColor: "#9AEB8D",
    };

    const checkoutBtnAlertHandler = checked ? checkoutBtnAlert : null;
    const checkoutBtnStyleHandler = checked
        ? checkoutBtnActiveStyle
        : checkoutBtnInactiveStyle;

    const hideModal = {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        opacity: "0",
        visibility: "hidden",
        transform: "scale(1.1)",
        transition:
            "visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s",
    };

    const showModal = {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        opacity: "1",
        visibility: "visible",
        transform: "scale(1)",
        transition:
            "visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s",
    };

    const modalHandler = termsClicked ? showModal : hideModal;

    return (
        <>
            <main className="cartContainer">
                <div className="cartWrapper">
                    <div className="cart">
                        <div className="cartHeadingContainer">
                            <Title title="my cart" />
                        </div>
                        <div className="cartContentContainer">
                            <div>
                                {cartItems.length === 0 && (
                                    <div className="cartColourComponent textCenter">
                                        Cart is Empty!
                                    </div>
                                )}
                            </div>
                            {cartItems.map((item) => (
                                <div key={item.id} className="row">
                                    <div
                                        className="productImg"
                                        style={{
                                            background: "#" + item.colour,
                                        }}
                                    ></div>
                                    <div className="cartColourComponent">
                                        {item.name}
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => onAdd(item)}
                                            className="add"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => onRemove(item)}
                                            className="remove"
                                        >
                                            -
                                        </button>
                                    </div>
                                    <div className="cartColourComponent">
                                        {item.qty}
                                    </div>
                                    <div className="cartColourComponent cartColourPrice">
                                        €&nbsp;{item.price.toFixed(2)}
                                    </div>
                                </div>
                            ))}
                            {cartItems.length !== 0 && (
                                <>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="cartTotal cartTotalText">
                                            <strong>Total</strong>
                                        </div>
                                        <div className="cartTotal cartTotalPrice">
                                            <strong>
                                                €&nbsp;{totalPrice.toFixed(2)}
                                            </strong>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Hide or show actionbar depending on items in cart exists */}
                        <div
                            className={
                                cartItems.length !== 0
                                    ? "cartActionBar"
                                    : "cartActionBarHidden"
                            }
                        >
                            <Link to="./colours">
                                <Button
                                    style={contShopBtnStyle}
                                    text="continue shopping"
                                />
                            </Link>
                            <Button
                                style={readTermsBtnStyle}
                                text="read terms"
                                onClick={() => setTermsClicked(true)}
                            />
                            <div className="cartCheckboxContainer">
                                <label className="cartColourComponent cartCheckboxLabel">
                                    accept terms
                                </label>
                                <input
                                    type="checkbox"
                                    id="cartCheckbox"
                                    onClick={activateCheckOutBtn}
                                />
                            </div>
                            <Button
                                style={checkoutBtnStyleHandler}
                                text="to checkout"
                                onClick={checkoutBtnAlertHandler}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Modal
                modal={modalHandler}
                onClick={() => setTermsClicked(false)}
            />
        </>
    );
};

export default Cart;
