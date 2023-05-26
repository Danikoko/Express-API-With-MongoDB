const mongoose = require('mongoose');
const express = require('express');
const app = express();

const MONGODB_PASSWORD = '6Kri5M7jgggFv86T';
const MONGODB_URI = `mongodb+srv://root:${MONGODB_PASSWORD}@danikokoapi.d5xg6bc.mongodb.net/?retryWrites=true&w=majority`;

/** Routes */
app.get('/', (req, res) => {
    res.send([{name: 'Daniel'}, {name: 'Koko'}]);
});

app.get('/blog', (req, res) => {
    res.send(
        {
            status: 200,
            data: [
                {
                    subject: 'Self Biography',
                    body: 'My name is Daniel and I am glad to be writing at this time.',
                    tags: [
                        'Coding',
                        'Bio'
                    ]
                }
            ]
        }
    );
});
/** Routes */

app.listen(3000, () => {
    console.log('Node API app is running on port 3000.');
});

/** MongoDB connection */
mongoose
.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB successfully.');
})
.catch((ERROR) => {
    console.log(ERROR);
});
/** MongoDB connection */