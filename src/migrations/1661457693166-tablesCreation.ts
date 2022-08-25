import { MigrationInterface, QueryRunner } from "typeorm";

export class tablesCreation1661457693166 implements MigrationInterface {
    name = 'tablesCreation1661457693166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
    }

}
