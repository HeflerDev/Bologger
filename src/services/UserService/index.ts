import IUserService from "./IUserService";
import User from "../../lib/User";
import axios from "axios";

export default class UserService implements IUserService {
    private url: string | undefined = process.env.API_URL
    public users!: User[]
    public user!: User

    public async Index(): Promise<void | User> {
        try {
            await axios.get(this.url + "/users")
                .then((res) => this.users = res.data)
        } catch(err) {
            throw err;
        }
    }

    public async Show(id: number): Promise<void> {
        try {
            await axios.get(this.url + `/users/${id}`)
                .then((res) => this.user = res.data)
        } catch (err) {
            throw err
        }
    }

}