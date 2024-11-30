import express from 'express'
import cors from 'cors'
import clientRoutes from './routes/clientRoute.js' 


const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));

app.use(cors());
app.use(express.json());

app.use('/api', clientRoutes)
app.use('/', (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log('listening on port 3000')
});

