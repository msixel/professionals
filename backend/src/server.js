const { server, PORT } = require("./professionals");

server.listen(PORT, () => console.log(`server started at port ${PORT}`));
