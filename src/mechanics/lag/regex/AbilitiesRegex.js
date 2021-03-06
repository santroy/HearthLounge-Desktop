export const textAbilitiesRegex = {

// card draw

drawCard: /.*draw.{1,5}a.{1,5}card(?:\.|\;).*/i,
drawCards: /.*\bdraw\b.{1,5}(\d\d?).{1,5}cards(?:\.|\;).*/i,
drawSecret: /.*draw.{1,5}a.{1,5}secret.*/i,
drawCardDamagedCharacter: /.*draw.{1,5}a.{1,5}card.{1,5}for.{1,5}each.{1,5}damaged.{1,5}friendly.{1,5}character.*/i,
drawWeapon: /.*draw.{1,5}a.{1,5}weapon.*/i,
drawEachPlayers: /.*each.{1,5}player.{1,5}draws.{1,5}(\d\d?) cards.*/i,
drawCardUntilHand: /.*draw.{1,5}cards.{1,5}until.{1,5}you.{1,5}have.{1,5}as.{1,5}many.{1,5}in.{1,5}hand.{1,5}as.{1,5}your.{1,5}opponent.*/i,
drawForEach: /.*draw.{1,5}a.{1,5}card.{1,5}for.{1,5}each.*/i,
drawMinions: /.*draw.{1,5}(\d\d?).{1,5}minions.*/i,
drawTwoCards: /.*draw.{1,5}two.{1,5}cards.*/i,
drawWeapons: /.*draw.{1,5}(\d\d?).{1,5}weapons.*/i,
drawUntil: /.*both.{1,5}players.{1,5}draw.{1,5}until.{1,5}they.{1,5}have.{1,5}(\d\d?).{1,5}cards.*/i,
drawOpponentHalf: /.*they.{1,5}have.{1,5}a.{1,5}50%.*?extra.{1,5}card.*/i,
drawYouHalf: /.*you.{1,5}have.{1,5}a.{1,5}50%.*?extra.{1,5}card.*/i,
drawDivineMinion: /.*draw.{1,5}a.{1,5}divine.{1,5}shield.{1,5}minion.*/i,
drawCardDurability: /.*draw.{1,5}cards.{1,5}equal.{1,5}to.{1,5}its.{1,5}durability.*/i,
drawMurlocs: /.*draw.{1,5}(\d\d?).{1,5}murlocs.*/i,
drawCardAndDeal: /.*draw.{1,5}a.{1,5}card.{1,5}and.{1,5}deal.{1,5}damage.{1,5}equal.{1,5}to.{1,5}its.{1,5}cost.*/i,
drawOpponentCards: /.*your.{1,5}opponent.{1,5}draws.{1,5}(\d\d?).{1,5}cards.*/i,
drawThreeOneCostMinions: /.*draw.{1,5}three.{1,5}1-cost.{1,5}minions.*/i,
drawTwoOneCostMinions: /.*draw.{1,5}two.{1,5}1-cost.{1,5}minions.*/i,
drawBDM: /.*draw.{1,5}a.{1,5}beast,.{1,5}dragon.{1,5}and.{1,5}murlock.*/i,
drawOneAndDiscard: /.*draw.{1,5}one.{1,5}and.{1,5}discard.{1,5}the.{1,5}others.*/i,
drawDreamCard: /.*draw.{1,5}a.{1,5}dream.{1,5}card.*/i,
drawCardUntilDragon: /.*draw.{1,5}cards.{1,5}until.{1,5}you.{1,5}draw.{1,5}one.{1,5}that.{1,5}isn't.{1,5}a.{1,5}dragon.*/i,

// cast

castRepeat: /.*if.{1,5}any.{1,5}die,.{1,5}cast.{1,5}this.{1,5}again.*/i,
castSpellDeck: /.*cast.{1,5}a.{1,5}spell.{1,5}from.{1,5}your.{1,5}deck.*/i,
castEI: /.*cast.{1,5}an.{1,5}elemental.{1,5}invocation.*/i,
castEachSpellGameMinion: /.*cast.{1,5}each.{1,5}spell.{1,5}you.{1,5}cast.{1,5}on.{1,5}your.{1,5}minions.{1,5}this.{1,5}game.{1,5}on.{1,5}this.{1,5}one.*/i,
castRandomSpell: /.*cast.{1,5}a.{1,5}random.{1,5}spell.*/i,
castRandomSpellEach: /.*cast.{1,5}a.{1,5}random.{1,5}spell.{1,5}for.{1,5}each.{1,5}spell.{1,5}you've.{1,5}cast.{1,5}this.{1,5}game.*/i,
castIfMoreAgain: /.*if.{1,5}your.{1,5}opponent.{1,5}has.{1,5}more.{1,5}minions,.{1,5}cast.{1,5}this.{1,5}again.*/i,
discoverAndCast: /.*discover.{1,5}a.{1,5}spell.{1,5}and.{1,5}cast.{1,5}it.{1,5}with.{1,5}random.{1,5}targets.*/i,

// copy

copyCard: /.*copy.{1,5}a.{1,5}card.{1,5}from.{1,5}your.{1,5}opponent's.{1,5}deck.{1,5}and.{1,5}add.{1,5}it.{1,5}to.{1,5}your.{1,5}hand.*/i,
copyCards: /.*copy.{1,5}(\d\d?).{1,5}cards.{1,5}(?:from|in).{1,5}your.{1,5}opponent's.{1,5}deck.{1,5}and.{1,5}(?:put|add).{1,5}them.{1,5}(?:into|to).{1,5}your.{1,5}hand.*/i,
copyGuess: /.*guess.{1,5}which.{1,5}one.{1,5}started.*to.{1,5}get.{1,5}copy.{1,5}a.{1,5}copy.{1,5}of.{1,5}it.*/i,
copyChooseMinion: /.*choose.{1,5}a.{1,5}minion.{1,5}and.{1,5}become.{1,5}a.{1,5}copy.{1,5}of.{1,5}it.*/i,
copyFriendlyStats: /.*copy.{1,5}a.{1,5}friendly.{1,5}minion's.{1,5}attack.{1,5}and.{1,5}health.*/i,
copyAfterAttack: /.*after.{1,5}this.{1,5}minion.{1,5}attacks.{1,5}a.{1,5}hero,.{1,5}add.{1,5}a.{1,5}copy.{1,5}of.{1,5}it.{1,5}to.{1,5}your.{1,5}hand.*/i,
copyAfterSomething: /.*then.{1,5}add.{1,5}a.{1,5}copy.{1,5}of.{1,5}it.{1,5}to.{1,5}your.{1,5}hand.*/i,
copyRandomCardHand: /.*put.{1,5}a.{1,5}copy.{1,5}of.{1,5}a.{1,5}random.{1,5}card.{1,5}in.{1,5}your.*hand.*/i,
copyRandomCardDeck: /.*put.{1,5}a.{1,5}copy.{1,5}of.{1,5}a.{1,5}random.{1,5}minion.{1,5}from.*battlefield.*/i,
copyFrozenMinion: /.*is.{1,5}Frozen,.{1,5}add.{1,5}a.{1,5}copy.{1,5}of.{1,5}it.{1,5}to.{1,5}your.{1,5}hand.*/i,
copySpell: /.*copy.{1,5}a.{1,5}spell.{1,5}in.{1,5}your.{1,5}opponent's.{1,5}deck.*/i,
copyDiscoverSpell: /.*a.{1,5}copy.{1,5}of.{1,5}a.{1,5}spell.{1,5}in.{1,5}your.{1,5}deck.*/i,
copyDiscoverMinion: /.*a.{1,5}copy.{1,5}of.{1,5}a.{1,5}minion.{1,5}in.{1,5}your.{1,5}deck.*/i,
copyTheLowestMinion: /.*copy.{1,5}the.{1,5}lowest.{1,5}cost.{1,5}minion.{1,5}in.{1,5}your.{1,5}hand.*/i,

// deal damage

dealAllCharacters: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}characters.*/i,
dealAllOtherCharacters: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}other.{1,5}characters.*/i,
dealAllMinions: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}minions.*/i,
dealMinion: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}a.{1,5}minion.*/i,
dealAllEnemyMinions: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}enemy.{1,5}minions.*/i,
dealRandomlyEnemyCharacters: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}randomly.*enemy.{1,5}characters.*/i,
dealDamages: /.*deal.{1,5}?(\d\d?).{1,5}damage(?:\.|\;).*/i,
dealAdjacentOnes: /.*(\d).{1,5}damage.{1,5}to.{1,5}adjacent.{1,5}ones.*/i,
dealUndamagedMinion: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}an.{1,5}undamaged.{1,5}minion.*/i,
dealUndamagedCharacter: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}an.{1,5}undamaged.{1,5}character.*/i,
dealEnemyHero: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}the.{1,5}enemy.{1,5}hero.*/i,
dealCharacter: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}a.{1,5}character.*/i,
dealNextToIt: /.*deal.{1,5}its.{1,5}damage.{1,5}to.{1,5}the.{1,5}minions.{1,5}next.{1,5}to.{1,5}it.*/i,
dealYourHero: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}your.{1,5}hero(?:\.|\;).*/i,
dealThatMuch: /.*deal.{1,5}that.{1,5}much.{1,5}damage.{1,5}to.{1,5}a.{1,5}random.{1,5}enemy.{1,5}minion.*/i,
dealItsAllEnemyMinions: /.*deal.{1,5}its.{1,5}damage.{1,5}to.{1,5}all.{1,5}enemy.{1,5}minions.*/i,
dealEnemyMinion: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,3}an.{1,3}enemy.{1,5}minion.*/i,
dealRandomEnemyMinion: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}a.{1,5}random.{1,5}enemy.{1,5}minion.*/i,
dealYourHeroEqualCost: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}your.{1,5}hero.{1,5}equal.{1,5}to.{1,5}its.{1,5}cost.*/i,
dealTwoRandomEnemyMinions: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}two.{1,5}random.{1,5}enemy.{1,5}minions.*/i,
dealAllEnemies: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}enemies.*/i,
dealToThem: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}them.*/i,
dealNonMurloc: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}non-murloc.{1,5}minions.*/i,
dealEqualStatsRandomlyEnemies: /.*deal.{1,5}damage.{1,5}equal.{1,5}to.{1,5}this.{1,5}minion's.*randomly.*all.{1,5}enemies.*/i,
dealRandomEnemy: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}a.{1,5}random.{1,5}enemy(?:\.|\;).*/i,
dealEqualStats: /.*deal.{1,5}damage.{1,5}equal.{1,5}to.{1,5}this.{1,5}minion's.{1,5}attack(?:\.|\;).*/i,
dealAllMinionsExceptDragons: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}minions.{1,5}except.{1,5}dragons.*/i,
dealEqualCostAllMinions: /.*deal.{1,5}damage.{1,5}equal.{1,5}to.{1,5}its.{1,5}cost.{1,5}to.{1,5}all.{1,5}minions*/i,
dealDragon: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}a.{1,5}dragon.*/i,
dealAllOtherMinions: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}other.{1,5}minions.*/i,
dealToIt: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}it.*/i,
dealEachHero: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}each.{1,5}hero.*/i,
dealInstead: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}instead.*/i,
dealThatMuchEnemyHero: /.*deal.{1,5}that.{1,5}much.{1,5}damage.{1,5}to.{1,5}the.{1,5}enemy.{1,5}hero.*/i,
dealThisMinion: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}this.{1,5}minion.*/i,
dealThatMuchMinion: /.*deal.{1,5}that.{1,5}much.{1,5}damage.{1,5}to.{1,5}a.{1,5}minion.*/i,
dealThatMuchAllMinions: /.*deal.{1,5}that.{1,5}much.{1,5}damage.{1,5}to.{1,5}a.{1,5}all.{1,5}minion.*/i,
dealEqualStatsMinion: /.*deal.{1,5}damage.{1,5}equal.{1,5}to.{1,5}your.{1,5}hero's.*to.{1,5}a.{1,5}minion.*/i,
dealRandomEnemyMinions: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}(\d\d?).{1,5}random.{1,5}enemy.{1,5}minions.*/i,
dealEnemyCharacter: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}an.{1,5}enemy.{1,5}character.*/i,
dealThreeXThree: /.*three.{1,5}missiles.{1,5}at.{1,5}random.{1,5}enemies.{1,5}that.{1,5}deal.{1,5}(\d\d?).{1,5}damage.{1,5}each*/i,
dealRandomlyAllEnemies: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}randomly.*all.{1,5}enemies.*/i,
dealRandomlyAllMinions: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}randomly.*all.{1,5}minions.*/i,
//dealDoubleAllEnemyMinions: /.*deal.{1,5}(\d\d?)\-(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}enemy.{1,5}minions.*/i,
dealRandomlyOtherCharacters: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}randomly.*all.{1,5}other.{1,5}characters.*/i,
dealEqualAttackAllEnemyMinions: /.*deal.{1,5}equal.*attack.*all.{1,5}enemy.{1,5}minions.*/i,
dealDamagedAllMinion: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}damaged.{1,5}minions.*/i,
dealEqualPlayedCards: /.*deal.*equal.{1,5}to.{1,5}the.{1,5}number.{1,5}of.{1,5}other.{1,5}cards.*this.{1,5}turn.*/i,
dealRandomlyAllCharacters: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}randomly.*all.{1,5}characters.*/i,
dealSwipe: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}an.{1,5}enemy.{1,5}and.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}all.{1,5}other.{1,5}enemies.*/i,
dealYourMinions: /.*deal.{1,5}(\d\d?).{1,5}damage.{1,5}to.{1,5}your.{1,5}minions.*/i,

