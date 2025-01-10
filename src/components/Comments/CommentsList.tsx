import { CommentInfo } from "./CommentInfo"

export const CommentsList = ({ comments }: { comments: Array<Comment> }) => {
    return (
        <ul className="divide-y divide-gray-100 items-center justify-center w-full h-full">
            {comments.length === 0 && <p className="text-sm/6 font-semibold text-gray-900">No hay comentarios en esta entrada</p>
            }
            {comments.map(comment => (
                <li key={comment.id} className="flex justify-between gap-x-6 py-5">
                    <CommentInfo comment={comment} />
                </li>
            ))}
        </ul>

    )
}