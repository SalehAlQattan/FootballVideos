const outputPremierleague = document.getElementById('output-premierleague');
const outputLaliga = document.getElementById('output-laliga');
const outputSeriea = document.getElementById('output-seriea');
const bundesliga = document.getElementById('output-bundesliga');

// ENGLAND: Premier League Data
fetch('https://www.scorebat.com/video-api/v1/')
   .then(res => res.json())
   .then(matches => {
      matches.forEach(match => {
         if (match.competition.name === 'ENGLAND: Premier League') {
            outputPremierleague.innerHTML += `
            <div class="match">
               <h1 class="match__heading">${match.title}</h1>
               <p class="match__date">${match.date}</p>
               ${match.embed}
            </div>   
            
            `;
         }
      });
   });

// SPAIN: La Liga

fetch('https://www.scorebat.com/video-api/v1/')
   .then(res => res.json())
   .then(matches => {
      matches.forEach(match => {
         if (match.competition.name === 'SPAIN: La Liga') {
            outputLaliga.innerHTML += `
            <div class="match">
               <h1 class="match__heading">${match.title}</h1>
               <p class="match__date">${match.date}</p>
               ${match.embed}
            </div>   
            
            `;
         }
      });
   });

// ITALY: Serie A

fetch('https://www.scorebat.com/video-api/v1/')
   .then(res => res.json())
   .then(matches => {
      matches.forEach(match => {
         if (match.competition.name === 'ITALY: Serie A') {
            outputSeriea.innerHTML += `
            <div class="match">
               <h1 class="match__heading">${match.title}</h1>
               <p class="match__date">${match.date}</p>
               ${match.embed}
            </div>   
            
            `;
         }
      });
   });

// GERMANY: Bundesliga

fetch('https://www.scorebat.com/video-api/v1/')
   .then(res => res.json())
   .then(matches => {
      matches.forEach(match => {
         if (match.competition.name === 'GERMANY: Bundesliga') {
            bundesliga.innerHTML += `
            <div class="match">
               <h1 class="match__heading">${match.title}</h1>
               <p class="match__date">${match.date}</p>
               ${match.embed}
            </div>   
            
            `;
         }
      });
   });
