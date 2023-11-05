import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


interface IDocumentation {
  app: INestApplication<unknown>;
  title: string;
  description: string;
  version: string;
}

export function documentation ({
  app,
  title,
  description,
  version,
}: IDocumentation): void {
 const config = new DocumentBuilder()
  .setTitle(title)
  .setDescription(description)
  .setVersion(version)
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('doc', app, document);
}
