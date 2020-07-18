export interface IAeroplane{
    aeroplaneID:number,
    aeroplaneName:string;
    passagersNumber:number;
    aeroplaneLength:number;
}
export class Aeroplane implements IAeroplane{

    constructor(public aeroplaneID:number,
        public aeroplaneName:string,
        public passagersNumber:number,
        public aeroplaneLength:number){

    }

}