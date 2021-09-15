import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; //siempre el ngx
@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
  qrData="https://memegenerator.net/instance/20680770/willy-wonka-nico-es-gay-dime-que-se-siente-ser-gay";
  elementType: 'url' | 'img' | 'canvas' = 'canvas'

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

}
