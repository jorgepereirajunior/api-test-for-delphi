import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableBiProduct1736385601442 implements MigrationInterface {
  name = 'CreateTableBiProduct1736385601442'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`bi_product\` (
        \`id\` int NOT NULL, 
        \`storeId\` int NOT NULL, 
        \`name\` varchar(100) NOT NULL, 
        \`value\` varchar(20) NOT NULL, 
        \`price\` varchar(20) NOT NULL, 
        \`quantity\` varchar(100) NOT NULL, 
        PRIMARY KEY (\`id\`, \`storeId\`)
      ) ENGINE=InnoDB`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`bi_product\``)
  }
}
