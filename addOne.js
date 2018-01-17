if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import Model from './model'

export const addOne = (event, context, callback) => {
  const handleError = err =>  {
    if (err) callback(JSON.stringify({
      statusCode: 500,
      errorMsg: err
    }), null)
  }

  // input item properties comes in event parameter
  // const { name } = event
  
  const item = new Model()
  
  item.store()
    .then(item => {
      const response = {
        statusCode: 200,
        name: item.name
      }
    
      callback(null, response)
    })
    .catch(handleError)
};
