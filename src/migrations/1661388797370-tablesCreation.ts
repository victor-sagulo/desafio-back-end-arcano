import { MigrationInterface, QueryRunner } from "typeorm";

export class tablesCreation1661388797370 implements MigrationInterface {
    name = 'tablesCreation1661388797370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_39d76ddb3eb756d3e107e77cdd5"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "cartIdId" TO "cartId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_2ca008a558fe6002e3309f8f1d7" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_2ca008a558fe6002e3309f8f1d7"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "cartId" TO "cartIdId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_39d76ddb3eb756d3e107e77cdd5" FOREIGN KEY ("cartIdId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
