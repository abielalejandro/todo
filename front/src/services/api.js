const apiUrl ='http://localhost:3000/api';

const add = (o) => {
    return fetch(`${apiUrl}/todos`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(o)
      });   
    
}

const update = (o) => {
    return fetch(`${apiUrl}/todos/${o.id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(o)
      });   
    
}

const remove = (id) => {
    return fetch(`${apiUrl}/todos/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'DELETE'
      });   
    
}

const get = (id) => {
    return fetch(`${apiUrl}/todos/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'GET'
      });   
    
}

const list = () => {
    return fetch(`${apiUrl}/todos`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'GET'
      });   
    
}

export default {
    get,
    list,
    update,
    add,
    remove
}