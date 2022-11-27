import IPictureService from "./IPictureService";
import axios, {AxiosResponse} from "axios";

export default class PictureService implements IPictureService {
    public picture!: string

    public async GetRandom(width: number, height?: number): Promise<void> {
        try {
            await axios.get(`https://picsum.photos/${width}/${height}`)
                .then((res: AxiosResponse) => this.picture = res.data)
        } catch (err) {
            throw err;
        }
    }

    public GenBatch(width: number, height?: number): Promise<void> {
        return Promise.resolve(undefined);
    }
}