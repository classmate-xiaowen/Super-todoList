const url = require('url');

const {getTaskList,addTasklist,delTaskList} = require('./src/controllers/taskList')

const getPostData = (req) => {
    return new Promise((resolve,reject) => {
        if(req.method != 'POST'){
            resolve({});
            return;
        }

        let postData = '';
        req.on('data',chunk => {
            postData += chunk.toString();
        });

        req.on('end',() => {
            if(!postData){
                resolve({});
                return;
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
}

const serverHandler = (req,res) => {
    // 引入第三方库解析 URL 参数
    const parseUrl = url.parse(req.url,true);
    const {method} = req;
    req.path = req.url.split('?')[0];
    let id = parseUrl.query.id;
    getPostData(req).then(postData => {
        req.body = postData
        if(method === 'GET' && req.path === '/api/getTaskList'){
            getTaskList().then(data => {
                res.end(
                    JSON.stringify(data)
                )
            })
            return;
        }
    
        if(method === 'POST' && req.path === '/api/addTaskList'){        
            const postData = req.body;
            addTasklist(postData).then(data => {
                res.end(
                    JSON.stringify(data)
                )
            })
            return;
        }
     
        if(method === 'POST' && req.path === '/api/delTaskList'){        
            delTaskList(id).then(data => {
                res.end(
                    JSON.stringify(data)
                )
            })
            return;
        }
        res.setHeader('Content-Type','application/json');
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('404 Not Found');
        res.end();
    })
}

module.exports = {serverHandler};