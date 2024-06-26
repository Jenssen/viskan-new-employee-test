import {connect} from 'deku-redux';
import {fetch, increase, decrease} from './actions';
import Component from './components';

// Connect "Component" to the redux state
export default connect(
	state => ({
		articles: state.shopcart.articles
	}),
	dispatch => ({
		// Creates an action and dispatch it it so it can be caught by a reducer
		fetch: () => dispatch(fetch()),
		increase: (e) => dispatch(increase(e)),
		decrease: (e) => dispatch(decrease(e))
	})
)(Component);
