import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 128 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 100 })
  lastname: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  zipcode: string;

  @Column()
  phone: string;
}
