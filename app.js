import {Movie, Actor, definir} from './models.js';


async function main(){
    await  definir();
    const barbie = await Movie.create({name:"Barbie"});
    console.log(barbie)
    const ken = Movie.build({name:"Ken"});
    await ken.save();
    console.log(ken);

    console.table(await Movie.findAll());
    
    const pelicula = await Movie.findByPk(3);
    console.log(await Movie.findByPk(3));
    pelicula.name = "Pollitos en fuga";
    await pelicula.save();

    console.log(await Movie.findByPk(3));

    await pelicula.destroy();

    console.log(await Movie.findByPk(3));

}
main();