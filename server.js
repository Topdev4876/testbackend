const express = require('express'); //Line 1
const cors = require('cors')
const bip39 = require("bip39");

const app = express(); //Line 2
app.use(cors())

const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
 //Line 6

 app.get("/api", (req, res) => {
    let seed = bip39.generateMnemonic()
    res.json({ message: seed });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));