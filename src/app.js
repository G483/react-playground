const cards = (state, action) => {
	switch(action.type) {
		case 'ADD_CARD':
			let newCard = Object.assign({}, action.data, {
				score: 1,
				id: +new Date
			});
				return state.concat([newCard]);
			default: 
				return state || [];
	}
};

const store = Redux.createStore(Redux.combineReducers({
	cards
}));

store.subscribe(function() {
	console.log(store.getState());
});

store.dispatch({
	type: 'ADD_CARD',
	data: {
		front: 'front',
		back: 'back'
	}
});

const App = (props) => {
	return(<div>{props.children}</div>);	
};

const Sidebar = React.createClass({
	render() {
		let props = this.props;

		return(
			<div class="col-sm-4">
				<h3>Add a deck</h3>
				<ul>
					{props.decks.map((deck, i) => 
							<li key={i}>{deck.name}</li>
						)}
				</ul>
				{props.addingDeck && <input ref='add' />}
			</div>
		);
	}
});

ReactDOM.render(
	<App>
		<Sidebar decks={ [{name: 'test123'}] } addingDeck={true} />
	</App>,
	document.getElementById('root')
);