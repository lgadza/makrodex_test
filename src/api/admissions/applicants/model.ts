import { DataType } from "sequelize-typescript";
import sequelize from "../../../db";
import ParentsModel from "../parents/model";

const ApplicantModel=sequelize.define("applicant",{
   
    applicant_id: {
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
      },
      first_name: {
        type: DataType.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataType.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: DataType.DATEONLY,
        allowNull: false,
      },
      gender: {
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
ApplicantModel.hasMany(ParentsModel,{foreignKey:"parent_id"});
ParentsModel.belongsTo(ApplicantModel);

export default ApplicantModel