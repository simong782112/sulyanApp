
import * as $ from "jquery";
var bootbox: any = require("bootbox");

import { RestBaseResponse, CashOut, CashOutItem, TermekKategoria, Termek } from "./baseclasses";

//export let AjandekUtalvanyszallitoToken: string = "93296a5b-bd4a-400f-aa36-91e7d4742fa8"; // ÉLES rendszerhez
let AjandekUtalvanyUrl: string = "https://webshop.mysystem.hu/"; // ÉLES rendszerhez
export let AjandekUtalvanyszallitoToken: string = "93296a5b-bd4a-400f-aa36-91e7d4742fa8"; // TESZT LOCAL rendszerhez
//let AjandekUtalvanyUrl: string = "http://localhost:9518/"; // TESZT LOCAL rendszerhez
export let AjandekUtalvanyUrlValidation: string = AjandekUtalvanyUrl + "api/ajandekutalvany/validation";


let NTAKUrl: string = "https://mysystem.hu/ntak/eles/";
export let NTAKUrlNapiZaras: string = NTAKUrl + "index.php?kivulrol=1&napizaras=1";

let NTAKUrlGodollo: string = "https://mysystem.hu/ntak/eles_CU25110166/";
export let NTAKUrlNapiZarasGodollo: string = NTAKUrlGodollo + "index.php?kivulrol=1&napizaras=1";

let mainUrl: string = "https://www.mysystem.hu/RestService/";

// export var dataURLLogin: string = mainUrl + "loginuser/marikakonyhaja.rendeles@gmail.com/abcd1234";
export var dataURLLogin: string = mainUrl + "loginuser";
export var dataURLLogout: string = mainUrl + "logout";
export var dataURLLoggedUserName: string = mainUrl + "loggeduser/name";
export let dataURLTermekNapiListConst: string = mainUrl + "keszlet/napilist";
export let dataURLTermekListConst: string = mainUrl + "keszlet/list";
export let dataURLTermekGetConst: string = mainUrl + "keszlet/view";
export let dataURLTermekAddConst: string = mainUrl + "keszlet/add";
export let dataURLTermekModConst: string = mainUrl + "keszlet/mod";

export let dataURLKapcsoltTermekListConst: string = mainUrl + "kapcsolt_keszlet/list";

export let dataURLTermekTortarendelesListConst: string = mainUrl + "penztar_tortarendeles_foodout/list";

export let dataURLFrissFoodForKitchenList: string = mainUrl + "penztartet/list";
export let dataURLFrissFoodForKitchenSave: string = mainUrl + "specnapi/add/F";

export let dataURLFoodForDayList: string = mainUrl + "specnapi/list";
export let dataURLFoodForDayAdd: string = mainUrl + "specnapi/add";
export let dataURLFoodForDayEdit: string = mainUrl + "specnapi/mod";
export let dataURLFoodForDayDel: string = mainUrl + "specnapi/del";
export let dataURLNapiListaCopy: string = mainUrl + "specnapi/copy";


export let dataURLKoretConst: string = mainUrl + "keszlet/list";
export let dataURLTermekConst: string = mainUrl + "keszlet/list/Kategoria=-99";

export let dataURLKategoriak: string = mainUrl + "kodtabla/list/RAKTARKESZKAT";
export let dataURLKategoriakF: string = mainUrl + "kodtabla/listall";
export let dataURLKatConst: string = mainUrl + "kodtabla/list/RAKTARKESZKAT";
export let dataURLAfaConst: string = mainUrl + "kodtabla/list/AFAMERT";
export let dataURLTortaformakConst: string = mainUrl + "kodtabla/list/TORTAFORMA";
export let dataURLTortaKapacitasConst: string = mainUrl + "penztar_tortarendeles_kapacitas/list";
export let dataURLTortarendelesekByIdo: string = mainUrl + "penztar_tortarendeles_by_ido/list";
export let dataURLTortaArazasConst: string = mainUrl + "penztar_tortarendeles_arazas/list";


export let dataURLRendelesekOsszesitve: string = mainUrl + "rendelesek_osszesitve/list";
export let dataURLWebesRendelesekOsszesitve: string = mainUrl + "webes_rendelesek_osszesitve/list";

export let dataURLWebshopSzallAtveteliModokConst: string = mainUrl + "webshop_szallatvetelimodok/list";

export let dataURLPenztarListNewConst: string = mainUrl + "penztarbyfilter/list";
export let dataURLPenztarConst: string = mainUrl + "penztar/list";
export let dataURLPenztarViewConst: string = mainUrl + "penztar/view/";
export let dataURLPenztarPostConst: string = mainUrl + "penztar/add";
export let dataURLPenztarModConst: string = mainUrl + "penztar/mod";

