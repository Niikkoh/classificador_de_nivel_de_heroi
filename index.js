
/*Constantes que indicam o xp necessário para alcançar determinado nível*/

const XP_FOR_BRONZE = 1000
const XP_FOR_SILVER = 2000
const XP_FOR_GOLD = 5000
const XP_FOR_PLATINUM = 7000
const XP_FOR_ASCENDING = 8000
const XP_FOR_IMORTAL = 9000
const XP_FOR_RADIANT = 10000

/*===========================================================*/

  /*Ficha com as informações do jogador (EXEMPLO)*/

let player = {
   
    name : "Link",
    XP: 9300,

    level : 0
}

/*===========================================================*/

main()

/*===========================================================*/


function main()
{

    /*Define o nivel do jogador e mostra na tela*/
    
    player.level = setPlayerLevel(player.XP)
    showPlayerLevel(player.name, player.level)

}

/*===========================================================*/

/*Define o nivel do jogador baseado em seu XP*/

function setPlayerLevel(playerXP)
{
    let playerLevel

    if(playerXP <= XP_FOR_BRONZE)
        playerLevel = "Ferro"
    else if(playerXP <= XP_FOR_SILVER)
        playerLevel = "Bronze"
    else if(playerXP <= XP_FOR_GOLD)
        playerLevel = "Prata"
    else if(playerXP <= XP_FOR_PLATINUM)
        playerLevel = "Ouro"
    else if(playerXP <= XP_FOR_ASCENDING)
        playerLevel = "Platina"
    else if(playerXP <= XP_FOR_IMORTAL)
        playerLevel = "Ascendente"
    else if(playerXP <= XP_FOR_RADIANT)
        playerLevel = "Imortal"
    else
        playerLevel = "Radiante"

    return playerLevel
}

/*Informa o nivel do jogador*/

function showPlayerLevel(playerName, playerLevel = "Guest")
{
console.log(`O herói de nome ${playerName} está no nível de ${playerLevel}`)
}