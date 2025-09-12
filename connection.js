import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Connection to mongodb successful!!`);
    } catch (error) {
        console.log('Connection to mongodb failed: ', error);
        process.exit(1);
    }
}

export default connectMongoDB;