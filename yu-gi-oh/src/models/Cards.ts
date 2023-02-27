 export interface Cards{
    id:number,
    name:string,
    type:string,
    description:string,
    atk:number,
    def:number,
    level:number,
    images:{
        id:number,
        image:string,
    }[],
}