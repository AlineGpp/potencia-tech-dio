let nome = '';
let XP = 0;


const verificaXP = (nome, XP) => {
    if(XP <= 1000)
       return 'Ferro'
    else if(XP > 1000 && XP <= 2000)
     return 'Bronze'
    else if (XP > 2000 && XP <=5000)
      return 'Prata'
    else if(XP > 5000 && XP <=7000)
      return 'Ouro'
    else if(XP > 7000 && XP <=8000)
       return 'Platina'
    else if (XP > 8000 && XP <= 9000)
     return 'Ascendente'
    else if (XP > 9000 && XP <=10000)
     return 'Imortal'
    else 
    return 'Radiante'
        
}

XP = verificaXP("Dev",8750)
nome = 'DevDio'

console.log("O Herói ",nome, ' está no nível ',XP)