import *  as func from "./library";
import * as $ from "jquery";
import Vue from "vue";

(window as any).$ = $;
(window as any).jQuery = $;

//import HelloComponent from "./components/Hello.vue";
// new Vue(HelloComponent).mount("#app3");
import "../assets/css/main.css";

import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");

require("animate.css");

var bootbox: any = require("bootbox");

var VueBarcode: any = require("vue-barcode");

require("bootstrap-3-typeahead");
import * as moment from 'moment'
import * as Moment from "moment";
import Datepicker from "vuejs-datepicker";

// import "font-awesome/css/font-awesome.min.css";

// require("bootstrap-toggle");

 // require("mdbootstrap");
 // import "mdbootstrap/css/mdb.min.css";

const VueUploadComponent: any = require("vue-upload-component");
Vue.component("file-upload", VueUploadComponent);

import VueExcelXlsx from "vue-excel-xlsx";
Vue.use(VueExcelXlsx);

var Swal: any = require('sweetalert2');

var version: string = "[AIV]{version}[/AIV]";


import { FrissOrder, FoodOutItem, RestBaseResponse, RestBaseResponse_WebshopMysystem, CashOut, CashOutItem, TermekKategoria, Termek, SpecNapi, GiveOut, Order, TortaRendeles, TortaRendeles_Kiegeszitok, NormalTortaArazas, BurkoltTortaArazas, TortaArazasKategoriaHelper, Irsz, Kodtabla, OrderItem } from './baseclasses';
import { PartnerForTypeHead, Partner, Elorendeles, MegrendelesModositas, PartnerBig, Kapacitas, RendelesOsszesitett, RendelesOsszesitettHetiObj, NTAKKategoriaHelper, NTAKAlKategoriaHelper, NTAKFizetesiModHelper, NTAKMennyisegiEgysegekHelper, CashOutPay } from "./baseclasses";
import { CukraszObj, Napimunka, LoggedUser, NapiForgalom, NTAKTranzakcio, NTAKTranzakcioLog, WebshopSzallAtveteliMod, ArchivMegrendeles, ArchivMegrendelesItem} from './baseclasses';
import { ChangePortionItemParObj }  from "./baseclasses";
import { Sections, dataURLPostTetConst } from "./library";
import { request } from "https";
import { setFlagsFromString } from "v8";
import { EILSEQ, SSL_OP_TLS_ROLLBACK_BUG } from "constants";
import { count } from "console";
import { stat } from "fs";
import { INSPECT_MAX_BYTES } from "buffer";

require("html-loader?interpolate!./components/testcomp/testsection.html");

Vue.component("hello-block", require("./components/Hello.vue"));
Vue.component("termek-kategoria-block", require("./components/Kodblock.vue"));
Vue.component("termek-block", require("./components/TermekBlock.vue"));

/*let v2: any = new Vue({
    el: "#app2",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});*/

// -----------------------------------------------

Vue.component("modal", {
    template: "#modal-template"
});

Vue.component("cashout-items", {
    template: `
            <li class="list-group-item" style="text-align: center;">
            <div style="float:left; width: 15%;" v-if="mfid===0 && istortaorder==0">
                <button type="button" class="btn btn-success" v-on:click="plusDataItem">
                    <i class="fas fa-plus"></i>
                </button>
                <button type="button" class="btn btn-danger" v-on:click="minusDataItem">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
            <div style="float:right; width: 15%; ">                
                <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa5DataItem"><p v-bind:class="{activebutton : afamertek == 5}">&nbsp;5</p></button> 
                <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa18DataItem"><p v-bind:class="{activebutton : afamertek == 18}">18</p></button>
                <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa27DataItem"><p v-bind:class="{activebutton : afamertek == 27}">27</p></button>            
            </div>
            <div v-bind:class="{divleft : porciozhato == 'I'}">
                <span v-if="istortaorder == 1">Tortarendelés</span><br>
                <i v-if="inout == 'OUT'" class="fas fa-car fa-lg"></i>
                <span> {{ name }}</span><br>
                <span> {{ price }} x </span>
                <span v-if="mfid===0 && istortaorder==0" class="badge badge-primary badge-pill" v-on:click="showNumPadItem"> {{ menny }}</span>
                <span v-if="mfid===1 || istortaorder==1" class="badge badge-danger badge-pill">1</span>
                <strong>{{ ossz}} HUF</strong>
                <br v-if="kedv>0"><span v-if="kedv>0"><i>Kedvezmény: -{{kedv}}%</i></span>
            </div>
            <div style="float:right; width: 15%; " >
                <div v-show="porciozhato == 'I'">
                    <button type="button" class="btn btn-info" v-bind:class="{ 'btn-danger': adag === 'E'}" v-on:click="changePortionE">
                        <i class="fas fa-circle fa-lg"></i>
                    </button>
                    <button type="button" class="btn btn-info" v-bind:class="{ 'btn-danger': adag === 'F'}" v-on:click="changePortionF">
                        <i class="fas fa-adjust fa-lg"></i>
                    </button>
                </div>
            </div>
        </li>
        `,
    props: ["name", "price", "menny", "adag", "porciozhato", "inout", "ossz", "mfid", "istortaorder", "afamertek", "kedv", "iskapcsolttermek"],
    methods: {
        changeAfa5DataItem: function():void {
            this.$emit("changeafa5");
        },
        changeAfa18DataItem: function():void {
            this.$emit("changeafa18");
        },
        changeAfa27DataItem: function():void {
            this.$emit("changeafa27");
        },
        plusDataItem: function():void {
            this.$emit("plus");
        },
        minusDataItem: function():void {
            this.$emit("minus");
        },
        changePortionI: function(portionType: string, v1: string):void {
            this.$emit("changep", [portionType, v1]);
        },
        changePortionE: function():void {
            this.$emit("changepe");
        },
        changePortionF: function():void {
            this.$emit("changepf");
        },
        addKoretItem: function():void {
            this.$emit("addkoret");
        },
        showNumPadItem: function():void {
            this.$emit("shownum");
        }
    }
});


