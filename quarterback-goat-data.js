const players = [
  {
    id: "baughsa00", name: "Sammy Baugh", base: false, team: "Washington", era: "1937-52", gen: "Single-platoon pioneer", first: 1937, active: false, hof: true,
    c: { career: "16 seasons", games: 165, starts: 152, wins: 104, wp: 68.4, py: 21886, ptd: 187, int: 203, rate: 72.2, cmp: 56.5, ypa: 7.7, anya: null, skpct: null, ry: 325, rtd: 9, comeback: null, gwd: null },
    b: { season: "1945", games: 8, starts: 8, wins: 8, py: 1669, ptd: 11, int: 4, rate: 109.9, cmp: 70.3, ypa: 11.4, anya: null, skpct: null, ry: 44, rtd: 0 },
    p: { start: "1940", end: "1947", games: 76, starts: 73, wins: 50, py: 12049, ptd: 106, int: 97, rate: 80.1, cmp: 59.4, ypa: 8.3, anya: null, skpct: null, ry: 191, rtd: 6 },
    a: { mvp: 2, sb: 2, sbmvp: 0, ap1: 4, pb: 6, titles: 6 }
  },
  {
    id: "lucksi00", name: "Sid Luckman", base: false, team: "Bears", era: "1939-50", gen: "T-formation pioneer", first: 1939, active: false, hof: true,
    c: { career: "12 seasons", games: 128, starts: 116, wins: 85, wp: 73.3, py: 14596, ptd: 137, int: 132, rate: 75, cmp: 51.8, ypa: 8.4, anya: null, skpct: null, ry: 590, rtd: 3, comeback: null, gwd: null },
    b: { season: "1943", games: 10, starts: 10, wins: 8, py: 2194, ptd: 28, int: 12, rate: 107.5, cmp: 54.5, ypa: 10.9, anya: null, skpct: null, ry: 64, rtd: 1 },
    p: { start: "1941", end: "1947", games: 75, starts: 71, wins: 51, py: 11161, ptd: 112, int: 92, rate: 85.1, cmp: 53.5, ypa: 9.1, anya: null, skpct: null, ry: 355, rtd: 3 },
    a: { mvp: 1, sb: 4, sbmvp: 0, ap1: 3, pb: 3, titles: 3 }
  },
  {
    id: "grahaot00", name: "Otto Graham", base: true, team: "Browns", era: "1946-55", gen: "AAFC / early pro dynasty", first: 1946, active: false, hof: true,
    c: { career: "10 seasons", games: 126, starts: 114, wins: 105, wp: 81, py: 23584, ptd: 174, int: 135, rate: 86.6, cmp: 55.8, ypa: 8.6, anya: null, skpct: null, ry: 882, rtd: 44, comeback: null, gwd: null },
    b: { season: "1953", games: 12, starts: 12, wins: 11, py: 2722, ptd: 11, int: 9, rate: 99.7, cmp: 64.7, ypa: 10.6, anya: null, skpct: null, ry: 130, rtd: 6 },
    p: { start: "1947", end: "1953", games: 91, starts: 84, wins: 77, py: 17636, ptd: 139, int: 94, rate: 90.8, cmp: 57.7, ypa: 8.9, anya: null, skpct: null, ry: 664, rtd: 33 },
    a: { mvp: 3, sb: 7, sbmvp: 0, ap1: 4, pb: 5, titles: 5 }
  },
  {
    id: "tittlya00", name: "Y.A. Tittle", base: false, team: "49ers / Giants", era: "1948-64", gen: "Two-league bridge", first: 1948, active: false, hof: true,
    c: { career: "17 seasons", games: 176, starts: 131, wins: 78, wp: 59.5, py: 28339, ptd: 242, int: 248, rate: 74.3, cmp: 55.4, ypa: 7.4, anya: null, skpct: null, ry: 39, rtd: 36, comeback: null, gwd: null },
    b: { season: "1963", games: 14, starts: 14, wins: 11, py: 3145, ptd: 36, int: 14, rate: 104.8, cmp: 60.2, ypa: 8.6, anya: null, skpct: null, ry: 58, rtd: 2 },
    p: { start: "1957", end: "1963", games: 94, starts: 85, wins: 55, py: 18040, ptd: 157, int: 137, rate: 84.3, cmp: 58.9, ypa: 7.9, anya: null, skpct: null, ry: 86, rtd: 20 },
    a: { mvp: 2, sb: 0, sbmvp: 0, ap1: 3, pb: 7, titles: 1 }
  },
  {
    id: "unitjo00", name: "Johnny Unitas", base: true, team: "Colts", era: "1956-73", gen: "Modern passing architect", first: 1956, active: false, hof: true,
    c: { career: "18 seasons", games: 211, starts: 185, wins: 118, wp: 64.5, py: 40239, ptd: 290, int: 253, rate: 78.2, cmp: 54.6, ypa: 7.8, anya: null, skpct: 6.2, ry: 1777, rtd: 13, comeback: 34, gwd: 40 },
    b: { season: "1959", games: 12, starts: 12, wins: 9, py: 2899, ptd: 32, int: 14, rate: 99.1, cmp: 60, ypa: 8.9, anya: null, skpct: 5.8, ry: 145, rtd: 2 },
    p: { start: "1957", end: "1964", games: 94, starts: 94, wins: 63, py: 24014, ptd: 180, int: 129, rate: 87, cmp: 57.8, ypa: 8.2, anya: null, skpct: 5.8, ry: 1160, rtd: 10 },
    a: { mvp: 3, sb: 3, sbmvp: 0, ap1: 5, pb: 10, titles: 4 }
  },
  {
    id: "starrba00", name: "Bart Starr", base: false, team: "Packers", era: "1956-71", gen: "Lombardi dynasty", first: 1956, active: false, hof: true,
    c: { career: "16 seasons", games: 196, starts: 157, wins: 94, wp: 64.1, py: 24718, ptd: 152, int: 138, rate: 80.5, cmp: 57.4, ypa: 7.8, anya: null, skpct: 8.1, ry: 1308, rtd: 15, comeback: 18, gwd: 22 },
    b: { season: "1966", games: 14, starts: 14, wins: 12, py: 2257, ptd: 14, int: 3, rate: 105, cmp: 62.2, ypa: 9, anya: null, skpct: 7.1, ry: 104, rtd: 2 },
    p: { start: "1960", end: "1966", games: 91, starts: 84, wins: 62, py: 14924, ptd: 93, int: 56, rate: 90.7, cmp: 59.6, ypa: 8.3, anya: null, skpct: 7.6, ry: 640, rtd: 10 },
    a: { mvp: 1, sb: 5, sbmvp: 2, ap1: 1, pb: 4, titles: 3 }
  },
  {
    id: "dawsle00", name: "Len Dawson", base: false, team: "Chiefs", era: "1957-75", gen: "AFL precision passer", first: 1957, active: false, hof: true,
    c: { career: "19 seasons", games: 211, starts: 159, wins: 94, wp: 59.1, py: 28711, ptd: 239, int: 183, rate: 82.6, cmp: 57.1, ypa: 7.7, anya: null, skpct: 7.4, ry: 1293, rtd: 9, comeback: 16, gwd: 20 },
    b: { season: "1962", games: 14, starts: 14, wins: 11, py: 2759, ptd: 29, int: 17, rate: 98.3, cmp: 61, ypa: 8.9, anya: null, skpct: 6.3, ry: 252, rtd: 2 },
    p: { start: "1962", end: "1968", games: 95, starts: 93, wins: 60, py: 18261, ptd: 157, int: 105, rate: 89.3, cmp: 58.5, ypa: 8.1, anya: null, skpct: 6.6, ry: 842, rtd: 7 },
    a: { mvp: 1, sb: 2, sbmvp: 1, ap1: 2, pb: 7, titles: 4 }
  },
  {
    id: "tarkfr00", name: "Fran Tarkenton", base: true, team: "Vikings", era: "1961-78", gen: "Scrambler / volume bridge", first: 1961, active: false, hof: true,
    c: { career: "18 seasons", games: 246, starts: 239, wins: 124, wp: 53.1, py: 47003, ptd: 342, int: 266, rate: 80.4, cmp: 57, ypa: 7.3, anya: 5.2, skpct: 8.1, ry: 3674, rtd: 32, comeback: 30, gwd: 34 },
    b: { season: "1975", games: 14, starts: 14, wins: 12, py: 2994, ptd: 25, int: 13, rate: 91.8, cmp: 64.2, ypa: 7.5, anya: 6.1, skpct: 6.8, ry: 108, rtd: 2 },
    p: { start: "1969", end: "1975", games: 98, starts: 98, wins: 63, py: 18421, ptd: 134, int: 89, rate: 86.3, cmp: 61.2, ypa: 7.3, anya: 5.7, skpct: 7.5, ry: 1473, rtd: 14 },
    a: { mvp: 1, sb: 0, sbmvp: 0, ap1: 1, pb: 9, titles: 1 }
  },
  {
    id: "staubro00", name: "Roger Staubach", base: true, team: "Cowboys", era: "1969-79", gen: "Dallas dynasty captain", first: 1969, active: false, hof: true,
    c: { career: "11 seasons", games: 131, starts: 114, wins: 85, wp: 74.6, py: 22700, ptd: 153, int: 109, rate: 83.4, cmp: 57, ypa: 7.7, anya: 5.6, skpct: 9.6, ry: 2264, rtd: 20, comeback: 15, gwd: 23 },
    b: { season: "1971", games: 14, starts: 10, wins: 10, py: 1882, ptd: 15, int: 4, rate: 104.8, cmp: 59.7, ypa: 8.9, anya: 7.3, skpct: 8.4, ry: 343, rtd: 2 },
    p: { start: "1971", end: "1977", games: 90, starts: 80, wins: 60, py: 15921, ptd: 111, int: 70, rate: 88, cmp: 58.2, ypa: 7.9, anya: 6, skpct: 9, ry: 1694, rtd: 16 },
    a: { mvp: 0, sb: 2, sbmvp: 1, ap1: 0, pb: 6, titles: 4 }
  },
  {
    id: "bradste00", name: "Terry Bradshaw", base: false, team: "Steelers", era: "1970-83", gen: "Steel Curtain dynasty", first: 1970, active: false, hof: true,
    c: { career: "14 seasons", games: 168, starts: 158, wins: 107, wp: 67.7, py: 27989, ptd: 212, int: 210, rate: 70.9, cmp: 51.9, ypa: 7.2, anya: 4.6, skpct: 8.1, ry: 2257, rtd: 32, comeback: 19, gwd: 27 },
    b: { season: "1978", games: 16, starts: 16, wins: 14, py: 2915, ptd: 28, int: 20, rate: 84.7, cmp: 56.3, ypa: 7.9, anya: 5.5, skpct: 7.7, ry: 93, rtd: 1 },
    p: { start: "1974", end: "1980", games: 96, starts: 93, wins: 67, py: 16365, ptd: 125, int: 116, rate: 76.6, cmp: 54.3, ypa: 7.4, anya: 5, skpct: 7.8, ry: 1063, rtd: 17 },
    a: { mvp: 1, sb: 4, sbmvp: 2, ap1: 1, pb: 3, titles: 2 }
  },
  {
    id: "kenand00", name: "Ken Anderson", base: false, team: "Bengals", era: "1971-86", gen: "West Coast forerunner", first: 1971, active: false, hof: false,
    c: { career: "16 seasons", games: 192, starts: 172, wins: 91, wp: 52.9, py: 32838, ptd: 197, int: 160, rate: 81.9, cmp: 59.3, ypa: 7.3, anya: 5.5, skpct: 8.3, ry: 2220, rtd: 20, comeback: 23, gwd: 30 },
    b: { season: "1981", games: 16, starts: 16, wins: 12, py: 3754, ptd: 29, int: 10, rate: 98.4, cmp: 62.6, ypa: 8.1, anya: 7, skpct: 5.5, ry: 320, rtd: 1 },
    p: { start: "1974", end: "1981", games: 104, starts: 101, wins: 55, py: 21937, ptd: 134, int: 88, rate: 87.1, cmp: 60.3, ypa: 7.5, anya: 6, skpct: 7.3, ry: 1502, rtd: 12 },
    a: { mvp: 1, sb: 0, sbmvp: 0, ap1: 1, pb: 4, titles: 4 }
  },
  {
    id: "kensta00", name: "Ken Stabler", base: false, team: "Raiders", era: "1970-84", gen: "Vertical renegade", first: 1970, active: false, hof: true,
    c: { career: "15 seasons", games: 184, starts: 146, wins: 96, wp: 66.1, py: 27938, ptd: 194, int: 222, rate: 75.3, cmp: 59.8, ypa: 7.4, anya: 5.2, skpct: 7.3, ry: 93, rtd: 4, comeback: 19, gwd: 26 },
    b: { season: "1976", games: 14, starts: 14, wins: 11, py: 2737, ptd: 27, int: 17, rate: 103.4, cmp: 66.7, ypa: 9.4, anya: 7.1, skpct: 6.8, ry: 28, rtd: 0 },
    p: { start: "1973", end: "1979", games: 101, starts: 96, wins: 69, py: 19235, ptd: 146, int: 137, rate: 84.5, cmp: 62.1, ypa: 7.8, anya: 5.8, skpct: 7, ry: 165, rtd: 3 },
    a: { mvp: 1, sb: 1, sbmvp: 0, ap1: 1, pb: 4, titles: 2 }
  },
  {
    id: "griesbo00", name: "Bob Griese", base: false, team: "Dolphins", era: "1967-80", gen: "Perfect-season steward", first: 1967, active: false, hof: true,
    c: { career: "14 seasons", games: 161, starts: 151, wins: 92, wp: 61.1, py: 25092, ptd: 192, int: 172, rate: 77.1, cmp: 56.2, ypa: 7.5, anya: 5.3, skpct: 7.5, ry: 994, rtd: 7, comeback: 18, gwd: 22 },
    b: { season: "1977", games: 14, starts: 14, wins: 10, py: 2252, ptd: 22, int: 13, rate: 87.8, cmp: 58.3, ypa: 7.8, anya: 6, skpct: 6.8, ry: 109, rtd: 1 },
    p: { start: "1970", end: "1977", games: 92, starts: 87, wins: 62, py: 14145, ptd: 111, int: 88, rate: 81.8, cmp: 58, ypa: 7.6, anya: 5.7, skpct: 7.1, ry: 574, rtd: 4 },
    a: { mvp: 0, sb: 2, sbmvp: 0, ap1: 2, pb: 8, titles: 1 }
  },
  {
    id: "montajo01", name: "Joe Montana", base: true, team: "49ers", era: "1979-94", gen: "Walsh dynasty", first: 1979, active: false, hof: true,
    c: { career: "16 seasons", games: 192, starts: 164, wins: 117, wp: 71.3, py: 40551, ptd: 273, int: 139, rate: 92.3, cmp: 63.2, ypa: 7.5, anya: 6.7, skpct: 6.7, ry: 1676, rtd: 20, comeback: 31, gwd: 33 },
    b: { season: "1989", games: 13, starts: 13, wins: 11, py: 3521, ptd: 26, int: 8, rate: 112.4, cmp: 70.2, ypa: 9.1, anya: 8.3, skpct: 5, ry: 227, rtd: 3 },
    p: { start: "1984", end: "1990", games: 94, starts: 92, wins: 70, py: 22703, ptd: 164, int: 73, rate: 100.2, cmp: 65.9, ypa: 7.9, anya: 7.2, skpct: 6, ry: 999, rtd: 13 },
    a: { mvp: 2, sb: 4, sbmvp: 3, ap1: 3, pb: 8, titles: 2 }
  },
  {
    id: "marinda00", name: "Dan Marino", base: true, team: "Dolphins", era: "1983-99", gen: "Pure passing explosion", first: 1983, active: false, hof: true,
    c: { career: "17 seasons", games: 242, starts: 240, wins: 147, wp: 61.3, py: 61361, ptd: 420, int: 252, rate: 86.4, cmp: 59.4, ypa: 7.3, anya: 6.5, skpct: 3.1, ry: 87, rtd: 9, comeback: 36, gwd: 51 },
    b: { season: "1984", games: 16, starts: 16, wins: 14, py: 5084, ptd: 48, int: 17, rate: 108.9, cmp: 64.2, ypa: 9, anya: 8.9, skpct: 2.5, ry: -7, rtd: 0 },
    p: { start: "1983", end: "1989", games: 105, starts: 105, wins: 68, py: 28148, ptd: 220, int: 113, rate: 92.1, cmp: 60.7, ypa: 7.7, anya: 7.1, skpct: 2.6, ry: 95, rtd: 4 },
    a: { mvp: 1, sb: 0, sbmvp: 0, ap1: 3, pb: 9, titles: 5 }
  },
  {
    id: "elwajo00", name: "John Elway", base: true, team: "Broncos", era: "1983-98", gen: "Arm talent / late dynasty", first: 1983, active: false, hof: true,
    c: { career: "16 seasons", games: 234, starts: 231, wins: 148, wp: 64.1, py: 51475, ptd: 300, int: 226, rate: 79.9, cmp: 56.9, ypa: 7.1, anya: 5.6, skpct: 6.7, ry: 3407, rtd: 33, comeback: 34, gwd: 40 },
    b: { season: "1993", games: 16, starts: 16, wins: 9, py: 4030, ptd: 25, int: 10, rate: 92.8, cmp: 63.2, ypa: 7.3, anya: 6.4, skpct: 5.5, ry: 153, rtd: 0 },
    p: { start: "1986", end: "1993", games: 111, starts: 111, wins: 75, py: 25615, ptd: 150, int: 112, rate: 81.8, cmp: 57.7, ypa: 7.1, anya: 5.7, skpct: 6.3, ry: 2109, rtd: 20 },
    a: { mvp: 1, sb: 2, sbmvp: 1, ap1: 0, pb: 9, titles: 0 }
  },
  {
    id: "moonwa00", name: "Warren Moon", base: false, team: "Oilers", era: "1984-2000", gen: "Run-and-shoot volume", first: 1984, active: false, hof: true,
    c: { career: "17 seasons", games: 208, starts: 203, wins: 102, wp: 50.2, py: 49325, ptd: 291, int: 233, rate: 80.9, cmp: 58.4, ypa: 7.2, anya: 5.8, skpct: 7.1, ry: 1736, rtd: 22, comeback: 23, gwd: 28 },
    b: { season: "1990", games: 15, starts: 15, wins: 9, py: 4689, ptd: 33, int: 13, rate: 96.8, cmp: 62, ypa: 8, anya: 7.1, skpct: 5.6, ry: 215, rtd: 2 },
    p: { start: "1988", end: "1994", games: 102, starts: 102, wins: 55, py: 28204, ptd: 175, int: 119, rate: 87.9, cmp: 60.4, ypa: 7.4, anya: 6.3, skpct: 6.4, ry: 969, rtd: 12 },
    a: { mvp: 0, sb: 0, sbmvp: 0, ap1: 1, pb: 9, titles: 2 }
  },
  {
    id: "kellyji00", name: "Jim Kelly", base: false, team: "Bills", era: "1986-96", gen: "K-Gun AFC dynasty", first: 1986, active: false, hof: true,
    c: { career: "11 seasons", games: 160, starts: 160, wins: 101, wp: 63.1, py: 35467, ptd: 237, int: 175, rate: 84.4, cmp: 60.1, ypa: 7.4, anya: 6, skpct: 6, ry: 1049, rtd: 7, comeback: 21, gwd: 28 },
    b: { season: "1991", games: 15, starts: 15, wins: 13, py: 3844, ptd: 33, int: 17, rate: 97.6, cmp: 64.1, ypa: 8.2, anya: 6.9, skpct: 4.5, ry: 76, rtd: 0 },
    p: { start: "1988", end: "1994", games: 109, starts: 109, wins: 75, py: 25477, ptd: 173, int: 120, rate: 87.8, cmp: 61.1, ypa: 7.5, anya: 6.3, skpct: 5.4, ry: 766, rtd: 4 },
    a: { mvp: 0, sb: 0, sbmvp: 0, ap1: 1, pb: 5, titles: 0 }
  },
  {
    id: "favrbr00", name: "Brett Favre", base: true, team: "Packers", era: "1991-2010", gen: "Ironman gunslinger", first: 1991, active: false, hof: true,
    c: { career: "20 seasons", games: 302, starts: 298, wins: 186, wp: 62.4, py: 71838, ptd: 508, int: 336, rate: 86, cmp: 62, ypa: 7.1, anya: 5.9, skpct: 4.9, ry: 1844, rtd: 14, comeback: 30, gwd: 43 },
    b: { season: "1995", games: 16, starts: 16, wins: 11, py: 4413, ptd: 38, int: 13, rate: 99.5, cmp: 63, ypa: 7.7, anya: 7, skpct: 4.8, ry: 181, rtd: 3 },
    p: { start: "1994", end: "2000", games: 112, starts: 112, wins: 75, py: 28882, ptd: 227, int: 118, rate: 91.5, cmp: 62.5, ypa: 7.3, anya: 6.4, skpct: 4.6, ry: 1256, rtd: 10 },
    a: { mvp: 3, sb: 1, sbmvp: 0, ap1: 3, pb: 11, titles: 2 }
  },
  {
    id: "aikmtr00", name: "Troy Aikman", base: false, team: "Cowboys", era: "1989-2000", gen: "Triplets dynasty", first: 1989, active: false, hof: true,
    c: { career: "12 seasons", games: 165, starts: 165, wins: 94, wp: 57, py: 32942, ptd: 165, int: 141, rate: 81.6, cmp: 61.5, ypa: 7, anya: 5.7, skpct: 5, ry: 1016, rtd: 9, comeback: 15, gwd: 20 },
    b: { season: "1993", games: 14, starts: 14, wins: 12, py: 3100, ptd: 15, int: 6, rate: 99, cmp: 69.1, ypa: 7.4, anya: 6.9, skpct: 3.4, ry: 124, rtd: 0 },
    p: { start: "1991", end: "1997", games: 103, starts: 103, wins: 71, py: 22290, ptd: 119, int: 76, rate: 88.8, cmp: 64.1, ypa: 7.2, anya: 6.1, skpct: 4.5, ry: 630, rtd: 7 },
    a: { mvp: 0, sb: 3, sbmvp: 1, ap1: 0, pb: 6, titles: 0 }
  },
  {
    id: "youngst00", name: "Steve Young", base: true, team: "49ers", era: "1985-99", gen: "Efficiency / dual-threat peak", first: 1985, active: false, hof: true,
    c: { career: "15 seasons", games: 169, starts: 143, wins: 94, wp: 65.7, py: 33124, ptd: 232, int: 107, rate: 96.8, cmp: 64.3, ypa: 8, anya: 6.9, skpct: 8.4, ry: 4239, rtd: 43, comeback: 16, gwd: 22 },
    b: { season: "1994", games: 16, starts: 16, wins: 13, py: 3969, ptd: 35, int: 10, rate: 112.8, cmp: 70.3, ypa: 8.6, anya: 8, skpct: 7, ry: 293, rtd: 7 },
    p: { start: "1992", end: "1998", games: 100, starts: 100, wins: 72, py: 24669, ptd: 177, int: 75, rate: 101.6, cmp: 66.7, ypa: 8.1, anya: 7.3, skpct: 8.2, ry: 2874, rtd: 27 },
    a: { mvp: 2, sb: 3, sbmvp: 1, ap1: 3, pb: 7, titles: 6 }
  },
  {
    id: "warneku00", name: "Kurt Warner", base: false, team: "Rams / Cardinals", era: "1998-2009", gen: "Greatest Show / revival", first: 1998, active: false, hof: true,
    c: { career: "12 seasons", games: 124, starts: 116, wins: 67, wp: 57.8, py: 32344, ptd: 208, int: 128, rate: 93.7, cmp: 65.5, ypa: 7.9, anya: 6.8, skpct: 5.6, ry: 286, rtd: 3, comeback: 13, gwd: 18 },
    b: { season: "2001", games: 16, starts: 16, wins: 14, py: 4830, ptd: 36, int: 22, rate: 101.4, cmp: 68.7, ypa: 8.8, anya: 7.4, skpct: 5.4, ry: 60, rtd: 0 },
    p: { start: "1999", end: "2008", games: 99, starts: 94, wins: 58, py: 28120, ptd: 182, int: 104, rate: 96.2, cmp: 66.2, ypa: 8.1, anya: 7, skpct: 5.4, ry: 264, rtd: 3 },
    a: { mvp: 2, sb: 1, sbmvp: 1, ap1: 2, pb: 4, titles: 3 }
  },
  {
    id: "mannpe00", name: "Peyton Manning", base: true, team: "Colts / Broncos", era: "1998-2015", gen: "Audible-era field general", first: 1998, active: false, hof: true,
    c: { career: "18 seasons", games: 266, starts: 265, wins: 186, wp: 70.2, py: 71940, ptd: 539, int: 251, rate: 96.5, cmp: 65.3, ypa: 7.7, anya: 7.2, skpct: 3.1, ry: 667, rtd: 18, comeback: 43, gwd: 54 },
    b: { season: "2013", games: 16, starts: 16, wins: 13, py: 5477, ptd: 55, int: 10, rate: 115.1, cmp: 68.3, ypa: 8.3, anya: 8.9, skpct: 2.7, ry: -31, rtd: 1 },
    p: { start: "2003", end: "2009", games: 112, starts: 112, wins: 85, py: 30595, ptd: 228, int: 91, rate: 101.7, cmp: 66.6, ypa: 7.8, anya: 7.7, skpct: 2.7, ry: 380, rtd: 9 },
    a: { mvp: 5, sb: 2, sbmvp: 1, ap1: 7, pb: 14, titles: 3 }
  },
  {
    id: "bradyt00", name: "Tom Brady", base: true, team: "Patriots / Buccaneers", era: "2000-22", gen: "Modern rings standard", first: 2000, active: false, hof: false,
    c: { career: "23 seasons", games: 335, starts: 333, wins: 251, wp: 75.4, py: 89214, ptd: 649, int: 212, rate: 97.2, cmp: 64.3, ypa: 7.4, anya: 7.0, skpct: 4.5, ry: 1123, rtd: 28, comeback: 46, gwd: 58 },
    b: { season: "2007", games: 16, starts: 16, wins: 16, py: 4806, ptd: 50, int: 8, rate: 117.2, cmp: 68.9, ypa: 8.3, anya: 8.9, skpct: 3.5, ry: 98, rtd: 2 },
    p: { start: "2007", end: "2013", games: 111, starts: 111, wins: 88, py: 32038, ptd: 239, int: 63, rate: 101.6, cmp: 64.6, ypa: 7.6, anya: 7.6, skpct: 4, ry: 345, rtd: 9 },
    a: { mvp: 3, sb: 7, sbmvp: 5, ap1: 3, pb: 15, titles: 4 }
  },
  {
    id: "breesdr00", name: "Drew Brees", base: true, team: "Saints", era: "2001-20", gen: "Precision volume", first: 2001, active: false, hof: true,
    c: { career: "20 seasons", games: 287, starts: 286, wins: 172, wp: 60.1, py: 80358, ptd: 571, int: 243, rate: 98.7, cmp: 67.7, ypa: 7.6, anya: 7.1, skpct: 3.8, ry: 752, rtd: 25, comeback: 36, gwd: 53 },
    b: { season: "2011", games: 16, starts: 16, wins: 13, py: 5476, ptd: 46, int: 14, rate: 110.6, cmp: 71.2, ypa: 8.3, anya: 8.2, skpct: 3.5, ry: 86, rtd: 1 },
    p: { start: "2006", end: "2012", games: 111, starts: 111, wins: 73, py: 33458, ptd: 244, int: 110, rate: 99.8, cmp: 67.7, ypa: 7.8, anya: 7.2, skpct: 3.6, ry: 437, rtd: 11 },
    a: { mvp: 0, sb: 1, sbmvp: 1, ap1: 1, pb: 13, titles: 7 }
  },
  {
    id: "riverph00", name: "Philip Rivers", base: false, team: "Chargers", era: "2004-20", gen: "High-volume pocket era", first: 2004, active: false, hof: false,
    c: { career: "17 seasons", games: 244, starts: 240, wins: 134, wp: 55.8, py: 63440, ptd: 421, int: 209, rate: 95.2, cmp: 64.9, ypa: 7.8, anya: 6.8, skpct: 4.6, ry: 601, rtd: 3, comeback: 25, gwd: 35 },
    b: { season: "2008", games: 16, starts: 16, wins: 8, py: 4009, ptd: 34, int: 11, rate: 105.5, cmp: 65.3, ypa: 8.4, anya: 7.9, skpct: 5.2, ry: 84, rtd: 0 },
    p: { start: "2008", end: "2014", games: 112, starts: 112, wins: 65, py: 31585, ptd: 219, int: 103, rate: 97.4, cmp: 65.2, ypa: 7.9, anya: 7, skpct: 4.7, ry: 282, rtd: 1 },
    a: { mvp: 0, sb: 0, sbmvp: 0, ap1: 0, pb: 8, titles: 1 }
  },
  {
    id: "roetbe00", name: "Ben Roethlisberger", base: false, team: "Steelers", era: "2004-21", gen: "Backyard power passer", first: 2004, active: false, hof: false,
    c: { career: "18 seasons", games: 249, starts: 247, wins: 165, wp: 66.8, py: 64088, ptd: 418, int: 211, rate: 93.5, cmp: 64.4, ypa: 7.6, anya: 6.5, skpct: 6.3, ry: 1373, rtd: 20, comeback: 41, gwd: 53 },
    b: { season: "2014", games: 16, starts: 16, wins: 11, py: 4952, ptd: 32, int: 9, rate: 103.3, cmp: 67.1, ypa: 8.1, anya: 7.5, skpct: 5.2, ry: 27, rtd: 0 },
    p: { start: "2007", end: "2014", games: 105, starts: 105, wins: 70, py: 28441, ptd: 184, int: 90, rate: 96.4, cmp: 63.9, ypa: 7.9, anya: 6.9, skpct: 6.7, ry: 819, rtd: 12 },
    a: { mvp: 0, sb: 2, sbmvp: 0, ap1: 0, pb: 6, titles: 0 }
  },
  {
    id: "elimann00", name: "Eli Manning", base: false, team: "Giants", era: "2004-19", gen: "January giant-killer", first: 2004, active: false, hof: false,
    c: { career: "16 seasons", games: 236, starts: 234, wins: 117, wp: 50, py: 57023, ptd: 366, int: 244, rate: 84.1, cmp: 60.3, ypa: 7, anya: 5.7, skpct: 4.8, ry: 567, rtd: 7, comeback: 27, gwd: 37 },
    b: { season: "2011", games: 16, starts: 16, wins: 9, py: 4933, ptd: 29, int: 16, rate: 92.9, cmp: 61, ypa: 8.4, anya: 7.1, skpct: 4.7, ry: 15, rtd: 1 },
    p: { start: "2008", end: "2014", games: 112, starts: 112, wins: 62, py: 29488, ptd: 184, int: 122, rate: 86.9, cmp: 61.4, ypa: 7.3, anya: 5.9, skpct: 4.7, ry: 309, rtd: 4 },
    a: { mvp: 0, sb: 2, sbmvp: 2, ap1: 0, pb: 4, titles: 0 }
  },
  {
    id: "rodgaa00", name: "Aaron Rodgers", base: true, team: "Packers", era: "2005-present", gen: "Efficiency standard", first: 2005, active: true, hof: false,
    c: { career: "21 seasons", games: 264, starts: 257, wins: 163, wp: 63.4, py: 66274, ptd: 527, int: 123, rate: 102.2, cmp: 65.2, ypa: 7.6, anya: 7.2, skpct: 6.4, ry: 3634, rtd: 36, comeback: 23, gwd: 36 },
    b: { season: "2011", games: 15, starts: 15, wins: 14, py: 4643, ptd: 45, int: 6, rate: 122.5, cmp: 68.3, ypa: 9.2, anya: 9.4, skpct: 6.7, ry: 257, rtd: 3 },
    p: { start: "2009", end: "2015", games: 110, starts: 110, wins: 73, py: 29178, ptd: 238, int: 55, rate: 107.3, cmp: 65.1, ypa: 8.1, anya: 7.9, skpct: 7, ry: 2131, rtd: 19 },
    a: { mvp: 4, sb: 1, sbmvp: 1, ap1: 4, pb: 10, titles: 4 }
  },
  {
    id: "ryanma00", name: "Matt Ryan", base: false, team: "Falcons", era: "2008-22", gen: "Dome-era volume", first: 2008, active: false, hof: false,
    c: { career: "15 seasons", games: 234, starts: 234, wins: 124, wp: 53, py: 62792, ptd: 381, int: 183, rate: 93.6, cmp: 65.6, ypa: 7.4, anya: 6.6, skpct: 5.1, ry: 1518, rtd: 13, comeback: 38, gwd: 46 },
    b: { season: "2016", games: 16, starts: 16, wins: 11, py: 4944, ptd: 38, int: 7, rate: 117.1, cmp: 69.9, ypa: 9.3, anya: 9, skpct: 4.3, ry: 117, rtd: 0 },
    p: { start: "2010", end: "2016", games: 111, starts: 111, wins: 69, py: 30337, ptd: 196, int: 90, rate: 96.7, cmp: 66.2, ypa: 7.5, anya: 6.8, skpct: 4.7, ry: 947, rtd: 6 },
    a: { mvp: 1, sb: 0, sbmvp: 0, ap1: 1, pb: 4, titles: 0 }
  },
  {
    id: "wilsonru00", name: "Russell Wilson", base: false, team: "Seahawks", era: "2012-present", gen: "Second-reaction creator", first: 2012, active: true, hof: false,
    c: { career: "14 seasons", games: 205, starts: 205, wins: 123, wp: 60, py: 46966, ptd: 353, int: 114, rate: 99.3, cmp: 64.6, ypa: 7.7, anya: 6.7, skpct: 8.5, ry: 5568, rtd: 31, comeback: 34, gwd: 42 },
    b: { season: "2015", games: 16, starts: 16, wins: 10, py: 4024, ptd: 34, int: 8, rate: 110.1, cmp: 68.1, ypa: 8.3, anya: 8.1, skpct: 7.4, ry: 553, rtd: 1 },
    p: { start: "2012", end: "2018", games: 112, starts: 112, wins: 75, py: 25025, ptd: 196, int: 63, rate: 100.3, cmp: 64.2, ypa: 7.8, anya: 7, skpct: 8.3, ry: 3651, rtd: 16 },
    a: { mvp: 0, sb: 1, sbmvp: 0, ap1: 0, pb: 10, titles: 0 }
  },
  {
    id: "mahopa00", name: "Patrick Mahomes", base: true, team: "Chiefs", era: "2017-present", gen: "Improvisational dynasty", first: 2017, active: true, hof: false,
    c: { career: "9 seasons", games: 126, starts: 126, wins: 95, wp: 75.4, py: 35939, ptd: 267, int: 85, rate: 100.8, cmp: 66.2, ypa: 7.7, anya: 7.4, skpct: 4.5, ry: 2665, rtd: 19, comeback: 17, gwd: 22 },
    b: { season: "2018", games: 16, starts: 16, wins: 12, py: 5097, ptd: 50, int: 12, rate: 113.8, cmp: 66, ypa: 8.8, anya: 8.9, skpct: 4.3, ry: 272, rtd: 2 },
    p: { start: "2018", end: "2024", games: 111, starts: 110, wins: 89, py: 32782, ptd: 245, int: 74, rate: 102.1, cmp: 66.6, ypa: 7.7, anya: 7.3, skpct: 4, ry: 2438, rtd: 14 },
    a: { mvp: 2, sb: 3, sbmvp: 3, ap1: 2, pb: 6, titles: 2 }
  },
  {
    id: "jackla00", name: "Lamar Jackson", base: false, team: "Ravens", era: "2018-present", gen: "Run-game bending MVP", first: 2018, active: true, hof: false,
    c: { career: "8 seasons", games: 116, starts: 107, wins: 76, wp: 71, py: 22608, ptd: 187, int: 56, rate: 102.2, cmp: 64.8, ypa: 7.8, anya: 7.2, skpct: 7.3, ry: 6522, rtd: 35, comeback: 11, gwd: 15 },
    b: { season: "2019", games: 15, starts: 15, wins: 13, py: 3127, ptd: 36, int: 6, rate: 113.3, cmp: 66.1, ypa: 7.8, anya: 8.2, skpct: 5.4, ry: 1206, rtd: 7 },
    p: { start: "2019", end: "2025", games: 100, starts: 100, wins: 70, py: 21407, ptd: 181, int: 53, rate: 103.3, cmp: 65.2, ypa: 7.9, anya: 7.3, skpct: 7.2, ry: 5827, rtd: 30 },
    a: { mvp: 2, sb: 0, sbmvp: 0, ap1: 3, pb: 4, titles: 1 }
  },
  {
    id: "allenjo00", name: "Josh Allen", base: false, team: "Bills", era: "2018-present", gen: "Power dual-threat", first: 2018, active: true, hof: false,
    c: { career: "8 seasons", games: 128, starts: 127, wins: 88, wp: 69.3, py: 30102, ptd: 220, int: 94, rate: 94.4, cmp: 64, ypa: 7.4, anya: 6.7, skpct: 5.3, ry: 4721, rtd: 79, comeback: 17, gwd: 23 },
    b: { season: "2020", games: 16, starts: 16, wins: 13, py: 4544, ptd: 37, int: 10, rate: 107.2, cmp: 69.2, ypa: 7.9, anya: 7.8, skpct: 4.3, ry: 421, rtd: 8 },
    p: { start: "2019", end: "2025", games: 116, starts: 116, wins: 83, py: 28028, ptd: 210, int: 82, rate: 96.7, cmp: 64.9, ypa: 7.4, anya: 6.9, skpct: 5.1, ry: 4090, rtd: 71 },
    a: { mvp: 1, sb: 0, sbmvp: 0, ap1: 0, pb: 4, titles: 0 }
  },
  {
    id: "burrowjo00", name: "Joe Burrow", base: false, team: "Bengals", era: "2020-present", gen: "Pocket surgeon", first: 2020, active: true, hof: false,
    c: { career: "6 seasons", games: 77, starts: 77, wins: 43, wp: 55.8, py: 20810, ptd: 157, int: 51, rate: 101.1, cmp: 68.5, ypa: 7.4, anya: 6.7, skpct: 7.1, ry: 847, rtd: 12, comeback: 8, gwd: 10 },
    b: { season: "2024", games: 17, starts: 17, wins: 9, py: 4918, ptd: 43, int: 9, rate: 108.5, cmp: 70.6, ypa: 7.5, anya: 7.6, skpct: 5.9, ry: 201, rtd: 2 },
    p: { start: "2020", end: "2025", games: 77, starts: 77, wins: 43, py: 20810, ptd: 157, int: 51, rate: 101.1, cmp: 68.5, ypa: 7.4, anya: 6.7, skpct: 7.1, ry: 847, rtd: 12 },
    a: { mvp: 0, sb: 0, sbmvp: 0, ap1: 0, pb: 3, titles: 1 }
  }
];

