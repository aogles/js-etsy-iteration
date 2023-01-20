/*const keys = Object.keys(items);
console.log('keys', keys);

const kvArray = Object.values(items);
console.log('values', values);

const output = 
items.filter((x) => x.price);
console.log(output); 

const itesmUSD = items.filter(function(item) {
    return item.currency_code==="USD";
    const sum = items.US.reduce(function(acc,i) {
        return acc + i.price
        const averageOfAllUSItems = sem / items.us.length;
        */

const prices = items.map((value) => {
    return value.price;
});
console.log(prices);

//[12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 
// 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5]

arry = [12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95,
     2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5];

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(arry)); 
//23.86

/* alt method: const prices = items            / mnap(function(item) {})
.filter(function(item) {                       / return item.price;
    return item.currency_code ==="USD"         /
})
*/

/*items.filter( element => element.price >= 14 && element.price <=18).reduce 
(function(accumulator,element) {
     return accumulator +  element.title
    
    });

    console.log(element(accumulator)); */
   
    const priceRange = 
   items.filter(element => element.price >= 14 && element.price <= 18).reduce
(function(accumulator,element) {
    return accumulator +  element.title
   
   });
   
        console.log(priceRange);
     
   
    //'[object Object]The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, 
    //harry potter gift, three broomsticks mugHand Painted Colorful Feather Glass
    //Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING'

   /* items.filter(element => element.currency_code.includes("GBP")).reduce( 
        function(accumulator, element) {
           return accumulator + element.title  + element.price
          
          }); */
          
          const itemsGBP = items.filter(function(item){  return item.currency_code ==='GBP'});
           console.log(itemsGBP);


          const itemWood =
          items.filter(element => element.materials.includes("wood")).reduce(
            function(accumulator, element) {
                return accumulator + element.title 
               
               });  
               console.log(itemWood);    
        //[object Object]Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - 
        //Groomsmen wedding GiftMedium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-
        //Custom ColorsMagnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like!Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift,
        // 4 Knives'       
        const itemMaterialList =
        items.filter(element => element.materials.length > 8).reduce(
            function(accumulator, element) {
                return accumulator + element.title + element.materials.length 
               
               });
               console.log(itemMaterialList);
               //'[object Object]The Three Broomsticks Customizable Beer Stein Mug, 
               //Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug13'
            const whoMadeMe =
               items.filter(element => element.who_made === "i_did").reduce(
                function(accumulator, element) {
                    return accumulator + element.title 
                   
                
                   });
console.log(whoMadeMe); 
                
                   // Returned with the titles of 18 products
const whoMadeThis=
                   items.filter( element => element.who_made === "i_did").length 
                    

                 console.log(whoMadeThis);  
                 //returns with 18
