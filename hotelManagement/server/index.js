import express from 'express';

const app = express();

app.use(express.static('../'));

app.listen(5000,()=>{
    console.log('listening on port 5000');
});
