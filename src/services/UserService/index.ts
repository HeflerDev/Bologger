import IUserService from "./IUserService";
import User from "../../lib/User";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config()
// TODO: Remove console
console.log(process.env)

export default class UserService implements IUserService {
    public Index(): Promise<void | User> {
        return Promise.resolve(undefined);
    }

    public Show(id: number): Promise<void | User> {
        return Promise.resolve(undefined);
    }

}