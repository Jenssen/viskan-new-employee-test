/** @jsx dom */
import dom from 'magic-virtual-element';

const render = component => {
	const {props} = component;
	const {price, quantity, title, id} = props;

	return (
		<div class='ShopcartRow'>
			<h1 class='ShopcartRow-title'>{title}</h1>
			<div class='ShopcartRow-quantity'>Quantity: {quantity}</div>
			<div class='ShopcartRow-unitPrice'>Unit price: {price} kr</div>
			<div class='ShopcartRow-totalPrice'>Total price {price} kr</div>
			<button onClick={() => props.increase({id})}>+</button>
			<button onClick={() => props.decrease({id})}>-</button>
		</div>
	);
};

export default {render};
