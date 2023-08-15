import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize('ercompleto', 'susanamunoz','',{host:'localhost', dialect:'postgres'});

export const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
export const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
Movie.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Movie, { through: 'ActorMovies' });


export async function definir(){
    await sequelize.sync({force:false});
}
