const db = require("../models");
const mongoose = require("mongoose");

async function checkCollections() {
  let collectionArr = [];
  try {
    let colList = mongoose.connection.db.listCollections();
    let collectionObjects = await colList.toArray();
    collectionObjects.forEach(function (collection) {
      collectionArr.push(collection.name);
    });
  } catch (err) {
    console.log("Can't access the DB collections");
  }
  return collectionArr;
}

async function seedProductsData(collectionArr) {
  if (!collectionArr.includes("products")) {
    try {
      db.Product.insertMany([
        {
          title: "Alhambra",
          description:
            "With its intense flavour, Alhambra Reserva 1925 is the reinterpretation of the Bohemian-style Pilsner. It is brewed with “Saaz”, an exclusive variety of hops that gives this beer light floral and spice notes. A beer that makes you savour life’s small details.",
          country: "Spanish beer",
          price: [
            { pack: 6, packPrice: 8 },
            { pack: 12, packPrice: 14 },
            { pack: 24, packPrice: 22.5 },
          ],
          stock: 480,
          images: ["https://i.ibb.co/PmMVWz5/alhambra.png"],
        },
        {
          title: "Moritz",
          description:
            "Our first beer, the most popular, the one you drink for an aperitif in Barceloneta or in a last-minute toast in a bar in L'eixample, La Plana de Vic or even in Mallorca or Andorra. Pilsner type, but also Barcelona type. Pleasant, golden, foamy and abundant, like this city.",
          country: "Catalan beer",
          price: [
            { pack: 6, packPrice: 3.59 },
            { pack: 12, packPrice: 7 },
            { pack: 24, packPrice: 13.69 },
          ],
          stock: 600,
          images: ["https://i.ibb.co/VCY74K3/moritz.png"],
        },
        {
          title: "Red Horse",
          description:
            "A strong, high alcohol beer. It is deeply hued lager with a distinctive, sweetish taste, balanced by a smooth bitterness. For the people with real strength, inside and out.",
          country: "Philipine beer",
          price: [
            { pack: 6, packPrice: 16 },
            { pack: 12, packPrice: 28 },
            { pack: 24, packPrice: 44 },
          ],
          stock: 240,
          images: ["https://i.ibb.co/LrCkv3n/redhorse.png"],
        },
        {
          title: "Cusqueña",
          description:
            "Cusquena is a super-premium lager from Cuzco, the seat of the Inca empire. Brewed since 1911, it uses only the finest natural ingredients, including pure mountain water from a source at 18,000 feet in the Peruvian Andes.",
          country: "Peruvian beer",
          price: [
            { pack: 6, packPrice: 6.6 },
            { pack: 12, packPrice: 13 },
            { pack: 24, packPrice: 25 },
          ],
          stock: 408,
          images: ["https://i.ibb.co/L95CPbs/cusquena.png"],
        },
        {
          title: "Feldschlösschen",
          description:
            "This refreshing Feldschlösschen Original is a well-balanced, light yellow radiant. The bittersweet hoppy note and the pleasant 'beery' taste is what make it so unique. Feldschlösschen Original is the ideal thirst quencher after sports or work, as an aperitif or at festivals.",
          country: "Switzerland beer",
          price: [
            { pack: 6, packPrice: 12 },
            { pack: 12, packPrice: 24 },
            { pack: 24, packPrice: 46 },
          ],
          stock: 240,
          images: ["https://i.ibb.co/chGrKVy/fieldschlossen.png"],
        },
        {
          title: "Perła",
          description:
            "A refreshing beer which is the result of the traditional methods of production and the newest solutions used in the brewing industry. It has a characteristic, definite taste, a golden color and the subtle smell of the aromatic hop plants.",
          country: "Poland beer",
          price: [
            { pack: 6, packPrice: 12 },
            { pack: 12, packPrice: 24 },
            { pack: 24, packPrice: 46 },
          ],
          stock: 408,
          images: ["https://i.ibb.co/zfhdrVv/perla.png"],
        },
        {
          title: "Närke Kaggen Stormaktsporter",
          description:
            "Imperial Stout brewed with heather honey and aged on oak-barrels for 2 and a half months. Serve at minimum 14 dgs. Share the bottle. It was first brewed in October 2005 and ages well for several years. Beer is Art!",
          country: "Swedish beer",
          price: [
            { pack: 6, packPrice: 13.2 },
            { pack: 12, packPrice: 26 },
            { pack: 24, packPrice: 50 },
          ],
          stock: 240,
          images: ["https://i.ibb.co/1bSD63Z/kaggen.png"],
        },
        {
          title: "Hite",
          description:
            "The No. 1 selling KOREAN Beer Brewed & bottled in Korea at HITE Brewery co. ltd. Seoul. Brewed form Purest underground well water, Canadian Harrington barley, Parle Aroma and Yakima hops, yeast and no additives or preservative.",
          country: "Korean beer",
          price: [
            { pack: 6, packPrice: 15 },
            { pack: 12, packPrice: 28 },
            { pack: 24, packPrice: 57 },
          ],
          stock: 960,
          images: ["https://i.ibb.co/981r5kS/hite.png"],
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  }
}

async function seedWorkersData(collectionArr) {
  if (!collectionArr.includes("workers")) {
    try {
      db.Worker.insertMany([
        {
          fullName: "Jordi Arnau",
          email: "jordi@mail.com",
          password: "132456",
          role: "employee",
          profileImage: [],
        },
        {
          fullName: "Hayk Petrosyan",
          email: "hayk@mail.com",
          password: "132456",
          role: "admin",
          profileImage: [],
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  }
}

async function seedUsersData(collectionArr) {
  if (!collectionArr.includes("users")) {
    db.User.insertMany([
      {
        firstName: "Eunyoung",
        lastName: "Kim",
        address: {
          street: "Carrer dels Recs, 7",
          city: "Barcelona",
          country: "Spain",
          zipcode: 123456,
        },
        email: "kim@mail.com",
        phone: 333444555,
        password: "132456",
      },
      {
        firstName: "Sebastian",
        lastName: "Brupbacher",
        address: {
          street: "Calle Falsa, 123",
          city: "Barcelona",
          country: "Spain",
          zipcode: 456123,
        },
        email: "sebas@mail.com",
        phone: 111222333,
        password: "132456",
      },
    ]);
  }
}

module.exports = {
  checkCollections: checkCollections,
  seedProductsData: seedProductsData,
  seedWorkersData: seedWorkersData,
  seedUsersData: seedUsersData,
};
