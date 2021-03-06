// Basic Mechanics supported by API
export const mechanics = {

    adapt: { name: "Adapt", multiplier: 20, value: 1 },
    battlecry: { name: "Battlecry", multiplier: 10, value: 1 },
    charge: { name: "Charge", multiplier: 30, value: 1 },
    combo: { name: "Combo", multiplier: 10, value: 1 },
    counter: { name: "Counter", multiplier: 30, value: 1 },
    deathrattle: { name: "Deathrattle", multiplier: 10, value: 1 },
    discover: { name: "Discover", multiplier: 45, value: 1 },
    divineShield: { name: "Divine Shield", multiplier: 30, value: 1 },
    enrage: { name: "Enrage", multiplier: 5, value: 1 },
    freeze: { name: "Freeze", multiplier: 5, value: 1 },
    immune: { name: "Immune", multiplier: 20, value: 1 },
    inspire: { name: "Inspire", multiplier: 15, value: 1 },
    lifesteal: { name: "Lifesteal", multiplier: 15, value: 1 },
    megaWindfury: { name: "Mega Windfury", multiplier: 50, value: 1 },
    poisonous: { name: "Poisonous", multiplier: 25, value: 1 },
    quest: { name: "Quest", multiplier: 60, value: 1 },
    secret: { name: "Secret", multiplier: 30, value: 1 },
    silence: { name: "Silence", multiplier: 15, value: 1 },
    stealth: { name: "Stealth", multiplier: 15, value: 1 },
    spellDamage: { name: "Spell Damage", multiplier: 5, value: 1 },
    taunt: { name: "Taunt", multiplier: 25, value: 1 },
    windfury: { name: "Windfury", multiplier: 5, value: 1 }
}

