import React from "react";

// Now pass down { value } as a prop.
// Then pass value into the div by escaping into JSX

export default function Square ({ value }) {
    return (
        <>
            <div className="square">
                <button>{value}</button>
            </div>
        </>
    )
}