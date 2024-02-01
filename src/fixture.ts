import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67421',
      name: 'Product 1',
      description: 'Description 1',
      image_url: 'http://localhost:9000/products/1.png',
      price: 100,
    },
    {
      id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67422',
      name: 'Product 2',
      description: 'Description 2',
      image_url: 'http://localhost:9000/products/2.png',
      price: 200,
    },
    {
      id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67423',
      name: 'Product 3',
      description: 'Description 3',
      image_url: 'http://localhost:9000/products/3.png',
      price: 300,
    },
    {
      id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67424',
      name: 'Product 4',
      description: 'Description 4',
      image_url: 'http://localhost:9000/products/4.png',
      price: 400,
    },
    {
      id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67425',
      name: 'Product 5',
      description: 'Description 5',
      image_url: 'http://localhost:9000/products/5.png',
      price: 500,
    },
    {
      id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67426',
      name: 'Product 6',
      description: 'Description 6',
      image_url: 'http://localhost:9000/products/6.png',
      price: 600,
    },
    {
      id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67427',
      name: 'Product 7',
      description: 'Description 7',
      image_url: 'http://localhost:9000/products/7.png',
      price: 700,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67428',
        name: 'Product 8',
        description: 'Description 8',
        image_url: 'http://localhost:9000/products/8.png',
        price: 800,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67429',
        name: 'Product 9',
        description: 'Description 9',
        image_url: 'http://localhost:9000/products/9.png',
        price: 900,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67430',
        name: 'Product 10',
        description: 'Description 10',
        image_url: 'http://localhost:9000/products/10.png',
        price: 1000,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67431',
        name: 'Product 11',
        description: 'Description 11',
        image_url: 'http://localhost:9000/products/11.png',
        price: 1100,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67432',
        name: 'Product 12',
        description: 'Description 12',
        image_url: 'http://localhost:9000/products/12.png',
        price: 1200,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67433',
        name: 'Product 13',
        description: 'Description 13',
        image_url: 'http://localhost:9000/products/13.png',
        price: 1300,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67434',
        name: 'Product 14',
        description: 'Description 14',
        image_url: 'http://localhost:9000/products/14.png',
        price: 1400,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67435',
        name: 'Product 15',
        description: 'Description 15',
        image_url: 'http://localhost:9000/products/15.png',
        price: 1500,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67436',
        name: 'Product 16',
        description: 'Description 16',
        image_url: 'http://localhost:9000/products/16.png',
        price: 1600,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67437',
        name: 'Product 17',
        description: 'Description 17',
        image_url: 'http://localhost:9000/products/17.png',
        price: 1700,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67438',
        name: 'Product 18',
        description: 'Description 18',
        image_url: 'http://localhost:9000/products/18.png',
        price: 1800,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67439',
        name: 'Product 19',
        description: 'Description 19',
        image_url: 'http://localhost:9000/products/19.png',
        price: 1900,
    },
    {
        id: '3b9d6b6d-2b5d-4c27-a750-3d3746c67440',
        name: 'Product 20',
        description: 'Description 20',
        image_url: 'http://localhost:9000/products/20.png',
        price: 2000,
    }
  ]);

  await app.close();
}
bootstrap();
