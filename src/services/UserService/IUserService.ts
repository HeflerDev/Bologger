import User from "../../lib/User";

export default interface IUserService {
    Index(): Promise<void | User>
    Show(id: number): Promise<void | User>
}