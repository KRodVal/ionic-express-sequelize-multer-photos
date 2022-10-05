import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-list-instruments',
  templateUrl: './list-instruments.page.html',
  styleUrls: ['./list-instruments.page.scss'],
})
export class ListInstrumentsPage implements OnInit {

  instruments: any = [];

  constructor(private instrumentService: InstrumentService, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.getAllInstruments();
  }

  getAllInstruments() {
    this.instrumentService.getInstruments().subscribe(instrus => {
      console.log(instrus);
      this.instruments = instrus;
    })
  }

  addInstrument(){
    this.router.navigateByUrl("/add-instrument");
  }
}
