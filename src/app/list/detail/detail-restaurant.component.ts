import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Restaurant} from '../../interfaces/restaurant';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.css']
})
export class DetailRestaurantComponent implements OnInit {

  form: FormGroup;
  restaurant: Restaurant;

  constructor(
    public sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetailRestaurantComponent>,

    @Inject(MAT_DIALOG_DATA) selectedRestaurant) {
    this.restaurant = selectedRestaurant.data;
    this.form = fb.group({
      onComponentRestaurant: this.restaurant,
    });
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
