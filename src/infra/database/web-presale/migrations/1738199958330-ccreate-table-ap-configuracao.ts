import { MigrationInterface, QueryRunner } from 'typeorm'

export class CcreateTableApConfiguracao1738199958330
  implements MigrationInterface
{
  name = 'CcreateTableApConfiguracao1738199958330'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "Configuracao" (
            "store_id" int NOT NULL, 
            "venderEstoqueNegativo" bit NOT NULL CONSTRAINT "DF_86bf5ccf8715028a1fbafc2edda" DEFAULT 0, 
            "limiteMaxDesconto" float NOT NULL CONSTRAINT "DF_baf1c42a9f4d1a05986ea97bced" DEFAULT 0, 
            "url_logo" varchar(255), 
            "nmEmpresa" varchar(255) NOT NULL, 
            "cnpj" varchar(14) NOT NULL, 
            "dsTelefone" varchar(20), 
            "dsEndereco" varchar(255), 
            "dsEmail" varchar(255), 
            "usaCarteiraVendedor" bit NOT NULL CONSTRAINT "DF_c8d8671ee30e6ce4961b7a1f628" DEFAULT 0, 
            "bloquearFormaPagamento" bit NOT NULL CONSTRAINT "DF_f2784533d0be00160eba82e6465" DEFAULT 0, 
            "lojaAtiva" bit NOT NULL CONSTRAINT "DF_7816a55a0c6ec54d50b9ce9db62" DEFAULT 1, 
            CONSTRAINT "UQ_396ed5fbf649453c222fb0e8e48" UNIQUE ("cnpj"), 
            CONSTRAINT "PK_9e15b5cded54a06e10fb53f9176" PRIMARY KEY ("store_id")
        )`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Configuracao"`)
  }
}
