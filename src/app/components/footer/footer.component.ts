import { Component } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'footer-component',
  imports: [
    BtnPrimaryComponent,
    NgOptimizedImage,
],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
