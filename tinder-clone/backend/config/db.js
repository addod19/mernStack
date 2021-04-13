import mongoose from 'mongoose';
import config from 'config';


const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    mongoose.set('debug', true);

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log('cant connect to database');
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;