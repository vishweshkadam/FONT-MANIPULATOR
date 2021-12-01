function setup(){
 canvas=createCanvas(450,380)
    video = createCapture(VIDEO)
    canvas.position(700, 140)
    video.position(100, 80)
 M

posenet=ml5.poseNet(video, modelloaded);
posenet.on("pose",gotpose)
 }

 function modelloaded(){
console.log("the posnet initialization")
 }

 function draw(){
     background("lightpink")
     
 }
 function gotpose(result){
     if(result.length > 0){
         console.log(result)
     }
 }