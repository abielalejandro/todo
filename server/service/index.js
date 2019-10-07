const {throwError} = require('./util');
let bd = [];

function generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string;
}

function createOrUpdate(req,res) {
    let data = req.body;
    let id= req.params.id || null;
    if (id) {
        let found = bd.findIndex(function(item){
            return item.id===id;
        });
        data.id = id;
        if (found>=0) {
            bd[found] = data;
        }
        else {
            throwError(404,"Todo not found");
        }
    }
    else {
        data.id=generate_random_string(20);
        bd.push(data);
    }
    res.json(data);
}

function remove(req,res) {
    let id= req.params.id || null;
    if (id) {
        let found = bd.findIndex(function(item){
            return item.id===id;
        });

        if (found>=0) {
           bd.splice(found,1);
        }
        else {
            throwError(404,"Todo not found");
        }
        res.json({success:true});
    }
    else {
        throwError(404,"Todo not found");
    }
}

function get(req,res) {
    let id= req.params.id || null;
    if (id) {
        let found = bd.findIndex(function(item){
            return item.id===id;
        });

        if (found>=0) {
            res.json( bd[found]);
        }
        else {
            throwError(404,"Todo not found");
        }
    }
    else {
        throwError(404,"Todo not found");
    }
}

function list(req,res) {
    res.json( bd); 
}

module.exports = {
    createOrUpdate,
    remove,
    get,
    list
}