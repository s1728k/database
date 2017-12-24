import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class VbaObfuscatorService {

	TypeOfVariables = ["Dim", "Private", "Public", "Static"];
	ProcVariables = ["Function", "Sub", "Property Get", "Property Let"];
	AllVariables = ["Dim", "Private", "Public", "Static", "Function", "Sub", "Property Get", "Property Let", "ByVal", "ByRef"];
	listOfVariables = [];
	hashTable = {};
	
	constructor() {}

	findTypVariables(code, typ){
		let listDimVariables = [];
    let next_pos = 1;
    let i = 0;
    let vStart;
    let vEnd;
    let v;
    let f1;
    let f2;
    let f3;
    let tmp;
    while (next_pos != -1){
        vStart = code.indexOf(typ) + typ.length;
        if (vStart == -1 + typ.length){
            break;
        }
        if (this.TypeOfVariables.indexOf(typ)>-1){
            vEnd = vStart+code.substring(vStart).indexOf(String.fromCharCode(10));
            v = code.slice(vStart,vEnd);
            if(v.replace(new RegExp("\\b"+"()"+"\\b", "g"), "").indexOf("(")===-1){
            	for (f1 in v.split(",")){
	                tmp=v.split(",")[f1];
	                f2=(tmp + "As").split("As")[0].replace(/^\s+|\s+$/g, '').split("(")[0];
	                if (f2.indexOf(" ")==-1 && f2.indexOf(".")==-1){
	                    listDimVariables[listDimVariables.length]=f2;
	                }
	            }	
            }
        }else if (this.ProcVariables.indexOf(typ)>-1){
            vEnd = vStart+code.substring(vStart).indexOf(String.fromCharCode(10));
            v = code.slice(vStart,vEnd);
            if(v!=""){
                f2=v.split("(")[0].replace(/^\s+|\s+$/g, '');
                if(f2.indexOf("Lib")===-1){
                	listDimVariables[listDimVariables.length]=f2;
                }
            }
        }else if (typ == "Const"){
            vEnd = vStart+code.substring(vStart).indexOf(String.fromCharCode(10));
            v = code.slice(vStart,vEnd);
            if(v!=""){
                for (f1 in v.split(",")){
				            tmp=v.split(",")[f1];
				            f2=tmp.split("=")[0];
				            f2=(f2 + "As").split("As")[0].replace(/^\s+|\s+$/g, '').split("(")[0];
				            if (f2.indexOf(" ")==-1 && f2.indexOf(".")==-1){
				                listDimVariables[listDimVariables.length]=f2;
				            }
				        }
            }
        }else if (typ == "GoTo"){
            vEnd = vStart+code.substring(vStart).indexOf(String.fromCharCode(10));
            v = code.slice(vStart,vEnd);
            if(v!=""){
            		f2 = v.replace(":","").replace(/^\s+|\s+$/g, '')
                listDimVariables[listDimVariables.length]=f2;
            }
        }else if (typ == '"'){
            vEnd = vStart+code.substring(vStart).indexOf('"');
            tmp = code.substring(0,vStart);
            console.log(tmp);
            if(tmp.lastIndexOf("\n")<tmp.lastIndexOf("Const")){
            }else if(tmp.lastIndexOf("\n")<tmp.lastIndexOf("Lib")){
            }else if(tmp.lastIndexOf("\n")<tmp.lastIndexOf("Alias")){
            // }else if(tmp.lastIndexOf("\n")<tmp.lastIndexOf("GetObject")){
            // }else if(tmp.lastIndexOf("\n")<tmp.lastIndexOf("CreateObject")){
            // }else if(tmp.lastIndexOf("\n")<tmp.lastIndexOf("Environ$")){
            // }else if(tmp.lastIndexOf("\n")<tmp.lastIndexOf("InstancesOf")){
            }else{
            	v = code.slice(vStart,vEnd);
	            if(v){
	            	listDimVariables[listDimVariables.length]=v;
	            }
            }
      			// var test = '"the quick" "brown fox" "jumps over" "the lazy dog"';
						// var result = test.match(/[^"]+(?=(" ")|"$)/g);
						// alert(result);
        }
        next_pos = vEnd+code.substring(vEnd+1).indexOf(typ);
        code = code.slice(vEnd+1);
    }
    return listDimVariables;
	}

	getProcCallNames(code, typ){
		let listDimVariables = [];
    let next_pos = 1;
    let i = 0;
    let vStart;
    let vEnd;
    let v;
    let f1;
    let f2;
    while (next_pos != -1){
      vStart = code.indexOf(typ) + typ.length;
      if (vStart == -1 + typ.length){
          break;
      }
			vEnd = vStart+code.substring(vStart).indexOf(String.fromCharCode(10));
      v = code.slice(vStart,vEnd);
      if(v!=""){
      		v = v.slice(0, v.lastIndexOf(")"));
      		v = v.slice(v.indexOf("("));
      		v = v.replace(new RegExp("\\b"+"ByRef"+"\\b", "g"), "");
      		v = v.replace(new RegExp("\\b"+"ByVal"+"\\b", "g"), "");
      		v = v.replace(new RegExp("\\b"+"Optional"+"\\b", "g"), "");
      		v = v.replace(/\(/g, "").replace(/\)/g, "");
      		f1 = v.split(",");
      		for (let i = 0; i < f1.length; i++) {
      			f2=(f1[i] + "As").split("As")[0].replace(/^\s+|\s+$/g, '');
      			if(f2){
      				listDimVariables[listDimVariables.length]=f2;
      			}
      		}
      }
      next_pos = vEnd+code.substring(vEnd+1).indexOf(typ);
    	code = code.slice(vEnd+1);
    }
	  return listDimVariables;
	}

	findVariables(code, type){
	    let listDimVariables = [];
	    let typeVariables = [];
	    code = code + "\n";
	    switch (type) {

	    	case "string":
	    		typeVariables = ['"'];
	    		for (let typ in typeVariables){
			        listDimVariables=listDimVariables.concat(this.findTypVariables(code, typeVariables[typ]));
			    }
	    		break;

	    	case "var":
	    		typeVariables = this.TypeOfVariables;
	    		for (let typ in typeVariables){
			        listDimVariables=listDimVariables.concat(this.findTypVariables(code, typeVariables[typ]));
			    }
	    		break;

	    	case "proc":
	    		typeVariables = this.ProcVariables;
	    		for (let typ in typeVariables){
			        listDimVariables=listDimVariables.concat(this.findTypVariables(code, typeVariables[typ]));
			    }
	    		break;

	    	case "procCall":
	    		typeVariables = this.ProcVariables;
	    		for (let typ in typeVariables){
			        listDimVariables=listDimVariables.concat(this.getProcCallNames(code, typeVariables[typ]));
			    }
	    		break;

	    	case "const":
	    		typeVariables = ['Const'];
	    		for (let typ in typeVariables){
			        listDimVariables=listDimVariables.concat(this.findTypVariables(code, typeVariables[typ]));
			    }
	    		break;

	    	case "label":
	    		typeVariables = ['GoTo'];
	    		for (let typ in typeVariables){
			        listDimVariables=listDimVariables.concat(this.findTypVariables(code, typeVariables[typ]));
			    }
	    		break;
	    	
	    	default:
	    		typeVariables = this.AllVariables;
	    		for (let typ in typeVariables){
			        listDimVariables=listDimVariables.concat(this.findTypVariables(code, typeVariables[typ]));
			    }
	    		break;
	    }
	    // for (let typ in typeVariables){
	    //     listDimVariables=listDimVariables.concat(this.findTypVariables(code, typeVariables[typ]));
	    // }
	    return Array.from(new Set(listDimVariables));
	}

	genReplDict(li){
	    let res = {};
	    let tmp;
	    for(let f1 in li){
	        tmp=String(Md5.hashStr(li[f1]));
	        res[li[f1]]="k"+tmp;
	        res[li[f1]]="k"+tmp.slice(0,li[f1].length)+tmp.slice(li[f1].length+2);
	    }
	    return res;
	}

	obfuscatedCode(code, oVar="", strs=""){
	    let tmp
	    let listOfVariables = [];
	    let listOfStrings = [];
	    // listOfVariables=this.findVariables(code, "");
	    for (let i=0, lovar=oVar.split(","); i<lovar.length;i++){
	        tmp=lovar[i].replace(/^\s+|\s+$/g, '');
	        if(tmp!=""){
	            listOfVariables[listOfVariables.length]=tmp;
	        }
	    }

	    for (let i=0, lovar=strs.split(","); i<lovar.length;i++){
	        tmp=lovar[i].replace(/^\s+|\s+$/g, '');
	        if(tmp!=""){
	            listOfStrings[listOfStrings.length]=tmp;
	        }
	    }

	    let new_str = code;

	    for (let i=0; i<listOfStrings.length; i++) {
	    		// "All of these should be escaped: \\ \^ \$ \* \+ \? \. \( \) \| \{ \} \[ \] "
	    		tmp = listOfStrings[i];
	    		tmp = tmp.replace(/\\/g, "\\\\");
	    		tmp = tmp.replace(/\//g, "\\/");
	    		tmp = tmp.replace(/\?/g, "\\?");
	    		tmp = tmp.replace(/\+/g, "\\+");
	    		tmp = tmp.replace(/\[/g, "\\[");
	        new_str = new_str.replace(new RegExp('"('+tmp+')"', "g"), "k2cba657da75eab82c88c429fbbf2207("+String(i)+")");
	    }

	    let hashTable=this.genReplDict(listOfVariables);
	    //return re.sub('|'.join(r'\b%s\b' % re.escape(s) for s in hashTable),replace , code);
	    for (let key in hashTable) {
	        //if (!hashTable.hasOwnProperty(key)) {
	        //    continue;
	        //}
	        new_str = new_str.replace(new RegExp("\\b"+key+"\\b", "g"), hashTable[key]);
	    }

	    let rdn = Math.floor((Math.random() * 100) + 10);
	    new_str = new_str + "\n";
	    new_str = new_str + "Private Function k2cba657da75eab82c88c429fbbf2207(ByVal k0e45c92b526e900b3b124c807340acd as Long) As String\n";
	    new_str = new_str + "Select Case k0e45c92b526e900b3b124c807340acd*"+String(rdn)+"+"+String(rdn)+"*"+String(rdn)+"-"+String(rdn)+"\n";
	    for (let i=0; i<listOfStrings.length; i++) {
	    	new_str = new_str + "Case "+String(i*rdn+rdn*rdn-rdn+10)+": k2cba657da75eab82c88c429fbbf2207 = "+ '"' + listOfStrings[i] + '"' + "\n";
	    	new_str = new_str + "Case "+String(i*rdn+rdn*rdn-rdn)+": k2cba657da75eab82c88c429fbbf2207 = "+ '"' + listOfStrings[i] + '"' + "\n";
	    	new_str = new_str + "Case "+String(i*rdn+rdn*rdn-rdn-10)+": k2cba657da75eab82c88c429fbbf2207 = "+ '"' + listOfStrings[i] + '"' + "\n";
	    }
	    new_str = new_str + "End Select\n";
	    new_str = new_str + "End Function\n";

	    new_str = new_str.replace(new RegExp("'(.*?)\n", "g"),"\n")
	    new_str = new_str.replace(new RegExp("\t", "g"),"")
	    new_str = new_str.replace(new RegExp("\n\n", "g"),"\n")
	    return new_str;
	}

	findStrings(code){
	    let tmp=[];
	    tmp=this.findTypVariables(code,'"');
	    return tmp.toString();
	}

	replAmpCancat(code){
	    let tmp;
	    tmp=code.replace(" & "," + ");
	    tmp=tmp.replace(' """','Chr(34) + ');
	    tmp=tmp.replace('""" ',' + Chr(34)');
	    return tmp
	}

}