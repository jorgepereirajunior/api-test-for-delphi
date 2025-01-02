import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableProduct1735826068559 implements MigrationInterface {
  name = 'CreateTableProduct1735826068559'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`ap_product\` (\`id\` int NOT NULL, \`store_id\` int NOT NULL, \`nmProduto\` varchar(255) NOT NULL, \`vlVarejo\` decimal(10,2) NOT NULL, \`vlAtacado\` decimal(10,2) NOT NULL, \`nmGrupo\` varchar(255) NOT NULL, \`nmSubGrupo\` varchar(255) NOT NULL, \`cdBarras\` varchar(255) NOT NULL, \`url_imagem\` varchar(500) NOT NULL, \`url_default\` varchar(500) NOT NULL, \`qtdEstoque\` int NOT NULL, \`vlVarejoPromocao\` decimal(10,2) NULL, \`vlAtacadoPromocao\` decimal(10,2) NULL, \`dsObservacao\` text NULL, \`nmFabricante\` varchar(255) NOT NULL, \`nmFornecedor\` varchar(255) NOT NULL, \`ativo\` tinyint NOT NULL DEFAULT 1, \`dsPrateleira\` varchar(255) NOT NULL, \`dsReferenciaInterna\` varchar(255) NOT NULL, \`dsReferenciaFabrica\` varchar(255) NOT NULL, \`vlVarejoMinimo\` decimal(10,2) NOT NULL, \`vlVarejoMaximo\` decimal(10,2) NOT NULL, \`vlAtacadoMinimo\` decimal(10,2) NOT NULL, \`vlAtacadoMaximo\` decimal(10,2) NOT NULL, PRIMARY KEY (\`id\`, \`store_id\`)) ENGINE=InnoDB`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`ap_product\``)
  }
}
