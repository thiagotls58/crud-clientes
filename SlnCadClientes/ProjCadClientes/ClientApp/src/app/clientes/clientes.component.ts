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
  public modo = 'grid';

  public clientes: Cliente[];

  constructor(private fb: FormBuilder, 
      private cepService: ConsultaCepService,
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
    this.modo = 'form';
    this.clienteForm.patchValue(cliente);
  }

  voltar() {
    this.modo = 'grid';
  }

  clkBtnBuscar() {
    this.getCep(this.clienteForm.value);
  }

  
  getCep(cliente: Cliente) {
    this.cepService.consultaCEP(cliente.cep)
      .subscribe(dados => this.popularForm(dados));
  }

  popularForm(dados: any) {
    console.log(dados);
    this.modo = 'form';
    
    this.clienteSelecionado = new Cliente();
    this.clienteSelecionado.endereco = dados.logradouro;
    this.clienteSelecionado.complemento = dados.complemento;
    this.clienteSelecionado.bairro = dados.bairro;
    this.clienteSelecionado.cidade = dados.localidade;
    this.clienteSelecionado.estado = dados.uf;

    this.clienteForm.patchValue(this.clienteSelecionado);
  }
  
  salvarCliente(cliente: Cliente) {

    if (cliente.clienteId > 0) {
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
    this.modo = 'form';
    
    this.clienteSelecionado = new Cliente();
    this.clienteSelecionado.clienteId = 0;
    this.clienteSelecionado.nome = '';
    this.clienteSelecionado.dataNascimento = '';
    this.clienteSelecionado.sexo = '';
    this.clienteSelecionado.cep = '';
    this.clienteSelecionado.endereco = '';
    this.clienteSelecionado.complemento = '';
    this.clienteSelecionado.bairro = '';
    this.clienteSelecionado.cidade = '';
    this.clienteSelecionado.estado = '';
    this.clienteSelecionado.numero = 0;

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
