import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }
  create(createProductDto: CreateProductDto) {

    if (!createProductDto.images) {
      createProductDto.images = [];
    }

    return this.prisma.product.create({ data: createProductDto });
  }

  findAll() {
    const products = this.prisma.product.findMany();

    return products;
  }

  findOne(id: string) {
    const product = this.prisma.product.findUnique({ where: { id } });

    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });

    return updatedProduct;
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
