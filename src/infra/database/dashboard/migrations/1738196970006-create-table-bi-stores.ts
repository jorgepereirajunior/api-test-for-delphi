import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableBiStores1738196970006 implements MigrationInterface {
  name = 'CreateTableBiStores1738196970006'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "stores" (
            "id" int NOT NULL, 
            "store_group_id" int NOT NULL, 
            "name" varchar(100) NOT NULL, 
            "cnpj" varchar(200) NOT NULL, 
            "pcId" varchar(20), "active" bit NOT NULL, 
            "folderFtp_id" int, "scriptVersion" int NOT NULL, 
            "cdPessoa" int, 
            CONSTRAINT "PK_93b5b82cc8a1856801ed30a7502" PRIMARY KEY ("id", "store_group_id")
        )`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "stores"`)
  }
}
