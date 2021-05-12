const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()
    getTime()
}

function draw(){
    // add condition to check if any background image is there to add
    
    background(backgroundImg)
    
    // write code to display time in correct format here
    
    
    
    Engine.update(engine);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var response_json =  await response.json();
    var dateTime = response_json.datetime

    // write code slice the datetime
    var hour  = dateTime.slice(11,13);
    var time  = dateTime.slice(11,16);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=05){
        bg="sunrise1.png"
    }
    else if(hour>=06 && hour<=07){
        bg="sunrise2.png"
    }
    else  if(hour>=08 && hour<=09){
        bg="sunrise3.png"
    }
    else if(hour>=10 && hour<=11){
        bg = "sunrise4.png "
    }
    else if(hour>=12 && hour<=13){
        bg = "sunrise5.png "
    }
    else if(hour>=14 && hour<=15){
        bg = "sunrise6.png "
    }
    else if(hour>=16 && hour<=17){
        bg = "sunset7.png "
    }
    else if(hour>=18 && hour<=19){
        bg = "sunset8.png "
    }
    else if(hour>=20 && hour<=21){
        bg = "sunset9.png "
    }
    else if(hour>=22 && hour<=24){
        bg = "sunset10.png "
    }
    else if(hour>=00 && hour<=02){
        bg = "sunset11.png "
    }
    else if(hour>=03 && hour<=04){
        bg = "sunset12.png "
    }
   
    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var response_json =  await response.json();
    var dateTime = response_json.datetime
    var time  = dateTime.slice(11,16);
    text(time,100,100)
    text.depth=text.depth+1
    
}