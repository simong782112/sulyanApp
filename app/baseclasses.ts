export class WebshopSzallAtveteliMod {
    public name: string = "";

    constructor() {
        this.name ="";
    }

}

export class NTAKTranzakcioLog {
    public id: number = 0;
    public endpoint: string = "";
    public feldolgozasAzonosito: string = "";
    public status: string = "";
    public request: string = "";
    public response: string = "";
}

export class NTAKTranzakcio {
    public  id: number = 0;
    public keres_user: string = "";
    public keres_datum: string = "";
    public NTAK_feldolgozasAzonosito: string = "";
    public NTAK_ellenorzes: number = 0;
}

export class NapiForgalom {
    public  id: number = 0;
    public tipus: string = "";
    public datum: string = "";
    public azon: string = "";
    public termek_id: number = 0;
    public name: string = "";
    public price: number = 0;
    public eloleg: number = 0;
    public mennyiseg: number = 0;
    public mee: string = "";
    public mennyiseg2: number = 0;
    public Mee2: string = "";
    public MeeMee2Valtoszam: string = "";
    public helyszin: string = "";
    public fogyasMenny: number = 0;
    public Bevetel: number = 0;
}

export class RestBaseResponse {
    public status: string = "";
    public message: string = "";
    public data: string = "";
    public recordcnt: number = 0;
    public errcode: number = 0;
    public specdata: string = "";
    public specdata2: string = "";
    public items: Array<NapiForgalom> = [];
}

export class RestBaseResponse_WebshopMysystem {
    public success: boolean = false;
    public error: string = "";
    public data: string = "";
}

export class Kodtabla {
    public kod: string = "";
    public name: string = "";
}

export class LoggedUser {
    public nev: string = "";
    public csoport: string = "";
    public mhely: string = "";
}

export class Kapacitas {
    public helyszin: string = "";
    public idoponttol: string = "";
    public idopontig: string = "";
    public mennyiseg: number = 0;
}

export class Elorendeles {
    public partner: Partner = new Partner();    
    public atvetel_datum: string = "";
    public atvetel_helye: string = "";
    public atvetel_ido: string = "";
    public megrendeles_azonosito: string = "";
    public elorendeles_note: string = "";

    public kiszallitas: number = 0;
    public szallirsz: string = "";
    public szalltelepules: string = "";
    public szallcim: string = "";

    public eloleg: number = 0;
    public bonus: number = 0;
}

export class Irsz {
    public id: number = 0;
    public name: string = "";
    public kod: string = "";
    public nev: string = "";
}


export class CukraszObj {
    public azon: string = "";
    public tipus: string = ""; // Tortarendeles, On-line rendelés, Pénztárból feladott rendelés
    public name: string = "";
    public partner_name: string = "";
    public id: number = 0;
    public note: string = "";
    public datum: string = "";
    public ido: string = "";
    public atvetel_helye: string = "";
    public statusz: string = "";
    public email: string = "";
    public telefon: string = "";
    public szallmod: string = "";
    public vegosszeg_reszekkel: number = 0;
    public fizetendo_reszekkel: number = 0;
    public felhasznalt_bonus: number = 0;

    public reszek: Array<Tortarendeles_Reszek> = [];

    constructor() {
        this.id = 0;
        this.azon =  "";
        this.name = "";
        this.tipus = "";
        this.partner_name = "";
        this.note = "";
        this.datum = "";
        this.ido = "";
        this.atvetel_helye = "";
        this.statusz = "";
        this.telefon = "";
        this.email = "";
    }    
}

export class TermekKategoria extends Kodtabla {
    public spec: string = "";
}

export class Termek {
    public id: number;
    public azon: string;
    public name: string;
    public price: number;
    public price2: number;
    public mee: string;
    public kat: number;
    public alkat: number;
    public isPortion: boolean;
    public isKorettel: boolean;
    public isNapi: boolean;
    public isTiltvaSpec1: boolean;
    public isTortaSzeletar: number;
    public isTortaKategoria: string;
    public kep: string;
    public originPrice: number;
    public isTortarendeles: number;
    public AfaMertek: number;
    public AfaMertek2: number;
    public Megjegyzes: string;
    public id_fix_hossz: string;
    public checked: boolean;
    public NTAKFoKategoria: string;
    public NTAKAlKategoria: string;
    public NTAKMee: string;
    public NTAKMennyiseg: number;
    public isMennyAut: boolean;
    public szavatossagi_ora: number;
    public fagylaltkonyvben: boolean = false;
    public kapcsolt_KESZLET_ID: number = 0; 

