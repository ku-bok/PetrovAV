let cityes = [
    {country:'Россия', name:'Москва', population:12636312},
    {country:'Япония', name:'Токио', population:13942856},
    {country:'Китай', name:'Шанхай', population:24150000},
    {country:'Малайзия', name:'Куала-Лумпур', population:7590000},
    {country:'Турция', name:'Стамбул', population:15067724},
    {country:'Мексика', name:'Мехико', population:16187608},
];
document.write("Список городов");
cityes.forEach( city => {
    document.write(`<li>${city.country} <span style="color: #1a55cc">${city.name}</span> 
           is ${city.population} человек.</li>`);
});
let sortByPopulation = (a, b) => a.population < b.population ? 1 : -1;
cityes.sort(sortByPopulation); 
console.log(cityes);
document.write("Отсортированный список городов");
cityes.forEach( city => {
    document.write(`<li>${city.country} <span style="color: #1a55cc">${city.name}</span> 
           is ${city.population} человек.</li>`);
});