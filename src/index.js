const app = require("./server");
const { config } = require("./config");

const connect = require("./db/connect");

// app.listen(4000, () => {
//   console.log(`Server listening on http:localhost:4000`);
// });
connect().then(async () => {
  config.logger.info(`DB connected!`);

  // await seedUsersData();
  // await seedPersonsData();
  // await seedMoviesData();

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
