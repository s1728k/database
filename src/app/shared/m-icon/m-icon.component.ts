import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'm-icon',
  templateUrl: './m-icon.component.html',
  styleUrls: ['./m-icon.component.css']
})

export class MIconComponent implements OnInit{

    @Input() iconName:string;
    @Input() prefix:boolean=false;
    @Input() suffix:boolean=false;

    constructor(private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    }
    ngOnInit(){
      this.iconRegistry.addSvgIcon(
        this.iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/'+this.iconName+'.svg'));
    }

}