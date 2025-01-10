import { UserInfo } from "./UserInfo"

export const UsersList = ({ users }: { users: Array<User> }) => {
    return (
        <ul className="divide-y divide-gray-100 items-center justify-center">
            {users.map(user => (
                <li key={user.id} className="flex justify-between gap-x-6 py-5">
                    <UserInfo user={user} />
                </li>
            ))}
        </ul>
    )
}