import { auth, googleProvider, signInWithPopup, signOut } from "@/../firebase";
import { useRouter } from "next/router";
import { useState } from "react";

export const Header = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user)
        } catch (error) {
            console.error("Error al iniciar sesion: ", error)
        }
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error al cerrar sesion: ", error)
        }
    }

    return (
        <div className="fixed flex items-center justify-center w-full top-3 px-10 md:px-28">
            <div className="relative min-h-12 w-full flex items-center justify-between flex-shrink-0 rounded-2xl bg-opacity-10 backdrop-blur-xl border bg-white shadow-lg px-3 py-2">
                <div className="flex flex-row items-center">
                    <img className="w-20 mr-3" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Infobae.com_logo.png" />
                    <button type="button" onClick={() => router.push("/")} className="font-bold text-base px-3 hover:text-gray-500">Inicio</button>
                    <button type="button" onClick={() => router.push("/users")} className="font-bold text-base px-3 hover:text-gray-500">Usuarios</button>
                </div>
                <div className="flex items-center justify-end gap-2">
                    {user ?
                        <button type="button" onClick={handleLogout} className="font-normal h-8 text-sm px-3 border border-orange-100 bg-orange-100 rounded-full hover:bg-orange-50 hover:border-orange-300">CERRAR SESIÓN</button>
                        :
                        <button type="button" onClick={handleLogin} className="font-normal h-8 text-sm px-3 rounded-full border border-gray-200 hover:bg-orange-50">INICIAR SESIÓN</button>
                    }
                </div>
            </div>
        </div>
    )
}