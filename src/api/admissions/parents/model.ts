import { DataType } from "sequelize-typescript";
import sequelize from "../../../db";
import ApplicantModel from "../applicants/model";
const ParentsModel=sequelize.define("parent",{
   
    parent_id: {
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
      },
      parent_first_name: {
        type: DataType.STRING,
        allowNull: false,
      },
      parent_last_name: {
        type: DataType.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: DataType.DATEONLY,
        allowNull: false,
      },
      relationship: {
        type: DataType.STRING,
        allowNull: false,
      },
      address: {
        type: DataType.STRING,
        allowNull: false,
      },
      city: {
        type: DataType.STRING,
        allowNull: false,
      },
      state: {
        type: DataType.STRING,
        allowNull: true,
      },
      country: {
        type: DataType.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: true,
      },
})
ParentsModel.hasMany(ApplicantModel,{foreignKey:{allowNull:false}});
ParentsModel.belongsTo(ParentsModel);

export default ParentsModel