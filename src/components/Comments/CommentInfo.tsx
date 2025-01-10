export const CommentInfo = ({ comment }: { comment: Comment }) => {
    return (
        <div className="flex w-full gap-x-4 flex-col items-start gap-y-2 overflow-hidden">
            <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold text-gray-900">{comment.user.username}</p>
                <p className="mt-1 truncate text-base text-gray-500">{comment.body}</p>
            </div>
        </div>
    )
}