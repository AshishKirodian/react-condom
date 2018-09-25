import * as  React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    ruleSet: PropTypes.string.isRequired,
    rule: PropTypes.string.isRequired,
    fallBack: PropTypes.any
}

const defaultProps = {
    ruleSet: [''],
    rule: '',
    fallBack: <span />
}

class ReactCondom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.ruleSet.indexOf(this.props.rule) > -1) {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        } else {
            return (
                <div>
                    {this.props.fallBack}
                </div>
            );
        }


    }
}

ReactCondom.propTypes = propTypes;
ReactCondom.defaultProps = defaultProps;

export default ReactCondom;