// destroy

destroyOpponentWeapon: /.*destroy.*opponent's.{1,5}weapon.*/i,
destroyEnemyMinion: /.*destroy.{1,5}an.{1,5}enemy.{1,5}minion(?:\.|\;).*/i,
destroyAttackOrMore: /.*destroy.{1,5}a.{1,5}minion.{1,5}with.{1,5}an.{1,5}attack.{1,5}of.{1,5}(\d\d?).{1,5}or.{1,5}more.*/i,
destroyAttackOrLess: /.*destroy.{1,5}a.{1,5}minion.{1,5}with.{1,5}(\d\d?).{1,5}or.{1,5}less.*/i,
destroyAllAttackOrLess: /.*destroy.{1,5}all.{1,5}minions.{1,5}with.{1,5}(\d\d?).{1,5}or.{1,5}less.{1,5}attack.*/i,
destroyAllAttackOrMore: /.*destroy.{1,5}all.{1,5}minions.{1,5}with.{1,5}(\d\d?).{1,5}or.{1,5}more.{1,5}attack.*/i,
destroyYourWeapon: /.*destroy.*your.{1,5}weapon.*/i,
destroyMinion: /.*destroy.{1,5}a.{1,5}minion(?:\.|\;).*/i,
destroyMinionAndYourManaCrystal: /.*destroy.{1,5}a.{1,5}minion.{1,5}and.{1,5}one.{1,5}of.{1,5}your.{1,5}Mana.*/i,
destroyEnemyAttackOrLess: /.*destroy.{1,5}an.{1,5}enemy.{1,5}minion.{1,5}with.{1,5}(\d\d?).{1,5}or.{1,5}less.{1,5}attack.*/i,
destroyAllMinionsExceptOne: /.*destroy.{1,5}all.{1,5}minions.{1,5}except.{1,5}one.*/i,
destroyAllMinions: /.*destroy.{1,5}all.{1,5}minions(?:\.|\;).*/i,
destroyCorrupt: /.*corrupt.{1,5}every.{1,5}minion.*/i,
destroyIt: /.*destroy.{1,5}it.*/i,
destroyLeftAndRight: /.*destroy.{1,5}your.{1,5}opponent's.{1,5}left.{1,5}and.{1,5}right.*/i,
destroyFriendlyMinion: /.*destroy.{1,5}a.{1,5}friendly.{1,5}minion.*/i,
destroyRandomEnemyMinion: /.*destroy.{1,5}a.{1,5}random.{1,5}enemy.{1,5}minion.*/i,
destroyallOtherMinions: /.*destroy.{1,5}all.{1,5}other.{1,5}minions.*/i,
destroyAllEnemySecrets: /.*destroy.{1,5}all.{1,5}enemy.{1,5}secrets.*/i,
destroyDamagedEnemyMinion: /.*destroy.{1,5}all.{1,5}a.{1,5}damaged.{1,5}enemy.{1,5}minion.*/i,
destroyYourManaCrystal: /.*destroy.{1,5}one.{1,5}of.{1,5}your.{1,5}mana.*/i,
destroyPirate: /.*destroy.{1,5}a.{1,5}pirate.*/i,
destroyMurloc: /.*destroy.{1,5}a.{1,5}murlock?.*/i,
destroyDemon: /.*destroy.{1,5}a.{1,5}demon.*/i,
destroyCardsInYourDeckOrLess: /.*destroy.{1,5}all.{1,5}cards.{1,5}in.{1,5}your.{1,5}deck.{1,5}that.{1,5}cost.{1,5}\((\d)\).{1,5}or.{1,5}less.*/i,
destroyFrozenMinion: /.*destroy.*frozen.{1,5}minion.*/i,
destroyAllDamagedMinions: /.*destroy.*all.{1,5}damaged.{1,5}minions.*/i,
destroyRandomEnemyMinions: /.*destroy.{1,5}(\d\d?).{1,5}random.{1,5}enemy.{1,5}minions?.*/i,
destroyYourHero: /.*destroy.{1,5}your.{1,5}hero.*/i,
destroyOneCostSpells: /.*destroy.{1,5}all.{1,5}1-cost.{1,5}spells.*/i,
destroyRandomEnemyMinionAttackOrLess: /.*destroy.{1,5}a.{1,5}random.{1,5}enemy.{1,5}minion.*with.{1,5}(\d\d?).{1,5}or.{1,5}less.{1,5}attack.*/i,
destroyEnemyMinionWithTaunt: /.*destroy.{1,5}an.{1,5}enemy.{1,5}minion.{1,5}with.{1,5}taunt.*/i,
destroySideMinion: /.*destroy.{1,5}the.{1,5}minions.{1,5}on.*side.{1,5}of.{1,5}this.{1,5}minion.*/i,

