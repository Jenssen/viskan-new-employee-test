/** @jsx dom */
import dom from 'magic-virtual-element';
import Row from './row';

const renderRows = articles => articles.map(article => (
	<Row quantity={article.quantity} price={article.price} title={article.name}/>
));

const render = component => {
	const {props} = component;

	return (
		<div class='Shopcart'>
			<button onClick={props.fetch}>Load shopcart</button>
			{renderRows(props.articles)}
		</div>
	);
};

export default {render};
