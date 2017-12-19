export function rarityColor(rarity) {
    
         switch(rarity) {
             case "Common": return "white";
             case "Rare": return "#66ccff";
             case "Epic": return "#ff66cc";
             case "Legendary": return "#ffcc66";
             default: return "white";
         }
         
}


