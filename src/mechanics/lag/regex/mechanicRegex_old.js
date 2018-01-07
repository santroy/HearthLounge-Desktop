export const cardTextMechanicsRegex = {

    cardDraw: /.*draw a card.*/i,
    cardDrawNumber: /.*draws? (\d\d?) cards.*/i,
    cardDrawUntil: /.*draw cards until.*/i,
    cardDrawMinionsNumber: /.*draw (\d\d?) minions.*/i,
    cardDrawTwo: /.*draw two cards.*/i,
    cardDrawUntilNumber: /.*draw until.*(\d\d?) cards.*/i,
    cardDrawDurability: /.*draw cards equal to its durability.*/i,
    cardDrawChance: /.*chance to draw an extra card.*/i,
    cardDrawIt: /.*draw it.*/i,
    cardDrawOne: /.*draw one.*/i,

    castSpellRandom: /.*cast a random spell.*/i,
    castSpell: /.*cast a spell.*/i,
    castSpellElementalInvocation: /.*cast an elemental invocation.*/i,
    castSpellEach: /.*cast each spell.*/i,
    castSpellAgain: /.*cast this again.*/i,

    chooseOne: /.*choose one.*/i,

    copyCard: /.*\bcopy a card\b.*/i,
    copyCards: /.*\bcopy (\d\d?) cards\b.*/i,
    copyIt: /.*\bcopy of it\b.*/i,
    copyStats: /.*\bcopy a friendly minion's attack and health\b.*/i,
    copyPut: /.*\bput a copy\b.*/i,
    copyTheLowestCost: /.*\bcopy the lowest cost\b.*/i,

    dealDamage: /.*?\$?(\d\d?) (?:extra|damages?).*/i,
    dealDamageDouble: /.*(\d)-(\d) damages?.*/i,
    dealDamageEqual: /.*damage.*equal.*/i,
    dealDamageRaise: /.*that much damages?.*/i,

    destroy: /.*\bdestroy \D\b.*/i,
    destroyIt: /.*\bdestroy it\b.*/i,
    destroyNumber: /.*\bdestroy (\d\d?).*\b/i,

    disabled: /.*\bdisabled?\b.*/i,

    discardSingle: /.*\bdiscard\b.*/i,
    discardNumber: /.*\bdiscard (\d\d?)\b.*/i,
    discardOthers: /.*discard the others.*/i,

    enchantDouble: /.*give.*\+(\d)\/\+(\d).*/i,
    enchantAttack: /.*gives?.*\+?\-?(\d).*\_?.*attack.*/i,
    enchantHealth: /.*gives?.*\+?\-?(\d).*\_?.*health.*/i,

    elusive: /.*\bbe targeted\b.*/i,

    equipStats: /.*\bequip a (\d)\/(\d) \b.*/i,
    equip: /.*\bequip\b.*/,

    //forgetful: /.*\bwrong\b.*/i,

    gainArmor: /.*\bgain \d? armor\b.*/i,
    gainArmorNumber: /.*(\d\d?) armor.*/i,
    gainArmorMuch: /.*much armor.*/i,
    gainArmorEqual: /.*armor equals?.*/i,

    //??
    generate: /.*\badd\b.*/i,

    incrementAttributeDouble: /.*gains?.*\+(\d)\/\+(\d).*/i,
    incrementAttributeAttack:/.*gains?.*\+(\d) attack.*/i,
    incrementAttributeHealth:/.*gain?.*\+(\d) health.*/i,
    incrementAttributeMana:/.*gains?.*?(\d?\d?) mana.*/i,
    incrementAttributeDurability:/.*gain?.*\+(\d) durability.*/i,
    
    joust: /.*\breveals?\b.*/i,

    mindControlEffect: /.*\b(?:take|gain).*control?\b.*/i,

    modifyCostLess: /.*\((\d)\) less.*/i,
    modifyCostMore: /.*\((\d)\) more.*/i,

    multiplyAttribute: /.*\b(?:double|twice)\b.*/i,

    overload: /.*\boverload:.*(\d)\b.*/i,

    noDurabilityLoss: /.*\bdoesn't lose durability\b.*/i,

    putIntoBattlefield: /.*\bputs?.*battlefield.*\b/i,

    putIntoHand: /.*\bputs?.*hand\b.*/i,

    reduce: /.*reduce.*cost by.*(\d).*/i,

    resurrect: /.*Cast 4 spells to upgrade.*/i, // api bug

    refreshMana: /.*\brefresh.*mana\b.*/i,

    removeFromDeck: /.*\bremove.*deck\b.*/i,

    replace: /.*\breplace\b.*/i,

    restoreHealth: /.*\brestore \#?(\d\d?)\b.*/i,

    return: /.*\breturn\b.*/i,

    setAttributeHealth: /.*\bset.*health to (\d)\b.*/i,
    setAttributeAttack: /.*\bset.*attack to (\d)\b.*/i,

    shuffleIntoDeck: /.*\bshuffle\b.*/i,

    spendMana: /.*\bspends?\b.*/i,

    summonMinionDouble: /.*summons? a?n?.*(\d)\/(\d).*/i,
    summonMinionCost: /.*summons? a?n?.*(\d)-cost.*/i,
    summonMinionCopy: /.*summons? a?n?.*(?:copy|copies).*/i,

    transformDouble: /.*\btransforms?.*into a?n?.*(\d)\/(\d)\b.*/i,
    transformMore: /.*transorms?.*(\d).*more.*/i,
    transformLess: /.*transforms?.*(\d).*less.*/i,
    
    transformInHand: /.*transforms? it.*/i,

    unlimitedAttacks: /.*\bunlimited\b.*/i

}