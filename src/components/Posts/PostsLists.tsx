import { PostInfo } from "./PostInfo"

export const PostsList = ({ posts }: { posts: Array<Post> }) => {
    return (
        <ul className="divide-y divide-gray-100 items-center justify-center">
            {posts.map(post => (
                <li key={post.id} className="flex justify-between gap-x-6 py-5">
                    <PostInfo post={post} />
                </li>
            ))}
        </ul>
    )
}