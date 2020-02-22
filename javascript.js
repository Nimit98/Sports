var output

fetch("https://api.football-data.org/v2/matches", {
    "method": "GET",
    "headers": {
        "X-Auth-Token": "3b37f88844ae41d7bbef11781c0c5c42",
    }
})
    .then(response => response.json())
    .then(data => {
        output = data.matches
        document.getElementById('team1').innerHTML = output[0].homeTeam.name
        document.getElementById('team2').innerHTML = output[0].awayTeam.name
        //console.log(output)
    })
    .catch(err => {
        console.log(err);
    });
fetch("https://api.football-data.org/v2/competitions/PL/standings", {
    "method": "GET",
    "headers": {
        "X-Auth-Token": "3b37f88844ae41d7bbef11781c0c5c42",
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let output
        data.standings[0].table.forEach(function (stat) {
            output += `
            <tr>
                <th>${stat.position}</th>
                <th>${stat.team.name}</th>
                <th>${stat.won}</th>
                <th>${stat.lost}</th>
                <th>${stat.draw}</th>
                <th>${stat.points}</th>  
                </tr>
            `
            document.getElementById('new_rowPL').innerHTML = output
        })
    })
    .catch(err => {
        console.log(err);
    });
fetch("https://api.football-data.org/v2/competitions/CL/standings", {
    "method": "GET",
    "headers": {
        "X-Auth-Token": "3b37f88844ae41d7bbef11781c0c5c42",
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let output
        data.standings[0].table.forEach(function (stat) {
            output += `
            <tr>
                <th>${stat.position}</th>
                <th>${stat.team.name}</th>
                <th>${stat.won}</th>
                <th>${stat.lost}</th>
                <th>${stat.draw}</th>
                <th>${stat.points}</th>  
                </tr>
            `
            document.getElementById('new_rowCL').innerHTML = output
        })
    })
    .catch(err => {
        console.log(err);
    });

fetch("https://api.football-data.org/v2/competitions/CL/matches?status=FINISHED", {
    "method": "GET",
    "headers": {
        "X-Auth-Token": "3b37f88844ae41d7bbef11781c0c5c42",
    }
})
    .then(response => response.json())
    .then(data => {
        document.getElementById('TeamA0').innerHTML = data.matches[187].homeTeam.name
        document.getElementById('TeamB0').innerHTML = data.matches[187].awayTeam.name
        document.getElementById('score0').innerHTML = data.matches[187].score.fullTime.homeTeam + ":" + data.matches[187].score.fullTime.awayTeam
        document.getElementById('TeamA1').innerHTML = data.matches[188].homeTeam.name
        document.getElementById('TeamB1').innerHTML = data.matches[188].awayTeam.name
        document.getElementById('score1').innerHTML = data.matches[188].score.fullTime.homeTeam + ":" + data.matches[188].score.fullTime.awayTeam
        document.getElementById('TeamA2').innerHTML = data.matches[189].homeTeam.name
        document.getElementById('TeamB2').innerHTML = data.matches[189].awayTeam.name
        document.getElementById('score2').innerHTML = data.matches[188].score.fullTime.homeTeam + ":" + data.matches[188].score.fullTime.awayTeam
    })
    .catch(err => {
        console.log(err);
    });
