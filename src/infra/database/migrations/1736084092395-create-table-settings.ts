import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableSettings1736084092395 implements MigrationInterface {
  name = 'CreateTableSettings1736084092395'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`ap_settings\` (
        \`store_id\` int NOT NULL, 
        \`venderEstoqueNegativo\` tinyint NOT NULL DEFAULT 0, 
        \`limiteMaxDesconto\` float NOT NULL DEFAULT '0', 
        \`url_logo\` varchar(255) NULL, 
        \`nmEmpresa\` varchar(255) NOT NULL, 
        \`cnpj\` varchar(14) NOT NULL, 
        \`dsTelefone\` varchar(20) NULL, 
        \`dsEndereco\` varchar(255) NULL, 
        \`dsEmail\` varchar(255) NULL, 
        \`usaCarteiraVendedor\` tinyint NOT NULL DEFAULT 0, 
        \`bloquearFormaPagamento\` tinyint NOT NULL DEFAULT 0, 
        \`lojaAtiva\` tinyint NOT NULL DEFAULT 1, 
        UNIQUE INDEX \`IDX_bf08341d6666ec35b640a3f1d4\` (\`cnpj\`), 
        PRIMARY KEY (\`store_id\`)
      ) ENGINE=InnoDB`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_bf08341d6666ec35b640a3f1d4\` ON \`ap_settings\``
    )

    await queryRunner.query(`DROP TABLE \`ap_settings\``)
  }
}
