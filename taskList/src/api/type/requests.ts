export interface requests {
    method:string,
    url:string,
    data?:{
        id:string,
        title:string,
        detail:string,
        date:string,
        type:string,
        clock:boolean,
    }
}