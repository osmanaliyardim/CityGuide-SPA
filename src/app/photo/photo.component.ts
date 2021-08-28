import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../models/photo';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(alertifyService:AlertifyService,
    authService:AuthService, activatedRoute:ActivatedRoute) { }
    
    photos:Photo[]=[]

  ngOnInit() {
  }

}
