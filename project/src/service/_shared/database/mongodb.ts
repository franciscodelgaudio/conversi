import { MongoClient } from "mongodb";

// Sem MONGODB_URI o app sobe sem banco (client = null) e o Auth.js roda
// sem adapter.
const uri = process.env.MONGODB_URI;

const globalForMongo = globalThis as unknown as {
  _mongoClient?: MongoClient;
};

// Em dev o HMR recarrega módulos; reaproveita o client para não abrir
// uma conexão nova a cada reload.
const client = uri ? (globalForMongo._mongoClient ?? new MongoClient(uri)) : null;

if (client && process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

export default client;
