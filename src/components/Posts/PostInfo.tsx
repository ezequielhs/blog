import { PostAutor } from "./PostAutor"

export const PostInfo = ({ post }: { post: Post }) => {
    return (
        <div className="flex w-[80%] gap-x-4 flex-col items-start gap-y-2 overflow-hidden">
            <div className="min-w-0 flex-auto">
                <p className="text-lg font-semibold text-gray-900">{post.title}</p>
                <p className="mt-1 text-base text-gray-500">{post.body}</p>

            </div>
            <PostAutor userId={post.userId} />
            <p className="mt-1 truncate text-xs text-gray-500">
                {post.tags.join(", ")}
            </p>
        </div>
    )
}