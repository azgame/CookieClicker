function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class SoulHolder
{
    constructor()
    {
        this.currencies = {};
        this.UpdateCurrency("basic", 20);
        this.UpdateCurrency("juju", 0);
        this.UpdateCurrency("diego", 0);
        this.UpdateCurrency("bingo", 0);
        this.UpdateCurrency("sole", 0);
        this.UpdateCurrency("super", 0);
        this.UpdateCurrency("superDeDuper", 0);

        this.rates = {};
        this.UpdateRate("basic", 0);
        this.UpdateRate("juju", 0);
        this.UpdateRate("diego", 0);
        this.UpdateRate("bingo", 0);
        this.UpdateRate("sole", 0);
        this.UpdateRate("super", 0);
        this.UpdateRate("superDeDuper", 0);
    }

    HasCurrency(Key)
    {
        return Key in this.currencies;
    }

    HasRate(Key)
    {
        return Key in this.rates;
    }
    GetRate(name)
    {
      return this.rates[name];
    }
    AddCurrency(Key)
    {
        this.currencies[Key] = 0;
    };

    UpdateCurrency(Key, Value)
    {
        if (!this.HasCurrency(Key))
        {
            this.currencies[Key] = 0;
        }

        this.currencies[Key] += Value;
    };

    UpdateRate(Key, Rate)
    {
        if (!this.HasRate(Key))
        {
            this.rates[Key] = 0;
        }

        this.rates[Key] += Rate;
    }

    Buy(Building)
    {
        this.UpdateRate(Building.GetCurrencyGet(), Building.GetRate());
        this.UpdateCurrency(Building.GetCurrencyBuy(), -Building.GetCost());
    }

    Update()
    {
        for (const[key, value] of Object.entries(this.rates))
        {
            this.UpdateCurrency(key, value);
        }
    }
}

class Builder
{
    constructor(Name, CurrencyCost, Cost, CurrencyGet, Rate)
    {
      this.name = Name;
      this.currencyCost = CurrencyCost;
      this.cost = Cost;
      this.currencyGet = CurrencyGet;
      this.rate = Rate;
    }

    GetName()
    {
        return this.name;
    }

    CanBuy(SoulHolder)
    {
        if (SoulHolder.currencies[this.currencyCost] > this.cost)
          return true;
    }

    Buy()
    {
        this.cost = this.cost * 1.1;
    }

    GetCost()
    {
        return this.cost;
    }

    GetCurrencyBuy()
    {
        return this.currencyCost;
    }

    GetCurrencyGet()
    {
        return this.currencyGet;
    }

    GetRate()
    {
        return this.rate;
    }
}

class BuildingRegistry
{
    constructor()
    {
        this.buildings = {};

        var ghostHelper = new Builder("ghostHelperBuilding", "basic", 50, "basic", 0.03);
        this.AddBuilding(ghostHelper);
        var graveStone = new Builder("graveStoneBuilding", "basic", 50, "juju", 0.03);
        this.AddBuilding(graveStone);

        var graveYard = new Builder("graveYardBuilding", "juju", 200, "diego", 0.15);
        this.AddBuilding(graveYard);

        var cemetary = new Builder("cemetaryBuilding", "diego", 500, "bingo", 0.45);
        this.AddBuilding(cemetary);
        var battlefield = new Builder("battlefieldBuilding", "bingo", 1500, "sole", 1.5);
        this.AddBuilding(battlefield);
        var ghoulapalooza = new Builder("ghoulapaloozaBuilding", "sole", 5000, "super", 5.4);
        this.AddBuilding(ghoulapalooza);
        var skeletonboneanza = new Builder("skeletonboneanzaBuilding", "super", 10000, "superDeDuper", 9);
        this.AddBuilding(skeletonboneanza);
    }

    AddBuilding(Building)
    {
        this.buildings[Building.GetName()] = Building;
    }

    Buy(Key, SoulHolder)
    {
        if (this.buildings[Key].CanBuy(SoulHolder))
        {
            SoulHolder.Buy(this.buildings[Key]);
            this.buildings[Key].Buy();
        }
    }

    BuyRandom(SoulHolder)
    {
        var key = Object.keys(this.buildings)[getRandomInt(7)];
        
        this.Buy(key, SoulHolder);
    }

    GetRandomBuilding()
    {
        return Object.keys(this.buildings)[getRandomInt(7)];
    }

    GetBuilding(name)
    {
        return this.buildings[name];
    }
}