// disable hero power

disableHeroPowers: /.*hero.{1,5}powers.{1,5}are.{1,5}disabled.*/i,

// discard

discardHand: /.*discard.{1,5}your.{1,5}hand.*/i,
discardRandomCard: /.*discard.{1,5}a.{1,5}random.{1,5}card.*/i,
discardTwo: /.*discard.{1,5}two.{1,5}random.{1,5}cards.*/i,
discardWeapons: /.*discard.{1,5}all.{1,5}weapons.{1,5}from.{1,5}your.{1,5}hand.*/i,
discardOthers: /.*discard.{1,5}the.{1,5}others.*/i,

// enchant

enchantItDouble: /.*give.{1,5}it.{1,5}\+(\d)\/\+(\d).*/i,
enchantItAttack: /.*give.{1,5}it.{1,5}\+(\d).{1,5}attack.{1,5}.*/i,
enchantAttackTurn: /.*give.{1,5}a.{1,5}minion.{1,5}\+(\d).{1,5}attack.{1,5}this.{1,5}turn.*/i,
enchantFriendlyAttack: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}\+(\d).{1,5}attack(?:\.|\;).*/i,
enchantFriendlyHealth: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}\+(\d).{1,5}health(?:\.|\;).*/i,
enchantEnemyBananas: /.*give.{1,5}your.{1,5}opponent.{1,5}(\d\d?).{1,5}bananas.*/i,
enchantTaunt: /.*give.{1,5}it.{1,5}taunt.*/i,
enchantItPoisonous: /.*give.{1,5}it.{1,5}poisonous.*/i,
enchantItToOpponent: /.*give.{1,5}it.{1,5}to.{1,5}your.{1,5}opponent.*/i,
enchantItDivineShield: /.*give.{1,5}it.{1,5}divine.{1,5}shield.*/i,
enchantAdjacentSpell: /.*give.{1,5}adjacent.{1,5}minions.{1,5}spell.{1,5}damage.{1,5}\+(\d).*/i,
enchantAdjacentDoubleTaunt: /.*give.{1,5}adjacent.{1,5}minions.{1,5}\+(\d)\/\+(\d).{1,5}and.{1,5}taunt.*/i,
enchantAdjacentDouble: /.*give.{1,5}adjacent.{1,5}minions.{1,5}\+(\d)\/\+(\d)(?:\.|\;).*/i,
enchantAdjacentHealth: /.*give.{1,5}adjacent.{1,5}minions.{1,5}\+(\d).{1,5}health.*/i,
enchantAdjacentTaunt: /.*give.{1,5}adjacent.{1,5}minions.{1,5}taunt.*/i,
enchantThisAMinionHealth: /.*give.{1,5}(?:this|a).{1,5}minion.{1,5}\+(\d).{1,5}health.*/i,
enchantEnemyMana: /.*give.*opponent.{1,5}a.{1,5}mana.{1,5}crystal.*/i,
enchantFriendlyDivineShiled: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}divine.{1,5}shield.*/i,
enchantCthunDouble: /.*give.{1,5}your.{1,5}c'thun.{1,5}\+(\d)\/\+(\d).*/i,
enchantBeastImmuneAttackturn: /.*give.{1,5}a.{1,5}friendly.{1,5}beast.{1,5}\+(\d).{1,5}attack.{1,5}and.{1,5}immune.{1,5}this.{1,5}turn.*/i,
enchantHeroAttackArmorTurn: /.*give.{1,5}your.{1,5}hero.{1,5}\+(\d).{1,5}attack.{1,5}this.{1,5}turn.{1,5}and.{1,5}(\d\d?).{1,5}armor.*/i,
enchantMinionAttack: /.*give.{1,5}a.{1,5}minion.{1,5}\+(\d).{1,5}attack(?:\.|\;).*/i,
enchantMinionWindfury: /.*give.{1,5}a.{1,5}minion.{1,5}windfury.*/i,
enchantFriendlyMinionWindfury: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}windfury.*/i,
enchantMinionHealth: /.*give.{1,5}a.{1,5}minion.{1,5}\+(\d).{1,5}health.*/i,
enchantMinionDouble: /.*give.{1,2}a.{1,2}minion.{1,5}\+(\d)\/\+(\d)(?:\.|\;).*/i,
enchantRandomFriendlyMinionHealth: /.*give.{1,5}another.{1,5}random.{1,5}friendly.{1,5}minion.{1,5}\+(\d).{1,5}health.*/i,
enchantMinionsAttackTurn: /.*give.{1,5}your.{1,5}minions.{1,5}\+(\d).{1,5}attack.{1,5}this.{1,5}turn.*/i,
enchantWeaponDouble: /.*give.{1,5}your.{1,5}weapon.{1,5}\+(\d)\/\+(\d).*/i,
enchantWeaponAttack: /.*give.{1,5}your.{1,5}weapon.{1,5}\+(\d).{1,5}attack.*/i,
enchantOtherMinionsHealth: /.*give.{1,5}your.{1,5}other.{1,5}minions.{1,5}\+(\d).{1,5}health.*/i,
enchantOtherMinionsDouble: /.*give.{1,5}your.{1,5}other.{1,5}minions.{1,5}\+(\d)\/\+(\d).*/i,
enchantFriendlyDoubleTaunt: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}\+(\d)\/\+(\d).{1,5}and.{1,5}taunt.*/i,
enchantFriendlyDouble: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}\+(\d)\/\+(\d)(?:\.|\;).*/i,
enchantMinionsAttack: /.*give.{1,5}your.{1,5}minions.{1,5}\+(\d).{1,5}attack.*/i,
enchantMinionsDouble: /.*give.{1,5}your.{1,5}minions.{1,5}\+(\d)\/\+(\d).*/i,
enchantRandomMinionsDoubleHand: /.*give.{1,5}a.{1,5}random.{1,5}minion.{1,5}in.{1,5}your.{1,5}hand.{1,5}\+(\d)\/\+(\d).*/i,
enchantMinionsCharge: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}charge.*/i,
enchantRandomFriendlyMinionAttack: /.*give.{1,5}another.{1,5}random.{1,5}friendly.{1,5}minion.{1,5}\+(\d).{1,5}attack.*/i,
enchantRandomFriendlyMinionDouble: /.*give.{1,5}another.{1,5}random.{1,5}friendly.{1,5}minion.{1,5}\+(\d)\/\+(\d).*/i,
enchantYourOtherMurlockHelath: /.*give.{1,5}your.{1,5}other.{1,5}murlocs.{1,5}\+(\d).{1,5}health.*/i,
enchantMinionDeathrattle: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.*deathrattle.*/i,
enchantMinionsDeathrattle: /.*give.{1,5}your.{1,5}minions.*deathrattle.*/i,
enchantFriendlyImmuneTurn: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}immune.{1,5}this.{1,5}turn.*/i,
enchantWeaponPoisonous: /.*give.{1,5}your.{1,5}weapon.{1,5}poisonous.*/i,
enchantWeaponLifesteal: /.*give.{1,5}your.{1,5}weapon.{1,5}lifesteal.*/i,
enchantThemDouble: /.*give.{1,5}them.{1,5}\+(\d)\/\+(\d).*/i,
enchantHeroAttackTurn: /.*give.{1,5}your.{1,5}hero.{1,5}\+(\d).{1,5}attack.{1,5}this.{1,5}turn(?:\.|\;).*/i,
enchantDeathrattleDouble: /.*give.{1,5}all.{1,5}deathrattle.{1,5}minion.{1,5}in.{1,5}your.{1,5}hand.{1,5}\+(\d)\/\+(\d).*/i,
enchantAllMinionsDouble: /.*give.{1,5}all.{1,5}minions.{1,5}in.{1,5}your.{1,5}hand.{1,5}\+(\d)\/\+(\d).*/i,
enchantWeaponHandDouble: /.*give.{1,5}a.{1,5}random.{1,5}weapon.{1,5}in.{1,5}your.{1,5}hand.{1,5}\+(\d)\/\+(\d).*/i,
enchantAdjacentDivineShield: /.*give.{1,5}adjacent.{1,5}minions.{1,5}divine.{1,5}shield.*/i,
enchantMurlockHandDouble: /.*give.{1,5}a.{1,5}random.{1,5}murloc.{1,5}in.{1,5}your.{1,5}hand.{1,5}\+(\d)\/\+(\d).*/i,
enchantMinionDivineShield: /.*give.{1,5}a.{1,5}minion.{1,5}divine.{1,5}shield.*/i,
enchantEnemyCoins: /.*give.{1,5}your.{1,5}opponent.{1,5}two.{1,5}coints.*/i,
enchantDeckHandWeaponAttack: /.*give.{1,5}all.{1,5}weapons.{1,5}in.{1,5}your.{1,5}hand.{1,5}and.{1,5}deck.{1,5}\+(\d).{1,5}attack.*/i,
enchantBeastDoubleTaunt: /.*give.{1,5}a.{1,5}friendly.{1,5}beast.{1,5}\+(\d)\/\+(\d).{1,5}and.{1,5}taunt.*/i,
enchantBeastDouble: /.*give.{1,5}a.{1,5}friendly.{1,5}beast.{1,5}\+(\d)\/\+(\d)(?:\.|\;).*/i,
enchantSilverDoubleHand: /.*give.{1,5}your.{1,5}silver.{1,5}hand.*\+(\d)\/\+(\d).{1,5}and.{1,5}taunt.*/i,
enchantMinionDoubleTaunt: /.*give.{1,5}a.{1,5}minion.{1,5}taunt.{1,5}and.{1,5}\+(\d)\/\+(\d).*/i,
enchantMinionStealth: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}stealth.*/i,
enchantMinionSpellDamage: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}spell.{1,5}damage.{1,5}\+(\d).*/i,
enchantBDM: /.*give.{1,5}a.{1,5}random.{1,5}friendly.{1,5}beast,.{1,5}dragon.{1,5}and.{1,5}murloc.{1,5}\+(\d)\/\+(\d).*/i,
enchantAllEnemyMinusAttackTurn: /.*give.{1,5}all.{1,5}enemy.{1,5}minions.{1,5}\-(\d).{1,5}attack.*turn.*/i,
enchantMinionPoisonous: /.*give.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}poisonous.*/i,
enchantDoubleWithDivine: /.*give.{1,5}\+(\d)\/\+(\d).{1,5}to.{1,5}your.{1,5}minions.{1,5}with.{1,5}divine.{1,5}shield.*/i,
enchantDamagedMinion: /.*give.{1,5}a.{1,5}damaged.{1,5}minion.{1,5}\+(\d)\/\+(\d).*/i,
enchantCharacterAttackTurn: /.*give.{1,5}a.{1,5}friendly.{1,5}character.{1,5}\+(\d).{1,5}attack.{1,5}this.{1,5}turn.*/i,
enchantMurlocDouble: /.*give.{1,5}a.{1,5}friendly.{1,5}murloc.{1,5}\+(\d)\/\+(\d).*/i,
enchantCharactersAttackTurn: /.*give.{1,5}your.{1,5}characters.{1,5}\+(\d).{1,5}attack.{1,5}this.{1,5}turn.*/i,
enchantRandomMinionDivineShield: /.*give.{1,5}a.{1,5}random.{1,5}friendly.{1,5}minion.{1,5}divine.{1,5}shield.*/i,
enchantStealheadMinion: /.*give.{1,5}a.{1,5}stealhed.{1,5}minion.{1,5}\+(\d)\/\+(\d).*/i,
enchantRandomBeastDoubleHand: /.*give.{1,5}a.{1,5}random.{1,5}beast.*hand.{1,5}\+(\d)\/\+(\d).*/i,
enchantMinionDoubleTauntR: /.*give.{1,5}a.{1,5}minion.{1,5}\+(\d)\/\+(\d).{1,5}and.{1,5}taunt.*/i,
enchantTauntDoubleHand: /.*give.{1,5}a.{1,5}random.{1,5}taunt.{1,5}minion.{1,5}in.{1,5}your.{1,5}hand.{1,5}\+(\d)\/\+(\d).*/i,
enchantTauntDouble: /.*give.{1,5}your.{1,5}taunt.{1,5}minions.{1,5}\+(\d)\/\+(\d).*/i,
enchantRandomFriendlyMinionDoubleN: /.*give.{1,5}a.{1,5}random.{1,5}friendly.{1,5}minion.{1,5}\+(\d)\/\+(\d).*/i,
enchantTotemsHealth: /.*give.{1,5}your.{1,5}totems.{1,5}\+(\d).{1,5}health.*/i,
enchantHandMinionDouble: /.*give.{1,5}a.{1,5}minion.{1,5}in.{1,5}your.{1,5}hand.{1,5}\+(\d)\/\+(\d).*/i,

