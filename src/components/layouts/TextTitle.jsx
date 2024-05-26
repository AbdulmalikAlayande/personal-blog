import * as React from 'react';
import PropTypes from "prop-types";


export function TextTitle({title}) {
    return (
        <h3 className={"text-sm uppercase font-bold text-designColor tracking-wide"}>
            {title}
        </h3>
    );
}

TextTitle.propTypes = {
    title: PropTypes.string,
}

export default TextTitle