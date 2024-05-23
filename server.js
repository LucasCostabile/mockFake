const app = require("./app")
const config = require("./src/config/config")

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`server ON ${PORT}`)
});

