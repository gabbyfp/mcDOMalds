
/*Use the powers of the Document Object Model (DOM) to complete the following exercises below:*/

//1. Ronald McDonald
//Find the div with the id of "first1" and replace the 'Robert' with the 'Ronald'
let divElem = document.getElementById('first1');
divElem.innerHTML = 'Ronald';


//Find the div id of 'favFood1' and replace 'Favorite Food: Whoppers' with 'Favorite Food: Big Macs'
document.getElementById("favFood1").innerHTML = "Favorite Food: Big Macs";


//Find the div id of 'shoe1' and replace 'Shoe: n/a' with 'Shoe: Clown'
document.getElementById("shoe1").innerHTML = "Shoe: Clown";


//2. Evil Grimmace
//Find the div with the id of "last2" and replace 'Grimmmmmmace' with the 'Grimmace': 
document.getElementById("last2").innerHTML = "Grimmace";


//Find the div with the id of 'position2' and replace 'Point Guard' with 'Power Foward'
document.getElementById("position2").innerHTML = "Power Forward";


//Find the div id of 'nickName2' and replace 'aka:The Purple Monster' with 'The Poor Man's Barney'
document.getElementById('nickName2').innerHTML = "aka: The Poor Man's Barney";


//3. Mayor McCheese

//Find the div with the id of 'nickName3' and replace 'aka: Mister President' with 'aka: Da Mayah'
document.getElementById('nickName3').innerHTML = "aka: Da Mayah";


//Find the div with the id of 'favFood3' and replace 'Favorite Food: Kale Salad' with 'Favorite Food: Cheeseburgers';
document.getElementById('favFood3').innerHTML = "Favorite Food: Cheeseburgers";


//Find the div with the id of 'shoe3' and replace 'Shoe: Jordan Brand' with 'Shoe: Li-Ning'
document.getElementById('shoe3').innerHTML = "Shoe: Li-Ning";



//4. Player cards 
//The player cards needs an artistic update. Change the following:
//4.1 background color to 'red'
//4.2 border style to 'solid'
//4.3 border color to 'gold'
let newPlayerCard = document.getElementsByClassName('playerCard');
for (let i=0; i<newPlayerCard.length; i++){
      newPlayerCard[i].style.background = 'red';
      newPlayerCard[i].style.borderStyle = 'solid';
      newPlayerCard[i].style.borderColor = 'gold';
}



//5. Uncle O'Grimacey
//Create the following for each element:

/*5.1 Create a div element with:
      id of 'position7'
      innerHTML of 'Coach'
      add this newly created div element to Uncle's player card
*/
let playerBox = document.getElementsByClassName('playerCard');
let uncleNew = document.createElement('div');
uncleNew.id = 'position7';
uncleNew.innerHTML = 'Coach';
playerBox[6].prepend(uncleNew);


/*5.2 Create a h1 element with:
    id of 'last7'
    innerHTML of "O'Grimacey"
    add this newly created h1 element to Uncle's player card
*/
let uncleLast = document.createElement('h1');
uncleLast.id = 'last7';
uncleLast.innerHTML = "O'Grimacey";
playerBox[6].prepend(uncleLast);


/*5.3 Create a h2 element with:
    id of 'first7'
    innerHTML of 'Uncle'
    add this newly created h2 element to Uncle's player card
*/
let uncleFirst = document.createElement('h2');
uncleFirst.id = 'last7';
uncleFirst.innerHTML = "Uncle";
playerBox[6].prepend(uncleFirst);


//6. Fry Guys

/*6.1 Create a div element with:
      id of 'nickName8'
      innerHTML of 'aka: Pom-poms'
      add this newly created div element to Fry Guys player card
*/




/*6.2 Create a div element with:
      id of 'favFood8'
      innerHTML of 'Favorite Food: French Fries'
      add this newly created div element to Fry Guys player card
*/



/*6.3 Create a div element with:
      id of 'shoe8'
      innerHTML of 'Shoe: Puma'
      add this newly created div element to Fry Guys player card
*/



//7. Birdie the Early Bird

/*7.1 Create a div element with:
      id of 'position9'
      innerHTML of 'Head Scout'
      add this newly created div element to Birdie's player card
*/



/*7.2 Create a h1 element with:
    id of 'last9'
    innerHTML of 'Early Bird'
    add this newly created h1 element to Birdie's player card
*/


/*7.3 Create a h2 element with:
    id of 'first9'
    innerHTML of 'Birdie the'
    add this newly created h2 element to Birdie's player card
*/



/*7.4 Create a div element with:
      id of 'nickName9'
      innerHTML of 'aka: ODB'
      add this newly created div element to Birdie's player card
*/




/*7.5 Create a div element with:
      id of 'favFood9'
      innerHTML of 'Favorite Food: The other white meat'
      add this newly created div element to Birdie's player card
*/




/*7.6 Create a div element with:
      id of 'shoe9'
      innerHTML of 'Shoe: allbirds'
      add this newly created div element to Birdie's player card
*/

