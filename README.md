# irvins-server

### Installation
With npm:

```
$npm install
$npm start
```
for testing :
```
$npm test
```
 
### REST API 
#### routes :
| Route          | HTTP   |            Description              |
|----------------|--------|-------------------------------------|
| `/product` | GET    | read all product data         |
| `/product/:id` | GET    | read product detail             |
| `/product` | POST    | create new product data             |
| `/product/:id` | PUT    | update one product data             |
| `/product/:id` | DELETE    | delete one product data            |

Access API via ```http://localhost:3000/api```


### Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Mocha] - test run
* [Mongodb] - the streaming build system
* [Mongoose] - Object Data Modeling (ODM) library for MongoDB
* [Redis] - Session Cache


[node.js]: <http://nodejs.org>
[Mocha]: <https://mochajs.org/>
[Mongodb]: <https://www.mongodb.com/>
[Mongoose]:<https://mongoosejs.com/>
[Express]: <http://expressjs.com>
[Redis]: <https://redis.io/>


