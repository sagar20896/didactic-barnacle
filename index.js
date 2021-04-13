const express = require ('express');
const dotenv = require('dotenv');

// import other deps
const authRoute = require('./routes/auth');
const jsonPatchRoute = require('./routes/protected/jsonPatch');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5007;

// middlewares addition
app.use(express.json());
app.use('/api', authRoute);
app.use('/api', jsonPatchRoute);

app.listen(PORT, ()=> {
    console.log(`Server listening at port ${PORT}`);
})