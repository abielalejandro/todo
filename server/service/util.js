function throwError(code,msg) {
  let error =  new Error(msg);
  error.status= code;
  throw error;
}

module.exports = {
    throwError: throwError
}
