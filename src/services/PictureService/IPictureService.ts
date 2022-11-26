export default interface IPictureService {
    GetRandom(width: number, height?: number): Promise<any>
}