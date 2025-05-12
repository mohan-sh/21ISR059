const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config();
const app =express();

const port=process.env.PORT;
app.use(cors());
app.use(express.json())


app.get('/number/e',)


console.log(port)
app.listen(port,()=>{
    console.log(`servewr listening to port  ${port}`);
});

