const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
var cors = require('cors')

app.use(cors());

const users=[
    {id:1, name:'sabana', email:'sabana@gmail.com'},
    {id:2, name:'jamila', email:'jamila@gmail.com'},
    {id:3, name:'arkana', email:'arkana@gmail.com'},
    {id:4, name:'sefali', email:'sefali@gmail.com'}
]

app.get('/users', (req,res)=>{
    res.send(users)
}) 

app.get('/', (req, res)=>{
    res.send('User management server is running')
})
app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
})