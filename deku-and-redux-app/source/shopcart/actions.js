// A dummy action for dispatching the action type `SHOPCART_FETCHED` with a payload of dummy articles
export const fetch = () => ({
	type: 'SHOPCART_FETCHED',
	payload: {
		// Dummy articles
		articles: [{
			id: 1,
			name: 'Dummy article 1',
			price: 5,
			quantity: 1,
			clicked: 0
		}, {
			id: 2,
			name: 'Dummy article 2',
			price: 10,
			quantity: 2,
			clicked: 0
		}]
	}
});
export const increase = (e) => ({
	type: 'SHOPCART_INCREASED',
	payload: { id: e.id }
})
export const decrease = (e) => ({
	type: 'SHOPCART_DECREASED',
	payload: { id: e.id }
})
