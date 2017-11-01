const express = require("express");
const app = express();
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');

mongoose.connect(require('./configs/keys').mongoDbUri)

require('./routes/auth')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
