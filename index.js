const server = require('./api/server');

// const port = 5000;

// START YOUR SERVER HERE

const port = process.env.PORT || 9500;
server.listen(port, () =>
  console.log(`\n ** server on https://localhost:${port} ** \n`)
);

