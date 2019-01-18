const chai = require('chai')
    ,chaiHttp = require('chai-http')

chai.use(chaiHttp)

const expect = chai.expect
//const URL = `http://bambulife-api.agnynureza.online/account`
let id = ''

describe('Create new product', () => {
    it('should be create an product',(done)=> {
        chai.request(`localhost:3000/api`)
        .post('/product')
        .send({
            name : 'product 5',
            price: 20000,
        })
        .end((err,res)=>{
            id = res.body.data._id
            if(!err){
                expect(res).to.have.status(201)
                expect(res.body.message).to.be.an('string')
                expect(res.body.data).to.be.an('object')
                expect(res.body.data.name).to.be.a('string')
                expect(res.body.data.price).to.be.a('number')
                done()
            }
        })
    })
})


describe('Read all data product', ()=> {
    it('should show all product',(done)=>{
        chai.request(`localhost:3000/api`)
        .get('/product')
        .end((err,res)=>{
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.an('string')
                expect(res.body.data).to.be.an('array')
                done()
            }
        })
    })
})

describe('Read Product by Id', ()=> {
    it('should show detail produtc',(done)=>{
        chai.request(`localhost:3000/api`)
        .get(`/product/${id}`)
        .end((err,res)=>{
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.an('string')
                expect(res.body.data).to.be.an('object')
                expect(res.body.data.name).to.be.a('string')
                expect(res.body.data.price).to.be.a('number')
                done()
            }
        })
    })
})


describe('Update data products',()=>{
    it('should update data product',(done)=>{
        chai.request(`localhost:3000/api`)
        .put(`/product/${id}`)
        .send({
            name: `product 6`,
            age:40000
        })
        .end((err,res) => {
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.an('string')
                expect(res.body.data).to.be.an('object')
                expect(res.body.data.name).to.be.a('string')
                expect(res.body.data.price).to.be.a('number')
                done()
            }
        })
    })
})

describe('Delete data product',()=>{
    it('should be delete data product',(done)=>{
        chai.request(`localhost:3000/api`)
        .delete(`/product/${id}`)
        .end((err,res)=>{
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.an('string')
                expect(res.body.data).to.be.an('object')
                expect(res.body.data.name).to.be.a('string')
                expect(res.body.data.price).to.be.a('number')
                done()
            }
        })
    })
})