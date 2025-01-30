import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableApVendedor1738200090561 implements MigrationInterface {
  name = 'CreateTableApVendedor1738200090561'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "Vendedor" (
            "id" int NOT NULL, 
            "store_id" int NOT NULL, 
            "nmVendedor" varchar(100), 
            "nrTelefone" varchar(20) NOT NULL, 
            "dsEmail" varchar(250) NOT NULL, 
            "dsSenha" varchar(100), 
            "alteraPreco" bit NOT NULL, 
            "administrador" bit NOT NULL, 
            "usaCarteira" bit NOT NULL, 
            "ativo" bit NOT NULL, 
            "baixar_carteira" bit NOT NULL, 
            CONSTRAINT "PK_5c1783224aaa52d40d7df232287" PRIMARY KEY ("id", "store_id")
        )`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Vendedor"`)
  }
}
