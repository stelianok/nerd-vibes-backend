export class CreateProductDto {
  name: string;
  description?: string;
  price: number;
  images?: Array<string>
}
