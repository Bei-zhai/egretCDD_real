//这个类仅仅保留card的参数，不对card显示作约束

module player {
	export class card extends egret.DisplayObjectContainer{
		
	cardsuit:string
    cardpoint:string
    cardx:number
    cardy:number
	mycard:egret.Bitmap
	cardname:string
	public   constructor(suit:string,point:string,x:number){
		   super();
           
           this.cardsuit=suit;
           this.cardpoint=point;
		   this.cardname=suit+point+'_jpg';
		   this.mycard=this.createBitmapByName(this.cardname);
            }
	private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
	public getcard(){
		return this.mycard;
	}
	}
}