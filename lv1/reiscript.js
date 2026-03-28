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
    "Beatrice": "Uma coruja interessante, porem Nathan não a merece",
    "Rei de amarelo":"Este sou eu criança [ ERRO PR0F4N0 ]"
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