import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

const ValidatedRoute = (validator) => {
	return function(ComposedComponent) {
		class ValidatedComponent extends React.Component {
			constructor(props) {
				super(props)

				this.state = {
					isValid: true
				}
			}

			render() {
				if (!validator(this.props.match.params)) {
					return <Redirect to='/not-found' />
				}

				return <ComposedComponent {...this.props} />
			}
		}

		ValidatedComponent.propTypes = {
			match: PropTypes.object.isRequired
		}

		return ValidatedComponent
	}
}

export default ValidatedRoute
