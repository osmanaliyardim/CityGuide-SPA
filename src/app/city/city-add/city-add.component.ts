import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {

  constructor(private cityService: CityService, private formBuilder: FormBuilder) { }

  city: City;
  cityAddForm: FormGroup;

  ngOnInit() {
    this.createCityForm();
  }

  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  add() {
    if (this.cityAddForm.valid) {
      this.city = Object.assign({}, this.cityAddForm.value);
      //Todo
      this.city.userId = 1;
      this.cityService.add(this.city);
    }
  }
}