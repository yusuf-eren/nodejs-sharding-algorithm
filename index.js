import axios from 'axios';
import express from 'express';

const app = express();
app.use(express.json({}))

app.post('/create-user', async (req, res) => {
    const shardNumber = req.body.user_id % 4;
    await axios.post(`http://localhost:3000/shard_${shardNumber}`, {
        user_id: req.body.user_id,
        age: req.body.age,
        signup_date: new Date().getTime()
    });

    return res.status(201).json({
        "status": 201,
        "operation": "success"
    })
})

app.post('/get-user', async (req, res) => {
    const shardNumber = req.body.user_id % 4;
    const user = await axios.get(`http://localhost:3000/shard_${shardNumber}?user_id=${req.body.user_id}`).then(({ data }) => data);
    return res.status(200).json(user);
})

app.listen(3001);