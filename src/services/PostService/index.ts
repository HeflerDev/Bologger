import IPostService from "./IPostService";
import Post from "../../lib/Post";
import axios from "axios";

export default class PostService implements IPostService {
    public posts!: Post
    public selectedPost!: Post
    private url: string | undefined = process.env.API_URL

    public async Index(): Promise<any> {
        try {
            await axios.get(this.url + "/posts")
                .then((res) => this.posts = res.data)
        } catch(err) {
            throw err
        }
    }

    public Show(id: number): Promise<Post | void> {
        return Promise.resolve(undefined);
    }

}