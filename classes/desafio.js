"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.velocidade = 0;
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo();
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        this._primeiroNome = nome;
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map