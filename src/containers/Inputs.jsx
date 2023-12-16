import { useRef, useState } from "react";

function Inputs() {

    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();

    const [users, setUsers] = useState([]);

    const addUser = () => {
        setUsers([...users, { name: nameRef.current.value, lastName: lastNameRef.current.value, email: emailRef.current.value }]);

        // console.log(users.map(user => {
        //     <li>{user.name}</li>
        // }));
    }

    return (
        <>
            <h2>Personal Data</h2>
            <p>
                <input ref={nameRef} type="text" />
                <label>Name</label>
            </p>
            <p>
                <input ref={lastNameRef} type="text" />
                <label>Last name</label>
            </p>
            <p>
                <input ref={emailRef} type="email" />
                <label>Email</label>
            </p>
            <button onClick={addUser}>Submit</button>
            <ul>
                {users?.map((user, idx) => {
                    return <li key={idx}>{user.name}</li>
                })}
            </ul>
        </>
    )
}

export default Inputs;