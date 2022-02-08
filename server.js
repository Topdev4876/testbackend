const express = require('express'); //Line 1
const cors = require('cors')
const bip39 = require("bip39");
const mongoose = require('mongoose')

const app = express(); //Line 2
app.use(cors())

const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
 //Line 6

mongoose.connect(
  "mongodb+srv://Admin:kwon4876@cluster0.abgq4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(console.log("success mongo"))
  .catch((err) => console.log(err));


 app.get("/api", (req, res) => {
    let seed = bip39.generateMnemonic()
    res.json({ message: seed });
    
  });

  app.post("/home",(req,res)=>{
    console.log(req.body)
    // string.push(req.body)
  })


app.listen(port, () => console.log(`Listening on port ${port}`));