const express = require('express')    
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/filiere', (req, res) => {
    let filiere = req.body;
    console.log(filiere);
    res.send('Filiere added successfully');
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }

    console.log('Server is running on port 3000')
})