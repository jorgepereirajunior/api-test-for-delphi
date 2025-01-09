import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableEcGroup1736337742149 implements MigrationInterface {
  name = 'CreateTableEcGroup1736337742149'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE \`ec_group\` (
        \`id\` int NOT NULL, 
        \`store_Id\` int NOT NULL, 
        \`nmGrupo\` varchar(100) NOT NULL, 
        \`ativoApp\` tinyint NOT NULL DEFAULT 0, 
        \`url_imagem\` varchar(255) NULL, 
        PRIMARY KEY (\`Id\`, \`Store_Id\`)) ENGINE=InnoDB`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`ec_group\``)
  }
}
