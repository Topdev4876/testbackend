const express = require('express'); //Line 1
const cors = require('cors')
const bip39 = require("bip39");
const bodyParser = require('body-parser');

const app = express(); //Line 2
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
 //Line 6


var string=[];

 app.get("/api", (req, res) => {
    let seed = bip39.generateMnemonic()
    res.json({ message: seed });
    
  });

  app.post("/home",(req,res)=>{
    const {data} = req.body
    string.push(data)
    console.log(string,data)
  })
  
  app.get("/secret",(req,res)=>{
    res.json({ message: string });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));