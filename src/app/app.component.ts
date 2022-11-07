import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
// Fazendo injeção de dependencia dentro do componente
constructor(
  public cService: ClientesService
) {}

// Ciclo de vida executado quando o seu componente 
// É reenderizado na tela
ngOnInit(): void {
 const clientes = this.cService.listarClientes()
 console.log(clientes)
}
}
