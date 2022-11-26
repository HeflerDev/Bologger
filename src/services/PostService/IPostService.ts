import Post from "../../lib/Post";

export default interface IPostService {
    posts: any
    Index(): Promise<Post | void>
    Show(id: number): Promise<Post | void>
}