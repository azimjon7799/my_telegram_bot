import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_RENEG_LIMIT } from 'tls';

const start = async () => {
  try {
    const PORT = process.env.PORT || 3333;
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api/v1');
    
    await app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();