    constructor() {
        this.id = 0;
        this.azon =  "";
        this.name = "";
        this.price = 0;
        this.price2 = 0;
        this.mee = "db";
        this.kat = 0;
        this.alkat = 0;
        this.isPortion = false;
        this.isKorettel = false;
        this.isNapi = false;
        this.isTortaSzeletar = 0;
        this.isTortaKategoria = "";
        this.kep = "";
        this.isTiltvaSpec1 = false;
        this.originPrice = 0;
        this.isTortarendeles = 0;
        this.AfaMertek = 0;
        this.AfaMertek2 = 0;
        this.Megjegyzes = "";
        this.id_fix_hossz = "";
        this.checked = false;
        this.NTAKFoKategoria = "";
        this.NTAKAlKategoria = "";
        this.NTAKMee = "";
        this.NTAKMennyiseg = 0;
        this.isMennyAut = false;
        this.szavatossagi_ora = 0;
        this.fagylaltkonyvben = false;
        this.kapcsolt_KESZLET_ID = 0;
    }
}

export class SpecNapi extends Termek {
    public spec_napi_id: number = 0;
    public szavatossagi_ora: number = 0;
    public mennyiseg: number = 0;
    public gyartas_datum: string = "";
    public helyszin: string = "";

    public fagylaltkonyvben: boolean = false;
    public homerseklet: string = "";
    public fagylaltarusitas_kezdete: string = "";
    public fagylaltarusitas_vege: string = "";    
}

export class RendelesOsszesitett {
    public name: string = "";
    public summenny: number = 0;
    public datum: string = "";
    public sumvonalkodok: number = 0;
}

export class RendelesOsszesitettHetiObj {
    public name: string;
    public day1: string;
    public day2: string;
    public day3: string;
    public day4: string;
    public day5: string;
    public day6: string;
    public day7: string;
    public vonalkodok1: string = "";
    public vonalkodok2: string = "";
    public vonalkodok3: string = "";
    public vonalkodok4: string = "";
    public vonalkodok5: string = "";
    public vonalkodok6: string = "";
    public vonalkodok7: string = "";

    constructor(aName: string, aDay1: string, aDay2: string, aDay3: string, aDay4: string, aDay5: string, aDay6: string, aDay7: string){
        this.name = aName;
        this.day1 = aDay1;
        this.day2 = aDay2;
        this.day3 = aDay3;
        this.day4 = aDay4;
        this.day5 = aDay5;
        this.day6 = aDay6;
        this.day7 = aDay7;
    }

}

export class FoodOutItem {
    public type: string;
    public id: number;
    public mealName: string;
    public price: number;
    public originPrice: number;
    public menny: number;
    public adag: string;
    public porciozhato: boolean;
    public korettel: boolean;
    public plusKoret: Array<Termek>;
    public name: string;
    public kep: string;
    public kedv: number;
    public tortarendeles: number;
    public partner_id: number;
    public ossz: number;
    public afamertek: number;
    public kapcsolt_KESZLET_ID: number = 0; // kapcsolt termék esetén a KESZLET_ID
    public isKapcsoltTermek: boolean = false; // ha kapcsolt termék
    public nIsKapcsoltTermek: number = 0; 

