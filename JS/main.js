var text= '{"paises":[' + 
    '{ "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" },'+ 
    '{ "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, '+ 
    '{ "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" },'+ 
    '{"Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" },' + 
    '{ "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, ' +
    '{ "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" },'+
    ' { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" },'+ 
    ' { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, ' +
    '{ "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" },'+ 
    '{ "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" },' + 
    '{ "Name" : "North/South", "City" : "London", "Country" : "UK" },'+ 
    '{ "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" },'+ 
    '{ "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, ' + 
    '{ "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" },' + 
    ' { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" },' +
    ' { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" },'+
    ' { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }]}';
obj = JSON.parse(text);
obj.paises.sort(function(a,b){
    return a.Country.toLowerCase().localeCompare(b.Country.toLowerCase());
});
 console.log(obj);
var table = document.getElementById("tabla");
 for(var i=0; i< obj.paises.length; i++){
    console.log("Hola");
   var row = table.insertRow(i+1);
    var nombre = row.insertCell(0);
     var ciudad = row.insertCell(1);
    var pais = row.insertCell(2);
     
 nombre.innerHTML = obj.paises[i].Name;
     ciudad.innerHTML = obj.paises[i].City;   
  pais.innerHTML = obj.paises[i].Country;    
    
  
        

 }
 console.log(obj);
console.log(obj.paises[2].Name);
