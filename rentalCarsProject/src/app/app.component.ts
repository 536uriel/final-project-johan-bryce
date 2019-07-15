import { Component, OnInit } from '@angular/core';
import {PlayBoom} from './playBoom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  boomLogin:PlayBoom;
  boomRegister:PlayBoom;
  boomWorker:PlayBoom;
  boomManneger:PlayBoom;
  boomHome:PlayBoom;
  
  startRegister(){
    this.boomRegister.start = true;
  }

  startEn1(){
    this.boomLogin.start = true;
  
  }

  startWorker(){
    this.boomWorker.start = true;
  }

  startManneger(){
    this.boomManneger.start = true;
  }

  startHome(){
    this.boomHome.start = true;
  }

  constructor(private router:Router){
   
  }

  ngOnInit(){
    this.boomLogin = new PlayBoom("canvas1","login","darkturquoise");
    this.boomRegister = new PlayBoom("canvas2","register","thistle");
    this.boomWorker = new PlayBoom("canvas3","worker","burlywood");
    this.boomManneger = new PlayBoom("canvas4","manneger","salmon");
    this.boomHome = new PlayBoom('canvas5','home',"aqua");

    setInterval(play => {

    this.boomLogin.drowTxt();
      this.boomLogin.play();

      this.boomRegister.drowTxt();
      this.boomRegister.play();

      this.boomWorker.drowTxt();
      this.boomWorker.play();

      this.boomManneger.drowTxt();
      this.boomManneger.play();

      this.boomHome.drowTxt();
      this.boomHome.play();

      if(this.boomRegister.counter == 7){
        this.router.navigate(['/register']);
      }

      if(this.boomLogin.counter==7){
        this.router.navigate(['/login']);
      }

      if(this.boomWorker.counter == 7){
        this.router.navigate(['/worker-login']);
      }

      if(this.boomManneger.counter == 7){
        this.router.navigate(['/manneger-login']);
      }

      if(this.boomHome.counter == 7){
        this.router.navigate(['/home-page']);
      }


    },30);
  }


}