// elusive

elusiveHero: /.*can't.{1,5}be.{1,5}targeted.{1,5}by.{1,5}spells.*/i,
elusiveMinion: /.*your.{1,5}hero.{1,5}can't.{1,5}be.{1,5}targeted.*/i,

// equip

equipDouble: /.*equip.{1,5}a.{1,5}(\d)\/(\d).*/i,
equipRandom: /.*equip.{1,5}a.{1,5}random.{1,5}weapon.*/i,
equipAtlesh: /.*equip.{1,5}atlesh.*/i,
equipReequip: /.*reequip.*/i,

// forgetful -- empty

// gain

gainArmor: /.*gain.{1,5}(\d\d?).{1,5}armor.*/i,
gainDoublePlayed: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each.{1,5}other.{1,5}card.*played.*/i,
gainDouble: /.*gain.{1,5}\+(\d)\/\+(\d)(?:\.|\;).*/i,
gainDoubleShield: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each.{1,5}shield.{1,5}lost.*/i,
gainAttackEqual: /.*gain.{1,5}attack.{1,5}equal.{1,5}to.{1,5}the.{1,5}attack.*/i,
gainAttack: /.*gain.{1,5}\+(\d).{1,5}attack(?:\.|\;).*/i,
gainAttackTurn: /.*gain.{1,5}\+(\d).{1,5}attack.{1,5}this.{1,5}turn.*/i,
gainTaunt: /.*gain.*?taunt.*/i,
gainCharge: /.*gain.*?charge.*/i,
gainManaCrystalTurn: /.*gain.{1,5}(\d\d?).{1,5}mana.{1,5}crystal.*turn.*/i,
gainManaCrystals: /.*\bgain.{1,5}(\d\d?).{1,5}mana.{1,5}crystals\.?\;?\b.*/i,
gainHealth: /.*gain.{1,5}\+(\d).{1,5}health(?:\.|\;).*/i,
gainHealthEach: /.*gain.{1,5}\+(\d).{1,5}health.{1,5}for.{1,5}each.{1,5}enemy.{1,5}minion.*/i,
gainDoubleEachDamaged: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each.{1,5}damaged.{1,5}minion.*/i,
gainArmorEqualToAttack: /.*gain.{1,5}armor.{1,5}equal.{1,5}equal.{1,5}to.*attack.*/i,
gainDoubleEach: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each(?:\.|\;).*/i,
gainDoubleEachTurn: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each.{1,5}card.*turn.*/i,
gainControlIt: /.*gain.{1,5}control.{1,5}of.{1,5}it.*/i,
gainControlAttackLessTurn: /.*gain.{1,5}control.{1,5}of.{1,5}an.{1,5}enemy.*?with.{1,5}(\d\d?).{1,5}or.{1,5}less.{1,5}attack.*turn.*/i,
gainDoubleManaSpend: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each.{1,5}mana.{1,5}spend.*/i,
gainDoubleMinionsBattle: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each.{1,5}other.{1,5}friendly.{1,5}minion.*battlefield.*/i,
gainTheirStats: /.*gain.{1,5}their.{1,5}stats.*/i,
gainEmptyMana: /.*gain.{1,5}an.{1,5}empty.{1,5}mana.{1,5}crystal(?:\.|\;).*/i,
gainDoubleTaunt: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}and.{1,5}taunt.*/i,
gainDivine: /.*gain.*?divine.{1,5}shield.*/i,
gainStealth: /.*gain.*?stealth.*/i,
gainDeathrattle: /.*gain.*?deathrattle.*/i,
gainLifesteal: /.*gain.*?lifesteal.*/i,
gainEachAttackHand: /.*gain.{1,5}\+(\d).{1,5}attack.{1,5}for.{1,5}each.*card.{1,5}in.{1,5}your.{1,5}hand.*/i,
gainEachHealthHand: /.*gain.{1,5}\+(\d).{1,5}health.{1,5}for.{1,5}each.*card.{1,5}in.{1,5}your.{1,5}hand.*/i,
gainEachHealthElemental: /.*gain.{1,5}\+(\d).{1,5}health.{1,5}for.{1,5}each.*elemental.*played.{1,5}last.{1,5}turn.*/i,
gainEqualWeaponDoubke: /.*gain.{1,5}stats.{1,5}equal.{1,5}to.{1,5}your.{1,5}weapon's.*/i,
gainEmptyManaCrystalsEach: /.*gain.{1,5}an.{1,5}empty.{1,5}mana.{1,5}crystal.{1,5}for.{1,5}each.{1,5}friendly.{1,5}minion.*/i,
gainBonusHand: /.*gains.{1,5}a.{1,5}bonus.{1,5}effect.{1,5}in.{1,5}your.{1,5}hand.*/i,
gainTheirDouble: /.*gain.{1,5}their.{1,5}attack.{1,5}and.{1,5}health.*/i,
gainEachDiedDouble: /.*gain.{1,5}\+(\d)\/\+(\d).{1,5}for.{1,5}each.{1,5}minion.*?died.*?this.{1,5}turn.*/i,

