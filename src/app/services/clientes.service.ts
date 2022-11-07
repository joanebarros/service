import { Injectable } from '@angular/core';

/**
 * providedIn informar onde o serviço sera fornecido
 */

/**
 * A ideia de uma serviço no Angular
 * é encapsular alguma lógica q pode
 * ser utilizada em vários locais
 * da sua aplicação
 */
interface Cliente {
  nome : String
  sobrenome : String
  telefone : String
  id : number
  email : String
  cpf: String
}

@Injectable({
  providedIn: 'root' // 'root'faz referencia ao APP.module
})
export class ClientesService {
  listarClientes() {
    throw new Error('Method not implemented.');
  }

  private clientes: Cliente[] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
      id: 3
    }
  ]

  constructor() { }

  listarClientePeloId(id : number): Cliente | undefined {

    /**
     * O metado find() dos Arrays serve para procurar algun valor 
     * dentro do Array
     * 
     * É necessario que se passe como parementro do metado find()
     * uma função e essa função sra utilizada dentro do metado para
     * procurar o valor. A função que sera passada deve retornar sempre
     * uma valor booleano.
     */

    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id
    })
    return clienteEncontrado
  }
}
