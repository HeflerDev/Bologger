import Post from "../../lib/Post";

export default interface IPostService {
    posts: any
    comments: any

    Index(): Promise<Post | void>

    Comments(id: number): Promise<void>
}