/*class Upgrade {
   constructor (name_, cost_, rate_, type_, costType_) {
        this.name = name_;
        this.cost = cost_;
        this.rate = rate_;
        this.type = type_;
        this.costType = costType_;
    }
    function UpgradeSelf()
    {
        this.cost = this.cost * 1.5;
    }
function GetCost()
    {
        return this.cost;
    }
function GetType()
{
    return this.type;
}
}

class SoulHolder
{
    constructor()
    {
        var currencyMap = {};
        var incomeMap = {};

         ...basicSouls:

        jujuSouls:

        diegoSouls:

        bingoSouls:

        soleSouls:

        superSouls:

        superDeDuperSouls:
     

        currencyMap["basicSouls"] = 5;
        currencyMap["jujuSouls"] = 0;
        currencyMap["diegoSouls"] = 0;
        currencyMap["bingoSouls"] = 0;
        currencyMap["soleSouls"] = 0;
        currencyMap["superSouls"] = 0;
        currencyMap["superDeDuperSouls"] = 0;

        incomeMap["basicSouls"] = 0;
        incomeMap["jujuSouls"] = 0;
        incomeMap["diegoSouls"] = 0;
        incomeMap["bingoSouls"] = 0;
        incomeMap["soleSouls"] = 0;
        incomeMap["superSouls"] = 0;
        incomeMap["superDeDuperSouls"] = 0;
    }
   function GainSouls()
    {
        currencyMap["basicSouls"] += incomeMap["basicSouls"];
        currencyMap["jujuSouls"] += incomeMap["jujuSouls"];
        currencyMap["diegoSouls"] += incomeMap["diegoSouls"];
        currencyMap["bingoSouls"] += incomeMap["bingoSouls"];
        currencyMap["soleSouls"] += incomeMap["soleSouls"];
        currencyMap["superSouls"] += incomeMap["superSouls"];
        currencyMap["superDeDuperSouls"] += incomeMap["superDeDuperSouls"];
    }

}