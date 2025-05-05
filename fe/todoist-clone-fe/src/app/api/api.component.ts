import { Component } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-api',
  imports: [
    NgIf
  ],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  public message: any;

  constructor(private apiService: ApiService) {
    this.apiService.getMessage().subscribe(data => {this.message = data;});
  }

}
