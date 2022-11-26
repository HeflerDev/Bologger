import IPictureService from "./IPictureService";

export default class PictureService implements IPictureService {
    public async GetRandom(width: number, height?: number): Promise<any> {
        return Promise.resolve(undefined);
    }
}