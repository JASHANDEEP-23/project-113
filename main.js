function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color ="";
    fill("red")
    rect(30, 10, 580, 40);
    rect(30, 430, 580, 40);
   rect(0,30,40,430);
   rect(600,30,40,430)
   fill("green")
   circle(30,30,60);
   circle(30,450,60);
   circle(610,30,60);
   circle(610,450,60)
    

}

function draw(){
    image(video,50,60,540,360)
    tint(tint_color)}
   

    function takeSnapshot(){
        save('student_name.png')
    }

    function filter_tint(){
        tint_color = document.getElementById("color_name").value;
    }
    