//generate

addRandomDeathKnight: /.*add.{1,5}a.{1,5}random.{1,5}death.{1,5}knight.{1,5}card.*/i,
addRandomMageSpell: /.*add.{1,5}a.{1,5}random.{1,5}mage.{1,5}spell.*/i,
addRandomMageSpells: /.*add.{1,5}(\d\d?).{1,5}random.{1,5}mage.{1,5}spells?.*/i,
addRandomDragon: /.*add.{1,5}a.{1,5}random.{1,5}dragon.*/i,
addDoubleCthun: /.*add.{1,5}its.{1,5}attack.{1,5}and.{1,5}health.{1,5}to.{1,5}c'thun.*/i,
addCopyEachDamagedFriednlyMinion: /.*add.{1,5}a.{1,5}copy.{1,5}of.{1,5}each.{1,5}damaged.{1,5}friendly.{1,5}minion.*/i,
addTwoStats: /.*add.{1,5}two.{1,5}(\d)\/(\d).*/i,
addCoin: /.*add.{1,5}a.{1,5}coin.*/i,
addWeapon: /.*add.{1,5}a.{1,5}(\d)\/(\d).{1,5}weapon.*/i,
addSilvers: /.*add.{1,5}(\d\d?).{1,5}silver.{1,5}hand.*/i,
addElemental: /.*add.{1,5}a.{1,5}(\d)\/(\d).{1,5}elemental.*/i,
addMirror: /.*add.{1,5}a.*mirror.{1,5}image.*/i,
addRandomBeast: /.*add.{1,5}a.{1,5}random.{1,5}beast.*/i,
addRandomPotion: /.*add.{1,5}a.{1,5}random.{1,5}potion.*/i,
addRandomDemon: /.*add.{1,5}a.{1,5}random.{1,5}demon.*/i,
addRandomPriestSpell: /.*add.{1,5}a.{1,5}random.{1,5}priest.{1,5}spell.*/i,
addManaBind: /.*add.{1,5}a.{1,5}copy.{1,5}to.{1,5}your.{1,5}that.{1,5}costs.*/i,
addCopyOfIt: /.*add.{1,5}a.{1,5}copy.{1,5}of.{1,5}it.*/i,
addBananas: /.*add.{1,5}(\d\d?).{1,5}bananas.*/i,
addRazorpetal: /.*add.{1,5}a.{1,5}razorpetal.*/i,
addTwoRazorpetals: /.*add.{1,5}two.{1,5}razorpetals.*/i,
addFirstSeal: /.*add.*?the.{1,5}first.{1,5}seal.*/i,
addCopyDouble: /.*add.{1,5}(\d)\/(\d).{1,5}copy.*/i,
addRandomCard: /.*add.{1,5}a.{1,5}random.{1,5}card.*/i,
addRandomDeathrattle: /.*add.{1,5}a.{1,5}random.{1,5}deathrattle.{1,5}minion.*/i,
addFlameGeyser: /.*add.*?flame.{1,5}geyser.*/i,
addRandomClass: /.*add.{1,5}a.{1,5}random.{1,5}class.{1,5}card.*/i,
addExtraCopies: /.*add.{1,5}(\d\d?).{1,5}extra.{1,5}copies.*/i,
addRandomMinionAttack: /.*add.{1,5}a.{1,5}random.{1,5}minion.{1,5}with.{1,5}(\d\d?).{1,5}or.{1,5}more.{1,5}attack.*/i,
addToxin: /.*add.{1,5}a.{1,5}random.{1,5}toxin.{1,5}card.*/i,
addGoldenCopy: /.*add.{1,5}a.{1,5}golden.{1,5}copy.{1,5}of.{1,5}it.*/i,
addLegendaries: /.*add.{1,5}(\d\d?).{1,5}extra.{1,5}legendary.{1,5}minions.*/i,

// joust

revealSpell: /.*reveal.{1,5}a.{1,5}spell.*/i,

// control effect

takeControlAttackLess: /.*take.{1,5}control.{1,5}of.{1,5}an.{1,5}enemy.{1,5}minion.*?has.{1,5}(\d\d?).{1,5}or.{1,5}less.{1,5}attack.*/i,
takeControlEnemyMinion: /.*take.{1,5}control.{1,5}of.{1,5}an.{1,5}enemy.{1,5}minion(?:\.|\;).*/i,

// modify cost

