const express = require('express');
const cors = require('cors');
const compileRouter = require('./routes/compile');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/compile', compileRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
