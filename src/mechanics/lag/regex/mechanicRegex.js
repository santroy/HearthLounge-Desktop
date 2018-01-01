export const cardTextMechanicsRegex = {
    // dealItsDamage: /.*\bdeal its damage\b.*/i,
    // dealThatMuchDamage: /.*\bdeal that much damage\b.*/i,

    cardDrawSingle: /.*draws? an?.*\b/i,
    cardDrawNumber: /.*draws? (\d\d?) .*/i,

    castSpell: /.*\bcasts?\b.*/i,

    chooseOne: /.*choose one.*/i,

    copy: /.*\bcopy\b.*/i,

    dealDamage: /.*deals? \$?(\d*) (?:extra|damages?).*/i,
    dealDamageEqual: /deals? damage equal/i,
    dealDamageRandom: /.*deals? (\d)-(\d) damages?/i,
    dealDamageRaise: /.*deals? that much damages?/i,

    destroy: /.*\bdestroy \D.*\b/i,
    destroyNumber: /.*\bdestroy (\d).*\b/i,

    disableHeroPower: /.*\bdisabled?\b.*/i,

    discardSingle: /.*\bdiscard a\b.*/i,
    discardTwo: /.*\bdiscard two\b.*/i,
    discardNumber: /.*\bdiscard (\d\d?)\b.*/i,
    discardHand: /.*discard your.*/i,

    enchantDouble: /.*give.*\+(\d)\/\+(\d).*/i,
    enchantAttack: /.*gives?.*\+?\-?(\d) attack.*/i,
    enchantHealth: /.*gives?.*\+?\-?(\d) health.*/i,

    elusive: /.*\bbe targeted\b.*/i,

    equip: /.*\bequip \b.*/i,

    forgetful: /.*\bwrong\b.*/i,

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

    noDurabilityLoss: /.*\bdoesn't lose durability\b.*/i,

    //permanent: /.*\bpermanent\b.*/i,

    putIntoBattlefield: /.*\bputs?.*battlefield.*\b/i,

    putIntoHand: /.*\bputs?.*hand\b.*/i,

    reduce: /.*reduce.*cost by.*(\d).*/i,

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

    transformDouble: /.*\btransforms? into a?n?.*(\d)\/(\d)\b.*/i,
    transformMore: /.*transorms?.*(\d).*more.*/i,
    transformLess: /.*transforms?.*(\d).*less.*/i,
    
    transformInHand: /.*transforms? it.*/i,

    unlimitedAttacks: /.*\bunlimited\b.*/i

}