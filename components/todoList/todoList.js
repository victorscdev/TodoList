import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './todoList.less'

class todoList extends PureComponent {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="todoList"></div>
        );
    }
}

todoList.propTypes = {}

todoList.defaultProps = {}

export default todoList
