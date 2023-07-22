const ConnectDatabase = require('./config/database')
const PORT = process.env.PORT || 4000;
const app = require('./app')

ConnectDatabase();

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

