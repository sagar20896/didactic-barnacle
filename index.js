const express = require ('express');
const dotenv = require('dotenv');

// import other deps
const authRoute = require('./routes/auth');
const jsonPatchRoute = require('./routes/protected/jsonPatch');
const imageRoute = require('./routes/protected/imageProc');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5007;

// middlewares addition
app.use(express.json());
app.use('/api', authRoute);
app.use('/api', jsonPatchRoute);
app.use('/api', imageRoute);

app.listen(PORT, ()=> {
    console.log(`Server listening at port ${PORT}`);
})