//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fastCallbackFn) => {
  return ((...val) => new Promise((resolve, reject) => {
    const callback = (err, data) => {
      if(err) {
        reject(new Error('Failed callback'));        
      }
      else{
        resolve(data);
      }
    };
    fastCallbackFn(...val, callback)    
  }))
};

export const all = (promiseArr) => {
  if(!promiseArr) return Promise.resolve(undefined)
  if(promiseArr.length == 0) return Promise.resolve([]);
  
  return new Promise((resolve, reject) => {
    const arr = Array(promiseArr.length)
    let counter = 0;
    for (let [i, promise] of promiseArr.entries()){
      Promise.resolve(promise)
      .then(res => {
        arr[i] = res;
        counter++;
        if(counter == promiseArr.length) resolve(arr)
        }).catch(err => reject(err))   
    }
  })
};

export const allSettled = (promiseArr) => {
  if(!promiseArr) return Promise.resolve(undefined)
  if(promiseArr.length == 0) return Promise.resolve([]);
  
  return new Promise((resolve, reject) => {
    const arr = Array(promiseArr.length)
    let counter = 0;
    for (let [i, promise] of promiseArr.entries()){
      Promise.resolve(promise)
      .then(res => {
          arr[i] = res;
          counter++;        
        })
      .catch(err => {
          arr[i] = err;
          counter++;      
        })
      .finally(() => {counter == promiseArr.length && resolve(arr)})  
    }
  })
};

export const race = (promiseArr) => {
  if(!promiseArr) return Promise.resolve(undefined)
  if(promiseArr.length == 0) return Promise.resolve([]);
  
  return new Promise((resolve, reject) => {
      for (let [i, promise] of promiseArr.entries()){
      Promise.resolve(promise)
      .then(res => {      
          resolve(res)                 
        })
      .catch(err => reject(err))      
    }
  })
};

export const any = (promiseArr) => {
  if(!promiseArr) return Promise.resolve(undefined)
  if(promiseArr.length == 0) return Promise.resolve([]);
  
  return new Promise((resolve, reject) => {
      const arr = Array(promiseArr.length)
      let counter = 0
      for (let [i, promise] of promiseArr.entries()){
      Promise.resolve(promise)
      .then(res => {      
          resolve(res)                 
        })
      .catch(err => {
        counter++;
        arr[i] = err;
        if(counter == promiseArr.length) reject(arr)})      
    }
  })
  
};
