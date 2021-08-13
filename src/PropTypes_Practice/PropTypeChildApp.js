import React from 'react';
import PropTypes from 'prop-types';

PropTypeChildApp.propTypes = {
    stateForProps: PropTypes.string
};

function PropTypeChildApp(props) {
    return (
        <div>
            {console.log(typeof props.stateForProps)}
            <p>{props.stateForProps}</p>
            {typeof props.stateForProps}
        </div>
    );
}

export default PropTypeChildApp;