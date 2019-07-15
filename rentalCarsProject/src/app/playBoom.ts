export class PlayBoom{
    public start:boolean = false;
    public counter:number = 0;
    public can:string;
    public txt:string;
    public color:string;

    constructor(can:string,txt:string,color:string){
      this.can = can
      this.txt = txt;
      this.color = color;
    }

    public drowTxt(){

        if(this.txt){
            var canvas = <HTMLCanvasElement>document.getElementById(this.can);
            var context = canvas.getContext("2d");
            context.fillStyle = this.color;
            context.fillRect(0,0,canvas.width,canvas.height);
            context.fillStyle = "black";
            context.font = "15px Arial";
            context.fillText(this.txt,canvas.width / 3,canvas.height / 2);
        }
    }

    public play(){
        if(this.start){
        var canvas = <HTMLCanvasElement>document.getElementById(this.can);
        var context = canvas.getContext("2d");
        var img = <HTMLImageElement>document.getElementById("MidAirExplo" + this.counter);

        context.drawImage(img,0,0,canvas.width,canvas.height);
        this.counter++;

      

        if(this.counter == 8){
            context.clearRect(0,0,canvas.width,canvas.height);
            this.counter = 0;
            this.start = false;
        }
      }
    }
}