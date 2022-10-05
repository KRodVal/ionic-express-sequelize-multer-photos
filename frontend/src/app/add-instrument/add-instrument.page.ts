import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstrumentService } from '../services/instrument.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.page.html',
  styleUrls: ['./add-instrument.page.scss'],
})
export class AddInstrumentPage implements OnInit {

  instrumentForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private instrumentService: InstrumentService,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.instrumentForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.instrumentForm = this.formBuilder.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.instrumentForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.instrumentForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.instrumentService.createInstrument(this.instrumentForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/list-instruments");
      })
    }
  }
}
