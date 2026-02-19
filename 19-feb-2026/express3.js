const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.use(express.static('public'));

app.post('/api/users',(req,res)=>{
    console.log(req.body);
    res.status(201).json({message : 'User created',user : req.body});
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
