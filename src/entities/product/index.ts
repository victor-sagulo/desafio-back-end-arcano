import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "../cart";
import { User } from "../user";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column("varchar", { length: 128 })
  title: string;

  @Column("float8")
  price: number;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => Cart, (cart) => cart.products, {
    eager: true,
    nullable: true,
  })
  cart: Cart;

  @ManyToOne(() => User, (user) => user.cart_history, { nullable: true })
  user: User;
}
