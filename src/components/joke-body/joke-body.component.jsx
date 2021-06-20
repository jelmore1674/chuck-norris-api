import React from 'react';
import classes from './joke-body.module.css';

export default class JokeBody extends React.Component {
	constructor() {
		super();
		this.state = {
			joke: 'Loading...',
		};
	}

	componentDidMount() {
		fetch('https://api.chucknorris.io/jokes/random')
			.then((data) => data.json())
			.then((jokes) => this.setState({ joke: jokes.value }));
	}

	handleClick() {
		fetch('https://api.chucknorris.io/jokes/random').then((data) =>
			data.json().then((jokes) => this.setState({ joke: jokes.value }))
		);
	}

	render() {
		const { joke } = this.state;
		return (
			<div className={classes.content}>
				<div className={classes.header}>
					<h1>Chuck Norris Jokes</h1>
				</div>
				<div className={classes.joke}>
					<p>{joke}</p>
				</div>
				<div>
					<button
						className={classes.button}
						onClick={this.handleClick.bind(this)}>
						Load a random joke!
					</button>
				</div>
			</div>
		);
	}
}
