// Interface que define o componente base do sanduíche
class Sanduiche {
  custo() {}
}

// Implementação do sanduíche base: Frango Assado
class FrangoAssado extends Sanduiche {
  custo() {
    return 4.50;
  }
}

// Decorator para adicionar ingredientes extras
class Decorator extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  custo() {
    return this.sanduiche.custo();
  }
}

// Decorator específico para adicionar Pepperoni
class Pepperoni extends Decorator {
  custo() {
    return this.sanduiche.custo() + 0.99;
  }
}

// Decorator específico para adicionar Queijo Mussarela Ralado
class QueijoMussarelaRalado extends Decorator {
  custo() {
    return this.sanduiche.custo() + 2.00;
  }
}

// Criando o sanduíche de Frango Assado com Pepperoni e Queijo Mussarela Ralado
let sanduiche = new FrangoAssado();
sanduiche = new Pepperoni(sanduiche);
sanduiche = new QueijoMussarelaRalado(sanduiche);

// Imprimindo o custo total do sanduíche
console.log(`Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $${sanduiche.custo().toFixed(2)}.`);
