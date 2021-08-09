//Create variables here
var dog, happydog;
var foods,foodStock;
var database;
var Dog;
function preload()
{
  dog = loadImage("Dog.png")
  happydog = loadImage("happydog.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500,500);
  Dog = createSprite(250,250,0,0);
  Dog.addImage(dog)
  Dog.scale=0.3;
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foods);
Dog.addImage(happydog);
}

  drawSprites();
  textSize(20)
fill("white");
stroke("black");
text("Food:"+foods,230,100);
text("Note: Press up arrow to feed the dog milk!",75,50)
}
function readStock(data){
foods=data.val()
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}


