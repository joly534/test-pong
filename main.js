var canvas=document.getElementById('canvas');
var ctx= canvas.getContext('2d');
var game =true;
canvas.width=600;
canvas.height=400;

var Objet = function(x,y,vx,vy){
    this.x=x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.rayon=10;
    this.draw=function(){
        ctx.beginPath();
        ctx.arc(x,y,this.rayon,Math.PI * 2,false);
        ctx.fillStyle="white";
        ctx.fill();        
    };
    this.move = function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        x += vx;
        if ((x + this.rayon == canvas.width)||(x== 0)){           
            vx = -vx;
        }
    }
};
var balle=new Objet(100,200,2,2);

function update(){
    balle.move();
    balle.draw();
    window.requestAnimationFrame(update);

}

update()