import mongoose, { type MongooseQueryMiddleware, type Schema } from "mongoose";

const globalForMongoose = globalThis as unknown as {
  _mongooseConn?: Promise<typeof mongoose>;
};

export function connectDB() {
  // Checado só na hora de conectar, para o app subir sem banco.
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return Promise.reject(new Error("MONGODB_URI não definido no ambiente"));
  }
  globalForMongoose._mongooseConn ??= mongoose.connect(uri).catch((error) => {
    // Não guarda a falha: a próxima operação tenta conectar de novo.
    globalForMongoose._mongooseConn = undefined;
    throw error;
  });
  return globalForMongoose._mongooseConn;
}

const queryOperations: MongooseQueryMiddleware[] = [
  "countDocuments",
  "distinct",
  "estimatedDocumentCount",
  "find",
  "findOne",
  "findOneAndReplace",
  "findOneAndUpdate",
  "replaceOne",
  "updateMany",
  "updateOne",
  "deleteMany",
  "deleteOne",
  "findOneAndDelete",
];

// Plugin aplicado em cada schema: qualquer operação do model (create, find,
// aggregate, update...) garante a conexão antes de rodar, então quem usa o
// model nunca precisa chamar connectDB().
export function connectOnUse(schema: Schema) {
  const connect = async () => {
    await connectDB();
  };
  schema.pre("save", connect);
  schema.pre(queryOperations, connect);
  schema.pre("aggregate", connect);
  schema.pre("insertMany", connect);
  schema.pre("bulkWrite", connect);
}
