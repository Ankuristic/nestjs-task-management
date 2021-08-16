import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Less (alias) const ID: GrapgQLScalarType ')
export class LessonType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
