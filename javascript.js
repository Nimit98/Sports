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
        let output = ''
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
        let output = ''
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
        document.getElementById('score2').innerHTML = data.matches[189].score.fullTime.homeTeam + ":" + data.matches[189].score.fullTime.awayTeam
    })
    .catch(err => {
        console.log(err);
    });


function display(value) {
    if (value == 'Liverpool')
        id = 64
    else if (value == 'Real Madrid')
        id = 86
    else if (value == 'Manchester City')
        id = 65
    else if (value == 'Manchester Utd')
        id = 66
    else if (value == 'Chelsea')
        id = 61

    fetch("http://api.football-data.org/v2/teams/" + id, {
        "method": "GET",
        "headers": {
            "X-Auth-Token": "3b37f88844ae41d7bbef11781c0c5c42",
        }
    })
        .then(res => res.json())
        .then(data => {
            let output = ''
            data.squad.forEach(function (player) {
                output += `
                    <ul>
                        <li>${player.name}</li>
                    </ul>
                `
                document.getElementById('team-output').innerHTML = output
            })
        })

}

async function getData(e) {
    if (e == 'Premier League')
        id = 'PL'
    else if (e == 'Champions League')
        id = 'CL'
    else if (e == 'Serie A')
        id = 'SA'
    else if (e == 'Bundesliga')
        id = 'BL1'

    var url = 'https://api.football-data.org/v2/competitions/'
    var player = []
    var int = 0
    var goals = []
    var count = []
    var i
    const response2 = await fetch(url + id + '/scorers', {
        "method": "GET",
        "headers": {
            "X-Auth-Token": "3b37f88844ae41d7bbef11781c0c5c42",
        }
    })
    const responseData = await response2.json()
    console.log(responseData)
    for (i = 0; i <= 9; i++) {
        player.push(responseData.scorers[i].player.name)
        goals.push(parseInt(responseData.scorers[i].numberOfGoals))
        count.push(parseInt(int += 2))
    }
    console.log(player)
    console.log(goals)
    console.log(count)
    var ctx = document.getElementById('canvas123').getContext('2d');
    var canvas123 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: player,
            datasets: [
                {
                    label: 'Goals',
                    data: goals,
                    fill: false,
                    backgroundColor: 'rgb(255,0,36,0.8)',
                    borderColor: 'rgb(255,23,23,1)'
                }
            ]
        }
    })
    return responseData
}
function getData2() {

    var goalsFor = []
    var teams = []
    var int = 0
    var goalsConc = []
    var count = []
    var i
    fetch("https://api.football-data.org/v2/competitions/PL/standings", {
        "method": "GET",
        "headers": {
            "X-Auth-Token": "3b37f88844ae41d7bbef11781c0c5c42",
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (i = 0; i < 5; i++) {
                teams.push(data.standings[0].table[i].team.name)
                goalsFor.push(parseInt(data.standings[0].table[i].goalsFor))
                goalsConc.push(parseInt(data.standings[0].table[i].goalsAgainst))
            }
        })
    var ctx = document.getElementById('canvas1234').getContext('2d');
    var canvas1234 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: teams,
            datasets: [
                {
                    label: 'Goals Made',
                    data: goalsFor,
                    fill: false,
                    backgroundColor: 'rgb(255,0,36,0.8)',
                    borderColor: 'rgb(255,23,23,1)'
                },
                {
                    label: 'Goals Conceded',
                    data: goalsConc,
                    fill: false,
                    backgroundColor: 'rgb(25,22,66,0.2)',
                    borderColor: 'rgb(25,22,150,0.2)'
                }
            ]
        }
    })

}