    constructor(aType: string, aId: number,
                aMealName: string, aPrice: number,
                aOriginPrice: number, aMenny: number,
                aAdag: string, aPorciozhato: boolean,
                aKorettel: boolean, aKep: string = "",
                aKedv: number = 0, aTortarendeles: number = 0, 
                aPartnerId: number = 0, aOssz: number = 0,aAfamertek: number = 0,
                aKapcsolt_KESZLET_ID: number = 0, aIsKapcsoltTermek: boolean = false) {

        this.type = aType;
        this.id = aId;
        this.mealName = aMealName;
        this.name = aMealName;
        this.price = aPrice;
        this.originPrice = aOriginPrice;
        this.menny = aMenny;
        this.adag = aAdag;
        this.porciozhato = aPorciozhato;
        this.korettel = aKorettel;
        this.plusKoret = [];
        this.kep = aKep;
        this.kedv = aKedv;
        this.tortarendeles = aTortarendeles;
        this.partner_id = aPartnerId;
        this.ossz = aOssz;
        this.afamertek = aAfamertek;
        this.kapcsolt_KESZLET_ID = aKapcsolt_KESZLET_ID;
        this.isKapcsoltTermek = aIsKapcsoltTermek;
        this.nIsKapcsoltTermek = aIsKapcsoltTermek ? 1 : 0;
    }

    get adagStr(): string {
        if (this.adag === "E") {
            return "Egész";
        } else if (this.adag === "F"){
            return "Fél";
        } else {
            return "";
        }
    }

    get pluskoret1kep(): string {
        if (this.plusKoret && this.plusKoret.length > 0) {
            return this.plusKoret[0].kep;
        } else {
            return "";
        }
    }
}

export class FrissOrder {
    public type : string = "";
    public list : Array<FoodOutItem> = [];
    public totalAmount : number = 0;

    constructor(aType: string) {
        this.type = aType;
    }

    get typeDef(): string {
        if (this.type === "HELYBEN") {
            return "IN";
        } else if (this.type === "ELVITELRE") {
            return "OUT";
        } else {
            return "";
        }
    }

}

export class MegrendelesModositas {
    public id: number = 0;
    public tipus: string = "";

    public partner: string = "";
    public content: string = "";

    public datum: string = "";
    public ido: string = "";
    public note: string = "";

    public eloleg: string = "";

    public atvetel_helye: string = "";
}


export class CashOutPay {
    public code: string = "";
    public name: string = "";
    public osszeg: number = 0

    constructor(aCode: string, aName: string, aOsszeg: number=0) {
        this.code = aCode;
        this.name = aName;
        this.osszeg = aOsszeg;
    }
}

export class CashOut {
    public id: number = 0;
    public rogzito_nev: string = "";
    public items:Array<CashOutItem> = [];
    public afabontas: AfaBontas = new AfaBontas();
    public szum: number = 0;
    public ido: string = "";
    public partner_id: number = 0;
    public partnev: string = "";
    public partirsz: string = "";
    public partcity: string = "";
    public partaddress: string = "";
    public parttel: string = "";
    public partadoszam: string = "";
    public partemail: string = "";
    public mfid: number = 0;
    public cukrasznak: number = 0;
    public cukraszstatusz: number = 0;    

    //online rendeléshez plusz mezők
    public username: string = "";
    public irsz: string = "";
    public nev: string = "";
    public city: string = "";
    public address: string = "";
    public adoszam: string = "";
    public telefon: string = "";
    public szallmod: string = "";
    public note: string = "";

    //elorendeleshez plusz mezok
    public elorendeles_atvetelhely: string = "";
    public elorendeles_atveteldatum: string = "";
    public elorendeles_atvetelido: string = "";
    public elorendeles_eloleg: string = "";
    public elorendeles_note: string = "";

    public bonus: number = 0;    
    public felirt_bonus: number = 0;    
    public fizetesi_modok: Array<CashOutPay> = [];
    public atveve: number = 0;

}

export class AfaBontas {
    public afa_5: number = 0;   
    public afa_18: number = 0;   
    public afa_27: number = 0;   
    public afa_0: number = 0;
}

export class CashOutItem {

    public id: number;
    public keszlet_id: number;
    public azonosito: string;
    public name: string;
    public price: number;
    public menny: number;
    public ossz: number;
    public inout: string = "";
    public adag: string = "";
    public porciozhato: string = "";
    public originPrice: number = 0;
    public mtid: number = 0;
    public frissensulte: string = "";
    public afamertek: number = 0;
    public tortarendeles: number = 0;

