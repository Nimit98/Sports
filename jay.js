fetch("https://api.football-data.org/v2/matches", {
  "method": "GET",
  "headers": {
    "X-Auth-Token": "1c62f8049db5459a877a18dd638925dd"
  }
})
.then(response => response.json())
.then(data =>{

      var output = data.matches
      document.getElementById('teamA').innerHTML = output[0].homeTeam.name
      document.getElementById('teamB').innerHTML = output[0].awayTeam.name
      document.getElementById('hello1').innerHTML = output[0].utcDate.substring(11,19)

      document.getElementById('teamC').innerHTML = output[1].homeTeam.name
      document.getElementById('teamD').innerHTML = output[1].awayTeam.name
      document.getElementById('hello2').innerHTML = output[1].utcDate.substring(11,19)

      document.getElementById('teamE').innerHTML = output[2].homeTeam.name
      document.getElementById('teamF').innerHTML = output[2].awayTeam.name
      document.getElementById('hello3').innerHTML = output[2].utcDate.substring(11,19)

      document.getElementById('teamG').innerHTML = output[3].homeTeam.name
      document.getElementById('teamH').innerHTML = output[3].awayTeam.name
      document.getElementById('hello4').innerHTML = output[3].utcDate.substring(11,19)

      document.getElementById('teamI').innerHTML = output[4].homeTeam.name
      document.getElementById('teamJ').innerHTML = output[4].awayTeam.name
      document.getElementById('hello5').innerHTML = output[4].utcDate.substring(11,19)

      document.getElementById('teamK').innerHTML = output[5].homeTeam.name
      document.getElementById('teamL').innerHTML = output[5].awayTeam.name
      document.getElementById('hello6').innerHTML = output[5].utcDate.substring(11,19)

      document.getElementById('teamM').innerHTML = output[6].homeTeam.name
      document.getElementById('teamN').innerHTML = output[6].awayTeam.name
      document.getElementById('hello7').innerHTML = output[6].utcDate.substring(11,19)

      document.getElementById('teamO').innerHTML = output[7].homeTeam.name
      document.getElementById('teamP').innerHTML = output[7].awayTeam.name
      document.getElementById('hello8').innerHTML = output[7].utcDate.substring(11,19)





   console.log(output)

 })
.catch(err => {
  console.log(err);
});


fetch("https://api.football-data.org/v2/competitions/CL/scorers", {
  "method": "GET",
  "headers": {
    "X-Auth-Token": "1c62f8049db5459a877a18dd638925dd"
  }
})
.then(response => response.json())
.then(data =>{
  console.log(data)
  let output
  data.scorers.forEach(function (stat) {

    output+=`
    <tr>
          <th>${stat.player.name}</th>
          <th>${stat.team.name}</th>
          <th>${stat.numberOfGoals}</th>
          </tr>
          `

    document.getElementById('new_row').innerHTML = output})














})
.catch(err => {
 console.log(err);
});
