import IPostService from "./IPostService";
import Post from "../../lib/Post";
import axios from "axios";
import Comment from "../../lib/Comment";

export default class PostService implements IPostService {
    public posts!: Post[]
    public comments!: Comment[]
    private url: string | undefined = process.env.API_URL

    public async Index(): Promise<any> {
        try {
            await axios.get(this.url + "/posts")
                .then((res) => this.posts = res.data)
        } catch (err) {
            throw err
        }
    }

    public async Comments(id: number): Promise<void> {
        try {
            await axios.get(this.url + `/posts/${id}/comments`)
                .then(res => this.comments = res.data)
        } catch (err) {
            throw err
        }
    }

}