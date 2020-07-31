import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

  constructor( public _service: InfoPaginaService ) { }


}
