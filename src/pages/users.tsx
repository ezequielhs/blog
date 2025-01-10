import { UsersList } from "@/components/Users/UsersList";
import { useEffect, useState } from "react"
import { auth } from "@/../firebase";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                setUsers(data.users)
            }
            catch (error) {
                console.log("Error al cargar los usuarios: ", error)
            }
            setLoading(false)
        }

        fetchUsers()

        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
        })

        return () => unsubscribe();
    }, [])

    return (
        <div className="flex flex-col w-full h-full mt-20 px-10 md:px-28">
            {user ?
                <>
                    <h1 className="font-bold text-3xl">Usuarios</h1>
                    {loading && <p className="text-base py-6">Cargando...</p>}
                    <UsersList users={users} />
                </> :
                <h1 className="font-bold text-3xl">No tienes permisos para acceder a esta seccion.</h1>}
        </div>
    )
}