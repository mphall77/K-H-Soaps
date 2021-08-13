import { useState } from "react";
import ShoppingItemIndex from "./ShoppingItemIndex";
import ShoppingForm from "./ShoppingForm";

const Cart = () => {
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		const newItem = { id: item.id, soap: item };
		setCart((prevState) => ({
			cart: [newItem, ...prevState.cart],
		}));
	};
	const removeItem = (index) => {
		const filterArr = cart.filter((item) => item.index != index);
		setCart({ cart: filterArr });
	};

	return (
		<section>
			<h3>My Shopping Cart</h3>
			<label htmlFor="itemInput">
				<input type="text" id="itemInput" />
			</label>
			<button onClick={addItem}>-</button>
			<button onClick={removeItem}>+</button>

			<ShoppingForm addItem={addItem} />
			<ShoppingItemIndex cart={cart} removeItem={removeItem} />
		</section>
	);
};

export default Cart;
