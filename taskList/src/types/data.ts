interface task {
    id:string,
    title:string,
    detail:string,
    date:string,
    type:string,
    clock:boolean,
    isFinish:0 | 1,
    isShow:0 | 1
}

export interface TaskList extends Array<task> {}