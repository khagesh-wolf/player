
$(document).ready(function () {
    $('.select2').select2();
    $('#saveBlogId').click(function () {
        const blogIdInputValue = $('#blogIdInput').val();
        localStorage.setItem('blogId', blogIdInputValue);
        $('#blogIdModal').modal('hide');
    });


    var teamNamesAndLogos = [

        {
            "name": "Man United",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10260.png"
        },


        {
            "name": "Real Madrid",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8633.png"
        },


        {
            "name": "Man City",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8456.png"
        },



        {
            "name": "Al Nassr FC",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/101918.png"
        },


        {
            "name": "Inter Miami",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/960720.png"
        },

        {
            "name": "Al Hilal",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/2529.png"
        },


        {
            "name": "Arsenal",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9825.png"
        },



        {
            "name": "Wolves",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8602.png"
        },


        {
            "name": "Liverpool",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8650.png"
        },

        {
            "name": "Aston Villa",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10252.png"
        },


        {
            "name": "Tottenham",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8586.png"
        },



        {
            "name": "Newcastle",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10261.png"
        },


        {
            "name": "Brighton",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10204.png"
        },

        {
            "name": "West Ham",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8654.png"
        },


        {
            "name": "Chelsea",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8455.png"
        },



        {
            "name": "Brentford",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9937.png"
        },


        {
            "name": "Crystal Palace",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9826.png"
        },

        {
            "name": "Fulham",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9879.png"
        },


        {
            "name": "Nottingham",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10203.png"
        },


        {
            "name": "AFC Bournemouth",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8678.png"
        },

        {
            "name": "Luton Town",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8346.png"
        },


        {
            "name": "Sheffield United",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8657.png"
        },



        {
            "name": "Girona",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/7732.png"
        },


        {
            "name": "Atletico Madrid",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9906.png"
        },

        {
            "name": "Barcelona",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8634.png"
        },


        {
            "name": "Athletic Club",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8315.png"
        },



        {
            "name": "Real Sociedad",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8560.png"
        },


        {
            "name": "Real Betis",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8603.png"
        },

        {
            "name": "Las Palmas",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8306.png"
        },


        {
            "name": "Valencia",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10267.png"
        },



        {
            "name": "Rayo Vallecano",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8370.png"
        },


        {
            "name": "Getafe",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8305.png"
        },

        {
            "name": "Villarreal",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10205.png"
        },


        {
            "name": "Deportivo Alaves",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9866.png"
        },


        {
            "name": "Osasuna",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8371.png"
        },


        {
            "name": "Sevilla",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8302.png"
        },

        {
            "name": "Cadiz",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8385.png"
        },


        {
            "name": "Mallorca",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8661.png"
        },


        {
            "name": "Celta Vigo",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9910.png"
        },


        {
            "name": "Granada",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/7878.png"
        },

        {
            "name": "Almeria",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9865.png"
        },


        {
            "name": "Juventus",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9885.png"
        },

        {
            "name": "Inter",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8636.png"
        },


        {
            "name": "AC Milan",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8564.png"
        },

        {
            "name": "Napoli",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9875.png"
        },


        {
            "name": "Roma",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8686.png"
        },



        {
            "name": "Bologna",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9857.png"
        },


        {
            "name": "Atalanta",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8524.png"
        },

        {
            "name": "Florentina",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8535.png"
        },


        {
            "name": "Lazio",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8543.png"
        },



        {
            "name": "Frosinone",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9891.png"
        },


        {
            "name": "Monza",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/6504.png"
        },

        {
            "name": "Torino",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9804.png"
        },


        {
            "name": "Lecce",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9888.png"
        },



        {
            "name": "Sassuolo",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/7943.png"
        },


        {
            "name": "Genoa",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10233.png"
        },

        {
            "name": "Udinese",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8600.png"
        },


        {
            "name": "Empoli",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8534.png"
        },



        {
            "name": "Cagliari",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8529.png"
        },


        {
            "name": "Hellas Verona",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9876.png"
        },

        {
            "name": "Salernitana",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/6480.png"
        },


        {
            "name": "PSG",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9847.png"
        },



        {
            "name": "Nice",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9831.png"
        },


        {
            "name": "Monaco",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9829.png"
        },

        {
            "name": "Lille",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8639.png"
        },


        {
            "name": "Reims",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9837.png"
        },



        {
            "name": "Lens",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8588.png"
        },


        {
            "name": "Brest",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8521.png"
        },

        {
            "name": "Nantes",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9830.png"
        },


        {
            "name": "Le Havre",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9746.png"
        },



        {
            "name": "Metz",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8550.png"
        },


        {
            "name": "Rennes",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9851.png"
        },

        {
            "name": "Marseille",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8592.png"
        },


        {
            "name": "Montpellier",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10249.png"
        },



        {
            "name": "Toulouse",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9941.png"
        },


        {
            "name": "Strasbourg",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9848.png"
        },

        {
            "name": "Lorient",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8689.png"
        },


        {
            "name": "Clermont",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8311.png"
        },



        {
            "name": "Lyon",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9748.png"
        },



        {
            "name": "Burnley",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8191.png"
        },

        {
            "name": "Nepal",
            "logo": "https://aimages.willow.tv/teamLogos/nepal.png"
        },

        {
            "name": "India",
            "logo": "https://aimages.willow.tv/teamLogos/india.png"
        },

        {
            "name": "Australia",
            "logo": "https://aimages.willow.tv/teamLogos/australia.png"
        },

        {
            "name": "Bangladesh",
            "logo": "https://aimages.willow.tv/teamLogos/bangladesh.png"
        },

        {
            "name": "New Zealand",
            "logo": "https://aimages.willow.tv/teamLogos/newzealand.png"
        },


        {
            "name": "Afghanistan",
            "logo": "https://aimages.willow.tv/teamLogos/afghanistan.png"
        },


        {
            "name": "Pakistan",
            "logo": "https://aimages.willow.tv/teamLogos/pakistan.png"
        },


        {
            "name": "Sri Lanka",
            "logo": "https://aimages.willow.tv/teamLogos/srilanka.png"
        },


        {
            "name": "England",
            "logo": "https://aimages.willow.tv/teamLogos/england.png"
        },



        {
            "name": "West Indies",
            "logo": "https://aimages.willow.tv/teamLogos/westindies.png"
        },


        {
            "name": "South Africa",
            "logo": "https://aimages.willow.tv/teamLogos/southafrica.png"
        },


        {
            "name": "USA",
            "logo": "https://aimages.willow.tv/teamLogos/usa.png"
        },


        {
            "name": "UAE",
            "logo": "https://aimages.willow.tv/teamLogos/uae.png"
        },


        {
            "name": "Japan",
            "logo": "https://aimages.willow.tv/teamLogos/japan.png"
        },


        {
            "name": "Everton",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8668.png"
        },

        {
            "name": "Al Ahli",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/2530.png"
        },


        {
            "name": "Al Ittihad",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8577.png"
        },



        {
            "name": "Al-Taawoun",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/205686.png"
        },


        {
            "name": "Al Fateh",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/177356.png"
        },

        {
            "name": "Al-Ettifaq",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/101915.png"
        },


        {
            "name": "Damac FC",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/582823.png"
        },



        {
            "name": "Al-Fayha",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/582749.png"
        },


        {
            "name": "Al-Wehda",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/6354.png"
        },

        {
            "name": "Al Taee",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/101917.png"
        },


        {
            "name": "Al Shabab",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/101916.png"
        },



        {
            "name": "Al Riyadh",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/582739.png"
        },


        {
            "name": "Al Khaleej",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/550433.png"
        },

        {
            "name": "Al Akhdoud",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/582759.png"
        },


        {
            "name": "Abha",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/150414.png"
        },



        {
            "name": "Al-Raed",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/150413.png"
        },


        {
            "name": "Al Hazem",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/101911.png"
        },

        {
            "name": "Leverkusen",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8178.png"
        },


        {
            "name": "Bayern",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9823.png"
        },



        {
            "name": "Stuttgart",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/10269.png"
        },


        {
            "name": "RB Leipzig",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/178475.png"
        },
        {
            "name": "Dortmund",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9789.png"
        },


        {
            "name": "Hoffenheim",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8226.png"
        },



        {
            "name": "Frankfurt",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9810.png"
        },


        {
            "name": "Freiburg",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8358.png"
        },

        {
            "name": "Augsburg",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8406.png"
        },


        {
            "name": "M'Gladbach",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9788.png"
        },



        {
            "name": "Wolfsburg",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8721.png"
        },


        {
            "name": "Bochum",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9911.png"
        },
        {
            "name": "W. Bremen",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8697.png"
        },


        {
            "name": "Heidenheim",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/94937.png"
        },



        {
            "name": "FC Koln",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8722.png"
        },


        {
            "name": "Darmstadt",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8262.png"
        },

        {
            "name": "Mainz 05",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/9905.png"
        },


        {
            "name": "Union Berlin",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8149.png"
        },



        {
            "name": "Fiorentina",
            "logo": "https://images.fotmob.com/image_resources/logo/teamlogo/8535.png"
        },

    ];


    var leagueNames = [" Ligue 1", " Premier League", " Bundesliga", " Serie A", " La Liga", " UEFA Champions League", " UEFA Europa League", " African Nations Championship", " AFC Champions League", " Botola Pro", " Serie A Women", " Pro League", " CAF Confederation Cup", " Botola 2"];
    var commentatorNames = [];
    var channelNames = [];

    var homeTeamSelect = document.getElementById('homeTeam');
    var awayTeamSelect = document.getElementById('awayTeam');
    var leagueNameSelect = document.getElementById('leagueName');

    // Load existing data from local storage
    var storedTeamNamesAndLogos = JSON.parse(localStorage.getItem('teamNamesAndLogos'));
    if (storedTeamNamesAndLogos) {
        teamNamesAndLogos = storedTeamNamesAndLogos;
    }

    var storedLeagueNames = JSON.parse(localStorage.getItem('leagueNames'));
    if (storedLeagueNames) {
        leagueNames = storedLeagueNames;
    }

    // Populate select options
    teamNamesAndLogos.forEach(function (team) {
        var homeOption = document.createElement('option');
        homeOption.text = team.name;
        homeTeamSelect.add(homeOption);

        var awayOption = document.createElement('option');
        awayOption.text = team.name;
        awayTeamSelect.add(awayOption);
    });

    leagueNames.forEach(function (league) {
        var option = document.createElement('option');
        option.text = league;
        leagueNameSelect.add(option);
    });

    // Save new team to local storage and update select options
    $('#saveTeamButton').click(function () {
        var newTeamName = $('#newTeamName').val();
        var newTeamLogo = $('#newTeamLogo').val();
        if (newTeamName && newTeamLogo) {
            teamNamesAndLogos.push({ name: newTeamName, logo: newTeamLogo });
            localStorage.setItem('teamNamesAndLogos', JSON.stringify(teamNamesAndLogos));
            var newOption1 = document.createElement('option');
            newOption1.text = newTeamName;
            homeTeamSelect.add(newOption1);
            var newOption2 = document.createElement('option');
            newOption2.text = newTeamName;
            awayTeamSelect.add(newOption2);
            $('#addTeamModal').modal('hide');
        }
    });

    $('#saveLeagueButton').click(function () {
        var newLeagueName = $('#newLeagueName').val();
        if (newLeagueName) {
            leagueNames.push(newLeagueName);
            localStorage.setItem('leagueNames', JSON.stringify(leagueNames));
            var newOption = document.createElement('option');
            newOption.text = newLeagueName;
            leagueNameSelect.add(newOption);
            $('#addLeagueModal').modal('hide');
        }
    });

    function formatISODateTime(dateTime) {
        const offset = new Date().getTimezoneOffset();
        const offsetHours = Math.abs(Math.floor(offset / 70));
        const offsetMinutes = Math.abs(offset % 60);
        const offsetSign = offset >= 0 ? '-' : '+';
        const formattedOffset = `${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;
        const date = new Date(dateTime);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${formattedOffset}`;
    }

    const formattedDate = formatISODateTime("2023-08-19");
    console.log(formattedDate); // Output: 2023-08-19T00:00:00+03:00



    const randomNumbers = Math.floor(Math.random() * 99999);
    console.log(randomNumbers);


    // Function to update the preview div content
    function updatePreview() {
        const homeTeamSelectValue = $('#homeTeam').val();
        const awayTeamSelectValue = $('#awayTeam').val();
        const matchStartValue = $('#matchStart').val();
        const matchEndValue = $('#matchEnd').val();
        const leagueNameSelectValue = $('#leagueName').val();
        const matchResultValue = $('#matchResult').val();
        const postLinkValue = $('#postLink').val();

        const formattedMatchStart = formatISODateTime(matchStartValue);
        const formattedMatchEnd = formatISODateTime(matchEndValue);

        const now = new Date().toISOString();

        const homeTeam = teamNamesAndLogos.find(team => team.name === homeTeamSelectValue);
        const awayTeam = teamNamesAndLogos.find(team => team.name === awayTeamSelectValue);

        const previewHtml = `

<!-- ${homeTeamSelectValue} vs ${awayTeamSelectValue} -->
    <div class="match-event match-${randomNumbers}" data-result="vs">
        <a title="${homeTeamSelectValue} vs ${awayTeamSelectValue}" id="match-${randomNumbers}" href="${postLinkValue}">
            <div id="overlay-match">
                <div id="watch-match"></div>
            </div>
        <div class="first-team home_team">
            <div class="team-logo"> <img loading="lazy" alt="${homeTeamSelectValue}" height="70" src="${homeTeam.logo}" title="${homeTeamSelectValue}" width="70"> </div>
            <div class="team-name">${homeTeamSelectValue}</div>
        </div>
        <div class="match-time">
            <div class="match-timing matchc-${randomNumbers}">
                <div id="result-now">${matchResultValue}</div>
                <span class="match-date" data-start="${formattedMatchStart}" data-gameends="${formattedMatchEnd}" id="countdownClock" ></span>📅<span class="eventDateInKathmandu"></span>
            </div>
        </div>
        <div class="left-team away_team">
            <div class="team-logo"> <img loading="lazy" alt="${awayTeamSelectValue}" height="70" src="${awayTeam.logo}" title="${awayTeamSelectValue}" width="70"> </div>
            <div class="team-name">${awayTeamSelectValue}</div>
        </div>
  
        <div class="match-info">
            <ul>
                <li class="leaguename"><span><strong>${leagueNameSelectValue}</strong></span></li>
            </ul>
        </div> 
        </a>
    </div>
`;

        $('#preview').html(previewHtml);

        const matchDateElement = $('.match-date');
        const matchEventElement = $('.match-event');

        const n = moment(formattedMatchStart, "YYYY-MM-DDTHH:mm:ssZ");
        const m = moment(formattedMatchEnd, "YYYY-MM-DDTHH:mm:ssZ");
        const d = moment(now, "YYYY-MM-DDTHH:mm:ssZ");
        const r = n.diff(d, "minutes");
        const i = m.diff(d, "minutes") + 0;

        if (30 < r) {
            matchDateElement.html("Upcoming").addClass("not-start");
        } else if (0 < r) {
            matchDateElement.html("Start Soon").addClass("soon");
        } else if (0 < i) {
            matchDateElement.html("Live Now").addClass("live");
            matchEventElement.addClass("live");
        } else {
            matchDateElement.html("Match End").addClass("end");
            matchEventElement.addClass("end");
        }
    }

    function formatTimeAMPM(dateTime) {
        const formattedTime = moment(dateTime, "YYYY-MM-DDTHH:mm:ssZ").format("h:mm A");
        return formattedTime;
    }




    function updateTextareaWithPreview() {
        const homeTeamSelectValue = $('#homeTeam').val();
        const awayTeamSelectValue = $('#awayTeam').val();
        const matchStartValue = $('#matchStart').val();
        const matchEndValue = $('#matchEnd').val();
        const leagueNameSelectValue = $('#leagueName').val();
        const matchResultValue = $('#matchResult').val();
        const postLinkValue = $('#postLink').val();

        const formattedMatchStart = formatISODateTime(matchStartValue);
        const formattedMatchEnd = formatISODateTime(matchEndValue);

        const now = new Date().toISOString();

        const homeTeam = teamNamesAndLogos.find(team => team.name === homeTeamSelectValue);
        const awayTeam = teamNamesAndLogos.find(team => team.name === awayTeamSelectValue);

        const previewHtml =

            `<!-- ${homeTeamSelectValue} vs ${awayTeamSelectValue} Start--> 
<div class="match-event" id="tt${randomNumbers}s" data-result="vs"> <a href="${postLinkValue}" title="${homeTeamSelectValue} vs ${awayTeamSelectValue}" > <div id="overlay-match"> <div id="watch-match"></div> </div> <div class="first-team"> <div class="team-logo"> <img loading="lazy" alt="${homeTeamSelectValue}" height="70" src="${homeTeam.logo}" title="${homeTeamSelectValue}" width="70"> </div> <div class="team-name">${homeTeamSelectValue}</div> </div> <div class="match-time" > <div class="match-timing"> <div id="result-now">${matchResultValue}</div> <span id="mj${randomNumbers}s" class="match-date" data-start="${formattedMatchStart}" data-gameends="${formattedMatchEnd}"></span>📅
<span class="eventDateInKathmandu"></span> </div> </div> <div class="left-team"> <div class="team-logo"> <img loading="lazy" alt="${awayTeamSelectValue}" height="70" src="${awayTeam.logo}" title="${awayTeamSelectValue}" width="70"> </div> <div class="team-name">${awayTeamSelectValue}</div></div><div class="match-info"><ul><li class="leaguename"><span><strong>${leagueNameSelectValue}</strong></span></li></ul></div></a></div>
<!-- ${homeTeamSelectValue} vs ${awayTeamSelectValue} End-->`;


        $('#code').val(previewHtml);
    }






    // Add event listeners to form fields
    $('#homeTeam, #awayTeam, #matchStart, #matchEnd, #leagueName, #channelName, #commentatorName, #matchResult, #postLink').change(function () {
        updatePreview();
        updateTextareaWithPreview();

    });

});



function updateMatchEnd() {
    var matchStartInput = document.getElementById("matchStart");
    var matchEndInput = document.getElementById("matchEnd");

    if (matchStartInput.value) {
        var matchStartDateTime = new Date(matchStartInput.value);
        matchStartDateTime.setUTCHours(matchStartDateTime.getUTCHours() + 3);
        matchEndInput.value = matchStartDateTime.toISOString().slice(0, 16);
    }
}

// Get the datetime-local input elements by their IDs
const matchStartInput = document.getElementById('matchStart');
const matchEndInput = document.getElementById('matchEnd');

// Get the current date and time
const currentDateTime = new Date();


// Format the date and time in ISO 8601 format (YYYY-MM-DDTHH:MM)
const isoFormattedDateTime = currentDateTime.toISOString().slice(0, 16);

// Set the values of the datetime-local input elements
matchStartInput.value = isoFormattedDateTime;
matchEndInput.value = isoFormattedDateTime;
