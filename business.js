// Business Name Generator

let adjectives = "crazy+amazing+fire";
let shopname = "engine+food+garments";
let anotherword = "bros+limited+hub";

let adj = adjectives.split("+");
let a = Math.floor(Math.random() * adj.length);
console.log(adj[a]);


let sn = shopname.split("+");
let s = Math.floor(Math.random() * sn.length);
console.log(sn[s]);

let aw = anotherword.split("+");
let w = Math.floor(Math.random() * aw.length);
console.log(aw[w]);

console.log("Your New Business Name :",adj[a],sn[s],aw[w]);


// WITHOUT ARRAYS
 let rand = Math.random()
        let first, second, third;
        // Lets generate the first word
        if(rand<0.33){
            first = "Crazy"
        }
        else if(rand<0.66 && rand>=0.33){
            first = "Amazing"
        }
        else{
            first = "Fire"
        }
        // Lets generate the second word
        rand = Math.random()
        if(rand<0.33){
            second = "Engine"
        }
        else if(rand<0.66 && rand>=0.33){
            second = "Foods"
        }
        else{
            second = "Garments"
        }
        // Lets generate the third word
        rand = Math.random()
        if(rand<0.33){
            third = "Bros"
        }
        else if(rand<0.66 && rand>=0.33){
            third = "Limited"
        }
        else{
            third = "Hub"
        }
        alert(`${first} ${second} ${third}`)