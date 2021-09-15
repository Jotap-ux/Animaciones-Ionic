import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoQRPageRoutingModule } from './codigo-qr-routing.module';

import { CodigoQRPage } from './codigo-qr.page';
import { NgxQRCodeModule } from 'ngx-qrcode2'; //importamos para codigo QR
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoQRPageRoutingModule,
    NgxQRCodeModule //AQUI TAMBIEN LO IMPORTAMOS
  ],
  declarations: [CodigoQRPage]
})
export class CodigoQRPageModule {}
