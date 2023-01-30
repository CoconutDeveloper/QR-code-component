import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QrCodeCardComponent } from './qr-code-card.component';

@NgModule({
  declarations: [QrCodeCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [QrCodeCardComponent]
})
export class QrCodeCardModule { }
