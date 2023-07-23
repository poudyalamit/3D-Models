import express from "express"
import * as dotenv from "dotenv"
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json({ liming: '50mb'}))


app.get('/',(req,res)=>{
    res.status(200).json({message: "Hello"})
})

app.listen(port , ()=> console.log(`Server has started at port http://localhost:${port}`))