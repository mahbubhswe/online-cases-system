import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.mongoDbUrl);

export default connectMongo;