import React, { PropTypes, Component } from 'react';

export default class Header extends Component {
		render() {
				const { name } = this.props
				return	<div>
							<p>Hello, {name}!</p>
						</div>
	}
}
Header.propTypes = {
		name: PropTypes.string.isRequired
}