export const textAbilities = {

    // card draw

    drawCard: { multiplier: 25, value: 1 },
    drawCards: { multiplier: 25, value: 1 },
    drawSecret: { multiplier: 10, value: 1 },
    drawCardDamagedCharacter: { multiplier: 10, value: 1 },
    drawWeapon: { multiplier: 10, value: 1 },
    drawEachPlayers: { multiplier: 5, value: 1 },
    drawCardUntilHand: { multiplier: 10, value: 1 },
    drawForEach: { multiplier: 5, value: 1 },
    drawMinions: { multiplier: 15, value: 1 },
    drawTwoCards: { multiplier: 10, value: 1 },
    drawWeapons: { multiplier: 10, value: 1 },
    drawUntil: { multiplier: 10, value: 1 },
    drawOpponentHalf: { multiplier: -100, value: 1 },
    drawYouHalf: { multiplier: 20, value: 1 },
    drawDivineMinion: { multiplier: 10, value: 1 },
    drawCardDurability: { multiplier: 10, value: 1 },
    drawMurlocs: { multiplier: 5, value: 1 },
    drawCardAndDeal: { multiplier: 30, value: 1 },
    drawOpponentCards: { multiplier: -20, value: 1 },
    drawThreeOneCostMinions: { multiplier: 10, value: 1 },
    drawTwoOneCostMinions: { multiplier: 10, value: 1 },
    drawBDM: { multiplier: 5, value: 1 },
    drawOneAndDiscard: { multiplier: 60, value: 1 },
    drawDreamCard: { multiplier: 25, value: 1 },
    drawCardUntilDragon: { multiplier: 30, value: 1 },
    
    // cast

    castRepeat: { multiplier: 60, value: 1 },
    castSpellDeck: { multiplier: 30, value: 1 },
    castEI: { multiplier: 80, value: 1 },
    castEachSpellGameMinion: { multiplier: 30, value: 1 },
    castRandomSpell: { multiplier: 50, value: 1 },
    castRandomSpellEach: { multiplier: 30, value: 1 },
    castIfMoreAgain: { multiplier: 20, value: 1 },
    discoverAndCast: { multiplier: 50, value: 1 },

    // copy

    copyCard: { multiplier: 50, value: 1 },
    copyCards: { multiplier: 50, value: 1 },
    copyGuess: { multiplier: 30, value: 1 },
    copyChooseMinion: { multiplier: 25, value: 1 },
    copyFriendlyStats: { multiplier: 30, value: 1 },
    copyAfterAttack: { multiplier: 40, value: 1 },
    copyAfterSomething: { multiplier: 35, value: 1 },
    //copyRandomCardHand: { multiplier: 40, value: 1 },
    //copyRandomCardDeck: { multiplier: 30, value: 1 },
    copyFrozenMinion: { multiplier: 20, value: 1 },
    copySpell: { multiplier: 60, value: 1 },
    copyDiscoverSpell: { multiplier: 60, value: 1 },
    copyDiscoverMinion: { multiplier: 60, value: 1 },
    copyTheLowestMinion: { multiplier: 50, value: 1 },

    // deal damage

    dealAllCharacters: { multiplier: 27, value: 1 },
    dealAllOtherCharacters: { multiplier: 30, value: 1 },
    dealAllMinions: { multiplier: 25, value: 1 },
    dealMinion: { multiplier: 30, value: 1 },
    dealAllEnemyMinions: { multiplier: 65, value: 1 },
    dealRandomlyEnemyCharacters: { multiplier: 42, value: 1 },
    dealDamages: { multiplier: 30, value: 1 },
    dealAdjacentOnes: { multiplier: 20, value: 1 },
    dealUndamagedMinion: { multiplier: 20, value: 1 },
    dealUndamagedCharacter: { multiplier: 23, value: 1 },
    dealEnemyHero: { multiplier: 15, value: 1 },
    dealCharacter: { multiplier: 32, value: 1 },
    dealNextToIt: { multiplier: 25, value: 1 },
    dealYourHero: { multiplier: -20, value: 1 },
    dealThatMuch: { multiplier: 30, value: 1 },
    dealItsAllEnemyMinions: { multiplier: 25, value: 1 },
    dealEnemyMinion: { multiplier: 30, value: 1 },
    dealRandomEnemyMinion: { multiplier: 27, value: 1 },
    dealYourHeroEqualCost: { multiplier: -40, value: 1 },
    dealTwoRandomEnemyMinions: { multiplier: 50, value: 1 },
    dealAllEnemies: { multiplier: 40, value: 1 },
    dealToThem: { multiplier: 30, value: 1 },
    dealNonMurloc: { multiplier: 35, value: 1 },
    dealEqualStatsRandomlyEnemies: { multiplier: 20, value: 1 },
    dealRandomEnemy: { multiplier: 20, value: 1 },
    dealEqualStats: { multiplier: 20, value: 1 },
    dealAllMinionsExceptDragons: { multiplier: 20, value: 1 },
    dealEqualCostAllMinions: { multiplier: 115, value: 1 },
    dealDragon: { multiplier: 20, value: 1 },
    dealAllOtherMinions: { multiplier: 20, value: 1 },
    dealToIt: { multiplier: 35, value: 1 },
    dealEachHero: { multiplier: 15, value: 1 },
    dealInstead: { multiplier: 20, value: 1 },
    dealThatMuchEnemyHero: { multiplier: 20, value: 1 },
    dealThisMinion: { multiplier: -10, value: 1 },
    dealThatMuchMinion: { multiplier: 20, value: 1 },
    dealThatMuchAllMinions: { multiplier: 40, value: 1 },
    dealEqualStatsMinion: { multiplier: 30, value: 1 },
    dealRandomEnemyMinions: { multiplier: 50, value: 1 },
    dealEnemyCharacter: { multiplier: 35, value: 1 },
    dealThreeXThree: { multiplier: 40, value: 1 },
    dealRandomlyAllEnemies: { multiplier: 18, value: 1 },
    dealRandomlyAllMinions: { multiplier: 36, value: 1 },
    //dealDoubleAllEnemyMinions: { multiplier: 20, value: 1 },
    dealRandomlyOtherCharacters: { multiplier: 32, value: 1 },
    dealEqualAttackAllEnemyMinions: { multiplier: 40, value: 1 },
    dealDamagedAllMinion: { multiplier: 34, value: 1 },
    dealEqualPlayedCards: { multiplier: 29, value: 1 },
    dealRandomlyAllCharacters: { multiplier: 23, value: 1 },
    dealSwipe: { multiplier: 35, value: 1 },
    dealYourMinions: { multiplier: -25, value: 1 },

    // destroy

    destroyOpponentWeapon: { multiplier: 40, value: 1 },
    destroyEnemyMinion: { multiplier: 60, value: 1 },
    destroyAttackOrMore: { multiplier: 20, value: 1 },
    destroyAttackOrLess: { multiplier: 20, value: 1 },
    destroyAllAttackOrLess: { multiplier: 20, value: 1 },
    destroyAllAttackOrMore: { multiplier: 20, value: 1 },
    destroyYourWeapon: { multiplier: -30, value: 1 },
    destroyMinion: { multiplier: 60, value: 1 },
    destroyMinionAndYourManaCrystal: { multiplier: 40, value: 1 },
    destroyEnemyAttackOrLess: { multiplier: 30, value: 1 },
    destroyAllMinionsExceptOne: { multiplier: 50, value: 1 },
    destroyAllMinions: { multiplier: 56, value: 1 },
    destroyCorrupt: { multiplier: 40, value: 1 },
    destroyIt: { multiplier: 30, value: 1 },
    destroyLeftAndRight: { multiplier: 50, value: 1 },
    destroyFriendlyMinion: { multiplier: -50, value: 1 },
    destroyRandomEnemyMinion: { multiplier: 40, value: 1 },
    destroyallOtherMinions: { multiplier: 50, value: 1 },
    destroyAllEnemySecrets: { multiplier: 15, value: 1 },
    destroyDamagedEnemyMinion: { multiplier: 30, value: 1 },
    destroyYourManaCrystal: { multiplier: -30, value: 1 },
    destroyPirate: { multiplier: 10, value: 1 },
    destroyMurloc: { multiplier: 10, value: 1 },
    destroyDemon: { multiplier: 10, value: 1 },
    destroyCardsInYourDeckOrLess: { multiplier: -50, value: 1 },
    destroyFrozenMinion: { multiplier: 5, value: 1 },
    destroyAllDamagedMinions: { multiplier: 30, value: 1 },
    destroyRandomEnemyMinions: { multiplier: 40, value: 1 },
    destroyYourHero: { multiplier: -1, value: 1 },
    destroyOneCostSpells: { multiplier: 30, value: 1 },
    destroyRandomEnemyMinionAttackOrLess: { multiplier: 50, value: 1 },
    destroyEnemyMinionWithTaunt: { multiplier: 30, value: 1 },
    destroySideMinion: { multiplier: -20, value: 1 },
    
    // disable hero power

    disableHeroPowers: { multiplier: 20, value: 1 },

    // discard

    discardHand: { multiplier: -70, value: 1 },
    discardRandomCard: { multiplier: -20, value: 1 },
    discardTwo: { multiplier: -40, value: 1 },
    discardWeapons: { multiplier: -20, value: 1 },
    discardOthers: { multiplier: -30, value: 1 },

    // enchant

    enchantItDouble: { multiplier: 25, value: 1 },
    enchantItAttack: { multiplier: 25, value: 1 },
    enchantAttackTurn: { multiplier: 25, value: 1 },
    enchantFriendlyAttack: { multiplier: 20, value: 1 },
    enchantFriendlyHealth: { multiplier: 25, value: 1 },
    enchantEnemyBananas: { multiplier: -10, value: 1 },
    enchantTaunt: { multiplier: 20, value: 1 },
    enchantItPoisonous: { multiplier: 20, value: 1 },
    enchantItToOpponent: { multiplier: -20, value: 1 },
    enchantItDivineShield: { multiplier: 25, value: 1 },
    enchantAdjacentSpell: { multiplier: 5, value: 1 },
    enchantAdjacentDoubleTaunt: { multiplier: 10, value: 1 },
    enchantAdjacentDouble: { multiplier: 40, value: 1 },
    enchantAdjacentHealth: { multiplier: 25, value: 1 },
    enchantAdjacentTaunt: { multiplier: 15, value: 1 },
    enchantThisAMinionHealth: { multiplier: 15, value: 1 },
    enchantEnemyMana: { multiplier: -20, value: 1 },
    enchantFriendlyDivineShiled: { multiplier: 20, value: 1 },
    enchantCthunDouble: { multiplier: 1, value: 1 },
    enchantBeastImmuneAttackturn: { multiplier: 5, value: 1 },
    enchantHeroAttackArmorTurn: { multiplier: 3, value: 1 },
    enchantMinionAttack: { multiplier: 20, value: 1 },
    enchantMinionWindfury: { multiplier: 8, value: 1 },
    enchantFriendlyMinionWindfury: { multiplier: 8, value: 1 },
    enchantMinionHealth: { multiplier: 20, value: 1 },
    enchantMinionDouble: { multiplier: 25, value: 1 },
    enchantRandomFriendlyMinionHealth: { multiplier: 16, value: 1 },
    enchantMinionsAttackTurn: { multiplier: 15, value: 1 },
    enchantWeaponDouble: { multiplier: 12, value: 1 },
    enchantWeaponAttack: { multiplier: 10, value: 1 },
    enchantOtherMinionsHealth: { multiplier: 25, value: 1 },
    enchantOtherMinionsDouble: { multiplier: 25, value: 1 },
    enchantFriendlyDoubleTaunt: { multiplier: 50, value: 1 },
    enchantFriendlyDouble: { multiplier: 23, value: 1 },
    enchantMinionsAttack: { multiplier: 25, value: 1 },
    enchantMinionsDouble: { multiplier: 30, value: 1 },
    enchantRandomMinionsDoubleHand: { multiplier: 23, value: 1 },
    enchantMinionsCharge: { multiplier: 25, value: 1 },
    enchantRandomFriendlyMinionAttack: { multiplier: 18, value: 1 },
    enchantRandomFriendlyMinionDouble: { multiplier: 22, value: 1 },
    enchantYourOtherMurlockHelath: { multiplier: 4, value: 1 },
    enchantMinionDeathrattle: { multiplier: 9, value: 1 },
    enchantMinionsDeathrattle: { multiplier: 12, value: 1 },
    enchantFriendlyImmuneTurn: { multiplier: 21, value: 1 },
    enchantWeaponPoisonous: { multiplier: 12, value: 1 },
    enchantWeaponLifesteal: { multiplier: 10, value: 1 },
    enchantThemDouble: { multiplier: 22, value: 1 },
    enchantHeroAttackTurn: { multiplier: 13, value: 1 },
    enchantDeathrattleDouble: { multiplier: 12, value: 1 },
    enchantAllMinionsDouble: { multiplier: 30, value: 1 },
    enchantWeaponHandDouble: { multiplier: 12, value: 1 },
    enchantAdjacentDivineShield: { multiplier: 15, value: 1 },
    enchantMurlockHandDouble: { multiplier: 5, value: 1 },
    enchantMinionDivineShield: { multiplier: 30, value: 1 },
    enchantEnemyCoins: { multiplier: -10, value: 1 },
    enchantDeckHandWeaponAttack: { multiplier: 10, value: 1 },
    enchantBeastDoubleTaunt: { multiplier: 15, value: 1 },
    enchantBeastDouble: { multiplier: 10, value: 1 },
    enchantSilverDoubleHand: { multiplier: 20, value: 1 },
    enchantMinionDoubleTaunt: { multiplier: 20, value: 1 },
    enchantMinionStealth: { multiplier: 20, value: 1 },
    enchantMinionSpellDamage: { multiplier: 20, value: 1 },
    enchantBDM: { multiplier: 3, value: 1 },
    enchantAllEnemyMinusAttackTurn: { multiplier: 20, value: 1 },
    enchantMinionPoisonous: { multiplier: 20, value: 1 },
    enchantDoubleWithDivine: { multiplier: 20, value: 1 },
    enchantDamagedMinion: { multiplier: 20, value: 1 },
    enchantCharacterAttackTurn: { multiplier: 20, value: 1 },
    enchantMurlocDouble: { multiplier: 20, value: 1 },
    enchantCharactersAttackTurn: { multiplier: 20, value: 1 },
    enchantRandomMinionDivineShield: { multiplier: 20, value: 1 },
    enchantStealheadMinion: { multiplier: 20, value: 1 },
    enchantRandomBeastDoubleHand: { multiplier: 20, value: 1 },
    enchantMinionDoubleTauntR: { multiplier: 20, value: 1 },
    enchantTauntDoubleHand: { multiplier: 20, value: 1 },
    enchantTauntDouble: { multiplier: 20, value: 1 },
    enchantRandomFriendlyMinionDoubleN: { multiplier: 20, value: 1 },
    enchantTotemsHealth: { multiplier: 20, value: 1 },
    enchantHandMinionDouble: { multiplier: 20, value: 1 },

    // elusive

    elusiveHero: { multiplier: 20, value: 1 },
    elusiveMinion: { multiplier: 30, value: 1 },

    // equip

    equipDouble: { multiplier: 30, value: 1 },
    equipRandom: { multiplier: 50, value: 1 },
    equipAtlesh: { multiplier: 45, value: 1 },
    equipReequip: { multiplier: 32, value: 1 },

    // forgetful -- empty

    // gain

    gainArmor: { multiplier: 7, value: 1 },
    gainDoublePlayed: { multiplier: 25, value: 1 },
    gainDouble: { multiplier: 25, value: 1 },
    gainDoubleShield: { multiplier: 20, value: 1 },
    gainAttackEqual: { multiplier: 20, value: 1 },
    gainAttack: { multiplier: 20, value: 1 },
    gainAttackTurn: { multiplier: 20, value: 1 },
    gainTaunt: { multiplier: 1, value: 1 },
    gainCharge: { multiplier: 1, value: 1 },
    gainManaCrystalTurn: { multiplier: 25, value: 1 },
    gainManaCrystals: { multiplier: 30, value: 1 },
    gainHealth: { multiplier: 25, value: 1 },
    gainHealthEach: { multiplier: 20, value: 1 },
    gainDoubleEachDamaged: { multiplier: 20, value: 1 },
    gainArmorEqualToAttack: { multiplier: 10, value: 1 },
    gainDoubleEach: { multiplier: 35, value: 1 },
    gainDoubleEachTurn: { multiplier: 30, value: 1 },
    gainControlIt: { multiplier: 40, value: 1 },
    gainControlAttackLessTurn: { multiplier: 20, value: 1 },
    gainDoubleManaSpend: { multiplier: 20, value: 1 },
    gainDoubleMinionsBattle: { multiplier: 20, value: 1 },
    gainTheirStats: { multiplier: 30, value: 1 },
    gainEmptyMana: { multiplier: 20, value: 1 },
    gainDoubleTaunt: { multiplier: 20, value: 1 },
    gainDivine: { multiplier: 1, value: 1 },
    gainStealth: { multiplier: 1, value: 1 },
    gainDeathrattle: { multiplier: 1, value: 1 },
    gainLifesteal: { multiplier: 1, value: 1 },
    gainEachAttackHand: { multiplier: 20, value: 1 },
    gainEachHealthHand: { multiplier: 20, value: 1 },
    gainEachHealthElemental: { multiplier: 20, value: 1 },
    gainEqualWeaponDoubke: { multiplier: 20, value: 1 },
    gainEmptyManaCrystalsEach: { multiplier: 15, value: 1 },
    gainBonusHand: { multiplier: 30, value: 1 },
    gainTheirDouble: { multiplier: 23, value: 1 },
    gainEachDiedDouble: { multiplier: 25, value: 1 },    

    // generate

    addRandomDeathKnight: { multiplier: 20, value: 1 },
    addRandomMageSpell: { multiplier: 20, value: 1 },
    addRandomMageSpells: { multiplier: 20, value: 1 },
    addRandomDragon: { multiplier: 20, value: 1 },
    addDoubleCthun: { multiplier: 20, value: 1 },
    addCopyEachDamagedFriednlyMinion: { multiplier: 20, value: 1 },
    addTwoStats: { multiplier: 20, value: 1 },
    addCoin: { multiplier: 20, value: 1 },
    addWeapon: { multiplier: 20, value: 1 },
    addSilvers: { multiplier: 20, value: 1 },
    addElemental: { multiplier: 36, value: 1 },
    addMirror: { multiplier: 20, value: 1 },
    addRandomBeast: { multiplier: 20, value: 1 },
    addRandomPotion: { multiplier: 20, value: 1 },
    addRandomDemon: { multiplier: 20, value: 1 },
    addRandomPriestSpell: { multiplier: 20, value: 1 },
    addManaBind: { multiplier: 20, value: 1 },
    addCopyOfIt: { multiplier: 20, value: 1 },
    addBananas: { multiplier: 20, value: 1 },
    addRazorpetal: { multiplier: 20, value: 1 },
    addTwoRazorpetals: { multiplier: 20, value: 1 },
    addFirstSeal: { multiplier: 20, value: 1 },
    addCopyDouble: { multiplier: 20, value: 1 },
    addRandomCard: { multiplier: 20, value: 1 },
    addRandomDeathrattle: { multiplier: 20, value: 1 },
    addFlameGeyser: { multiplier: 20, value: 1 },
    addRandomClass: { multiplier: 20, value: 1 },
    addExtraCopies: { multiplier: 20, value: 1 },
    addRandomMinionAttack: { multiplier: 20, value: 1 },
    addToxin: { multiplier: 20, value: 1 },
    addGoldenCopy: { multiplier: 20, value: 1 },
    addLegendaries: { multiplier: 20, value: 1 },

    // joust

    revealSpell: { multiplier: 10, value: 1 },

    // control effect

    takeControlAttackLess: { multiplier: 40, value: 1 },
    takeControlEnemyMinion: { multiplier: 40, value: 10 },

    // modify cost

    costLessEachSpell: { multiplier: 20, value: 1 },
    costLessEachDamage: { multiplier: 20, value: 1 },
    costLessEachCard: { multiplier: 20, value: 1 },
    costLessEachMinion: { multiplier: 20, value: 1 },
    costLessEachOverload: { multiplier: 20, value: 1 },
    costWeaponLess: { multiplier: 20, value: 1 },
    costChangeTo: { multiplier: 20, value: 1 },
    costReduceEnemyMinion: { multiplier: 20, value: 1 },
    costItLess: { multiplier: 20, value: 1 },
    costItMore: { multiplier: 20, value: 1 },
    costHealth: { multiplier: 20, value: 1 },
    costZeroSecret: { multiplier: 20, value: 1 },
    costDeathrattleLess: { multiplier: 20, value: 1 },
    costSilverControlLess: { multiplier: 20, value: 1 },
    costEnemySpellMore: { multiplier: 40, value: 1 },
    costLessPerWeapon: { multiplier: 20, value: 1 },
    costReduceWeapon: { multiplier: 20, value: 1 },
    costYourMinionsMore: { multiplier: 20, value: 1 },
    costYourMinionsLess: { multiplier: 20, value: 1 },
    costThatLess: { multiplier: 20, value: 1 },
    costReduceElementals: { multiplier: 20, value: 1 },
    costThey: { multiplier: 20, value: 1 },
    costSecretEachLess: { multiplier: 20, value: 1 },
    costNextSecretLess: { multiplier: 20, value: 1 },
    costLessDrawnMinion: { multiplier: 20, value: 1 },
    costAllMinionsMore: { multiplier: 20, value: 1 },
    costFreeEnemyNextTurn: { multiplier: 20, value: 1 },
    costReduceThis: { multiplier: 20, value: 1 },
    costSpellsMore: { multiplier: -20, value: 1 },
    costYourSpellsLess: { multiplier: 40, value: 1 },
    costOtherClassLess: { multiplier: 20, value: 1 },
    costFirstMinionLess: { multiplier: 20, value: 1 },
    costSpellLessTurn: { multiplier: 20, value: 1 },
    costReduceItsCost: { multiplier: 35, value: 1 },
    costCardsLess: { multiplier: 20, value: 1 },
    costEachTotemLess: { multiplier: 20, value: 1 },

    // multiply attribute

    doubleAttack: { multiplier: 20, value: 1 },
    doubleHealth: { multiplier: 20, value: 1 },
    doubleDamageHealing: { multiplier: 20, value: 1 },
    doubleTwiceTrigger: { multiplier: 20, value: 1 },
    doubleTwiceAdapt: { multiplier: 20, value: 1 },

    // no durability loss -- empty 

    // permanent -- empty

    // put 

    putBothPlayersRandomMinion: { multiplier: 20, value: 1 },
    putMinionDeckToHand: { multiplier: 20, value: 1 },
    putRandomPirateToHand: { multiplier: 20, value: 1 },
    putAllDragonFromHand: { multiplier: 20, value: 1 },
    putEachSecretBattlefield: { multiplier: 20, value: 1 },
    putCopySpellPlayers: { multiplier: 20, value: 1 },
    putCopyOpponentCard: { multiplier: 20, value: 1 },
    putCopyOpponentMinion: { multiplier: 20, value: 1 },
    putRandomHunterSecretBattlefield: { multiplier: 20, value: 1 },
    putRandomDemonsToHand: { multiplier: 20, value: 1 },
    putMinionDeckToBattlefield: { multiplier: 20, value: 1 },

    // refresh

    refreshHeroPower: { multiplier: 15, value: 1 },
    refreshMana: { multiplier: 60, value: 1 },

    // remove

    removeDurability: { multiplier: 20, value: 1 },
    removeEnemyTopCard: { multiplier: 40, value: 1 },
    removeCards: { multiplier: -20, value: 1 },

    // replace

    replaceDeckDiscover: { multiplier: 60, value: 1 },
    replaceSpellsHand: { multiplier: 30, value: 1 },
    replaceLordJaraxxus: { multiplier: 50, value: 1 },
    replaceDeckDiscover: { multiplier: 40, value: 1 },
    
    // restore

    restoreToFullMinion: { multiplier: 18, value: 1 },
    restoreHealth: { multiplier: 10, value: 1 },
    restoreHealthHero: { multiplier: 8, value: 1 },
    restoreHealthEachHero: { multiplier: 8, value: 1 },
    restoreHealthMinionHero: { multiplier: 10, value: 1 },
    restoreAllMinions: { multiplier: 20, value: 1 },
    restoreEnemyHero: { multiplier: -15, value: 1 },
    restoreEachMinionHero: { multiplier: 8, value: 1 },
    restoreAllCharacters: { multiplier: 21, value: 1 },
    restoreAllCharacter: { multiplier: 12, value: 1 },
    restoreTwice: { multiplier: 20, value: 1 },
    restoreThatHero: { multiplier: 9, value: 1 },
    restoreRandomlyCharacters: { multiplier: 9, value: 1 },
    restoreHealthHeroEqual: { multiplier: 10, value: 1 },
    restoreHealthDamagedCharacter: { multiplier: 12, value: 1 },
    restoreBothPlayers: { multiplier: 10, value: 1 },
    restoreToIt: { multiplier: 15, value: 1 },
    
    // return

    returnToFriendlyMinionHand: { multiplier: 10, value: 1 },
    returnItHand: { multiplier: 12, value: 1 },
    returnToLife: { multiplier: 25, value: 1 },
    returnsToHand: { multiplier: 20, value: 1 },
    returnToOwnerHand: { multiplier: 15, value: 1 },
    returnOtherMinions: { multiplier: 30, value: 1 },
    returnToHandNextTurn: { multiplier: 10, value: 1 },
    returnMinionHand: { multiplier: 20, value: 1 },
    returnSpell: { multiplier: 20, value: 1 },
    returnPyros: { multiplier: 20, value: 1 },
    returnDestroyedWeapon: { multiplier: 20, value: 1 },
    returnEnemyHand: { multiplier: 20, value: 1 },
    returnAll: { multiplier: 20, value: 1 },
    
    // set attribute

    setHeroHealth: { multiplier: 20, value: 1 },
    setMinionDouble: { multiplier: 20, value: 1 },
    setOtherDouble: { multiplier: 20, value: 1 },
    setThisAttack: { multiplier: 5, value: 1 },

    // shuffle into deck

    shuffleEnemyDeck: { multiplier: 20, value: 1 },
    shuffleThisMinion: { multiplier: 20, value: 1 },
    shuffleHand: { multiplier: 20, value: 1 },
    shuffleScrolls: { multiplier: 20, value: 1 },
    shuffleMinionDouble: { multiplier: 20, value: 1 },
    shuffleUnGoro: { multiplier: 20, value: 1 },
    shuffleAmbushes: { multiplier: 20, value: 1 },
    shuffleCopies: { multiplier: 20, value: 1 },
    shuffleThis: { multiplier: 20, value: 1 },
    shuffleAllEnemyDeck: { multiplier: 20, value: 1 },
    shuffleThisEnemy: { multiplier: 20, value: 1 },
    shuffleCandles: { multiplier: 20, value: 1 },
    shuffleStormGuardian: { multiplier: 20, value: 1 },

    // spend mana

    spendAllMana: { multiplier: 15, value: 1 },
    spendAllArmor: { multiplier: 15, value: 1 },

    // summon

    summonRandomFriendlyBeastDied: { multiplier: 15, value: 1 },
    summonMinionDouble: { multiplier: 30, value: 1 },
    summonBeastCompanion: { multiplier: 50, value: 1 },
    summonJadeGolem: { multiplier: 30, value: 1 },
    summonRandomDemon: { multiplier: 20, value: 1 },
    summonAllFriendlyDemonsGame: { multiplier: 20, value: 1 },
    summonFourMinionDouble: { multiplier: 20, value: 1 },
    summonAllCompanions: { multiplier: 20, value: 1 },
    summonCopiesIt: { multiplier: 20, value: 1 },
    summonCopyIt: { multiplier: 20, value: 1 },
    summonDoubleCopyIt: { multiplier: 20, value: 1 },
    summonWithTaunt: { multiplier: 1, value: 1 },
    summonWithStealth: { multiplier: 1, value: 1 },
    summonWithStealth: { multiplier: 1, value: 1 },
    summonTwoMinionDouble: { multiplier: 28, value: 1 },
    summonThreeMinionDouble: { multiplier: 20, value: 1 },
    summonFiveMinionDouble: { multiplier: 20, value: 1 },
    summonSevenMinionDouble: { multiplier: 40, value: 1 },
    summonOneMinionDouble: { multiplier: 20, value: 1 },
    summonResummon: { multiplier: 20, value: 1 },
    summonResummonIt: { multiplier: 20, value: 1 },
    summonDiscardedGame: { multiplier: 20, value: 1 },
    summonOpponentRandom: { multiplier: 20, value: 1 },
    summonCopiesOfIt: { multiplier: 20, value: 1 },
    summonIt: { multiplier: 20, value: 1 },
    summonRandomCost: { multiplier: 40, value: 1 },
    summonEnemyRandomCost: { multiplier: 20, value: 1 },
    summonThatMany: { multiplier: 20, value: 1 },
    summonRadomMinionMuch: { multiplier: 20, value: 1 },
    summonTwoMinionDoubleEnemy: { multiplier: 20, value: 1 },
    summonMinionEqualArmor: { multiplier: 20, value: 1 },
    summonHandAttackMinion: { multiplier: 20, value: 1 },
    summonTauntDied: { multiplier: 20, value: 1 },
    summonCBT: { multiplier: 20, value: 1 },
    summonSpiders: { multiplier: 15, value: 1 },
    summonSpidersDouble: { multiplier: 15, value: 1 },
    summonThanLessAttack: { multiplier: 20, value: 1 },
    summonDeathrattleGame: { multiplier: 20, value: 1 },
    summonDiedGame: { multiplier: 20, value: 1 },
    summonWhelps: { multiplier: 20, value: 1 },
    summonNumber: { multiplier: 20, value: 1 },
    summonForOpponent: { multiplier: -100, value: 1 },
    summonRandomLegendary: { multiplier: 20, value: 1 },
    summonDemonHand: { multiplier: 20, value: 1 },
    summonStegodom: { multiplier: 20, value: 1 },
    summonRandomSameCost: { multiplier: 20, value: 1 },
    summonCopiesDamagedMinions: { multiplier: 20, value: 1 },
    summonAnimalCompanion: { multiplier: 20, value: 1 },
    summonTwoDeathrattle: { multiplier: 20, value: 1 },
    summonCostTarget: { multiplier: 20, value: 1 },
    summonRandomBasicTotem: { multiplier: 20, value: 1 },

    // transform

    transformAllEnemyMinionsLess: { multiplier: 60, value: 1 },
    transformInto: { multiplier: 30, value: 1 },
    transformIntoFriendlyMinion: { multiplier: 20, value: 1 },
    transformIntoMinion: { multiplier: 150, value: 1 },
    transformManaCrystals: { multiplier: 20, value: 1 },
    transformWithCharge: { multiplier: 20, value: 1 },
    transformWithTaunt: { multiplier: 20, value: 1 },
    transformWithPoisonous: { multiplier: 20, value: 1 },
    transformWithStealth: { multiplier: 35, value: 1 },
    transformAllMinionsMore: { multiplier: 50, value: 1 },
    transformWeapon: { multiplier: 15, value: 1 },
    transformItInto: { multiplier: 20, value: 1 },
    transformHandRandomMinion: { multiplier: 30, value: 1 },
    transformHandRandomMageSpell: { multiplier: 25, value: 1 },
    transformAnotherRandom: { multiplier: 25, value: 1 },
    transformRepeatableMore: { multiplier: 20, value: 1 },

    // unlimited attacks

    unlimitedAttacks: { multiplier: 150, value: 1 },

    // additionals
    // ----------------------------

    // have

    haveAdjacentMinionsAttack: { multiplier: 41, value: 1 },

    // can't attack

    cannotAttack: { multiplier: 0, value: 1 },

    // choose one

    chooseOne: { multiplier: 5, value: 1 },
    
    // counter

    counterSpell: { multiplier: 40, value: 1 },

    // freeze

    freezeAllEnemyMinions: { multiplier: 41, value: 1 },

    // overload

    overload: { multiplier: -20, value: 1 },

    // recruit 

    recruitMinionsLess: { multiplier: 50, value: 1 },
    recruitMinionLess: { multiplier: 50, value: 1 },
    recruitDragon: { multiplier: 20, value: 1 },
    recruitMinion: { multiplier: 60, value: 1 },
    recruitBeast: { multiplier: 20, value: 1 },
    recruitDemon: { multiplier: 10, value: 1 },
    recruitThreeOneCostMinions: { multiplier: 20, value: 1 },
    recruitCostMinion: { multiplier: 25, value: 1 },
    recruitOTT: { multiplier: 200, value: 1 },

    // api bugs

    lesserMageUpgrade: { multiplier: 45, value: 1 }


}