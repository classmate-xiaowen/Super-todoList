const {exeSQL} = require('../db/mysql.js')

const getTaskList = () => {
    let sql = 'select * from taskList where isShow = 1';
    return exeSQL(sql)
}

const addTasklist = (data) => {
    console.log(data)
    const {id,title,detail,date,type,clock} = data;
    let sql = `insert into taskList (id,title,detail,date,type,clock) values ('${id}','${title}','${detail}','${date}','${type}',${clock});`;
    return exeSQL(sql)
}

const delTaskList = (id) => {
    console.log(id);
    // const id = data.id;
    let sql = `update taskList set isShow=0 where id = '${id}';`;
    return exeSQL(sql).then( data => {
        if(data.affectedRows > 0){
            return true;
        }
        return false;
    })
}

module.exports={getTaskList,addTasklist,delTaskList};