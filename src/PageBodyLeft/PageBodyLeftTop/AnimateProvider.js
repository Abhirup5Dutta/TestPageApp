import React, { useState, useEffect } from 'react'

const AnimateProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);
    return children(value);
};

export default AnimateProvider
