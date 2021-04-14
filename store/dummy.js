const db = {
  conference: [
    {
      id: 1,
      name: "MasterConf",
      description: "The first Platziconf created for and by Platzi Masters",
      date: "2021/05/25 18:00",
    },
  ],
  hotel: [
    {
      id: 1,
      name: "The Grand Luxxe",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 2,
      name: "The Grand Mayan",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 3,
      name: "The Grand Bliss",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 4,
      name: "Mayan Palace",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 5,
      name: "Sea Garden",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 6,
      name: "The Estates",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
  ],
  food: [
    {
      id: 1,
      name: "Balche",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 2,
      name: "Gong",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 3,
      name: "Bistro Bleu",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 4,
      name: "Cafe del Lago",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 5,
      name: "Limon y Sal",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
    {
      id: 6,
      name: "Samba",
      longitude: "526.665",
      latitude: "6484.659",
      id_conference: 1,
    },
  ],
};

async function getAll(table) {
  return db[table] || [];
}

async function get(table, id) {
  let collection = await getAll(table);
  return collection.filter((item) => item.id == id)[0] || null;
}

async function insert(table, data) {
  //console.log(data)
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  console.log(db);
  //return data.id
}

async function remove(table, id) {
  let collection = await getAll(table);
  db[table].pop(id);
  return id;
}

module.exports = {
  getAll,
  insert,
  get,
  remove,
};
