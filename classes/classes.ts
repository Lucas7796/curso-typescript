class Data {
  // publico por padrao
  dia: number
  mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)

const casamento = new Data //pode-se omitir os parenteses devido ao valor padrao

class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
  }
} // exatamento a mesma classe porem declarado de forma mais curta

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)

const casamentoEsperto = new DataEsperta //pode-se omitir os parenteses devido ao valor padrao
