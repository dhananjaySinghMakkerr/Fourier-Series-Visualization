let time=0;
var waves=[];
function setup()
{
  createCanvas(600,600);
  slider=createSlider(1,20,1);

}
function draw(){
  background(0);
  translate(150,300);
  let radius;


  let x=0;
  let y=0;
for(let i=0;i<slider.value();i++)
{
  let prevX=x;
  let prevY=y;
  let n=2*i+1;
radius=75*(4/(PI*n));
stroke(255,100);
noFill();
ellipse(prevX,prevY,radius*2);
 x=x+radius*cos(n*time);
 y=y+radius*sin(n*time);

fill(255);
ellipse(x,y,4);
stroke(255);
line(prevX,prevY,x,y);
}
waves.unshift(y);
translate(200,0);
line(x-200,y,0,waves[0]);
beginShape();
noFill();

for(let i=0;i<waves.length;i++)
{
  vertex(i,waves[i]);
}
endShape();
if(waves.length>250)
{
  waves.pop();
}
  time=time+0.03;

}
