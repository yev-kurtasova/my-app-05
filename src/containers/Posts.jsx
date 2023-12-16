export function Posts({ data }) {
    return (
        <>
        <h1>Posts</h1>
        <ul>
            {data.map(item =>
                <li key={item.id}>{item.title}</li>
                )}
        </ul>
        </>
    )
}