export let dataURLMegrendelesModConst: string = mainUrl + "rendelesmodositas/mod";

export let dataURLTortaRendelesekListConst: string = mainUrl + "penztar_tortarendeles/list";
export let dataURLTortaRendelesPostConst: string = mainUrl + "penztar_tortarendeles/add";
export let dataURLTortaRendelesViewConst: string = mainUrl + "penztar_tortarendeles/view/";
export let dataURLLTortaRendelesModConst: string = mainUrl + "penztar_tortarendeles/mod";
export let dataURLLTortaRendelesCheckInPenztarConst: string = mainUrl + "checktortarendelesinpenztar/list";

export let dataURLLTortaKiegListConst: string = mainUrl + "penztar_tortarendeles_kiegeszitok/list";

export let dataURLCukraszListConst: string = mainUrl + "cukrasz/list";
export let dataURLIrszListConst: string = mainUrl + "irsz/list";

export let dataURLPostConst: string = mainUrl + "penztartet/add";
export let dataURLPostTetConst: string = mainUrl + "penztartet/mod";

export let dataURLNapiMunkaListConst: string = mainUrl + "napimunka/list";
export let dataURLNapiMunkaPostConst: string = mainUrl + "napimunka/parse";

export let dataURLNapiForgalomListConst: string = mainUrl + "napiforgalom/list";

export let dataURLArchivListConst: string = mainUrl + "archiv/list";

export let dataURLNTAKTranzakcioListConst: string = mainUrl + "ntaktranzakciok/list";
export let dataURLNTAKTranzakcioViewConst: string = mainUrl + "ntaktranzakciok/view";
export let dataURLNTAKZarasTranzakcioListConst: string = mainUrl + "ntakzarastranzakciok/list";
export let dataURLNTAKGenerateLezarasConst: string = mainUrl + "penztar_fizetesi_mod_generate/parse";

export let dataURLPartnerListConst: string = mainUrl + "partner/list/aaa";
export let dataURLPartnerGetConst: string = mainUrl + "partner/view";
export let dataURLPartnerAddressListConst: string = mainUrl + "partner/address";
export let dataURLPartnerBigListConst: string = mainUrl + "partner_big/list";
export let dataURLSyncPartnerFromWebshopConst: string = mainUrl + "penztar/sync_partner_from_webshop";

export let dataURLSzallLevCreateConst: string = mainUrl + "szalllev/create";
export let dataURLEgyszerusitettSzamlaCreateConst: string = mainUrl + "kiszamla/genegyszerusitettszamlapenztarbol";
export let dataURLEgyszerusitettSzamlaListConst: string = mainUrl + "kiszamla/list";

export let dataURLOrderListConst: string = mainUrl + "order/list";
export let dataURLOrderGetConst: string = mainUrl + "order/view";
export let dataURLSaveOrderStatuszConst: string = mainUrl + "order/savecukraszdata";
export let dataURLOrderPayConst: string = mainUrl + "order/pay";

export let dataURLParsePartner: string = mainUrl + "partner/parse";

export let dataURLUserBonusGetConst: string = mainUrl + "userbonus/view";


export enum Sections {
    PenztarSection,
    TermekViewSection,
    TermekListSection,
    FoodOutSection,
    LoginSection,
    NapiSection,
    FrissSection,
    FrissRendeloSection,
    TortarendeloListSection,
    TortarendeloSection,
    BarcodePrintView,
    NapiMunkaView
}

export function loadTermekekBase(logdatasession: string): Array<Termek>  {
    console.log("run loadTermekekBase");
    let lRet: Array<Termek> = [];
    let lUrl: string = dataURLTermekListConst  + "/Kategoria=4/" + logdatasession;
    console.log(lUrl);
    $.getJSON(lUrl, function (retTermekek: RestBaseResponse): void {
        lRet = JSON.parse(retTermekek.data) as Array<Termek>;
        console.log(1);
        console.log(lRet);
    });
    console.log(2);
    return lRet;
}

export function geturlparam (name: string): string {
    let ret: string = "";
    let results: any = new RegExp("[\?&]" + name + "=([^&#]*)").exec(window.location.href);

    if(results) {
        ret = results[1] || 0;
        console.log("aaa");
        console.log(results[1] || 0);
    }
    return ret;
}

export function dialogSmall (aMessage: string): void {
    bootbox.alert({
        message: aMessage,
        size: "small"
    });
}
