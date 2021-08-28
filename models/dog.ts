import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection";
export class Dog extends Model {
  public dog_id!: number;
  public url!: string;
  public caption!: string;
}

Dog.init({
  dog_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: new DataTypes.STRING(256),
    allowNull: false,
  },
  caption: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: "dogs_tbl",
  timestamps: false,
});

export const getDogs = async () => {
  const dogs:Dog[] = await Dog.findAll();
  return dogs;
};

type DogAttributes = {
  url: String,
  caption: String,
}
export const addDog = async ({ url = "", caption = ""}:DogAttributes) => {
  const dog:Dog = await Dog.create({url,caption});
  return dog;
}
