import { Component , OnInit ,OnDestroy} from '@angular/core';
import {AppareilService} from './Services/appareil.service';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes : number;
  counterSubscription: Subscription;
  constructor(){}
  ngOnInit(){
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
  }
