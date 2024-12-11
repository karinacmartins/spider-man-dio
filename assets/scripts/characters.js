// Dados dos personagens
const characters = {

  //Tobey Maguire
  "peter-parker1": {
    title: "Peter Parker / Homem-Aranha",
    image: "../../assets/images/spiderman-tobey/characters/peter1-tobey.png",
    description: `
      <strong>Ator:</strong> Tobey Maguire<br>
      <strong>Filme:</strong> Homem-Aranha (2002)<br>
      <strong>Descrição:</strong> Um estudante tímido e inteligente que ganha superpoderes após ser picado por uma aranha geneticamente modificada.
    `,
  },
  "peter-parker2": {
    title: "Peter Parker / Homem-Aranha",
    image: "../../assets/images/spiderman-tobey/characters/peter2-tobey.png",
    description: `
      <strong>Ator:</strong> Tobey Maguire<br>
      <strong>Filme:</strong> Homem-Aranha 2 (2004)<br>
      <strong>Descrição:</strong> Peter luta para equilibrar sua vida como super-herói e estudante, enquanto enfrenta o brilhante, mas perigoso, Dr. Otto Octavius, que se transforma no Dr. Octopus.
    `,
  },
  "peter-parker3": {
    title: "Peter Parker / Homem-Aranha",
    image: "../../assets/images/spiderman-tobey/characters/peter3-tobey.png",
    description: `
      <strong>Ator:</strong> Tobey Maguire<br>
      <strong>Filme:</strong> Homem-Aranha 3 (2007)<br>
      <strong>Descrição:</strong> Peter lida com os desafios de seu lado sombrio quando é influenciado pelo simbionte, enquanto enfrenta Flint Marko, o Homem-Areia, e Eddie Brock, que se torna Venom.
    `,
  },
  "green-goblin": {
    title: "Norman Osborn / Duende Verde",
    image: "../../assets/images/spiderman-tobey/characters/duende-willem.jpg",
    description: `
      <strong>Ator:</strong> Willem Dafoe<br>
      <strong>Filme:</strong> Homem-Aranha (2002)<br>
      <strong>Descrição:</strong> Cientista e empresário que, após um experimento mal-sucedido, se transforma no insano Duende Verde.
    `,
  },
  "mary-kirsten": {
    title: "Mary Jane Watson",
    image: "../../assets/images/spiderman-tobey/characters/mary-kirsten.png",
    description: `
      <strong>Ator:</strong> Kirsten Dunst<br>
      <strong>Filme:</strong> Homem-Aranha <br>
      <strong>Descrição:</strong> Interesse amoroso de Peter Parker, aspirante a atriz e amiga de infância de Peter.
    `,
  },
  "tia-may": {
    title: "Tia May Parker",
    image: "../../assets/images/spiderman-tobey/characters/tia-may-tobey.png",
    description: `
      <strong>Ator:</strong> Rosemary Harris<br>
      <strong>Filme:</strong> Homem-Aranha <br>
      <strong>Descrição:</strong> Tia de Peter Parker, que serve como figura maternal e apoio emocional após a morte de Ben Parker.
    `,
  },
  "ben-parker": {
    title: "Ben Parker",
    image: "../../assets/images/spiderman-tobey/characters/ben-parker-tobey.png",
    description: `
      <strong>Ator:</strong> Cliff Robertson<br>
      <strong>Filme:</strong> Homem-Aranha (2002)<br>
      <strong>Descrição:</strong> Tio de Peter Parker, cuja morte trágica ensina a Peter a responsabilidade que acompanha grandes poderes.
    `,
  },
  "otto-octavius": {
    title: "Dr. Otto Octavius / Dr. Octopus",
    image: "../../assets/images/spiderman-tobey/characters/dr-octopus.png",
    description: `
      <strong>Ator:</strong> Alfred Molina<br>
      <strong>Filme:</strong> Homem-Aranha 2 (2004)<br>
      <strong>Descrição:</strong> Cientista brilhante cuja obsessão com seu projeto de fusão nuclear o transforma em um vilão com tentáculos mecânicos.
    `,
  },
  "j-jonah-jameson": {
    title: "J. Jonah Jameson",
    image: "../../assets/images/spiderman-tobey/characters/j-jonah.png",
    description: `
      <strong>Ator:</strong> J.K. Simmons<br>
      <strong>Filme:</strong> Homem-Aranha 2 (2004)<br>
      <strong>Descrição:</strong> Editor-chefe do Clarim Diário, conhecido por sua postura obstinada e por liderar uma campanha contra o Homem-Aranha, frequentemente publicando manchetes que o retratam como uma ameaça.
    `,
  },
  "harry-osborn": {
    title: "Harry Osborn",
    image: "../../assets/images/spiderman-tobey/characters/harry-osborn-james.png",
    description: `
      <strong>Ator:</strong> James Franco<br>
      <strong>Filme:</strong> Homem-Aranha <br>
      <strong>Descrição:</strong> Melhor amigo de Peter Parker e filho de Norman Osborn, que mais tarde se torna um inimigo devido a sua sede de vingança.
    `,
  },
  "flint-marko": {
    title: "Flint Marko / Homem-Areia",
    image: "../../assets/images/spiderman-tobey/characters/homem-areia.png",
    description: `
      <strong>Ator:</strong> Thomas Haden Church<br>
      <strong>Filme:</strong> Homem-Aranha 3 (2007)<br>
      <strong>Descrição:</strong> Um ladrão que ganha poderes de manipulação de areia após um acidente em um acelerador de partículas.
    `,
  },
  "eddie-brock": {
    title: "Eddie Brock / Venom",
    image: "../../assets/images/spiderman-tobey/characters/venom.png",
    description: `
      <strong>Ator:</strong> Topher Grace<br>
      <strong>Filme:</strong> Homem-Aranha 3 (2007)<br>
      <strong>Descrição:</strong> Um fotógrafo rival de Peter Parker que se une a um simbionte alienígena para se tornar Venom.
    `,
  },
  
  "harry-osborn-novo-duende": {
    title: "Harry Osborn / Novo Duende",
    image: "../../assets/images/spiderman-tobey/characters/harry-osborn-duende.png",
    description: `
    <strong>Ator:</strong> James Franco<br>
    <strong>Filme:</strong> Homem-Aranha 3 (2007)<br>
    <strong>Descrição:</strong> Harry Osborn assume o manto de Novo Duende, determinado a vingar a morte de seu pai, Norman Osborn. Ele luta contra Peter Parker, mas eventualmente percebe a verdade sobre seu pai e ajuda Peter na batalha final.
  `,
  },

  //Andrew Garfield
  "peter-parker2": {
    title: "Peter Parker / Homem-Aranha",
    image: "../../assets/images/spiderman-andrew/movie-01/gallery/image-01.png",
    description: `
      <strong>Ator:</strong> Andrew Garfield<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha (2012)<br>
      <strong>Descrição:</strong> Um jovem inteligente e curioso que descobre segredos sobre seus pais e ganha superpoderes após ser picado por uma aranha geneticamente modificada.
    `,
  },
  "gwen-stacy2": {
    title: "Gwen Stacy",
    image: "../../assets/images/spiderman-andrew/movie-01/gallery/image-02.png",
    description: `
      <strong>Ator:</strong> Emma Stone<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha (2012)<br>
      <strong>Descrição:</strong> Namorada de Peter Parker, uma jovem brilhante que trabalha no laboratório de Dr. Connors. Ela é uma peça-chave no combate ao vilão Lagarto.
    `,
  },
  "dr-connors": {
    title: "Dr. Curt Connors / Lagarto",
    image: "../../assets/images/spiderman-andrew/movie-01/gallery/image-03.png",
    description: `
      <strong>Ator:</strong> Rhys Ifans<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha (2012)<br>
      <strong>Descrição:</strong> Um cientista que tenta regenerar seu braço perdido usando DNA de répteis, mas se transforma no vilão Lagarto.
    `,
  },
  "may-parker2": {
    title: "Tia May Parker",
    image: "../../assets/images/spiderman-andrew/movie-01/gallery/image-04.png",
    description: `
      <strong>Ator:</strong> Sally Field<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha (2012)<br>
      <strong>Descrição:</strong> Tia de Peter Parker, que o apoia emocionalmente enquanto ele enfrenta os desafios como Homem-Aranha.
    `,
  },
  "ben-parker2": {
    title: "Ben Parker",
    image: "../../assets/images/spiderman-andrew/movie-01/gallery/image-05.png",
    description: `
      <strong>Ator:</strong> Martin Sheen<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha (2012)<br>
      <strong>Descrição:</strong> Tio de Peter Parker, cuja morte inspira Peter a abraçar seu papel como Homem-Aranha.
    `,
  },
  "max-dillon": {
    title: "Max Dillon / Electro",
    image: "../../assets/images/spiderman-andrew/movie-02/gallery/image-01.png",
    description: `
      <strong>Ator:</strong> Jamie Foxx<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha 2 (2014)<br>
      <strong>Descrição:</strong> Um técnico da Oscorp que, após um acidente envolvendo enguias elétricas, se torna o poderoso vilão Electro.
    `,
  },
  "harry-osborn2": {
    title: "Harry Osborn / Duende Verde",
    image: "../../assets/images/spiderman-andrew/movie-02/gallery/image-02.png",
    description: `
      <strong>Ator:</strong> Dane DeHaan<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha 2 (2014)<br>
      <strong>Descrição:</strong> Amigo de infância de Peter Parker que herda a Oscorp e se transforma no Duende Verde enquanto busca uma cura para sua doença terminal.
    `,
  },
  "richard-parker": {
    title: "Richard Parker",
    image: "../../assets/images/spiderman-andrew/movie-01/gallery/image-06.png",
    description: `
      <strong>Ator:</strong> Campbell Scott<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha (2012)<br>
      <strong>Descrição:</strong> Pai de Peter Parker, um cientista cuja pesquisa secreta é fundamental para os eventos que moldam a vida de Peter.
    `,
  },
  "alecsei-sytsevich": {
    title: "Aleksei Sytsevich / Rino",
    image: "../../assets/images/spiderman-andrew/movie-02/gallery/image-03.png",
    description: `
      <strong>Ator:</strong> Paul Giamatti<br>
      <strong>Filme:</strong> O Espetacular Homem-Aranha 2 (2014)<br>
      <strong>Descrição:</strong> Um criminoso que utiliza uma armadura mecanizada para se tornar o vilão Rino.
    `,
  },

  //Tom Holland
  "peter-parker-tom": {
    title: "Peter Parker / Homem-Aranha",
    image: "../../assets/images/spiderman-tom/movie-01/gallery/image-01.png",
    description: `
      <strong>Ator:</strong> Tom Holland<br>
      <strong>Filme:</strong> Homem-Aranha: De Volta ao Lar (2017)<br>
      <strong>Descrição:</strong> Um adolescente entusiasmado e aprendiz de Tony Stark, que equilibra a vida escolar com a luta contra o crime em Nova York.
    `,
  },
  "tony-stark": {
    title: "Tony Stark / Homem de Ferro",
    image: "../../assets/images/spiderman-tom/movie-01/gallery/image-02.png",
    description: `
      <strong>Ator:</strong> Robert Downey Jr.<br>
      <strong>Filme:</strong> Homem-Aranha: De Volta ao Lar (2017)<br>
      <strong>Descrição:</strong> Mentor de Peter Parker e figura paterna que ajuda a guiar Peter em suas responsabilidades como super-herói.
    `,
  },
  "adrian-toomes": {
    title: "Adrian Toomes / Abutre",
    image: "../../assets/images/spiderman-tom/movie-01/gallery/image-03.png",
    description: `
      <strong>Ator:</strong> Michael Keaton<br>
      <strong>Filme:</strong> Homem-Aranha: De Volta ao Lar (2017)<br>
      <strong>Descrição:</strong> Um ex-operário que se torna o vilão Abutre ao usar tecnologia alienígena para criar armas avançadas.
    `,
  },
  "ned-leeds": {
    title: "Ned Leeds",
    image: "../../assets/images/spiderman-tom/movie-01/gallery/image-04.png",
    description: `
      <strong>Ator:</strong> Jacob Batalon<br>
      <strong>Filme:</strong> Homem-Aranha: De Volta ao Lar (2017)<br>
      <strong>Descrição:</strong> Melhor amigo de Peter Parker, que descobre sua identidade secreta e o ajuda em suas aventuras.
    `,
  },
  "may-parker-tom": {
    title: "Tia May Parker",
    image: "../../assets/images/spiderman-tom/movie-01/gallery/image-05.png",
    description: `
      <strong>Ator:</strong> Marisa Tomei<br>
      <strong>Filme:</strong> Homem-Aranha: De Volta ao Lar (2017)<br>
      <strong>Descrição:</strong> Tia de Peter Parker, que oferece apoio emocional e prático enquanto ele enfrenta os desafios da vida como super-herói.
    `,
  },
  "quentin-beck": {
    title: "Quentin Beck / Mystério",
    image: "../../assets/images/spiderman-tom/movie-02/gallery/image-01.png",
    description: `
      <strong>Ator:</strong> Jake Gyllenhaal<br>
      <strong>Filme:</strong> Homem-Aranha: Longe de Casa (2019)<br>
      <strong>Descrição:</strong> Um ex-funcionário de Tony Stark que se torna o vilão Mystério, manipulando ilusões para enganar Peter e o público.
    `,
  },
  "mj-watson": {
    title: "MJ Watson",
    image: "../../assets/images/spiderman-tom/movie-02/gallery/image-02.png",
    description: `
      <strong>Ator:</strong> Zendaya<br>
      <strong>Filme:</strong> Homem-Aranha: Longe de Casa (2019)<br>
      <strong>Descrição:</strong> Amiga e eventual interesse amoroso de Peter Parker, conhecida por sua inteligência e sarcasmo.
    `,
  },
  "norman-osborn-tom": {
    title: "Norman Osborn / Duende Verde",
    image: "../../assets/images/spiderman-tom/movie-03/gallery/image-01.png",
    description: `
      <strong>Ator:</strong> Willem Dafoe<br>
      <strong>Filme:</strong> Homem-Aranha: Sem Volta para Casa (2021)<br>
      <strong>Descrição:</strong> Um cientista brilhante e perigoso de um universo alternativo que causa estragos no mundo de Peter Parker.
    `,
  },
  "otto-octavius-tom": {
    title: "Dr. Otto Octavius / Dr. Octopus",
    image: "../../assets/images/spiderman-tom/movie-03/gallery/image-02.png",
    description: `
      <strong>Ator:</strong> Alfred Molina<br>
      <strong>Filme:</strong> Homem-Aranha: Sem Volta para Casa (2021)<br>
      <strong>Descrição:</strong> Um vilão de outro universo que luta contra Peter Parker antes de se redimir.
    `,
  },
  "electro-tom": {
    title: "Max Dillon / Electro",
    image: "../../assets/images/spiderman-tom/movie-03/gallery/image-03.png",
    description: `
      <strong>Ator:</strong> Jamie Foxx<br>
      <strong>Filme:</strong> Homem-Aranha: Sem Volta para Casa (2021)<br>
      <strong>Descrição:</strong> Um vilão com poderes elétricos de outro universo que tenta enfrentar o Homem-Aranha.
    `,
  },

};
