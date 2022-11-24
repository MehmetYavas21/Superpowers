const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
];
console.log(superheroes);

// 1.Make an array of all superhero names.

const superheroesName = superheroes.map((heroesname) => {
    return heroesname.name;
});
console.log("all superheroes names " , superheroesName);

// 2.Make an array of all "light" superheroes (< 190 pounds).

const leightHeroes = superheroes.filter((lowWeight) => {
    return lowWeight.weight < 190;
});
console.log("The heroes under 190 pounds " , leightHeroes);

// 3. Create an array with the names of the superheroes who weigh 200 pounds.
/*
Extra: chaining ⛓️

The great thing about array methods is, you can chain them. In other words, you can make a chain out of it. For example, if you first ran a .filter function to filter the superheroes who weigh 200 pounds, you can then use a .map function afterward that returns the names of the superheroes. For example:

// Pseudo code (almost real code):
heroes.filter(hero => {
      return [do something with the hero]
      }).map(hero => {
              return [do something with the array that has just been through the map function, so it looks different from the original array]
      }
*/
const weight200 = superheroes.filter((weight200hero) => {
    if (weight200hero.weight == 200){
        return weight200hero.name;
    }
}).map((hero) => {
    return hero.name;
});
console.log("The name of superheroes whose weight is 200 pound " , weight200);

// 4.Make an array with all the comics where the superheroes had their "first appearances".

const firstAppear = superheroes.map((appear) => {
    return appear.name + " has appeared first in " + appear.first_appearance;
});

console.log("has appeared first " , firstAppear)

// 5.Create an array of all DC Comics superheroes. Did that work? Then repeat the above function and also create an array with all Marvel Comics superheroes.

const dcComics = superheroes.filter((dc) => {
    return dc.publisher === 'DC Comics';
});
console.log("DC Comics Heroes " , dcComics);

const marvelComics = superheroes.filter((marvel) => {
    return marvel.publisher === 'Marvel Comics';
});
console.log("Marvel Comics Heroes " , marvelComics);

// 6.Add up the weight of all DC Comics superheroes. Pay attention! Conditional to the rescue! The weight you see here, what data type is that? A number? Or a string? Oh yeah, and do all superheroes have weight?

const makeHeroFat = dcComics.map((adding) => {
    return adding.weight * 2 + ' ' + adding.name;
});

console.log("Dc Heroes get 2 times pounds more " , makeHeroFat);

// 7.Do the same with all Marvel Comics superheroes

const makeMarvelHeroFat = marvelComics.map((marAdding) => {
    return marAdding.weight * 3 + ' ' + marAdding.name;
});

console.log("Marvel Heroes get 3 times pounds more " , makeMarvelHeroFat);

// 8.Bonus: find the heaviest superhero! Use the array of superheroes below:

const heaviestHero = superheroes.map((heavy) =>{
    return heavy.weight;
}).filter((fat) =>{
    return fat.name.max;
});
console.log(heaviestHero , ' is the heaviest hero');


// https://www.youtube.com/watch?v=G3BS3sh3D8Q&t=1s

// https://www.youtube.com/watch?v=4_iT6EGkQfk

// https://www.youtube.com/watch?v=g1C40tDP0Bk



