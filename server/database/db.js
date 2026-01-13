import mongoose from 'mongoose';

const Connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database connection error:', error.message);
    }
};

export default Connection;
