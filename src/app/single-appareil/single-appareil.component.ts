import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../Services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name :string ="appariel";
  satuts:string="statut";
  constructor(private apparielService: AppareilService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id  = this.route.snapshot.params['id'];
    this.name = this.apparielService.getAppareilById(+id).name;
    this.satuts =this.apparielService.getAppareilById(+id).status;
  }

}