const lowIsBestMetrics = new Set(["int", "skpct", "avg"]);
const rankMetrics = ["wins","wp","py","ptd","rate","cmp","ypa","anya","skpct","ry","rtd","comeback","gwd","mvp","sb","sbmvp","ap1","pb","titles"];
const fmt = (value, suffix = "") => value == null ? "N/A" : Number(value).toLocaleString("en-US") + suffix;
const cell = (html, cls = "") => "<td" + (cls ? " class=\"" + cls + "\"" : "") + ">" + html + "</td>";
const activeToggle = () => document.querySelector("#activeToggle");
const byStartYear = (a, b) => a.first - b.first || players.indexOf(a) - players.indexOf(b);
function selectedPlayers() {
  const checked = new Set([...document.querySelectorAll(".player-check:checked")].map(input => input.value));
  const showActive = activeToggle()?.checked ?? true;
  return players.filter(player => checked.has(player.id) && (showActive || !player.active)).sort(byStartYear);
}
function ranksFor(selected, key, source, lowIsBest = lowIsBestMetrics.has(key)) {
  const values = selected.map(player => ({ id: player.id, value: source(player)[key] })).filter(item => item.value != null);
  const ordered = [...new Set(values.map(item => item.value))].sort((a, b) => lowIsBest ? a - b : b - a);
  return Object.fromEntries(values.map(item => [item.id, ordered.indexOf(item.value) + 1]));
}
function rankedValue(player, key, source, suffix = "") {
  const value = source(player)[key];
  if (value == null) return "N/A";
  return fmt(value, suffix) + " (" + ranksFor(selectedPlayers(), key, source)[player.id] + ")";
}
function bestIds(selected, key, source, lowIsBest = lowIsBestMetrics.has(key)) {
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
  table.querySelector("thead").innerHTML = "<tr><th>Category</th>" + selected.map(player => "<th>" + player.name + "</th>").join("") + "</tr>";
}
function groupRow(label, count) { return "<tr class=\"group-row\"><td colspan=\"" + (count + 1) + "\">" + label + "</td></tr>"; }
function row(label, selected, render, highlight, cls = "") {
  return "<tr" + (cls ? " class=\"" + cls + "\"" : "") + ">" + cell(label, "category") + dataCells(selected, render, highlight) + "</tr>";
}
function renderCareer(selected) {
  const table = document.querySelector("#careerTable");
  renderHeader(table, selected);
  const c = player => player.c;
  const a = player => player.a;
  const rows = [
    row("Team / Era", selected, p => "<span class=\"player\">" + p.team + "<span class=\"era\">" + p.era + " | " + p.gen + "</span></span>"),
    row("Career", selected, p => p.c.career),
    groupRow("Passing Stats", selected.length),
    row("Games", selected, p => rankedValue(p, "games", c), { key: "games", source: c }),
    row("Starts", selected, p => rankedValue(p, "starts", c), { key: "starts", source: c }),
    row("Wins", selected, p => rankedValue(p, "wins", c), { key: "wins", source: c }),
    row("Win %", selected, p => rankedValue(p, "wp", c, "%"), { key: "wp", source: c }),
    row("Passing Yards", selected, p => rankedValue(p, "py", c), { key: "py", source: c }),
    row("Passing TDs", selected, p => rankedValue(p, "ptd", c), { key: "ptd", source: c }),
    row("Interceptions", selected, p => rankedValue(p, "int", c), { key: "int", source: c }),
    row("Passer Rating", selected, p => rankedValue(p, "rate", c), { key: "rate", source: c }),
    row("Completion %", selected, p => rankedValue(p, "cmp", c, "%"), { key: "cmp", source: c }),
    row("Yards / Attempt", selected, p => rankedValue(p, "ypa", c), { key: "ypa", source: c }),
    groupRow("Rushing / Dual-Threat Stats", selected.length),
    row("Rushing Yards", selected, p => rankedValue(p, "ry", c), { key: "ry", source: c }),
    row("Rushing TDs", selected, p => rankedValue(p, "rtd", c), { key: "rtd", source: c }),
    groupRow("Advanced / Efficiency Stats", selected.length),
    row("ANY/A", selected, p => rankedValue(p, "anya", c), { key: "anya", source: c }),
    row("Sack %", selected, p => rankedValue(p, "skpct", c, "%"), { key: "skpct", source: c }),
    row("4th-Qtr Comebacks", selected, p => rankedValue(p, "comeback", c), { key: "comeback", source: c }),
    row("Game-Winning Drives", selected, p => rankedValue(p, "gwd", c), { key: "gwd", source: c }),
    groupRow("Accolades", selected.length),
    row("Hall of Fame", selected, p => p.hof ? "Yes" : "No"),
    row("MVP", selected, p => rankedValue(p, "mvp", a), { key: "mvp", source: a }),
    row("League Titles / Super Bowl Wins", selected, p => rankedValue(p, "sb", a), { key: "sb", source: a }),
    row("Super Bowl MVPs", selected, p => rankedValue(p, "sbmvp", a), { key: "sbmvp", source: a }),
    row("First-Team All-Pro", selected, p => rankedValue(p, "ap1", a), { key: "ap1", source: a }),
    row("Pro Bowl", selected, p => rankedValue(p, "pb", a), { key: "pb", source: a }),
    row("Passing Titles", selected, p => rankedValue(p, "titles", a), { key: "titles", source: a }),
    row("Avg Rank", selected, p => avgRank(p, selected), { key: "avg", source: p => ({ avg: Number(avgRank(p, selected)) }), lowIsBest: true }, "avg-rank-row")
  ];
  table.querySelector("tbody").innerHTML = rows.join("");
}
function renderSeasonTable(tableId, sourceKey, includeGames) {
  const selected = selectedPlayers();
  const table = document.querySelector(tableId);
  renderHeader(table, selected);
  const source = player => player[sourceKey];
  const seasonLabel = sourceKey === "p" ? p => "<span class=\"range\"><span>" + p.p.start + "</span><span>through</span><span>" + p.p.end + "</span></span>" : p => p.b.season;
  const rows = [
    row(sourceKey === "p" ? "Seasons" : "Season", selected, seasonLabel),
    ...(includeGames ? [row("Games", selected, p => fmt(p.p.games), { key: "games", source: p => p.p }), row("Starts", selected, p => fmt(p.p.starts), { key: "starts", source: p => p.p })] : []),
    groupRow("Passing Stats", selected.length),
    row("Wins", selected, p => fmt(source(p).wins), { key: "wins", source }),
    row("Passing Yards", selected, p => fmt(source(p).py), { key: "py", source }),
    row("Passing TDs", selected, p => fmt(source(p).ptd), { key: "ptd", source }),
    row("Interceptions", selected, p => fmt(source(p).int), { key: "int", source }),
    row("Passer Rating", selected, p => fmt(source(p).rate), { key: "rate", source }),
    row("Completion %", selected, p => fmt(source(p).cmp, "%"), { key: "cmp", source }),
    row("Yards / Attempt", selected, p => fmt(source(p).ypa), { key: "ypa", source }),
    groupRow("Rushing / Dual-Threat Stats", selected.length),
    row("Rushing Yards", selected, p => fmt(source(p).ry), { key: "ry", source }),
    row("Rushing TDs", selected, p => fmt(source(p).rtd), { key: "rtd", source }),
    groupRow("Advanced / Efficiency Stats", selected.length),
    row("ANY/A", selected, p => fmt(source(p).anya), { key: "anya", source }),
    row("Sack %", selected, p => fmt(source(p).skpct, "%"), { key: "skpct", source })
  ];
  table.querySelector("tbody").innerHTML = rows.join("");
}
function renderAll() {
  const selected = selectedPlayers();
  document.querySelector("#selectedCount").textContent = selected.length + " selected";
  if (!selected.length) {
    ["#careerTable", "#bestTable", "#peakTable"].forEach(selector => {
      const table = document.querySelector(selector);
      table.querySelector("thead").innerHTML = "<tr><th>Category</th></tr>";
      table.querySelector("tbody").innerHTML = "";
    });
    return;
  }
  renderCareer(selected);
  renderSeasonTable("#bestTable", "b", false);
  renderSeasonTable("#peakTable", "p", true);
}
function buildSelector() {
  const container = document.querySelector("#playerSelector");
  container.innerHTML = [...players].sort(byStartYear).map(player => "<label class=\"player-option\"><input class=\"player-check\" type=\"checkbox\" value=\"" + player.id + "\" " + (player.base ? "checked" : "") + "><span><strong>" + player.name + "</strong><span>" + player.team + "</span></span></label>").join("");
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
resetBaseButton.addEventListener("click", () => {
  showActiveToggle.checked = true;
  document.querySelectorAll(".player-check").forEach(input => {
    const player = players.find(item => item.id === input.value);
    input.checked = Boolean(player?.base);
    input.closest(".player-option").hidden = false;
  });
  renderAll();
});
showActiveToggle.addEventListener("change", () => {
  document.querySelectorAll(".player-check").forEach(input => {
    const player = players.find(item => item.id === input.value);
    if (!player?.active) return;
    input.closest(".player-option").hidden = !showActiveToggle.checked;
    if (!showActiveToggle.checked) input.checked = false;
  });
  renderAll();
});
