const Team = {
    _players: [{
        firstName: 'Van',
        lastName: 'Basnten',
        age: 29
    }, {
        firstName: 'Van',
        lastName: 'Persie',
        age: 30
    }, {
        firstName: 'Van',
        lastName: 'Der Saar',
        age: 25
    }],

    _games: [{
        opponent: 'England',
        teamPoints: 2,
        opponentPoints: 1
    }, {
        opponent: 'Brazil',
        teamPoints: 0,
        opponentPoints: 0
    }, {
        opponent: 'Serbia',
        teamPoints: 3,
        opponentPoints: 0
    }],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }

        this._players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }

        this._games.push(game);
    }
}



Team.addPlayer('Steph', 'Curry', 29);
Team.addPlayer('Lisa', 'Leslie', 44);
Team.addPlayer('Bugs', 'Bunny', 76);
Team.addGame('Belgium', 2, 0);
Team.addGame('Germany', 4, 4);
Team.addGame('France', 0, 3);
console.log(Team.games);
