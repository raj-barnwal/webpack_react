import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
        return(
            <div>
                <div>
                    <strong>
                        Contact Person :
                    </strong>
                    <span onClick={()=>props.clickCheck}>
                        &nbsp;{props.name}
                    </span>
                </div>
                <div>
                    <strong>
                        Contact :
                    </strong>
                    &nbsp;{props.contact}
                </div>
                <input type="text" onChange={()=>props.changedName} value={props.name} />
            </div>
        )
};

export default Details;

Details.propTypes = {
    name: PropTypes.string,
    contact: PropTypes.number
};