costLessEachSpell: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}spell.*game.*/i,
costLessEachDamage: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}damage.*taken.*/i,
costLessEachCard: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}card.*hand.*/i,
costLessEachMinion: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}other.{1,5}minion.*battlefield.*/i,
costLessEachOverload: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}mana.*overloaded.*/i,
costWeaponLess: /.*your.{1,5}weapons.{1,5}cost.{1,5}\((\d)\).{1,5}less.*/i,
costChangeTo: /.*change.{1,5}its.{1,5}cost.{1,5}to.{1,5}\((\d)\).*/i,
costReduceEnemyMinion: /.*reduce.{1,5}cost.{1,5}of.{1,5}minions.{1,5}in.{1,5}your.{1,5}opponent's.{1,5}hand.{1,5}by.{1,5}\((\d)\).*/i,
costItLess: /.*it.{1,5}costs.{1,5}\((\d)\).{1,5}less.*/i,
costItMore: /.*it.{1,5}costs.{1,5}\((\d)\).{1,5}more.*/i,
costHealth: /.*costs.{1,5}health.*/i,
costZeroSecret: /.*your.{1,5}secrets.{1,5}cost.{1,5}\(0\)(?:\.|\;).*/i,
costDeathrattleLess: /.*your.{1,5}deathrattle.{1,5}cards.{1,5}cost.{1,5}\((\d)\).{1,5}less.*/i,
costSilverControlLess: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}silver.{1,5}hand.*?control.*/i,
costEnemySpellMore: /.*your.{1,5}opponent's.{1,5}spells.{1,5}cost.{1,5}\((\d)\).{1,5}more.*/i,
costLessPerWeapon: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}per.{1,5}attack.*?weapon.*/i,
costReduceWeapon: /.*reduce.*?random.{1,5}weapon.*?your.{1,5}hand.{1,5}by.{1,5}\((\d)\).*/i,
costYourMinionsMore: /.*your.{1,5}minions.{1,5}cost.{1,5}\((\d)\).{1,5}more.*/i,
costYourMinionsLess: /.*your.{1,5}minions.{1,5}cost.{1,5}\((\d)\).{1,5}less.*/i,
costThatLess: /.*that.{1,5}card.{1,5}costs.{1,5}\((\d)\).{1,5}less.*/i,
costReduceElementals: /.*reduce.*?elementals.*.{1,5}by.{1,5}\((\d)\).*/i,
costThey: /.*they.{1,5}cost.{1,5}\((\d)\)(?:\.|\;).*/i,
costSecretEachLess: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}secret.*?played.{1,5}this.{1,5}game.*/i,
costNextSecretLess: /.*next.{1,5}secret.*?this.{1,5}turn.*costs.{1,5}\(0\).*/i,
costLessDrawnMinion: /.*minions.{1,5}drawn.{1,5}cost.{1,5}\((\d)\).{1,5}less.*/i,
costAllMinionsMore: /.*all.{1,5}minions.{1,5}cost.{1,5}\((\d)\).{1,5}more.*/i,
costFreeEnemyNextTurn: /.*enemy.{1,5}spells.{1,5}cost.{1,5}\(0\).{1,5}next.{1,5}turn.*/i,
costReduceThis: /.*reduce.{1,5}this.{1,5}card's.{1,5}cost.{1,5}by.{1,5}\((\d)\).*/i,
costSpellsMore: /.*spells.{1,5}cost.{1,5}\((\d)\).{1,5}more.*/i,
costYourSpellsLess: /.*your.{1,5}spells.{1,5}cost.{1,5}\((\d)\).{1,5}less.*/i,
costOtherClassLess: /.*cost.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}card.*?played.*?another.{1,5}class.*/i,
costFirstMinionLess: /.*first.{1,5}minion.*?.{1,5}costs.{1,5}\((\d)\).{1,5}less.*/i,
costSpellLessTurn: /.*next.{1,5}spell.*?this.{1,5}turn.*?costs.{1,5}\((\d)\).{1,5}less.*/i,
costReduceItsCost: /.*reduce.{1,5}its.{1,5}cost.{1,5}by.{1,5}\((\d)\).*/i,
costCardsLess: /.*the.{1,5}cards.{1,5}cost.{1,5}\((\d)\).{1,5}less.*/i,
costEachTotemLess: /.*costs.{1,5}\((\d)\).{1,5}less.{1,5}for.{1,5}each.{1,5}totem.*?game.*/i,

// multiply attribute

doubleAttack: /.*double.{1,5}(?:this|a).{1,5}minion's.{1,5}attack.*/i,
doubleHealth: /.*double.{1,5}a.{1,5}minion's.{1,5}health.*/i,
doubleDamageHealing: /.*double.{1,5}the.{1,5}damage.{1,5}and.{1,5}healing.*/i,
doubleTwiceTrigger: /.*trigger.{1,5}twice.*/i,
doubleTwiceAdapt: /.*adapt.{1,5}twice.*/i,

// no durability loss -- empty

// permanent -- empty

// put

putBothPlayersRandomMinion: /.*put.{1,5}a.{1,5}random.{1,5}minion.*?each.*?hand.{1,5}into.{1,5}the.{1,5}battlefield.*/i,
putMinionDeckToHand: /.*put.{1,5}a.{1,5}10-cost.{1,5}minion.*?into.{1,5}your.{1,5}hand.*/i,
putRandomPirateToHand: /.*put.{1,5}a.{1,5}random.{1,5}pirate.*?into.{1,5}your.{1,5}hand.*/i,
putAllDragonFromHand: /.*put.{1,5}all.{1,5}dragons.*into.{1,5}the.{1,5}battlefield.*/i,
putEachSecretBattlefield: /.*put.{1,5}one.{1,5}of.{1,5}each.{1,5}secret.*?into.{1,5}the.{1,5}battlefield.*/i,
putCopySpellPlayers: /.*put.{1,5}a.{1,5}copy.{1,5}into.{1,5}the.{1,5}other.{1,5}player's.{1,5}hand.*/i,
putCopyOpponentCard: /.*put.{1,5}a.{1,5}copy.{1,5}of.{1,5}a.{1,5}random.{1,5}card.*opponent's.{1,5}hand.*/i,
putCopyOpponentMinion: /.*put.{1,5}a.{1,5}copy.{1,5}of.{1,5}a.{1,5}random.{1,5}minion.*?opponent's.{1,5}deck.*?into.{1,5}the.{1,5}battlefield.*/i,
putRandomHunterSecretBattlefield: /.*put.{1,5}a.{1,5}random.{1,5}hunter.{1,5}secret.*?into.{1,5}the.{1,5}battlefield.*/i,
putRandomDemonsToHand: /.*put.{1,5}(\d\d?).{1,5}random.{1,5}demons.*?from.{1,5}your.{1,5}deck.{1,5}into.{1,5}your.{1,5}hand.*/i,
putMinionDeckToBattlefield: /.*put.{1,5}a.{1,5}minion.{1,5}from.{1,5}your.{1,5}deck.{1,5}into.{1,5}the.{1,5}battlefield.*/i,

// refresh

refreshHeroPower: /.*refresh.{1,5}your.{1,5}hero.{1,5}power.*/i,
refreshMana: /.*refresh.{1,5}your.{1,5}mana.{1,5}crystals.*/i,

// remove

removeDurability: /.*remove.{1,5}(\d\d?).{1,5}durability.*?weapon.*/i,
removeEnemyTopCard: /.*remove.{1,5}the.{1,5}top.{1,5}card.*?opponent.*/i,
removeCards: /.*remove.{1,5}the.{1,5}top.{1,5}(\d\d?).{1,5}cards.{1,5}of.{1,5}your.{1,5}deck.*/i,

// replace

replaceDeckDiscover: /.*replace.{1,5}your.{1,5}deck.{1,5}with.{1,5}copies.{1,5}of.*?discover.*/i,
replaceSpellsHand: /.*replace.{1,5}spells.{1,5}in.{1,5}your.{1,5}hand.*?random.{1,5}spells.*/i,
replaceLordJaraxxus: /.*replace.{1,5}it.{1,5}with.{1,5}lord.{1,5}jaraxxus.*/i,
replaceDeckDiscover: /.*replace.{1,5}your.{1,5}hero.{1,5}power.{1,5}and.{1,5}warlock.{1,5}cards.*/i,

// restore

restoreToFullMinion: /.*restore.{1,5}a.{1,5}minion.{1,5}to.{1,5}full.{1,5}health.*/i,
restoreHealth: /.*restore.{1,5}(\d\d?).{1,5}health(?:\.|\;).*/i,
restoreHealthHero: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}your.{1,5}hero.*/i,
restoreHealthEachHero: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}each.{1,5}hero.*/i,
restoreHealthMinionHero: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}a.{1,5}minion.{1,5}and.{1,5}your.{1,5}hero.*/i,
restoreAllMinions: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}all.{1,5}minions.*/i,
restoreEnemyHero: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}the.{1,5}enemy.{1,5}hero.*/i,
restoreEachMinionHero: /.*for.{1,5}each.{1,5}enemy.{1,5}minion,.{1,5}restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}your.{1,5}hero.*/i,
restoreAllCharacters: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}all.{1,5}friendly.{1,5}characters.*/i,
restoreAllCharacter: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}a.{1,5}friendly.{1,5}\bcharacter\b.*/i,
restoreTwice: /.*restore.{1,5}twice.{1,5}that.{1,5}much.{1,5}health.*/i,
restoreThatHero: /.*restore.{1,5}that.{1,5}much.{1,5}health.{1,5}to.{1,5}your.{1,5}hero.*/i,
restoreRandomlyCharacters: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}divided.*characters.*/i,
restoreHealthHeroEqual: /.*restore.{1,5}health.{1,5}to.{1,5}your.{1,5}hero.{1,5}equal.{1,5}to.{1,5}its.{1,5}cost.*/i,
restoreHealthDamagedCharacter: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}a.{1,5}damaged.{1,5}friendly.{1,5}character.*/i,
restoreBothPlayers: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}both.{1,5}players.*/i,
restoreToIt: /.*restore.{1,5}(\d\d?).{1,5}health.{1,5}to.{1,5}it.*/i,

