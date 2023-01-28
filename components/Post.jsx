export default function Post({post}) {
    return (
        <div className='bg-stone-700 w-[50rem] mx-auto p-4 mb-4'>
            <h2 className="text-white text-2xl font-bold mb-4">{post.author}</h2>
            <p className="text-white">{post.body}</p>
        </div>
    )
}
