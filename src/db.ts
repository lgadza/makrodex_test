import { Sequelize } from 'sequelize-typescript';
const { PG_DB, PG_USER, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;


const sequelize = new Sequelize(PG_PORT!, PG_USER!, PG_PASSWORD!,{
  database: 'your_database',
  dialect: 'postgres',
  username: 'your_username',
  password:PG_PASSWORD,
  host: PG_HOST,
  port: 5432, 
});

export const  pgConnect=async()=>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connected to Postgres!")

    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
export const syncModels=async()=>{
    await sequelize.sync({alter:true});
    console.log("All tables successfully synchronized!")
}
export default sequelize;
