import { useEffect, useState } from "react";

export const PostAutor = (props: { userId: number }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/users/${props.userId}`);
                const data = await response.json();

                setUser(data);
            }
            catch (error) {
                console.log("Error al cargar el usuario: ", error)
            }
        }

        fetchUser()
    }, [props.userId]);

    if (!user) {
        return <p className="text-sm/6 font-semibold text-gray-900">...</p>;
    }

    return (
        <div className="flex flex-row gap-2 justify-center items-center">
            <img alt="userImg" src={user.image} className="size-8 flex-none rounded-full bg-gray-50" />
            <p className="text-xs font-semibold text-gray-900">
                {user.firstName} {user.lastName}
            </p>
        </div>
    )
}