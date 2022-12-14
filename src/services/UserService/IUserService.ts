import User from "../../lib/User";

export default interface IUserService {
    user: User
    users: User[]

    Index(): Promise<void | User>

    Show(id: string | undefined): Promise<void>
}