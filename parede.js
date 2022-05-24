class Parede {
    constructor(posX, posY, lar, alt){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(posX, posY, lar, alt, config);
        World.add(world,this.corpo);
        this.largura = lar;
        this.altura = alt;
    }
    daVinci(){
        var pos = this.corpo.position;

        push();
        rectMode(CENTER);
        stroke("blue");
        fill("purple");
        rect(pos.x, pos.y, this.largura, this.altura);
        pop();

    }
}