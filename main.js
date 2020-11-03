var canvas=document.getElementById('canvas');
var ctx= canvas.getContext('2d');
var game =true;
canvas.width=600;
canvas.height=400;

var Balle = function(x,y,vx,vy){
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
        if ((x + this.rayon == canvas.width)||(x+vx== 0)){           
            vx = -vx;
        }
    }
};

var Plateau = function(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.draw = function(){
        ctx.rect(x,y,width,height);
        ctx.fillStyle='white';
        ctx.fill();
    };
    this.move = function(){
        canvas.addEventListener('mousemove', controlSouris);
        function controlSouris(e){
            y = e.offsetY;
        }
    }
}



var balle=new Balle(100,200,2,2);
var player = new Plateau(10,200,20,100);

function update(){
    balle.move();
    balle.draw();
    player.draw();
    player.move();
    window.requestAnimationFrame(update);

}

update()