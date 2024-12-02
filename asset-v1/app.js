/* Empty... Empty... */
var app=new function(){this.name="TBOI",this.version="0",this.date="2009",this.folder="asset-v1/",this.looptime=11294,this.bpm=170,this.totalframe=256,this.nbpolo=7,this.nbloopbonus=6,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#350000",this.col0="#FF7171",this.col1="#780000",this.col2="#780000",this.col3="#350000",this.col4="#350000",this.animearray=[
{name:"1_H",color:"780000",uniqsnd:!0},
{
        name: "2_watcher",
        color: "780000",
        uniqsnd: !0
    },{name:"3_void",color:"780000",uniqsnd:!0},{
        name: "4_zero",
        color: "780000",
        uniqsnd: !0
    },
{
        name: "5_george",
        color: "780000",
        uniqsnd: !0
    },
{name:"6_kappa",color:"780000",uniqsnd:!0},
{name:"7_mosaic",color:"780000",uniqsnd:!0},
{
        name: "8_clicker",
        color: "780000",
        uniqsnd: !0
    },{
        name: "9_hole",
        color: "780000",
        uniqsnd: !0
    },{
        name: "10_crash",
        color: "780000",
        uniqsnd: !0
    },{name:"11_null",color:"780000",uniqsnd:!1},{
        name: "12_kelvin",
        color: "780000",
        uniqsnd: !1
    },{
        name: "13_bdjskaj",
        color: "780000",
        uniqsnd: !0
    },{
        name: "14_drowned",
        color: "780000",
        uniqsnd: !1
    },{
        name: "15_glitch",
        color: "780000",
        uniqsnd: !0
    },{
        name: "16_die",
        color: "780000",
        uniqsnd: !0
    },{
        name: "17_skull",
        color: "780000",
        uniqsnd: !1
    },{
        name: "18_rags",
        color: "780000",
        uniqsnd: !1
    },{
        name: "19_wanderer",
        color: "780000",
        uniqsnd: !0
    },{
        name: "20_reality",
        color: "780000",
        uniqsnd: !0
    }
],this.bonusarray=[];
for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};