    constructor(aID: number, aKeszletId: number, aAzonosito: string,  aName: string, aPrice: number, aMenny: number, aOssz: number, afrissensulte: string = "", aAfamertek: number = 0, aTortarendeles: number = 0) {
        this.id = aID;
        this.keszlet_id = aKeszletId;
        this.azonosito = aAzonosito;
        this.name = aName;
        this.price = aPrice;
        this.menny = aMenny;
        this.ossz = aOssz;
        this.frissensulte = afrissensulte;
        this.afamertek = aAfamertek;
        this.tortarendeles = aTortarendeles;
    }
}

export class ChangePortionItemParObj {
    public type: string = "";
    public v1: string = "";
}

export class GiveOut extends CashOut {
    public partner_id: number = 0;
    public name: string = "";
    public irszam: string = "";
    public city: string = "";
    public address: string = "";
    public telefon: string = "";
    public email: string = "";
    public maganszemely: number = 0;
    public adoszam: string = "";
    public genSzallito: boolean = false;
    public genSzamla: boolean = false;
    public peztar_id: number = 0;
    public fizmod: number = 0;

}

export class NormalTortaArazas {
    public kategoria: string = ""; // I, II, III, IV
    public szeletar: number = 0;
    public nyolcSzeletes: boolean = false;

    constructor(aKategoria: string, aSzeletar: number, nyolcSzeletes: boolean = false) {
        this.kategoria = aKategoria;
        this.szeletar = aSzeletar;
        this.nyolcSzeletes = nyolcSzeletes;
    }
}

export class TortaArazasKategoriaHelper {
    public value: string = ""; // I, II, III, IV
    public name: string = "";

    constructor(aValue: string, aName: string) {
        this.value = aValue;
        this.name = aName;
    }
}

export class NTAKKategoriaHelper {
    public value: string = "";
    public name: string = "";
    public meghatarozas: string = "";

    constructor(aValue: string, aName: string, aMeghatarozas: string="") {
        this.value = aValue;
        this.name = aName;
        this.meghatarozas = aMeghatarozas;
    }
}

export class NTAKAlKategoriaHelper {
    public value: string = "";
    public name: string = "";
    public foKategoriaValue: string = "";
    public meghatarozas: string = "";
    public peldak: string = "";

    constructor(aValue: string, aName: string, aFoKategoriaValue: string, aMeghatarozas: string="", aPeldak: string="") {
        this.value = aValue;
        this.name = aName;
        this.foKategoriaValue = aFoKategoriaValue;
        this.meghatarozas = aMeghatarozas;
        this.peldak = aPeldak;
    }
}

export class NTAKMennyisegiEgysegekHelper {
    public value: string = "";
    public name: string = "";

    constructor(aValue: string, aName: string) {
        this.value = aValue;
        this.name = aName;
    }
}

export class NTAKFizetesiModHelper {
    public value: string = "";
    public name: string = "";

    constructor(aValue: string, aName: string) {
        this.value = aValue;
        this.name = aName;
    }
}

export class BurkoltTortaArazas {
    public kategoria: string = ""; // I, II, III, IV
    public diszites: string = ""; // Egyszerű, Különleges, Extra
    public szeletar: number = 0;
    public nyolcSzeletes: boolean = false;

    constructor(aKategoria: string, adiszites: string, aSzeletar: number, nyolcSzeletes: boolean = false) {
        this.kategoria = aKategoria;
        this.diszites = adiszites;
        this.szeletar = aSzeletar;
        this.nyolcSzeletes = nyolcSzeletes;
    }

}


export class TortaRendeles {
    public partner_id: number = 0;
    public partnev: string = "";
    public partirsz: string = "";
    public partcity: string = "";
    public partaddress: string = "";
    public parttel: string = "";
    public partemail: string = "";
    public partbonus: number = 0;   
    public genSzallito: boolean = false;
    public genSzamla: boolean = false;

    public id: number = 0; //penztar_id
    public ptr_id: number = 0;
    public keres_datum: string = "";
    public megrendeles_azonosito: string = "";
    public bonus: number = 0;
    public felirt_bonus: number = 0;

