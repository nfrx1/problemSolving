var winningPlayerCount = function(n, pick) {
    let result = 0;
    
    let counts = Array.from({ length: n }, () => Array(11).fill(0));
    
    for (let [player, color] of pick) {
        counts[player][color]++;
    }
    
    for (let i = 0; i < n; i++) {
        let maxBallsOfSameColor = Math.max(...counts[i]);
        if (maxBallsOfSameColor > i) {
            result++;
        }
    }
    
    return result;
};
