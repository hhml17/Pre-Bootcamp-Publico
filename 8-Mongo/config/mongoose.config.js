import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error conectando a la base de datos:', error);
        process.exit(1); // Termina el proceso si no se puede conectar
    }
};

export default dbConnect;