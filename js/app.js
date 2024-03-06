let regions = [
    {
        name: "Laçın",
        villages:  3
    },
    {
        name: "Cəbrayıl",
        villages:  90 
    },
    {
        name: "Füzuli",
        villages:  53
    },
   
    {
        name: "Qubadlı",
        villages:  41
    },
    {
        name: "Kəlbəcər",
        villages:  127
    },
    {
        name: "Xocavənd",
        villages:  35
    }, 
    {
        name: "Xocalı",
        villages:  9
    },
    {
        name: "Agdam",
        villages:  80
    },
    {
        name: "Zəngilan",
        villages:  52
    },
   
   
    {
        name: "Tərtər",
        villages:  2
    }
]



// const head = document.getElementsByClassName('title');
// head.innerHTML = '<h3>Azərbaycanın işgaldan azad olunan rayon və kəndlərinin siyahısı</h3>';
// console.log(head.text)

rayon = document.getElementById('region');

for(let i=0; i<regions.length; i++){
    rayon.innerHTML += `
    <div class="col-lg-6" > 
    ${regions[i].name}:   ${regions[i].villages} kend  <hr>
    </div> `
}
rayon.style.color = "blue";
rayon.style.fontSize = "24px";
console.log(rayon);



// Ən çox kəndə sahib olan rayon adını göstərən funksiya
//  bu funksiya tam yazılmayıb
  let maxVillage = regions[0]

function findRegionMoreVillages(){
    for(let i=0; i<regions.length; i++){
        console.log(regions[i].villages)
        if(regions[i].villages > maxVillage){
         console.log(regions[i].villages)
        }
    }
}

 

findRegionMoreVillages()


// ümumi azad edilən kənd sayını göstərən funksiya
let regionsSum = 0
function SumVillages(){
    for(let i=0; i<regions.length; i++){
         regionsSum += regions[i].villages
    }
    console.log(regionsSum)
}

SumVillages();
  



// adinda a herfi olan rayonlarin siyahisi
 let regionsNameWitA = [];
 let array = document.getElementById('array');
function regionsWithA(){
for(let i=0; i<regions.length; i++){
    if(regions[i].name.includes('a')){
        console.log(regionsNameWitA += regions[i].name + " " );
        array.innerHTML= `${regionsNameWitA}`
        array.style.color = "red";
        array.style.fontSize = "33px";
        array.style.fontFamily= "Josefin-sans sans-serif"
    }
}
}

regionsWithA();

// Azad edilən rayonlar arasında adı ən uzun olan rayonun necə kəndi olduğunu göstərən funksiya 
// bu funksiyanı tam yaza bilmədim
let regionsLengths = "";

function MostVillagesCount(){
for(let i=0; i<regions.length; i++){
    if(regions[i].name.length> regionsLengths ){
        console.log(regions[i.name]+regions[i].villages)
    }
}
}

MostVillagesCount()


























