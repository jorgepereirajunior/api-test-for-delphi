import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableApProduto1738199722755 implements MigrationInterface {
  name = 'CreateTableApProduto1738199722755'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "Produto" (
            "id" int NOT NULL, 
            "store_id" int NOT NULL, 
            "nmProduto" varchar(255) NOT NULL, 
            "vlVarejo" money NOT NULL, 
            "vlAtacado" money NOT NULL, 
            "nmGrupo" varchar(255) NOT NULL, 
            "nmSubGrupo" varchar(255) NOT NULL, 
            "cdBarras" varchar(255) NOT NULL, 
            "url_imagem" varchar(500) NOT NULL, 
            "url_default" varchar(500) NOT NULL, 
            "qtdEstoque" float NOT NULL, 
            "vlVarejoPromocao" money, 
            "vlAtacadoPromocao" money, 
            "dsObservacao" text, 
            "nmFabricante" varchar(255) NOT NULL, 
            "nmFornecedor" varchar(255) NOT NULL, 
            "ativo" bit NOT NULL CONSTRAINT "DF_c64a1f186189ec772cddeafc4a1" DEFAULT 1, 
            "dsPrateleira" varchar(255) NOT NULL, 
            "dsReferenciaInterna" varchar(255) NOT NULL, 
            "dsReferenciaFabrica" varchar(255) NOT NULL, 
            "vlVarejoMinimo" money NOT NULL, 
            "vlVarejoMaximo" money NOT NULL, 
            "vlAtacadoMinimo" money NOT NULL, 
            "vlAtacadoMaximo" money NOT NULL, 
            CONSTRAINT "PK_f88026d93e0a0867f60b27d657c" PRIMARY KEY ("id", "store_id")
        )`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Produto"`)
  }
}
