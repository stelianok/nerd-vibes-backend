import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";

import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity implements Product {

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;
  price: Decimal;

  @ApiProperty({ required: false })
  images: string[];


}
