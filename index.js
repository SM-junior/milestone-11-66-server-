const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
var cors = require('cors')

app.use(cors());
app.use(express.json());

const users=[
    {id:1, name:'sabana', email:'sabana@gmail.com'},
    {id:2, name:'jamila', email:'jamila@gmail.com'}
]

app.get('/users', (req,res)=>{
    res.send(users)
}) 

app.get('/', (req, res)=>{
    res.send('User management server is running')
})

app.post('/users', (req, res)=>{
    console.log('Post is hitting');
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
})

//.gitignore means it will prevent to push node_module file to github