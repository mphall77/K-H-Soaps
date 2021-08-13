const ShoppingForm = () => {
	// const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return <form onSubmit={handleSubmit}>Form</form>;
};

export default ShoppingForm;
