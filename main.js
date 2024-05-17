function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    video = createCapture(VIDEO);
  video.hide();
}
    

function draw(){
    image(video,0,0,280,280)
  }
  function take_snapshot() {
    save('myPicture.jpg');
  }