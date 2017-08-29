import React from 'react'
import PropTypes from 'prop-types'

/** A dumb component that says "hello" */
export const Docs = ({name}) => (<div>Hello {name}</div>)

Docs.propTypes = {
  /** the name of the person to say "hello" to */
  name: PropTypes.string
}

Docs.defaultProps = {
  name: 'World'
}

export default Docs
