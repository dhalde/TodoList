require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
require('./config/mongo_Config');

app.use(cors({
  origin: process.env.FE_Connection, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204, 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.get('/', (req, res)=>{
//     res.send("Working Fine")
// });
app.use('/task', require('./routes/taskRoutes'));


app.listen(process.env.PORT, () => {
  
  console.log(`Server is running on port ${process.env.PORT}`);
});


