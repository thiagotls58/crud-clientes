import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clienteForm: FormGroup;
  public titulo = 'Clientes'
  public clienteSelecionado: Cliente;  
  public nomeCliente: string;
  public modo = 'post';

  public clientes: Cliente[];

  constructor(private fb: FormBuilder, 
      private cerService: ConsultaCepService,
      private clienteService: ClienteService) { 
    this.criarForm();

  }

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes() {
    
    this.clienteService.getAll().subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  criarForm() {
    this.clienteForm = this.fb.group({
      clienteId: 0,
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      cep: [''],
      endereco: [''],
      numero: 0,
      complemento: [''],
      bairro: [''],
      estado: [''],
      cidade: ['']
    });
  }

  clienteSelect(cliente: Cliente) {
    this.clienteSelecionado = cliente;
    this.nomeCliente = cliente.nome;
    this.clienteForm.patchValue(cliente);
  }

  voltar() {
    this.nomeCliente = '';
  }

  
  getCep() {
    alert('teste');
  }
  
  salvarCliente(cliente: Cliente) {

    if (cliente.clienteId > 0) {
      this.modo = 'put';
      this.clienteService.put(cliente).subscribe(
        (retorno: any) => {
          console.log(retorno);
          this.carregarClientes();
          this.voltar();
        },
        (erro: any) => {
          console.log(erro);
        }
      );
    } else {
      this.modo = 'post';
      this.clienteService.post(cliente).subscribe(
        (retorno: any) => {
          console.log(retorno);
          this.carregarClientes();
          this.voltar();
        },
        (erro: any) => {
          console.log(erro);
        }
      );
    }
  }

  clienteSubmit() {
    this.salvarCliente(this.clienteForm.value);
  }

  novoCliente() {
    this.clienteSelecionado = new Cliente();
    this.nomeCliente = 'novo';
    this.clienteForm.patchValue(this.clienteSelecionado);
  }

  excluirCliente(cliente: Cliente) {
    this.clienteService.delete(cliente.clienteId).subscribe(
      (retorno: any) => {
        console.log(retorno);
        this.carregarClientes();
        this.voltar();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

}
