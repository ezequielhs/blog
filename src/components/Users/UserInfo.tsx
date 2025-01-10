
export const UserInfo = ({ user }: { user: User }) => {
    return (
        <>
            <div className="flex min-w-0 gap-x-4">
                <img alt="userImg" src={user.image} className="size-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">{user.firstName} {user.lastName}</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">{user.email}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 text-gray-900">{user.role}</p>
                <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">En Linea</p>
                </div>
            </div>
        </>
    )
}