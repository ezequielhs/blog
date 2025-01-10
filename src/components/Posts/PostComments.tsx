import { useEffect, useState } from "react";
import { CommentsList } from "../Comments/CommentsList";

export const PostComments = (props: { postId: number }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/posts/${props.postId}/comments`);
                const data = await response.json();

                setComments(data.comments);
            }
            catch (error) {
                console.log("Error al cargar los comentarios: ", error)
            }
        }

        fetchComments()
    }, [props.postId]);

    if (!comments) {
        return <p className="text-sm/6 font-semibold text-gray-900">...</p>;
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-start">
            <p className="text-lg font-semibold text-gray-900">Comentarios</p>
            <CommentsList comments={comments} />
        </div>
    )
}