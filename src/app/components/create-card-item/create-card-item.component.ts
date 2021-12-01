import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-card-item',
  templateUrl: './create-card-item.component.html',
  styleUrls: ['./create-card-item.component.css']
})
export class CreateCardItemComponent implements OnInit {

  @Input() isRemoved : boolean = false;

  cardForm = this.fb.group({
    frontText: [''],
    backText: [''],
    imgLink: ['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }

  submitCards() {
    // if card is not removed submit it
    if (this.isRemoved == false)
    {
      //code to submit to DB.
    }
  }

}
