export default interface IPictureService {
    picture: string

    GetRandom(width: number, height?: number): Promise<any>

    GenBatch(width: number, height?: number): Promise<any>
}