const gatilhos = {
    "eu sei quem voce e": "Eu sou aquele que se esconde nas respostas",
    "falacia": "Artificio da verdade",
    "pragmatico": "Religiao",
    "nathan": "Sombra quebrada, porem interessante",
    "fenrir": "Crianca que se recusa a aceitar seu destino",
    "kaelly": "Aquele que teve seu destino roubado",
    "violet": "Enganacao e persistencia, porem uma mae mesmo sem sentimentos",
    "connor": "Calado, discreto, porem demonstra afeto com aqueles que o importam, da sua propria forma",
    "galius": "Intrigante, pessoa de poucas palavras e poucas revelacoes",
    "chloe" : "Simpatica com todos, algum dia causara sua morte",
    "riuh" : "Um guerreiro mesmo sendo uma crianca, infelizmente ditado como uma maquina de guerra, seu interior ja esta praticamente podre",
    "yue" : "Uma crianca doce e simpatica, possui dentro de si mais de uma alma",
    "eri" : "Uma crianca doce e simpatica, porem, preparada apesar de nao possuir dominio sobre seu chao",
    "kuro": "Gato esperto e bastante curioso, mas como nos ditos populares, a curiosidade matou o gato",
    "batman": "Um guerreiro, mesmo sendo uma crianca",
    "solar": "Uma crianca feliz, apesar de quebrada",
    "lynx": "Misteriosa",
    "eli": "Pequeno, e isso que lhe destaca",
    "bailey": "Zombado pelos demais apesar de apenas querer um pouco de amor parental...",
    "percy": "Um... tubarao bastante astuto",
    "agnes": "A ausencia de resposta e a resposta mais barulhenta",
    "oryon": "4 Bananas...",
    "saturno": "Julgado apenas por amar sua criacao, somos parecidos nesse sentido",
    "matteo": "Aquele que carrega consigo o fardo de um corpo morto",
    "angelo": "Timido, deveria ter mais confianca em seus atos",
    "anora": "Uma rachadura que se conserta sozinha, dificil de quebrar permanentemente",
    "beatrice": "Uma coruja interessante, porem Nathan não a merece",
    "rei de amarelo":"Este sou eu criança [ ERRO PR0F4N0 ]",
    "slime":"O proprio caos engarrafado",
    "sebastion":"Um cientista louco, grudento com aqueles que lhe divertem, gosta do caos",
    "husky":"Um ser divergente, lobo ou cachorro? isso nao importa, ele sabe quem e",
    "kaiori":"Uma sombra que ainda reside no olhar de muitos",
    "andrean":"Simpatico, alguem que gosta de conversar e ajudar os outros",
    "lenora":"Sempre fechada, uma pessoa de poucas palavras, respeito isso",
    "lucas":"Um rapaz bastante centrado de poucas palavras",
    "astrid":"quebrada em diversos sentidos",
    "dante":"Um corvo esperto, porem sentimental demais",
    "icaros":"Guerreiro de muitas palavras, simpatico",
    "dagon":"Guerreiro de poucas palavras, aparenta ja ter visto muito",
    "rouge":"Bixa... o que isso significa? , intrigante...",
    "nathaniel":"Bastante... safado, e assim que voces se diregem a ele correto?",
    "mantega":"Precisa ser parada, trate de vingar seu filho Nathan",
    "star":"Uma engrenagem quebrada, trate de vingar seu filho Nathan",
    "haiko":"Um garoto amaldicoado, sua maldicao segue no mesmo caminho que ele",
    "tsukasa":"quebrado, a beira do precipicio",
    "dove":"enigmatico",
    "gal":"auto tortura, precisa ser parado, seu destino e interessante demais para morrer assim",
    "iris":"todos os caminhos dao em roma... entendo seu pensamento pequena coelho",
    "smoke":"simpatico ate demais, deveria ser mais fechado, nem todos sao confiaveis",
    "lilly":"Um crianca interessante, a diferenca de seres que compoem seu corpo e intrigante",
    "kai":"Utiliza magia de forma interessante, uma pessoa forte de poucas palavras",
    "verdantia":"Deusa da vida, nunca a vi, mas seu nome nao e estranho",
    "oblivium":"Deus da morte, alguém extremamente fechado",
    "luminara":"Deus da justica e da verdade, nunca a vi, mas seu nome nao e estranho",
    "valerium":"Deus da magia, minha presenca e facilmente detectada por ele, deveria me preocupar com isso?",
    "vulcanus":"Deus do fogo, perverso, ainda pagara por seus pecados",
    "kitan":"gato esperto e extremamente simpatico com a casca, veio de outro local, interessante",
    "cintia":"psicologa timida, raramente dissociativa",
    "yuta":"guerreiro quebrado, o tempo cobrou de sua mente até demais",
    "lucas franciss":"nunca foi um pai, apenas um ser triste, mas inteligente",
    "gabriel":"Uma piada, o que voce estava pensando nathan? deveria ter matado todos naquela sala quando teve oportunidade",
    "caça":"modo de viver para alguns",
    "scarlet":"Serva de vulcanus, suas intecoes sao ambiguas, por qual linha seguira?"
};

const respostasAleatorias = [
    "VOCE E INSIGNIFICANTE", 
    "NAO OUSE FALAR", 
    "ESTA PERDIDO?", 
    "SILENCIO",
    "A MORTE TE ESPERA",
    "AS ESTRELAS NEGRAS ESTAO SUBINDO",
    "NAO GASTE MEU TEMPO"
];


window.obterRespostaRei = function(entrada) {

    const msgLimpa = entrada.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    

    return gatilhos[msgLimpa] || respostasAleatorias[Math.floor(Math.random() * respostasAleatorias.length)];
};