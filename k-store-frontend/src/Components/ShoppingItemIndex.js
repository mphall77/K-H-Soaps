const ShoppingItemIndex = ({ cart, removeItem }) => {
	return (
		<ul>
			{cart.map((item, i) => {
				return (
					<li key={i}>
						{item}
						<button onClick={() => removeItem(item.id)}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export default ShoppingItemIndex;