    //EMELET start
    public torta_tipus: string = "";
    public torta_kategoria: string = "";
    public product_id: number = 0; // valójában KESZLET_ID!!!
    public keszlet_name: string = "";
    public torta_neve: string = "";
    public torta_diszites: string = "";
    public szeletszam: number = 0;
    public szeletar: number = 0;
    public kiegeszitok: Array<TortaRendeles_Kiegeszitok> = [];
    public forma: string = "";
    public forma_id: number = 0;
    public megjegyzes: string = "";
    //EMELET end

    public reszek: Array<Tortarendeles_Reszek> = [];

    public atvetel_helye: string = "";
    public kedvezmeny_merteke: number = 0;
    public vegosszeg_s: number = 0;
    public vegosszeg_reszekkel: number = 0;
    public eloleg: number = 0;
    public datum: string = "";
    public ido: string = "";
    public cukrasznak: number = 0;
    public cukraszstatusz: number = 0;
    public kiszallitas: number = 0;
    public szallirsz: string = "";
    public szalltelepules: string = "";
    public szallcim: string = "";

    public kapcs_ptr_id: number = 0;
    public kalkulalt_vegosszeg: number = 0;

    public egyediar: number = 0;
    
    public latta: number = 0;
    public atveve: number = 0;
    public ending: number = 0;
    public fizetesi_modok: Array<CashOutPay> = [];

    get megfizetendo(): number {
        let kul: number = 0;

        if(this.reszek && this.reszek.length > 0){
            kul = this.kalkulalt_vegosszeg - this.eloleg;
        }else{
            if(this.vegosszeg > 0){
                kul = this.vegosszeg - this.eloleg;
            }
        }

        return kul;
    }

    get vegosszeg(): number {
        let ossz: number = 0;

        if(this.szeletszam == 8){
            if(this.torta_tipus == "B"){ //Burkolt torta
                if(this.torta_diszites == "EGY"){  //Egyszerű burkolt torta
                    switch(this.torta_kategoria){
                        case "I": ossz = 10500; break; 
                        case "II": ossz = 11500; break;
                        case "III": ossz = 12600; break;
                        case "IV": ossz = 13900; break;
                        case "V": ossz = 14900; break;    
                        case "VI": ossz = 16600; break;          
                        case "VII": ossz = 17600; break;              
                    }
                }else if(this.torta_diszites == "KUL"){ //Különleges burkolt torta
                    switch(this.torta_kategoria){
                        case "I": ossz = 14800; break; 
                        case "II": ossz = 16000; break;
                        case "III": ossz = 17000; break;
                        case "IV": ossz = 18300; break;
                        case "V": ossz = 19200; break;    
                        case "VI": ossz = 21500; break;     
                        case "VII": ossz = 21900; break;                   
                    }
                }else if(this.torta_diszites == "EXT"){ //Extra burkolt torta
                    switch(this.torta_kategoria){
                        case "I": ossz = 17000; break; 
                        case "II": ossz = 19500; break;
                        case "III": ossz = 20600; break;
                        case "IV": ossz = 21900; break;
                        case "V": ossz = 22500; break;    
                        case "VI": ossz = 24000; break;     
                        case "VII": ossz = 25200; break;                   
                    }
                }
            }else{ //Normál torta
                switch(this.torta_kategoria){
                    case "I": ossz = 7000; break; 
                    case "II": ossz = 7800; break;
                    case "III": ossz = 8500; break;
                    case "IV": ossz = 9500; break;
                    case "V": ossz = 11500; break;    
                    case "VI": ossz = 12900; break;  
                    case "VII": ossz = 13200; break;             
                }
            }
        }else{
            if(this.szeletar > 0) {
                if(this.szeletszam > 0) {
                    ossz =  this.szeletar * this.szeletszam;
                }
            }
        }

        if(this.kiegeszitok){
            for (var i:number = 0; i < this.kiegeszitok.length; i++) {
                if(this.kiegeszitok[i].menny > 0) {
                    ossz = ossz + (Number(this.kiegeszitok[i].menny) * Number(this.kiegeszitok[i].ar));
                }
            }
        }        
        /*if(this.reszek.length > 0){
            for (var i:number = 0; i < this.reszek.length; i++) {
                ossz = ossz + (Number(this.reszek[i].vegosszeg));
            }
        }*/

        if(this.kedvezmeny_merteke > 0) {
            ossz = ossz - (ossz / 100 * this.kedvezmeny_merteke);
        }else if(this.bonus > 0){
            ossz = ossz - this.bonus;
        }

        if(this.egyediar == 0){
            this.vegosszeg_s = ossz;
        }else if(this.egyediar > 0){
            this.vegosszeg_s = this.egyediar;
            ossz = this.egyediar;
        }

        this.felirt_bonus = ossz / 100 * 5;

        return ossz;
    }

}

