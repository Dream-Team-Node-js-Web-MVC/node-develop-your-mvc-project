const app = require("./server");
const { config } = require("./config");
const {
  checkCollections,
  seedProductsData,
  seedWorkersData,
  seedUsersData,
} = require("./db/populate");

const connect = require("./db/connect");

connect().then(async () => {
  config.logger.info(`DB connected!`);

  const collections = await checkCollections();
  await seedProductsData(collections);
  await seedUsersData(collections);
  await seedWorkersData(collections);

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
