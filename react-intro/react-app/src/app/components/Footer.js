import React from 'react';
import PropTypes from 'prop-types';

export function Footer(props){
    return (
        <div>
            <hr />
            <h5>Copyright @ {props.year}, {props.company}</h5>
        </div>
    );
}

Footer.propTypes = {
    year: PropTypes.number.isRequired,
    company: PropTypes.string
};

Footer.defaultProps = {
    company:"React Apps"
};        



