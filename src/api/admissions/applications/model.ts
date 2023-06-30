import { DataType } from "sequelize-typescript";
import sequelize from "../../../db";
import ParentsModel from "../parents/model";

const ApplicationModel=sequelize.define("application",{
   
    application_id: {
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
      application_date: {
        type: DataType.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataType.STRING,
        allowNull: false,
      },
      address: {
        type: DataType.STRING,
        allowNull: false,
      },
      
})
ApplicationModel.hasMany(ParentsModel,{foreignKey:"parent_id"});
ParentsModel.belongsToMany(ApplicationModel,{
    through:ApplicationModel,
    foreignKey:{applicant_id:"applicant_id",allowNull:false}
});

export default ApplicationModel