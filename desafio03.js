class Heroi {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        if(this.tipo === "guerreiro")
        {
            console.log(`O ${this.tipo} atacou usando espada!`)
        }
        if(this.tipo === "monge")
        {
            console.log(`O ${this.tipo} atacou usando artes marciais!`)
        }
        if(this.tipo === "ninja")
        {
            console.log(`O ${this.tipo} atacou usando shuriken!`) 
        }
    }
}

let heroi = new Heroi("Bartolomeu",105,"monge");
heroi.atacar();