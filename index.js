
/*Constantes que indicam o xp necessário para alcançar determinado nível*/

const XP_FOR_BRONZE = 1000
const XP_FOR_SILVER = 2000
const XP_FOR_GOLD = 5000
const XP_FOR_PLATINUM = 7000
const XP_FOR_ASCENDING = 8000
const XP_FOR_IMORTAL = 9000
const XP_FOR_RADIANT = 10000

main()

function main()
{
    /*Ficha do jogador*/

    let playerName = "Link"
    let playerLevel
    let playerXP = 9300

    /*Define o nivel do jogador baseado em seu XP*/

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

    /*Informa o nivel do jogador*/

    console.log("O herói de nome " + playerName + " está no nível de " + playerLevel)

}