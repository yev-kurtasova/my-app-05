import { useEffect, useState } from "react";

function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(data => setComments(data))
      }, [])

    return (
        <>
        <h2>Comments</h2>
        <ul>
            {comments.map(item =>
                <li key={item.id}>{item.email}</li>
                )}
        </ul>
        </>
    )
}

export default Comments;