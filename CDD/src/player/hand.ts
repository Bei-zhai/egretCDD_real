//这个类用来处理打牌规则
module player {
export class hand {
    outcardlist:player.card[];
    points:string[];
    suits:string[];
    constructor(out:player.card[]){
        this.outcardlist=[];//构造函数初始化数组
        this.points=[];
        this.suits=[];
        this.outcardlist=out;
    }
    public checkrule(){
    switch(this.outcardlist.length){
        case 0: {
            alert('还没选择牌哦~');
            return true;
        }
        case 1: return true;
        case 2:{
        let i=0;
        for(;i<this.outcardlist.length;i++){
        this.points.push(this.outcardlist[i].cardpoint);}
        if(this.points[0]==this.points[1])
           return true;
        else {
           alert('请选择两张点数一样的牌~');
           return false;
         }
        }
        case  3:{
        let i=0;
        for(;i<this.outcardlist.length;i++){
        this.points.push(this.outcardlist[i].cardpoint);}
        if((this.points[0]==this.points[1])&&(this.points[1]==this.points[2]))
           return true;
        else {
           alert('请选择三张点数一样的牌~');
           return false;
        }
        }
        case 5:{
            //顺子
            let i=0;
            for(;i<this.outcardlist.length;i++){
            this.points.push(this.outcardlist[i].cardpoint);
            this.suits.push(this.outcardlist[i].cardsuit);
        }
        //同花五
        let check_samesuit=(this.outcardlist[0].cardsuit==this.outcardlist[1].cardsuit)
                                &&(this.outcardlist[1].cardsuit==this.outcardlist[2].cardsuit)
                                &&(this.outcardlist[2].cardsuit==this.outcardlist[3].cardsuit)
                                &&(this.outcardlist[3].cardsuit==this.outcardlist[4].cardsuit);
       
        //顺子
        let check_shunzi=false;

        //判断A结尾的顺子
        if((this.outcardlist[0].cardpoint=='10')&&(this.outcardlist[1].cardpoint=='J')
                              &&(this.outcardlist[2].cardpoint=='Q')&&(this.outcardlist[3].cardpoint=='K')
                              &&(this.outcardlist[4].cardpoint=='A'))
                              check_shunzi=true;
       //K结尾
       else if((this.outcardlist[0].cardpoint=='9')&&(this.outcardlist[1].cardpoint=='10')
                              &&(this.outcardlist[2].cardpoint=='J')&&(this.outcardlist[3].cardpoint=='Q')
                              &&(this.outcardlist[4].cardpoint=='K'))
                              check_shunzi=true;
       //Q结尾
       else if((this.outcardlist[0].cardpoint=='8')&&(this.outcardlist[1].cardpoint=='9')
                              &&(this.outcardlist[2].cardpoint=='10')&&(this.outcardlist[3].cardpoint=='J')
                              &&(this.outcardlist[4].cardpoint=='Q'))
                              check_shunzi=true;
       //J结尾                     
       else if((this.outcardlist[0].cardpoint=='7')&&(this.outcardlist[1].cardpoint=='8')
                              &&(this.outcardlist[2].cardpoint=='9')&&(this.outcardlist[3].cardpoint=='10')
                              &&(this.outcardlist[4].cardpoint=='J'))
                              check_shunzi=true;
       //A开头                              
       else if((this.outcardlist[0].cardpoint=='A')&&(this.outcardlist[1].cardpoint=='1')
                              &&(this.outcardlist[2].cardpoint=='2')&&(this.outcardlist[3].cardpoint=='3')
                              &&(this.outcardlist[4].cardpoint=='4'))
                              check_shunzi=true;
       else if((parseInt(this.outcardlist[0].cardpoint)+1==parseInt(this.outcardlist[1].cardpoint))
                        &&(parseInt(this.outcardlist[1].cardpoint)+1==parseInt(this.outcardlist[2].cardpoint))
                        &&(parseInt(this.outcardlist[2].cardpoint)+1==parseInt(this.outcardlist[3].cardpoint))
                        &&(parseInt(this.outcardlist[3].cardpoint)+1==parseInt(this.outcardlist[4].cardpoint)))
                         check_shunzi=true;
        //三带二
        let check_32=false;
        //这里判断用了小技巧：三带二的五张牌要么前三张相同要么后三张相同
        let check_32_1=(this.outcardlist[0].cardpoint==this.outcardlist[1].cardpoint)
                        &&(this.outcardlist[1].cardpoint==this.outcardlist[2].cardpoint)
                        &&(this.outcardlist[3].cardpoint==this.outcardlist[4].cardpoint);
        let check_32_2=(this.outcardlist[2].cardpoint==this.outcardlist[3].cardpoint)
                        &&(this.outcardlist[3].cardpoint==this.outcardlist[4].cardpoint)
                        &&(this.outcardlist[0].cardpoint==this.outcardlist[1].cardpoint);
                        
        if(check_32_1||check_32_2){
            alert('三带二！');
            return true;
        }
        //四带一
        let check_41=false;
        //判断技巧和三带二同
        let check_41_1=(this.outcardlist[0].cardpoint==this.outcardlist[1].cardpoint)
                        &&(this.outcardlist[1].cardpoint==this.outcardlist[2].cardpoint) 
                        &&(this.outcardlist[2].cardpoint==this.outcardlist[3].cardpoint);
        let check_41_2=(this.outcardlist[1].cardpoint==this.outcardlist[2].cardpoint)
                        &&(this.outcardlist[2].cardpoint==this.outcardlist[3].cardpoint)
                        &&(this.outcardlist[3].cardpoint==this.outcardlist[4].cardpoint);
        if(check_41_1||check_41_2){
            alert('四带一！');
            return true;
        }                       
        if(check_shunzi){
            alert('顺子');
            return true;
        }
        else if(check_32){
            alert('三带二');
            return true;
        }
        else if(check_41){
            alert('四带一');
        }
        else if(check_samesuit){
            alert('同花五');
            return true;
        }
        else{
            alert('请选择五张符合规则的牌~');
            return false;
        }
    }
        default: {
            alert('出牌不符合规则，请重新选择~');
            return false;
        }
    }
    }
}}