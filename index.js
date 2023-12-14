
/*Constantes que indicam o xp necessário para alcançar determinado nível*/

const XP_FOR_BRONZE = 1000;
const XP_FOR_SILVER = 2000;
const XP_FOR_GOLD = 5000;
const XP_FOR_PLATINUM = 7000;
const XP_FOR_ASCENDING = 8000;
const XP_FOR_IMORTAL = 9000;
const XP_FOR_RADIANT = 10000;

/*Constantes que contém um exemplo de ficha de jogador*/

const PLAYER_NAME_EXAMPLE = "Link";
const PLAYER_XP_EXAMPLE = 7500;

/*===========================================================*/

  /*Classe do jogador*/

class Player {
   
    constructor(name, xp)
    {
        this.name = name;
        this.xp = xp;
        this.level = "No Level";
    }

    /*Define o nivel do jogador baseado em seu XP*/

    setPlayerLevel()
    {
        if(this.xp <= XP_FOR_BRONZE)
            this.level = "Ferro";
        else if(this.xp <= XP_FOR_SILVER)
            this.level= "Bronze";
        else if(this.xpP <= XP_FOR_GOLD)
            this.level = "Prata";
        else if(this.xp <= XP_FOR_PLATINUM)
            this.level = "Ouro";
        else if(this.xp <= XP_FOR_ASCENDING)
            this.level = "Platina";
        else if(this.xpP <= XP_FOR_IMORTAL)
            this.level = "Ascendente";
        else if(this.xp <= XP_FOR_RADIANT)
            this.level = "Imortal";
        else
            this.level = "Radiante";
    }

    /*Informa o nivel do jogador*/

    showPlayerLevel()
    {
        console.log(`O herói de nome ${this.name} está no nível de ${this.level}`);
    }
    
}

/*===========================================================*/

main();

/*===========================================================*/

function main()
{

    /*Instancia objeto jogador*/

    let playerOne = new Player(PLAYER_NAME_EXAMPLE, PLAYER_XP_EXAMPLE);

    /*Define o nivel do jogador e mostra na tela*/
    
    playerOne.setPlayerLevel();
    playerOne.showPlayerLevel();
}