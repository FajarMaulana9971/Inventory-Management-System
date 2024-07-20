import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StatusEnumerated } from './enum/status.enum';
import { User } from './user.entity';
// kalau mau import buat join column atau sebagainya, jangan gunain from typeorm/browser. gunain typeorm nya aja. agak laen emang suggestionnya
import { JoinColumn } from 'typeorm';

@Entity('tb_m_accounts')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 32, unique: true })
  username: string;

  @Column({ nullable: false, length: 32 })
  password: string;

  @Column()
  refresh_token: string;

  @Column()
  verification_code: string;

  @Column({
    type: 'enum',
    enum: StatusEnumerated,
  })
  status_account: StatusEnumerated;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User;
}