// return

returnToFriendlyMinionHand: /.*return.{1,5}a.{1,5}friendly.{1,5}minion.*?to.{1,5}your.{1,5}hand.*/i,
returnItHand: /.*return.{1,5}(?:this:it)*?to.{1,5}your.{1,5}hand(?:\.|\;).*/i,
returnToLife: /.*return.{1,5}(?:this|it).{1,5}to.{1,5}life.{1,5}with.{1,5}1.{1,5}health.*/i,
returnsToHand: /.*returns.{1,5}to.{1,5}your.{1,5}hand.*/i,
returnToOwnerHand: /.*return.{1,5}it.{1,5}to.{1,5}its.{1,5}owner's.{1,5}hand.*/i,
returnOtherMinions: /.*return.{1,5}your.{1,5}other.{1,5}minions.{1,5}to.{1,5}your.{1,5}hand.*/i,
returnToHandNextTurn: /.*return.{1,5}this.{1,5}to.{1,5}your.{1,5}hand.{1,5}net.{1,5}turn.*/i,
returnMinionHand: /.*return.{1,5}a.{1,5}minion.{1,5}to.{1,5}its.{1,5}owner's.{1,5}hand.*/i,
returnSpell: /.*return.{1,5}any.{1,5}spell.*?cast.{1,5}on.{1,5}this.*?to.{1,5}your.{1,5}hand.*/i,
returnPyros: /.*return.{1,5}this.{1,5}to.{1,5}your.{1,5}hand.{1,5}as.{1,5}a.*/i,
returnDestroyedWeapon: /.*return.{1,5}one.{1,5}of.{1,5}your.{1,5}destroyed.{1,5}weapons.*/i,
returnEnemyHand: /.*return.{1,5}an.{1,5}enemy.{1,5}minion.{1,5}to.{1,5}your.{1,5}opponent's.{1,5}hand.*/i,
returnAll: /.*return.{1,5}all.{1,5}minions.{1,5}to.{1,5}their.{1,5}owner's.{1,5}hand.*/i,

// set attribute

setHeroHealth: /.*set.{1,5}a.{1,5}hero's.{1,5}remaining.{1,5}health.{1,5}to.{1,5}(\d\d?).*/i,
setMinionDouble: /.*set.{1,5}a.{1,5}minion's.{1,5}attack.{1,5}and.{1,5}health.{1,5}to.{1,5}(\d\d?).*/i,
setOtherDouble: /.*set.{1,5}all.{1,5}other.{1,5}minion's.{1,5}attack.{1,5}and.{1,5}health.{1,5}to.{1,5}(\d\d?).*/i,
setThisAttack: /.*set.{1,5}this.{1,5}minion's.{1,5}attack.{1,5}to.{1,5}(\d\d?).*/i,

// shuffle into deck

shuffleEnemyDeck: /.*shuffle.{1,5}a.{1,5}copy.{1,5}of.{1,5}your.{1,5}opponent's.{1,5}deck.*/i,
shuffleThisMinion: /.*shuffle.{1,5}a.{1,5}copy.{1,5}of.{1,5}this.{1,5}minion.*/i,
shuffleHand: /.*shuffle.{1,5}a.{1,5}copy.{1,5}of.{1,5}your.{1,5}hand.*/i,
shuffleScrolls: /.*shuffle.{1,5}(\d\d?).{1,5}scrolls.*/i,
shuffleMinionDouble: /.*shuffle.{1,5}a.{1,5}(\d\d?)\/(\d\d?).*/i,
shuffleUnGoro: /.*shuffle.{1,5}a.{1,5}sealed.{1,5}un'goro.*/i,
shuffleAmbushes: /.*shuffle.{1,5}(\d\d?).{1,5}ambushes.*/i,
shuffleCopies: /.*shuffle.{1,5}(\d\d?).{1,5}copies.{1,5}of.{1,5}this.{1,5}card.*/i,
shuffleThis: /.*shuffle.{1,5}a?.{1,5}?(?:copy|this).{1,5}into.{1,5}your.{1,5}deck.*/i,
shuffleAllEnemyDeck: /.*shuffle.{1,5}all.{1,5}minions.{1,5}into.{1,5}your.{1,5}opponent's.{1,5}deck.*/i,
shuffleThisEnemy: /.*shuffle.{1,5}this.{1,5}minion.{1,5}into.{1,5}your.{1,5}opponent's.{1,5}deck.*/i,
shuffleCandles: /.*shuffle.{1,5}(\d\d?).{1,5}candles.*/i,
shuffleStormGuardian: /.*shuffle.*?the.{1,5}storm.{1,5}guardian.*/i,

// spend mana

spendAllMana: /.*spen.{1,5}all.{1,5}your.{1,5}mana.*/i,
spendAllArmor: /.*spen.{1,5}all.{1,5}your.{1,5}armor.*/i,

// summon

