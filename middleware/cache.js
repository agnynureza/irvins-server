const redis = require('redis')
const client = redis.createClient();

const cache = (req,res,next) => {
  let params;  
  if(req.params.id){
      params = req.params.id
  }else{
    params = 'getAll'
  }
  
  client.get(`product:${params}`, (err,found) => {
    if (found) {
      res.status(200).json({
        message: `get data from redis`,
        data: JSON.parse(found)
      })
      return
    } else {
      next()
    }
  })
}

module.exports = cache