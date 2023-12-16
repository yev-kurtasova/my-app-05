import { useState } from "react";

export function Child({ props }) {

    const [prop, setProp] = useState(0);
    const onChangeProp = () => {
        setProp(prop + 1)
    }
    return (
        <>
            <p>{prop}</p>
            <button onClick={onChangeProp}>Change props</button>
        </>
    )
}