const { app, PORT } = require('./src/app');
const { connectDB } = require('./src/config/db');

const startServer = async () => {
  try {
    

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    
    await connectDB();
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};



startServer();