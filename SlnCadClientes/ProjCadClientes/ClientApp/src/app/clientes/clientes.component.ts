import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../models/cliente';

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

  public clientes = [
    {
      "clienteId": 1,
      "nome": "thiago luz de sousa",
      "dataNascimento": "1996-05-06",
      "sexo": "m",
      "cep": "19031-230",
      "endereco": "Rua Doutor José Carlos Franco de Carvalho",
      "numero": 500,
      "complemento": "",
      "bairro": "Vila Áurea",
      "estado": "SP",
      "cidade": "Presidente Prudente"
    },
    {
      "clienteId": 2,
      "nome": "devanir luz de sousa",
      "dataNascimento": "1974-10-23",
      "sexo": "m",
      "cep": "19025-170",
      "endereco": "Rua Ângelo Guissi",
      "numero": 39,
      "complemento": "",
      "bairro": "Parque São Matheus",
      "estado": "SP",
      "cidade": "Presidente Prudente"
    },
    {
      "clienteId": 2,
      "nome": "valquiria almeida luz",
      "dataNascimento": "1974-10-23",
      "sexo": "f",
      "cep": "19025-170",
      "endereco": "Rua Ângelo Guissi",
      "numero": 39,
      "complemento": "",
      "bairro": "Parque São Matheus",
      "estado": "SP",
      "cidade": "Presidente Prudente"
    }
  ];

  constructor(private fb: FormBuilder) { 
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      dataNascimento: [''],
      sexo: [''],
      cep: [''],
      endereco: [''],
      numero: [''],
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

  clienteSubmit() {
    console.log(this.clienteForm.value);
  }

}
