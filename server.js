const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const url = 'https://b78d3dd0-7c41-464c-8aa6-12c66eca6336-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks';
const token = 'AstraCS:BHmOaADpUfIqvaFIWhILwhOq:ecf905d7a01246529cb8c33f2cdc6fa7539c9fc53525159d613e5f70b2b4dc9c';

app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        },
    }

    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.post('/tickets', async (req, res) => {
    const formData = req.body.formData;

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch(err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.listen(PORT, () => console.log('server running on PORT' + PORT));