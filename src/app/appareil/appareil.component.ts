import { Component, Input,OnInit } from '@angular/core';
import {AppareilService} from '../Services/appareil.service';
import { reduce } from 'rxjs-compat/operator/reduce';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() apparielnamme :  string;
  @Input() apparielsatus  : string;
  @Input() indexOfappariel: number;
  @Input() id :number;

  constructor(private appareilService:AppareilService) { }

  ngOnInit(): void {
  }
 getsatus(){
   return this.apparielsatus;
 }
 getcolor(){
   if(this.apparielsatus==='allume'){
     return 'green' ;
   }else if(this.apparielsatus === 'etient'){
     return 'red';
   }else return 'blue';
 }
 onswitchOn(){
 this.appareilService.switchOnOne(this.indexOfappariel);
 }
 onswitchOff(){
  this.appareilService.switchOffOne(this.indexOfappariel);
  }
}
