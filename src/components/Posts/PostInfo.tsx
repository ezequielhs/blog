import { useState } from "react";
import { PostAutor } from "./PostAutor"
import { PostComments } from "./PostComments";
import Modal from "react-modal";

export const PostInfo = ({ post }: { post: Post }) => {
    const [openComments, setOpenComments] = useState(false);

    const customStyles = {
        content: {
            width: "50%",
            top: "50%",
            left: "50%",
            boxShadow: "8px",
            transform: "translate(-50%, -50%)",
        },
    };

    const handleClose = () => {
        setOpenComments(false)
    }

    return (
        <>
            <div className="flex w-[80%] gap-x-4 flex-col items-start gap-y-2 overflow-hidden">
                <div className="min-w-0 flex-auto">
                    <p className="text-lg font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-1 text-base text-gray-500">{post.body}</p>

                </div>
                <PostAutor userId={post.userId} />
                <button type="button" className="font-normal h-8 text-sm px-3 rounded-full border border-gray-200 hover:bg-orange-50" onClick={() => { setOpenComments(true) }}>VER COMENTARIOS</button>
                <p className="mt-1 truncate text-xs text-gray-500">
                    {post.tags.join(", ")}
                </p>
            </div>
            <Modal
                isOpen={openComments}
                style={customStyles}
            >
                <button type="button" className="absolute top-4 right-4" onClick={handleClose}>X</button>
                <PostComments postId={post.id} />
            </Modal>
        </>
    )
}