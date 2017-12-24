import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {VbaObfuscatorService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[VbaObfuscatorService]
})
export class AppComponent implements OnInit {

	firstCode: any;
	lastCode: any;

	allHashables: any;

	stringNames = "";
	varNames = "";
	procNames = "";
	procCallNames = "";
	constNames = "";
	labelNames = "";

	udvarNames = "";

	modNames = "";
	modNameList: string[]=[];
	modHashNames: string[]=[];

	mModule ="Misc";

  constructor(private vbaObfuscatorService: VbaObfuscatorService,){}

  ngOnInit(){
  	this.firstCode = 'Sub asdf()\n\tDim a, b, c\n\ta=5\n\n\tb= "dsfdsf" + "dssd"\n\tc=a+b\n\tCells(1,1)=c\nEnd Sub\n' + "'fsdfdsf"
  	this.getVariables();
  	this.obfuscate();
  }

  obfuscate(){
  	this.allHashables = this.varNames.split("\n").join(",") + ",";
  	this.allHashables = this.allHashables + this.procNames.split("\n").join(",") + ",";
  	this.allHashables = this.allHashables + this.procCallNames.split("\n").join(",") + ",";
  	this.allHashables = this.allHashables + this.constNames.split("\n").join(",") + ",";
  	// this.allHashables = this.allHashables + this.stringNames.split("\n").join(",") + ",";
  	this.allHashables = this.allHashables + this.labelNames.split("\n").join(",") + ",";

  	this.allHashables = this.allHashables + this.udvarNames.split("\n").join(",") + ",";
  	this.allHashables = this.allHashables + this.modNames.split("\n").join(",") + ",";

  	this.allHashables = Array.from(new Set((this.allHashables).split(","))).join(",");

  	if (this.allHashables.indexOf(",")==0){
  		this.allHashables = this.allHashables.slice(1);
  	}

  	this.lastCode = this.vbaObfuscatorService.obfuscatedCode(this.firstCode, this.allHashables, this.stringNames.split("\n").join(","));
  }

  getVariables(){
  	this.stringNames = this.vbaObfuscatorService.findVariables(this.firstCode, "string").join("\n");
  	this.varNames = this.vbaObfuscatorService.findVariables(this.firstCode, "var").join("\n");
    if (this.procNames){
      this.procNames = this.procNames + "\n" + this.vbaObfuscatorService.findVariables(this.firstCode, "proc").join("\n");
    }else{
      this.procNames = this.vbaObfuscatorService.findVariables(this.firstCode, "proc").join("\n");
    }
  	this.procCallNames = this.vbaObfuscatorService.findVariables(this.firstCode, "procCall").join("\n");
  	this.constNames = this.vbaObfuscatorService.findVariables(this.firstCode, "const").join("\n");
  	this.labelNames = this.vbaObfuscatorService.findVariables(this.firstCode, "label").join("\n");
  }

  getModHash(){
  	let tmp,t2
  	this.modHashNames = [];
  	this.modNameList = this.modNames.split(",");
  	for (let i = 0; i < this.modNameList.length; i++) {
  		t2=this.modNameList[i];
  		tmp=String(Md5.hashStr(t2));
      this.modHashNames.push("k"+tmp.slice(0,t2.length)+tmp.slice(t2.length+2));
  	}
  }

}