summonRandomFriendlyBeastDied: /.*summon.{1,5}a.{1,5}random.{1,5}friendly.{1,5}beast.{1,5}that.{1,5}died.{1,5}this.{1,5}game.*/i,
summonMinionDouble: /.*summon.{1,5}an?.{1,5}(\d\d?)\/(\d\d?).*/i,
summonBeastCompanion: /.*summon.{1,5}a.{1,5}random.{1,5}beast.{1,5}companion.*/i,
summonJadeGolem: /.*summon.{1,5}a.{1,5}jade.{1,5}golem.*/i,
summonRandomDemon: /.*summon.{1,5}a.{1,5}random.{1,5}demon.*/i,
summonAllFriendlyDemonsGame: /.*summon.{1,5}all.{1,5}friendly.{1,5}demons.*?game.*/i,
summonFourMinionDouble: /.*summon.{1,5}four.{1,5}(\d\d?)\/(\d\d?).*/i,
summonAllCompanions: /.*summon.{1,5}all.{1,5}three.{1,5}animal.{1,5}companions.*/i,
summonCopiesIt: /.*summon.{1,5}(\d\d?).{1,5}copies.{1,5}of.{1,5}it.*/i,
summonCopyIt: /.*summon.{1,5}a.{1,5}copy.{1,5}of.{1,5}(?:it|this).*/i,
summonDoubleCopyIt: /.*summon.{1,5}a.{1,5}(\d\d?)\/(\d\d?).{1,5}copy.{1,5}of.{1,5}it.*/i,
summonWithTaunt: /.*summon.*?with.{1,5}taunt.*/i,
summonWithStealth: /.*summon.*?with.{1,5}stealth.*/i,
summonWithCharge: /.*summon.*?with.{1,5}charge.*/i,
summonTwoMinionDouble: /.*summon.{1,5}two.{1,5}(\d\d?)\/(\d\d?).*/i,
summonThreeMinionDouble: /.*summon.{1,5}three.{1,5}(\d\d?)\/(\d\d?).*/i,
summonFiveMinionDouble: /.*summon.{1,5}five.{1,5}(\d\d?)\/(\d\d?).*/i,
summonSevenMinionDouble: /.*summon.{1,5}seven.{1,5}(\d\d?)\/(\d\d?).*/i,
summonOneMinionDouble: /.*summon.{1,5}one.{1,5}(\d\d?)\/(\d\d?).*/i,
summonResummon: /.*resummon.{1,5}this.{1,5}minion.*/i,
summonResummonIt: /.*resummon.{1,5}it.*/i,
summonDiscardedGame: /.*summon.{1,5}a.{1,5}random.{1,5}minion.{1,5}you.{1,5}discarded.{1,5}this.{1,5}game.*/i,
summonOpponentRandom: /.*your.{1,5}opponent.{1,5}summons.{1,5}a.{1,5}random.{1,5}minion.{1,5}from.{1,5}their.{1,5}hand.*/i,
summonCopiesOfIt: /.*summon.{1,5}(\d\d?).{1,5}copies.{1,5}of.{1,5}this.{1,5}minion.*/i,
summonIt: /.*summon.{1,5}it.*/i,
summonRandomCost: /.*summon.{1,5}a.{1,5}random.{1,5}(\d\d?)\-cost.{1,5}minion.*/i,
summonEnemyRandomCost: /.*summon.{1,5}a.{1,5}random.{1,5}(\d\d?)\-cost.{1,5}minion.{1,5}for.{1,5}your.{1,5}opponent.*/i,
summonThatMany: /.*summon.{1,5}that.{1,5}many.{1,5}(\d\d?)\/(\d\d?).*/i,
summonRadomMinionMuch: /.*summon.{1,5}a.{1,5}random.{1,5}minion.{1,5}that.{1,5}costs.{1,5}that.{1,5}much.*/i,
summonTwoMinionDoubleEnemy: /.*summon.{1,5}two.{1,5}(\d\d?)\/(\d\d?).*?for.{1,5}your.{1,5}opponent.*/i,
summonMinionEqualArmor: /.*summon.{1,5}a.{1,5}random.{1,5}minion.*?equal.{1,5}to.{1,5}your.{1,5}armor.*/i,
summonHandAttackMinion: /.*summon.{1,5}a.{1,5}minion.{1,5}from.{1,5}your.{1,5}hand.{1,5}with.{1,5}(\d).{1,5}or.{1,5}more.{1,5}attack.*/i,
summonTauntDied: /.*summon.{1,5}your.{1,5}taunt.{1,5}minions.{1,5}that.{1,5}died.{1,5}this.{1,5}game.*/i,
summonCBT: /.*summon.*?candle.*?broom.*?teapot.*/i,
summonSpiders: /.*summon.{1,5}(\d\d?).{1,5}poisonous.{1,5}spiders.*/i,
summonSpidersDouble: /.*summon.{1,5}two.{1,5}(\d\d?)\/(\d\d?).{1,5}poisonous.{1,5}spiders.*/i,
summonThanLessAttack: /.*summon.{1,5}a.{1,5}minion.{1,5}from.{1,5}your.{1,5}deck.{1,5}with.{1,5}less.{1,5}attack.{1,5}than.{1,5}this.{1,5}minion.*/i,
summonDeathrattleGame: /.*summon.{1,5}your.{1,5}deathrattle.{1,5}minions.{1,5}that.{1,5}died.{1,5}this.{1,5}game.*/i,
summonDiedGame: /.*summon.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}that.{1,5}died.{1,5}this.{1,5}game.*/i,
summonNumber: /.*summon.{1,5}a.{1,5}number.{1,5}of.{1,5}(\d\d?)\/(\d\d?).*/i,
summonForOpponent: /.*summon.{1,5}one.{1,5}for.{1,5}your.{1,5}opponent.*/i,
summonRandomLegendary: /.*summon.{1,5}a.{1,5}random.{1,5}legendary.{1,5}minion.*/i,
summonDemonHand: /.*summon.{1,5}a.{1,5}demon.{1,5}from.{1,5}your.{1,5}hand.*/i,
summonStegodom: /.*summon.{1,5}a.{1,5}stegodom.*/i,
summonRandomSameCost: /.*summon.{1,5}a.{1,5}random.{1,5}minion.{1,5}with.{1,5}the.{1,5}same.{1,5}cost.*/i,
summonCopiesDamagedMinions: /.*summon.{1,5}copies.{1,5}of.{1,5}your.{1,5}damaged.{1,5}minions.*/i,
summonAnimalCompanion: /.*summon.{1,5}an.{1,5}animal.{1,5}companion.*/i,
summonTwoDeathrattle: /.*summon.{1,5}(\d\d?)\/(\d\d?).{1,5}copies.{1,5}of.{1,5}2.{1,5}friendly.{1,5}deathrattle.*?this.{1,5}game.*/i,
summonCostTarget: /.*summon.{1,5}a.{1,5}(\d\d?)-cost.{1,5}minion.{1,5}as.{1,5}the.{1,5}new.{1,5}target.*/i,
summonRandomBasicTotem: /.*summon.{1,5}a.{1,5}random.{1,5}basic.{1,5}totem.*/i,

// transform

transformAllEnemyMinionsLess: /.*transform.{1,5}all.{1,5}enemy.{1,5}minions.*?cost.{1,5}\((\d)\).{1,5}less.*/i,
transformInto: /.*transform.{1,2}into.{1,5}a.{1,5}(\d\d?)\/(\d\d?).*/i,
transformIntoFriendlyMinion: /.*transform.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}into.{1,5}a.{1,5}(\d\d?)\/(\d\d?).*/i,
transformIntoMinion: /.*transform.{1,5}a.{1,5}minion.{1,5}into.{1,5}a.{1,5}(\d\d?)\/(\d\d?).*/i,
transformManaCrystals: /.*transform.{1,5}your.{1,5}mana.{1,5}crystals.{1,5}into.{1,5}(\d\d?)\/(\d\d?).*/i,
transformWithCharge: /.*transform.*?with.{1,5}charge.*/i,
transformWithTaunt: /.*transform.*?with.{1,5}taunt.*/i,
transformWithPoisonous: /.*transform.*?with.{1,5}poisonous.*/i,
transformWithStealth: /.*transform.*?with.{1,5}stealth.*/i,
transformAllMinionsMore: /.*transform.{1,5}your.{1,5}minions.*?cost.{1,5}\((\d)\).{1,5}more.*/i,
transformWeapon: /.*transform.{1,5}it.{1,5}into.{1,5}a.{1,5}new.{1,5}weapon.*/i,
transformItInto: /.*transform.{1,5}it.{1,5}into.{1,5}a.{1,5}(\d\d?)\/(\d\d?).*/i,
transformHandRandomMinion: /.*each.{1,5}turn.{1,5}this.{1,5}is.*?transform.*?random.{1,5}minion.*/i,
transformHandRandomMageSpell: /.*each.{1,5}turn.{1,5}this.{1,5}is.*?transform.*?random.{1,5}mage.{1,5}spell.*/i,
transformAnotherRandom: /.*transform.{1,5}another.{1,5}random.{1,5}minion.*/i,
transformRepeatableMore: /.*transform.{1,5}a.{1,5}friendly.{1,5}minion.{1,5}into.{1,5}one.{1,5}that.*?repeatable.*/i,

// unlimited attacks

unlimitedAttacks: /.*unlimited.{1,5}attacks.{1,5}each.{1,5}turns.*/i,

// additionals
// ----------------------------

// have

haveAdjacentMinionsAttack: /.*adjacent.{1,3}minions.{1,3}have.{1,3}\+(\d).{1,3}attack.*/i,

// can't attack

cannotAttack: /.*can't.{1,3}attack.*/i,

// choose one

chooseOne: /.*choose.{1,5}one.*/i,

// counter

counterSpell: /.*counter.{1,5}it.*/i,

// freeze 

freezeAllEnemyMinions: /.*freeze.{1,5}all.{1,5}enemy.{1,5}minions.*/i,

// overload

overload: /.*\boverload:.*(\d)\b.*/i,

// recruit

recruitMinionsLess: /.*recruit.{1,5}(\d\d?).{1,5}minions.{1,5}that.{1,5}cost.{1,5}\((\d)\).{1,5}or.{1,5}less.*/i,
recruitMinionLess: /.*recruit.{1,5}a.{1,5}minion.{1,5}that.{1,5}cost.{1,5}\((\d)\).{1,5}or.{1,5}less.*/i,
recruitDragon: /.*recruit.{1,5}a.{1,5}dragon.*/i,
recruitMinion: /.*recruit.{1,5}a.{1,5}minion.*/i,
recruitBeast: /.*recruit.{1,5}a.{1,5}beast.*/i,
recruitDemon: /.*recruit.{1,5}a.{1,5}demon.*/i,
recruitThreeOneCostMinions: /.*recruit.{1,5}three.{1,5}1-cost.{1,5}minions.*/i,
recruitCostMinion: /.*recruit.{1,5}an.{1,5}8-cost.{1,5}minion.*/i,
recruitOTT: /.*recruit.{1,5}a.{1,5}1.{1,5}2.{1,5}and.{1,5}3-attack.{1,5}minion.*/i,


// api bugs

lesserMageUpgrade: /.*play 2 elementals to_upgrade.*/i,

}