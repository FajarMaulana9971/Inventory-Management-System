import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_m_users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 15 })
  first_name: string;

  @Column({ length: 15 })
  last_name: string;

  @Column({ unique: true })
  email: string;
}
