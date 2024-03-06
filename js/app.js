let regions = [
    {
        name: "Laçın rayonu",
        villages:  3
    },
    {
        name: "Cəbrayıl rayonu",
        villages:  90 
    },
    {
        name: "Füzuli rayonu",
        villages:  53
    },
   
    {
        name: "Qubadlı rayonu",
        villages:  41
    },
    {
        name: "Kəlbəcər rayonu",
        villages:  127
    },
    {
        name: "Xocavənd rayonu",
        villages:  35
    }, 
    {
        name: "Xocalı rayonu",
        villages:  9
    },
    {
        name: "Agdam rayonu",
        villages:  80
    },
    {
        name: "Zəngilan rayonu",
        villages:  52
    },
   
   
    {
        name: "Tərtər rayonu",
        villages:  2
    }
]



// const head = document.getElementsByClassName('title');
// head.innerHTML = '<h3>Azərbaycanın işgaldan azad olunan rayon və kəndlərinin siyahısı</h3>';
// console.log(head.text)

rayon = document.getElementById('region');

for(let i=0; i<regions.length; i++){
    rayon.innerHTML += `
    <div class="col-lg-6"> 
    ${regions[i].name}:   ${regions[i].villages} kend  <hr>
    </div> `
}
rayon.style.color = "blue";
rayon.style.fontSize = "24px";
console.log(rayon);




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