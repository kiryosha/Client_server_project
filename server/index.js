// Подключение к локальному серверу
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const authRouter = require('./routers/auth');
const notFoundRouter = require('./routers/404')

const app = express();

app.listen(PORT, () => {
    console.log("Server has been started...");
})

app.use(express.static(path.join(__dirname, '../public')));

app.use(authRouter);
app.use(notFoundRouter);