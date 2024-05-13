const initialState = {
	articles: []
};

// Redux calls this function upon every dispatch since it is included in `../reducer.js`
// `state` is the current state
// `action` is what was dispatched
// It returns the new state for this reducer
export default (state = initialState, action) => {
	switch (action.type) {
		// When action type `SHOPCART_FETCHED` has been dispatched
		case 'SHOPCART_FETCHED': {
			return {
				...state, // Append the current state
				articles: action.payload.articles // Then overwrite the `articles` key in the state with the payload
			};
		}
		case 'SHOPCART_INCREASED': {
			return {
				...state,
				articles: state.articles.map(article => {
					if (article.id !== action.payload.id) {
						return article
					}

					// Logic to increase more every 3 click
					let quantity
					if (article.clicked === 2) {
						quantity = article.quantity + 3
						article.clicked = 0
					} else {
						quantity = article.quantity + 1
						article.clicked = article.clicked + 1
					}

					return {
						...article,
						quantity: quantity
					}
				}),
				clicked: state.clicked + 1
			}
		}
		case 'SHOPCART_DECREASED': {
			return {
				...state,
				articles: state.articles.map(article => {
					if (article.id !== action.payload.id) {
						return article
					}

					// Logic to decrease more every 3 click
					let quantity
					if (article.clicked === 2) {
						quantity = article.quantity - 3
						article.clicked = 0
					} else {
						quantity = article.quantity - 1
						article.clicked = article.clicked + 1
					}

					// Avoid negative quantity
					if (quantity < 0) {
						quantity = 0
					}

					return {
						...article,
						quantity: quantity
					}
				})
			}
		}
		// If the action has not been caught, return the current state
		default: {
			return state;
		}
	}
};
