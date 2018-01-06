const LogRegExr = {
    gameOver: /\[Power\] GameState.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=GameEntity tag=NEXT_STEP value=FINAL_GAMEOVER/,
    drewCard: /\[Zone\].*ZoneChangeList.ProcessChanges\(\).*-.*id=.* local=False \[entityName=(.*) id=.* zone=(.*) zonePos=(.*) cardId=(.*) player=(.*)] zone from (FRIENDLY|OPPOSING) DECK -> FRIENDLY HAND/,
    player: /\[Power\] PowerTaskList.DebugPrintPower\(\).*-.*TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=PLAYING/,
    hero: /\[Zone\] ZoneChangeList.ProcessChanges\(\).*-.*TRANSITIONING card \[entityName=(.*) id=.* zone=PLAY zonePos=.* cardId=.* player=(.*)\] to (FRIENDLY|OPPOSING) PLAY \(Hero\)/,
    heroPower: /\[Power\] GameState.DebugPrintPower\(\).*-.*BLOCK_START.*BlockType=PLAY Entity=\[entityName=(.*) id=.* zone=PLAY zonePos=0 cardId=.* player=(.*)] EffectCardId=.* EffectIndex=.* Target=.* SubOption=.*\s*?/,
    cardShuffled: /\[Zone\] ZoneChangeList.ProcessChanges\(\) - TRANSITIONING card \[entityName=(\b(?!UNKNOWN\b).*?\b) id=(.*) zone=DECK zonePos=(.*) cardId= player=(.*)] to FRIENDLY DECK/,
    cardPlayed: /\[Zone\].*ZoneChangeList.ProcessChanges\(\).*cardId=(.*)name=(.*)\] tag=JUST_PLAYED.*zone=(.*) zon.*player=(\d+).*/,
    currentDeck: /\[Decks\].*(Finding Game With Deck|Starting Arena Game With Deck).*/,
    cardBurned: /\[Zone\] ZoneChangeList.ProcessChanges\(\).*entityName=(\b(?!UNKNOWN\b).*?\b) id.* FRIENDLY DECK -> FRIENDLY GRAVEYARD/,
    currentDeckInfoLines: /\[Decks\].*/gm,
    playerConceded: /\[Power\] GameState.DebugPrintPower\(\) - TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=CONCEDED/,
    playerWon: /\[Power\] GameState.DebugPrintPower\(\) - TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=WON/,
    playerTied: /\[Power\] GameState.DebugPrintPower\(\) - TAG_CHANGE Entity=(.*) tag=PLAYSTATE value=TIED/
}

module.exports = LogRegExr;