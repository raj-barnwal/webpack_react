import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
    render() {
        return(
            <div>
                <div>
                    <strong>
                        Contact Person :
                    </strong>
                    <span onClick={this.props.clickCheck}>
                    &nbsp;{this.props.name}
                    </span>
                </div>
                <div>
                    <strong>
                        Contact :
                    </strong>
                    &nbsp;{this.props.contact}
                </div>
                <input type="text" onChange={this.props.changedName} value={this.props.name} />
            </div>
        )
    }
}

export default Details;

Details.propTypes = {
    name: PropTypes.string,
    contact: PropTypes.number
};
