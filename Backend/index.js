
import express from 'express';
import AllRoutes from './routes/index.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.use("/api/V1", AllRoutes);

app.listen(8000, () => {
    console.log("Listening on port 8000.");
});
