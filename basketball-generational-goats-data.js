const players = [
  {
    "id": "mikange01",
    "name": "George Mikan",
    "pos": "C",
    "base": true,
    "team": "Lakers",
    "era": "1948-56",
    "c": {
      "career": "7 seasons",
      "games": 439,
      "ppg": 23.1,
      "rpg": 13.4,
      "apg": 2.8,
      "fg": 40.4,
      "three": null,
      "ft": 78.2,
      "stl": null,
      "blk": null
    },
    "b": {
      "season": "1950-51",
      "ppg": 28.4,
      "rpg": 14.1,
      "apg": 3.1,
      "fg": 42.8,
      "three": null,
      "ft": 80.3,
      "stl": null,
      "blk": null
    },
    "p": {
      "start": "1948-49",
      "end": "1953-54",
      "games": 400,
      "ppg": 24.7,
      "rpg": 13.9,
      "apg": 2.8,
      "fg": 40.5,
      "three": null,
      "ft": 78.4,
      "stl": null,
      "blk": null
    },
    "a": {
      "champ": 5,
      "mvp": 0,
      "allstar": 4,
      "allnba": 6,
      "alldef": null,
      "dpoy": null,
      "anniv": 4,
      "annivText": "25th, 35th, 50th, 75th"
    },
    "gen": "Founding era",
    "active": false
  },
  {
    "id": "russell01",
    "name": "Bill Russell",
    "pos": "C",
    "base": true,
    "team": "Celtics",
    "era": "1956-69",
    "c": {
      "career": "13 seasons",
      "games": 963,
      "ppg": 15.1,
      "rpg": 22.5,
      "apg": 4.3,
      "fg": 44,
      "three": null,
      "ft": 56.1,
      "stl": null,
      "blk": null
    },
    "b": {
      "season": "1961-62",
      "ppg": 18.9,
      "rpg": 23.6,
      "apg": 4.5,
      "fg": 45.7,
      "three": null,
      "ft": 59.5,
      "stl": null,
      "blk": null
    },
    "p": {
      "start": "1958-59",
      "end": "1964-65",
      "games": 529,
      "ppg": 16.8,
      "rpg": 23.8,
      "apg": 4.4,
      "fg": 44.8,
      "three": null,
      "ft": 57,
      "stl": null,
      "blk": null
    },
    "a": {
      "champ": 11,
      "mvp": 5,
      "allstar": 12,
      "allnba": 11,
      "alldef": 1,
      "dpoy": null,
      "anniv": 4,
      "annivText": "25th, 35th, 50th, 75th"
    },
    "gen": "Russell-Wilt era",
    "active": false
  },
  {
    "id": "chambwi01",
    "name": "Wilt Chamberlain",
    "pos": "C",
    "base": true,
    "team": "Warriors / 76ers / Lakers",
    "era": "1959-73",
    "c": {
      "career": "14 seasons",
      "games": 1045,
      "ppg": 30.1,
      "rpg": 22.9,
      "apg": 4.4,
      "fg": 54,
      "three": null,
      "ft": 51.1,
      "stl": null,
      "blk": null
    },
    "b": {
      "season": "1961-62",
      "ppg": 50.4,
      "rpg": 25.7,
      "apg": 2.4,
      "fg": 50.6,
      "three": null,
      "ft": 61.3,
      "stl": null,
      "blk": null
    },
    "p": {
      "start": "1959-60",
      "end": "1965-66",
      "games": 542,
      "ppg": 39.6,
      "rpg": 24.8,
      "apg": 3.2,
      "fg": 51.1,
      "three": null,
      "ft": 52.4,
      "stl": null,
      "blk": null
    },
    "a": {
      "champ": 2,
      "mvp": 4,
      "allstar": 13,
      "allnba": 10,
      "alldef": 2,
      "dpoy": null,
      "anniv": 4,
      "annivText": "25th, 35th, 50th, 75th"
    },
    "gen": "Russell-Wilt era",
    "active": false
  },
  {
    "id": "roberos01",
    "name": "Oscar Robertson",
    "pos": "PG",
    "base": false,
    "team": "Royals / Bucks",
    "era": "1960-74",
    "c": {
      "career": "14 seasons",
      "games": 1040,
      "ppg": 25.7,
      "rpg": 7.5,
      "apg": 9.5,
      "fg": 48.5,
      "three": null,
      "ft": 83.8,
      "stl": null,
      "blk": null
    },
    "b": {
      "season": "1961-62",
      "ppg": 30.8,
      "rpg": 12.5,
      "apg": 11.4,
      "fg": 47.8,
      "three": null,
      "ft": 80.3,
      "stl": null,
      "blk": null
    },
    "p": {
      "start": "1960-61",
      "end": "1966-67",
      "games": 539,
      "ppg": 30.4,
      "rpg": 9.4,
      "apg": 10.7,
      "fg": 48.5,
      "three": null,
      "ft": 83.5,
      "stl": null,
      "blk": null
    },
    "a": {
      "champ": 1,
      "mvp": 1,
      "allstar": 12,
      "allnba": 11,
      "alldef": 0,
      "dpoy": null,
      "anniv": 3,
      "annivText": "35th, 50th, 75th"
    },
    "gen": "1960s superstar era",
    "active": false
  },
  {
    "id": "westje01",
    "name": "Jerry West",
    "pos": "PG/SG",
    "base": false,
    "team": "Lakers",
    "era": "1960-74",
    "c": {
      "career": "14 seasons",
      "games": 932,
      "ppg": 27,
      "rpg": 5.8,
      "apg": 6.7,
      "fg": 47.4,
      "three": null,
      "ft": 81.4,
      "stl": null,
      "blk": null
    },
    "b": {
      "season": "1965-66",
      "ppg": 31.3,
      "rpg": 7.1,
      "apg": 6.1,
      "fg": 47.3,
      "three": null,
      "ft": 86,
      "stl": null,
      "blk": null
    },
    "p": {
      "start": "1961-62",
      "end": "1969-70",
      "games": 495,
      "ppg": 30,
      "rpg": 6.4,
      "apg": 6,
      "fg": 47.5,
      "three": null,
      "ft": 82.4,
      "stl": null,
      "blk": null
    },
    "a": {
      "champ": 1,
      "mvp": 0,
      "allstar": 14,
      "allnba": 12,
      "alldef": 5,
      "dpoy": null,
      "anniv": 4,
      "annivText": "25th, 35th, 50th, 75th"
    },
    "gen": "1960s superstar era",
    "active": false
  },
  {
    "id": "abdulka01",
    "name": "Kareem Abdul-Jabbar",
    "pos": "C",
    "base": true,
    "team": "Bucks / Lakers",
    "era": "1969-89",
    "c": {
      "career": "20 seasons",
      "games": 1560,
      "ppg": 24.6,
      "rpg": 11.2,
      "apg": 3.6,
      "fg": 55.9,
      "three": 5.6,
      "ft": 72.1,
      "stl": 0.9,
      "blk": 2.6
    },
    "b": {
      "season": "1971-72",
      "ppg": 34.8,
      "rpg": 16.6,
      "apg": 4.6,
      "fg": 57.4,
      "three": null,
      "ft": 68.9,
      "stl": null,
      "blk": null
    },
    "p": {
      "start": "1969-70",
      "end": "1975-76",
      "games": 560,
      "ppg": 30.4,
      "rpg": 15.3,
      "apg": 4.3,
      "fg": 55.2,
      "three": null,
      "ft": 70.1,
      "stl": 1.2,
      "blk": 3.8
    },
    "a": {
      "champ": 6,
      "mvp": 6,
      "allstar": 19,
      "allnba": 15,
      "alldef": 11,
      "dpoy": 0,
      "anniv": 4,
      "annivText": "35th, 50th, 75th"
    },
    "gen": "1970s-to-80s bridge",
    "active": false
  },
  {
    "id": "ervinju01",
    "name": "Julius Erving",
    "pos": "SF",
    "base": false,
    "team": "76ers",
    "era": "1976-87",
    "c": {
      "career": "11 pro seasons",
      "games": 836,
      "ppg": 22,
      "rpg": 6.7,
      "apg": 3.9,
      "fg": 50.7,
      "three": 26.1,
      "ft": 77.7,
      "stl": 1.8,
      "blk": 1.5
    },
    "b": {
      "season": "1980-81",
      "ppg": 24.6,
      "rpg": 8,
      "apg": 4.4,
      "fg": 52.1,
      "three": 22.2,
      "ft": 78.7,
      "stl": 2.1,
      "blk": 1.8
    },
    "p": {
      "start": "1976-77",
      "end": "1982-83",
      "games": 557,
      "ppg": 23.4,
      "rpg": 7.2,
      "apg": 4,
      "fg": 51,
      "three": 26.4,
      "ft": 78.3,
      "stl": 2,
      "blk": 1.7
    },
    "a": {
      "champ": 1,
      "mvp": 1,
      "allstar": 11,
      "allnba": 7,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 3,
      "annivText": "35th, 50th, 75th"
    },
    "gen": "Merger era",
    "active": false
  },
  {
    "id": "malonmo01",
    "name": "Moses Malone",
    "pos": "C",
    "base": false,
    "team": "Rockets / 76ers / Hawks +",
    "era": "1976-95",
    "c": {
      "career": "19 seasons",
      "games": 1329,
      "ppg": 20.6,
      "rpg": 12.2,
      "apg": 1.4,
      "fg": 49.5,
      "three": 9.6,
      "ft": 76,
      "stl": 0.8,
      "blk": 1.3
    },
    "b": {
      "season": "1981-82",
      "ppg": 31.1,
      "rpg": 14.7,
      "apg": 1.8,
      "fg": 51.9,
      "three": 0,
      "ft": 76.2,
      "stl": 0.9,
      "blk": 1.5
    },
    "p": {
      "start": "1978-79",
      "end": "1984-85",
      "games": 552,
      "ppg": 26.4,
      "rpg": 14.7,
      "apg": 1.6,
      "fg": 50.9,
      "three": 5.6,
      "ft": 75.8,
      "stl": 0.9,
      "blk": 1.6
    },
    "a": {
      "champ": 1,
      "mvp": 3,
      "allstar": 12,
      "allnba": 8,
      "alldef": 2,
      "dpoy": 0,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Merger era",
    "active": false
  },
  {
    "id": "johnsma02",
    "name": "Magic Johnson",
    "pos": "PG",
    "base": true,
    "team": "Lakers",
    "era": "1979-96",
    "c": {
      "career": "13 seasons",
      "games": 906,
      "ppg": 19.5,
      "rpg": 7.2,
      "apg": 11.2,
      "fg": 52,
      "three": 30.3,
      "ft": 84.8,
      "stl": 1.9,
      "blk": 0.4
    },
    "b": {
      "season": "1986-87",
      "ppg": 23.9,
      "rpg": 6.3,
      "apg": 12.2,
      "fg": 52.2,
      "three": 20.5,
      "ft": 84.8,
      "stl": 1.7,
      "blk": 0.5
    },
    "p": {
      "start": "1982-83",
      "end": "1990-91",
      "games": 538,
      "ppg": 20.2,
      "rpg": 7.1,
      "apg": 12.1,
      "fg": 52,
      "three": 31.7,
      "ft": 86.5,
      "stl": 1.8,
      "blk": 0.4
    },
    "a": {
      "champ": 5,
      "mvp": 3,
      "allstar": 12,
      "allnba": 10,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Bird-Magic 1980s",
    "active": false
  },
  {
    "id": "birdla01",
    "name": "Larry Bird",
    "pos": "SF/PF",
    "base": true,
    "team": "Celtics",
    "era": "1979-92",
    "c": {
      "career": "13 seasons",
      "games": 897,
      "ppg": 24.3,
      "rpg": 10,
      "apg": 6.3,
      "fg": 49.6,
      "three": 37.6,
      "ft": 88.6,
      "stl": 1.7,
      "blk": 0.8
    },
    "b": {
      "season": "1987-88",
      "ppg": 29.9,
      "rpg": 9.3,
      "apg": 6.1,
      "fg": 52.7,
      "three": 41.4,
      "ft": 91.6,
      "stl": 1.6,
      "blk": 0.8
    },
    "p": {
      "start": "1981-82",
      "end": "1987-88",
      "games": 542,
      "ppg": 26.2,
      "rpg": 10.1,
      "apg": 6.7,
      "fg": 50.5,
      "three": 39.1,
      "ft": 89.2,
      "stl": 1.8,
      "blk": 0.9
    },
    "a": {
      "champ": 3,
      "mvp": 3,
      "allstar": 12,
      "allnba": 10,
      "alldef": 3,
      "dpoy": 0,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Bird-Magic 1980s",
    "active": false
  },
  {
    "id": "jordami01",
    "name": "Michael Jordan",
    "pos": "SG",
    "base": true,
    "team": "Bulls / Wizards",
    "era": "1984-2003",
    "c": {
      "career": "15 seasons",
      "games": 1072,
      "ppg": 30.1,
      "rpg": 6.2,
      "apg": 5.3,
      "fg": 49.7,
      "three": 32.7,
      "ft": 83.5,
      "stl": 2.3,
      "blk": 0.8
    },
    "b": {
      "season": "1987-88",
      "ppg": 35,
      "rpg": 5.5,
      "apg": 5.9,
      "fg": 53.5,
      "three": 13.2,
      "ft": 84.1,
      "stl": 3.2,
      "blk": 1.6
    },
    "p": {
      "start": "1986-87",
      "end": "1992-93",
      "games": 550,
      "ppg": 33.2,
      "rpg": 6.4,
      "apg": 6,
      "fg": 51.8,
      "three": 30.2,
      "ft": 84.3,
      "stl": 2.8,
      "blk": 1
    },
    "a": {
      "champ": 6,
      "mvp": 5,
      "allstar": 14,
      "allnba": 11,
      "alldef": 9,
      "dpoy": 1,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Jordan 1990s",
    "active": false
  },
  {
    "id": "olajuha01",
    "name": "Hakeem Olajuwon",
    "pos": "C",
    "base": false,
    "team": "Rockets / Raptors",
    "era": "1984-2002",
    "c": {
      "career": "18 seasons",
      "games": 1238,
      "ppg": 21.8,
      "rpg": 11.1,
      "apg": 2.5,
      "fg": 51.2,
      "three": 20.2,
      "ft": 71.2,
      "stl": 1.7,
      "blk": 3.1
    },
    "b": {
      "season": "1992-93",
      "ppg": 26.1,
      "rpg": 13,
      "apg": 3.5,
      "fg": 52.9,
      "three": 0,
      "ft": 77.9,
      "stl": 1.8,
      "blk": 4.2
    },
    "p": {
      "start": "1988-89",
      "end": "1994-95",
      "games": 555,
      "ppg": 25.3,
      "rpg": 12.7,
      "apg": 3,
      "fg": 51.5,
      "three": 14.3,
      "ft": 76.5,
      "stl": 1.9,
      "blk": 3.9
    },
    "a": {
      "champ": 2,
      "mvp": 1,
      "allstar": 12,
      "allnba": 12,
      "alldef": 9,
      "dpoy": 2,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Jordan 1990s",
    "active": false
  },
  {
    "id": "barklch01",
    "name": "Charles Barkley",
    "pos": "PF",
    "base": false,
    "team": "76ers / Suns / Rockets",
    "era": "1984-2000",
    "c": {
      "career": "16 seasons",
      "games": 1073,
      "ppg": 22.1,
      "rpg": 11.7,
      "apg": 3.9,
      "fg": 54.1,
      "three": 26.6,
      "ft": 73.5,
      "stl": 1.5,
      "blk": 0.8
    },
    "b": {
      "season": "1987-88",
      "ppg": 28.3,
      "rpg": 11.9,
      "apg": 3.2,
      "fg": 58.7,
      "three": 28,
      "ft": 75.1,
      "stl": 1.3,
      "blk": 1.3
    },
    "p": {
      "start": "1986-87",
      "end": "1992-93",
      "games": 533,
      "ppg": 25.2,
      "rpg": 12,
      "apg": 4.2,
      "fg": 58.1,
      "three": 27,
      "ft": 74.1,
      "stl": 1.5,
      "blk": 0.9
    },
    "a": {
      "champ": 0,
      "mvp": 1,
      "allstar": 11,
      "allnba": 11,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Jordan 1990s",
    "active": false
  },
  {
    "id": "malonka01",
    "name": "Karl Malone",
    "pos": "PF",
    "base": false,
    "team": "Jazz / Lakers",
    "era": "1985-2004",
    "c": {
      "career": "19 seasons",
      "games": 1476,
      "ppg": 25,
      "rpg": 10.1,
      "apg": 3.6,
      "fg": 51.6,
      "three": 27.4,
      "ft": 74.2,
      "stl": 1.4,
      "blk": 0.8
    },
    "b": {
      "season": "1989-90",
      "ppg": 31,
      "rpg": 11.1,
      "apg": 2.8,
      "fg": 56.2,
      "three": 37.2,
      "ft": 76.2,
      "stl": 1.5,
      "blk": 0.6
    },
    "p": {
      "start": "1987-88",
      "end": "1994-95",
      "games": 643,
      "ppg": 28.4,
      "rpg": 11.4,
      "apg": 3,
      "fg": 53.1,
      "three": 24.2,
      "ft": 74.7,
      "stl": 1.5,
      "blk": 0.8
    },
    "a": {
      "champ": 0,
      "mvp": 2,
      "allstar": 14,
      "allnba": 14,
      "alldef": 4,
      "dpoy": 0,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Jordan 1990s",
    "active": false
  },
  {
    "id": "robinda01",
    "name": "David Robinson",
    "pos": "C",
    "base": false,
    "team": "Spurs",
    "era": "1989-2003",
    "c": {
      "career": "14 seasons",
      "games": 987,
      "ppg": 21.1,
      "rpg": 10.6,
      "apg": 2.5,
      "fg": 51.8,
      "three": 25,
      "ft": 73.6,
      "stl": 1.4,
      "blk": 3
    },
    "b": {
      "season": "1993-94",
      "ppg": 29.8,
      "rpg": 10.7,
      "apg": 4.8,
      "fg": 50.7,
      "three": 34.5,
      "ft": 74.9,
      "stl": 1.7,
      "blk": 3.3
    },
    "p": {
      "start": "1989-90",
      "end": "1995-96",
      "games": 555,
      "ppg": 26.5,
      "rpg": 11.8,
      "apg": 3.1,
      "fg": 52,
      "three": 26.7,
      "ft": 74.4,
      "stl": 1.6,
      "blk": 3.6
    },
    "a": {
      "champ": 2,
      "mvp": 1,
      "allstar": 10,
      "allnba": 10,
      "alldef": 8,
      "dpoy": 1,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Jordan 1990s",
    "active": false
  },
  {
    "id": "oneasha01",
    "name": "Shaquille O'Neal",
    "pos": "C",
    "base": true,
    "team": "Magic / Lakers / Heat +",
    "era": "1992-2011",
    "c": {
      "career": "19 seasons",
      "games": 1207,
      "ppg": 23.7,
      "rpg": 10.9,
      "apg": 2.5,
      "fg": 58.2,
      "three": 4.5,
      "ft": 52.7,
      "stl": 0.6,
      "blk": 2.3
    },
    "b": {
      "season": "1999-00",
      "ppg": 29.7,
      "rpg": 13.6,
      "apg": 3.8,
      "fg": 57.4,
      "three": 0,
      "ft": 52.4,
      "stl": 0.5,
      "blk": 3
    },
    "p": {
      "start": "1993-94",
      "end": "2001-02",
      "games": 529,
      "ppg": 28.1,
      "rpg": 12,
      "apg": 2.8,
      "fg": 57.7,
      "three": 0,
      "ft": 52.8,
      "stl": 0.7,
      "blk": 2.7
    },
    "a": {
      "champ": 4,
      "mvp": 1,
      "allstar": 15,
      "allnba": 14,
      "alldef": 3,
      "dpoy": 0,
      "anniv": 2,
      "annivText": "50th, 75th"
    },
    "gen": "Post-Jordan 2000s",
    "active": false
  },
  {
    "id": "garneke01",
    "name": "Kevin Garnett",
    "pos": "PF/C",
    "base": false,
    "team": "Timberwolves / Celtics / Nets",
    "era": "1995-2016",
    "c": {
      "career": "21 seasons",
      "games": 1462,
      "ppg": 17.8,
      "rpg": 10,
      "apg": 3.7,
      "fg": 49.7,
      "three": 27.5,
      "ft": 78.9,
      "stl": 1.3,
      "blk": 1.4
    },
    "b": {
      "season": "2003-04",
      "ppg": 24.2,
      "rpg": 13.9,
      "apg": 5,
      "fg": 49.9,
      "three": 25.6,
      "ft": 79.1,
      "stl": 1.5,
      "blk": 2.2
    },
    "p": {
      "start": "1999-00",
      "end": "2006-07",
      "games": 555,
      "ppg": 22.6,
      "rpg": 12.7,
      "apg": 5.1,
      "fg": 49.7,
      "three": 28.5,
      "ft": 78.6,
      "stl": 1.5,
      "blk": 1.8
    },
    "a": {
      "champ": 1,
      "mvp": 1,
      "allstar": 15,
      "allnba": 9,
      "alldef": 12,
      "dpoy": 1,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Post-Jordan 2000s",
    "active": false
  },
  {
    "id": "bryanko01",
    "name": "Kobe Bryant",
    "pos": "SG",
    "base": true,
    "team": "Lakers",
    "era": "1996-2016",
    "c": {
      "career": "20 seasons",
      "games": 1346,
      "ppg": 25,
      "rpg": 5.2,
      "apg": 4.7,
      "fg": 44.7,
      "three": 32.9,
      "ft": 83.7,
      "stl": 1.4,
      "blk": 0.5
    },
    "b": {
      "season": "2005-06",
      "ppg": 35.4,
      "rpg": 5.3,
      "apg": 4.5,
      "fg": 45,
      "three": 34.7,
      "ft": 85,
      "stl": 1.8,
      "blk": 0.4
    },
    "p": {
      "start": "2000-01",
      "end": "2007-08",
      "games": 561,
      "ppg": 29.1,
      "rpg": 5.8,
      "apg": 5.2,
      "fg": 45.4,
      "three": 34.4,
      "ft": 84.7,
      "stl": 1.6,
      "blk": 0.6
    },
    "a": {
      "champ": 5,
      "mvp": 1,
      "allstar": 18,
      "allnba": 15,
      "alldef": 12,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Post-Jordan 2000s",
    "active": false
  },
  {
    "id": "duncati01",
    "name": "Tim Duncan",
    "pos": "PF/C",
    "base": true,
    "team": "Spurs",
    "era": "1997-2016",
    "c": {
      "career": "19 seasons",
      "games": 1392,
      "ppg": 19,
      "rpg": 10.8,
      "apg": 3,
      "fg": 50.6,
      "three": 17.9,
      "ft": 69.6,
      "stl": 0.7,
      "blk": 2.2
    },
    "b": {
      "season": "2002-03",
      "ppg": 23.3,
      "rpg": 12.9,
      "apg": 3.9,
      "fg": 51.3,
      "three": 27.3,
      "ft": 71,
      "stl": 0.7,
      "blk": 2.9
    },
    "p": {
      "start": "1999-00",
      "end": "2006-07",
      "games": 554,
      "ppg": 22.3,
      "rpg": 12,
      "apg": 3.3,
      "fg": 50.7,
      "three": 20.3,
      "ft": 70.6,
      "stl": 0.8,
      "blk": 2.5
    },
    "a": {
      "champ": 5,
      "mvp": 2,
      "allstar": 15,
      "allnba": 15,
      "alldef": 15,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Post-Jordan 2000s",
    "active": false
  },
  {
    "id": "nowitdi01",
    "name": "Dirk Nowitzki",
    "pos": "PF",
    "base": false,
    "team": "Mavericks",
    "era": "1998-2019",
    "c": {
      "career": "21 seasons",
      "games": 1522,
      "ppg": 20.7,
      "rpg": 7.5,
      "apg": 2.4,
      "fg": 47.1,
      "three": 38,
      "ft": 87.9,
      "stl": 0.8,
      "blk": 0.8
    },
    "b": {
      "season": "2005-06",
      "ppg": 26.6,
      "rpg": 9,
      "apg": 2.8,
      "fg": 48,
      "three": 40.6,
      "ft": 90.1,
      "stl": 0.7,
      "blk": 1
    },
    "p": {
      "start": "2000-01",
      "end": "2007-08",
      "games": 557,
      "ppg": 24.9,
      "rpg": 9,
      "apg": 2.8,
      "fg": 47.6,
      "three": 39,
      "ft": 88,
      "stl": 1,
      "blk": 1.1
    },
    "a": {
      "champ": 1,
      "mvp": 1,
      "allstar": 14,
      "allnba": 12,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Global 2000s",
    "active": false
  },
  {
    "id": "wadedw01",
    "name": "Dwyane Wade",
    "pos": "SG",
    "base": false,
    "team": "Heat / Bulls / Cavaliers",
    "era": "2003-19",
    "c": {
      "career": "16 seasons",
      "games": 1054,
      "ppg": 22,
      "rpg": 4.7,
      "apg": 5.4,
      "fg": 48,
      "three": 29.3,
      "ft": 76.5,
      "stl": 1.5,
      "blk": 0.8
    },
    "b": {
      "season": "2008-09",
      "ppg": 30.2,
      "rpg": 5,
      "apg": 7.5,
      "fg": 49.1,
      "three": 31.7,
      "ft": 76.5,
      "stl": 2.2,
      "blk": 1.3
    },
    "p": {
      "start": "2004-05",
      "end": "2011-12",
      "games": 509,
      "ppg": 26.3,
      "rpg": 5.1,
      "apg": 6.4,
      "fg": 48.8,
      "three": 28.8,
      "ft": 76.6,
      "stl": 1.8,
      "blk": 1
    },
    "a": {
      "champ": 3,
      "mvp": 0,
      "allstar": 13,
      "allnba": 8,
      "alldef": 3,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Post-Jordan 2000s",
    "active": false
  },
  {
    "id": "jamesle01",
    "name": "LeBron James",
    "pos": "SF/PF",
    "base": true,
    "team": "Cavaliers / Heat / Lakers",
    "era": "2003-present",
    "c": {
      "career": "23 seasons",
      "games": 1562,
      "ppg": 27.1,
      "rpg": 7.5,
      "apg": 7.4,
      "fg": 50.6,
      "three": 34.9,
      "ft": 73.6,
      "stl": 1.5,
      "blk": 0.7
    },
    "b": {
      "season": "2008-09",
      "ppg": 28.4,
      "rpg": 7.6,
      "apg": 7.2,
      "fg": 48.9,
      "three": 34.4,
      "ft": 78,
      "stl": 1.7,
      "blk": 1.1
    },
    "p": {
      "start": "2005-06",
      "end": "2012-13",
      "games": 549,
      "ppg": 28.3,
      "rpg": 7.5,
      "apg": 7.1,
      "fg": 50.5,
      "three": 34.7,
      "ft": 75.6,
      "stl": 1.7,
      "blk": 0.9
    },
    "a": {
      "champ": 4,
      "mvp": 4,
      "allstar": 22,
      "allnba": 21,
      "alldef": 6,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "LeBron era",
    "active": true
  },
  {
    "id": "duranke01",
    "name": "Kevin Durant",
    "pos": "SF/PF",
    "base": true,
    "team": "SuperSonics / Thunder / Warriors +",
    "era": "2007-present",
    "c": {
      "career": "19 seasons",
      "games": 1123,
      "ppg": 27.2,
      "rpg": 7,
      "apg": 4.4,
      "fg": 50.1,
      "three": 38.7,
      "ft": 88.4,
      "stl": 1.1,
      "blk": 1.1
    },
    "b": {
      "season": "2013-14",
      "ppg": 32,
      "rpg": 7.4,
      "apg": 5.5,
      "fg": 50.3,
      "three": 39.1,
      "ft": 87.3,
      "stl": 1.3,
      "blk": 0.7
    },
    "p": {
      "start": "2009-10",
      "end": "2016-17",
      "games": 539,
      "ppg": 29.1,
      "rpg": 7.7,
      "apg": 4.3,
      "fg": 49.3,
      "three": 38.4,
      "ft": 88.7,
      "stl": 1.2,
      "blk": 1.1
    },
    "a": {
      "champ": 2,
      "mvp": 1,
      "allstar": 15,
      "allnba": 11,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Pace-and-space era",
    "active": true
  },
  {
    "id": "curryst01",
    "name": "Stephen Curry",
    "pos": "PG",
    "base": true,
    "team": "Warriors",
    "era": "2009-present",
    "c": {
      "career": "17 seasons",
      "games": 1069,
      "ppg": 24.8,
      "rpg": 4.7,
      "apg": 6.3,
      "fg": 47.1,
      "three": 42.2,
      "ft": 91.2,
      "stl": 1.5,
      "blk": 0.3
    },
    "b": {
      "season": "2015-16",
      "ppg": 30.1,
      "rpg": 5.4,
      "apg": 6.7,
      "fg": 50.4,
      "three": 45.4,
      "ft": 90.8,
      "stl": 2.1,
      "blk": 0.2
    },
    "p": {
      "start": "2014-15",
      "end": "2021-22",
      "games": 485,
      "ppg": 27.1,
      "rpg": 5,
      "apg": 6.4,
      "fg": 47.8,
      "three": 42.4,
      "ft": 91.3,
      "stl": 1.7,
      "blk": 0.2
    },
    "a": {
      "champ": 4,
      "mvp": 2,
      "allstar": 12,
      "allnba": 11,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Pace-and-space era",
    "active": true
  },
  {
    "id": "hardeja01",
    "name": "James Harden",
    "pos": "PG/SG",
    "base": false,
    "team": "Thunder / Rockets / Nets / 76ers / Clippers",
    "era": "2009-present",
    "c": {
      "career": "17 seasons",
      "games": 1221,
      "ppg": 24,
      "rpg": 5.6,
      "apg": 7.3,
      "fg": 43.9,
      "three": 36.4,
      "ft": 86.3,
      "stl": 1.5,
      "blk": 0.6
    },
    "b": {
      "season": "2018-19",
      "ppg": 36.1,
      "rpg": 6.6,
      "apg": 7.5,
      "fg": 44.2,
      "three": 36.8,
      "ft": 87.9,
      "stl": 2,
      "blk": 0.7
    },
    "p": {
      "start": "2012-13",
      "end": "2020-21",
      "games": 502,
      "ppg": 29.9,
      "rpg": 6.4,
      "apg": 8.2,
      "fg": 44.4,
      "three": 36.2,
      "ft": 86.1,
      "stl": 1.8,
      "blk": 0.7
    },
    "a": {
      "champ": 0,
      "mvp": 1,
      "allstar": 11,
      "allnba": 7,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Analytics era",
    "active": true
  },
  {
    "id": "leonaka01",
    "name": "Kawhi Leonard",
    "pos": "SF",
    "base": false,
    "team": "Spurs / Raptors / Clippers",
    "era": "2011-present",
    "c": {
      "career": "15 seasons",
      "games": 696,
      "ppg": 20,
      "rpg": 6.4,
      "apg": 3,
      "fg": 49.7,
      "three": 39.1,
      "ft": 86.2,
      "stl": 1.7,
      "blk": 0.6
    },
    "b": {
      "season": "2016-17",
      "ppg": 25.5,
      "rpg": 5.8,
      "apg": 3.5,
      "fg": 48.5,
      "three": 38,
      "ft": 88,
      "stl": 1.8,
      "blk": 0.7
    },
    "p": {
      "start": "2014-15",
      "end": "2020-21",
      "games": 400,
      "ppg": 23.5,
      "rpg": 6.5,
      "apg": 3.2,
      "fg": 49.6,
      "three": 38.7,
      "ft": 87.3,
      "stl": 1.9,
      "blk": 0.7
    },
    "a": {
      "champ": 2,
      "mvp": 0,
      "allstar": 6,
      "allnba": 6,
      "alldef": 7,
      "dpoy": 2,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Load-management era",
    "active": true
  },
  {
    "id": "antetgi01",
    "name": "Giannis Antetokounmpo",
    "pos": "PF",
    "base": false,
    "team": "Bucks",
    "era": "2013-present",
    "c": {
      "career": "13 seasons",
      "games": 895,
      "ppg": 24.1,
      "rpg": 9.9,
      "apg": 5,
      "fg": 55.4,
      "three": 28.5,
      "ft": 69.1,
      "stl": 1.1,
      "blk": 1.2
    },
    "b": {
      "season": "2019-20",
      "ppg": 29.5,
      "rpg": 13.6,
      "apg": 5.6,
      "fg": 55.3,
      "three": 30.4,
      "ft": 63.3,
      "stl": 1,
      "blk": 1
    },
    "p": {
      "start": "2016-17",
      "end": "2023-24",
      "games": 512,
      "ppg": 29.3,
      "rpg": 11.7,
      "apg": 5.7,
      "fg": 56.1,
      "three": 29,
      "ft": 68.5,
      "stl": 1.2,
      "blk": 1.2
    },
    "a": {
      "champ": 1,
      "mvp": 2,
      "allstar": 10,
      "allnba": 9,
      "alldef": 5,
      "dpoy": 1,
      "anniv": 1,
      "annivText": "75th"
    },
    "gen": "Global modern era",
    "active": true
  },
  {
    "id": "jokicni01",
    "name": "Nikola Jokic",
    "pos": "C",
    "base": true,
    "team": "Nuggets",
    "era": "2015-present",
    "c": {
      "career": "10 seasons",
      "games": 745,
      "ppg": 21.8,
      "rpg": 10.9,
      "apg": 7.2,
      "fg": 55.7,
      "three": 35.9,
      "ft": 82.8,
      "stl": 1.2,
      "blk": 0.7
    },
    "b": {
      "season": "2024-25",
      "ppg": 29.6,
      "rpg": 12.7,
      "apg": 10.2,
      "fg": 57.6,
      "three": 41.7,
      "ft": 80,
      "stl": 1.8,
      "blk": 0.6
    },
    "p": {
      "start": "2018-19",
      "end": "2024-25",
      "games": 517,
      "ppg": 25.5,
      "rpg": 11.8,
      "apg": 8.3,
      "fg": 58.2,
      "three": 37.1,
      "ft": 82.4,
      "stl": 1.3,
      "blk": 0.7
    },
    "a": {
      "champ": 1,
      "mvp": 3,
      "allstar": 7,
      "allnba": 7,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 0,
      "annivText": "None"
    },
    "gen": "Skill-big modern era",
    "active": true
  },
  {
    "id": "doncilu01",
    "name": "Luka Doncic",
    "pos": "PG/SG",
    "base": false,
    "team": "Mavericks / Lakers",
    "era": "2018-present",
    "c": {
      "career": "8 seasons",
      "games": 519,
      "ppg": 28.6,
      "rpg": 8.6,
      "apg": 8.2,
      "fg": 47.1,
      "three": 34.8,
      "ft": 75.1,
      "stl": 1.2,
      "blk": 0.5
    },
    "b": {
      "season": "2023-24",
      "ppg": 33.9,
      "rpg": 9.2,
      "apg": 9.8,
      "fg": 48.7,
      "three": 38.2,
      "ft": 78.6,
      "stl": 1.4,
      "blk": 0.5
    },
    "p": {
      "start": "2019-20",
      "end": "2025-26",
      "games": 447,
      "ppg": 29.6,
      "rpg": 8.8,
      "apg": 8.6,
      "fg": 47.4,
      "three": 35.2,
      "ft": 75.6,
      "stl": 1.2,
      "blk": 0.5
    },
    "a": {
      "champ": 0,
      "mvp": 0,
      "allstar": 7,
      "allnba": 5,
      "alldef": 0,
      "dpoy": 0,
      "anniv": 0,
      "annivText": "None"
    },
    "gen": "Still-building era",
    "active": true
  },
  {
    "id": "wembavi01",
    "name": "Victor Wembanyama",
    "pos": "C/PF",
    "base": false,
    "team": "Spurs",
    "era": "2023-present",
    "c": {
      "career": "3 seasons",
      "games": 117,
      "ppg": 23.7,
      "rpg": 10.9,
      "apg": 3.8,
      "fg": 47.6,
      "three": 34,
      "ft": 82.8,
      "stl": 1.2,
      "blk": 3.7
    },
    "b": {
      "season": "2024-25",
      "ppg": 24.3,
      "rpg": 11,
      "apg": 3.7,
      "fg": 47.6,
      "three": 35.2,
      "ft": 83.6,
      "stl": 1.1,
      "blk": 3.8
    },
    "p": {
      "start": "2023-24",
      "end": "2025-26",
      "games": 117,
      "ppg": 23.7,
      "rpg": 10.9,
      "apg": 3.8,
      "fg": 47.6,
      "three": 34,
      "ft": 82.8,
      "stl": 1.2,
      "blk": 3.7
    },
    "a": {
      "champ": 0,
      "mvp": 0,
      "allstar": 2,
      "allnba": 1,
      "alldef": 1,
      "dpoy": 0,
      "anniv": 0,
      "annivText": "None"
    },
    "gen": "Still-building era",
    "active": true
  }
];

const hofPlayers = new Set(["mikange01","russell01","chambwi01","roberos01","westje01","abdulka01","ervinju01","malonmo01","johnsma02","birdla01","jordami01","olajuha01","barklch01","malonka01","robinda01","oneasha01","garneke01","bryanko01","duncati01","nowitdi01","wadedw01"]);
const rankMetrics = ["games","ppg","rpg","apg","fg","three","ft","stl","blk","champ","mvp","allstar","allnba","alldef","dpoy"];
const fmt = (value, suffix = "") => value == null ? "N/A" : String(value) + suffix;
const cell = (html, cls = "") => "<td" + (cls ? " class=\"" + cls + "\"" : "") + ">" + html + "</td>";
const activeToggle = () => document.querySelector("#activeToggle");
const playerStartYear = player => Number((player.era.match(/^\d{4}/) || [9999])[0]);
const byStartYear = (a, b) => playerStartYear(a) - playerStartYear(b) || players.indexOf(a) - players.indexOf(b);
function selectedPlayers() {
  const checked = new Set([...document.querySelectorAll(".player-check:checked")].map(input => input.value));
  const showActive = activeToggle()?.checked ?? true;
  return players.filter(player => checked.has(player.id) && (showActive || !player.active)).sort(byStartYear);
}
function ranksFor(selected, key, source) {
  const values = selected.map(player => ({ id: player.id, value: source(player)[key] })).filter(item => item.value != null);
  const ordered = [...new Set(values.map(item => item.value))].sort((a, b) => b - a);
  return Object.fromEntries(values.map(item => [item.id, ordered.indexOf(item.value) + 1]));
}
function rankedValue(player, key, source, suffix = "") {
  const value = source(player)[key];
  if (value == null) return "N/A";
  return fmt(value, suffix) + " (" + ranksFor(selectedPlayers(), key, source)[player.id] + ")";
}
function bestIds(selected, key, source, lowIsBest = false) {
  const values = selected.map(player => ({ id: player.id, value: source(player)[key] })).filter(item => item.value != null);
  if (!values.length) return new Set();
  const best = lowIsBest ? Math.min(...values.map(item => item.value)) : Math.max(...values.map(item => item.value));
  return new Set(values.filter(item => item.value === best).map(item => item.id));
}
function dataCells(selected, render, highlight = null) {
  const best = highlight ? bestIds(selected, highlight.key, highlight.source, highlight.lowIsBest) : new Set();
  return selected.map(player => cell(render(player), best.has(player.id) ? "best-cell" : "")).join("");
}
function avgRank(player, selected) {
  const total = rankMetrics.reduce((sum, key) => {
    const source = key in player.c ? p => p.c : p => p.a;
    const value = source(player)[key];
    if (value == null) return sum;
    return sum + ranksFor(selected, key, source)[player.id];
  }, 0);
  const count = rankMetrics.filter(key => (key in player.c ? player.c[key] : player.a[key]) != null).length;
  return (total / count).toFixed(2);
}
function renderHeader(table, selected) {
  table.querySelector("thead").innerHTML = "<tr><th>Category</th>" + selected.map(player => "<th>" + player.name + "<span class=\"era\">" + player.pos + " | " + player.gen + "</span></th>").join("") + "</tr>";
}
function groupRow(label, count) { return "<tr class=\"group-row\"><td colspan=\"" + (count + 1) + "\">" + label + "</td></tr>"; }
function renderCareer(selected) {
  const table = document.querySelector("#careerTable");
  renderHeader(table, selected);
  const rows = [
    ["Team / Era", p => "<span class=\"player\">" + p.team + "<span class=\"era\">" + p.era + " | " + p.gen + "</span></span>"],
    ["Career", p => p.c.career], ["__group", "Offensive Stats"],
    ["Games", p => rankedValue(p,"games",x=>x.c), "", {key:"games",source:x=>x.c}], ["PPG", p => rankedValue(p,"ppg",x=>x.c), "", {key:"ppg",source:x=>x.c}], ["RPG", p => rankedValue(p,"rpg",x=>x.c), "", {key:"rpg",source:x=>x.c}], ["APG", p => rankedValue(p,"apg",x=>x.c), "", {key:"apg",source:x=>x.c}], ["FG%", p => rankedValue(p,"fg",x=>x.c), "", {key:"fg",source:x=>x.c}], ["3P%", p => rankedValue(p,"three",x=>x.c), "", {key:"three",source:x=>x.c}], ["FT%", p => rankedValue(p,"ft",x=>x.c), "", {key:"ft",source:x=>x.c}],
    ["__group", "Defensive Stats"], ["Steals", p => rankedValue(p,"stl",x=>x.c), "", {key:"stl",source:x=>x.c}], ["Blocks", p => rankedValue(p,"blk",x=>x.c), "", {key:"blk",source:x=>x.c}],
    ["__group", "Accolades"], ["Championships", p => rankedValue(p,"champ",x=>x.a), "", {key:"champ",source:x=>x.a}], ["MVPs", p => rankedValue(p,"mvp",x=>x.a), "", {key:"mvp",source:x=>x.a}], ["All-Star", p => rankedValue(p,"allstar",x=>x.a), "", {key:"allstar",source:x=>x.a}], ["All-League", p => rankedValue(p,"allnba",x=>x.a), "", {key:"allnba",source:x=>x.a}], ["All-Defensive", p => rankedValue(p,"alldef",x=>x.a), "", {key:"alldef",source:x=>x.a}], ["DPOY", p => rankedValue(p,"dpoy",x=>x.a), "", {key:"dpoy",source:x=>x.a}], ["75th Anniversary Teams", p => p.a.annivText], ["HOF", p => hofPlayers.has(p.id) ? "Yes" : "No"], ["Avg Rank", p => avgRank(p, selected), "avg-rank-row", {key:"avg",source:x=>({avg:Number(avgRank(x, selected))}),lowIsBest:true}]
  ];
  table.querySelector("tbody").innerHTML = rows.map(row => row[0] === "__group" ? groupRow(row[1], selected.length) : "<tr" + (row[2] ? " class=\"" + row[2] + "\"" : "") + ">" + cell(row[0], "category") + dataCells(selected, row[1], row[3]) + "</tr>").join("");
}
function renderSeasonTable(tableId, sourceKey, includeGames) {
  const selected = selectedPlayers();
  const table = document.querySelector(tableId);
  renderHeader(table, selected);
  const source = player => player[sourceKey];
  const seasonLabel = sourceKey === "p" ? p => "<span class=\"range\"><span>" + p.p.start + "</span><span>through</span><span>" + p.p.end + "</span></span>" : p => p.b.season;
  const rows = [[sourceKey === "p" ? "Seasons" : "Season", seasonLabel], ...(includeGames ? [["Games", p => fmt(p.p.games), {key:"games",source:p=>p.p}]] : []), ["__group","Offensive Stats"], ["PPG", p => fmt(source(p).ppg), {key:"ppg",source}], ["RPG", p => fmt(source(p).rpg), {key:"rpg",source}], ["APG", p => fmt(source(p).apg), {key:"apg",source}], ["FG%", p => fmt(source(p).fg,"%"), {key:"fg",source}], ["3P%", p => fmt(source(p).three,"%"), {key:"three",source}], ["FT%", p => fmt(source(p).ft,"%"), {key:"ft",source}], ["__group","Defensive Stats"], ["Steals", p => fmt(source(p).stl), {key:"stl",source}], ["Blocks", p => fmt(source(p).blk), {key:"blk",source}]];
  table.querySelector("tbody").innerHTML = rows.map(row => row[0] === "__group" ? groupRow(row[1], selected.length) : "<tr>" + cell(row[0], "category") + dataCells(selected, row[1], row[2]) + "</tr>").join("");
}
function clearTables() {
  ["#careerTable", "#bestTable", "#peakTable"].forEach(selector => {
    const table = document.querySelector(selector);
    if (!table) return;
    table.querySelector("thead").innerHTML = "<tr><th>Category</th></tr>";
    table.querySelector("tbody").innerHTML = "<tr><td class=\"category\">Selection</td></tr>";
  });
}

function renderAll() {
  const selected = selectedPlayers();
  document.querySelector("#selectedCount").textContent = selected.length + " selected";
  if (!selected.length) { clearTables(); return; }
  renderCareer(selected); renderSeasonTable("#bestTable", "b", false); renderSeasonTable("#peakTable", "p", true);
}
function buildSelector() {
  const container = document.querySelector("#playerSelector");
  container.innerHTML = [...players].sort(byStartYear).map(player => "<label class=\"player-option\"><input class=\"player-check\" type=\"checkbox\" value=\"" + player.id + "\" " + (player.base ? "checked" : "") + "><span><strong>" + player.name + "</strong><span>" + player.pos + " | " + player.gen + (player.active ? " | Active" : "") + "</span></span></label>").join("");
  container.addEventListener("change", renderAll);
}
buildSelector(); renderAll();
const playerMenuButton = document.querySelector("#playerMenuButton");
const playerSelectorDropdown = document.querySelector("#playerSelectorDropdown");
const resetBaseButton = document.querySelector("#resetBaseButton");
const showActiveToggle = document.querySelector("#activeToggle");
function setSelectorOpen(isOpen) { playerSelectorDropdown.hidden = !isOpen; playerMenuButton.setAttribute("aria-expanded", String(isOpen)); }
playerMenuButton.addEventListener("click", event => { event.stopPropagation(); setSelectorOpen(playerSelectorDropdown.hidden); });
playerSelectorDropdown.addEventListener("click", event => event.stopPropagation());
document.addEventListener("click", () => setSelectorOpen(false));
document.addEventListener("keydown", event => { if (event.key === "Escape") setSelectorOpen(false); });
resetBaseButton.addEventListener("click", () => { showActiveToggle.checked = true; document.querySelectorAll(".player-check").forEach(input => { const player = players.find(item => item.id === input.value); input.checked = Boolean(player?.base); input.closest(".player-option").hidden = false; }); renderAll(); });
showActiveToggle.addEventListener("change", () => { document.querySelectorAll(".player-check").forEach(input => { const player = players.find(item => item.id === input.value); if (!player?.active) return; input.closest(".player-option").hidden = !showActiveToggle.checked; if (!showActiveToggle.checked) input.checked = false; }); renderAll(); });
