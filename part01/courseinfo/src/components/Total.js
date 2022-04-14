import React from 'react';

const Total = ({ parts }) => {
    const total = parts.reduce((acc, obj) => acc += obj.exercises, 0);
    return (
        <p><strong>
            Total number of exercises: {total}
        </strong> </p>
    );
}

export default Total;