export class Tortarendeles_Reszek {
    public torta_tipus: string = "";
    public torta_kategoria: string = "";
    public product_id: number = 0; // valójában KESZLET_ID!!!
    public keszlet_name: string = "";
    public torta_neve: string = "";
    public torta_diszites: string = "";
    public szeletszam: number = 0;
    public szeletar: number = 0;
    public kiegeszitok: Array<TortaRendeles_Kiegeszitok> = [];
    public forma: string = "";
    public megjegyzes: string = "";
    public vegosszeg: number = 0;
}


export class TortaRendeles_Kiegeszitok {
    public product_id: number = 0; // valójában KESZLET_ID!!!
    public menny: number = 0;
    public ar: number = 0;
}

export class PartnerForTypeHead {
    public id: string = "";
    public name: string = "";
}

export class Partner {
    public partner_id: number = 0;
    public Neve: string = "";
    public Irszam: string = "";
    public Varos: string = "";
    public Cim: string = "";
    public Megjegyzes: string = "";
    public Telefon: string = "";
    public Mobil: string = "";
    public Fax: string = "";
    public Email: string = "";
    public Adoszam: string = "";
    public bonus: number = 0;

    public newPartnerMode: string = ""; //ELORENDELES pl.
}

export class Order {
    public mfid: number = 0;
    public datum: string = "";
    public username: string = "";
    public nev: string = "";
    public city: string = "";
    public address: string = "";
    public telefon: string = "";
    public szallmod: string = "";
    public osszeg: number = 0;
    public tetnum: number = 0;
    public tetelek:Array<OrderItem> = [];
    public cukrasznak: number = 0;
    public cukraszstatusz: number = 0; 
    public note: string = "";     
    public szmlNev: string = ""; 
    public szmlPostCode: string = ""; 
    public szmlCity: string = ""; 
    public szmlAdress: string = ""; 
    public szmlAdoszam: string = ""; 
    public bonus: number = 0;

}

export class OrderItem { // megrendelés tételek
    public mtid: number = 0;
    public egysegar: number = 0;
    public name: string = "";
    public menny: number = 0;
    public mee: string = "";
    public ertek: number = 0;
}

export class PartnerBig {
    public id: number = 0;
    public partner_id: number = 0;
    public forras: string = "";
    public Nev: string = "";
    public Nev2: string = "";
    public Irszam: string = "";
    public Varos: string = "";
    public Cim: string = "";
    public Osszeg: number = 0;
    public Email: string = "";
}

export class Napimunka {
    public id: number = 0;
    public dolgozo: string = "";
    public leiras: string = "";
    public datum: string = "";
    public menny:  string = "";
}

export class ArchivMegrendeles {
    public id: number = 0;
    public tipus: string = "";
    public ugyfel: string = "";
    public keres_datum: string = "";
    public datum: string = "";    
    public partner_id: number = 0;
    public PartnerNev: string = ""; 
    public Azonosito: string = "";
    public Megnevezes: string = "";
    public mennyiseg: string = "";    
    public Mee: string = "";    
    public price: number = 0;
}

export class ArchivMegrendelesItem {
    public archivMegrendeles_id: string = "";
    public Megnevezes: string = "";
    public mennyiseg: string = "";    
    public price: number = 0;
}
