// --- CONFIGURAÇÕES DE COMANDOS ---
const COMANDOS = {
    "HELP": "COMANDOS: STATUS, REBOOT, LOGS, DECODE, WHOAMI, CLEAR, JCPM, BYPASS, YELLOW, MAP, ACESS",
    "STATUS": "SISTEMA INSTÁVEL. NÚCLEO 0124 NÃO RESPONDE.",
    "REBOOT": "FALHA NA INICIALIZAÇÃO. MEMÓRIA PROTEGIDA.",
    "LOGS": "14:00 - A VERDADE FOI ALTERADA. 14:15 - O REI CHEGOU.",
    "DECODE": "ERRO: CHAVE DE 16 DÍGITOS REQUERIDA PARA DESCRIPTOGRAFAR.",
    "WHOAMI": "USUÁRIO: INVASOR DETECTADO. STATUS: EM MONITORAMENTO.",
    "CLEAR": "LIMPANDO REGISTROS LOCAIS... CONCLUÍDO.",
    "JCPM": "SERVIDOR ASTRALYN: SINAL INTERMITENTE.",
    "BYPASS": "ACESSO NEGADO. PROTOCOLO DE SEGURANÇA ATIVO.",
    "YELLOW": "O REI DE AMARELO AGUARDA EM CARCOSA.",
    "MAP": "COORDENADAS BLOQUEADAS. BUSCANDO TRUTH...",
    "S": "ERROR: ACESSO AO NÚCLEO BLOQUEADO.",
    "N": "OPERANDO... AGUARDANDO COMANDO INTERNO.",
    "ACESS": "ACESSO NEGADO - CÓDIGO DE ____ : AEYAQQBMAEEAQwBJAEE=",
    "USER":"NATHAN?"
};

const input = document.getElementById('input-terminal');
const lista = document.getElementById('lista-logs');
const box = document.getElementById('terminal-box');


function adicionarLog(texto, cor) {
    if (!lista || !box) return;
    const li = document.createElement('li');
    li.style.color = cor;
    li.innerHTML = texto;
    lista.appendChild(li);
    box.scrollTop = box.scrollHeight;
}


async function iniciarSistema() {
    if (!input) return;
    
    input.disabled = true; 
    const logsIniciais = [
        { t: "> INICIANDO PROTOCOLO JCPM_RE01...", c: "#FFD700", d: 500 },
        { t: "> VERIFICANDO INTEGRIDADE DOS ARQUIVOS... [OK]", c: "#0f0", d: 800 },
        { t: "> CONECTANDO AO BANCO DE DADOS... [FALHA]", c: "red", d: 1000 },
        { t: "> TENTANDO BYPASS NO NÚCLEO 8268... [SUCESSO]", c: "#0f0", d: 600 },
        { t: "> CARREGANDO MÓDULO 'REI_AMARELO'... [CORROMPIDO]", c: "red", d: 1200 },
        { t: "> MEMÓRIA RAM: 24... ERROR", c: "red", d: 400 },
        { t: "----------------------------------------", c: "#4d3d00", d: 200 },
        { t: "> SISTEMA EM MODO DE EMERGÊNCIA ATIVO.", c: "#FFD700", d: 500 },
        { t: "> DIGITE 'HELP' PARA LISTAR COMANDOS DISPONÍVEIS.", c: "#FFD700", d: 300 },
        { t: "> VERIFICANDO INTEGRIDADE: - - - - Killinstance ? s/n ", c: "#FFD700", d: 300 }
    ];

    for (let log of logsIniciais) {
        await new Promise(res => setTimeout(res, log.d));
        adicionarLog(log.t, log.c);
    }
    
    input.disabled = false;
    input.focus();
}


input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const val = this.value.toUpperCase().trim();
        this.value = "";

        
        if (COMANDOS[val]) {
            adicionarLog(`>> ${val}`, "#FFD700");
            adicionarLog(`> ${COMANDOS[val]}`, "#FFD700");
        } 
        else {
            
            adicionarLog(`>> ${val}`, "red");
            adicionarLog(`> ERRO: COMANDO NÃO RECONHECIDO NO TERMINAL.`, "red");
        }
    }
});

window.onload = iniciarSistema;

// Bloqueios de segurança
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' || (e.ctrlKey && (e.key === 'u' || e.key === 'i'))) {
        e.preventDefault();
    }
});