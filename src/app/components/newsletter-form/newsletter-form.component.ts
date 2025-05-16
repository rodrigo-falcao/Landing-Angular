import { Component } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'newsletter-form',
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterform!: FormGroup;

  constructor() {
    this.newsletterform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
