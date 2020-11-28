
//Create variables here
var dog,image1,image2 

var database, foodS, foodStock

function preload()
{
  //load images here
 image1 = loadImage ("images/dogImg.png");
 image2 = loadImage ("images/dogImg1.png");
}
 


function setup() {
  database=firebase.database();
  createCanvas(500, 500);
dog=createSprite(250,300,150,150);
dog.addImage(image1);
dog.scale=0.15;
foodStock=database.ref('Food');
foodStock.on("value",readStock);
textSize(20);
}

function draw() {  
background ("46,139,87");
if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(image2)
}
  drawSprites();
  textSize (30)
  fill("black")
  text ("Note: Press UP_ARROW Key To Feed Drago Milk")
text("foodRemaining "+foodS,170,200)
 
  stroke(3)
}
  //add styles here
// Function to read values from DB
function writeStock(x){
if(x<=0){
  x=0;
} else {
  x=x-1;
}

// Function to write values in DB

  database.ref('/').update({
   Food:x 
  })
}
function readStock(data){
  foodS=data.val()
}