Vue.component("foodout-card", {
    template: `
        <div class="row">
            <div class="col-sm-12" >
                <div class="card">
                    <div class="card-body">
                        <div v-bind:class="{divleft : porciozhato == true}">
                            <h4 class="card-title">{{ name }}</h4>
                            <p class="card-text">{{ price }} x {{menny}} <b>{{ossz}}</b> HUF</p>
                            <a v-if="istortarendeles==0" href="#" class="btn btn-success" v-on:click="plusDataItem"><i class="fas fa-plus"></i></a>
                            <span v-if="istortarendeles==0" class="badge badge-primary badge-pill" v-on:click="showNumPadItem">{{ menny }}</span>
                            <a v-if="istortarendeles==0" href="#" class="btn btn-danger" v-on:click="minusDataItem"><i class="fas fa-minus"></i></a>
                            &nbsp;
                            <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa5DataItem"><p v-bind:class="{activebutton : afamertek == 5}">&nbsp;5%</p></button> 
                            <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa18DataItem"><p v-bind:class="{activebutton : afamertek == 18}">18%</p></button>
                            <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa27DataItem"><p v-bind:class="{activebutton : afamertek == 27}">27%</p></button>  
                            <button v-if="istortarendeles==0" type="button" class="btn btn-info"  v-on:click="addPercentItem">Kedvezmény</button>
                        </div>
                        <div style="float:right; width: 15%;">

                            <div v-show="porciozhato == true">
                                <button type="button" class="btn btn-secondary" v-bind:class="{ 'btn-danger': adag === 'E'}" v-on:click="changePortionItem('E')">
                                    <i class="fas fa-circle fa-lg"></i>
                                </button>
                                <button type="button" class="btn btn-secondary" v-bind:class="{ 'btn-danger': adag === 'F'}" v-on:click="changePortionItem('F')">
                                    <i class="fas fa-adjust fa-lg"></i>
                                </button>
                            </div>
                            <div v-show="korettel == true">
                                <button type="button" class="btn btn-info"  v-on:click="addKoretItem">
                                    <i class="fas fa-bullseye fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
    props: ["name", "price", "menny", "adag", "porciozhato", "korettel", "istortarendeles", "ossz", "afamertek"],
    methods: {
        changeAfa5DataItem: function():void {
            this.$emit("changeafa5");
        },
        changeAfa18DataItem: function():void {
            this.$emit("changeafa18");
        },
        changeAfa27DataItem: function():void {
            this.$emit("changeafa27");
        },
        plusDataItem: function():void {
            this.$emit("plus");
        },
        minusDataItem: function():void {
            this.$emit("minus");
        },
        changePortionItem: function():void {
            this.$emit("changep");
        },
        addKoretItem: function():void {
            this.$emit("addkoret");
        },
        addPercentItem: function():void {
            this.$emit("addpercent");
        },
        showNumPadItem: function():void {
            this.$emit("shownum");
        }
    }
});

Vue.component("foodout-list", {
    template: `

                <li class="list-group-item">
                    <i class="fa-solid fa-glass-water"></i> {{ name }} <span v-if="istortarendeles==0" title="ossz" class="badge badge-primary badge-pill" v-on:click="showNumPadItem">{{ menny }}</span> x {{ price }}
                    <hr>
                    <a href="#" v-if="istortarendeles==0 && iskapcsolttermek==0" class="btn btn-success btn-sm" v-on:click="plusDataItem"><i class="fas fa-plus"></i></a>&nbsp;
                    <a href="#" v-if="istortarendeles==0 && iskapcsolttermek==0" class="btn btn-danger btn-sm" v-on:click="minusDataItem"><i class="fas fa-minus"></i></a>     
                    
                    <button type="button" class="btn btn-light btn-sm"><font v-bind:class="{activebutton : afamertek == 0}">&nbsp;0%</font></button> 
                    <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa5DataItem"><font v-bind:class="{activebutton : afamertek == 5}">&nbsp;5%</font></button> 
                    <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa18DataItem"><font v-bind:class="{activebutton : afamertek == 18}">18%</font></button>
                    <button type="button" class="btn btn-light btn-sm" v-on:click="changeAfa27DataItem"><font v-bind:class="{activebutton : afamertek == 27}">27%</font></button>          

                    <button v-show="porciozhato == true" type="button" class="btn btn-secondary btn-sm" v-bind:class="{ 'btn-danger': adag === 'E'}" v-on:click="changePortionItem('E')">
                        <i class="fas fa-circle fa-lg"></i>
                    </button>
                    <button v-show="porciozhato == true" type="button" class="btn btn-secondary btn-sm" v-bind:class="{ 'btn-danger': adag === 'F'}" v-on:click="changePortionItem('F')">
                        <i class="fas fa-adjust fa-lg"></i>
                    </button>                  

                    <button v-show="korettel == true" type="button" class="btn btn-info btn-sm"  v-on:click="addKoretItem">
                        <i class="fas fa-bullseye fa-lg"></i>
                    </button>            

                   <!-- <button v-if="istortarendeles==0" type="button" class="btn btn-info btn-sm"  v-on:click="addPercentItem">
                        Kedv.
                     </button> -->

                </li>

        `,
    props: ["name", "price", "menny", "adag", "porciozhato", "korettel", "afamertek", "istortarendeles","ossz", "iskapcsolttermek"],    
    methods: {
        changeAfa5DataItem: function():void {
            this.$emit("changeafa5");
        },
        changeAfa18DataItem: function():void {
            this.$emit("changeafa18");
        },
        changeAfa27DataItem: function():void {
            this.$emit("changeafa27");
        },        
        plusDataItem: function():void {
            this.$emit("plus");
        },
        minusDataItem: function():void {
            this.$emit("minus");
        },
        changePortionItem: function():void {
            this.$emit("changep");
        },
        addKoretItem: function():void {
            this.$emit("addkoret");
        },
        addPercentItem: function():void {
            this.$emit("addpercent");
        },
        showNumPadItem: function():void {
            this.$emit("shownum");
        }
    }
});

Vue.component("my-friss-card", {
    template: `
              <div class="list-group">
                  <div class="list-group-item list-group-item-action flex-column align-items-start <!--active--> ">
                      <div style="float:left; width: 15%;" v-on:click="select">
                        <div class="d-flex flex-wrap">
                            <h1>{{ napisorszam }}.</h1>
                        </div>
                      </div>
                      <div style="float:left; width: 70%;" v-on:click="select">
                          <!--<div class="d-flex flex-wrap" v-show="image">
                              <div class="p-1 v-show='image'"><img width='150' height='130' v-bind:src='genimageurl'></div>
                          </div>-->
                          <div class="d-flex w-100 justify-content-between">
                              <h2 class="mb-1" >{{ name }}</h2>
                              <h3 class="mb-1"  style="margin-right: 100px;">Eltelt idő: {{ idophp }}</h3>
                              <!--<small>#{{ id }}</small>-->
                          </div>
                          <div class="d-flex flex-wrap">
                              <div class="p-1" v-show="azon"><strong>Azonosító:</strong> {{ azon }}</div>
                              <div class="p-1"><h3>{{ genfogyasztas }} </h3></div>
                              <div class="p-1"><h3>{{ menny }} db</h3></div>
                              <div class="p-1"><h3>{{ genadagstr }} </h3></div>
                          </div>
                      </div>
                      <div style="float:right; width: 15%; padding: 5px; text-align: right;" >
                          <!--<div class="p-2">
                              <button type="button" class="btn btn-warning" v-on:click="select"><i class="fas fa-pencil-alt"></i></button>
                          </div> -->
                          <div class="row">
                              <div class="col-md-4 mb-4">
                                  <button type="button" class="btn btn-warning btn-lg" v-on:click="deltermek">
                                      <i class="far fa-trash-alt"></i><br>
                                      Kiadás
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      `,
      props: ["name", "menny", "id", "adag", "azon", "image", "typeinout", "ido", "idophp", "pid", "napisorszam"],
      computed: {
          modurl: function(): string {
              let lRet: string = "urlapvue.html?id=" + this.id;
              return lRet;
          },
          gencardid: function(): string {
              let lRet: string = "r_" + this.id;
              return lRet;
          },
          genimageurl: function(): string {
              let lRet: string = "http://www.marikakonyhaja.hu/upload/friss/" + this.image;
              return lRet;
          },
          genadagstr: function(): string {
              let lRet: string = "";

              if(this.adag === "E") {
                lRet = "Egész";
              } else if(this.adag === "F") {
                lRet = "Fél";
              }

              return lRet;
          },
          genfogyasztas: function(): string {
              let lRet: string = "";

              if(this.typeinout === "IN") {
                lRet = "HELYBEN";
              } else if(this.typeinout === "OUT") {
                lRet = "ELVITEL";
              }

              return lRet;
          },
          genido: function(): string {
            let lRet: string = "";

            let currentdate: any = new Date();

            let aktev:string = currentdate.getFullYear();
            let aktho:string = (currentdate.getMonth()+1);
            if(Number(aktho) < 10 ) {
                aktho = "0" + aktho;
            }
            let aktnap:string = currentdate.getDate();
            if(Number(aktnap) < 10 ) {
                aktnap = "0" + aktnap;
            }

            let aktora:string = currentdate.getHours();
            if(Number(aktora) < 10 ) {
                aktora = "0" + aktora;
            }
            let aktperc:string = currentdate.getMinutes();
            if(Number(aktperc) < 10 ) {
                aktperc = "0" + aktperc;
            }

            let aktmasodperc:string = currentdate.getSeconds();
            if(Number(aktmasodperc) < 10 ) {
                aktmasodperc = "0" + aktmasodperc;
            }

            let akttimestr: string = aktev + "-" + aktho + "-" + aktnap + " " + aktora + ":" + aktperc + ":" + aktmasodperc;

            let date1 : any = new Date(this.ido);
            let date2 : any = new Date(akttimestr);

            let diff : any = date2.getTime() - date1.getTime();

            let msec : any = diff;
            let hh : any = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            let mm : any = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;
            let ss : any = Math.floor(msec / 1000);
            msec -= ss * 1000;

            if(Number(hh) < 10 ) {
                hh = "0" + hh;
            }

            if(Number(mm) < 10 ) {
                mm = "0" + mm;
            }

            if(Number(ss) < 10 ) {
                ss = "0" + ss;
            }

            lRet = hh + ":" + mm + ":" + ss;

            return lRet;
          }
      },
      methods: {
        deltermek: function (): void {
            this.$emit("delete");
        },
        setnapi: function (): void {
            this.$emit("setnapikinalat");
        },
        select: function (): void {
            this.$emit("goto");
        },
        loadData: function(): void {
            // ...
        }
      }
  });

Vue.component("my-card", {
  template: `
            <div class="list-group">
                <div class="list-group-item list-group-item-action flex-column align-items-start <!--active--> ">
                    <div style="float:left; width: 5%;" v-show="!napi">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="1" v-model="checked" v-on:click="selectcheck">
                            <label class="form-check-label" for="defaultCheck1">
                                Jelöl
                            </label>
                        </div>
                    </div>
                    <div style="float:left; width: 80%;" v-on:click="select">
                        <!--<div class="d-flex flex-wrap" v-show="image">
                            <div class="p-1 v-show='image'"><img width='150' height='130' v-bind:src='genimageurl'></div>
                            <div class="p-1 v-show='image2'"><img width='150' height='130' v-bind:src='genimageurl2'></div>
                        </div>-->
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1" >{{ name }}</h5>
                            <small>#{{ id }}</small>
                        </div>
                        <div class="d-flex flex-wrap">
                            <div class="p-1" v-show="azon && !napi"><strong>Azonosító:</strong> {{ azon }}</div>
                            <div class="p-1" v-show="price && !napi"><strong>Ár:</strong> {{ price }} HUF / {{ mee }}</div>
                            <div class="p-1" v-show="napi"><strong>Felkerülés:</strong>  {{ felkerules }}</div>
                            <div class="p-1" v-show="napi"><strong>Gyártás:</strong> {{gyartas}}</div>
                            <div class="p-1" v-show="napi"><strong>Szavatossági idő:</strong> {{szavatossag}} óra</div>
                            <div class="p-1" v-show="mennyiseg"><strong>Menny.:</strong> {{mennyiseg}}  {{mee}}</div>
                            <div class="p-1" v-show="helyszin"><strong>Helyszín: </strong> 
                                <span v-show="helyszin=='GOD'">Gödöllő</span>
                                <span v-show="helyszin=='VER'">Veresegyház</span>
                            </div>
                            <div class="p-1" v-show="fogyasmenny"><strong>Fogyás:</strong> {{fogyasmenny}} {{mee}}</div>
                            <div class="p-1" v-show="tortakateg"><strong>Tortakategória:</strong> {{ tortakateg }}. kategória</div>
                            <div class="p-1" v-show="ntak && ntak!='---'"><strong>NTAK:</strong>  {{ntak}} </div>
                        </div>
                        <div v-if="!noplusminus && noplusminus!=1" class="d-flex flex-wrap" v-show='canchangemenny'>
                            <a href="#" class="btn btn-success" v-on:click="changemennyplus">
                                <i class="fas fa-plus"></i>
                            </a>
                            &nbsp;
                            <a href="#" class="btn btn-danger" v-on:click="changemennymin">
                                <i class="fas fa-minus"></i>
                            </a>
                        </div>
                    </div>
                    <div style="float:right; width: 15%; padding: 5px; text-align: right;" >
                        <!--<div class="p-2">
                            <button type="button" class="btn btn-warning" v-on:click="select"><i class="fas fa-pencil-alt"></i></button>
                        </div> -->
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <button v-if="deleteable" type="button" class="btn btn-danger" v-on:click="deltermek">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </div>
                            <!--<div class="col-md-4 mb-4" v-show="napi">
                                <button type="button" class="btn btn-default" v-on:click="setnapi"><i class="fas fa-utensils"></i></button>
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
    `,
    props: ["name", "price", "fogyasmenny", "mee", "id", "napi", "azon", "image" , "image2", "helyszin", "canchangemenny", "tortakateg", "noplusminus", "id_fix_hossz", "checked", "felkerules", "gyartas", "szavatossag", "mennyiseg", "ntak", "deleteable"],
    computed: {
        modurl: function(): string {
            let lRet: string = "urlapvue.html?id=" + this.id;
            return lRet;
        },
        gencardid: function(): string {
            let lRet: string = "r_" + this.id;
            return lRet;
        },
        genimageurl: function(): string {
            let lRet: string = "http://www.marikakonyhaja.hu/upload/friss/" + this.image;
            return lRet;
        },
        genimageurl2: function(): string {
            let lRet: string = "http://www.marikakonyhaja.hu/upload/friss/" + this.image2;
            return lRet;
        }
    },
    methods: {
        deltermek: function (): void {
            this.$emit("delete");
        },
        setnapi: function (): void {
            this.$emit("setnapikinalat");
        },
        selectcheck: function (): void {
            this.$emit("selectcheck");
        },
        select: function (): void {
            this.$emit("goto");
        },
        changemennyplus: function (): void {
            this.$emit("chmennyplusz");
        },
        changemennymin: function (): void {
            this.$emit("chmennymin");
        },
        loadData: function(): void {
            // ...
        }
    },
    components: {
        'barcode': VueBarcode
    }
});

Vue.component("my-cukraszlist", {
    template: `
              <div class="list-group">
                  <div class="list-group-item list-group-item-action flex-column align-items-start <!--active--> ">
                      <div style="float:left; width: 85%;" v-on:click="select">
                          <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1" >
                                <button type="button" class="btn btn-warning btn-sm" title="Módosítás" v-on:click="modify"><i class="fas fa-edit"></i></button>
                                <span v-show="tipus=='T'" style=" background-color:orange; color: white;"><i>EGYÉNI TORTARENDELÉS:</i> </span>
                                <span v-show="tipus=='W'" style=" background-color:green; color: white;"><i>WEBES MEGRENDELÉS:</i> </span>
                                <span v-show="tipus=='E'" style=" background-color:blue; color: white;"><i>ELŐRENDELÉS:</i> </span>
                                <span v-show="tipus=='H'" style=" background-color:grey; color: white;"><i>HELYBEN FOGYASZTÁS:</i> </span>
                                {{ partner_name }} (Tel: <span v-show="telefon">{{telefon}} </span>; Email: {{email}}) -
                                <!--<span v-show="name">{{name}} </span>                                -->
                              </h5>
                          </div>
                          <div class="d-flex flex-wrap">
                              <div class="p-1"><strong>ID:</strong> {{ id }}</div>
                              <div class="p-1" v-if="keres_datum"><strong>Felvétel:</strong> {{ keres_datum }}</div>                              
                              <div class="p-1" v-show="azon"><strong>Pultos:</strong> {{ azon }}</div>
                              <div class="p-1"><strong>Megrendelő:</strong> {{ partner_name }}</div>
                              <div class="p-1"><strong>Átvétel időpontja:</strong> {{ datum }} {{ido}}</div>                              
                              <div class="p-1" v-show="atvetelhelye == 'GOD'"><i class="fas fa-box"  style='color: blue'></i> &nbsp;<strong>Átvétel helye:</strong> Gödöllő </div>
                              <div class="p-1" v-show="atvetelhelye == 'VER'"><i class="fas fa-box"  style='color: blue'></i> &nbsp;<strong>Átvétel helye:</strong> Veresegyház </div> 
                              <div class="p-1" v-show="szallmod"><strong>Szállítás módja:</strong> {{szallmod}} </div>
                              <div class="p-1" v-show="kiszall == 1"><strong>KISZÁLLITÁS:</strong> {{kiszalltelepules}} {{kiszallcim}} </div> 
                              <div class="p-1" v-show="reszek && reszek.length>0"><strong>Ár:</strong> {{vegosszeg_reszekkel}} </div>
                              <div class="p-1" v-show="reszek && reszek.length>0"><i class='fas fa-euro-sign' style=' font-size: 2em; color:green'></i> <strong>Előleg:</strong> {{eloleg}} </div>
                              <div class="p-1" v-show="reszek && reszek.length>0"><strong>Még fizetendő:</strong> {{fizetendo_reszekkel}} Ft</div>
                          </div>                          
                          <div class="d-flex flex-wrap">
                              <div class="p-1" v-show="note"><p v-html="note"></p></div>
                              <div class="p-1" v-show="szallmod"><p v-html="szallmod"></p></div>
                          </div>                          
                      </div>
                      <div style="float:right; width: 15%; padding: 5px; text-align: right;" >
                          <div class="row">
                                <div class="p-2">
                                    <button type="button" class="btn btn-outline-primary" v-on:click="setlatta">
                                        Cukrász látta <i v-show="latta == 1" class="fas fa-check"></i>
                                    </button>                                    
                                </div>
                                <div class="p-2">
                                    <button type="button" class="btn btn-outline-success" v-on:click="kesz">
                                        Elkészült <i v-if="statusz == 1" class="fas fa-check"></i> 
                                    </button>
                                </div>
                                <div class="p-2">
                                    <button type="button" class="btn btn-outline-warning" v-on:click="setatveve">
                                        Vendég elvitte <i v-show="atveve == 1" class="fas fa-check"></i>
                                    </button>                                    
                                </div>

                                <div class="p-2">
                                    <button type="button" class="btn btn-danger" v-on:click="del">
                                      <i class="far fa-trash-alt"></i>
                                    </button>
                                </div>

                                <div class="p-2">
                                    <button class="btn btn-warning" v-on:click="blokk">
                                        <i class="far fa-money-bill-alt fa-lg"></i> Fizetés blokkal (csak nyomt.)
                                    </button>
                                </div>
                                <div class="p-2" v-show="tipus=='E'">
                                    <button class="btn btn-success" v-on:click="genegyszszamla">
                                        <i class="fas fa-outdent fa-lg"></i> Egysz. számla
                                    </button>
                                </div>

                               <div class="p-2" v-show="tipus=='T'">
                                    <button class="btn btn-success" v-on:click="genegyszszamlat">
                                        <i class="fas fa-outdent fa-lg"></i> Egysz. számla
                                    </button>
                                </div> 

                                <div class="p-2" v-show="tipus=='W'">
                                    <button class="btn btn-success" v-on:click="genegyszszamlaw">
                                        <i class="fas fa-outdent fa-lg"></i> Egysz. számla
                                    </button>
                                </div>
                 
                                <div class="p-2" v-show="ending==1">
                                    <b>VÉGLEGESÍTVE</b>
                                </div>

                          </div>
                      </div>
                  </div>
              </div>
      `,
      props: ["azon", "partner_name", "id", "datum", "atvetelhelye", "ido", "note", "name","statusz", "telefon", "szallmod", "tipus", "reszek", "keres_datum", "vegosszeg_reszekkel" , "fizetendo_reszekkel", "latta", "atveve", "eloleg", "ending", "kiszall", "kiszalltelepules", "kiszallcim", "email", "felhasznalt_bonus"],
      computed: {
          modurl: function(): string {
              let lRet: string = "urlapvue.html?id=" + this.id;
              return lRet;
          },
          gencardid: function(): string {
              let lRet: string = "r_" + this.id;
              return lRet;
          }
      },
      methods: {
        genegyszszamlaw: function (): void {
            this.$emit("genegyszszamlanyomw");
          },    
          genegyszszamlat: function (): void {
              this.$emit("genegyszszamlanyomt");
          },          
          genegyszszamla: function (): void {
              this.$emit("genegyszszamlanyom");
          },
          blokk: function (): void {
              this.$emit("blokknyom");
          },
          del: function (): void {
              this.$emit("delete");
          },
          setatveve: function (): void {
              this.$emit("setatveve");
          },      
          setlatta: function (): void {
              this.$emit("setlatta");
          },          
          kesz: function (): void {
              this.$emit("keszrejelent");
          },
          select: function (): void {
              this.$emit("goto");
          },
          modify: function (): void {
              this.$emit("modifyitem");
          },
          loadData: function(): void {
              // ...
          }
      }
  });

Vue.component("my-tortarendelesek", {
    template: `
              <div class="list-group">
                  <div class="list-group-item list-group-item-action flex-column align-items-start <!--active--> ">
                      <div style="float:left; width: 85%;" v-on:click="select">
                          <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1" >
                                {{ partner_name }} -
                                <span v-show="torta_neve">{{torta_neve}} </span>
                                <span v-show="keszlet_name">{{keszlet_name}} </span>
                              </h5>
                          </div>
                          <div class="d-flex flex-wrap">
                              <div class="p-1"><strong>ID:</strong> {{id}} </div>
                              <div class="p-1" v-if="keres_datum"><strong>Felvétel:</strong> {{ keres_datum }}</div>                              
                              <div class="p-1" v-show="azon"><strong>Pultos:</strong> {{ azon }}</div>
                              <div class="p-1"><strong>Megrendelő:</strong> {{ partner_name }}</div>
                              <div class="p-1"><strong>Telefonszám:</strong> {{ partner_tel }}</div>
                              <div class="p-1"><strong>Email:</strong> {{ partner_email }}</div>
                              <div class="p-1"><strong>Átvétel időpontja:</strong> {{ datum }} {{ido}}</div>

                              <div class="p-1" v-show="egyediar>0"><font style='color: white;background-color:red;'> &nbsp;EGYEDI&nbsp; </font></div>
                              <div class="p-1" v-show="reszek.length==0"><strong><u>Ár</u>:</strong> {{ price }} HUF</div>
                              <div class="p-1" v-show="reszek.length>0"><strong><u>Ár</u>:</strong> {{ vegosszeg_reszekkel }} HUF</div>

                              <div class="p-1"><strong><u>Előleg</u>:</strong> {{eloleg}} Ft </div>

                              <div class="p-1" v-show="reszek && reszek.length==0"><strong><u>Még fizetendő</u>:</strong> {{fizetendo}} Ft </div>
                              <div class="p-1" v-show="reszek && reszek.length>0"><strong><u>Még fizetendő</u>:</strong> {{fizetendo_reszekkel}} Ft </div>
                              
                              <div class="p-1" v-show="atvetelhelye == 'GOD'"><i class="fas fa-box" style='color: blue'></i> &nbsp; <strong>Átvétel helye:</strong> Gödöllő </div>
                              <div class="p-1" v-show="atvetelhelye == 'VER'"><i class="fas fa-box"  style='color: blue'></i> &nbsp; <strong>Átvétel helye:</strong> Veresegyház </div>    
                              <div class="p-1" v-show="kiszall == 1"><strong>KISZÁLLITÁS:</strong> {{kiszalltelepules}} {{kiszallcim}} </div>                          
                          </div>
                          <h3 v-show="reszek.length>0">Emeletek:</h3>
                          <div class="d-flex flex-wrap">
                                <div class="p-1" style="font-size: 1em; color: Tomato;" v-show="reszek.length > 0"><i class="fas fa-boxes"></i></div>
                                <div class="p-1" style="font-size: 1em; color: Orange;" v-show="reszek.length === 0"><i class="fas fa-square"></i></div>
                                <div class="p-1" v-show="torta_neve"><strong>Neve:</strong> {{torta_neve}} </div>
                                <div class="p-1" v-show="keszlet_name"><strong>Neve:</strong> {{keszlet_name}} </div>
                                <div class="p-1" v-show="torta_tipus == 'N'"><strong>Típusa:</strong> Normál </div>
                                <div class="p-1" v-show="torta_tipus == 'B'"><strong>Típusa:</strong> Burkolt </div>
                                <div class="p-1"><strong>Kategória:</strong> {{torta_kategoria}} </div>
                                <div class="p-1" v-show="torta_diszites"><strong>Díszítés:</strong> {{torta_diszites}} </div>
                                <div class="p-1"><strong>Szeletszám:</strong> {{szeletszam}} db </div>
                                <div class="p-1" v-show="reszek"><strong>Részösszeg:</strong> {{price}} Ft </div>
                                <div class="p-1" v-show="kiegeszitok"><strong>Kiegészítők:</strong> <span v-for="(kieg, index) in kiegeszitok"><font v-show="index > 0">, </font> {{kieg.Megnevezes}}: {{kieg.menny}}  db</span> </div>
                                <div class="p-1" v-show="megjegyzes"><i class="far fa-clipboard" style="color: red"></i> &nbsp;<strong>Megjegyzés:</strong> {{megjegyzes}} </div>
                          </div>
                          <div v-show="reszek">
                            <div class="d-flex flex-wrap" v-for="r in reszek" >
                                <div class="p-1" style="font-size: 1em; color: Tomato;"><i class="fas fa-boxes"></i></div>
                                <div class="p-1" v-show="r.torta_neve"><strong>Neve:</strong> {{r.torta_neve}} </div>
                                <div class="p-1" v-show="r.keszlet_name"><strong>Neve:</strong> {{r.keszlet_name}} </div>
                                <div class="p-1" v-show="r.torta_tipus == 'N'"><strong>Típusa:</strong> Normál </div>
                                <div class="p-1" v-show="r.torta_tipus == 'B'"><strong>Típusa:</strong> Burkolt </div>
                                <div class="p-1"><strong>Kategória:</strong> {{r.torta_kategoria}} </div>
                                <div class="p-1" v-show="r.torta_diszites"><strong>Díszítés:</strong> {{r.torta_diszites}} </div>
                                <div class="p-1"><strong>Szeletszám:</strong> {{r.szeletszam}} db </div>
                                <div class="p-1"><strong>Részösszeg:</strong> {{r.vegosszeg}} Ft </div>
                                <div class="p-1" v-show="r.kiegeszitok"><strong>Kiegészítők: </strong> <span v-for="(kiegr, index) in r.kiegeszitok"><font v-show="index > 0">, </font> {{kiegr.Megnevezes}}: {{kiegr.menny}} db</span> </div>                                
                                <div class="p-1" v-show="r.megjegyzes"><i class="far fa-clipboard" style="color: red"></i> &nbsp; <strong>Megjegyzés:</strong> {{r.megjegyzes}} </div>
                            </div>
                            <br>
                          </div>
                      </div>
                      <div style="float:right; width: 15%; padding: 5px; text-align: right;" >
                          <!--<div class="p-2">
                              <button type="button" class="btn btn-warning" v-on:click="select"><i class="fas fa-pencil-alt"></i></button>
                          </div> -->
                          <div class="row"> 
                                <div class="p-2">
                                    <button type="button" class="btn btn-primary"  v-on:click="newReszEgyseg()">Új emelet</button>
                                </div>
                                <div class="p-2" v-show="cukrasznak == 1">
                                    Cukrásznak átadva <i class="fas fa-arrow-right"></i>
                                </div>
                                <div class="p-2" v-show="cukrasznak != 1">
                                    <button class="btn btn-info" v-on:click="addc(p)">
                                        <i class="fas fa-birthday-cake"></i> 
                                    </button>
                                </div>

                                

                                <div class="p-2" v-show="latta == 0">
                                    Nem látta <i class="fas fa-eye-slash fa-lg" style='color: red'></i>
                                </div>
                                <div class="p-2" v-show="latta == 1">
                                    Cukrász látta <i class="fas fa-eye fa-lg" style='color: green'></i>
                                </div>
                                <div class="p-2" v-show="cukraszstatusz == 1">
                                        Elkészült <i v-if="cukraszstatusz == 1" class="fas fa-check"></i> 
                                </div>
                                <div class="p-2">
                                    <button type="button" class="btn btn-outline-warning" v-on:click="setatveve">
                                        Vendég elvitte <i v-show="atveve == 1" class="fas fa-check"></i>
                                    </button>                                    
                                </div>

                                <div class="p-2">
                                    <button type="button" class="btn btn-danger" v-on:click="del">
                                      <i class="far fa-trash-alt"></i>
                                    </button>
                                </div>
                                <div class="p-2">
                                    <button type="button" class="btn btn-info" v-on:click="doend">
                                      Véglegesítés  <i v-show="ending == 1" class="fas fa-check"></i>
                                    </button>
                                </div>
                                <!--<div class="p-2">
                                    <button type="button" class="btn btn-primary" v-on:click="nyom">
                                      <i class="fas fa-print"></i>
                                    </button>
                                </div>-->
                                <div class="p-2">
                                    <!--<button class="btn btn-primary" v-on:click="ajanlat" type="button">
                                        Ajánlat
                                    </button>                                   
                                    <button class="btn btn-success" v-on:click="szla" type="button">
                                        Számla
                                    </button>-->                                     
                                </div>

                          </div>
                      </div>
                  </div>
              </div>
      `,
      props: ["keres_datum","azon", "kiszall", "kiszalltelepules", "kiszallcim", "partner_name", "partner_tel", "price", "id", "datum", "atvetelhelye", "torta_tipus", "torta_kategoria", "torta_neve", "torta_diszites", "szeletszam", "forma", "keszlet_name", "ptr_id", "ido", "cukrasznak", "cukraszstatusz", "reszek", "kiegeszitok", "eloleg", "fizetendo", "megjegyzes", "vegosszeg_reszekkel","fizetendo_reszekkel", "egyediar", "latta", "atveve", "ending", "partner_email"],
      computed: {
          modurl: function(): string {
              let lRet: string = "urlapvue.html?id=" + this.id;
              return lRet;
          },
          gencardid: function(): string {
              let lRet: string = "r_" + this.id;
              return lRet;
          }
      },
      methods: {
          setatveve: function (): void {
              this.$emit("setatveve");
          },      
          addc: function (): void {
                this.$emit("addcukrasz");
          },
          doend: function (): void {
            this.$emit("doending");
          },
          del: function (): void {
              this.$emit("delete");
          },
          select: function (): void {
              this.$emit("goto");
          },
          nyom: function (): void {
            this.$emit("print");
          },
          ajanlat: function (): void {
            this.$emit("ajanlat");
          },
          szla: function (): void {
            this.$emit("szla");
          },
          loadData: function(): void {
              // ...
          },
          newReszEgyseg: function(): void {
              this.$emit("newresz");
          }
      }
  });

Vue.component("my-kodblocks", {
    template: `<div v-if='kod != 1 && kod !=31' class='flex-grid-item'><button style="height:100%; width:100%;" class="btn btn-primary" v-on:click='selKod'> {{ name }}</button></div>`,
    props: ["name", "kod"],
    methods: {
        selKod: function(): void {
            this.$emit("selkat");
        }
    }
});

Vue.component("my-blocks", {
    template: `<div class="flex-grid-item"><button style="height:100%; width:100%;" class="btn btn-xs" v-on:click="addDataItem">{{ name }}</button></div>`,
    props: ["name", "price"],
    methods: {
        addDataItem: function(): void {
            this.$emit("add");
        }
    }
});

Vue.component("my-blocks-tortarendeles", {
    template: `<div class="flex-grid-item2"><button style="height:100%; width:100%;" class="btn btn-xs" v-on:click="addDataItem">{{ name }} <br> <strong> {{price}} </strong> Ft</button></div>`,
    props: ["name", "price", "egyenitorta"],
    methods: {
        addDataItem: function(): void {
            this.$emit("add");
        }
    }
});

Vue.component("my-num", {
    template: `<div class="flex-grid-item" v-on:click="onClickedEvent">{{ num }}</div>`,
    props: ["num"],
    methods: {
        onClickedEvent: function(): void {
            this.$emit("onclicked");
        }
    }
});

Vue.component("my-tortarendeles-emelet", {
    template: `<div class="card">
                <h3 class="card-header">                        
                    Emeletek adatai <small>{{vegosszeg}} Ft</small>
                </h3>
                <div class="card-block">
                    <div class="col-md-12 col-md-offset-2"> 
                        <br>                                         
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Torta típusa:</label>
                            <div class="col-sm-8">
                                {{torta_tipus}}
                            </div>
                        </div>    
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Kategória:</label>
                            <div class="col-sm-10">
                                {{torta_kategoria}}
                            </div>
                        </div>                                                                                                            
                                                                             
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Torta neve:</label>
                            <div class="col-sm-10">
                                {{termek_name}} {{keszlet_name}}                                           
                            </div>
                        </div>                                                                                 
                        <div class="form-group row" v-if="torta_tipus == 'B'">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Díszítés:</label>
                            <div class="col-sm-10">
                                {{torta_diszites}}
                            </div>
                        </div>                                        
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Szeletek száma:</label>
                            <div class="col-sm-4">
                                {{szeletszam}}
                            </div>
                        </div>          
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Kiegészítők:</label>
                            <div class="col-sm-10">
                                <div class="d-flex flex-wrap">       
                                    <span v-for="kieg in kiegeszitok">{{kieg.Megnevezes}}: {{kieg.menny}} db</span>                                         
                                </div>
                            </div>
                        </div>   
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Forma leírása:</label>
                            <div class="col-sm-10">
                                {{forma}}
                            </div>
                        </div>          
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Megjegyzés:</label>
                            <div class="col-sm-10">
                                {{megjegyzes}}
                            </div>
                        </div>                                                                                                         
                    </div>                     
                </div>
            </div>`,
    props: ["termekek", "torta_tipus", "torta_kategoria", "product_id", "torta_neve", "termek_name", "keszlet_name", "torta_diszites", "szeletszam", "szeletar", "kiegeszitok", "forma", "megjegyzes", "vegosszeg"],
    methods: {
        setTipusN: function(): void {
            this.$emit("settipusN");
        },
        setTipusB: function(): void {
            this.$emit("settipusB");
        },
        addEgyseg: function(): void {
            this.$emit("add");
        }
    }
});

function callLoadTermekekFromFunctions(session_id: string): void {
    func.loadTermekekBase(session_id);
}

function sumTotalAmount(aCashoutlist: Array<FoodOutItem>, aCashoutlist2: Array<FoodOutItem>): number {
    let sum: number = 0;

    for (let index: number = 0; index < aCashoutlist.length; ++index) {
        sum += aCashoutlist[index].price * aCashoutlist[index].menny;
    }

    for (let index: number = 0; index < aCashoutlist2.length; ++index) {
        sum += aCashoutlist2[index].price * aCashoutlist2[index].menny;
    }
    
    return sum;
}

Vue.config.devtools = true;

/*var printapp: any = new Vue({
    el: "#printapp",
    data: {
        id: 0,
        ls_my_session: "",
        penztar: []
    },
    mounted(): void {
        var self:any = this;

        self.id = func.geturlparam("id");
        self.ls_my_session = localStorage.getItem("my_session");

        $.getJSON(func.dataURLPenztarViewConst  + self.id + "/" + self.ls_my_session, function (penztarData: RestBaseResponse): void {
            self.penztar = JSON.parse(penztarData.data);
            console.log(JSON.stringify(self.penztar));
        });
    }
});*/

var v3: any = new Vue({
    el: "#app3",
    data: {
        onlyWebshopArchivum: false,
        keresesCsakArchivban: false,
        napiForgalomListaCsoportosit: false,
        filterNTAKListaOnlyErrors: false,
        excel_columns: [],
        excel_data: [] as Array<NapiForgalom>,
        cntLoading: 0,
        isAlertVisible: false,
        logindata_session: "",
        penztar: [],
        penztarE: [],
        termekitem: Termek,
        addDataEMod: false,
        tortaformak: [],
        kapacitasok: [],
        termekek: [],
        kapcsoltTermekek: [] as Array<Termek>,
        afamertekek: [],
        termekek2: [],
        cukraszlista: [],
        tortarendelesek: [],
        normalTortaArak: [],
        burkoltTortaArak: [],
        tortakiegeszitok: [],
        tortakiegeszitok_seged_menny: [],
        refreshPenztarArray: [],
        totalAmount: 0,
        cntBlock: 0,
        cntPenztarOrderCnt:0,
        kategoriak: [], // raktárhoz való
        torta_kategoriak: [],
        ntak_fokategoriak: [],
        ntak_alkategoriak: [],        
        ntak_fizetesi_modok: [] as Array<NTAKFizetesiModHelper>,     
        ntak_mee: [] as Array<NTAKMennyisegiEgysegekHelper>,   
        isLoading: false,
        SelectedPenztarItem: [],
        SelectedPenztarItemForPay: new CashOut(),                
        SelectedPenztarItemForPayElolegMode: false,
        //SelectedPenztarItemForPayMods:  [] as Array<CashOutPay>,        
        TempCashOutPay: CashOutPay,
        ls_my_session: "",
        divleft: "divleft",
        divfull: "divfull",
        showModal: false,
        showModalKoret: false,
        showModalKoretForFriss: false,
        showModalOut: false,
        showModalNumPad: false,
        showModalTortaArazas: false,
        showModalNapiKinalat: false,
        showModalMegrendelesModositas: false,
        showModalNewPartner: false,
        showModalNapiMunka: false,
        showModalNapiListaCopy: false,
        showModalSpecNapi: false,
        showModalPercent: false,
        showModalPayData: false,
        copyFromDate: "",
        PercentValue: 0,
        modalHeaderTitle: "",
        numVisibleModule: 0,
        moduleTitle: "",
        isMainHeaderVisible: true,
        isMainMenuVisible: false,
        termekFilterStr: "",
        penztarFilterStr: "",
        termekFilterKateg: 0,
        cukraszOrderbySelect: "-",
        selOutType: "",
        totalCountIN: 0,
        totalCountOUT: 0,
        cashoutlist: [],
        cashoutlist2: [],
        koretek: [],
        selectedFoodOutItem: [],
        username: "",
        password: "",
        napiForgalomLista:  [] as Array<NapiForgalom>,
        archivMegrendelesekLista: [] as Array<ArchivMegrendeles>,
        NTAKLista: [] as Array<NTAKTranzakcio>,
        NTAKLogs:  [] as Array<NTAKTranzakcioLog>,
        napiForgalomBevetelOssz: 0,
        napiForgalomElolegOssz: 0,
        napiLista: [],
        egyszerusitettSzamlaLista: [],        
        egyszerusitettSzamlaListaTotalCnt: 0,
        frissForKitchenLista: [],
        arrayRendelesekOsszesitve: [],
        arrayRendelesekOsszesitveHeti: [],
        listNapiMunka: [],
        isFoodOutHeader: true,
        penztarMode: "",
        giveOutObj: [],
        tortaRendelesObj: TortaRendeles,        
        tortaRendelesReszek: [],
        wantGotoEmelet: 0,
        partnerSearchTxt: "",
        partnerSearchTxtTR: "",
        visiblePartnerKedvezmenyCimke: false,
        visiblePartnerKedvezmenyCimkeE: false,
        visiblekapacitasCimke: true,
        NumPadNumberTxt: "",
        KalkPrice: 0,
        NumPadHandleSection: "",
        numFrissSubModul: 0,
        FrissKatList: [],
        FrissOrderObj: FrissOrder,
        SelectedFrissTermek: FoodOutItem,
        SelectedFrissTermekKategoria: TermekKategoria,
        delayNum: 500,
        FrissHeadTitle: "",
        FrissHeadSubTitle: "",
        kiegeszitoFilter: "",
        searchTermekFilter: "",
        searchTermekFilterVonalkod: "",
        FrissHeadBackSectionNumber: 0,
        frissensultek: [],
        FrissNewSorszam: 0,
        FrissNewKeresDatum: "",
        files: [],
        versionX: "[AIV]{version}[/AIV]",
        versionNote: "Változások 2026.03.25 (L):  Pénztár visszaigazoló ablak gördíthető",
        WindowAktPosition: 0,
        SelectedFrissOrderType: "",
        strFilterEgyszerusitettSzamla: "",
        filterNapiMunkaDateFrom: "",
        filterNapiMunkaDateTo: "",
        filterSpecNapiDateFrom: "",
        filterNTAKListDateFrom: "",
        filterNTAKListDateTo: "",
        filterArchivListDateFrom: "",
        filterArchivListDateTo: "",
        filterSpecNapiDateTo: "",
        filterSpecNapiDateType: "FELKD",
        filterSpecNapiHelyszin: "-",
        filterPenztarFilterHelyszin: "-",
        filterRendOsszDateFrom: "",
        filterRendOsszDateTo: "",
        strFilterRendOsszName: "",
        strFilterRendOsszHetiName: "",
        strFilterNapiMunka: "",
        strFilterSpecNapi: "",
        cukraszDateFrom: "",
        cukraszDateTo: "",
        penztarFilterDate: "",
        cukraszListParVeres: 0,
        cukraszListParGod: 0,
        cukraszListParNormal: 0,
        cukraszListParBurkolt: 0,
        cukraszListParI: 0,
        cukraszListParII: 0,
        cukraszListParIII: 0,
        cukraszListParIV: 0,
        cukraszListParV: 0,
        cukraszListParVI: 0,
        cukraszListParSzerk: 0,
        cukraszListParFoly: 0,
        cukraszListParKesz: 0,
        isShowPenztarTetelek: true,
        isShowPenztarWebes: false,
        isCukraszDatumFelvetel: false, 
        isOnlyKiszallitas: false,
        ElorendelesObj: Elorendeles,         
        NewPartnerObj: Partner,
        tortaRendelesEmeletObj: TortaRendeles,
        tempTortarendeles: TortaRendeles,
        elorendelesBack: 0,
        NapiMunkaObj: Napimunka,
        SpecNapiObj: SpecNapi,
        MegrendelesModositasObj: MegrendelesModositas,
        webshopSzallAtveteliModokList: [] as Array<WebshopSzallAtveteliMod>,
        orakVeres: ['07','08','09','10','11', '12', '13', '14', '15', '16', '17', '18'],
        orakGodollo: ['09','10','11', '12', '13', '14', '15', '16', '17', '18'],
        orak:[],
        limiter: 0,
        rendOsszHetiFull_RendelesKeltere: "NEM",
        rendOsszHetiFull: true,
        kapacitasInfo: "",
        kapacitasDiff: 0,
        appointment: {
            appointmet_date: "" //new Date()
        },
        selectedTermeklist: [] as Array<Termek>,
        userObject: LoggedUser,        
        selectedSpecNapiTermeklist: [] as Array<SpecNapi>,
        NTAKUrlNapiZaras: "",
        disabledDates: {
            to: new Date(Date.now() - 8640000) 
            //days: [6, 0],
        },
        NTAKListView: 1,
        buttonToCashoutDisabled: false
    },
    // tslint:disable-next-line:typedef
    mounted() {
        var self: any = this;

        if(!navigator.onLine) { // true|false
            console.log("nincs internet!");
        }

        
        /* login magyarázati pont:
            az oldal betöltésekor a localstorage session_id ürítése
            csak éles üzemmódban kell, tesztelés során kivehető, hogy ne kelljen mindig újra és újra belépni
        */
         localStorage.setItem("my_session", "");
         self.ls_my_session = "";

         // éles üzemmódban ezt is ki kell venni
         // self.username = "sulyi2@sulyancukraszda.hu"; // tesztelésre
         // self.password = "abcd1234";

        /* login magyarázati pont:
            1. ha a mobil app küldi az Url-ben session_id-t (már a xamarin page-on megtörtént a login),
            akkor azt a session_id-t használjuk, ezt állítom be a local storage-ba
            ilyenkor gyakorlatilag biztosan mobil app működteti a webapp-ot
            2. ha nem kapunk session-t, akkor be kell jelentkeztetni
        */

        let url_session_id: string =  func.geturlparam("session_id");
        if(url_session_id.length > 0) {
            localStorage.setItem("my_session", url_session_id);
            self.loadPenztar();
        } else {
            self.changeModul(4);
        }

        let lXSessionStr: string = String($( "#session_id" ).val());

        self.cntLoading += 1000;
        self.selOutType = "IN";
        self.giveOutObj = new GiveOut();
        self.tortaRendelesObj = new TortaRendeles();
        self.tortaRendelesEmeletObj = new TortaRendeles();
        self.ElorendelesObj = new Elorendeles();        

        //self.loadTortaArazas();
        self.loadTortaKategoriak();
        self.loadNTAKKategoriak();                

    },
    methods: {
        loadKapcsoltTermekek: function(): void {
            let self: any = this;            
            let lURL: string = "";

            lURL = func.dataURLKapcsoltTermekListConst + "/" + self.logindata_session;

            self.isLoading = true;

            $.getJSON(lURL, function (retTermekek: RestBaseResponse): void {
                let termekekTemp: Array<Termek> = JSON.parse(retTermekek.data);
                self.kapcsoltTermekek = termekekTemp;                
                self.isLoading = false;
            });              
        },
        copyValue: function(postfix, fromInputValue) {
            var self: any = this;
           
            // Get all input elements with id ending with the given postfix
            var inputId = postfix + fromInputValue;
            var value = $("#" + inputId).val();
            
            if(self.selectedSpecNapiTermeklist.length > 1){
                for (let i = 1; i < self.selectedSpecNapiTermeklist.length; i++) {
                    if(postfix === "temp-") {
                        self.selectedSpecNapiTermeklist[i].homerseklet = value;
                    }else if(postfix === "start-") {
                        self.selectedSpecNapiTermeklist[i].fagylaltarusitas_kezdete = value;    
                    } else if(postfix === "end-") {
                        self.selectedSpecNapiTermeklist[i].fagylaltarusitas_vege = value;    
                    }
                }
            }

        },    
        loadUZarasNTAKTranzakciokLista: function(): void {
            var self: any = this;

            let napTol = Moment(self.filterNTAKListDateFrom).format("YYYY-MM-DD");
            let napIg = Moment(self.filterNTAKListDateTo).format("YYYY-MM-DD");

            let lUrl = func.dataURLNTAKZarasTranzakcioListConst;

            $.getJSON(lUrl  + "/" + napTol + "/" + napIg + "/" + self.logindata_session, function (retData: RestBaseResponse): void {
                var tempObj = JSON.parse(retData.data);               
                self.NTAKLista = tempObj;
                self.isLoading = false;
            });    

        },        
        change_NTAKListView: function (aNum: number = 1){
            var self: any = this;
            self.NTAKLista = [] as Array<NTAKTranzakcio>;
            self.NTAKListView = aNum;            
        },        
        selectMaganszemely: function(val: number): void {
            let self: any = this;
            if(self.giveOutObj){
                self.giveOutObj.adoszam = "";
            }
        },
        isNumber: function(evt: any): any {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;

            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 45) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        newTortaEgyseg: function(): void {
            let self: any = this;
        },
        openNewResz: function(parentTortaRendelesObj: TortaRendeles): void {
            let self: any = this;

            self.kiegeszitoFilter = ""
            
            self.tempTortarendeles = new TortaRendeles();
            self.tempTortarendeles = parentTortaRendelesObj;

            self.tortaRendelesEmeletObj = new TortaRendeles();
            self.tortaRendelesEmeletObj.kapcs_ptr_id = parentTortaRendelesObj.ptr_id;
            self.gettortaKiegeszitok();

            self.changeModul(12);
        },
        customFormatter(date: any): any {
            let mom: any = Moment(date).format("YYYY-MM-DD");
            return mom;
        },
        scrollDivToTop: function(divId: string): void {
            let self: any = this;
            let divToScroll: any = document.getElementById(divId);
            if (divToScroll) {
                divToScroll.scrollTop = 0;
            }
            alert("scrollDivToTop");
        },
        scrollToTop: function(): void {
            let self: any = this;

            self.startanimations("W1_", "TOP");

            self.WindowAktPosition = 0;
            
            $("html, body").animate({ scrollTop: 0 }, 600);
        },
        scrollToDown: function(): void {
            let self: any = this;
            // bottom of page
            // $("html, body").animate({scrollTop:$(document).height()}, "slow");

            self.startanimations("W1_", "DOWN");

            let magassag: any = $(document).height();
            self.WindowAktPosition = self.WindowAktPosition + (magassag / 3);
            $("html, body").animate({scrollTop: self.WindowAktPosition }, "slow");

        },
        printDiv: function(): void {
            let divToPrint: any = document.getElementById("DivIdToPrint");
            let newWin: any = window.open("", "win", "height=200,width=150");
            newWin.document.open();
            // newWin.document.write("<html><body onload='window.print()'>"+divToPrint.innerHTML+"</body></html>");
            newWin.document.write("<html><body>"+divToPrint.innerHTML+"</body></html>");
            // newWin.document.close();
            // setTimeout(function():void { newWin.close(); },10);
        },
        sumFrissOrderAmount: function(): void {
            let self: any = this;

            self.FrissOrderObj.totalAmount = 0;

            for(let i: number=0; i <= self.FrissOrderObj.list.length-1; i++) {
                self.FrissOrderObj.totalAmount += Number(self.FrissOrderObj.list[i].price);
            }

        },
        changeAdagFrissSelected: function(aEgeszFel: string): void {
            let self: any = this;

            self.SelectedFrissTermek.adag = aEgeszFel;
            if(aEgeszFel === "E") {
                self.SelectedFrissTermek.price = self.SelectedFrissTermek.originPrice * self.SelectedFrissTermek.menny;

                if(self.SelectedFrissTermek.plusKoret[0] && self.SelectedFrissTermek.plusKoret[0].price > 0) {
                    self.SelectedFrissTermek.price =  Number(self.SelectedFrissTermek.price) + Number(self.SelectedFrissTermek.plusKoret[0].price);
                }

            } else if(aEgeszFel === "F") {
                self.SelectedFrissTermek.price = Math.round((self.SelectedFrissTermek.originPrice / 100 * 70) / 10) * 10 * self.SelectedFrissTermek.menny;

                if(self.SelectedFrissTermek.plusKoret[0] && self.SelectedFrissTermek.plusKoret[0].originPrice > 0) {
                    var tmpar: number = Math.round((self.SelectedFrissTermek.plusKoret[0].originPrice / 100 * 70) / 10) * 10;
                    self.SelectedFrissTermek.price =  Number(self.SelectedFrissTermek.price) + tmpar;
                }

            }

            self.sumFrissOrderAmount();
        },
        changeMennyFrissSelected: function(aOutItem: FoodOutItem, aPlusMinus: string): void {
            let self: any = this;

            if(aPlusMinus === "+") {
                aOutItem.menny++;
            } else if(aPlusMinus === "-" ) {
                if(aOutItem.menny > 1) {
                    aOutItem.menny--;
                }
            }

            if(aOutItem.adag === "E") {
                aOutItem.price = aOutItem.originPrice;

                if(aOutItem.plusKoret[0] && aOutItem.plusKoret[0].price > 0) {
                    aOutItem.price =  Number(aOutItem.price) + Number(aOutItem.plusKoret[0].price);
                }

                aOutItem.price = aOutItem.price * aOutItem.menny;

            } else if(aOutItem.adag === "F") {
                aOutItem.price = Math.round((aOutItem.originPrice / 100 * 70) / 10) * 10;

                if(aOutItem.plusKoret[0] && aOutItem.plusKoret[0].originPrice > 0) {
                    var tmpar: number = Math.round((aOutItem.plusKoret[0].originPrice / 100 * 70) / 10) * 10;
                    aOutItem.price =  Number(aOutItem.price) + tmpar;
                }

                aOutItem.price = aOutItem.price * aOutItem.menny;

            }

            self.sumFrissOrderAmount();
        },
        deleteFromFrissList: function(aId: number): void {
            let self: any = this;

            if(aId > 0) {
                var saveRecArray: any = [];
                saveRecArray.push({id: aId, statusz: 1});

                $.post(
                    func.dataURLPenztarModConst  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.loadFrissLista();
                    },
                "json");
            }
        },
        deleteFromFrissOrder: function(aFrissOrderedItem: FoodOutItem): void {
            let self: any = this;

            self.FrissOrderObj.list.splice(self.FrissOrderObj.list.indexOf(aFrissOrderedItem), 1);

            self.sumFrissOrderAmount();
        },
        saveFrissOrder: function(): void {
            let self: any = this;

            let lUrl: string = func.dataURLPenztarPostConst + "/" + self.logindata_session;

            self.isLoading = true;

            $.ajax({
                type: "POST",
                url: func.dataURLPenztarPostConst,
                crossDomain: true,
                data:
                {
                    "frissorder": "F",
                    "datastream": JSON.stringify(self.FrissOrderObj.list),
                    "session_id": self.logindata_session
                },
                /*                        headers: {
                                                        "Access-Control-Allow-Headers": 'Origin',
                                                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                                                        'Access-Control-Allow-Credentials': true,
                                                        'Access-Control-Allow-Origin': '*' // my domain where I make the ajax request.
                                                    },                         */
                // contentType: "application/json",
                success: function (data:any, status:any, jqXHR:any): void {
                    self.frissensultek = [];
                    for(let i:number=0; i<self.FrissOrderObj.list.length; i++) {
                        self.frissensultek.push({id: self.FrissOrderObj.list[0].id,
                                                 name: self.FrissOrderObj.list[i].mealName,
                                                 menny: self.FrissOrderObj.list[i].menny });
                    }

                    self.isLoading = false;

                    self.FrissNewSorszam = data.specdata2;
                    self.FrissNewKeresDatum = data.specdata3;

                    let printUrl: string = "printFriss.html?id=" + data.specdata;

                    let printWindow: any = window.open(printUrl, "win", "height=200,width=150");
                    printWindow.focus();

                    setTimeout(function (): void {
                        printWindow.close();
                    }, 4000);

                    setTimeout(function(): void {
                        self.changeFrissSubModul(6);
                    }, 1000);

                    setTimeout(function(): void {
                        self.changeFrissSubModul(0);
                    }, 7000);

                    self.FrissOrderObj = new FrissOrder("");
                    self.sumFrissOrderAmount();
                },
                beforeSend: function (xhr:any): void {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa("aaa" + ":" + "a"));
                    self.isLoading = false;
                },
                error: function (jqXHR:any, status:any): void {
                    alert("fail" + status);
                    self.isLoading = false;
                }
            });


            /*self.printDiv();
            setTimeout(function(): void {
                self.changeFrissSubModul(6);
            }, 1000);


            setTimeout(function(): void {
                self.changeFrissSubModul(0);
            }, 7000);

            self.FrissOrderObj = new FrissOrder("");
            self.sumFrissOrderAmount();*/



            /*let printUrl: string = "printFriss.html?id=" + penztaritem.id;

            let printWindow: any = window.open(printUrl, "win", "height=200,width=150");
            printWindow.focus();

            setTimeout(function (): void {
                printWindow.close();
            }, 4000);
            */


        },
        openFrissBagForm: function(): void {
            let self: any = this;
            self.startanimations("W1_", "KOSAR");

            setTimeout(function(): void {
                self.changeFrissSubModul(4);
            }, self.delayNum);

        },
        selectDir: function(aMuv: string): void {
            let self: any = this;
            self.startanimations("M1_", aMuv);

            setTimeout(function(): void {
                if(aMuv === "SEL") {
                    self.changeFrissSubModul(1);
                } else if(aMuv === "ORDERANDPRINT") {
                    self.saveFrissOrder();
                }
            }, self.delayNum);

        },
        openFrissKategoriaForm: function(aHelybenVagyElvitelre: string): void {
            let self: any = this;

            self.SelectedFrissOrderType = aHelybenVagyElvitelre;
            self.startanimations("W1_", aHelybenVagyElvitelre);

            setTimeout(function(): void {
                self.FrissOrderObj = new FrissOrder(aHelybenVagyElvitelre);
                self.changeFrissSubModul(1);
            }, self.delayNum);
        },
        startSectionAnimations: function(): void {

            let animationname: string = "animated zoomIn";
            let animationend: string = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationEnd animationend";

            $("#TestDiv").addClass(animationname).one(animationend,
                function(): void {
                    $(this).removeClass(animationname);
            });


        },
        startanimations: function(aPrefix: string, aItemNum: number): void {
            var clickedDivIdStr: string = "#" + aPrefix + aItemNum;

            let animationname: string = "animated pulse";
            let animationend: string = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationEnd animationend";

            $(clickedDivIdStr).addClass(animationname).one(animationend,
                function(): void {
                    $(this).removeClass(animationname);
            });
        },
        openKoretToFrissDialog: function(): void {
            let self: any = this;

            self.showModalKoretForFriss = true;
        },
        addKoretToFriss: function(koret: Termek): void {
            let self: any = this;

            self.startanimations("K0_", koret.id);

            setTimeout(function(): void {
                self.SelectedFrissTermek.mealName += ", köret: " + koret.name.toLowerCase();
                self.SelectedFrissTermek.plusKoret.push(koret);
                self.SelectedFrissTermek.plusKoret[0].originPrice = koret.price;
                self.SelectedFrissTermek.price = Number(self.SelectedFrissTermek.price) + Number(koret.price);
                self.showModalKoretForFriss = false;
            }, self.delayNum);

            self.sumFrissOrderAmount();

        },
        changeFrissSubModul: function(num: number): void {
            let self: any = this;

            self.numFrissSubModul = num;
            window.scrollTo(0, 0);

            self.WindowAktPosition = 0;

            switch(num) {
                case 0:
                    self.FrissHeadTitle = "Rendelje meg frissensültjét előre!";
                    self.FrissHeadSubTitle = "Kérem válassza ki hogy helyben fogyasztást szeretne-e, vagy elvinné-e a frissensülteket!";
                    break;
                case 1:
                    self.FrissHeadTitle = "Kategóriák";
                    self.FrissHeadSubTitle = "Kérem válasszon kategóriát!";
                    self.FrissHeadBackSectionNumber = 0;
                    break;
                case 2:
                    self.FrissHeadTitle = self.SelectedFrissTermekKategoria.name;
                    self.FrissHeadSubTitle = "Kérem válasszon ételt!";
                    self.FrissHeadBackSectionNumber = 1;
                    break;
                case 3:
                    self.FrissHeadTitle = "Frissensült összeállítása";
                    self.FrissHeadSubTitle = "Kérem állítsa össze az ételt!";
                    self.FrissHeadBackSectionNumber = 2;
                    break;
                case 4:
                    self.FrissHeadTitle = "Kosár tartalma";
                    self.FrissHeadSubTitle = "A kiválasztott ételek megrendelése.";
                    self.FrissHeadBackSectionNumber = 1;
                    break;
                case 5:
                    self.FrissHeadTitle = "Étel kiválasztása sikeres!";
                    self.FrissHeadSubTitle = "Kérem válassza ki mit szeretne tenni!";
                    self.FrissHeadBackSectionNumber = 4;
                    break;
                case 6:
                    self.FrissHeadTitle = "Nyomtatás folyamatban!";
                    self.FrissHeadSubTitle = "Kérem várjon, amíg a nyomtatás befejeződik!";
                    self.FrissHeadBackSectionNumber = 6;
                    break;
            }

        },
        openFrissOrderAddForm: function(aTermek: Termek): void {
            let self: any = this;

            self.SelectedFrissTermek = new FoodOutItem(self.FrissOrderObj.typeDef,
                                                       aTermek.id,
                                                       aTermek.name,
                                                       aTermek.price,
                                                       aTermek.price,
                                                       1,
                                                       "E",
                                                       aTermek.isPortion,
                                                       aTermek.isKorettel,
                                                       aTermek.kep);

            let lURL:string = func.dataURLKoretConst + "/Kategoria=" + "3" + "/" + self.logindata_session;

            self.isLoading = true;
            $.getJSON(lURL, function (retKatKor: RestBaseResponse):void {
                self.koretek = JSON.parse(retKatKor.data);
                self.isLoading = false;
            });

            self.startanimations("S1_", aTermek.id);

            setTimeout(function(): void {
                self.changeFrissSubModul(3);
            }, self.delayNum);

        },
        emptyFrissOrder: function(item: FoodOutItem): void {
            item.plusKoret = [];
            item.adag = "E";
            item.price = item.originPrice;
            item.menny = 1;
            item.mealName = item.name;
        },
        addFrissOrder: function(item: FoodOutItem): void {
            let self: any = this;

            self.FrissOrderObj.list.push(item);
            self.sumFrissOrderAmount();

            self.changeFrissSubModul(5);
        },
        openFrissTermekekForm: function(aTermekKategoriaItem: TermekKategoria, aId: number): void {
            let self: any = this;

            self.SelectedFrissTermekKategoria = aTermekKategoriaItem;
            self.selkategoriaWithKod(aTermekKategoriaItem.kod);
            self.startanimations("S0_", aId);

            setTimeout(function(): void {
                self.changeFrissSubModul(2);
            }, self.delayNum);

        },
        openFrissOrderForm: function(): void {
            let self: any = this;

            self.changeFrissSubModul(0);
            self.FrissOrderObj = new FrissOrder("");
            self.isLoading = true;

            $.getJSON(func.dataURLKategoriakF + "/Friss/" + self.logindata_session, function (retKat: RestBaseResponse): void {
                self.FrissKatList = JSON.parse(retKat.data) as TermekKategoria;
                self.isLoading = false;
            });
        },
        emptyCukraszListParam: function(par: string): void {
            let self: any = this;

            self.emptyCukraszListAtvParam();
            self.emptyCukraszListStatParam();
            self.emptyCukraszListDatumParam();
            self.emptyCukraszListTipusParam();
            self.emptyCukraszListKategoriaParam();
        },
        emptyCukraszListKategoriaParam: function(par: string): void {
            let self: any = this;

            self.cukraszListParI = 0;
            self.cukraszListParII = 0;
            self.cukraszListParIII = 0;
            self.cukraszListParIV = 0;
            self.cukraszListParV = 0;
            self.cukraszListParVI = 0;
        },              
        emptyCukraszListTipusParam: function(par: string): void {
            let self: any = this;

            self.cukraszListParNormal = 0;
            self.cukraszListParBurkolt = 0;
        },        
        emptyCukraszListAtvParam: function(par: string): void {
            let self: any = this;

            self.cukraszListParVeres = 0;
            self.cukraszListParGod = 0;
        },        
        emptyCukraszListStatParam: function(par: string): void {
            let self: any = this;

            self.cukraszListParSzerk = 0;
            self.cukraszListParFoly = 0;
            self.cukraszListParKesz = 0;

        },
        emptyCukraszListDatumParam: function(par: string): void {
            let self: any = this;

            self.cukraszDateFrom = '';
            self.cukraszDateTo = '';
        },        
        setCukraszListParam: function(par: string): void {
            let self: any = this;

            if(par === "Ver"){
                self.emptyCukraszListAtvParam();
                self.cukraszListParVeres = 1;
            }else if(par === "God"){            
                self.emptyCukraszListAtvParam();    
                self.cukraszListParGod = 1;
            }else if(par === "Szerk"){        
                self.emptyCukraszListStatParam();        
                self.cukraszListParSzerk = 1;
            }else if(par === "Foly"){        
                self.emptyCukraszListStatParam();        
                self.cukraszListParFoly = 1;
            }else if(par === "Kesz"){                                
                self.emptyCukraszListStatParam();
                self.cukraszListParKesz = 1;           
            }else if(par === "Normal"){
                self.emptyCukraszListTipusParam();
                self.cukraszListParNormal = 1;                       
            }else if(par === "Burkolt"){                                
                self.emptyCukraszListTipusParam();
                self.cukraszListParBurkolt = 1;           
            }else if(par === "I"){                                
                self.emptyCukraszListKategoriaParam();
                self.cukraszListParI = 1;           
            }else if(par === "II"){                                
                self.emptyCukraszListKategoriaParam();
                self.cukraszListParII = 1;           
            }else if(par === "III"){                                
                self.emptyCukraszListKategoriaParam();
                self.cukraszListParIII = 1;           
            }else if(par === "IV"){                                
                self.emptyCukraszListKategoriaParam();
                self.cukraszListParIV = 1;           
            }else if(par === "V"){                                
                self.emptyCukraszListKategoriaParam();
                self.cukraszListParV = 1;           
            }else if(par === "VI"){                                
                self.emptyCukraszListKategoriaParam();
                self.cukraszListParVI = 1;           
            }                            
            
        },     
        setCukraszListFilter: function(): string {
            let self: any = this;
            let lUrlParam: string = "";

            if(self.cukraszListParVeres == 1){
                lUrlParam = "atvhely=Ver";
            }else if(self.cukraszListParGod == 1){
                lUrlParam = "atvhely=God";
            }

            if(self.cukraszListParNormal == 1){
                lUrlParam = "torta_tipus=N";
            }else if(self.cukraszListParBurkolt == 1){
                lUrlParam = "torta_tipus=B";
            }       

            if(self.cukraszListParI == 1){
                lUrlParam = "torta_kategoria=I";
            }else if(self.cukraszListParII == 1){
                lUrlParam = "torta_kategoria=II";
            }else if(self.cukraszListParIII == 1){
                lUrlParam = "torta_kategoria=III";
            }else if(self.cukraszListParIV == 1){
                lUrlParam = "torta_kategoria=IV";
            }else if(self.cukraszListParV == 1){
                lUrlParam = "torta_kategoria=V";
            }else if(self.cukraszListParVI == 1){
                lUrlParam = "torta_kategoria=VI";
            }    

            if(self.cukraszListParSzerk == 1){
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "statusz=szerk";
            }
            else if(self.cukraszListParFoly == 1){
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "statusz=foly";
            }else if(self.cukraszListParKesz == 1){
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "statusz=kesz";
            }
            
                        
            if(self.cukraszDateFrom){
                let mom: any = Moment(self.cukraszDateFrom).format("YYYY-MM-DD");
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "from=" + mom;                
            }
            if(self.cukraszDateTo){
                let mom: any = Moment(self.cukraszDateTo).format("YYYY-MM-DD");
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "to=" + mom;
            }            
            if(self.termekFilterStr){
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "joker=" + self.termekFilterStr;
            }

            if(self.isCukraszDatumFelvetel){
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "felvetelszerint=1";
            }

            if(self.isOnlyKiszallitas){
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                lUrlParam = lUrlParam + "csakkiszallitas=1";
            }

            if(self.cukraszOrderbySelect){
                if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }   
                lUrlParam = lUrlParam + "orderby=" + self.cukraszOrderbySelect;
            }

            if(lUrlParam.length > 0) {
                lUrlParam = "?" + lUrlParam;
            }

            return lUrlParam;
            
        },
        getWebshopSzallAtveteliModok: function(): void {
            let self: any = this;

            let lUrl: string = func.dataURLWebshopSzallAtveteliModokConst + "/" + self.logindata_session;
            self.isLoading = true;

            $.getJSON(lUrl, function (retLista: RestBaseResponse): void {
                self.webshopSzallAtveteliModokList = JSON.parse(retLista.data) as Array<WebshopSzallAtveteliMod>;
                self.isLoading = false;
            });    
        },
        getIrszamNev: function(funcMode: string): void {
            let self: any = this;

            let lUrlParam: string = "";
            let searchParam: string = "";                        

            if(funcMode == 'NewPartner'){
                searchParam = self.NewPartnerObj.Irszam;
            }else if(funcMode == 'tortaRendeles'){
                searchParam = self.tortaRendelesObj.partirsz;
            }else if(funcMode == 'GiveOut'){
                searchParam = self.giveOutObj.irszam;
            }


            if(searchParam && searchParam.length == 4){
                lUrlParam = "?search=" + searchParam;
                let lUrl: string = func.dataURLIrszListConst + "/" + self.logindata_session + lUrlParam;
                self.isLoading = true;

                $.getJSON(lUrl, function (retLista: RestBaseResponse): void {
                    let ret: Array<Irsz> = JSON.parse(retLista.data) as Array<Irsz>;
                    if(ret[0]){
                        if(funcMode == 'NewPartner'){
                            self.NewPartnerObj.Varos = ret[0].nev;
                        }else if(funcMode == 'tortaRendeles'){
                            self.tortaRendelesObj.partcity = ret[0].nev;
                        }else if(funcMode == 'GiveOut'){
                            self.giveOutObj.city = ret[0].nev;
                        }
                    }
                    self.isLoading = false;
                });                
            }

        },
        rendOsszHetiFullChange: function(pValue: boolean, dDatumViszonyitasRendelesKeltere: string = "NEM"): void {
            let self: any = this;

            self.rendOsszHetiFull = pValue;
            self.rendOsszHetiFull_RendelesKeltere = dDatumViszonyitasRendelesKeltere;

            self.loadRendelesekOsszesitveHeti(self.rendOsszHetiFull, dDatumViszonyitasRendelesKeltere);
        },
        printRendelesekOsszesitveHeti: function(): void {
            let self: any = this;
            
            if(self.arrayRendelesekOsszesitveHeti){
                let mywindow: any = window.open('', 'PRINT', 'height=400,width=600');
                let lUrlParam: string = "";

                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;

                lUrlParam = "Intervallum: " + Moment(self.filterRendOsszDateFrom).format("YYYY-MM-DD");


                mywindow.document.write('<html><head><title>Heti rendelések nyomtatása</title>');
                mywindow.document.write('</head><body >');

                if(self.rendOsszHetiFull){
                    mywindow.document.write('<h1>Heti rendelések nyomtatása</h1>');
                }else{
                    mywindow.document.write('<h1>Csak webáruházban megrendelt kiszállításos rendelések nyomtatása</h1>');
                }

                mywindow.document.write('Lekérdezési paraméterek: ' + lUrlParam);
                mywindow.document.write('<br>Lista készítése: ' +  dateTime );

                let sorszam: number = 0;
                let fontbold: string = "";

                mywindow.document.write('<hr>');

                mywindow.document.write('<table width=\'100%\' cellspacing=\'1\' cellpadding=\'1\'>');

                for(let i=0; i<self.arrayRendelesekOsszesitveHeti.length; i++){
                    
                    mywindow.document.write('<tr class=\'border_bottom\'>');          

                        if(i==0){
                            fontbold = "font-weight: bold;";
                            mywindow.document.write('<th></th>'); 
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4; ' + fontbold + ' ">&nbsp; '+ self.arrayRendelesekOsszesitveHeti[i].name + '</td>');  
                        }else{
                            fontbold = "";
                            mywindow.document.write('<th>'+ sorszam +'.</th>'); 
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;">&nbsp; '+ self.arrayRendelesekOsszesitveHeti[i].name + '</td>');  
                        }

                        if(self.arrayRendelesekOsszesitveHeti[i].day1){
                            mywindow.document.write('<td style="text-align: center;  border-left: 1px solid #cdd0d4; ' + fontbold + ' ">'+ self.arrayRendelesekOsszesitveHeti[i].day1 + '</td>');  
                        }else{
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;"></td>'); 
                        }

                        if(self.arrayRendelesekOsszesitveHeti[i].day2){
                            mywindow.document.write('<td style="text-align: center; border-left: 1px solid #cdd0d4; ' + fontbold + ' ">'+ self.arrayRendelesekOsszesitveHeti[i].day2 + '</td>'); 
                        }else{
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;"></td>'); 
                        }

                        if(self.arrayRendelesekOsszesitveHeti[i].day3){
                            mywindow.document.write('<td style="text-align: center; border-left: 1px solid #cdd0d4; ' + fontbold + ' ">'+ self.arrayRendelesekOsszesitveHeti[i].day3 + '</td>'); 
                        }else{
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;"></td>'); 
                        }

                        if(self.arrayRendelesekOsszesitveHeti[i].day4){
                            mywindow.document.write('<td style="text-align: center; border-left: 1px solid #cdd0d4; ' + fontbold + ' ">'+ self.arrayRendelesekOsszesitveHeti[i].day4 + '</td>'); 
                        }else{
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;"></td>'); 
                        }

                        if(self.arrayRendelesekOsszesitveHeti[i].day5){
                            mywindow.document.write('<td style="text-align: center; border-left: 1px solid #cdd0d4; ' + fontbold + ' ">'+ self.arrayRendelesekOsszesitveHeti[i].day5 + '</td>');
                        }else{
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;"></td>'); 
                        } 

                        if(self.arrayRendelesekOsszesitveHeti[i].day6){
                            mywindow.document.write('<td style="text-align: center; border-left: 1px solid #cdd0d4; ' + fontbold + ' ">'+ self.arrayRendelesekOsszesitveHeti[i].day6 + '</td>');
                        }else{
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;"></td>'); 
                        } 

                        if(self.arrayRendelesekOsszesitveHeti[i].day7){
                            mywindow.document.write('<td style="text-align: center; border-left: 1px solid #cdd0d4; ' + fontbold + ' ">'+ self.arrayRendelesekOsszesitveHeti[i].day7 + '</td>');
                        }else{
                            mywindow.document.write('<td style="border-left: 1px solid #cdd0d4;"></td>'); 
                        } 

                    mywindow.document.write('</tr>');    
                
                    mywindow.document.write('<tr class=\'border_bottom\'>');          
                        mywindow.document.write('<td colspan=\'9\'><hr></td>');                        
                    mywindow.document.write('</tr>'); 
                    
                    sorszam = i + 1; 
                }

                mywindow.document.write('</table>');    
                
                mywindow.document.write('</body></html>');

                mywindow.document.close(); // necessary for IE >= 10
                mywindow.focus(); // necessary for IE >= 10*/
            
                //mywindow.print();
                //mywindow.close();

            }
        },
        printRendelesekOsszesitve: function(): void {
            let self: any = this;

            if(self.arrayRendelesekOsszesitve){
                let mywindow: any = window.open('', 'PRINT', 'height=400,width=600');
                let lUrlParam: string = "";

                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;

                lUrlParam = "Intervallum: " + Moment(self.filterRendOsszDateFrom).format("YYYY-MM-DD") + " - " + Moment(self.filterRendOsszDateTo).format("YYYY-MM-DD");


                mywindow.document.write('<html><head><title>Összesített rendelések nyomtatása</title>');
                mywindow.document.write('</head><body >');
                mywindow.document.write('<h1>Összesített rendelések nyomtatása</h1>');

                mywindow.document.write('Lekérdezési paraméterek: ' + lUrlParam);
                mywindow.document.write('<br>Lista készítése: ' +  dateTime );

                mywindow.document.write('<table width=\'100%\' cellspacing=\'1\' cellpadding=\'1\'>');    

                mywindow.document.write('<tr class=\'border_bottom\'>');    
                    mywindow.document.write('<th>ID</th>');                        
                    mywindow.document.write('<th>Megnevezés</th>');                        
                    mywindow.document.write('<th>Mennyiség</th>');                        
                mywindow.document.write('</tr>');   
                
                let sorszam: number = 0;
                
                for(let i=0; i<self.arrayRendelesekOsszesitve.length; i++){
                    sorszam = i + 1; 
                    mywindow.document.write('<tr class=\'border_bottom\'>');          
                        mywindow.document.write('<td>'+ sorszam +'.</td>');                        
                        mywindow.document.write('<td>'+ self.arrayRendelesekOsszesitve[i].name + '</td>');  
                        mywindow.document.write('<td>'+ self.arrayRendelesekOsszesitve[i].summeny + '</td>');  
                    mywindow.document.write('</tr>');    
                
                    mywindow.document.write('<tr class=\'border_bottom\'>');          
                        mywindow.document.write('<td colspan=\'7\'><hr></td>');                        
                    mywindow.document.write('</tr>'); 
                }

                mywindow.document.write('</table>');    
                
                mywindow.document.write('</body></html>');

                mywindow.document.close(); // necessary for IE >= 10
                mywindow.focus(); // necessary for IE >= 10*/
            
                mywindow.print();
                mywindow.close();
            }
        },
        printCukraszList: function(): void {
            let self: any = this;

            if(self.cukraszlista){    
                let mywindow: any = window.open('', 'PRINT', 'height=400,width=600');
                let lUrlParam: string = "";

                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;

                mywindow.document.write('<html><head><title>Cukrászlista nyomtatása</title>');
                mywindow.document.write('</head><body >');
                mywindow.document.write('<h1>Cukrászlista nyomtatása</h1>');

                if(self.cukraszListParVeres == 1){
                    lUrlParam = "Átvétel helye: Veresegyház";
                }else if(self.cukraszListParGod == 1){
                    lUrlParam = "Átvétel helye: Gödöllő";
                }
    
                if(self.cukraszListParNormal == 1){
                    lUrlParam = "Torta típus: Normál";
                }else if(self.cukraszListParBurkolt == 1){
                    lUrlParam = "Torta típus: Burkolt";
                }       
    
                if(self.cukraszListParI == 1){
                    lUrlParam = "Torta kategória:I";
                }else if(self.cukraszListParII == 1){
                    lUrlParam = "Torta kategória:II";
                }else if(self.cukraszListParIII == 1){
                    lUrlParam = "Torta kategória:III";
                }else if(self.cukraszListParIV == 1){
                    lUrlParam = "Torta kategória:IV";
                }else if(self.cukraszListParV == 1){
                    lUrlParam = "Torta kategória:V";
                }else if(self.cukraszListParVI == 1){
                    lUrlParam = "Torta kategória: VI";
                }    
    
                if(self.cukraszListParSzerk == 1){
                    if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                    lUrlParam = lUrlParam + "statusz=szerk";
                }
                else if(self.cukraszListParFoly == 1){
                    if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                    lUrlParam = lUrlParam + "Státusz: folyamatban";
                }else if(self.cukraszListParKesz == 1){
                    if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                    lUrlParam = lUrlParam + "Státusz: kész";
                }
                
                            
                if(self.cukraszDateFrom){
                    let mom: any = Moment(self.cukraszDateFrom).format("YYYY-MM-DD");
                    if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                    lUrlParam = lUrlParam + "Tól:" + mom;                
                }
                if(self.cukraszDateTo){
                    let mom: any = Moment(self.cukraszDateTo).format("YYYY-MM-DD");
                    if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                    lUrlParam = lUrlParam + "Ig: " + mom;
                }            
                if(self.termekFilterStr){
                    if(lUrlParam.length > 0){ lUrlParam = lUrlParam + "&"; }                
                    lUrlParam = lUrlParam + "Egyéb feltétel: " + self.termekFilterStr;
                }

                mywindow.document.write('Lekérdezési paraméterek: ' + lUrlParam); 
                mywindow.document.write('<br>Lista készítése: ' +  dateTime);

                mywindow.document.write('<table width=\'100%\' cellspacing=\'1\' cellpadding=\'1\'>');    

                mywindow.document.write('<tr class=\'border_bottom\'>');    
                    mywindow.document.write('<th></th>'); 
                    mywindow.document.write('<th>ID</th>');                        
                    mywindow.document.write('<th>Típus</th>');                        
                    mywindow.document.write('<th>Megrendelő</th>');                        
                    mywindow.document.write('<th>Átvétel ideje</th>');                        
                    mywindow.document.write('<th>Átvétel helye</th>');                                              
                    mywindow.document.write('<th>Rendelt áruk</th>');
                mywindow.document.write('</tr>');    

                let sorszam: number = 0;

                for(let i=0; i<self.cukraszlista.length; i++){
                    sorszam = i + 1;

                    mywindow.document.write('<tr class=\'border_bottom\'>');          
                        mywindow.document.write('<td>'+ sorszam +'.</td>');                        
                        mywindow.document.write('<td>'+ self.cukraszlista[i].azon + '</td>');                        
                        mywindow.document.write('<td align=\'center\'>'+ self.cukraszlista[i].tipus + '</td>');                        
                        mywindow.document.write('<td>'+ self.cukraszlista[i].partner_name + '(' + self.cukraszlista[i].telefon + ')' + '</td>');   
                        mywindow.document.write('<td>'+ self.cukraszlista[i].datum + ' ' + self.cukraszlista[i].ido + '</td>');   

                        if(self.cukraszlista[i].kiszallitas == 1){
                            mywindow.document.write('<td>KISZÁLLITÁS: <br> ' +  self.cukraszlista[i].szalltelepules + '<br>' + self.cukraszlista[i].szallcim +'</td>');
                        }else{

                            if((self.cukraszlista[i].atvetel_helye == 'VER') || (self.cukraszlista[i].tipus == 'W' && self.cukraszlista[i].szallmod.indexOf('Veresegyház') > 0) ){
                                mywindow.document.write('<td>Veresegyház</td>');   
                            }else if((self.cukraszlista[i].atvetel_helye == 'GOD') || (self.cukraszlista[i].tipus == 'W' && self.cukraszlista[i].szallmod.indexOf('Gödöllő') > 0) ){
                                mywindow.document.write('<td>Gödöllő</td>');   
                            }else{
                                mywindow.document.write('<td>' + self.cukraszlista[i].atvetel_helye + '</td>');   
                            }
                        }
                        
                        mywindow.document.write('<td>'+ self.cukraszlista[i].note + '</td>');   
                    mywindow.document.write('</tr>');    
                    
                    mywindow.document.write('<tr class=\'border_bottom\'>');          
                        mywindow.document.write('<td colspan=\'7\'><hr></td>');                        
                    mywindow.document.write('</tr>');    
                }
                mywindow.document.write('</table>');    
                
                mywindow.document.write('</body></html>');
            
                mywindow.document.close(); // necessary for IE >= 10
                mywindow.focus(); // necessary for IE >= 10*/
            
                mywindow.print();
                mywindow.close();
              
            }

        },
        cukraszInfo: function(): void {
            let self: any = this;

            let message: string = "";

            let eloleg: number = 0;
            let vegosszeg: number = 0;
            let kulonbseg: number = 0;

            let simplepayosszeg: number = 0;
            let atveveosszeg: number = 0;

            message = "";
            message += "<table class='table'><tbody>";

            if(self.cukraszlista){
                for(let i: number = 0; i<self.cukraszlista.length; i++){
                    if(self.cukraszlista[i]['eloleg']){
                        eloleg += Number(self.cukraszlista[i]['eloleg']);
                    }

                    if( self.cukraszlista[i]['reszek'] && self.cukraszlista[i]['reszek'].length > 0){
                        vegosszeg += Number(self.cukraszlista[i]['vegosszeg_reszekkel']);
                    }else{
                        vegosszeg += Number(self.cukraszlista[i]['vegosszeg']);
                    }

                    if( self.cukraszlista[i]['tipus'] == "W" && self.cukraszlista[i]['szallmod'].indexOf('Simplepay') !== -1) {
                        simplepayosszeg += Number(self.cukraszlista[i]['vegosszeg']);
                    }
                             
                    if( self.cukraszlista[i]['atveve'] == "1") {
                        if( self.cukraszlista[i]['reszek'] && self.cukraszlista[i]['reszek'].length > 0){
                            atveveosszeg += Number(self.cukraszlista[i]['vegosszeg_reszekkel']);
                        }else{
                            atveveosszeg += Number(self.cukraszlista[i]['vegosszeg']);
                        }
                    }
                }
            }

            atveveosszeg = atveveosszeg - (simplepayosszeg + eloleg);
            kulonbseg = vegosszeg - eloleg - simplepayosszeg - atveveosszeg;
            
            message += "<tr><th>Rendelések összesen:</th><td>" + vegosszeg + " Ft</td>";
            message += "<tr><th>Előleg:</th><td>" + eloleg + " Ft</td>";
            message += "<tr><th>Simplepay-vel fizetve:</th><td>" + simplepayosszeg + " Ft</td>";
            message += "<tr><th>Átvételkor fizetve:</th><td>" + atveveosszeg + " Ft</td>";
            message += "<tr><th>Még fizetendő:</th><td>" + kulonbseg + " Ft</td>";

            message += "</tbody></table>";

            Swal.fire({
                title: "Információ!",
                html: message,
                icon: "info",
                customClass: {
                    container: 'my-swal'
                  }                                                
            });  

        },
        openCukraszList: function(): void {
            let self: any = this;

            let lUrlParam: string = "";

            lUrlParam = self.setCukraszListFilter();

            if(lUrlParam.length && lUrlParam.length>0){
                let lUrl: string = func.dataURLCukraszListConst + "/" + self.logindata_session + lUrlParam;
                self.isLoading = true;

                $.getJSON(lUrl, function (retLista: RestBaseResponse): void {
                    self.cukraszlista = JSON.parse(retLista.data) as CukraszObj;
                    self.isLoading = false;
                });            
            }
            
        },
        orderCukraszList: function(): void {
            let self: any = this;

            

        },
        openTortarendelesekList: function(): void {
            let self: any = this;

            let lUrlParam: string = "";

            lUrlParam = self.setCukraszListFilter();

            if(lUrlParam.length && lUrlParam.length>0){
                let lUrl: string = func.dataURLTortaRendelesekListConst + "/" + self.logindata_session + lUrlParam;
                self.isLoading = true;

                $.getJSON(lUrl, function (retTortaRendelesek: RestBaseResponse): void {
                    self.tortarendelesek = JSON.parse(retTortaRendelesek.data);

                    if(self.tortarendelesek){
                        for(let i = 0; i<self.tortarendelesek.length; i++){
                            if(self.tortarendelesek[i].kiegeszitok){
                                self.tortarendelesek[i].kiegeszitok = JSON.parse(self.tortarendelesek[i].kiegeszitok) as Array<TortaRendeles_Kiegeszitok>;
                            }

                            if(self.tortarendelesek[i].reszek){
                                for(let j = 0; j<self.tortarendelesek[i].reszek.length; j++){
                                    if(self.tortarendelesek[i].reszek[j].kiegeszitok){
                                        self.tortarendelesek[i].reszek[j].kiegeszitok = JSON.parse(self.tortarendelesek[i].reszek[j].kiegeszitok) as Array<TortaRendeles_Kiegeszitok>;
                                    }        
                                }
                            }

                        }
                    }

                    self.isLoading = false;
                });
            }
        },
        showMegrendelesModositas: function(): void {
            let self: any = this;

            self.showModalMegrendelesModositas = true;

        },
        dateSelected(e: any) {
            let self: any = this;

            //self.tortaRendelesObj.datum = 
            
            this.$nextTick(() => {
                self.tortaRendelesObj.datum = this.appointment.appointmet_date;
                
                let tDatum: string = Moment(self.tortaRendelesObj.datum).format("YYYY-MM-DD");
                self.getKapacitas(self.tortaRendelesObj.ido, self.tortaRendelesObj.atvetel_helye, tDatum);

                
            });
        },
        dateSelectedSpecNapi(e: any) {
            let self: any = this;

            this.$nextTick(() => {
                self.SpecNapiObj.gyartas_datum = this.appointment.appointmet_date;
            });
        },
        dateSelectedNapiMunka(e: any) {
            let self: any = this;

            this.$nextTick(() => {
                self.NapiMunkaObj.datum = this.appointment.appointmet_date;
            });
        },
        loadOrak: function(aHelyszin: string): void{
            let self: any = this;
            
            if(aHelyszin == "VER"){
                self.orak = self.orakVeres;
            }else if(aHelyszin == "GOD"){
                self.orak = self.orakGodollo;
            }    
        },
        selectAtvetelHelye: function(aOra: string, aHelyszin: string, aDatum: string): void {
            let self: any = this;

            self.loadOrak(aHelyszin);
            self.getKapacitas(aOra, aHelyszin, aDatum);
        }, 
        getKapacitas: function(aOra: string, aHelyszin: string, aDatum: string): void {
            let self: any = this;
            let kapacitasMennyiseg: number = 0;

            self.isLoading = true;
            self.kapacitasInfo = "Számolás...";
            self.kapacitasDiff = 0;

            // 1. kapacitás lekérdezése az átvételi időszakra 
            for(let i=0; i<self.kapacitasok.length; i++){
                if(self.kapacitasok[i].helyszin == aHelyszin && (Number(self.kapacitasok[i].idoponttol) >= Number(aOra) &&  Number(aOra) < Number(self.kapacitasok[i].idopontig)) ){
                    kapacitasMennyiseg = self.kapacitasok[i].mennyiseg;
                    break;
                }
            }
            
            let tDatum: string = Moment(aDatum).format("YYYY-MM-DD");

            // 2. foglalási adatok lekérdezése
            let lURL: string =  func.dataURLTortarendelesekByIdo + "/" + self.ls_my_session + "?atvetel_helye=" + aHelyszin + "&datum=" + tDatum + "&ido=" + aOra;
            
            $.getJSON(lURL, function (ret: RestBaseResponse):void {
                self.kapacitasInfo = ret.data + " / " + kapacitasMennyiseg;
                self.kapacitasDiff = kapacitasMennyiseg - Number(ret.data);
                self.visiblekapacitasCimke = true;
            });

            
            self.isLoading = false;
        },
        showTortaArazas: function(): void {
            let self: any = this;

            self.showModalTortaArazas = true;
           
        },
        showNewPartner: function(): void {
            let self: any = this;

            self.showModalNewPartner = true;
            self.modalHeaderTitle = "Új partner felvétele";

            self.NewPartnerObj = new Partner();
            self.NewPartnerObj.newPartnerMode = "ELORENDELES"; 
        },
        submitNewPartner: function(): void {
            let self: any = this;

            let lUrl: string = "";

            lUrl = func.dataURLParsePartner + "/" + self.ls_my_session;

            var form: any = document.getElementById("needs-validation_newpartner");
            form.classList.add("was-validated");

            if (form.checkValidity() === false) {
                if(event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            } else {
                $.post(
                    lUrl,
                    {datastream: JSON.stringify(self.NewPartnerObj), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {

                        self.tortaRendelesObj.partner_id = response.data;
                        self.tortaRendelesObj.partnev = self.NewPartnerObj.Neve;
                        self.tortaRendelesObj.partirsz = self.NewPartnerObj.Irszam;
                        self.tortaRendelesObj.partcity = self.NewPartnerObj.Varos;
                        self.tortaRendelesObj.partaddress = self.NewPartnerObj.Cim;
                        self.tortaRendelesObj.parttel = self.NewPartnerObj.Telefon;
                        self.tortaRendelesObj.partemail = self.NewPartnerObj.Email;

                        if(self.NewPartnerObj.newPartnerMode == "ELORENDELES"){

                            self.giveOutObj.partner_id = response.data;
                            self.giveOutObj.irszam = self.NewPartnerObj.Irszam;
                            self.giveOutObj.name = self.NewPartnerObj.Neve;
                            self.giveOutObj.city = self.NewPartnerObj.Varos;
                            self.giveOutObj.address = self.NewPartnerObj.Cim;
                            self.giveOutObj.telefon = self.NewPartnerObj.Telefon;
                            self.giveOutObj.email = self.NewPartnerObj.Email;
                            self.giveOutObj.adoszam = self.NewPartnerObj.Adoszam;                           

                            self.ElorendelesObj.partner.partner_id = response.data;
                            self.ElorendelesObj.partner.Neve = self.NewPartnerObj.Neve;
                            self.ElorendelesObj.partner.Irszam =  self.NewPartnerObj.Irszam;
                            self.ElorendelesObj.partner.Varos = self.NewPartnerObj.Varos;
                            self.ElorendelesObj.partner.Cim = self.NewPartnerObj.Cim;
                            self.ElorendelesObj.partner.Telefon = self.NewPartnerObj.Telefon;
                            self.ElorendelesObj.partner.Email = self.NewPartnerObj.Email;
                            self.ElorendelesObj.partner.Adoszam = self.NewPartnerObj.Adoszam;                            
                        }

                        self.showModalNewPartner = false;

                        setTimeout(function (): void {
                            self.refreshTRPartnerKereso();
                        }, 5000);
                    },
                "json");

            }
        },
        showNumPad: function(aSource: string, item: CashOutItem, penztarItem?: CashOut): void {
            let self: any = this;

            self.selectedFoodOutItem = item;
            self.NumPadHandleSection = aSource;

            if(penztarItem) {
                self.SelectedPenztarItem = penztarItem;
            }
            
            self.NumPadNumberTxt = "";
            self.showModalNumPad = true;
        },
        clickNumPadButton: function(aNum: number, aOther: string = ""): void {
            let self: any = this;

            if(aNum == 0 && aOther == '.'){
                self.NumPadNumberTxt += aOther;
            }else{
                self.NumPadNumberTxt += aNum;
            }

            let item: CashOutItem = self.selectedFoodOutItem;
            let newMenny: number = Number(self.NumPadNumberTxt);

            self.KalkPrice = item.originPrice * newMenny;

        },
        clickNumPadOK: function(): void {
            let self: any = this;

            let item: CashOutItem = self.selectedFoodOutItem;
            let newMenny: number = Number(self.NumPadNumberTxt);

            if(newMenny > 0){

                item.menny = Number(self.NumPadNumberTxt);
                item.ossz = newMenny * item.originPrice;

                if (self.NumPadHandleSection === "CASHOUT") {
                    var saveTetelArray: any = [];
                    saveTetelArray.push({id: item.id, mennyiseg: newMenny});                

                    $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                        {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                        function(response: RestBaseResponse): void {

                                let p: CashOut = self.SelectedPenztarItem;
                                let lSzum: number = 0;
                                for(let i: number=0; i <= p.items.length-1; i++) {
                                    lSzum += p.items[i].ossz;
                                }

                                self.SelectedPenztarItem.szum = lSzum;
                                self.showModalNumPad = false;
                                
                            },
                    "json");
                } else if (self.NumPadHandleSection === "FOODOUT") {
                    this.totalAmount = sumTotalAmount(this.cashoutlist, this.cashoutlist2);
                    self.showModalNumPad = false;
                }
            }else{
                Swal.fire({
                    title: "Hiba!",
                    text: "0 vagy annál kisebb szám nem adható meg!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });                  
            }
        },
        addSzallitasItem: function(aOsszeg: number): void {
            let self: any = this;

            let szallitas: Termek;
            szallitas = new Termek();

            switch(aOsszeg) {
                case 1:
                    szallitas.id = 2151;
                    szallitas.azon =  "M21-0026";
                    szallitas.price = 100;
                    break;
                case 2:
                    szallitas.id = 2152;
                    szallitas.azon =  "M21-0027";
                    szallitas.price = 300;
                    break;
                case 3:
                    szallitas.id = 2153;
                    szallitas.azon =  "M21-0028";
                    szallitas.price = 500;
                    break;
            }

            szallitas.name = "Szállítás";
            szallitas.kat = 0;
            szallitas.alkat = 0;
            szallitas.isPortion = false;
            szallitas.isKorettel = false;
            szallitas.isNapi = false;

            self.addDataToFoodOut(szallitas);
        },
        addCsomagolasItem: function(): void {
            let self: any = this;

            let csomagolas: Termek;
            csomagolas = new Termek();

            csomagolas.id = 2043;
            csomagolas.azon =  "M21-0026";
            csomagolas.name = "Csomagolás";
            csomagolas.price = 100;
            csomagolas.kat = 0;
            csomagolas.alkat = 0;
            csomagolas.isPortion = false;
            csomagolas.isKorettel = false;
            csomagolas.isNapi = false;

            self.addDataToFoodOut(csomagolas);
        },
        logout: function(): void {
            let self: any = this;
            
            $.getJSON(func.dataURLLogout + "/" + self.ls_my_session, function (ret: RestBaseResponse): void {
                localStorage.setItem("my_session", "");
                self.ls_my_session = "";
            });

            self.changeModul(4);
        },
        genSzallito: function(): void {
            let self: any = this;

            var form: any = document.getElementById("needs-validation2");
            form.classList.add("was-validated");

            if (form.checkValidity() === false) {
                if(event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            } else {
                let KiadasObj: GiveOut = self.giveOutObj as GiveOut;

                self.isLoading = true;

                let lUrl: string = func.dataURLSzallLevCreateConst + "/" + self.logindata_session;
                $.post(
                    lUrl,
                    {datastream: JSON.stringify(KiadasObj), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        let printWindow: any;

                        // szállítólevél
                        if(KiadasObj.genSzallito === true ) {
                            let lURL2: string = "http://mysystem.hu/eszamla/eRaktar.page.php?page=e4q4g4s5w3u464u5f494z5w5&SZALL_ID="
                                                + response.specdata +
                                                "&session_id=" + self.logindata_session;
                            printWindow = window.open(lURL2, "_blank");
                        }

                        // számla
                        if(KiadasObj.genSzamla === true ) {
                            let lURL3: string = "http://www.mysystem.hu/eszamla/eSzamla.page.php?page=e4q4g4s5&KSZ_ID="
                                                + response.specdata2 +
                                                "&session_id=" + self.logindata_session;
                            printWindow = window.open(lURL3, "_blank");
                        }

                        self.pay(self.SelectedPenztarItem);

                        // self.penztar.splice(self.penztar.indexOf(self.SelectedPenztarItem), 1);

                        self.showModalOut = false;
                        self.isLoading = false;
                    },
                "json");

                
            }

        },
        genSzallito_from_tortarendeles: function(tr: TortaRendeles): void{
            let self: any = this;
            let KiadasObj: GiveOut = new GiveOut();

            KiadasObj.partner_id = tr.partner_id;
            KiadasObj.name = tr.partnev;
            KiadasObj.city = tr.partcity;
            KiadasObj.address = tr.partaddress;
            KiadasObj.telefon = tr.parttel;
            KiadasObj.email = tr.partemail;
            KiadasObj.genSzallito = true; 
            KiadasObj.genSzamla = true;            
            KiadasObj.items.push(new CashOutItem(0, 2617 /*  Technikai készlet tétel azonosító*/, tr.megrendeles_azonosito, tr.torta_neve  + " (" + tr.torta_tipus + ")", tr.vegosszeg_s, 1, tr.vegosszeg_s));

            let lUrl: string = func.dataURLSzallLevCreateConst + "/" + self.logindata_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(KiadasObj), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    let printWindow: any;

                    // szállítólevél
                    if(KiadasObj.genSzallito === true ) {
                        let lURL2: string = "http://mysystem.hu/eszamla/eRaktar.page.php?page=e4q4g4s5w3u464u5f494z5w5&SZALL_ID="
                                            + response.specdata +
                                            "&session_id=" + self.logindata_session;
                        printWindow = window.open(lURL2, "_blank");
                    }

                    // számla
                    if(KiadasObj.genSzamla === true ) {
                        let lURL3: string = "http://www.mysystem.hu/eszamla/eSzamla.page.php?page=e4q4g4s5&KSZ_ID="
                                            + response.specdata2 +
                                            "&session_id=" + self.logindata_session;
                        printWindow = window.open(lURL3, "_blank");
                    }                    

                    // self.penztar.splice(self.penztar.indexOf(self.SelectedPenztarItem), 1);

                    self.showModalOut = false;
                    self.isLoading = false;
                },
            "json");
        },
        genSzamla: function(penztarItem: CashOut): void {
            // ...
        },
        cancelSearchMatch: function(): void {
            let self: any = this;

            self.partnerSearchTxt = "";
            self.visiblePartnerKedvezmenyCimke = false;
            self.visiblePartnerKedvezmenyCimkeE = false;
            self.giveOutObj.partner_id = 0;
            self.giveOutObj.name = "";
            self.giveOutObj.irszam = "";
            self.giveOutObj.city = "";
            self.giveOutObj.address = "";
            self.giveOutObj.telefon = "";
            self.giveOutObj.email = "";
            self.giveOutObj.adoszam = "";
            self.giveOutObj.bonus = 0;

            if(self.ElorendelesObj && self.ElorendelesObj.partner){
                self.ElorendelesObj.partner.partner_id = 0;
                self.ElorendelesObj.bonus = 0;
                self.ElorendelesObj.partner.bonus = 0;
            }

            if(self.tortaRendelesObj){
                self.tortaRendelesObj.partbonus = 0;
                self.tortaRendelesObj.bonus = 0;
            }
        },
        setTortaTipus: function(tipus: string, isEmelet: boolean = false): void {
            let self: any = this;


            let vizsgKat: string = "";
            if(isEmelet){
                vizsgKat = self.tortaRendelesEmeletObj.torta_kategoria;
            }else{
                vizsgKat = self.tortaRendelesObj.torta_kategoria;
            }

            /*if(tipus == "B" && vizsgKat == "VII"){
                self.termekek = [];

                Swal.fire({
                    title: "Figyelmeztetés!",
                    text: "Figyelem! Burkolt típushoz nem lehet VII. kategóriát választani, válasszon más kategóriát!",
                    icon: "warning",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });  

            }*/

            if(isEmelet){
                self.tortaRendelesEmeletObj.torta_tipus = tipus;
            }else{
                self.tortaRendelesObj.torta_tipus = tipus;
            }

            if(tipus === "N" || tipus == "B") {
                self.getTortakList();
            } else {
                if(isEmelet){
                    self.tortaRendelesEmeletObj.product_id = 0;
                    self.tortaRendelesEmeletObj.torta_diszites = "";
                }else{
                    self.tortaRendelesObj.product_id = 0;
                    self.tortaRendelesObj.torta_diszites = "";
                }
            }

            if(isEmelet){
                self.calcSzeletarForEmelet(tipus);
            }else{
                self.calcSzeletar(tipus);
            }
        },
        calcSzeletar(tipus: string): void {
            let self: any = this;

            self.tortaRendelesObj.szeletar = 0;
            if(tipus === "N") {
                for(let i: number = 0; i<self.normalTortaArak.length; i++) {
                    if (self.normalTortaArak[i].kategoria === self.tortaRendelesObj.torta_kategoria) {
                        self.tortaRendelesObj.szeletar = self.normalTortaArak[i].szeletar;
                        break;
                    }
                }
            } else if(tipus === "B") {
                for(let i: number = 0; i<self.burkoltTortaArak.length; i++) {
                    if (self.burkoltTortaArak[i].kategoria === self.tortaRendelesObj.torta_kategoria
                        && self.burkoltTortaArak[i].diszites === self.tortaRendelesObj.torta_diszites) {
                            self.tortaRendelesObj.szeletar = self.burkoltTortaArak[i].szeletar;
                            break;
                    }
                }
            }

        },
        calcSzeletarForEmelet(tipus: string): void {
            let self: any = this;

            self.tortaRendelesEmeletObj.szeletar = 0;
            if(tipus === "N") {
                for(let i: number = 0; i<self.normalTortaArak.length; i++) {
                    if (self.normalTortaArak[i].kategoria === self.tortaRendelesEmeletObj.torta_kategoria) {
                        self.tortaRendelesEmeletObj.szeletar = self.normalTortaArak[i].szeletar;
                        break;
                    }
                }
            } else if(tipus === "B") {
                for(let i: number = 0; i<self.burkoltTortaArak.length; i++) {

                    if (self.burkoltTortaArak[i].kategoria === self.tortaRendelesEmeletObj.torta_kategoria
                        && self.burkoltTortaArak[i].diszites === self.tortaRendelesEmeletObj.torta_diszites) {
                            self.tortaRendelesEmeletObj.szeletar = self.burkoltTortaArak[i].szeletar;
                            break;
                    }
                }
            }

        },
        setTortaKategoria: function(kategoria: string, isEmelet: boolean = false): void {
            let self: any = this;

            if(isEmelet){
                self.tortaRendelesEmeletObj.torta_kategoria = kategoria;
                self.calcSzeletarForEmelet(self.tortaRendelesEmeletObj.torta_tipus);
            }else{
                self.tortaRendelesObj.torta_kategoria = kategoria;
                self.calcSzeletar(self.tortaRendelesObj.torta_tipus);
            }

            self.getTortakList(kategoria);
        },
        setTortaDiszites: function(diszites: string, isEmelet: boolean = false): void {
            let self: any = this;

            if(isEmelet){
                self.tortaRendelesEmeletObj.torta_diszites = diszites;
                self.calcSzeletarForEmelet(self.tortaRendelesEmeletObj.torta_tipus);
            }else{
                self.tortaRendelesObj.torta_diszites = diszites;
                self.calcSzeletar(self.tortaRendelesObj.torta_tipus);
            }
        },
        printTortaRendeles: function(id: number = 0): void {
            let self: any = this;

            let lURL: string = "http://mysystem.hu/eszamla/eRaktar.page.php?page=e4q4g4s584o4k406n414x5m5g4j5j5p5n5y5"
                                + "&SZALL_ID=" + id
                                + "&session_id=" + self.ls_my_session;

            let printWindow: any = window.open(lURL, "_blank");
        },  
        showTortaRendeles: function(id: number = 0): void {
            let self: any = this;

            window.scrollTo(0, 0);
            self.wantGotoEmelet = 0;
            self.partnerSearchTxtTR = "";
            self.visiblePartnerKedvezmenyCimke = false;
            self.kiegeszitoFilter = "";
            self.appointment.appointmet_date = "";

            if(id === 0) {
                self.tortaRendelesObj = new TortaRendeles();
                self.gettortaKiegeszitok();
            } else {

                let dialog = bootbox.dialog({
                    title: "Adatfeldolgozás folyamatban",
                    message: '<p class="text-center mb-0"><i class="fas fa-spin fa-cog"></i> Kérem várjon, az adatok töltődnek! </p>',
                    closeButton: false
                });                

                $.getJSON(func.dataURLTortaRendelesViewConst  + id + "/" + self.ls_my_session, function (ret: RestBaseResponse): void {
                    var retList: Array<TortaRendeles> = JSON.parse(ret.data);

                    if(retList) {

                        let tritem: TortaRendeles = retList[0];

                        if(tritem.torta_tipus === "N" || tritem.torta_tipus == "B") {
                            self.getTortakList();
                        }

                        setTimeout(function (): void {

                            self.tortaRendelesObj = new TortaRendeles();
                            self.tortaRendelesObj.partner_id = tritem.partner_id;
                            self.tortaRendelesObj.partnev = tritem.partnev;
                            self.tortaRendelesObj.partirsz = tritem.partirsz;
                            self.tortaRendelesObj.partcity = tritem.partcity;
                            self.tortaRendelesObj.partaddress = tritem.partaddress;
                            self.tortaRendelesObj.parttel = tritem.parttel;
                            self.tortaRendelesObj.partemail = tritem.partemail;
                            self.tortaRendelesObj.genSzallito = false;
                            self.tortaRendelesObj.genSzamla = false;
                            self.tortaRendelesObj.id = tritem.id;
                            self.tortaRendelesObj.ptr_id = tritem.ptr_id;
                            self.tortaRendelesObj.keres_datum = tritem.keres_datum;
                            self.tortaRendelesObj.megrendeles_azonosito = tritem.megrendeles_azonosito;
                            self.tortaRendelesObj.torta_tipus = tritem.torta_tipus;
                            self.tortaRendelesObj.torta_kategoria = tritem.torta_kategoria;
                            self.tortaRendelesObj.product_id = tritem.product_id;
                            self.tortaRendelesObj.keszlet_name = tritem.keszlet_name;
                            self.tortaRendelesObj.torta_neve = tritem.torta_neve;
                            self.tortaRendelesObj.torta_diszites = tritem.torta_diszites;
                            self.tortaRendelesObj.szeletszam = tritem.szeletszam;
                            self.tortaRendelesObj.szeletar = tritem.szeletar;
                            self.tortaRendelesObj.forma = tritem.forma;
                            self.tortaRendelesObj.forma_id = tritem.forma_id;
                            self.tortaRendelesObj.megjegyzes = tritem.megjegyzes;
                            self.tortaRendelesObj.atvetel_helye = tritem.atvetel_helye;
                            self.loadOrak(self.tortaRendelesObj.atvetel_helye);
                            self.tortaRendelesObj.kedvezmeny_merteke = tritem.kedvezmeny_merteke;
                            self.tortaRendelesObj.vegosszeg_s = tritem.vegosszeg_s;
                            self.tortaRendelesObj.eloleg = tritem.eloleg;
                            self.tortaRendelesObj.datum = tritem.datum;

                            self.appointment.appointmet_date = self.tortaRendelesObj.datum;
                            
                            if(tritem.ido && tritem.ido.length > 2){
                                self.tortaRendelesObj.ido = tritem.ido.substr(0,2);
                            }else{
                                self.tortaRendelesObj.ido = tritem.ido;
                            }

                            self.tortaRendelesObj.kiszallitas = tritem.kiszallitas;
                            self.tortaRendelesObj.szallirsz = tritem.szallirsz;
                            self.tortaRendelesObj.szalltelepules = tritem.szalltelepules;
                            self.tortaRendelesObj.szallcim = tritem.szallcim;
                            self.tortaRendelesObj.reszek = tritem.reszek;
                            self.tortaRendelesObj.kalkulalt_vegosszeg = tritem.kalkulalt_vegosszeg;
                            self.tortaRendelesObj.egyediar = tritem.egyediar;

                            if(self.tortaRendelesObj.reszek){
                                for(let i = 0; i<self.tortaRendelesObj.reszek.length; i++){
                                    if(self.tortaRendelesObj.reszek[i].kiegeszitok){
                                        self.tortaRendelesObj.reszek[i].kiegeszitok = JSON.parse(self.tortaRendelesObj.reszek[i].kiegeszitok) as Array<TortaRendeles_Kiegeszitok>;
                                    }
                                }
                            }

                            var k: any = tritem.kiegeszitok;
                            self.tortaRendelesObj.kiegeszitok = JSON.parse(k) as Array<TortaRendeles_Kiegeszitok>;

                            self.gettortaKiegeszitok();
                            self.getKapacitas(self.tortaRendelesObj.ido, self.tortaRendelesObj.atvetel_helye, self.tortaRendelesObj.datum);
                        
                            dialog.modal('hide');
                        }, 700);
                    }
                });
            }

            self.changeModul(10);
            self.refreshTRPartnerKereso();

        },
        refreshTRPartnerKereso: function (): void {
            var self: any = this;
            
            // általános kereső config
            let lUrl2: string = func.dataURLPartnerAddressListConst + "/" + self.ls_my_session;

            $.getJSON(lUrl2,
                function (retLogin: RestBaseResponse): void {

                    let dt2: any = JSON.parse(retLogin.data) as Array<PartnerForTypeHead>;                    

                    var $inputPartnerSearch: any = $("#PartnerSearchTR");
                    $inputPartnerSearch.typeahead({
                        source: dt2,
                        autoSelect: false
                    });
                    
                    $inputPartnerSearch.change(function(): void {
                        var current: any = $inputPartnerSearch.typeahead("getActive");

                        if (current) {
                            // some item from your model is active!
                            if (current.name === $inputPartnerSearch.val()) {

                                if(current.id > 0) {
                                    $.getJSON(func.dataURLPartnerGetConst + "/" + current.id + "/" + self.ls_my_session,
                                        function (ret: RestBaseResponse): void {
                                            
                                            let lPartner: any = JSON.parse(ret.data) as Array<Partner>;
                                           
                                            self.tortaRendelesObj.partner_id = current.id;
                                            self.tortaRendelesObj.partnev = lPartner.Neve;
                                            self.tortaRendelesObj.partirsz = lPartner.Irszam;
                                            self.tortaRendelesObj.partcity = lPartner.Varos;
                                            self.tortaRendelesObj.partaddress = lPartner.Cim;
                                            self.tortaRendelesObj.parttel = lPartner.Telefon;
                                            self.tortaRendelesObj.partemail = lPartner.Email;
                                            self.tortaRendelesObj.bonus = 0; 
                                            self.tortaRendelesObj.partbonus = 0; // később lesz kitöltve
                                            self.partnerSearchTxtTR = "";

                                            /*console.log("start kedvezmeny calc");
                                            self.isLoading = true;

                                            //kedvezmény vizsgálat - első verzióban, ez nem így kell végül
                                            $.getJSON(func.dataURLPartnerBigListConst + "/" + lPartner.Neve + "/" + self.ls_my_session, function (partnerData: RestBaseResponse): void {
                                                let arrayPartnerData: Array<PartnerBig> = JSON.parse(partnerData.data);
                                                let megrendelesekOsszege: number = 0;
                                                let isKedvezmeny: boolean = false;

                                                //xxx
                                                if(arrayPartnerData){
                                                    arrayPartnerData.forEach(element => {
                                                        megrendelesekOsszege += Number(element.Osszeg);
                                                    });
                                                }
                                                console.log("=" + megrendelesekOsszege);
                                                $('#visiblePartnerKedvezmenyCimke').prop('title', 'Összes rendelés értéke: ' + megrendelesekOsszege + ' Ft  Kapott kedvezmények: 0 Ft');
                                                
                                                if(megrendelesekOsszege > 20000){
                                                    isKedvezmeny = true;
                                                }

                                                self.visiblePartnerKedvezmenyCimke = isKedvezmeny;
                                                console.log("end kedvezmeny calc");
                                                self.isLoading = false;
                                            });*/

                                            //kedvezmény vizsgálat második verzióban
                                            self.getBonusForTortarendeles();

                                        });
                                }
                                // this means the exact match is found. Use toLowerCase() if you want case insensitive match.
                            } else {
                                self.tortaRendelesObj.partner_id = 0;
                                self.tortaRendelesObj.partnev = $inputPartnerSearch.val();
                                self.tortaRendelesObj.partirsz = "";
                                self.tortaRendelesObj.partcity = "";
                                self.tortaRendelesObj.partaddress = "";
                                self.tortaRendelesObj.parttel = "";
                                self.tortaRendelesObj.partemail = "";
                                self.tortaRendelesObj.bonus = 0;
                                self.tortaRendelesObj.partbonus = 0;
                                self.visiblePartnerKedvezmenyCimke = false;
                            }
                        } else {
                            console.log("33");
                            // nothing is active so it is a new value (or maybe empty value)
                        }

                    });

              }
            );            
        },
        getBonusForTortarendeles: function(): void {
            var self: any = this;

            if(self.tortaRendelesObj && self.tortaRendelesObj.partemail){
                //kedvezmény vizsgálat második verzióban
                let lUrlB: string = func.dataURLUserBonusGetConst + "/" + self.ls_my_session;
                var saveRecArray: any = [];
                saveRecArray.push({email: self.tortaRendelesObj.partemail});     

                $.post(
                    lUrlB,
                    {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.tortaRendelesObj.partbonus = Number(response.data);
                        self.visiblePartnerKedvezmenyCimke = (self.tortaRendelesObj.partbonus > 0);      
                        $('#visiblePartnerKedvezmenyCimke').prop('title', 'Összes felhasználható egyenleg: ' + response.data + ' Ft');                                             
                    },
                "json");             
            }
        },
        loadNTAKKategoriak: function (): void {
            var self: any = this;

            self.ntak_mee = new Array<NTAKMennyisegiEgysegekHelper>();
            self.ntak_mee.push(new NTAKMennyisegiEgysegekHelper("DARAB", "darab"));
            self.ntak_mee.push(new NTAKMennyisegiEgysegekHelper("LITER", "liter"));
            self.ntak_mee.push(new NTAKMennyisegiEgysegekHelper("KILOGRAMM", "kilogram"));
            self.ntak_mee.push(new NTAKMennyisegiEgysegekHelper("EGYSEG", "egység"));

            self.ntak_fizetesi_modok = new Array<NTAKFizetesiModHelper>();
            self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("KESZPENZHUF", "Készpénz (HUF)"));
            //self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("KESZPENZEUR", "Készpénz (EUR)"));
            self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("SZEPKARTYA", "SZÉP kártya"));
            self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("BANKKARTYA", "Bankkártya"));
            self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("ATUTALAS", "Átutalás"));
            self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("EGYEB", "Egyéb"));
            self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("VOUCHER", "Voucher"));
            //self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("SZOBAHITEL", "Szobahitel"));
            //self.ntak_fizetesi_modok.push(new NTAKFizetesiModHelper("KEREKITES", "Kerekítés"));

            self.ntak_fokategoriak = new Array<NTAKKategoriaHelper>();

            self.ntak_fokategoriak.push(new NTAKKategoriaHelper("ETEL", "Étel", "A konyha- és cukrásztechnológiai műveletek útján közvetlen fogyasztásra készített élelmiszer, amely melegen vagy lehűtés után fogyasztható, továbbá a közvetlen fogyasztásra előkészített és adagolt, valamint a nyersen fogyasztandó élelmiszer"));
            self.ntak_fokategoriak.push(new NTAKKategoriaHelper("ALKMENTESITAL_HELYBEN","Helyben készített alkoholmentes ital"));
            self.ntak_fokategoriak.push(new NTAKKategoriaHelper("ALKMENTESITAL_NEM_HELYBEN","Nem helyben készített alkoholmentes ital"));
            self.ntak_fokategoriak.push(new NTAKKategoriaHelper("ALKOHOLOSITAL","Alkoholos ital"));
            self.ntak_fokategoriak.push(new NTAKKategoriaHelper("EGYEB","Egyéb"));

            self.ntak_alkategoriak = new Array<NTAKAlKategoriaHelper>();

            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("REGGELI", "reggeli", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("SZENDVICS", "szendvics", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("ELOETEL", "előétel", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("LEVES", "leves", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("FOETEL", "főétel", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("KORET", "köret", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("SAVANYUSAG_SALATA", "savanyúság/saláta", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("KOSTOLO", "kóstolóétel, kóstolófalat", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("PEKSUTEMENY", "péksütemény, pékáru", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("DESSZERT", "desszert", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("SNACK", "snack", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("FOETEL_KORETTEL", "főétel körettel", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("ETELCSOMAG", "ételcsomag", "ETEL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("EGYEB", "egyéb", "ETEL"));
        
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("VIZ", "víz", "ALKMENTESITAL_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("LIMONADE_SZORP_FACSART", "limonádé / szörp / frissen facsart ital ", "ALKMENTESITAL_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("ALKOHOLMENTES_KOKTEL", "alkoholmentes koktél, alkoholmentes kevert ital", "ALKMENTESITAL_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("TEA_FORROCSOKOLADE", "tea, forrócsoki és egyéb tejalapú italok", "ALKMENTESITAL_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("ITALCSOMAG", "italcsomag (helyben készített, alkoholmentes italokból)", "ALKMENTESITAL_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("KAVE", "kávé", "ALKMENTESITAL_HELYBEN"));

            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("VIZ", "víz", "ALKMENTESITAL_NEM_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("ROSTOS_UDITO", "rostos üdítő", "ALKMENTESITAL_NEM_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("SZENSAVAS_UDITO", "szénsavas üdítő", "ALKMENTESITAL_NEM_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("SZENSAVMENTES_UDITO", "szénsavmentes üdítő", "ALKMENTESITAL_NEM_HELYBEN"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("ITALCSOMAG", "italcsomag (nem helyben készített alkoholment", "ALKMENTESITAL_NEM_HELYBEN"));

            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("KOKTEL", "koktél, kevert ital", "ALKOHOLOSITAL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("LIKOR", "likőr", "ALKOHOLOSITAL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("PARLAT", "párlat", "ALKOHOLOSITAL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("SOR", "sör", "ALKOHOLOSITAL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("BOR", "bor", "ALKOHOLOSITAL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("PEZSGO", "pezsgő", "ALKOHOLOSITAL"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("ITALCSOMAG", "italcsomag (alkoholos italokból)", "ALKOHOLOSITAL"));

            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("EGYEB", "egyéb", "EGYEB"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("SZERVIZDIJ", "szervizdíj", "EGYEB"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("BORRAVALO", "borravaló", "EGYEB"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("KISZALLITASI_DIJ", "kiszállítási díj", "EGYEB"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("NEM_VENDEGLATAS", "nem vendéglátás", "EGYEB"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("KORNYEZETBARAT_CSOMAGOLAS", "környezetbarát csomagolás", "EGYEB"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("MUANYAG_CSOMAGOLAS", "műanyag csomagolás", "EGYEB"));
            self.ntak_alkategoriak.push(new NTAKAlKategoriaHelper("KEDVEZMENY", "kedvezmény", "EGYEB"));
        },
        loadTortaKategoriak: function (): void {
            var self: any = this;

            self.torta_kategoriak = new Array<TortaArazasKategoriaHelper>();

            self.torta_kategoriak.push(new TortaArazasKategoriaHelper("I", "I. kategoria"));
            self.torta_kategoriak.push(new TortaArazasKategoriaHelper("II", "II. kategoria"));
            self.torta_kategoriak.push(new TortaArazasKategoriaHelper("III", "III. kategoria"));
            self.torta_kategoriak.push(new TortaArazasKategoriaHelper("IV", "IV. kategoria"));
            self.torta_kategoriak.push(new TortaArazasKategoriaHelper("V", "V. kategoria"));
            self.torta_kategoriak.push(new TortaArazasKategoriaHelper("VI", "VI. kategoria"));
            self.torta_kategoriak.push(new TortaArazasKategoriaHelper("VII", "VII. kategoria"));
            //self.torta_kategoriak.push(new TortaArazasKategoriaHelper("VIII", "VIII. kategoria"));
        },
        loadTortaArazasFromDb: function (): void {
            var self: any = this;

            self.isLoading = true;

            let lUrl: string = func.dataURLTortaArazasConst + "/" + self.logindata_session;

            $.getJSON(lUrl, function (ret: RestBaseResponse): void {
                let data = JSON.parse(ret.data);

                self.normalTortaArak = data.normalTortaArak.map((item: any) =>
                    new NormalTortaArazas(item.kategoria, item.szeletar, item.nyolcSzeletes)
                );
            
                self.burkoltTortaArak = data.burkoltTortaArak.map((item: any) => {
                    let diszites = item.kod.split("-")[1];
                    return new BurkoltTortaArazas(item.kategoria, diszites, item.szeletar, item.nyolcSzeletes);
                });

                self.isLoading = false;
            }).fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error loading data: " + textStatus, errorThrown);
                self.isLoading = false;
                Swal.fire({
                    title: "Hiba!",
                    text: "A tortaárak betöltése nem sikerült. Kérjük, próbálja meg később!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                    }
                });
            });
        },
        loadTortaArazas: function (): void {
            var self: any = this;

            self.normalTortaArak = new Array<NormalTortaArazas>();
            self.burkoltTortaArak = new Array<BurkoltTortaArazas>() ;

            self.normalTortaArak.push(new NormalTortaArazas("I", 700));
            self.normalTortaArak.push(new NormalTortaArazas("II", 780));
            self.normalTortaArak.push(new NormalTortaArazas("III", 850));
            self.normalTortaArak.push(new NormalTortaArazas("IV", 1020));
            self.normalTortaArak.push(new NormalTortaArazas("V", 1050));
            self.normalTortaArak.push(new NormalTortaArazas("VI", 1100));
            self.normalTortaArak.push(new NormalTortaArazas("VII", 1320)); 


            self.burkoltTortaArak.push(new BurkoltTortaArazas("I", "EGY", 1050));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("I", "KUL", 1480));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("I", "EXT", 1700));

            self.burkoltTortaArak.push(new BurkoltTortaArazas("II", "EGY", 1150));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("II", "KUL", 1600));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("II", "EXT", 1950));

            self.burkoltTortaArak.push(new BurkoltTortaArazas("III", "EGY", 1260));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("III", "KUL", 1700));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("III", "EXT", 2060));

            self.burkoltTortaArak.push(new BurkoltTortaArazas("IV", "EGY", 1430));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("IV", "KUL", 1810));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("IV", "EXT", 2180));

            self.burkoltTortaArak.push(new BurkoltTortaArazas("V", "EGY", 1490));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("V", "KUL", 1920));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("V", "EXT", 2250));

            self.burkoltTortaArak.push(new BurkoltTortaArazas("VI", "EGY", 0));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("VI", "KUL", 0));
            self.burkoltTortaArak.push(new BurkoltTortaArazas("VI", "EXT", 0));
        },
        loadExcelData: function (): void {
            var self: any = this;  

            self.excel_data = self.napiForgalomLista;
        },
        loadExcelColumns: function (): void {
            var self: any = this;

            self.excel_columns = [
                {
                    label: "ID",
                    field: "id",
                },
                {
                    label: "Tipus",
                    field: "tipus",
                    dataFormat: ""
                },
                {
                    label: "Dátum",
                    field: "datum",
                },
                {
                    label: "Helyszín",
                    field: "helyszin",
                },
                {
                    label: "Termek",
                    field: "name",
                },
                {
                    label: "Egységár (Ft)",
                    field: "price"
                },
                {
                    label: "Mennyiség",
                    field: "mennyiseg"
                },
                {
                    label: "Fogyás",
                    field: "fogyasMenny"
                },
                {
                    label: "Előleg (Ft)",
                    field: "eloleg"
                },
                {
                    label: "Bevétel (Ft)",
                    field: "Bevetel"
                }
            ];
            
        },
        syncTortaRendelesObjKiegArray: function (kiegeszitoTermek: any, kiegeszitoMenny:Number, isEmelet: boolean = false): void {
            var self: any = this;
            let found: boolean = false;

            if(isEmelet){
                if(self.tortaRendelesEmeletObj) {
                    if(self.tortaRendelesEmeletObj.kiegeszitok){
                        for (var i:number = 0; i < self.tortaRendelesEmeletObj.kiegeszitok.length; i++) {
                            if(self.tortaRendelesEmeletObj.kiegeszitok[i].product_id === kiegeszitoTermek.product_id) {
                                self.tortaRendelesEmeletObj.kiegeszitok[i].menny = kiegeszitoMenny;
                                found = true;
                                break;
                            }
                        }
                    }

                    if(!found) {
                        if(!self.tortaRendelesEmeletObj.kiegeszitok){
                            self.tortaRendelesEmeletObj.kiegeszitok = [];
                        }

                        self.tortaRendelesEmeletObj.kiegeszitok.push({product_id: kiegeszitoTermek.product_id,
                                                                menny: kiegeszitoMenny,
                                                                ar: kiegeszitoTermek.ar});
                    }

                }
            }else{
                if(self.tortaRendelesObj) {
                    if(self.tortaRendelesObj.kiegeszitok){
                        for (var i:number = 0; i < self.tortaRendelesObj.kiegeszitok.length; i++) {
                            if(self.tortaRendelesObj.kiegeszitok[i].product_id === kiegeszitoTermek.product_id) {
                                self.tortaRendelesObj.kiegeszitok[i].menny = kiegeszitoMenny;
                                found = true;
                                break;
                            }
                        }
                    }

                    if(!found) {
                        if(!self.tortaRendelesObj.kiegeszitok){
                            self.tortaRendelesObj.kiegeszitok = [];
                        }

                        self.tortaRendelesObj.kiegeszitok.push({product_id: kiegeszitoTermek.product_id,
                                                                menny: kiegeszitoMenny,
                                                                ar: kiegeszitoTermek.ar});                        
                    }

                }
            }

        },
        gettortaKiegeszitok: function (): void {
            var self: any = this;

            //var par:string  = "Kategoria=10"; // Torta kiegészítők
            // let lUrl: string = func.dataURLTermekListConst + "/" + par + "/" + self.logindata_session;
            var par: number = 0;
            if(self.tortaRendelesObj.ptr_id > 0) {
                par = self.tortaRendelesObj.ptr_id;
            }

            let lUrl: string = func.dataURLLTortaKiegListConst + "/" + par + "/" + self.logindata_session;

            self.isLoading = true;

            $.getJSON(lUrl, function (retTermekek: RestBaseResponse): void {

                self.tortakiegeszitok = JSON.parse(retTermekek.data);
                self.isLoading = false;

                /*self.tortakiegeszitok_seged_menny = [];
                for(let i: number = 0; i<self.tortakiegeszitok.length; i++) {
                    for(let j: number = 0; j<self.tortaRendelesObj.kiegeszitok.length; j++) {
                        if(self.tortakiegeszitok[i].KESZLET_ID === self.tortaRendelesObj.kiegeszitok[j].product_id) {
                            self.tortakiegeszitok_seged_menny.push(self.tortaRendelesObj.kiegeszitok[j].menny);
                        }
                    }
                }*/

            });

        },
        getTortakList: function (tortaKategoria: string = ""): void {
            var self: any = this;

            var par: string  = "Kategoria=1"; // Alkalmi torták

            let lUrl: string = "";
            var par2: string = "";

            if(tortaKategoria){
                par2 =  "&tortaKategoria=" + tortaKategoria;
            }

            lUrl = func.dataURLTermekListConst + "/" + par + par2 + "/" + self.logindata_session;
            self.isLoading = true;

            $.getJSON(lUrl, function (retTermekek: RestBaseResponse): void {
                if(tortaKategoria){                    
                    let termekekTemp: Array<Termek> = JSON.parse(retTermekek.data);
                    self.termekek = [];
                    if(termekekTemp){
                        for(let i=0; i<termekekTemp.length; i++){
                            if(termekekTemp[i].isTortaKategoria === tortaKategoria){
                                self.termekek.push(termekekTemp[i]);            
                            }        
                        }
                    }
                }else{
                    self.termekek = JSON.parse(retTermekek.data);
                }

                self.isLoading = false;
            });
        },
        setSzeletAr: function (): void {
            var self: any = this;

            let szeletar: number = 0;

            if(self.tortaRendelesObj) {
                if(self.tortaRendelesObj.product_id > 0) {
                    for (var i:number = 0; i < self.termekek.length; i++) {
                        if (self.termekek[i].id === self.tortaRendelesObj.product_id) {
                            if(self.termekek[i].isTortaSzeletar) { // ide szeletar kell majd!!!
                                self.tortaRendelesObj.szeletar = self.termekek[i].isTortaSzeletar;
                                break;
                            }
                        }
                    }
                }
            }
        },
        addToCukrasz: function(penztarItem: CashOut): void {
            let self: any = this;

            var saveRecArray: any = [];
            saveRecArray.push({MFID: penztarItem.mfid, cukrasznak: 1});     
            
            let lUrl: string = func.dataURLSaveOrderStatuszConst + "/" + self.logindata_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    //self.changeModul(9);
                    penztarItem.cukrasznak = 1;
                },
            "json");          

        },
        showOutDialogCheck: function(penztarItem: CashOut): boolean {
            let self: any = this;

            let error: boolean = false;

            for(let i: number=0; i <= penztarItem.items.length-1; i++) {
                if(!penztarItem.items[i].afamertek || penztarItem.items[i].afamertek == 0){
                    error = true;
                    break;
                }
            }

            return error;
        },
        showOutDialogForElorendeles: function(penztarItem: CashOut): void {
            let self: any = this;

            //self.giveOutObj = new GiveOut();
            self.penztarMode = "ELORENDELES";

            self.partnerSearchTxt = "";
            self.visiblePartnerKedvezmenyCimkeE = false;

            self.showModalOut = true;

            // általános kereső config
            let lUrl2: string = func.dataURLPartnerAddressListConst + "/" + self.ls_my_session;

            $.getJSON(lUrl2,
                function (retLogin: RestBaseResponse): void {

                    let dt2: any = JSON.parse(retLogin.data) as Array<PartnerForTypeHead>;

                    var $inputPartnerSearch: any = $("#PartnerSearch");
                    $inputPartnerSearch.typeahead({
                        source: dt2,
                        autoSelect: false
                    });

                    $inputPartnerSearch.change(function(): void {
                        var current: any = $inputPartnerSearch.typeahead("getActive");

                        if (current) {
                            // some item from your model is active!
                            if (current.name === $inputPartnerSearch.val()) {

                                if(current.id > 0) {
                                    $.getJSON(func.dataURLPartnerGetConst + "/" + current.id + "/" + self.ls_my_session,
                                        function (ret: RestBaseResponse): void {
                                            
                                            let lPartner: any = JSON.parse(ret.data) as Array<Partner>;

                                            self.giveOutObj.partner_id = current.id;
                                            self.giveOutObj.name = lPartner.Neve;
                                            self.giveOutObj.irszam = lPartner.Irszam;
                                            self.giveOutObj.city = lPartner.Varos;
                                            self.giveOutObj.address = lPartner.Cim;
                                            self.giveOutObj.telefon = lPartner.Telefon;
                                            self.giveOutObj.email = lPartner.Email;
                                            self.giveOutObj.adoszam = lPartner.Adoszam;

                                            self.ElorendelesObj.partner.partner_id = current.id;
                                            self.ElorendelesObj.partner.Neve = lPartner.Neve;
                                            self.ElorendelesObj.partner.Varos = lPartner.Varos;
                                            self.ElorendelesObj.partner.Cim = lPartner.Cim;
                                            self.ElorendelesObj.partner.Telefon = lPartner.Telefon;
                                            self.ElorendelesObj.partner.Email = lPartner.Email;
                                            self.ElorendelesObj.partner.Adoszam = lPartner.Adoszam;

                                            //kedvezmény vizsgálat második verzióban
                                            self.getBonusForElorendeles();

                                        });
                                }
                                // this means the exact match is found. Use toLowerCase() if you want case insensitive match.
                            } else {
                                self.giveOutObj.partner_id = 0;
                                self.giveOutObj.name = $inputPartnerSearch.val();
                                self.giveOutObj.irszam = "";
                                self.giveOutObj.city = "";
                                self.giveOutObj.address = "";
                                self.giveOutObj.telefon = "";
                                self.giveOutObj.email = "";
                                self.giveOutObj.adoszam = "";

                                self.ElorendelesObj.partner.partner_id = 0;
                                self.ElorendelesObj.partner.Neve = "";
                                self.ElorendelesObj.partner.Varos = "";
                                self.ElorendelesObj.partner.Cim = "";
                                self.ElorendelesObj.partner.Telefon = "";
                                self.ElorendelesObj.partner.Email = "";
                                self.ElorendelesObj.partner.Adoszam = "";
                                self.ElorendelesObj.partner.bonus = 0;

                                self.visiblePartnerKedvezmenyCimkeE = false;
                            }
                        } else {
                            console.log("33");
                            // nothing is active so it is a new value (or maybe empty value)
                        }

                    });

            }
            );
        },
        getBonusForElorendeles: function(): void {
            var self: any = this;

            if(self.giveOutObj && self.giveOutObj.email){
                let lUrlB: string = func.dataURLUserBonusGetConst + "/" + self.ls_my_session;
                var saveRecArray: any = [];
                saveRecArray.push({email:  self.giveOutObj.email});     

                $.post(
                    lUrlB,
                    {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.ElorendelesObj.partner.bonus = Number(response.data);
                        self.visiblePartnerKedvezmenyCimkeE = (self.ElorendelesObj.partner.bonus > 0);      
                        $('#visiblePartnerKedvezmenyCimkeE').prop('title', 'Összes felhasználható egyenleg: ' + response.data + ' Ft');                                             
                    },
                "json");             
            }
        },
        setPenztarFromCukrasz: function(cukraszItem: CukraszObj): void {
            let self: any = this;

            self.isLoading = true;
            let lURL:string = func.dataURLLTortaRendelesCheckInPenztarConst + "/" + self.logindata_session + "/" + cukraszItem.id + "/" + cukraszItem.id;
            let cnt: Number = 0;

            $.getJSON(lURL, function (ret: RestBaseResponse):void {                
                if(ret){
                    cnt = Number(ret.data);
                    if(cnt == 0){

                        var savePenztarArray: any = [];
                        savePenztarArray.push({penztar_id: cukraszItem.id,
                                            KESZLET_ID: 0,
                                            Azonosito: '',
                                            mennyiseg: 1,
                                            price: cukraszItem.vegosszeg_reszekkel,
                                            tortarendeles: 1,
                                            tortarendeles_penztar_id: cukraszItem.id, // ???
                                            afamertek: 27                                                                     
                                            });

                        $.ajax({
                            type: "POST",
                            url: func.dataURLPostConst + "/" + self.ls_my_session,
                            crossDomain: true,
                            data:
                            {
                                "datastream": JSON.stringify(savePenztarArray),
                                "session_id": self.logindata_session
                            },
                            success: function (data: any, status: any, jqXHR: any): void {
        
                                $.getJSON(func.dataURLPenztarViewConst  + cukraszItem.id + "/" + self.ls_my_session, function (penztarData: RestBaseResponse): void {
                                    self.penztarE = [];
                                    self.penztarE = JSON.parse(penztarData.data);
                                });
                                        
                                self.changeModul(13);
                                self.penztarFilterStr = cukraszItem.id;    
                            },
                            beforeSend: function (xhr: any): void {
                                xhr.setRequestHeader("Authorization", "Basic " + btoa("aaa" + ":" + "a"));
                                self.isLoading = false;
                            },
                            error: function (jqXHR: any, status: any): void {
                                alert("fail" + status);
                                self.isLoading = false;
                            }
                        });
                    }                    
                }
                self.isLoading = false;                
            });        


        },
        showPenztarFromCukrasz: function(cukraszItem: CukraszObj): void {
            let self: any = this;

            self.isShowPenztarTetelek = true;
            self.isShowPenztarWebes = true;
            self.refreshPenztar(true);
            self.changeModul(0);
            self.penztarFilterStr = cukraszItem.id;            

        },
        syncPartnerForshowOutDialog: function(penztarItem: CashOut): void {
            let self: any = this;

            var saveRecArray: any = [];
            //saveRecArray.push({nev: penztarItem.nev, irsz: penztarItem.irsz, city: penztarItem.city, address: penztarItem.address, adoszam: penztarItem.adoszam});
            saveRecArray.push({mfid: penztarItem.mfid});

            self.isLoading = true;

            let lUrl: string = func.dataURLSyncPartnerFromWebshopConst + "/" + self.ls_my_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    self.showOutDialog(penztarItem, response.specdata /* azonosított/létrehozott partner_id */);
                },
            "json"); 

        },
        showOutDialog: function(penztarItem: CashOut, partner_id:number=0): void {
            let self: any = this;

            let err: boolean = false;

            self.penztarMode = "";
            
            err = self.showOutDialogCheck(penztarItem);

            if(err == false){
                self.giveOutObj = new GiveOut();

                self.showModalOut = true;
                self.SelectedPenztarItem = penztarItem;

                self.giveOutObj.id = penztarItem.id;
                self.giveOutObj.items = penztarItem.items;
                self.giveOutObj.szum = penztarItem.szum;
                self.giveOutObj.bonus = penztarItem.bonus;
                self.giveOutObj.fizmod = 0;     

                if(penztarItem.mfid){
                    self.giveOutObj.mfid = penztarItem.mfid; 
                }else{
                    self.giveOutObj.mfid = 0;
                }

                if(penztarItem.partner_id > 0){
                    self.giveOutObj.partner_id = penztarItem.partner_id;
                    self.giveOutObj.name = penztarItem.partnev;
                    self.giveOutObj.irszam = penztarItem.partirsz;
                    self.giveOutObj.city = penztarItem.partcity;
                    self.giveOutObj.address = penztarItem.partaddress;
                    self.giveOutObj.telefon = penztarItem.parttel;
                    self.giveOutObj.email = penztarItem.partemail;
                    self.giveOutObj.adoszam = penztarItem.partadoszam;
                }else{
                    if(penztarItem.mfid > 0 && partner_id > 0){
                        self.giveOutObj.partner_id = partner_id; 
                        self.giveOutObj.name = penztarItem.nev;
                        self.giveOutObj.irszam = penztarItem.irsz;
                        self.giveOutObj.city = penztarItem.city;
                        self.giveOutObj.address = penztarItem.address;
                        self.giveOutObj.telefon = penztarItem.telefon; 
                        self.giveOutObj.email = penztarItem.username;
                        self.giveOutObj.adoszam = penztarItem.adoszam;
                    }
                }

                console.log("giveOutObj", JSON.stringify(self.giveOutObj)  );



                // általános kereső config
                let lUrl2: string = func.dataURLPartnerAddressListConst + "/" + self.ls_my_session;

                $.getJSON(lUrl2,
                    function (retLogin: RestBaseResponse): void {

                        let dt2: any = JSON.parse(retLogin.data) as Array<PartnerForTypeHead>;

                        var $inputPartnerSearch: any = $("#PartnerSearch");
                        $inputPartnerSearch.typeahead({
                            source: dt2,
                            autoSelect: false
                        });

                        $inputPartnerSearch.change(function(): void {
                            var current: any = $inputPartnerSearch.typeahead("getActive");

                            if (current) {
                                // some item from your model is active!
                                if (current.name === $inputPartnerSearch.val()) {

                                    if(current.id > 0) {
                                        $.getJSON(func.dataURLPartnerGetConst + "/" + current.id + "/" + self.ls_my_session,
                                            function (ret: RestBaseResponse): void {
                                                
                                                let lPartner: any = JSON.parse(ret.data) as Array<Partner>;

                                                self.giveOutObj.partner_id = current.id;
                                                self.giveOutObj.name = lPartner.Neve;
                                                self.giveOutObj.irszam = lPartner.Irszam;
                                                self.giveOutObj.city = lPartner.Varos;
                                                self.giveOutObj.address = lPartner.Cim;
                                                self.giveOutObj.telefon = lPartner.Telefon;
                                                self.giveOutObj.email = lPartner.Email;
                                                self.giveOutObj.adoszam = lPartner.Adoszam;
                                                self.partnerSearchTxt = "";

                                            });
                                    }
                                    // this means the exact match is found. Use toLowerCase() if you want case insensitive match.
                                } else {
                                    self.giveOutObj.partner_id = 0;
                                    self.giveOutObj.name = $inputPartnerSearch.val();
                                    self.giveOutObj.irszam = "";
                                    self.giveOutObj.city = "";
                                    self.giveOutObj.address = "";
                                    self.giveOutObj.telefon = "";
                                    self.giveOutObj.email = "";
                                    self.giveOutObj.adoszam = "";
                                }
                            } else {
                                console.log("33");
                                // nothing is active so it is a new value (or maybe empty value)
                            }

                        });

                }
                );
            }else{
                Swal.fire({
                    title: "Hiba!",
                    text: "Nincs minden Áfa mérték beállítva!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });                  
            }

        },
        penztarFromFoodOut: function(): void {
            let self: any = this;
            self.changeModul(self.elorendelesBack);
            if (self.isFoodOutHeader === true) {
                self.refreshPenztar(true);
            }
        },
        showElorendelesDetail: function(): void {
            let self: any = this;

            self.showOutDialogForElorendeles();
        },     
        penztarToFoodOut: function(penztarMode: string = "", backToModule: Number = 0): void {
            let self: any = this;
            
            self.PercentValue = 0;
            self.penztarMode = penztarMode;

            self.changeModul(3);
            self.isFoodOutHeader = true;    

            self.ElorendelesObj = new Elorendeles();        
            self.giveOutObj = new GiveOut();

            self.elorendelesBack = backToModule;

            self.buttonToCashoutDisabled = false;
           
        },
        login: function(): void {
            /* login magyarázati pont
                a webapp mobil kereten kívüli futtatása során
                a webapp saját login ablakában kell belépni!
            */
            let self: any = this;
            let lUrl: string = func.dataURLLogin + "/" + self.username + "/" + self.password + "/" + self.ls_my_session;
            self.isLoading = true;
            $.getJSON(lUrl,
                      function (retLogin: RestBaseResponse): void {
                        self.logindata_session = retLogin.data;
                        if(retLogin.data === "ERRLOGIN") {
                            Swal.fire({
                                title: "Hiba!",
                                text: retLogin.message,
                                icon: "error",
                                customClass: {
                                    container: 'my-swal'
                                  }                                                
                              });  
                        } else {
                            localStorage.setItem("my_session", self.logindata_session);
                            self.loadPenztar();
                            self.loadTortaArazasFromDb();
                            self.loadKapcsoltTermekek();
                            
                            if(self.logindata_session && self.logindata_session.length > 0){
                                $.getJSON(func.dataURLLoggedUserName  + "/" + self.logindata_session, function (ret: RestBaseResponse): void {
                                    self.userObject = ret.data;                                    
                                });
                            }

                            self.changeModul(0);
                        }
                    }
            );

        },
        addKoretData: function(koret: Termek): void {
            let self: any = this;

            self.selectedFoodOutItem.mealName += " , köret: " + koret.name;
            self.selectedFoodOutItem.plusKoret.push(koret);
            self.addDataToFoodOut(koret);
            self.showModalKoret = false;
        },
        showKoretModal: function(item: FoodOutItem): void {
            let self: any = this;
            let eng: boolean;

            eng = !item.plusKoret[0];

            if(eng) {
                self.switchOutIn(item.type);
                self.selectedFoodOutItem = item;

                let lURL:string = func.dataURLKoretConst + "/Kategoria=" + "3" + "/" + self.logindata_session;

                $.getJSON(lURL, function (retKatKor: RestBaseResponse):void {
                    self.koretek = JSON.parse(retKatKor.data);
                    self.isLoading = false;
                    self.showModalKoret = true;
                });
            } else {
                bootbox.alert({
                    message: "Már van köret!" ,
                    size: "small"
                });
            }
        },
        showPercentModalExt: function(): void {
            var self: any = this;
            
            //self.PercentValue = 0;
            self.selectedFoodOutItem = [];
            //self.selectedFoodOutItem = item;

            self.showModalPercent = true;

            setTimeout(function (): void {
                $("#percent").focus();
                $("#percent").select();
            }, 500);                
        },        
        showPercentModal: function(item: FoodOutItem): void {
            var self: any = this;
            
            self.PercentValue = 0;
            self.selectedFoodOutItem = [];
            self.selectedFoodOutItem = item;

            self.showModalPercent = true;

            setTimeout(function (): void {
                $("#percent").focus();
                $("#percent").select();
            }, 500);                
        },
        addPercentToItem: function(item: FoodOutItem): void {
            var self: any = this;

            if(Number(self.PercentValue) <= 100){
                let kedvMertek: number = self.PercentValue;
                let kedv: number = ((item.price / 100 * kedvMertek) / 10) * 10;  //Math.round((item.price / 100 * kedvMertek) / 10) * 10;                

                item.kedv = kedvMertek;
                item.price = item.price - kedv;
                item.ossz = item.price * item.menny;
                item.mealName = item.mealName + " - (" + kedvMertek+ " %)";
                this.totalAmount = sumTotalAmount(this.cashoutlist, this.cashoutlist2);

                self.showModalPercent = false;
            }else{                
                Swal.fire({
                    title: "Hiba!",
                    text: "100%-nál nagyobb kedvezmény nem adható meg!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });                
            }
        },
        pluszFoodOutItemMenny: function(item: FoodOutItem): void {
            item.menny += 1;
            item.ossz = item.price * item.menny;
            this.totalAmount += Number(item.price);

            //TODO: lekezelni a kapcsolt termékeket is, ha van
            //1. ha van kapcsolt termék, akkor annak a mennyiségét is növelni kell
            //2. ha ez már a kapcsolt termék, akkor a kapcsolt termék mennyiségét nem szabad növelni, csak a fő termékét

            if(item.kapcsolt_KESZLET_ID && item.kapcsolt_KESZLET_ID > 0 && !item.isKapcsoltTermek) {                                

                var AktList:Array<FoodOutItem> = [];

                // keresem a kapcsolt terméket a cashoutlist-ben
                if(item.type === "IN") {
                    AktList = this.cashoutlist;                    
                } else if(item.type === "OUT") {
                    AktList = this.cashoutlist2;                    
                }

                for(let i: number = 0; i < AktList.length; i++) {
                    let kapcsoltItem: FoodOutItem = AktList[i];
                    if(kapcsoltItem.id === item.kapcsolt_KESZLET_ID && kapcsoltItem.isKapcsoltTermek) {                        
                        kapcsoltItem.menny += 1;
                        kapcsoltItem.ossz = kapcsoltItem.price * kapcsoltItem.menny;
                        this.totalAmount += Number(kapcsoltItem.price);
                        break;
                    }
                }
            }            
        },
        minuszFoodOutItemMenny: function(item: FoodOutItem): void {

            var AktList:Array<FoodOutItem> = [];
            var AktList2:Array<FoodOutItem> = [];


            if(item.menny === 1) {
                if(item.type === "IN") {
                    AktList = this.cashoutlist;
                    this.totalCountIN -= 1;
                } else if(item.type === "OUT") {
                    AktList = this.cashoutlist2;
                    this.totalCountOUT -= 1;
                }

                AktList.splice(AktList.indexOf(item), 1);
            } else {
                item.menny -= 1;
            }

            if(item.menny>0){
                item.ossz = item.price * item.menny;
            }

            this.totalAmount -= Number(item.price);

            //TODO: lekezelni a kapcsolt termékeket is, ha van
            //1. ha van kapcsolt termék, akkor annak a mennyiségét is csökkenteni kell
            //2. ha ez már a kapcsolt termék, akkor a kapcsolt termék mennyiségét nem szabad csökkenteni, csak a fő termékét
            if(item.kapcsolt_KESZLET_ID && item.kapcsolt_KESZLET_ID > 0 && !item.isKapcsoltTermek) {

                 if(item.type === "IN") {
                    AktList2 = this.cashoutlist;                    
                } else if(item.type === "OUT") {
                    AktList2 = this.cashoutlist2;                    
                }

                for(let i: number = 0; i < AktList2.length; i++) {
                    let kapcsoltItem: FoodOutItem = AktList2[i];
                    
                    if(kapcsoltItem.id === item.kapcsolt_KESZLET_ID && kapcsoltItem.isKapcsoltTermek) {                         
                        if(kapcsoltItem.menny === 1) {
                            AktList.splice(AktList.indexOf(kapcsoltItem), 1);
                            this.totalAmount -= Number(kapcsoltItem.price);
                        } else {                                   
                            kapcsoltItem.menny -= 1;
                            kapcsoltItem.ossz = kapcsoltItem.price * kapcsoltItem.menny;
                            this.totalAmount -= Number(kapcsoltItem.price);
                            break;
                        }
                    }
                }                

            }            

        },
        fullKedvezmenyTeszt: function(): void {
            var self: any = this;

            let osszlist: Array<FoodOutItem> = this.cashoutlist.concat(this.cashoutlist2);

            //kedvezmény lekezelése
            if(Number(self.PercentValue) <= 100){
                let kedvMertek =  self.PercentValue;

                for(let i: number=0; i <= osszlist.length-1; i++) {
                    let item: FoodOutItem = osszlist[i];
                    let kedv: number = ((item.price / 100 * kedvMertek) / 10) * 10;  //Math.round((item.price / 100 * kedvMertek) / 10) * 10;                

                    item.kedv = kedvMertek;
                    item.price = item.price - kedv;
                    item.ossz = item.price * item.menny;
                    item.mealName = item.mealName + " - (" + kedvMertek+ " %)";                    
                }                

                this.totalAmount = sumTotalAmount(this.cashoutlist, this.cashoutlist2);
            }               
        },
        toCashout: function(): void {
            let self: any = this; 

            self.isLoading = true;
            self.buttonToCashoutDisabled = true;

            let osszlist: Array<FoodOutItem> = this.cashoutlist.concat(this.cashoutlist2);

            let elorendelesPartnerId: number = 0;
            let elorendelesDatum: string = "";
            let elorendelesAtvetelHelye: string = "";
            let elorendelesIdo: string = "";
            let elorendelesEloleg: string = "";
            let megrendelesAzonosito: string = "";
            let elorendelesNote: string = "";
            let elorendelesPartnerNev: string = "";
            let elorendelesPartnerIrszam: string = "";
            let elorendelesPartnerCity: string = "";
            let elorendelesPartnerAddress: string = "";
            let elorendelesPartnerTel: string = "";
            let elorendelesPartnerEmail: string = "";    
            let elorendelesPartnerAdoszam: string = "";    
            
            let elorendelesKiszallitas: number = 0;
            let elorendelesKiszallitasTelepules: string = "";
            let elorendelesKiszallitasCim: string = "";
            let felirt_bonus: number = 0;
            let used_bonus: number = 0;
            let vegosszeg: number = 0;
            
            if(self.ElorendelesObj){
                if(self.ElorendelesObj.partner && self.ElorendelesObj.partner.partner_id && self.ElorendelesObj.partner.partner_id > 0){
                    elorendelesPartnerId = self.ElorendelesObj.partner.partner_id;
                    
                    osszlist.forEach(element => {
                        vegosszeg = vegosszeg + element.ossz;
                    });

                    felirt_bonus = vegosszeg / 100 * 5;
                }

                if(self.ElorendelesObj.atvetel_datum){
                    elorendelesDatum = Moment(self.ElorendelesObj.atvetel_datum).format("YYYY-MM-DD");
                }

                if(self.ElorendelesObj.atvetel_helye){
                    elorendelesAtvetelHelye = self.ElorendelesObj.atvetel_helye;
                }

                if(self.ElorendelesObj.atvetel_datum){
                    elorendelesIdo = self.ElorendelesObj.atvetel_ido;
                }

                if(self.ElorendelesObj.eloleg){
                    elorendelesEloleg = self.ElorendelesObj.eloleg;
                }           
                
                if(self.ElorendelesObj.megrendeles_azonosito){
                    megrendelesAzonosito = self.ElorendelesObj.megrendeles_azonosito;
                }                     

                if(self.ElorendelesObj.elorendeles_note){
                    elorendelesNote = self.ElorendelesObj.elorendeles_note;
                }       
                
                if(self.ElorendelesObj.kiszallitas){
                    elorendelesKiszallitas = self.ElorendelesObj.kiszallitas;
                } 

                if(self.ElorendelesObj.szalltelepules){
                    elorendelesKiszallitasTelepules = self.ElorendelesObj.szalltelepules;
                } 

                if(self.ElorendelesObj.szallcim){
                    elorendelesKiszallitasCim = self.ElorendelesObj.szallcim;
                }

                if(self.ElorendelesObj.bonus){
                    used_bonus = self.ElorendelesObj.bonus;
                } 
                
                //Partneradatok
                if(self.giveOutObj){
                    elorendelesPartnerNev = self.giveOutObj.name;
                    elorendelesPartnerIrszam = self.giveOutObj.irszam;
                    elorendelesPartnerCity = self.giveOutObj.city;
                    elorendelesPartnerAddress = self.giveOutObj.address;
                    elorendelesPartnerTel = self.giveOutObj.telefon;
                    elorendelesPartnerEmail = self.giveOutObj.email;    
                    elorendelesPartnerAdoszam = self.giveOutObj.adoszam;          
                }     

            }
            var elorendelesHibak: string = "";

            if(self.penztarMode == "ELORENDELES" && elorendelesAtvetelHelye.length == 0){                
                elorendelesHibak += "<li>Előrendeléshez ki kell választania átvételi helyszínt!</li>";
            }

            if(self.penztarMode == "ELORENDELES" && elorendelesPartnerId == 0 && elorendelesPartnerNev.length == 0){
                elorendelesHibak += "<li>Előrendeléshez ki kell választani egy partnert!</li>";
            }          
            
            if(self.penztarMode == "ELORENDELES" && elorendelesIdo.length == 0){
                elorendelesHibak += "<li>Előrendeléshez meg kell adnia átvételi időt!</li>";
            }              
            
            if(self.penztarMode == "ELORENDELES" && elorendelesKiszallitas > 0 && (elorendelesKiszallitasTelepules.length == 0 || elorendelesKiszallitasCim.length == 0)){
                elorendelesHibak += "<li>Kiszállítás esetén a kiszállítás pontos címének megadása kötelező!</li>";
            }

            if(self.ElorendelesObj.partner.bonus > 0 && (Number(self.ElorendelesObj.bonus) > Number(self.ElorendelesObj.partner.bonus))){
                elorendelesHibak += "<li>Túl nagy bónusz felhasználás, ekkora összeg nem használható fel!</li>";
            }               

            if(elorendelesHibak && elorendelesHibak.length > 0){
                elorendelesHibak = "<ul style='color: red; text-align: left;'>" + elorendelesHibak + "</ul>";

                Swal.fire({
                    title: "Hiba!",
                    html: elorendelesHibak,
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });     
                  
                  self.isLoading = false;
                  self.buttonToCashoutDisabled = false;
                  return;                    
            }

            if(!osszlist || (osszlist && osszlist.length == 0)){
                Swal.fire({
                    title: "Hiba!",
                    text: "Nincs felvéve termék!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });  

                self.isLoading = false;
                self.buttonToCashoutDisabled = false;
                return;
            }else{
                /*var vanenullas: boolean = false;
                osszlist.forEach(element => {
                   if(Number(element.price) == 0){
                        vanenullas = true;
                   } 
                });

                if(vanenullas){
                    alert("0-Ft-os termék nem adható ki!");
                    self.isLoading = false;
                    return;
                } */
            }

            //kedvezmény lekezelése
            if(Number(self.PercentValue) <= 100){
                let kedvMertek =  self.PercentValue;

                for(let i: number=0; i <= osszlist.length-1; i++) {
                    let item: FoodOutItem = osszlist[i];
                    let kedv: number = ((item.price / 100 * kedvMertek) / 10) * 10;  //Math.round((item.price / 100 * kedvMertek) / 10) * 10;                

                    item.kedv = kedvMertek;
                    item.price = item.price - kedv;
                    item.ossz = item.price * item.menny;
                    item.mealName = item.mealName + " - (" + kedvMertek+ " %)";
                }                

                this.totalAmount = sumTotalAmount(this.cashoutlist, this.cashoutlist2);
            }            

            $.ajax({
                type: "POST",
                url: func.dataURLPenztarPostConst,
                crossDomain: true,
                data:
                {
                    "datastream": JSON.stringify(osszlist),
                    "session_id": self.logindata_session,
                    "partner_id": elorendelesPartnerId,
                    "elorendeles_atveteldatum": elorendelesDatum,
                    "elorendeles_atvetelhely": elorendelesAtvetelHelye,
                    "elorendeles_atvetelido": elorendelesIdo,
                    "elorendeles_eloleg": elorendelesEloleg,
                    "megrendeles_azonosito": megrendelesAzonosito,
                    "elorendeles_note": elorendelesNote,
                    "partnev" : elorendelesPartnerNev,
                    "partirsz": elorendelesPartnerIrszam,
                    "partcity": elorendelesPartnerCity,
                    "partaddress": elorendelesPartnerAddress,
                    "parttel": elorendelesPartnerTel,
                    "partemail": elorendelesPartnerEmail,
                    "partadoszam": elorendelesPartnerAdoszam,
                    "elorendeles_kiszallitas": elorendelesKiszallitas,
                    "elorendeles_kiszallitastelepules": elorendelesKiszallitasTelepules,
                    "elorendeles_kiszallitascim": elorendelesKiszallitasCim,
                    "felirt_bonus": felirt_bonus,
                    "bonus": used_bonus,
                    "selejtezes": (self.penztarMode == 'SELEJTEZES') ? true : false
                },
                success: function (data:any, status:any, jqXHR:any): void {
                    self.totalCountIN = 0;
                    self.totalCountOUT = 0;
                    self.totalAmount = 0;
                    self.cashoutlist = [];
                    self.cashoutlist2 = [];
                    self.selOutType = "IN";

                    if(self.ElorendelesObj){
                        self.ElorendelesObj = new Elorendeles(); 
                    }

                    if(data && data.specdata){
                        self.refreshPenztar(true);
                        self.penztarFilterStr = data.specdata;
                    }

                    let dialog = bootbox.dialog({
                        title: "Adatfeldolgozás folyamatban",
                        message: '<p class="text-center mb-0"><i class="fas fa-spin fa-cog"></i> Kérem várjon, az adatok betöltése folyamatban van! </p>',
                        closeButton: true
                    });

                    $.getJSON(func.dataURLPenztarViewConst  + data.specdata + "/" + self.ls_my_session, function (penztarData: RestBaseResponse): void {                                               
                        let lPenztarArray: any = [];
                        
                        lPenztarArray = JSON.parse(penztarData.data) as CashOut;

                        let lPenztar: CashOut = new CashOut();
                        if(lPenztarArray){
                            lPenztar = lPenztarArray[0];
                        }

                        let message: string = "";
                        let title: string = "";

                        let atv: string = "";

                        if(lPenztar.elorendeles_atvetelhely == "VER"){
                            atv = "Veresegyház";
                        }else if(lPenztar.elorendeles_atvetelhely == "GOD"){
                            atv = "Gödöllő";
                        }

                        if(lPenztar.elorendeles_atveteldatum){
                            atv = atv + " " + lPenztar.elorendeles_atveteldatum.substring(0,10);
                        }                        

                        if(self.penztarMode == "ELORENDELES"){
                            message = " <i class='fas fa-check fa-5x' style='color: green'></i> <h2>Előrendelés felvétele sikeres ("+data.specdata+")!</h2>";
                        }else{
                            message = " <i class='fas fa-check fa-5x' style='color: green'></i> <h2>Felvétel sikeres!</h2>";
                        }
                            
                        message += "<table class='table'><tbody>";
    
                        if(self.penztarMode == "ELORENDELES"){
                            message += "<tr><th>Partner</th><td>" + lPenztar.partnev + " " +  lPenztar.partcity + " " + lPenztar.partaddress + "</td>";
                            message += "<tr><th>Kapcsolat</th><td>"+lPenztar.parttel + " " + lPenztar.partemail + "</td>";
                            message += "<tr><th>Átvétel </th><td>"+ atv + " " + lPenztar.elorendeles_atvetelido +  "</td>";
                        }

                        message += "<tr><th>Végösszeg</th><td>"+lPenztar.szum + " Ft (előleg: " +  lPenztar.elorendeles_eloleg +" Ft)"  +"</td>";
                        message += "<tr><th><u>Áfabontás</u></th><td></td>";
                        console.log(JSON.stringify(lPenztar.afabontas));
                        if(lPenztar.afabontas){
                            if(lPenztar.afabontas.afa_0 > 0){
                                message += "<tr><th>0%</th><td>" + lPenztar.afabontas.afa_0 + " Ft</td>";
                            }

                            if(lPenztar.afabontas.afa_5 > 0){
                                message += "<tr><th>5%</th><td>" + lPenztar.afabontas.afa_5 + " Ft</td>";
                            }

                            if(lPenztar.afabontas.afa_18 > 0){
                                message += "<tr><th>18%</th><td>" + lPenztar.afabontas.afa_18 + " Ft</td>";
                            }

                            if(lPenztar.afabontas.afa_27 > 0){
                                message += "<tr><th>27%</th><td>" + lPenztar.afabontas.afa_27 + " Ft</td>";
                            }
                        }
                        
                        if(self.penztarMode == "ELORENDELES"){
                            message += "<tr><th>Megjegyzés</th><td>"+lPenztar.elorendeles_note+"</td>";
                        }
          
                        let kiegstr: string = "";
                        var k: any = lPenztar.items;

                        let kieg: any = lPenztar.items;
                        if(kieg){
                            for(let i: number = 0; i<kieg.length; i++){
                                kiegstr += kieg[i]['name'] + " " + kieg[i]['menny'] + " db, ";
                            }
                        }

                        message += "<tr><th>Termékek</th><td>"+kiegstr+"</td>";

                        message += "</tbody></table>";                        
                            

                        setTimeout(function (): void {
                            bootbox.alert({
                                message: '<div style="max-height: 400px; overflow-y: auto;">' + message + '</div>',
                                buttons: {
                                    /*cancel: {
                                        label: '<i class="fa fa-print"></i> Nyomtat'
                                    },*/
                                    /*confirm: {
                                        className: 'btn-success',
                                        label: '<i class="fa fa-check"></i> OK'
                                    },
                                    cancel: {
                                        className: 'btn-danger',
                                        label: '<i class="fa fa-print"></i> Fizetés'
                                    }*/
                                },
                                callback: function (result: any) {                                    
                                    //if(result == false){   
                                        if(self.penztarMode == "ELORENDELES"){
                                            //előrendelés esetén csak akkor kérjük be a fizetési adatokat, 
                                            //- ha rendeléskor a teljes összeg kifizetésre kerül
                                            // vagy fizetett előleget
                                            if(Number(lPenztar.elorendeles_eloleg) == lPenztar.szum || Number(lPenztar.elorendeles_eloleg) > 0){
                                                if(Number(lPenztar.elorendeles_eloleg) > 0){
                                                    self.showPayDataDialog(lPenztar, false, true);
                                                }else{
                                                    self.showPayDataDialog(lPenztar);
                                                }
                                            }
                                        }else{
                                            if(self.penztarMode != 'SELEJTEZES'){
                                                self.showPayDataDialog(lPenztar);
                                            }
                                        }                                                                                        
                                    //}              
                                    self.changeModul(self.elorendelesBack); //vissza a pénztár képernyőre                      
                                                                            
                                }
                            });

                            dialog.modal('hide');


                        }, 1000);
    
                        self.isLoading = false;
    
                    });   

                },
                beforeSend: function (xhr:any): void {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa("aaa" + ":" + "a"));    
                    self.isLoading = false;
                },
                error: function (jqXHR:any, status:any): void {
                    alert("fail" + status);
                    self.isLoading = false;                    
                    self.buttonToCashoutDisabled = false;
                }
            });

        },
        penztarfilterClear: function(OutIn: string): void {
            var self:any = this;
            self.penztarFilterStr = "";
        },
        switchOutIn: function(OutIn: string): void {
            var self:any = this;
            self.selOutType = OutIn;
        },
        addDataToFoodOutFromTortarendeles: function(termek: Termek): void {
            let AktList: Array<FoodOutItem> = [];

            if(this.selOutType === "IN") {
                AktList = this.cashoutlist;
            } else if(this.selOutType === "OUT") {
                AktList = this.cashoutlist2;
            }

            let lFind:boolean = false;

            if(lFind === false) {
                if(this.selOutType === "IN") {
                    this.totalCountIN += 1;
                } else if(this.selOutType === "OUT") {
                    this.totalCountOUT += 1;
                }
                this.totalAmount += Number(termek.price);
                AktList.push(new FoodOutItem(this.selOutType,
                                         termek.id,
                                         termek.name,
                                         termek.price,
                                         termek.price,
                                         1,
                                         "E",
                                         false,
                                         false, 
                                         "",
                                         0,
                                         1, /* tortarendelés jelzése */
                                         0,
                                         0,
                                         termek.AfaMertek2));
            }

        },
        addDataToFoodOut: function(termek: Termek, kapcsoltTermekMod: boolean = false): void {
            let lFind:boolean = false;

            let AktList: Array<FoodOutItem> = [];

            if(this.selOutType === "IN") {
                AktList = this.cashoutlist;
            } else if(this.selOutType === "OUT") {
                AktList = this.cashoutlist2;
            }

            for (var i:number = 0; i < AktList.length; i++) {
                if (AktList[i].id === termek.id && AktList[i].adag === "E") {
                    AktList[i].menny += 1;
                    this.totalAmount += Number(termek.price);
                    AktList[i].ossz = termek.price * AktList[i].menny;
                    lFind = true;
                }
            }

            let AfaMertek: number = 0;

            if(lFind === false) {
                if(this.selOutType === "IN") {
                    this.totalCountIN += 1;
                    AfaMertek = termek.AfaMertek;
                } else if(this.selOutType === "OUT") {
                    this.totalCountOUT += 1;
                    AfaMertek = termek.AfaMertek2;
                }
                this.totalAmount += Number(termek.price);

                AktList.push(new FoodOutItem(this.selOutType,
                                         termek.id,
                                         termek.name,
                                         termek.price,
                                         termek.price,
                                         1,
                                         "E",
                                         termek.isPortion,
                                         termek.isKorettel,
                                         "",
                                         0,
                                         0,
                                         0,
                                         termek.price * 1,
                                         AfaMertek,
                                        termek.kapcsolt_KESZLET_ID,
                                        kapcsoltTermekMod));
            }

            if(termek.isMennyAut){                               
                var pItem: any;
                var tempItem: CashOutItem;

                //azonosítani kell a felvett tételt
                if(this.selOutType === "IN") {
                    //pItem = this.cashoutlist[this.cashoutlist.length - 1]; //utolsónak berakott

                    for (var i:number = 0; i <  this.cashoutlist.length; i++) {          
                        tempItem = this.cashoutlist[i];              
                        if (tempItem.id === termek.id){
                            pItem =  tempItem;
                            break;
                        }
                    }
                } else if(this.selOutType === "OUT") {
                    //pItem = this.cashoutlist2[this.cashoutlist2.length - 1]; //utolsónak berakott
                    for (var i:number = 0; i <  this.cashoutlist2.length; i++) {          
                        tempItem = this.cashoutlist2[i];              
                        if (tempItem.id === termek.id){
                            pItem =  tempItem;
                            break;
                        }
                    }                    
                }

                this.showNumPad('FOODOUT', pItem);
            }

            if(termek.kapcsolt_KESZLET_ID > 0){       
                
                let kapcsoltTermek: Termek = new Termek();
                

                for (var i:number = 0; i < this.kapcsoltTermekek.length; i++) {
                    if (this.kapcsoltTermekek[i].id === termek.kapcsolt_KESZLET_ID) {
                        kapcsoltTermek = this.kapcsoltTermekek[i];  
                        break;
                    }      
                }                

                this.addDataToFoodOut(kapcsoltTermek, true);                

            }
            
            this.searchTermekFilter = "";
            $("#searchTermekFilter").select();
        },
        refreshTermekKeszlet: function(kategoria_id: string): void {
            var self:  any = this;
            self.termekFilterKateg = kategoria_id;
            self.isLoading = true;

            self.changeModul(2);
        },
        deleteTermek: function(termek: Termek): void {
            var self: any = this;

            var saveRecArray: any = [];
            saveRecArray.push({id: termek.id, erv: "N"});

            self.isLoading = true;

            let lUrl: string = func.dataURLTermekModConst + "/" + self.logindata_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    self.changeModul(2);
                },
            "json");

        },
        setAtveveTR: function(id: Number, val: Number): void {
            var self: any = this;
            var saveRecArray: any = [];

            let lUrl: string = "";
            lUrl =  func.dataURLLTortaRendelesModConst + "/" + self.logindata_session;
            saveRecArray.push({id: id, atveve: val});

            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    self.openTortarendelesekList();
                },
            "json");

        },
        setAtveve: function(tr: any, val: Number): void {
            var self: any = this;

            var saveRecArray: any = [];

            let retList: any = [];
            let lPenztar: CashOut = new CashOut();
console.log("setAtveve tipus: " + tr);
            let lUrl: string = "";
            if(tr.tipus == "T"){
                lUrl =  func.dataURLLTortaRendelesModConst + "/" + self.logindata_session;
                saveRecArray.push({id: tr.id, atveve: val});
            }else if(tr.tipus == "W"){
                alert(tr.id);
                lUrl = func.dataURLSaveOrderStatuszConst + "/" + self.logindata_session;
                saveRecArray.push({MFID: tr.id, atveve: val});
            }else if(tr.tipus == "E"){
                lUrl = func.dataURLPenztarModConst + "/" + self.logindata_session;
                saveRecArray.push({id: tr.id, atveve: val});             
            }             

            if(tr.tipus == "T" || tr.tipus == "E" || tr.tipus == "W"){

                var viewURL: string = ""
                if(tr.tipus == "E"){
                    viewURL = func.dataURLPenztarViewConst;
                }else if(tr.tipus == "T"){
                    viewURL = func.dataURLTortaRendelesViewConst;
                }else if(tr.tipus == "W"){
                    viewURL = func.dataURLOrderGetConst + "/";
                }

                $.getJSON(viewURL  + tr.id + "/" + self.ls_my_session, function (penztarData: RestBaseResponse): void {

                    if(tr.tipus == "E"){
                        retList = JSON.parse(penztarData.data) as Array<CashOut>;
                        if(retList){
                            lPenztar = retList[0];
                        }
                    }else if(tr.tipus == "T"){
                        retList = JSON.parse(penztarData.data) as  Array<TortaRendeles>;                         
                        if(retList){
                            let tortarendelesObj:TortaRendeles = retList[0]; //át kell alakítani Cashoutá
                            lPenztar.id = tortarendelesObj.id; //penztar_id
                            if(tortarendelesObj.egyediar > 0){
                                lPenztar.szum = tortarendelesObj.egyediar;
                            }else{
                                if(tortarendelesObj.reszek && tortarendelesObj.reszek.length > 0){          // emeletes esetén                      
                                    lPenztar.szum =  tortarendelesObj.vegosszeg_reszekkel;
                                }else{
                                    if(tortarendelesObj.vegosszeg > 0){
                                        lPenztar.szum =  tortarendelesObj.vegosszeg;
                                    }else{
                                        lPenztar.szum =  tortarendelesObj.vegosszeg_reszekkel;
                                    }
                                }
                            }
                            if(tortarendelesObj.eloleg > 0){
                                lPenztar.elorendeles_eloleg = tortarendelesObj.eloleg.toString();
                            }

                            lPenztar.fizetesi_modok = tortarendelesObj.fizetesi_modok;
                            lPenztar.atveve = tortarendelesObj.atveve;
                        }
                    }else if(tr.tipus == "W"){
                        retList = JSON.parse(penztarData.data) as  Array<Order>;
                        console.log("setAtveve Order: " + JSON.stringify(retList));
                        if(retList[0]){
                            lPenztar.mfid = retList[0].mfid;
                            lPenztar.szum = retList[0].osszeg - Number(retList[0].bonus);
                            lPenztar.atveve = retList[0].atveve;
                        }
                    }
console.log("setAtveve lPenztar.atveve: " + lPenztar.atveve);
                    if(lPenztar.atveve == 0){                                                        
                        //fizetési módok megadása
                        self.showPayDataDialog(lPenztar);                        

                        //átvétel mentése
                        $.post(
                            lUrl,
                            {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                            function(response: RestBaseResponse): void {
                                self.openCukraszList();
                            },
                        "json");                        
                    }else{
                        Swal.fire({
                            title: "Figyelmeztetés!",
                            text: "Már át lett véve!",
                            icon: "warning",
                            customClass: {
                                container: 'my-swal'
                              }                                                
                          });     

                        /*bootbox.confirm({
                            title: "",
                            message: "Már át lett véve folytatod mégis?",
                            buttons: {
                                cancel: {
                                    label: '<i class="fa fa-times"></i> Mégsem'
                                },
                                confirm: {
                                    label: '<i class="fa fa-check"></i> Igen'
                                }
                            },
                            callback: function (result: any) {
                                console.log('This was logged in the callback: ' + result);
            
                                if(result == true){
                                    self.showPayDataDialog(lPenztar);  
                                }
                            }
                        });    */                                                      
                    }
                    
                });   
            }else{
                $.post(
                    lUrl,
                    {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.openCukraszList();
                    },
                "json");                
            }



        },
        setLatta: function(tr: any, val: Number): void {
            var self: any = this;

            var saveRecArray: any = [];

            /*let calcval: Number;
            if(tr.latta){
                if(tr.latta == 1){
                    calcval = 0; 
                }else if(tr.latta == 1){
                    calcval = 1; 
                }
            }else{
                calcval = 1; 
            }*/

            let lUrl: string = "";
            if(tr.tipus == "T"){
                lUrl =  func.dataURLLTortaRendelesModConst + "/" + self.logindata_session;
                saveRecArray.push({id: tr.id, latta: val});
            }else if(tr.tipus == "W"){
                lUrl = func.dataURLSaveOrderStatuszConst + "/" + self.logindata_session;
                saveRecArray.push({MFID: tr.id, latta: val});
            }else if(tr.tipus == "E"){
                lUrl = func.dataURLPenztarModConst + "/" + self.logindata_session;
                saveRecArray.push({id: tr.id, latta: val});
            }             

            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    self.openCukraszList();
                },
            "json");

        },
        modifyCukraszItem: function(cukraszItem: any): void {
            var self: any = this;
                      
            if(cukraszItem.tipus == 'W'){
                self.getWebshopSzallAtveteliModok();
            }

            self.showMegrendelesModositas();

            self.MegrendelesModositasObj = new MegrendelesModositas();
            self.MegrendelesModositasObj.partner = cukraszItem.partner_name;
            self.MegrendelesModositasObj.content = cukraszItem.name + "<br>" + cukraszItem.note;
            self.MegrendelesModositasObj.tipus = cukraszItem.tipus;
            self.MegrendelesModositasObj.id = cukraszItem.id;
            self.MegrendelesModositasObj.datum = Moment(cukraszItem.datum).format("YYYY-MM-DD");
            self.MegrendelesModositasObj.ido = cukraszItem.ido;
            self.MegrendelesModositasObj.note = cukraszItem.onlynote;
            self.MegrendelesModositasObj.eloleg = cukraszItem.eloleg;
            if(self.MegrendelesModositasObj.tipus != 'W'){
                self.MegrendelesModositasObj.atvetel_helye = cukraszItem.atvetel_helye.trim();
            }else{
                self.MegrendelesModositasObj.atvetel_helye = cukraszItem.szallmod.trim();
            }

        },
        cukraszKeszreJelent: function(tr: any): void {
            var self: any = this;

            var saveRecArray: any = [];

            let lUrl: string = "";
            if(tr.tipus == "T"){
                lUrl =  func.dataURLLTortaRendelesModConst + "/" + self.logindata_session;
                saveRecArray.push({id: tr.id, cukraszstatusz: 1});
            }else if(tr.tipus == "W"){
                lUrl = func.dataURLSaveOrderStatuszConst + "/" + self.logindata_session;
                saveRecArray.push({MFID: tr.id, cukraszstatusz: 1});
            }else if(tr.tipus == "E"){
                lUrl =  func.dataURLPenztarModConst + "/" + self.logindata_session;
                saveRecArray.push({id: tr.id, cukraszstatusz: 1});
            }
           
            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    self.openCukraszList();
                },
            "json");

        },
        addToCukraszFromTortarendeles: function(tr: TortaRendeles): void {
            var self: any = this;
            
            var saveRecArray: any = [];
            saveRecArray.push({id: tr.id, cukrasznak: 1});

            let lUrl: string = func.dataURLLTortaRendelesModConst + "/" + self.logindata_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    self.openTortarendelesekList();
                },
            "json");

        },
        deleteFromCukraszList: function(t: any): void {
            var self: any = this;

            var saveRecArray: any = [];
            let lUrl: string = "";
            
            
            bootbox.confirm({
                title: "",
                message: "Biztosan törlöd a rendelést (" + t.tipus + ": " + t.id + ")?",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Mégsem'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Igen'
                    }
                },
                callback: function (result: any) {
                    console.log('This was logged in the callback: ' + result);

                    if(result == true){


                        Swal.fire({
                            title: "Kérem adja meg a törlés indokát!",
                            input: "textarea",
                            inputAttributes: {
                              autocapitalize: "off"
                            },
                            showCancelButton: true,
                            confirmButtonText: "Törlés folytatása",
                            showLoaderOnConfirm: true,
                            preConfirm: () => {
                                let torles_indoklas: any = document.getElementById("swal2-textarea");
                                if (torles_indoklas.value && torles_indoklas.value.length < 4000) {
                                    self.isLoading = true;

                                    if(t.tipus == "T"){
                                        saveRecArray.push({id: t.id, del: 1});
                                        lUrl = func.dataURLPenztarModConst + "/" + self.logindata_session;
                                    }else if(t.tipus == "W"){
                                        saveRecArray.push({MFID: t.id, Allapot: "4"});
                                        lUrl = func.dataURLSaveOrderStatuszConst + "/" + self.logindata_session;
                                    }else if(t.tipus == "E"){
                                        saveRecArray.push({id: t.id, del: 1});
                                        lUrl = func.dataURLPenztarModConst + "/" + self.logindata_session;
                                    }    
                                    
                                    $.post(
                                        lUrl,
                                        {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session, torles_indoklas: torles_indoklas.value },
                                        function(response: RestBaseResponse): void {
                                            self.isLoading = false;
                                            self.openCukraszList();
                                        },
                                    "json");     
                        
                                } else {
                                    self.isLoading = false;
                                    
                                    let hibaUzenet: string = "";
                                    if(!torles_indoklas.value){
                                         hibaUzenet = "Nincs megadva indoklás!"; 
                                    }else if(torles_indoklas.value.length > 4000){
                                        hibaUzenet = "Az indoklás túl hosszú (max. 4000 karakter)!";
                                    }

                                    Swal.showValidationMessage(hibaUzenet);
                                }
                              }, 
                            allowOutsideClick: false
                          }).then((result: any) => {
                            console.log("result = " + JSON.stringify(result));
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: "Törlés sikeres!",
                                icon: "success"
                                //imageUrl: result.value.avatar_url
                              });
                            }
                          });




                    }
                }
            });            
            
        },
        doEndingTortarendeles: function(tr: TortaRendeles): void {
            var self: any = this;

            var saveRecArray: any = [];
            saveRecArray.push({id: tr.id, ending: 1});

            bootbox.confirm({
                title: "",
                message: "Biztosan véglegesíted a torterendelést?",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Mégsem'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Igen'
                    }
                },
                callback: function (result: any) {
                    console.log('This was logged in the callback: ' + result);

                    if(result == true){
                        self.isLoading = true;

                        let lUrl: string = func.dataURLLTortaRendelesModConst + "/" + self.logindata_session;
                        $.post(
                            lUrl,
                            {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                            function(response: RestBaseResponse): void {
                                tr.ending = 1;
                                self.isLoading = false;
                            },
                        "json");            
                    }
                }
            });


        },
        deleteTortarendeles: function(tr: TortaRendeles): void {
            var self: any = this;

            var saveRecArray: any = [];

            bootbox.confirm({
                title: "",
                message: "Biztosan törlöd a torterendelést?",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Mégsem'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Igen'
                    }
                },
                callback: function (result: any) {
                    console.log('This was logged in the callback: ' + result);

                    if(result == true){
                        self.isLoading = true;

                        Swal.fire({
                            title: "Kérem adja meg a törlés indokát!",
                            input: "textarea",
                            inputAttributes: {
                              autocapitalize: "off"
                            },
                            showCancelButton: true,
                            confirmButtonText: "Törlés folytatása",
                            showLoaderOnConfirm: true,
                            preConfirm: () => {
                                let torles_indoklas: any = document.getElementById("swal2-textarea");
                                if (torles_indoklas.value && torles_indoklas.value.length < 4000) {

                                    saveRecArray.push({id: tr.id, erv: "N"});

                                    let lUrl: string = func.dataURLLTortaRendelesModConst + "/" + self.logindata_session;
                                    $.post(
                                        lUrl,
                                        {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session, torles_indoklas: torles_indoklas.value },
                                        function(response: RestBaseResponse): void {
                                            self.openTortarendelesekList();
                                        },
                                    "json");        
    
                                } else {
                                    self.isLoading = false;
                                    
                                    let hibaUzenet: string = "";
                                    if(!torles_indoklas.value){
                                        hibaUzenet = "Nincs megadva indoklás!"; 
                                    }else if(torles_indoklas.value.length > 4000){
                                        hibaUzenet = "Az indoklás túl hosszú (max. 4000 karakter)!";
                                    }

                                    Swal.showValidationMessage(hibaUzenet);
                                }
                            }, 
                            allowOutsideClick: false
                        }).then((result: any) => {
                            console.log("result = " + JSON.stringify(result));
                            if (result.isConfirmed) {
                            Swal.fire({
                                title: "Törlés sikeres!",
                                icon: "success"
                                //imageUrl: result.value.avatar_url
                            });
                            }
                        });
                                

                    }
                }
            });


        },
        selectCheck: function(termek: Termek): void {
            var self: any = this;

            termek.checked = !termek.checked;

            if(termek.checked){
                self.selectedTermeklist.push(termek);
            }else{
                self.selectedTermeklist.splice(self.selectedTermeklist.indexOf(termek), 1);
            }            
        },
        setmainapikinalatba: function(termek: Termek): void {
            var self: any = this;

            var saveRecArray: any = [];
            saveRecArray.push({id: termek.id});            

            let lUrl: string = func.dataURLFoodForDayAdd + "/" + self.logindata_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    if (response.errcode > 0) {
                        let lStr: string = "";
                        if (response.errcode === 100) {
                            lStr = "Ez a termék már a mai napi kínálatban van!";
                        }

                        Swal.fire({
                            title: "Figyelmeztetés!",
                            text: lStr,
                            icon: "warning",
                            customClass: {
                                container: 'my-swal'
                              }                                                
                        });  

                    }
                },
            "json");
        },
        addTermekToKeszlet: function(): void {
            var self: any = this;
            self.termekitem = new Termek;
            self.changeModul(1);
        },
        submitTortaRendelesData: function(): void {
            var self: any = this;
            let lUrl: string = "";

            if(self.tortaRendelesObj.ptr_id > 0) {
                lUrl = func.dataURLLTortaRendelesModConst + "/" + self.ls_my_session;
            } else {
                lUrl = func.dataURLTortaRendelesPostConst + "/" + self.ls_my_session;
            }

            var form: any = document.getElementById("needs-validation_tortarendeles");
            form.classList.add("was-validated");

            var lOK: boolean = true;
            var tEllenorzes: string = "";

            if(!self.tortaRendelesObj.torta_tipus || self.tortaRendelesObj.torta_tipus.length == 0){
                tEllenorzes += "<li>A torta típusa kitöltése kötelező!</li>";
            }

            if(self.tortaRendelesObj.torta_tipus && self.tortaRendelesObj.torta_tipus == 'B'){
                if(!self.tortaRendelesObj.torta_diszites || self.tortaRendelesObj.torta_diszites.length == 0){
                    tEllenorzes += "<li>Burkolt torta esetén a díszítés kitöltése kötelező!</li>";
                }
            } 

            if(!self.tortaRendelesObj.torta_kategoria || self.tortaRendelesObj.torta_kategoria.length == 0){
                tEllenorzes += "<li>A torta kategória kitöltése kötelező!</li>";
            }

            if(self.tortaRendelesObj.product_id == 0){
                tEllenorzes += "<li>A torta íz kitöltése kötelező!</li>";
            }

            if(!self.tortaRendelesObj.szeletszam || self.tortaRendelesObj.szeletszam == 0){
                tEllenorzes += "<li>A szeletszám kitöltése kötelező!</li>";
            } 

            if(self.tortaRendelesObj.forma_id == 0){
                tEllenorzes += "<li>A forma kitöltése kötelező!</li>";
            }

            if(self.kapacitasDiff <= 0){
                tEllenorzes += "<li>Erre az időszakra a kapacitás megtelt, válaszon másik időpontot!</li>";
            }

            if(self.tortaRendelesObj.partbonus > 0 && (Number(self.tortaRendelesObj.bonus) > Number(self.tortaRendelesObj.partbonus))){
                tEllenorzes += "<li>Túl nagy bónusz felhasználás, ekkora összeg nem használható fel!</li>";
            }

            if(tEllenorzes && tEllenorzes.length > 0){
                tEllenorzes = "<ul style='color: red; text-align: left;'>" + tEllenorzes + "</ul>";

                Swal.fire({
                    title: "Hiba!",
                    html: tEllenorzes,
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });           
                  
                  lOK =  false;
                  return;                  
            }

            if(lOK){
                if (form.checkValidity() === false) {
                    if(event) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                } else {
                    
                    $.post(
                        lUrl,
                        {datastream: JSON.stringify(self.tortaRendelesObj), session_id: self.logindata_session },
                        function(response: RestBaseResponse): void {                        

                            if(self.wantGotoEmelet == 0){

                                if(self.tortaRendelesObj.ptr_id == 0){
                                    let message: string = "";
                                    let title: string = "";

                                    if(response && response.specdata && response.specdata.length > 0 && response.specdata2 && response.specdata2.length > 0){
                                        title = "Rendelés visszaigazolás - OK" + "[" + response.specdata + " - " + response.specdata2 + "]";
                                        message = " <i class='fas fa-check fa-5x' style='color: green'></i> <h2>Tortarendelés felvétele sikeres!</h2>";

                                        message += "<table class='table'><tbody>";

                                        //adatok lekérése
                                        $.getJSON(func.dataURLTortaRendelesViewConst  + response.specdata + "/" + self.ls_my_session, function (ret: RestBaseResponse): void {
                                            var retList: Array<TortaRendeles> = JSON.parse(ret.data);
            
                                            if(retList) {
                        
                                                let tritem: TortaRendeles = retList[0];            
                                                
                                                let ttipus: string = "";
                                                if(tritem.torta_tipus == 'N'){
                                                    ttipus = 'Normál'
                                                }else if(tritem.torta_tipus == 'B'){
                                                    ttipus = 'Burkolt';
                                                }

                                                let tdiszites: string = "";
                                                if(tritem.torta_diszites == 'EGY'){
                                                    tdiszites = 'Egyszerű';
                                                }else if(tritem.torta_diszites == 'KUL'){
                                                    tdiszites = 'Különleges';
                                                }else if(tritem.torta_diszites == 'EXT'){
                                                    tdiszites = 'Extra';
                                                }

                                                message += "<tr><th>Partner</th><td>" + tritem.partnev + " " +  tritem.partcity + " " + tritem.partaddress + "</td>";
                                                message += "<tr><th>Kapcsolat</th><td>"+tritem.parttel + " " + tritem.partemail + "</td>";
                                                message += "<tr><th>Átvétel </th><td>"+tritem.atvetel_helye+ " " + tritem.datum + " " +tritem.ido +  "</td>";
                                                message += "<tr><th>Kiszállítás</th><td>"+tritem.kiszallitas+ " " + tritem.szalltelepules + " " + tritem.szallcim + "</td>";
                                                message += "<tr><th>Torta</th><td>"+ttipus + " " + tritem.torta_kategoria + ". kat." + " " + tritem.forma +  " " + tdiszites +  "</td>";
                                                message += "<tr><th>Neve</th><td>"+tritem.keszlet_name + " " + tritem.torta_neve +"</td>";
                                                message += "<tr><th>Szeletszám</th><td>"+tritem.szeletszam+"</td>";
                                                message += "<tr><th>Kedvezmény</th><td>"+tritem.kedvezmeny_merteke+"</td>";
                                                message += "<tr><th>Végösszeg</th><td>"+tritem.vegosszeg_s + " Ft (előleg: " +  tritem.eloleg +" Ft)"  +"</td>";
                                                message += "<tr><th>Megjegyzés</th><td>"+tritem.megjegyzes+"</td>";                             

                                                let kiegstr: string = "";
                                                var k: any = tritem.kiegeszitok;
                                                let kieg: any =  JSON.parse(k) as Array<TortaRendeles_Kiegeszitok>;
                                                if(kieg){
                                                    for(let i: number = 0; i<kieg.length; i++){
                                                        kiegstr += kieg[i]['Megnevezes'] + " " + kieg[i]['menny'] + " db, ";
                                                    }
                                                }

                                                message += "<tr><th>Kiegészítők</th><td>"+kiegstr+"</td>";
                        
                                                message += "</tbody></table>";
                                                
                                            }
                                        });                                
                                        
                                    }else{                                
                                        title = "HIBA!"
                                        message = "  <i class='fas fa-times fa-5x' style='color: red'></i> <h2>Tortarendelés felvétele nem sikeres!</h2>";
                                    }

                                    setTimeout(function (): void {
                                        bootbox.confirm({
                                            title: title,
                                            message: message,
                                            buttons: {
                                                cancel: {
                                                    label: 'Mégse'
                                                },
                                                confirm: {
                                                    label: '<i class="fa fa-check"></i> OK'
                                                }
                                            },
                                            callback: function (result: any) {
                                                console.log("result="+result);


                                                if(Number(self.tortaRendelesObj.eloleg) == self.tortaRendelesObj.vegosszeg || Number(self.tortaRendelesObj.eloleg) > 0){
                                                    let lPenztar: CashOut = new CashOut();

                                                    //át kell alakítani pénztár objektummá a tortarendelés objektumot
                                                    // átalakítás start
                                                    lPenztar.id = Number(response.specdata); //penztar_id
                                                    
                                                    if(self.tortaRendelesObj.egyediar > 0){
                                                        lPenztar.szum = self.tortaRendelesObj.egyediar;
                                                    }else{
                                                        if(self.tortaRendelesObj.reszek && self.tortaRendelesObj.reszek.length > 0){          // emeletes esetén                      
                                                            lPenztar.szum =  self.tortaRendelesObj.vegosszeg_reszekkel;
                                                        }else{
                                                            if(self.tortaRendelesObj.vegosszeg > 0){
                                                                lPenztar.szum =  self.tortaRendelesObj.vegosszeg;
                                                            }else{
                                                                lPenztar.szum =  self.tortaRendelesObj.vegosszeg_reszekkel;
                                                            }
                                                        }
                                                    }
                                                    lPenztar.fizetesi_modok = self.tortaRendelesObj.fizetesi_modok;
                                                    //meg kell erőszakolni az előleg miatt, hogy a fizetési módok megadásakor jó helyről vegye a maradékszámolás az értékeket
                                                    lPenztar.elorendeles_eloleg = self.tortaRendelesObj.eloleg;
                                                    //átalakítás end

                                                    if(Number(self.tortaRendelesObj.eloleg) > 0){
                                                        self.showPayDataDialog(lPenztar, false, true);
                                                    }else{
                                                        self.showPayDataDialog(lPenztar);
                                                    }
                                                }

                                                if(result == false){                                                                                                         
                                                    //nyomtat
                                                }
                                                
                                                self.changeModul(9); //vissza a listázó képernyőre  
                                            }
                                        });
                                    }, 1000);
                                }else{
                                    Swal.fire({
                                        title: "Sikeres!",
                                        text: "Módosítás sikeres!",
                                        icon: "success",
                                        customClass: {
                                            container: 'my-swal'
                                          }                                                
                                      });                                      
                                    self.changeModul(9); //vissza a listázó képernyőre
                                }

                            }else{
                                if(response){
                                    if(response.specdata){                                                              
                                        self.tortaRendelesObj.id = response.specdata;
                                    }
                                    if(response.specdata2){
                                        self.tortaRendelesObj.ptr_id = response.specdata2;
                                    }
                                                    
                                    self.openNewResz(self.tortaRendelesObj);
                                }
                                
                            }                        
                            
                        },
                    "json");

                }
            }

        },
        submitTortaRendelesEgysegData: function(): void {
            var self: any = this;
            let lUrl: string = func.dataURLTortaRendelesPostConst + "/" + self.ls_my_session;

            var form: any = document.getElementById("needs-validation_tortarendelesegyseg");
            form.classList.add("was-validated");

            var lOK: boolean = true;

            var hibaUzenet: string = "";

            if(!self.tortaRendelesEmeletObj.torta_tipus || self.tortaRendelesEmeletObj.torta_tipus.length == 0){
                hibaUzenet += "<li>A torta típusa kitöltése kötelező!</li>";
            }

            if(self.tortaRendelesEmeletObj.torta_tipus && self.tortaRendelesEmeletObj.torta_tipus == 'B'){
                if(!self.tortaRendelesEmeletObj.torta_diszites || self.tortaRendelesEmeletObj.torta_diszites.length == 0){
                    hibaUzenet += "<li>Burkolt torta esetén a díszítés kitöltése kötelező!</li>";
                }
            } 

            if(!self.tortaRendelesEmeletObj.torta_kategoria || self.tortaRendelesEmeletObj.torta_kategoria.length == 0){
                hibaUzenet += "<li>A torta kategória kitöltése kötelező!</li>";
            }

            if(!self.tortaRendelesEmeletObj.szeletszam || self.tortaRendelesEmeletObj.szeletszam == 0){
                hibaUzenet += "<li>A szeletszám kitöltése kötelező!</li>";
            } 

            if(self.tortaRendelesEmeletObj.forma_id == 0){
                hibaUzenet += "<li>A forma kitöltése kötelező!</li>";
            }

            if(hibaUzenet && hibaUzenet.length > 0){
                hibaUzenet = "<ul style='color: red; text-align: left;'>" + hibaUzenet + "</ul>";

                Swal.fire({
                    title: "Hiba!",
                    html: hibaUzenet,
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                });                  

                lOK =  false;
                return;
            }


            if(lOK){
                if (form.checkValidity() === false) {
                    if(event) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                } else {
                    $.post(
                        lUrl,
                        {datastream: JSON.stringify(self.tortaRendelesEmeletObj), session_id: self.logindata_session },
                        function(response: RestBaseResponse): void {
                            self.changeModul(9);
                        },
                    "json");

                }
            }
        },
        submitMegrendelesModositasData: function(): void {
            var self: any = this;

            var form: any = document.getElementById("modifyMegrendelesForm");
            form.classList.add("was-validated");

            if (form.checkValidity() === false) {
                if(event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            } else {
                var saveRecArray: any = [];

                saveRecArray.push(
                    {
                        id: self.MegrendelesModositasObj.id,
                        tipus: self.MegrendelesModositasObj.tipus,
                        datum: self.MegrendelesModositasObj.datum,
                        ido: self.MegrendelesModositasObj.ido,
                        note: self.MegrendelesModositasObj.note,
                        eloleg: self.MegrendelesModositasObj.eloleg,
                        atvhely: self.MegrendelesModositasObj.atvetel_helye
                    }
                );
                
                var lUrl: string = func.dataURLMegrendelesModConst + "/" + self.ls_my_session;
                $.post(
                    lUrl,
                    {datastream: /*saveRecJSON*/ JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.showModalMegrendelesModositas = false;
                        self.openCukraszList();
                    },
                "json");                

            }
        },
        submitTermekData: function(): void {
            var self: any = this;
            let lUrl: string = "";

            var form: any = document.getElementById("needs-validation");
            form.classList.add("was-validated");

            if (form.checkValidity() === false) {
                if(event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            } else {
                var saveRecArray: any = [];
                saveRecArray.push({id: self.termekitem.id,
                                    erv: "I",
                                    ARUCSOPORT_ID: 2,
                                    Megnevezes: self.termekitem.name,
                                    EgysegArBrutto: self.termekitem.price,
                                    EgysegArBrutto2: self.termekitem.price2,
                                    Mee: self.termekitem.mee,
                                    Kategoria: self.termekitem.kat,
                                    isNapi: self.termekitem.isNapi,
                                    isTortaKategoria: self.termekitem.isTortaKategoria,
                                    TiltvaSpecSoftware1: self.termekitem.isTiltvaSpec1,
                                    AfaMertek: self.termekitem.AfaMertek,
                                    AfaMertek2: self.termekitem.AfaMertek2,
                                    Megjegyzes: self.termekitem.Megjegyzes,
                                    AzonositoTipus: 1,
                                    NTAKFoKategoria: self.termekitem.NTAKFoKategoria,
                                    NTAKAlKategoria: self.termekitem.NTAKAlKategoria,
                                    NTAKMee: self.termekitem.NTAKMee,
                                    NTAKMennyiseg: self.termekitem.NTAKMennyiseg,
                                    isMennyAut: self.termekitem.isMennyAut,
                                    szavatossagi_ora: self.termekitem.szavatossagi_ora,
                                    fagylaltkonyvben: self.termekitem.fagylaltkonyvben,
                                    kapcsolt_KESZLET_ID: self.termekitem.kapcsolt_KESZLET_ID
                                });                

                if(self.termekitem.id >0) {
                    lUrl = func.dataURLTermekModConst  + "/" + self.ls_my_session;
                } else {
                    lUrl = func.dataURLTermekAddConst  + "/" + self.ls_my_session;
                }

                $.post(
                    lUrl,
                    {datastream: /*saveRecJSON*/ JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.navigateTo(func.Sections.TermekListSection);
                    },
                "json");
            }

        },
        showModalForSpecNapi: function(id: number, termek: SpecNapi): void {
            var self: any = this;

            self.showModalSpecNapi = true;
            
            self.SpecNapiObj = new SpecNapi();
            self.SpecNapiObj.spec_napi_id = id;
            self.SpecNapiObj.gyartas_datum = termek.gyartas_datum;
            self.SpecNapiObj.szavatossagi_ora = termek.szavatossagi_ora;
            self.SpecNapiObj.mennyiseg = termek.mennyiseg;
            self.SpecNapiObj.mee = termek.mee;
            self.SpecNapiObj.helyszin = termek.helyszin;
            self.SpecNapiObj.fagylaltkonyvben = termek.fagylaltkonyvben;
            self.SpecNapiObj.homerseklet = termek.homerseklet;
            self.SpecNapiObj.fagylaltarusitas_kezdete = termek.fagylaltarusitas_kezdete;
            self.SpecNapiObj.fagylaltarusitas_vege = termek.fagylaltarusitas_vege;

            this.appointment.appointmet_date = termek.gyartas_datum;

        },
        submitSpecNapi: function(): void {
            var self: any = this;

            let lUrl: string = func.dataURLFoodForDayEdit + "/" + self.logindata_session;

            var form: any = document.getElementById("needs-validation_specnapi");
            form.classList.add("was-validated");

            if (form.checkValidity() === false) {
                if(event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            } else {
                $.post(
                    lUrl,
                    {datastream: JSON.stringify(self.SpecNapiObj), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.loadNapiLista();
                        self.showModalSpecNapi = false;
                    },
                "json");
            }
        },
        navigateTo: function(section: Sections, termek?: Termek): void {
            var self: any = this;

            if(section === func.Sections.TermekViewSection && termek) { 
                if(self.userObject.csoport != 20){
                    Swal.fire({
                        title: "Figyelmeztetés!",  
                        text: "A termék adatlap megtekintéséhez nincs jogosultsága!",
                        icon: "warning",   
                    });
                }else{
                    sessionStorage.setItem("scrollPositionWindow", window.scrollY.toString());
                    self.changeModul(1);
                    self.termekitem = termek;
                }
            } else if(section === func.Sections.TermekListSection) {
                self.changeModul(2, false, 1);
            } else if(section === func.Sections.TortarendeloListSection) {
                self.changeModul(10);
            }

        },
        termekfilter: function (): void {
            var self: any = this;

            let lUrl: string = func.dataURLTermekListConst + "/" + self.termekFilterStr + "/" + self.logindata_session;
            self.isLoading = true;

            $.getJSON(lUrl, function (retTermekek: RestBaseResponse): void {
                self.termekek = JSON.parse(retTermekek.data);
                self.isLoading = false;
            });
        },
        penztarSzukites: function (): void {
            var self: any = this;

            self.refreshPenztar(true);

        },
        penztarfilter: function (): void {
            var self: any = this;

            if(self.penztar){
                let nevStr:string = "";

                for(let i: number=0; i <= self.penztar.length-1; i++) {                          
                    if(self.penztar[i].partnev){
                        
                        nevStr = self.penztar[i].partnev.toLowerCase();

                        if(nevStr.indexOf(self.penztarFilterStr) !== -1){
                            console.log(nevStr + "találat: " + nevStr + ": " + nevStr.indexOf(self.penztarFilterStr));          
                        }
                    }

                    if(self.penztar[i].nev){                        
                        nevStr = self.penztar[i].nev.toLowerCase();
                        if(nevStr.indexOf(self.penztarFilterStr) !== -1){
                            console.log(nevStr + "találat: " + nevStr + ": " + nevStr.indexOf(self.penztarFilterStr));          
                        }
                    }                    
                }                
            }


        },   
        emptySelectedTermekList: function(): void {
            var self: any = this;
            self.isLoading = true;
            self.selectedTermeklist = new Array<Termek>();

            self.changeModul(2);

        },
        gotoBarcodePrint: function(): void {
            var self: any = this;

            self.changeModul(16);

            let product_ids: string = "";

            this.selectedTermeklist.forEach(item => {
                if(product_ids.length > 0){
                    product_ids = product_ids + "_";
                }

                product_ids = product_ids + item.id;
            });

        },    
        saveToSpecNapiModal: function(): void {
            var self: any = this;   
            
            self.selectedSpecNapiTermeklist = new Array<SpecNapi>();
                        
            this.selectedTermeklist.forEach(item => {
                let SpecNapiObj = new SpecNapi();
                SpecNapiObj.id = item.id;
                SpecNapiObj.azon = item.azon;
                SpecNapiObj.name = item.name;
                SpecNapiObj.mee = item.mee;
                SpecNapiObj.szavatossagi_ora = item.szavatossagi_ora; //input
                SpecNapiObj.mennyiseg = 0; //input
                SpecNapiObj.gyartas_datum = Moment(Date()).format("YYYY-MM-DD"); //input
                SpecNapiObj.helyszin = "NONE"; //input                      
                SpecNapiObj.fagylaltkonyvben = item.fagylaltkonyvben; 

                if(item.fagylaltkonyvben) {
                    SpecNapiObj.fagylaltarusitas_vege = "19:00";
                }

                self.selectedSpecNapiTermeklist.push(SpecNapiObj);
            });

            self.showModalNapiKinalat = true;
        },
        saveToSpecNapi: function(): void {
            var self: any = this;

            let lUrl: string = func.dataURLFoodForDayAdd + "/" + self.logindata_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(self.selectedSpecNapiTermeklist), session_id: self.logindata_session, newMode: 1 },
                function(response: RestBaseResponse): void {
                    if (response.errcode > 0) {
                        let lStr: string = "Hiba történt (" + response.message + ")";

                        Swal.fire({
                            title: "Hiba!",
                            text: lStr,
                            icon: "error",
                            customClass: {
                                container: 'my-swal'
                              }                                                
                        });  
                    } else {
                        Swal.fire({
                            title: "Sikeres!",
                            text: "A termékek hozzáadása sikeres a napi listára!",
                            icon: "success",
                            customClass: {
                                container: 'my-swal'
                              }                                                
                        });                          

                        self.selectedTermeklist = new Array<Termek>();
                        self.selectedSpecNapiTermeklist = new Array<SpecNapi>();
                        self.changeModul(5);
                        self.showModalNapiKinalat = false;
                    }
                },
            "json");

        },
        delfromspecnapi: function(item: SpecNapi): void {
            var self: any = this;

            self.selectedSpecNapiTermeklist.splice(self.selectedSpecNapiTermeklist.indexOf(item), 1);
        },
        gotoFagylaltKonyv: function(): void {
            var self: any = this;

            Swal.fire({
                title: "Figyelem!",
                text: "A dátumintervallum csak napi listára felkerülés napja szerint kerül szűkítésre!",
                icon: "warning",
                customClass: {
                    container: 'my-swal'
                }
            }).then(() => {
                let printUrl = "printFagylaltkonyv.html?helyszin=" + self.filterSpecNapiHelyszin + "&from=" + self.customFormatter(self.filterSpecNapiDateFrom) + "&to=" + self.customFormatter(self.filterSpecNapiDateTo);
                
                let printWindow: any = window.open(printUrl, "win", "height=800,width=600");
                printWindow.focus();
            });

        },
        gotoArcedulaPrint: function(): void {
            var self: any = this;

            let product_ids: string = "";

            this.selectedTermeklist.forEach(item => {
                if(product_ids.length > 0){
                    product_ids = product_ids + "_";
                }

                product_ids = product_ids + item.id;
            });

            let printUrl = "printCimke.html?product_ids=" + product_ids;

            if(product_ids.length > 0) {
                let printWindow: any = window.open(printUrl, "win", "height=800,width=600");
                printWindow.focus();
                
                /*setTimeout(function (): void {
                    printWindow.close();
                }, 5000);*/
            }else{
                Swal.fire({
                    title: "Hiba!",
                    text: "Nincs kijelölt árucikk!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                });                                  
            }
        },    
        changeModul: function (modulnumber: number, specmode: boolean = false, fromModule: number = 0): void {
            var self: any = this;

            self.numVisibleModule = modulnumber;

            switch (self.numVisibleModule) {
                case 0: // pénztár
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = true;
                    self.moduleTitle = "Pénztár";

                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.penztarFilterDate = date;

                    setTimeout(function (): void {                    
                        self.filterPenztarFilterHelyszin = self.userObject.mhely;
                    }, 500);

                    break;
                case 1: // termék adatlap
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    window.scrollTo(0, 0); 
                    break;
                case 2: // terméklista
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    self.moduleTitle = "Ételtörzs";
                    self.isLoading = true;
                    self.termekFilterStr = "";
                    
                    if(specmode == false){

                        let lUrl: string = "";

                        if(self.termekFilterKateg != "1=1"){
                            lUrl = func.dataURLTermekListConst + "/Kategoria=" + self.termekFilterKateg + "/" + self.logindata_session;
                        }else{
                            lUrl = func.dataURLTermekListConst + "/" + self.termekFilterKateg + "/" + self.logindata_session;
                        }

                        self.termekek = [];

                        $.getJSON(lUrl, function (retTermekek: RestBaseResponse): void {
                            self.termekek = JSON.parse(retTermekek.data) as Array<Termek>;

                            if(fromModule == 1){ // ha a termék adatlapról jöttünk vissza
                                setTimeout(() => {
                                    let savedPosition: number = Number(sessionStorage.getItem("scrollPositionWindow")) || 0; 
                                    console.log(savedPosition);
                                    window.scrollTo(0, savedPosition);
                                }, 500);
                            }

                            self.isLoading = false;
                        });
                    }

                    break;
                case 3: // ételkiadás adatlap
                    self.isMainMenuVisible = false;
                    self.isMainHeaderVisible = false;
                    self.searchTermekFilter = ""; 
                    self.termekek = [];
                    break;
                case 4: // login
                    self.isMainMenuVisible = false;
                    self.isMainHeaderVisible = false;
                    break;
                case 5: // napi kínálat
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.filterSpecNapiDateFrom = date;
                    self.filterSpecNapiDateTo = date;

                    self.loadNapiLista();
                    break;
                case 6: // frissensültek
                    self.isMainMenuVisible = false;
                    self.isMainHeaderVisible = false;
                    self.loadFrissLista();
                    break;
                case 7: // frissensültek rendelési folyamatkezelése totemen
                    self.isMainMenuVisible = false;
                    self.isMainHeaderVisible = false;
                    self.openFrissOrderForm();
                    break;
                case 8: // frissensültek rendelése - termék hozzáadása
                    self.isMainMenuVisible = false;
                    self.isMainHeaderVisible = false;
                    break;
                case 9:
                    self.moduleTitle = "Torta rendelések";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    self.emptyCukraszListParam();

                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.cukraszDateFrom = date;                    
                    self.cukraszDateTo = date;

                    self.openTortarendelesekList();                                        
                    break;
                case 10: // torta rendelése - termék hozzáadása
                    self.moduleTitle = "Torta rendelés";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;                    
                    break;
                case 11:
                    self.moduleTitle = "Cukrászlista";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    self.emptyCukraszListParam();

                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.cukraszDateFrom = date;                    
                    self.cukraszDateTo = date;

                    self.openCukraszList();       
                                        
                    break;     
                case 12:
                    self.moduleTitle = "Torta rendeléshez részegység";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;     
                    break;           
                case 13: // pénztár
                    self.isMainMenuVisible = true;
                    //self.isMainHeaderVisible = true;
                    self.moduleTitle = "Pénztár";
                    break;      
                case 14:
                    self.moduleTitle = "Rendelések összesítve";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false; 
                    break;
                case 15:
                    self.moduleTitle = "Rendelések összesítve heti nézetben";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    break; 
                case 16:
                    self.moduleTitle = "Vonalkódok";
                    self.isMainMenuVisible = false;
                    self.isMainHeaderVisible = false;
                    break; 
                case 17:
                    self.moduleTitle = "Napi munka";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;

                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.filterNapiMunkaDateFrom = date;
                    self.filterNapiMunkaDateTo = date;
                    break; 
                case 18:
                    self.moduleTitle = "Egyszerűsített számla lista";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    self.loadEgyszerusitettSzamlaLista();
                    break;
                case 19:
                    self.moduleTitle = "Napiforgalom lista";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;
                    self.termekFilterStr = "";

                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.filterSpecNapiDateFrom = date;
                    
                    self.napiForgalomLista = [];
                    self.napiForgalomElolegOssz = 0;
                    self.napiForgalomBevetelOssz = 0;

                    //self.loadNapiForgalomLista();
                    break;      
                case 20:
                    self.moduleTitle = "NTAK - beküldés tranzakciók";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;                      
                    
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.filterNTAKListDateFrom = date;                    
                    self.filterNTAKListDateTo = date;     
                    
                    self.NTAKLista = [];
                                        
                    break;
                case 21:
                    self.moduleTitle = "Archív megrendelések";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;                      
                    
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    self.filterArchivListDateFrom = date;                    
                    self.filterArchivListDateTo = date;    
                    
                    self.archivMegrendelesekLista = [];
                                        
                    break;   
                
                case 998:
                    self.moduleTitle = "WWW Module";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;                      

                    self.NTAKUrlNapiZaras = func.NTAKUrlNapiZarasGodollo;
                    console.log(self.NTAKUrlNapiZaras);

                    break;

                case 999:
                    self.moduleTitle = "WWW Module";
                    self.isMainMenuVisible = true;
                    self.isMainHeaderVisible = false;                      

                    self.NTAKUrlNapiZaras = func.NTAKUrlNapiZaras;
                    console.log(self.NTAKUrlNapiZaras);

                    break;
            }

            let navMain: any = $("#navbarNavAltMarkup");
            navMain.on("click", "a", null, function (): void {
                navMain.collapse("hide");
            });

        },
        loadRendelesekOsszesitve: function(): void {
            var self: any = this;

            let filterUrl: string = "";

            var hibaUzenet: string = "";

            if(!self.filterRendOsszDateFrom || (self.filterRendOsszDateFrom && self.filterRendOsszDateFrom.length == 0)){
                hibaUzenet += "<li>Kérem töltsön ki helyes dátumintervallumot (tól)!</li>";                
            }

            if(!self.filterRendOsszDateTo || (self.filterRendOsszDateTo && self.filterRendOsszDateTo.length == 0)){
                hibaUzenet += "<li>Kérem töltsön ki helyes dátumintervallumot (ig)!</li>";                
            }

            if(hibaUzenet && hibaUzenet.length > 0){
                hibaUzenet = "<ul style='color: red; text-align: left;'>" + hibaUzenet + "</ul>"
                Swal.fire({
                    title: "Hiba!",
                    html: hibaUzenet,
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });    
                  
                  return;
            }

            let from: any = Moment(self.filterRendOsszDateFrom).format("YYYY-MM-DD");
            let to: any = Moment(self.filterRendOsszDateTo).format("YYYY-MM-DD");

            filterUrl = "?from_date=" + from;
            filterUrl = filterUrl + "&to_date=" + to;

            let lUrl:string = func.dataURLRendelesekOsszesitve + "/" + self.logindata_session + filterUrl;

            self.isLoading = true;
            $.getJSON(lUrl, function (res: RestBaseResponse): void {
                self.arrayRendelesekOsszesitve = JSON.parse(res.data) as RendelesOsszesitett;
                self.isLoading = false;
            });
        },
        delNapiMunka: function(id: number): void {
            var self: any = this;

            var saveRecArray: any = [];
            saveRecArray.push({id: id, del: 1});

            let lUrl: string = func.dataURLNapiMunkaPostConst + "/" + self.logindata_session;

            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    self.loadNapimunka();
                },
            "json");

        },
        submitNapiMunka: function(): void {
            var self: any = this;

            let lUrl: string = func.dataURLNapiMunkaPostConst + "/" + self.logindata_session;

            var form: any = document.getElementById("needs-validation_napimunka");
            form.classList.add("was-validated");

            if (form.checkValidity() === false) {
                if(event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            } else {
                $.post(
                    lUrl,
                    {datastream: JSON.stringify(self.NapiMunkaObj), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        self.loadNapimunka();
                        self.showModalNapiMunka = false;
                    },
                "json");
            }
        },
        showNapiMunkaDialog: function(): void {
            var self: any = this;

            self.showModalNapiMunka = true;

            self.NapiMunkaObj = new Napimunka();

            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            self.NapiMunkaObj.datum = date;
            self.NapiMunkaObj.dolgozo = self.userObject.nev;
            
            $("#NapiMunkaLeiras").focus();

            //NapiMunkaLeiras

        },
        loadNapimunka: function(): void {
            var self: any = this;

            let filterUrl = "?filter=" + self. strFilterNapiMunka;

            if(!self.filterNapiMunkaDateFrom || (self.filterNapiMunkaDateFrom && self.filterNapiMunkaDateFrom.length == 0)){
                Swal.fire({
                    title: "Hiba!",
                    text: "Kérem töltsön ki helyes dátumot!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });                  
                return;
            }

            let from: string = "&from=" + Moment(self.filterNapiMunkaDateFrom).format("YYYY-MM-DD");
            let to: string = "&to=" + Moment(self.filterNapiMunkaDateTo).format("YYYY-MM-DD");

            self.isLoading = true;

            $.getJSON(func.dataURLNapiMunkaListConst + "/" + self.ls_my_session + filterUrl + from + to, function (napiMunkaData: RestBaseResponse): void {
                
                if(napiMunkaData.data){
                    self.listNapiMunka = JSON.parse(napiMunkaData.data) as Array<Napimunka>;
                }else{
                    self.listNapiMunka = [] as Array<Napimunka>;
                }
                
                self.isLoading = false;
            });

        },
        loadRendelesekOsszesitveHeti: function(pFull: boolean = true, dDatumViszonyitasRendelesKeltere: string = "NEM"): void {
            var self: any = this;

            self.isLoading = true;

            if(!self.filterRendOsszDateFrom || (self.filterRendOsszDateFrom && self.filterRendOsszDateFrom.length == 0)){
                Swal.fire({
                    title: "Hiba!",
                    text: "Kérem töltsön ki helyes dátumot!",
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });                  
                self.isLoading = false;
                return;
            }

            let filterUrl: string = "";
            let lUrl:string = "";

            let from: string = "";
            let fromTemp: any = "";
            let day2: string = "";
            let day3: string = "";
            let day4: string = "";
            let day5: string = "";
            let day6: string = "";
            let toTemp: any = "";
            let to: string = "";

            self.arrayRendelesekOsszesitveHeti = [];

            //full blokk
            if(pFull){

                from = Moment(self.filterRendOsszDateFrom).format("YYYY-MM-DD");

                day2 = Moment(moment(self.filterRendOsszDateFrom, "YYYY-MM-DD").add(1, 'days')).format("YYYY-MM-DD");
                day3 = Moment(moment(self.filterRendOsszDateFrom, "YYYY-MM-DD").add(2, 'days')).format("YYYY-MM-DD");
                day4 = Moment(moment(self.filterRendOsszDateFrom, "YYYY-MM-DD").add(3, 'days')).format("YYYY-MM-DD");
                day5 = Moment(moment(self.filterRendOsszDateFrom, "YYYY-MM-DD").add(4, 'days')).format("YYYY-MM-DD");
                day6 = Moment(moment(self.filterRendOsszDateFrom, "YYYY-MM-DD").add(5, 'days')).format("YYYY-MM-DD");
                toTemp = moment(self.filterRendOsszDateFrom, "YYYY-MM-DD").add(6, 'days');
                to = Moment(toTemp).format("YYYY-MM-DD");

                filterUrl = "?from_date=" + from;
                filterUrl = filterUrl + "&to_date=" + to;
                filterUrl = filterUrl + "&heti=1";
                filterUrl = filterUrl + "&rendeleskelte_datumara=" + dDatumViszonyitasRendelesKeltere;

                lUrl = func.dataURLRendelesekOsszesitve + "/" + self.logindata_session + filterUrl;

            }else{
                //webes block

                fromTemp = moment(self.filterRendOsszDateFrom, "YYYY-MM-DD").add(-6, 'days');
                from = Moment(fromTemp).format("YYYY-MM-DD");
                day2 = Moment(moment(from, "YYYY-MM-DD").add(1, 'days')).format("YYYY-MM-DD");
                day3 = Moment(moment(from, "YYYY-MM-DD").add(2, 'days')).format("YYYY-MM-DD");
                day4 = Moment(moment(from, "YYYY-MM-DD").add(3, 'days')).format("YYYY-MM-DD");
                day5 = Moment(moment(from, "YYYY-MM-DD").add(4, 'days')).format("YYYY-MM-DD");
                day6 = Moment(moment(from, "YYYY-MM-DD").add(5, 'days')).format("YYYY-MM-DD");
                toTemp =  Moment(moment(from, "YYYY-MM-DD").add(6, 'days')).format("YYYY-MM-DD");;
                to = Moment(toTemp).format("YYYY-MM-DD");

                filterUrl = "?from_date=" + Moment(from).format("YYYYMMDD");
                filterUrl = filterUrl + "&to_date=" +  Moment(toTemp).format("YYYYMMDD");
                filterUrl = filterUrl + "&heti=1";
                lUrl = func.dataURLWebesRendelesekOsszesitve + "/" + self.logindata_session + filterUrl;
            }

            let lHetiSor: RendelesOsszesitettHetiObj = new RendelesOsszesitettHetiObj("Megnevezés", from, day2, day3, day4, day5, day6, to);
            let arrayNyersAdatok: any = [];
            let dateConvert: string = "";
            //let arrayRendelesekOsszesitveHeti: Array<RendelesOsszesitettHetiObj>; 

            self.arrayRendelesekOsszesitveHeti = [];
            self.arrayRendelesekOsszesitveHeti.push(lHetiSor);

            self.isLoading = true;
            $.getJSON(lUrl, function (res: RestBaseResponse): void {
                arrayNyersAdatok = JSON.parse(res.data) as RendelesOsszesitett;

                if(arrayNyersAdatok){

                    var rowNum: number = -1;
                    var colNum: string = "";

                    let day1, day2, day3, day4, day5, day6, day7: string = "";

                    for(let i: number=0; i <= arrayNyersAdatok.length-1; i++) {

                        if(pFull){
                            dateConvert = arrayNyersAdatok[i].datum;
                        }else{
                            dateConvert =  Moment(arrayNyersAdatok[i].datum).format("YYYY-MM-DD");
                        }

                        //1. megnevezés alapján sor beazonosítása
                        rowNum = self.getHetiRowNumberByName(arrayNyersAdatok[i].name, self.arrayRendelesekOsszesitveHeti);
                        colNum = self.getColNumberByDate(dateConvert, self.arrayRendelesekOsszesitveHeti);
                        
                        if(rowNum == -1){ // még nincs

                            //console.log("uj= " + colNum + " . " + arrayNyersAdatok[i].name + " :: " + arrayNyersAdatok[i].summeny);

                            if(colNum == "day1"){
                                day1 = arrayNyersAdatok[i].summeny;
                            }else if(colNum == "day2"){
                                day2 = arrayNyersAdatok[i].summeny;
                            }else if(colNum == "day3"){
                                day3 = arrayNyersAdatok[i].summeny;
                            }else if(colNum == "day4"){
                                day4 = arrayNyersAdatok[i].summeny;
                            }else if(colNum == "day5"){
                                day5 = arrayNyersAdatok[i].summeny;
                            }else if(colNum == "day6"){
                                day6 = arrayNyersAdatok[i].summeny;
                            }else if(colNum == "day7"){
                                day7 = arrayNyersAdatok[i].summeny;
                            }

                            lHetiSor = new RendelesOsszesitettHetiObj(arrayNyersAdatok[i].name, day1, day2, day3, day4, day5, day6, day7);

                            if(colNum == "day1"){
                                lHetiSor.vonalkodok1 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day2"){
                                lHetiSor.vonalkodok2 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day3"){
                                lHetiSor.vonalkodok3 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day4"){
                                lHetiSor.vonalkodok4 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day5"){
                                lHetiSor.vonalkodok5 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day6"){
                                lHetiSor.vonalkodok6 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day7"){
                                lHetiSor.vonalkodok7 = arrayNyersAdatok[i].sumvonalkodok;
                            }
                            
                            self.arrayRendelesekOsszesitveHeti.push(lHetiSor);   
                        }else{ // van már
                            // azonosítani kell, hogy melyik oszlopba kell írni

                            if(colNum == "day1"){
                                self.arrayRendelesekOsszesitveHeti[rowNum].day1 = arrayNyersAdatok[i].summeny;
                                self.arrayRendelesekOsszesitveHeti[rowNum].vonalkodok1 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day2"){
                                self.arrayRendelesekOsszesitveHeti[rowNum].day2 = arrayNyersAdatok[i].summeny;
                                self.arrayRendelesekOsszesitveHeti[rowNum].vonalkodok2 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day3"){
                                self.arrayRendelesekOsszesitveHeti[rowNum].day3 = arrayNyersAdatok[i].summeny;
                                self.arrayRendelesekOsszesitveHeti[rowNum].vonalkodok3 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day4"){
                                self.arrayRendelesekOsszesitveHeti[rowNum].day4 = arrayNyersAdatok[i].summeny;
                                self.arrayRendelesekOsszesitveHeti[rowNum].vonalkodok4 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day5"){
                                self.arrayRendelesekOsszesitveHeti[rowNum].day5 = arrayNyersAdatok[i].summeny;
                                self.arrayRendelesekOsszesitveHeti[rowNum].vonalkodok5 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day6"){
                                self.arrayRendelesekOsszesitveHeti[rowNum].day6 = arrayNyersAdatok[i].summeny;
                                self.arrayRendelesekOsszesitveHeti[rowNum].vonalkodok6 = arrayNyersAdatok[i].sumvonalkodok;
                            }else if(colNum == "day7"){
                                self.arrayRendelesekOsszesitveHeti[rowNum].day7 = arrayNyersAdatok[i].summeny;
                                self.arrayRendelesekOsszesitveHeti[rowNum].vonalkodok7 = arrayNyersAdatok[i].sumvonalkodok;
                            }

                        }

                        day1 = ""; 
                        day2 = ""; 
                        day3 = ""; 
                        day4 = ""; 
                        day5  = ""; 
                        day6 = ""; 
                        day7 = "";
                        rowNum = -1;
                        colNum = "";
                    }
                }

                self.adjustTableHeightVue();

                self.isLoading = false;
            });
        },
        adjustTableHeightVue: function() {
            const header = document.getElementById('table-container-header');
    
            if (header) {  // Ellenőrizzük, hogy a header nem null-e
                const headerHeight = header.offsetHeight + 58 /* navbar magassága fixen*/;
                const tableContainer = document.querySelector('.table-container') as HTMLElement;
                
                if (tableContainer) {
                    tableContainer.style.height = `calc(100vh - ${headerHeight}px)`;                               
                }
            }
        },    
        getHetiRowNumberByName: function(pName: string, pArrayRendelesek: Array<RendelesOsszesitett>): number {
            var self: any = this;
            var ret: number = -1;

            for(let i: number=0; i <= pArrayRendelesek.length-1; i++) {
                if(pArrayRendelesek[i].name == pName){
                    ret = i;
                    break;
                }
            }

            return ret;
        },
        getColNumberByDate: function(pDate: string, pArrayRendelesekHetiNezet: Array<RendelesOsszesitettHetiObj>): string {
            var self: any = this;
            var ret: string = "";

            if(pArrayRendelesekHetiNezet[0]){
                if(pArrayRendelesekHetiNezet[0].day1 == pDate){
                    ret = "day1";
                }else if(pArrayRendelesekHetiNezet[0].day2 == pDate){
                    ret = "day2";
                }else if(pArrayRendelesekHetiNezet[0].day3 == pDate){
                    ret = "day3";
                }else if(pArrayRendelesekHetiNezet[0].day4 == pDate){
                    ret = "day4";
                }else if(pArrayRendelesekHetiNezet[0].day5 == pDate){
                    ret = "day5";
                }else if(pArrayRendelesekHetiNezet[0].day6 == pDate){
                    ret = "day6";
                }else if(pArrayRendelesekHetiNezet[0].day7 == pDate){
                    ret = "day7";
                }
            }

            return ret;
        },
        loadFrissLista: function (aType: string = ""): void {
            var self: any = this;

            if(self.numVisibleModule === 6) {
                let lUrl:string = func.dataURLFrissFoodForKitchenList + "/F/" + self.logindata_session;

                self.isLoading = true;
                $.getJSON(lUrl, function (penztarData: RestBaseResponse): void {
                    self.frissForKitchenLista = JSON.parse(penztarData.data);
                    self.isLoading = false;
                });

            }

        },        
        startPrintEgyszerusitettSzamla: function (statusz: string, kszid: number): void {
            var self: any = this;

            if(statusz == 'NYOM'){
                bootbox.confirm({
                    title: "Megerősítés",
                    message: "Ez a számla már nyomtatásra került, biztosan nyomtatni akarja újra?",
                    buttons: {
                        cancel: {
                            label: 'Mégse'
                        },
                        confirm: {
                            label: '<i class="fa fa-print"></i> Nyomtat'
                        }
                    },
                    callback: function (result: any) {
                        if(result == true){                                                                                                         
                            self.printEgyszerusitettSzamla(kszid);
                        }
                    }
                });
            }else{
                self.printEgyszerusitettSzamla(kszid);
            }

        },
        printEgyszerusitettSzamla: function (kszid: number): void {
            var self: any = this;

            let printUrl: string = "";

            printUrl = "printESZ_eles.html?kszid=" + kszid;

            if(kszid > 0) {
                let printWindow: any = window.open(printUrl, "win", "height=200,width=150");
                printWindow.focus();

                setTimeout(function (): void {
                    printWindow.close();
                }, 5000);
            }else{
                alert("HIBA!!! Nem nyomtatható a számla (ksz_id= " + kszid + ") !");
            }

        },
        sendGenerateLezaras: function(ntakElemObject: NTAKTranzakcio): void {
            var self: any = this;
            let lUrl: string = func.dataURLNTAKGenerateLezarasConst + "/" + self.logindata_session;

            var saveRecArray: any = [];
            saveRecArray.push({kulcs_id: ntakElemObject.id, kulcs_tipus: "penztar_id"});

            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        if(response.errcode == 0){
                            Swal.fire({
                                title: "Siker!",
                                text: "A lezárás sikeresen elindítva!",
                                icon: "success",
                                customClass: {
                                    container: 'my-swal'
                                    }
                            });
                        }else{
                            Swal.fire({ 
                                title: "Hiba!",
                                text: response.message ? response.message : "A lezárás elindítása nem sikerült!",
                                icon: "error",
                                customClass: {
                                    container: 'my-swal'
                                    }
                            });
                        }
                    },
                "json");

        },
        openNTAKLogView: function(kulcs_id: number): void {
            var self: any = this;

            let lUrl = func.dataURLNTAKTranzakcioViewConst;

            window.open(lUrl + '/' + kulcs_id + '/' + self.logindata_session, '_blank');

            /*var tempObj: any;
            var message: string  = "";
            self.NTAKLogs = [];

            let lUrl = func.dataURLNTAKTranzakcioViewConst;

            $.getJSON(lUrl  + "/" + kulcs_id + "/" + self.logindata_session, function (retData: RestBaseResponse): void {
                tempObj = JSON.parse(retData.data);               
                console.log(tempObj);                
                self.NTAKLogs = tempObj;
                self.isLoading = false;
            });                         


            message = "<p>" + kulcs_id + "</p>";

            message += "<table class='table'><tbody>";

            //message += tempObj[].endpoint; 

            message += "</tbody></table>"

            bootbox.alert({
                message: message
            });*/
        },
        loadArchivLista: function(): void {
            var self: any = this;

            self.isLoading = true;

            let napTol = Moment(self.filterArchivListDateFrom).format("YYYY-MM-DD");
            let napIg = Moment(self.filterArchivListDateTo).format("YYYY-MM-DD");

            let lUrl = func.dataURLArchivListConst;

            let urlParams: string[] = [];

            if (self.termekFilterStr) {
                urlParams.push(`archivFilter=${self.termekFilterStr}`);
            }
            
            if (self.keresesCsakArchivban) {
                urlParams.push("csakArchiv=1");
            }
            
            if (self.onlyWebshopArchivum) {
                urlParams.push("onlyWebshop=1");
            }
            
            let finalUrl = urlParams.length > 0 ? `?${urlParams.join("&")}` : "";         

            $.getJSON(lUrl  + "/" + napTol + "/" + napIg + "/" + self.logindata_session + finalUrl, function (retData: RestBaseResponse): void {
                var tempObj = JSON.parse(retData.data);    
                if (retData && retData.data) {           
                    self.archivMegrendelesekLista = tempObj;
                }
                self.isLoading = false;
            });      
        },
        loadNTAKTranzakciokLista: function(): void {
            var self: any = this;

            self.isLoading = true;

            let napTol = Moment(self.filterNTAKListDateFrom).format("YYYY-MM-DD");
            let napIg = Moment(self.filterNTAKListDateTo).format("YYYY-MM-DD");
            let onlyErrors = self.filterNTAKListaOnlyErrors;

            let filterErrors: string = "";
            if(onlyErrors){
                filterErrors = "?onlyErrors=1";
            }

            let lUrl = func.dataURLNTAKTranzakcioListConst;

            $.getJSON(lUrl  + "/" + napTol + "/" + napIg + "/" + self.logindata_session + filterErrors, function (retData: RestBaseResponse): void {
                var tempObj = JSON.parse(retData.data);               
                self.NTAKLista = tempObj;
                self.isLoading = false;
            });             

        },
        loadNapiForgalomLista: function (page: number = 0): void {
            var self: any = this;

            self.isLoading = true;

            let nap = Moment(self.filterSpecNapiDateFrom).format("YYYY-MM-DD");

            let lUrl: string = "";
            lUrl = func.dataURLNapiForgalomListConst;

            let csoportositvaUrlKieg: string = "";
            if(self.napiForgalomListaCsoportosit){
                csoportositvaUrlKieg = "&csoportositva=1";
            }

            let termekFilterUrlKieg: string = "";
            if(self.termekFilterStr){           
                termekFilterUrlKieg =  "termekFilter=" + self.termekFilterStr;
            }

            $.getJSON(lUrl  + "/" + nap + "/" + self.logindata_session + "?filterSpecNapiHelyszin=" + self.filterSpecNapiHelyszin + csoportositvaUrlKieg + termekFilterUrlKieg, function (retData: RestBaseResponse): void {
                var tempObj = JSON.parse(retData.data);   
                
                if(tempObj.hiba){

                    Swal.fire({
                        title: "Hiba!",
                        text: tempObj.hiba,
                        icon: "error",
                        customClass: {
                            container: 'my-swal'
                          }                                                
                      });                      
                    
                }else{
                    self.napiForgalomLista = tempObj.items;
                    self.napiForgalomElolegOssz = tempObj.eossz;
                    self.napiForgalomBevetelOssz = tempObj.ossz;

                    self.loadExcelData();
                    self.loadExcelColumns();

                    self.isLoading = false;
                }
            });            

        },
        loadEgyszerusitettSzamlaLista: function (page: number = 0): void {
            var self: any = this;

            self.isLoading = true;
            
            self.limiter = page;

            self.egyszerusitettSzamlaLista = [];

            let lUrl: string = "";
            let jokerFilter: string = "-";
            let filterUrl: string = "?onlyEgyszerusitettSzamlak=1";
            let limitUrl: string = "&lim=" + self.limiter;

            if(self.strFilterEgyszerusitettSzamla.length > 0){
                jokerFilter = self.strFilterEgyszerusitettSzamla;
            }else{
                jokerFilter = "-";
            }

            lUrl = func.dataURLEgyszerusitettSzamlaListConst;

            $.getJSON(lUrl  + "/" + jokerFilter + "/" + self.logindata_session + filterUrl + limitUrl, function (retData: RestBaseResponse): void {
                self.egyszerusitettSzamlaLista = JSON.parse(retData.data) /*as SpecNapi*/;
                self.egyszerusitettSzamlaListaTotalCnt = retData.recordcnt;
                self.isLoading = false;
            });

        },
        showCopyNapiListaForm: function (): void {
            var self: any = this;

            let tDatumTo: string = Moment(self.filterSpecNapiDateTo).format("YYYY-MM-DD");
            self.copyFromDate = Moment(self.filterSpecNapiDateFrom).format("YYYY-MM-DD");

            if(tDatumTo != self.copyFromDate){
                Swal.fire({
                    title: "Figyelmeztetés!",
                    text: "Kérem adjon meg egy napi időszakot, csak egy napra végezhető el a másolás!",
                    icon: "warning",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                });                                 
            }else{
                self.showModalNapiListaCopy = true;
            }

        },
        copyNapiLista: function (): void {
            var self: any = this;
            
            let aTargetDatum: string = Moment(self.appointment.appointmet_date).format("YYYY-MM-DD");
            let lUrl: string = func.dataURLNapiListaCopy + "/" + self.logindata_session;

            if(self.copyFromDate.length == 0){
                alert("Nincs kiválasztva a másolandó nap!");
            }else if(aTargetDatum.length == 0 || aTargetDatum == "Invalid date"){
                alert("Nincs kiválasztva a cél nap!");
            }else{
                var saveRecArray: any = [];
                saveRecArray.push({fromDate: self.copyFromDate,  targetDate: aTargetDatum});

                $.post(
                    lUrl,
                    {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        if (response.errcode > 0) {
                            self.showModalNapiListaCopy = false;
                            let lStr: string = "Hiba történt (" + response.message + ")";
                            Swal.fire({
                                title: "Hiba!",
                                text: lStr,
                                icon: "error",
                                customClass: {
                                    container: 'my-swal'
                                  }                                                
                            });                              
                        } else {
                            self.showModalNapiListaCopy = false;
                            Swal.fire({
                                title: "Sikeres!",
                                text: "Másolás kész!",
                                icon: "success",
                                customClass: {
                                    container: 'my-swal'
                                  }                                                
                            });                              
                        }
                    },
                "json");
            }

        },
        loadNapiLista: function (aType: string = ""): void {
            var self: any = this;

            self.selectedTermeklist = new Array<Termek>();

            let lUrl: string = "";
            let dateUrl: string = "";

            let tDatumFrom: string = Moment(self.filterSpecNapiDateFrom).format("YYYY-MM-DD");
            let tDatumTo: string = Moment(self.filterSpecNapiDateTo).format("YYYY-MM-DD");

            dateUrl = "?from=" + tDatumFrom + "&to=" + tDatumTo + "&datetype=" + self.filterSpecNapiDateType;

            if(self.strFilterSpecNapi && self.strFilterSpecNapi.length > 0){
                dateUrl = dateUrl + "&subject=" + self.strFilterSpecNapi;
            }

            if(self.filterSpecNapiHelyszin != '-'){
                dateUrl = dateUrl + "&helyszin=" + self.filterSpecNapiHelyszin;
            }

            if(aType === "F") {
                lUrl = func.dataURLFrissFoodForKitchenList;
            } else {
                lUrl = func.dataURLFoodForDayList;
            }

            self.isLoading = true;

            self.napiLista = [];
            
            $.getJSON(lUrl  + "/" + self.logindata_session + dateUrl, function (penztarData: RestBaseResponse): void {
                if(aType === "F") {
                    self.frissForKitchenLista = JSON.parse(penztarData.data) as SpecNapi;
                } else {
                    self.napiLista = JSON.parse(penztarData.data) as SpecNapi;
                }
                self.isLoading = false;
            });

        },
        modifyNapi: function (specnapiItem: SpecNapi): void {
            var self: any = this;

            console.log(specnapiItem);
        },
        deleteFromNapi: function (specnapiItem: SpecNapi): void {
            var self: any = this;

            var saveRecArray: any = [];
            saveRecArray.push({id: specnapiItem.spec_napi_id});

            let lUrl: string = func.dataURLFoodForDayDel + "/" + self.logindata_session;
            $.post(
                lUrl,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {
                    if (response.errcode > 0) {
                        let lStr: string = "Hiba történt (" + response.message + ")";
                        Swal.fire({
                            title: "Hiba!",
                            text: lStr,
                            icon: "error",
                            customClass: {
                                container: 'my-swal'
                              }                                                
                        });                          
                    } else {
                        self.napiLista.splice(self.napiLista.indexOf(specnapiItem), 1);
                    }
                },
            "json");

        },
        check_adoszam: function (taxNumber: string): boolean{
            var self: any = this;
            
            var pattern = /^(\d{7})(\d)\-([1-5])\-(0[2-9]|[13][0-9]|2[02-9]|4[0-4]|51)$/;
            var matches = taxNumber.match(pattern);
            if (matches) {
                // Szorzók az adószám törzsszám része (első 8 jegy) ellenőrző számjegyének
                // meghatározásához (a 8. jegy az első hét jegy alapján). Az adott szorzóval, a
                // törzsszám megfelelő számjegyét (elölről indulva) megszorozzuk, majd ezen
                // szorzatok összegét képezzük.
                var mul = [9, 7, 3, 1, 9, 7, 3];
                // Az adószám törzsszám részének első 7 jegye.
                var base = matches[1].split("");
                // Ellenőrző számjegy (az adószám 8. jegye).
                var check = parseInt(matches[2]);
                // Ellenőrző összeg meghatározása.
                var sum = 0;
                for (var i = 0; i < 7; i++) { sum += parseInt(base[i]) * mul[i]; }
                // Az ellenőrző összeg utolsó jegyének meghatározása (= 10-zel való osztás maradéka).
                var last = sum % 10;
                // Ha a kiszámított ellenőrző számjegy nem nulla, akkor 10-ből kivonjuk.
                if (last > 0) { last = 10 - last; }
                // A kiszámított és kapott ellenőrző számjegyek egyezősége alapján
                // lesz helyes vagy helytelen az adószám.
                return last === check;
            }
            return false;
        },
        check_gen_egyszerusitett_szamla: function (giveOutObject: GiveOut): string{
            var self: any = this;
            
            let res: boolean = false;

            let hibaUzenet: string = "";

            if(!giveOutObject.fizmod || giveOutObject.fizmod==0){
                hibaUzenet += "<li>Nincs kitöltve a fizetési mód!</li>";                
            }

            if(!res && (!giveOutObject.partner_id || giveOutObject.partner_id == 0)){
                hibaUzenet += "<li>Nincs kitöltve a vevő!</li>";                
            }    

            if(!res && giveOutObject.name.length == 0){
                hibaUzenet += "<li>Nincs kitöltve a vevő neve!</li>";                
            }  

            if(!res && !giveOutObject.adoszam && giveOutObject.maganszemely == 0){
                hibaUzenet += "<li>Nincs kitöltve a vevő adószáma!</li>";                
            }    

            if(giveOutObject.adoszam && giveOutObject.adoszam.length > 0){
                if(!self.check_adoszam(giveOutObject.adoszam)){
                    hibaUzenet += "<li>Hibás adószám formátum!</li>"; 
                }
            }

            if(!res && !giveOutObject.city){
                hibaUzenet += "<li>Nincs kitöltve a vevő címe - település!</li>";                
            }            

            if(!res && !giveOutObject.address){
                hibaUzenet += "<li>Nincs kitöltve a vevő címe!</li>";                
            }      
            
            if(!res && !giveOutObject.irszam){
                hibaUzenet += "<li>Nincs kitöltve a vevő irányítószáma!</li>";                
            }   

            if(hibaUzenet && hibaUzenet.length > 0){
                res = true;
            }

            return hibaUzenet;
        },
        gen_egyszerusitett_szamla: function (giveOutObject: GiveOut): void{
            var self: any = this;
            let printUrl: string = "";

            let errStr: string = self.check_gen_egyszerusitett_szamla(giveOutObject);            

            if(errStr.length == 0){
                self.isLoading = true;

                let lUrl: string = func.dataURLEgyszerusitettSzamlaCreateConst + "/" + self.logindata_session;
                
                $.post(
                    lUrl,
                    {datastream: JSON.stringify(giveOutObject), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        let printWindow: any;

                        let kszid: Number = Number(response.data);

                        printUrl = "printESZ_eles.html?id=" + giveOutObject.id + "&kszid=" + kszid;

                        if(kszid > 0) {
                            let printWindow: any = window.open(printUrl, "win", "height=200,width=150");
                            printWindow.focus();

                            setTimeout(function (): void {
                                printWindow.close();
                            }, 5000);
                        }else{
                            alert("HIBA!!! Nem generálható a számla (penztar_id= " + giveOutObject.id + ") !");
                        }

                        self.pay(self.SelectedPenztarItem, true);

                        // self.penztar.splice(self.penztar.indexOf(self.SelectedPenztarItem), 1);

                        self.showModalOut = false;
                        self.isLoading = false;
                    },
                "json");            

            }else{
                errStr = "<ul style='color:red; text-align: left'>" + errStr + "</ul>";

                Swal.fire({
                    title: "Hiba!",
                    html: errStr,
                    icon: "error",
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  });                  
            }
        },
        latta: function(penztarid: Number){
            var self: any = this;

            var saveRecArray: any = [];

            saveRecArray.push({id: penztarid, latta: 1}); // azaz fizetve

            $.post(
                func.dataURLPenztarModConst  + "/" + self.ls_my_session,
                {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                function(response: RestBaseResponse): void {

                },
            "json");
        },
        payFromCukrasz: function (cukraszitem: CukraszObj, noPrint: boolean = false): void {
            var self: any = this;

            var saveRecArray: any = [];

            let printUrl: string;

            if(cukraszitem.tipus == "W") {
                printUrl = "printOrder.html?id=" + cukraszitem.id + "&nopay=1"; // online rendelésre ezt használjuk
            } else {
                if(cukraszitem.tipus == "T") {
                    printUrl = "print.html?id=" + cukraszitem.id + "&istortaorder=1"; // normál kasszásra ezt
                }else{
                    printUrl = "print.html?id=" + cukraszitem.id; // normál kasszásra ezt
                }
            }

            if(cukraszitem.tipus == "W") {

                //egyenlőre csak nyomtatás innen

                if(!noPrint){
                    let lUrl: string = printUrl;

                    let printWindow: any = window.open(lUrl, "win", "height=200,width=150");
                    printWindow.focus();

                    setTimeout(function (): void {
                        printWindow.close();
                    }, 5000);
                }

            } else {


                //egyenlőre csak nyomtatás innen
                if(!noPrint){
                    let lUrl: string = printUrl;
                    let printWindow: any = window.open(lUrl, "win", "height=200,width=150");
                    printWindow.focus();
                    
                    setTimeout(function (): void {
                        printWindow.close();
                    }, 5000);
                }else{
                    
                }
                
            }
        },
        showPayDataDialog: function (penztaritem: CashOut, noPrint: boolean = false, isElolegMode: boolean = false): void {
            var self: any = this;

            self.SelectedPenztarItemForPay = penztaritem;            
            self.SelectedPenztarItemForPayElolegMode = isElolegMode;

            if(!self.SelectedPenztarItemForPay || (Number(self.SelectedPenztarItemForPay.mfid == 0) && self.SelectedPenztarItemForPay && self.SelectedPenztarItemForPay.id <= 0)){

                bootbox.alert({
                    title: "HIBA: Nincs kiválasztva pénztár tétel (" + self.SelectedPenztarItemForPay.id + " :: " + self.SelectedPenztarItemForPay.szum + ")!", 
                    message: "Kattintson újra a kiválasztott tételre!",
                    centerVertical: true               
                });

            }else{                 

                if(self.SelectedPenztarItemForPayElolegMode == false){
                    if(Number(self.SelectedPenztarItemForPay.elorendeles_eloleg) > 0){
                        self.TempCashOutPay = new CashOutPay("KESZPENZHUF", "Készpénz (HUF)", self.SelectedPenztarItemForPay.szum - Number(self.SelectedPenztarItemForPay.elorendeles_eloleg) );
                    }else{
                        self.TempCashOutPay = new CashOutPay("KESZPENZHUF", "Készpénz (HUF)", self.SelectedPenztarItemForPay.szum);
                    }
                }else if(self.SelectedPenztarItemForPayElolegMode == true){
                    self.TempCashOutPay = new CashOutPay("KESZPENZHUF", "Készpénz (HUF)", self.SelectedPenztarItemForPay.elorendeles_eloleg);
                }                

                setTimeout(function(): void {
                    self.showModalPayData = true;                               
                }, self.delayNum + 300);                               

            } 

        },
        addToFizetesiModok: function (NTAKFizetesMOdValue: string): void {
            var self: any = this;

            var hibaStr: string = ""
            var fizmodNameCalc: string = "";
            
            //kalkulálni kell, mert a TempCashOutPay.code van csak bindolva a <select> - vel
            for(let i=0; i<self.ntak_fizetesi_modok.length; i++){

                if(self.ntak_fizetesi_modok[i]['value'] == NTAKFizetesMOdValue /*self.TempCashOutPay.code*/){                    
                    fizmodNameCalc = self.ntak_fizetesi_modok[i]['name'];
                    break;
                }
            }

            if(Number(self.TempCashOutPay.osszeg) <= 0){
                hibaStr = "Kérem adjon meg fizetendő összeget!";
            }
            else if(Number(self.TempCashOutPay.osszeg) > 0 && self.selectedPenztarItemForPayMaradek < self.TempCashOutPay.osszeg){
                hibaStr = "Fizetendő összeg túllépés!";
            }
            else if(self.selectedPenztarItemForPayMaradek <= 0){
                hibaStr = "Nincs már fizetendő összeg!";
            }

                        
            if(hibaStr.length == 0){

                if(NTAKFizetesMOdValue == "VOUCHER"){
                    bootbox.prompt('Kérem adja meg az ajándékutalvány azonosítóját!',
                        function(result) {

                            $.post(
                                func.AjandekUtalvanyUrlValidation + "/" +  result,
                                {supplier_token: func.AjandekUtalvanyszallitoToken, session_id: self.logindata_session },
                                    function(response: RestBaseResponse_WebshopMysystem): void {
                                        
                                        let position = response.error.search("ERROR");
                                        
                                        if(position > -1){
                                            Swal.fire({
                                                title: 'HIBA!',
                                                text: response.error,
                                                icon: 'error',
                                                customClass: {
                                                    container: 'my-swal'
                                                  }                                                
                                              }) ;                                              
                                        }else{
                                            
                                            Swal.fire({
                                                title: 'OK!',
                                                text: 'Érvényes ajándékutalvány!',
                                                icon: 'success',
                                                customClass: {
                                                    container: 'my-swal'
                                                  }                                                
                                              }) ;

                                            self.SelectedPenztarItemForPay.fizetesi_modok.push(new CashOutPay(NTAKFizetesMOdValue/*self.TempCashOutPay.code*/, fizmodNameCalc, self.TempCashOutPay.osszeg));
                                        }
                                                                            
                                    },
                                "json");
                            
                        });                
                }else{
                    self.SelectedPenztarItemForPay.fizetesi_modok.push(new CashOutPay(NTAKFizetesMOdValue/*self.TempCashOutPay.code*/, fizmodNameCalc, self.TempCashOutPay.osszeg));
                }

                //self.TempCashOutPay =  new CashOutPay("KESZPENZHUF", "Készpénz (HUF)", self.selectedPenztarItemForPayMaradek);
            }else{
                Swal.fire({
                    title: 'HIBA!',
                    text: hibaStr,
                    icon: 'error',
                    customClass: {
                        container: 'my-swal'
                      }                                                
                  }) ;     

            }
        },
        removeFromFizetesiModok: function (aCashOutPay: CashOutPay): void {
            var self: any = this;

            self.SelectedPenztarItemForPay.fizetesi_modok.splice(aCashOutPay, 1);

            self.TempCashOutPay = new CashOutPay("KESZPENZHUF", "Készpénz (HUF)", self.selectedPenztarItemForPayMaradek);
        },        
        makePay: function (): void {
            var self: any = this;

            if(
                (self.SelectedPenztarItemForPay && self.SelectedPenztarItemForPay.fizetesi_modok  && self.SelectedPenztarItemForPay.fizetesi_modok.length > 0)
                || (self.SelectedPenztarItemForPay.szum == self.SelectedPenztarItemForPay.elorendeles_eloleg)
            ){             

                if(self.selectedPenztarItemForPayMaradek > 0){
                    bootbox.alert({
                        message: "Nincs megadva a teljes összegre a fizetési mód (maradék: " + self.selectedPenztarItemForPayMaradek + ")!", 
                        centerVertical: true               
                    });  
                    return; 
                }else{
                    self.pay(self.SelectedPenztarItemForPay);                   
                }
            }else{
                bootbox.alert({
                    message: "Kérem adja meg a vendég mivel fizet!", 
                    centerVertical: true               
                });  
                return;              
            }

            self.showModalPayData = false;
        },
        showModalPayDataClosed: function(): void {
            var self: any = this;
            
            bootbox.confirm({
                title: "Megerősítés",
                message: "<i class='fa-solid fa-circle-question'></i> Biztosan bezárod a fizetési ablakot a fizetési adatok mentése nélkül?",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Mégsem'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Igen bezárom'
                    }
                },
                callback: function (result: any) {
                    if(result == true){
                        self.showModalPayData = false;   
                    }
                }
            });  

            
        },        
        pay: function (penztaritem: CashOut, noPrint: boolean = false): void {
            var self: any = this;

            var saveRecArray: any = [];

            let printUrl: string;

            if(penztaritem.mfid > 0) {
                printUrl = "printOrder.html?id=" + penztaritem.mfid; // online rendelésre ezt használjuk
            } else {
                printUrl = "print.html?id=" + penztaritem.id; // normál kasszásra ezt
            }

            if(penztaritem.mfid > 0) {
                
                saveRecArray.push({MFID: penztaritem.mfid, Allapot: "Fizetve", fizetesi_modok: JSON.stringify(penztaritem.fizetesi_modok)}); // azaz fizetve                
                
                $.post(
                    func.dataURLOrderPayConst + "/" +  penztaritem.mfid  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {

                        self.penztar.splice(self.penztar.indexOf(penztaritem), 1);
                        
                        if(!noPrint){
                            let lUrl: string = printUrl;
                            
                            //Felho: nyomtatás kivéve 06.29                            
                            /*let printWindow: any = window.open(lUrl, "win", "height=200,width=150");
                            printWindow.focus();
                            
                            setTimeout(function (): void {
                                printWindow.close();
                            }, 5000);*/
                        }

                    },
                    "json");

            } else {

                var statuszValue: number = 1;
                if(self.SelectedPenztarItemForPayElolegMode){
                    statuszValue = 0;
                }

                saveRecArray.push({id: penztaritem.id, statusz: statuszValue, fizetesi_modok: JSON.stringify(penztaritem.fizetesi_modok)}); // azaz fizetve

                $.post(
                    func.dataURLPenztarModConst  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        let lUrl: string = printUrl;

                        if(!noPrint){
                            self.penztar.splice(self.penztar.indexOf(penztaritem), 1);
                            //Felho: nyomtatás kivéve 06.29
                            /*let printWindow: any = window.open(lUrl, "win", "height=200,width=150");
                            printWindow.focus();

                            setTimeout(function (): void {
                                printWindow.close();
                            }, 5000);*/
                        }else{
                            self.penztar.splice(self.penztar.indexOf(penztaritem), 1);
                        }
                    },
                "json");
            }
        },
        changePortionFoodOut: function(item: FoodOutItem): void {
            if(item.adag === "E") {
                item.adag = "F";
                item.price = Math.round((item.price / 100 * 70) / 10) * 10;
            } else if(item.adag === "F") {
                item.adag = "E";
                item.price = item.originPrice;
            }
            this.totalAmount = sumTotalAmount(this.cashoutlist, this.cashoutlist2);
        },
        changePortionItemE: function (item: CashOutItem,  p: CashOut): void {
            var self: any = this;
            item.adag = "E";
            item.price = item.originPrice;
            item.ossz = item.menny * item.price;

            var saveTetelArray: any = [];
            saveTetelArray.push({id: item.id, adag: item.adag, price: item.price});

            $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        let lSzum: number = 0;
                        for(let i: number=0; i <= p.items.length-1; i++) {
                            lSzum += p.items[i].ossz;
                        }
                        p.szum = lSzum;
                    },
            "json");
        },
        changePortionItemF: function (item: CashOutItem,  p: CashOut): void {
            var self: any = this;
            item.adag = "F";
            item.price = Math.round((item.price / 100 * 70) / 10) * 10;
            item.ossz = item.menny * item.price;

            var saveTetelArray: any = [];
            saveTetelArray.push({id: item.id, adag: item.adag, price: item.price});

            $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                        let lSzum: number = 0;
                        for(let i: number=0; i <= p.items.length-1; i++) {
                            lSzum += p.items[i].ossz;
                        }
                        p.szum = lSzum;
                    },
            "json");
        },
        changePortionItem: function (item: CashOutItem,  args: any): void {
            var self: any = this;

            let type: string = args[0];

            item.adag = type;

            if(type === "E") {
                item.adag = "F";
                item.price = Math.round((item.price / 100 * 70) / 10) * 10;
            } else if(type === "E") {
                item.adag = "E";
                // item.price = item.originPrice;
            }
            item.ossz = item.menny * item.price;

            var saveTetelArray: any = [];
            saveTetelArray.push({id: item.id, adag: item.adag, price: item.price});

            $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                  {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                  function(response: RestBaseResponse): void {
                        // ...
                  },
            "json");

        },
        addData: function(termek: Termek): void {
            var self: any = this;
            var lFind: boolean = false;
            var newSzum: number = 0;
            var pos: number = 0;

            if(self.addDataEMod){
                pos = self.penztarE.indexOf(self.SelectedPenztarItem);
            }else{
                pos = self.penztar.indexOf(self.SelectedPenztarItem);
            }

            
            var itemsOnPos: number = 0;
            if(self.addDataEMod){
                itemsOnPos = self.penztarE[pos].items;
            }else{
                itemsOnPos = self.penztar[pos].items;
            }

            var penztar_id: number = 0;
            if(self.addDataEMod){
                penztar_id = self.penztarE[pos].id;
            }else{
                penztar_id = self.penztar[pos].id;
            }   

            newSzum = Number(self.SelectedPenztarItem.szum) + Number(termek.price);

            var savePenztarArray: any = [];
            savePenztarArray.push({penztar_id: penztar_id,
                                   KESZLET_ID: termek.id,
                                   Azonosito: termek.azon,
                                   mennyiseg: 1,
                                   price: termek.price,
                                   szum: newSzum,
                                   partnerEmail: self.SelectedPenztarItem.partemail});

            $.ajax({
                type: "POST",
                url: func.dataURLPostConst + "/" + self.ls_my_session,
                crossDomain: true,
                data:
                {
                    "datastream": JSON.stringify(savePenztarArray),
                    "session_id": self.logindata_session
                },
                success: function (data: any, status: any, jqXHR: any): void {

                    if(self.addDataEMod){
                        self.penztarE[pos].items.push(new CashOutItem(termek.id,
                                                                        termek.id,
                                                                        termek.azon,
                                                                        termek.name,
                                                                        termek.price,
                                                                        1,
                                                                        termek.price));
                          

                            self.penztarE[pos].szum += Number(termek.price);                        
                    }else{
                        self.penztar[pos].items.push(new CashOutItem(termek.id,
                                                                  termek.id,
                                                                  termek.azon,
                                                                  termek.name,
                                                                  termek.price,
                                                                  1,
                                                                  termek.price));
                                                                

                        self.penztar[pos].szum += Number(termek.price);
                    }

                },
                beforeSend: function (xhr: any): void {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa("aaa" + ":" + "a"));
                    self.isLoading = false;
                },
                error: function (jqXHR: any, status: any): void {
                    alert("fail" + status);
                    self.isLoading = false;
                }
            });

        },
        selkategoriaWithKod: function(katkod: string): void {
            var self: any = this;

            let lURL: string = func.dataURLTermekListConst + "/Kategoria=" + katkod + "/" + self.logindata_session;
            self.isLoading = true;

            $.getJSON(lURL, function (retTermekek: RestBaseResponse): void {
                self.termekek2 = JSON.parse(retTermekek.data) as Array<Termek>;
                self.isLoading = false;
            });

        },
        selectTortarendelesListForFoodout: function(): void {
            var self: any = this;
            let lURL: string = "";

            lURL = func.dataURLTermekTortarendelesListConst + "/" + self.logindata_session + "?onlyActive=1";

            self.isLoading = true;

            $.getJSON(lURL, function (retTermekek: RestBaseResponse): void {
                self.termekek = JSON.parse(retTermekek.data);
                self.isLoading = false;
            });            

        },
        selkategoria: function(kat: TermekKategoria): void {
            var self: any = this;
            let lURL: string = "";

            self.searchTermekFilter = ""; 

            if(Number(kat.kod) > 0) {
                lURL = func.dataURLTermekListConst + "/Kategoria=" + kat.kod + "/" + self.logindata_session;
            } else {
                lURL = func.dataURLTermekNapiListConst + "/" + self.logindata_session;
            }

            self.isLoading = true;

            $.getJSON(lURL, function (retTermekek: RestBaseResponse): void {
                self.termekek = JSON.parse(retTermekek.data);
                self.isLoading = false;
            });
        },
        changeVonalkod: function(textInputID: string = ""): void {
            var self: any = this;

            let isFoodOutEnd: boolean = false;
            if(textInputID == 'searchTermekFilterVonalkod' && (self.searchTermekFilterVonalkod && self.searchTermekFilterVonalkod == 9999) ){
                isFoodOutEnd = true; // Speciálisan, ha 9999-es kód érkezik, akkor vége a rögzítésnek
                self.toCashout();
                self.searchTermekFilterVonalkod = "";
                return;
            }else if(textInputID == 'searchTermekFilterVonalkod' && (self.searchTermekFilterVonalkod && self.searchTermekFilterVonalkod == 9998) ){
                self.switchOutIn('IN');
                self.searchTermekFilterVonalkod = "";
                return;
            }else if(textInputID == 'searchTermekFilterVonalkod' && (self.searchTermekFilterVonalkod && self.searchTermekFilterVonalkod == 9997) ){
                self.switchOutIn('OUT');
                self.searchTermekFilterVonalkod = "";
                return;
            }            

            if(self.searchTermekFilterVonalkod && self.searchTermekFilterVonalkod.length == 10){
                self.isLoading = true;

                if(!isFoodOutEnd){
                    let lURL: string = "";
        
                    lURL = func.dataURLTermekListConst + "/-/" + self.logindata_session + "?search=" + self.searchTermekFilterVonalkod+"&kivetelkategoria=1";
                
                    self.isLoading = true;
        
                    $.getJSON(lURL, function (retTermekek: RestBaseResponse): void {
                        self.termekek = JSON.parse(retTermekek.data);
                        if(self.termekek && self.termekek.length == 1){
                            self.addDataToFoodOut(self.termekek[0]);
                            if(textInputID){
                                $("#" + textInputID).focus();
                                $("#" + textInputID).select();
                            }else{
                                $("#searchTermekFilter").focus();
                            }
                        }
                        self.searchTermekFilterVonalkod = "";

                        self.isLoading = false;
                    });        
                }
            }
        },
        searchTermekFilterChange: function(): void {
            var self: any = this;
            self.isLoading = true;

            //Vonalkód azonosítás összevonása
            if(Number(self.searchTermekFilter) > 0){
                console.log("searchTermekFilterChange");
                self.searchTermekFilterVonalkod = self.searchTermekFilter;
                self.changeVonalkod('searchTermekFilterVonalkod');
                self.searchTermekFilter = "";
            }else{
                if(self.searchTermekFilter != ""){
                    let lURL: string = "";

                    lURL = func.dataURLTermekListConst + "/-/" + self.logindata_session + "?search=" + self.searchTermekFilter+"&kivetelkategoria=1";
                
                    self.isLoading = true;

                    $.getJSON(lURL, function (retTermekek: RestBaseResponse): void {
                        self.termekek = JSON.parse(retTermekek.data);
                        self.isLoading = false;
                    });
                }
            }

        },
        addTermek: function(penztaritem: CashOut, eMod: boolean = false): void {
            var self: any = this;
        
            self.addDataEMod = eMod;
            if(penztaritem.mfid == 0){
                self.SelectedPenztarItem = penztaritem;
                self.modalHeaderTitle = "Termékkategóriák - # " + penztaritem.id;
                self.showModal = true;
            }            
        },
        changeAfaOnlyItem: function(item: CashOutItem, aMertek: number){
            var self: any = this;

            if(self.userObject.csoport != 20){
                Swal.fire({
                    title: "Figyelmeztetés!",  
                    text: "Az áfa átállításához nincs jogosultsága!",
                    icon: "warning",   
                });
            }else{            
                item.afamertek = aMertek;
            }
        },
        changeAfa5: function(item: CashOutItem, penztaritem?: CashOut): void {
            var self: any = this;

            if(self.userObject.csoport != 20){
                Swal.fire({
                    title: "Figyelmeztetés!",  
                    text: "Az áfa átállításához nincs jogosultsága!",
                    icon: "warning",   
                });
            }else{                

                var saveTetelArray: any = [];
                saveTetelArray.push({id: item.id, afamertek: 5});

                $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                            item.afamertek = 5;
                        },
                "json");      

            }      
            
        },
        changeAfa18: function(item: CashOutItem, penztaritem?: CashOut): void {            
            var self: any = this;

            if(self.userObject.csoport != 20){
                Swal.fire({
                    title: "Figyelmeztetés!",  
                    text: "Az áfa átállításához nincs jogosultsága!",
                    icon: "warning",   
                });
            }else{                
                var saveTetelArray: any = [];
                saveTetelArray.push({id: item.id, afamertek: 18});

                $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                            item.afamertek = 18;
                        },
                "json");  
            }             
        },
        changeAfa27: function(item: CashOutItem, penztaritem?: CashOut): void {
            var self: any = this;

            if(self.userObject.csoport != 20){
                Swal.fire({
                    title: "Figyelmeztetés!",  
                    text: "Az áfa átállításához nincs jogosultsága!",
                    icon: "warning",   
                });
            }else{                
                var saveTetelArray: any = [];
                saveTetelArray.push({id: item.id, afamertek: 27});

                $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                    {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                    function(response: RestBaseResponse): void {
                            item.afamertek = 27;
                        },
                "json");   
            }            
        },
        pluszMenny: function(item: CashOutItem, penztaritem?: CashOut): void {
            var self: any = this;

            let newMenny: number = Number(item.menny) + 1;
            let newOssz: number = Number(item.ossz) + Number(item.price);

            let newSzum: number = 0;
            let penztarID: number = 0;
            let partEmail: string = "";

            if(penztaritem) {
                newSzum = Number(penztaritem.szum) + Number(item.price);
                penztarID = penztaritem.id;
                partEmail = penztaritem.partemail;
            }

            var saveTetelArray: any = [];
            saveTetelArray.push({id: item.id, mennyiseg: newMenny, szum: newSzum, penztar_id: penztarID, partnerEmail: partEmail});

            $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                   {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                   function(response: RestBaseResponse): void {
                        item.menny = newMenny;
                        item.ossz =  newOssz;
                        if(penztaritem) {
                            penztaritem.szum += Number(item.price);
                        }
                        self.totalAmount += item.price;
                    },
            "json");

        },
        minuszMenny: function(item: CashOutItem, penztaritem?: CashOut): void {
            var self: any = this;
            var newMenny: number = Number(item.menny) - 1;
            var newPrice: number = Number(item.ossz) - Number(item.price);

            let newSzum: number = 0;
            let penztarID: number = 0;
            let partEmail: string = "";

            if(penztaritem) {
                newSzum = Number(penztaritem.szum) - Number(item.price);
                penztarID = penztaritem.id;
                partEmail = penztaritem.partemail;
            }

            bootbox.confirm({
                title: "",
                message: "Biztosan törli a tételt?",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Mégsem'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Igen'
                    }
                },
                callback: function (result: any) {
                    if(result == true){
                        
                        var saveTetelArray: any = [];

                        if(newMenny === 0) {
                            saveTetelArray.push({id: item.id, del: 1, szum: newSzum, penztar_id: penztarID, partnerEmail: partEmail});
                        } else {
                            saveTetelArray.push({id: item.id, mennyiseg: newMenny, szum: newSzum, penztar_id: penztarID, partnerEmail: partEmail});
                        }
            
                        $.post(func.dataURLPostTetConst  + "/" + self.ls_my_session,
                               {datastream: JSON.stringify(saveTetelArray), session_id: self.logindata_session },
                               function(response: RestBaseResponse): void {
                                   if(response.errcode === 0 ) { // valid login
                                        if(newMenny === 0) {
                                            if(penztaritem) {
                                                penztaritem.items.splice(penztaritem.items.indexOf(item), 1);
                                                if(penztaritem.items.length === 0) {
                                                    self.penztar.splice(self.penztar.indexOf(penztaritem), 1);
                                                }
                                            }
                                        } else {
                                            item.menny = newMenny;
                                            item.ossz -= item.price;
                                        }
                                        if(penztaritem) {
                                            penztaritem.szum -= item.price;
                                        }
                                    } else {
                                        if (response.errcode === 100) { // invalid or expired login
                                            self.changeModul(4);
                                        }
                                    }
                        }, "json");
            

                    }
                }
            });

        },
        isHealth: function(): void {
            var self: any = this;
            
            self.ls_my_session = localStorage.getItem("my_session");
            
        },
        stornoPenztar: function (penztarItem: CashOut): void {
            var self: any = this;

            var saveRecArray: any = [];
            let lUrl: string = "";
            
            lUrl = func.dataURLPenztarModConst + "/" + self.logindata_session;    
            
            bootbox.confirm({
                title: "",
                message: "Biztosan törlöd a rendelést (" + penztarItem.id + ")?",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Mégsem'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Igen'
                    }
                },
                callback: function (result: any) {
                    if(result == true){

                        Swal.fire({
                            title: "Kérem adja meg a stornózás indokát!",
                            input: "textarea",
                            inputAttributes: {
                              autocapitalize: "off"
                            },
                            showCancelButton: true,
                            confirmButtonText: "Stornózás folytatása",
                            showLoaderOnConfirm: true,
                            preConfirm: () => {
                                let torles_indoklas: any = document.getElementById("swal2-textarea");
                                if (torles_indoklas.value && torles_indoklas.value.length < 4000) {
                                    self.isLoading = true;

                                    saveRecArray.push({id: penztarItem.id, del: 1});

                                    $.post(
                                        lUrl,
                                        {datastream: JSON.stringify(saveRecArray), session_id: self.logindata_session, torles_indoklas: torles_indoklas.value },
                                        function(response: RestBaseResponse): void {
                                            self.isLoading = false;
                                            self.refreshPenztar(true);
                                        },
                                    "json");  

                                } else {
                                    self.isLoading = false;
                                    
                                    let hibaUzenet: string = "";
                                    if(!torles_indoklas.value){
                                         hibaUzenet = "Nincs megadva indoklás!"; 
                                    }else if(torles_indoklas.value.length > 4000){
                                        hibaUzenet = "Az indoklás túl hosszú (max. 4000 karakter)!";
                                    }

                                    Swal.showValidationMessage(hibaUzenet);
                                }
                              }, 
                            allowOutsideClick: false
                          }).then((result: any) => {
                            console.log("result = " + JSON.stringify(result));
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: "Stornózás sikeres!",
                                icon: "success"
                                //imageUrl: result.value.avatar_url
                              });
                            }
                          });
          
                    }
                }
            });              

        },
        refreshPenztar: function (newListMode: boolean = false): void {
            var self: any = this;
            
            self.ls_my_session = localStorage.getItem("my_session");
            if (self.numVisibleModule === 0 && self.ls_my_session.length > 0) {

                let maxLocalPenztarArrayID: number = 0;
                let maxLocalPenztarOrderArrayID: number = 0;

                // maximumok kikalkulálása, a régi módszer szerint, valószínű nem lesz már rá szükség
                if(!newListMode){                    
                    if(self.penztar && self.penztar.length > 0) {
                        let j: number = 0;
                        for(j=0; j <= self.penztar.length-1; j++) {
                            if(self.penztar[j].mfid === 0) {
                                if(Number(self.penztar[j].id) > maxLocalPenztarArrayID) {
                                    maxLocalPenztarArrayID = Number(self.penztar[j].id);
                                }
                            }

                            if(self.penztar[j].mfid > 0) {
                                if(Number(self.penztar[j].mfid) > maxLocalPenztarOrderArrayID) {
                                    maxLocalPenztarOrderArrayID = Number(self.penztar[j].mfid);
                                }
                            }
                        }
                    }
                }

                if(self.isShowPenztarTetelek || self.isShowPenztarWebes){
                    self.isLoading = true;
                }

                // pénztár felé feladott akut
                if(self.isShowPenztarTetelek){
                    var penztarListUrl: string = "";

                    if(!newListMode){
                        penztarListUrl = func.dataURLPenztarConst  + "/" + maxLocalPenztarArrayID + "/" + self.ls_my_session;
                    }else{
                        penztarListUrl = func.dataURLPenztarListNewConst  + "/" + Moment(self.penztarFilterDate).format("YYYY-MM-DD") + "/" + self.filterPenztarFilterHelyszin + "/" + Number(self.penztarFilterStr) + "/"  + self.ls_my_session;
                    }
                    
                    $.getJSON(penztarListUrl,
                        function (penztarData: RestBaseResponse): void {
                            if(penztarData.errcode === 0 ) { // valid login
                                self.cntLoading += 1;
                                
                                if(self.refreshPenztarArray) {
                                    self.refreshPenztarArray.splice(0, self.refreshPenztarArray.length);
                                }
                                self.refreshPenztarArray = JSON.parse(penztarData.data);

                                if(!newListMode){
                                    let i: number;
                                    if(self.refreshPenztarArray && self.refreshPenztarArray.length > 0) {                                                                

                                        for(i=0; i <= self.refreshPenztarArray.length-1; i++) {
                                            if(Number(self.refreshPenztarArray[i].id) > Number(maxLocalPenztarArrayID)) {
                                                if(!self.penztar) {
                                                    self.penztar = [];
                                                }
                                                self.penztar.push(self.refreshPenztarArray[i]);
                                            }
                                        }
                                    }
                                }else{
                                    self.penztar = self.refreshPenztarArray;
                                }

                                if(self.penztar) {
                                    self.cntBlock = self.penztar.length;
                                }
                                self.isLoading = false;
                            } else {
                                if (penztarData.errcode === 100) { // invalid login

                                    Swal.fire({
                                        title: "Figyelmeztetés!",
                                        text: "Tétlenség miatt lejárt a munkamenet, a rendszer kilépteti, kérem lépjen be újra!",
                                        icon: "warning",
                                        customClass: {
                                            container: 'my-swal'
                                          }                                                
                                    });  

                                    self.changeModul(4);
                                }
                            }
                        });
                }

                // online rendelésből 
                if(self.isShowPenztarWebes){
                    self.isLoading = true;

                    let urlKieg: string = "";
                    if(self.penztarFilterStr && self.penztarFilterStr.length > 0){
                        urlKieg = "?MFID=" + self.penztarFilterStr;
                    }

                    let lUrlO: string = func.dataURLOrderListConst  + "/" + maxLocalPenztarOrderArrayID + "/" + self.ls_my_session + urlKieg;                    
                    
                    $.getJSON(lUrlO,
                        function (orderListResponse: RestBaseResponse): void {

                            let i: number;
                            let j: number;
                            let lOrdersArray: any = JSON.parse(orderListResponse.data) as Array<Order>;
                            let lCashout: CashOut;
                            let lCashoutItem: CashOutItem;                            
                            if(lOrdersArray) {

                                self.cntPenztarOrderCnt = lOrdersArray.length;

                                for(i=0; i <= lOrdersArray.length-1; i++) {
                                    let lTempOrder: Order = lOrdersArray[i] as Order;

                                    lCashout = new CashOut();
                                    lCashout.id = 999;
                                    lCashout.szum = lTempOrder.osszeg;

                                    if(lTempOrder.bonus > 0){
                                        lCashout.szum = lCashout.szum - lTempOrder.bonus;
                                    }

                                    lCashout.ido = lTempOrder.datum;
                                    lCashout.mfid = lTempOrder.mfid;
                                    lCashout.cukrasznak = lTempOrder.cukrasznak;
                                    lCashout.cukraszstatusz = lTempOrder.cukraszstatusz;
                                    lCashout.bonus = lTempOrder.bonus;                                    

                                    lCashout.username = lTempOrder.username;
                                    if(lTempOrder.mfid > 0){
                                        lCashout.nev = lTempOrder.szmlNev;
                                        lCashout.irsz = lTempOrder.szmlPostCode;
                                        lCashout.city = lTempOrder.szmlCity;
                                        lCashout.address = lTempOrder.szmlAdress;
                                        lCashout.telefon = lTempOrder.telefon;
                                        lCashout.adoszam = lTempOrder.szmlAdoszam;
                                        lCashout.szallmod = lTempOrder.szallmod;
                                    }else{
                                        lCashout.nev = lTempOrder.nev;
                                        lCashout.city = lTempOrder.city;
                                        lCashout.address = lTempOrder.address;
                                        lCashout.telefon = lTempOrder.telefon;
                                        lCashout.szallmod = lTempOrder.szallmod;
                                    }
                                    
                                    lCashout.note = lTempOrder.note;

                                    for(j=0; j <= lOrdersArray[i].tetelek.length-1; j++) {
                                        lCashoutItem = new CashOutItem( 888,
                                                                        0,
                                                                        "",
                                                                        lOrdersArray[i].tetelek[j].name,
                                                                        lOrdersArray[i].tetelek[j].egysegar,
                                                                        lOrdersArray[i].tetelek[j].menny,
                                                                        lOrdersArray[i].tetelek[j].ertek,
                                                                        "",
                                                                        lOrdersArray[i].tetelek[j].afamertek
                                                                    );
                                        lCashout.items.push(lCashoutItem);
                                    }

                                    if(!self.penztar) {
                                        self.penztar = [];
                                    }
                                    self.penztar.push(lCashout);
                                }
                            }
                            self.isLoading = false;
                    });
                }

            }
        },
        filterNonNumeric() {
            // Replace non-numeric characters with an empty string

            this.NumPadNumberTxt = this.NumPadNumberTxt.replace(/[^0-9.]/g, "");

        },
        runTest:  function(): void {
            var self: any = this;

            console.log("test start");

            //window.open("http://localhost:9502/", "TU1", "_blank"); 
            $("#validationEmail").val("");
            $("#validationPass").val("");
            $("#validationEmail").focus();
            $("#validationEmail").val("yyy");
            $("#validationPass").val("xxx");
            $("#loginbtn" ).click();

            setTimeout(function():void { 
                $("#newElorendelesBtn" ).click();
                
                setTimeout(function():void {
                    self.searchTermekFilter = "12";
                    
                    $("#btnTermekFilter").click();
                },1000);

            },1000);
                
            console.log("test end");
            

        },
        loadPenztar:  function(): void {
            var self: any = this;

            self.ls_my_session = localStorage.getItem("my_session");
            if((self.ls_my_session) && (self.ls_my_session.length > 0)) {
                // dataURLLogin = dataURLLogin + '/' + ls_my_session;
            }

            if(self.isShowPenztarTetelek){
               self.refreshPenztar(true);
            }

            self.isLoading = true;
            $.getJSON(func.dataURLKategoriak + "/" + self.logindata_session, function (retKat: RestBaseResponse): void {
                self.kategoriak = JSON.parse(retKat.data) as TermekKategoria;
                self.isLoading = false;
            });


            self.isLoading = true;
            $.getJSON(func.dataURLTermekConst  + "/" + self.logindata_session, function (retTermekek: RestBaseResponse): void {
                self.termekek = JSON.parse(retTermekek.data) as Termek;
                self.isLoading = false;
            });

            self.isLoading = true;
            $.getJSON(func.dataURLAfaConst  + "/" + self.logindata_session, function (ret: RestBaseResponse): void {
                self.afamertekek = JSON.parse(ret.data) as Kodtabla;
                self.isLoading = false;
            });

            self.isLoading = true;
            $.getJSON(func.dataURLTortaformakConst  + "/" + self.logindata_session, function (ret: RestBaseResponse): void {
                self.tortaformak = JSON.parse(ret.data) as Kodtabla;
                self.isLoading = false;
            });       
            
            self.isLoading = true;
            $.getJSON(func.dataURLTortaKapacitasConst  + "/" + self.logindata_session, function (ret: RestBaseResponse): void {
                console.log(func.dataURLTortaKapacitasConst  + "/" + self.logindata_session);
                self.kapacitasok = JSON.parse(ret.data) as Kapacitas;
                self.isLoading = false;
            });   

            if(self.cntLoading > 0) {
                self.isAlertVisible = true;
            }

        },
        /**
         * Has changed
         * @param  Object|undefined   newFile   Read only
         * @param  Object|undefined   oldFile   Read only
         * @return undefined
         */
        inputFile: function (newFile: any, oldFile: any): any {
            if (newFile && oldFile && !newFile.active && oldFile.active) {
            // get response data
            if (newFile.xhr) {
                // get the response status code
                console.log("status", newFile.xhr.status);
            }
            }
        },
        /**
         * Pretreatment
         * @param  Object|undefined   newFile   Read and write
         * @param  Object|undefined   oldFile   Read only
         * @param  Function           prevent   Prevent changing
         * @return undefined
         */
        inputFilter: function (newFile: any, oldFile: any, prevent: any): any {
            if (newFile && !oldFile) {
            // filter non-image file
            if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                return prevent();
            }
            }
            // create a blob field
            newFile.blob = "";
            let URL: any = window.URL || (<any>window).webkitURL;
            if (URL && URL.createObjectURL) {
            newFile.blob = URL.createObjectURL(newFile.file);
            }
        }
    },
    components: {
          FileUpload: VueUploadComponent,
          //HelloComponent,
          Datepicker,
          'barcode': VueBarcode
          /*TermekBlockComponent*/
    },
    computed: {  
        archivMennyiseg: function(): string {
            
            let formattedHtml = '<div>';
            const mennyisegOsszesites: Record<string, number> = this.archivOsszesitesek[0];

            for (const key in mennyisegOsszesites) {
                if (Object.prototype.hasOwnProperty.call(mennyisegOsszesites, key)) {
                    formattedHtml += ` <strong>${key}:</strong> ${mennyisegOsszesites[key]}`;
                }
            }
        
            formattedHtml += '</div>';
            return formattedHtml;
        },            
        archivPrice: function(): number {
            return this.archivOsszesitesek[1];
        },
        archivOsszesitesek: function(): [Record<string, number>, number] {
            let mennyisegOsszesites: Record<string, number> = {};
            let lRetPrice: number = 0;
        
            if(this.archivMegrendelesekLista){
                for (let i: number = 0; i < this.archivMegrendelesekLista.length; i++) {
                    let tetel = this.archivMegrendelesekLista[i];
                    let mennyiseg = Number(tetel['mennyiseg'] || 0);
                    let egyseg = tetel['Mee'] || 'ismeretlen';
                    let price = Number(tetel['price'] || 0);
            
                    // Mennyiségi egység szerinti csoportosítás
                    if (!mennyisegOsszesites[egyseg]) {
                        mennyisegOsszesites[egyseg] = 0;
                    }
                    mennyisegOsszesites[egyseg] += mennyiseg;
            
                    // Ár összesítése
                    lRetPrice += price;
                }
            }

            return [mennyisegOsszesites, lRetPrice];
        },                 
        ntakBekuldottFizetettOsszegSum: function(): number {
            let lRet: number = 0;

            for(let i: number = 0; i<this.NTAKLista.length; i++){
                if(this.NTAKLista[i]['NTAK_ellenorzes'] && this.NTAKLista[i]['NTAK_ellenorzes'] == 1){
                    lRet += Number(this.NTAKLista[i]['fizetettVegosszeg']);
                }
            }

            return lRet;
        },    
        ntakNincsBekuldveOsszegSum: function(): number {
            let lRet: number = 0;

            for(let i: number = 0; i<this.NTAKLista.length; i++){
                if(!this.NTAKLista[i]['NTAK_ellenorzes'] || this.NTAKLista[i]['NTAK_ellenorzes'] != 1){
                    lRet += Number(this.NTAKLista[i]['fizetettVegosszeg']);
                }
            }
                
            return lRet;
        },              
        nincsAtveveCount: function(): number {
            let lRet: number = 0;

            for(let i: number = 0; i<this.cukraszlista.length; i++){
                if(this.cukraszlista[i]['atveve'] == 1){
                    lRet++;
                }
            }

            return lRet;
        },
        cntNTAKListaBekuldott: function(): number {
            let lRet: number = 0;

            if(this.NTAKLista){
                this.NTAKLista.forEach(element => {
                    if((element.NTAK_feldolgozasAzonosito && element.NTAK_feldolgozasAzonosito!='') && (element.NTAK_ellenorzes && element.NTAK_ellenorzes == 1)){
                        lRet++;
                    }
                });
            }

            return lRet;
        },        
        cntNTAKListaBekuldetlen: function(): number {
            let lRet: number = 0;

            if(this.NTAKLista){
                this.NTAKLista.forEach(element => {
                    if((!element.NTAK_feldolgozasAzonosito || element.NTAK_feldolgozasAzonosito=='') || (!element.NTAK_ellenorzes || element.NTAK_ellenorzes != 1)){
                        lRet++;
                    }
                });
            }

            return lRet;
        },
        selectedPenztarItemForPayMaradek: function(): number {
            let lRet: number = 0;

            let fizetesek: number = 0;
            
                this.SelectedPenztarItemForPay.fizetesi_modok.forEach(item => {
                    fizetesek += Number(item.osszeg); 
                });            
                if(this.SelectedPenztarItemForPay){
                    if(this.SelectedPenztarItemForPayElolegMode == false){                    
                        lRet = Number(this.SelectedPenztarItemForPay.szum) - Number(fizetesek);                      
                        console.log(JSON.stringify(this.SelectedPenztarItemForPay));
                        if(Number(this.SelectedPenztarItemForPay.elorendeles_eloleg) > 0){
                            //let vanEloleghezKotottFizetes : boolean = false;
                            lRet = lRet - Number(this.SelectedPenztarItemForPay.elorendeles_eloleg);
                        }

                    }else if(this.SelectedPenztarItemForPayElolegMode == true){                    
                        lRet = Number(this.SelectedPenztarItemForPay.elorendeles_eloleg) - Number(fizetesek);                        
                    }
                }

            return lRet;                

        },
        selectedSpecNapiTermeklistErrorCnt: function(): number {
            let lRet: number = 0;

            this.selectedSpecNapiTermeklist.forEach(item => {
                if(item.mennyiseg == 0){
                    lRet++;
                }

                if(item.szavatossagi_ora == 0){
                    lRet++;
                }       
                
                if(!item.gyartas_datum || item.gyartas_datum == ''){
                    lRet++;
                }        
                
                if(item.helyszin=='NONE' || item.helyszin==''){
                    lRet++;
                }                   

            });            
            
            return lRet;
        },
    }
});

function runRefresh(): void {
    //ideiglenesen kiszedve 2024-03-29, hogy ne frissítsen automatikusan
    //v3.refreshPenztar();
}


// tslint:disable-next-line:typedef
$(document).ready(function () {
     //ideiglenesen kiszedve 2024-03-29, hogy ne frissítsen automatikusan
    //var id: any = setInterval(v3.refreshPenztar, 10000);
    //var id2: any = setInterval(v3.loadFrissLista, 60000); // 1 perc
    var id3: any = setInterval(v3.isHealth, 60000); // 1 perc
   


    // $("#menu").mmenu();

    /*$(document).on("click",".navbar-collapse.in",function(e): void {
        if( $(e.target).is("a") ) {
            $(this).collapse("hide");
        }
    });*/

    $("#validationEmail").focus();
    $("#validationEmail").select();

    window.addEventListener('resize', adjustTableHeight);
    window.addEventListener('load', adjustTableHeight);

    function adjustTableHeight() {
        const header = document.getElementById('table-container-header');

        if (header) {  // Ellenőrizzük, hogy a header nem null-e
            const headerHeight = header.offsetHeight + 58 /* navbar magassága fixen*/;
            const tableContainer = document.querySelector('.table-container') as HTMLElement;
            
            if (tableContainer) {
                tableContainer.style.height = `calc(100vh - ${headerHeight}px)`;                               
            }
        }
    }

});


