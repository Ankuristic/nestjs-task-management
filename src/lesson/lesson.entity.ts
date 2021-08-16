import { Entity } from 'typeorm';

@Entity()
export class Lesson {

    @ObjectIdColumn()
    _id:string;
    
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    endDate:string;
}
