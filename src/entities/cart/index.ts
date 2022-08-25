import {
  Column,
  Entity,
  OneToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "../product";
import { User } from "../user";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => User, { onDelete: "SET NULL", eager: true })
  @JoinColumn({ name: "user_id" })
  user_id: User;

  @Column("date")
  date: string;

  @OneToMany(() => Product, (product) => product.cart, { nullable: true })
  products: Product[];
}
