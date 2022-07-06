function points(games) {
    let total = 0;
    for (let i = 0; i < games.length; i++) {
        //destructure array.
        const item = games[i].split(':');
        // `games[i].split(':');` - creates array that will be destructured
        const x = item[0];
        const y = item[1];
        if (x > y) total += 3;
        if (x < y) total += 0;
        if ( x == y) total += 1;
    }
     return total;
    }