import IUserService from "./IUserService";
import User from "../../lib/User";
import axios from "axios";

export default class UserService implements IUserService {
    public users!: User[]
    public user!: User
    private url: string | undefined = process.env.API_URL

    public async Index(): Promise<void | User> {
        try {
            await axios.get(this.url + "/users")
                .then((res) => this.users = res.data)
        } catch (err) {
            throw err;
        }
    }

    public async Show(id: string | undefined): Promise<void> {
        try {
            await axios.get(this.url + `/users/${id}`)
                .then((res) => this.user = res.data)
        } catch (err) {
            throw err
        }
    }

}