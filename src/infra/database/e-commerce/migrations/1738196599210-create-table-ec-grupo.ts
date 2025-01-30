import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableEcGrupo1738196599210 implements MigrationInterface {
  name = 'CreateTableEcGrupo1738196599210'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "Grupo" (
            "id" int NOT NULL, 
            "store_Id" int NOT NULL, 
            "nmGrupo" varchar(100) NOT NULL, 
            "ativoApp" bit NOT NULL CONSTRAINT "DF_5e8d6869d0f271c6d8d5633fd9e" DEFAULT 0, 
            "url_imagem" varchar(255), 
            CONSTRAINT "PK_4f23408c0f1d26e84775cf118fe" PRIMARY KEY ("id", "store_Id")
        )`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Grupo"`)
  }
}
