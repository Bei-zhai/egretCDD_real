//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {
     
     //存储卡片
     //存储一局的所有牌
     cardlist:player.card[];
     //用于显示打出的牌和剩余的牌
     outcardlist:egret.Bitmap[];
     incardlist:egret.Bitmap[];
     //用于规则处理
     rulecardlist:player.card[];

     //处理打牌规则
     hand:player.hand;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);//监听是否添加到舞台，后面是响应函数
        //必须初始化
        this.cardlist=[];
        this.outcardlist=[];
        this.incardlist=[];
        this.rulecardlist=[];
        this.hand=null;
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        //this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
        private createGameScene() {
        this.stage.scaleMode = egret.StageScaleMode.FIXED_NARROW;
        //背景
        let sky = this.createBitmapByName("back_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        //创建牌
      
         let card1=this.cardinitial('x','2',1);
         this.addChild(card1.mycard);
          
         let card2=this.cardinitial('x','2',2);
         this.addChild(card2.mycard);  

         let card3=this.cardinitial('f','2',3);
         this.addChild(card3.mycard);  

         let card4=this.cardinitial('h','2',4);
         this.addChild(card4.mycard);  

         let card5=this.cardinitial('x','5',5);
         this.addChild(card5.mycard); 

         let card6=this.cardinitial('m','5',6);
         this.addChild(card6.mycard);  

         let card7=this.cardinitial('h','9',7);
         this.addChild(card7.mycard);  
    
         let card8=this.cardinitial('h','10',8);
         this.addChild(card8.mycard);  

         let card9=this.cardinitial('h','J',9);
         this.addChild(card9.mycard);  

         let card10=this.cardinitial('x','Q',10);
         this.addChild(card10.mycard);  

         let card11=this.cardinitial('f','K',11);
         this.addChild(card11.mycard);  

         let card12=this.cardinitial('x','K',12);
         this.addChild(card12.mycard);  

         let card13=this.cardinitial('x','K',13);
         this.addChild(card13.mycard);  

        let start = new egret.TextField();
        this.addChild(start);
        start.background=true;
        start.backgroundColor=0xe8fff5;
        start.x=this.stage.stageWidth/15*7;
        start.y=this.stage.stageHeight/4*3-200;
        start.textAlign = egret.HorizontalAlign.CENTER;
        start.verticalAlign=egret.VerticalAlign.MIDDLE;
        start.size = 50;
        start.textColor = 0x199fc2;
        start.text='出牌';
        start.touchEnabled=true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandlerstart,this);
        //放歌
        var sound:egret.Sound = RES.getRes("bgm_mp3");
        sound.play();
     }
   //card初始化
   private cardinitial(suit:string,point:string,no:number){
       let cardW=this.stage.stageWidth/15;
           let cardH=cardW*5/3;
           let cardx=this.stage.stageWidth/15;
           let cardy=this.stage.stageHeight/4*3;
           let card=new player.card(suit,point,no);
           card.mycard.x=cardx*no;
           card.mycard.y=cardy;
		   card.mycard.width=cardW;
		   card.mycard.height=cardH;
           //细节
           this.cardlist.push(card);
           card.mycard.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
           card.mycard.touchEnabled=true;
           return card;
           
   } 
    
   //事件处理牌点击
   private  touchHandler(e:egret.TouchEvent){
            let cardynew=this.stage.stageHeight/5*3;
            let cardyoringinal=this.stage.stageHeight/4*3;
            var c:egret.Bitmap=<egret.Bitmap>e.target;//获取card，但出了作用域，所以用e来拿到事件的触发者
            if(c.y==cardyoringinal){
                 c.y=cardynew;
            }
            else
               c.y=cardyoringinal;
    }

   //事件处理出牌
  private touchHandlerstart(){
      let i=0;
      let cardynew=this.stage.stageHeight/5*3;
      let cardW=this.stage.stageWidth/15;
      
      //消失
        for(let i=0;i<this.outcardlist.length;i++){
        this.removeChild(this.outcardlist[i]);}
        //初始化
        this.incardlist=[];
        this.outcardlist=[];
        this.rulecardlist=[];
      //找到选中的牌
      for(;i<this.cardlist.length;i++){
          if(this.cardlist[i].mycard.y==cardynew){
          this.outcardlist.push(this.cardlist[i].mycard);
          this.rulecardlist.push(this.cardlist[i]);
        }
          else
          this.incardlist.push(this.cardlist[i].mycard);
        
     }
      //把牌打出去
      this.hand= new player.hand(this.rulecardlist);
      let check=this.hand.checkrule();
      if(check){
      for(let  i=0;i<this.outcardlist.length;i++){
          this.outcardlist[i].y=cardynew-300;
          this.outcardlist[i].x=this.stage.width/2-cardW*(2-i);
      }
      for(let i=0;i<this.incardlist.length;i++){
          this.incardlist[i].x=this.stage.width/2-cardW*(5-i);
      }
      }
      else
        this.outcardlist=[];
  }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }



    
}
