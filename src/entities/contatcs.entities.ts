import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";

import { User } from "./users.entities";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 120 })
    name: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ unique: true })
    phone: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @ManyToOne(() => User)
    user: User;
}
