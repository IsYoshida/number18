const ownerNumber = ["557491143362@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557491143362' 
// mude para seu numero

const menuimg = 'https://imgur.com/gallery/akqufry'
// Link da foto do menu

const registeruser = false
// Se é obrigatório o usuário se registrar para usar os comandos

const callbotmsgs = ['Número 18', 'Android']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'Olá, o chat privado está bloqueado, logo abaixo você poderá encontrar o link de acesso ao grupo de figurinhas onde poderá obter mais informações.\n\n*https://chat.whatsapp.com/GQ42nfU8A9nCO8CuQkbfzj*\n\nApós essa mensagem você será bloqueado automáticamente :)'
//mensagem do antinewchat


const antipvmsg = '*🚫 CHAT PRIVADO BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `*Seja bem-vindo ${numero}*\n\n*Envie ${prefix}menu no chat privado para receber a lista de comandos!*`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `👋🏻 ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `MENU ANDROID NÚMERO 18`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BEM-VINDO(a)'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://imgur.com/gallery/Z4U8y57`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://imgur.com/gallery/Z4U8y57`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '*ANDROID NÚMERO 18*\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫 Este comando não está disponível no momento 🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Parece que alguém mandou uma mensagem indevida, hora de dizer adeus 👋🏻*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `A contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Olá adm, parece que você mandou uma mensagem proibida, vou fingir que não vi isso mas espero que não se repita*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = '*Alerta de conteúdo suspeito!* 👋🏻 \n_(Em caso de remoção de forma injusta entre em contato com algum dos administradores do grupo, ou aceite o destino)_.'
// mensagem de ban no antiporn

const adminmsgporn = '*Alerta de envio de conteúdo suspeito, voc sabe do que estou falando, de qualquer maneira isso foi um aviso :)*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*😠👋🏻*\n I hate you.'
// mensagem de ban no antilink

const adminmsglink = '*Você é um admin do grupo, irei te poupar por este motivo.*'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Cuidado com o vocabulário admin. :x'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = '*Algo me diz que essa palavra não é permitida aqui, prepare-se para ser punido.*'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://imgur.com/gallery/8boccdU'
const textmsgday = 'Bom dia ☕ > <'
// link e mensagem de bom dia

const linkimgeve = 'https://imgur.com/gallery/dd1xSfl'
const textmsgeve = `Boa tarde ☀️ > <`
// link e mensagem de boa tarde

const linkimgnig = 'https://imgur.com/gallery/S2xLiEr'
const textmsgnig = '️Boa noite ☕ > <'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = '*Erro, tente novamente.*'
// mensagem de erro

const notregister = `*Comando inexistente, envie !menu no CHAT PRIVADO ou no grupo do link abaixo.*
*https://chat.whatsapp.com/GQ42nfU8A9nCO8CuQkbfzj.*
*Caso envie esse comando aqui você será removido e bloqueado imediatamente.*\n (Ignore esta mensagem se ela for enviada no grupo de stickers).`

// MENSAGENS DE AUTOREPLY

const botlindo = '> <'
const linkbotlindo = 'https://imgur.com/gallery/qURtQwO'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado. 😡'
const cadebot = 'Estou aqui.'
const botfdp = 'Que falta de respeito! Vou te ensinar a ter bons modos mais tarde.'
const botgostoso = 'Muito obrigada, pena que não posso dizer o mesmo'
const botfofo = 'Muito obrigada owo'
const botbaianor = 'Idaí?'
const botcorno = 'E a Web Namorada como está?'
const botputa = 'Você já se perguntou onde sua mãe está agora?'
const botgay = 'Já espremeu linguiça hoje?'
const botviado = 'Falou o famoso pindola de mercadinho.'
const numbotfeio = 'E a sua mamãe, como está?'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde.. ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Desculpe-me, houve falha ao converter para sticker ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Infelizmente este comando está disponível somente para grupos! ❌',
        ownerG: '❌ Este comando somente meu chefe pode usar! ❌',
        ownerB: '❌ Este comando somente o grupo do meu chefe pode usar! ❌',
        admin: '❌ Se ponha no seu lugar membro comum ❌',
        Badmin: '❌ você não acha que está se esquecendo de algo? Isso mesmo, esqueceu de me dar o cargo de admin do grupo! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:🌙 Haru\n' 
+ 'ORG:Haru;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557491143362:+55 74 9114-3362\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.registeruser = registeruser
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs
exports.menuimg = menuimg