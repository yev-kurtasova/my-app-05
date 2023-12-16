export function Posts({ data }) {
    return (
        <>
        <h2>Posts</h2>
        <ul>
            {data.map(item =>
                <li key={item.id}>{item.title}</li>
                )}
        </ul>
        </>
    )
}