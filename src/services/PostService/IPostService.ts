import Posts from "../../lib/Post";

export default interface IPostService {
    Index(): Promise<Posts | void>
    Show(id: number): Promise<Posts | void>
}