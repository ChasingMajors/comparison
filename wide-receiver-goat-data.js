const players = [
  { id: "hutson", name: "Don Hutson", base: true, team: "Packers", era: "1935-45", gen: "Pre-modern route pioneer", first: 1935, active: false, hof: true,
    c: { career: "11 seasons", games: 116, starts: null, rec: 488, recYds: 7991, recTd: 99, ypr: 16.4, scrimYds: 7991, scrimTd: 99, retTd: null, allYds: null, recYpg: 68.9, recPg: 4.2, catchPct: null, fum: null },
    b: { season: "1942", games: 11, rec: 74, recYds: 1211, recTd: 17, ypr: 16.4, recYpg: 110.1, recPg: 6.7, scrimYds: 1211, scrimTd: 17, awards: "MVP, First-Team All-Pro, receiving Triple Crown" },
    p: { start: "1936", end: "1942", games: 76, rec: 367, recYds: 5907, recTd: 74, ypr: 16.1, recYpg: 77.7, recPg: 4.8, scrimYds: 5907, scrimTd: 74, awards: "2 MVP, 6 First-Team All-Pro, multiple receiving titles" },
    a: { mvp: 2, opoy: 0, champs: 3, sbmvp: 0, ap1: 8, pb: 4, yardTitles: 7, recTitles: 8, tdTitles: 9, triple: 5 }
  },
  { id: "hirsch", name: "Elroy \"Crazylegs\" Hirsch", base: false, team: "Rams", era: "1946-57", gen: "Two-way deep threat", first: 1946, active: false, hof: true,
    c: { career: "12 seasons", games: 123, starts: null, rec: 387, recYds: 7029, recTd: 60, ypr: 18.2, scrimYds: 7075, scrimTd: 60, retTd: null, allYds: null, recYpg: 57.1, recPg: 3.1, catchPct: null, fum: null },
    b: { season: "1951", games: 12, rec: 66, recYds: 1495, recTd: 17, ypr: 22.7, recYpg: 124.6, recPg: 5.5, scrimYds: 1495, scrimTd: 17, awards: "First-Team All-Pro, receiving Triple Crown" },
    p: { start: "1949", end: "1955", games: 79, rec: 343, recYds: 6534, recTd: 54, ypr: 19.0, recYpg: 82.7, recPg: 4.3, scrimYds: 6578, scrimTd: 54, awards: "1 title, 2 First-Team All-Pro" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 2, pb: 3, yardTitles: 1, recTitles: 1, tdTitles: 1, triple: 1 }
  },
  { id: "berry", name: "Raymond Berry", base: true, team: "Colts", era: "1955-67", gen: "Precision possession master", first: 1955, active: false, hof: true,
    c: { career: "13 seasons", games: 154, starts: null, rec: 631, recYds: 9275, recTd: 68, ypr: 14.7, scrimYds: 9275, scrimTd: 68, retTd: 0, allYds: 9275, recYpg: 60.2, recPg: 4.1, catchPct: null, fum: null },
    b: { season: "1960", games: 12, rec: 74, recYds: 1298, recTd: 10, ypr: 17.5, recYpg: 108.2, recPg: 6.2, scrimYds: 1298, scrimTd: 10, awards: "First-Team All-Pro" },
    p: { start: "1957", end: "1963", games: 89, rec: 505, recYds: 7621, recTd: 56, ypr: 15.1, recYpg: 85.6, recPg: 5.7, scrimYds: 7621, scrimTd: 56, awards: "2 titles, 3 First-Team All-Pro" },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 0, ap1: 3, pb: 6, yardTitles: 3, recTitles: 3, tdTitles: 0, triple: 0 }
  },
  { id: "alworth", name: "Lance Alworth", base: true, team: "Chargers / Cowboys", era: "1962-72", gen: "AFL vertical standard", first: 1962, active: false, hof: true,
    c: { career: "11 seasons", games: 136, starts: null, rec: 542, recYds: 10266, recTd: 85, ypr: 18.9, scrimYds: 10361, scrimTd: 86, retTd: 0, allYds: 10483, recYpg: 75.5, recPg: 4.0, catchPct: null, fum: null },
    b: { season: "1965", games: 14, rec: 69, recYds: 1602, recTd: 14, ypr: 23.2, recYpg: 114.4, recPg: 4.9, scrimYds: 1602, scrimTd: 14, awards: "First-Team All-Pro, receiving-yards title" },
    p: { start: "1963", end: "1969", games: 96, rec: 456, recYds: 9019, recTd: 73, ypr: 19.8, recYpg: 94.0, recPg: 4.8, scrimYds: 9114, scrimTd: 74, awards: "6 First-Team All-Pro, 3 receiving-yard titles" },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 0, ap1: 6, pb: 7, yardTitles: 3, recTitles: 3, tdTitles: 3, triple: 0 }
  },
  { id: "joiner", name: "Charlie Joiner", base: false, team: "Oilers / Bengals / Chargers", era: "1969-86", gen: "Air Coryell craftsman", first: 1969, active: false, hof: true,
    c: { career: "18 seasons", games: 239, starts: 133, rec: 750, recYds: 12146, recTd: 65, ypr: 16.2, scrimYds: 12169, scrimTd: 65, retTd: 0, allYds: 12351, recYpg: 50.8, recPg: 3.1, catchPct: null, fum: 16 },
    b: { season: "1980", games: 16, rec: 71, recYds: 1132, recTd: 4, ypr: 15.9, recYpg: 70.8, recPg: 4.4, scrimYds: 1132, scrimTd: 4, awards: "Pro Bowl" },
    p: { start: "1976", end: "1982", games: 104, rec: 472, recYds: 7719, recTd: 37, ypr: 16.4, recYpg: 74.2, recPg: 4.5, scrimYds: 7742, scrimTd: 37, awards: "3 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 0, pb: 3, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "carmichael", name: "Harold Carmichael", base: false, team: "Eagles / Cowboys", era: "1971-84", gen: "Tall target prototype", first: 1971, active: false, hof: true,
    c: { career: "14 seasons", games: 180, starts: 132, rec: 590, recYds: 8985, recTd: 79, ypr: 15.2, scrimYds: 8985, scrimTd: 79, retTd: 0, allYds: 9099, recYpg: 49.9, recPg: 3.3, catchPct: null, fum: 20 },
    b: { season: "1973", games: 14, rec: 67, recYds: 1116, recTd: 9, ypr: 16.7, recYpg: 79.7, recPg: 4.8, scrimYds: 1116, scrimTd: 9, awards: "First-Team All-Pro, receptions title" },
    p: { start: "1973", end: "1979", games: 96, rec: 419, recYds: 6274, recTd: 51, ypr: 15.0, recYpg: 65.4, recPg: 4.4, scrimYds: 6274, scrimTd: 51, awards: "1 First-Team All-Pro, 4 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 4, yardTitles: 0, recTitles: 1, tdTitles: 0, triple: 0 }
  },
  { id: "branch", name: "Cliff Branch", base: false, team: "Raiders", era: "1972-85", gen: "Postseason speed stress", first: 1972, active: false, hof: true,
    c: { career: "14 seasons", games: 183, starts: 150, rec: 501, recYds: 8685, recTd: 67, ypr: 17.3, scrimYds: 8701, scrimTd: 67, retTd: 0, allYds: 8915, recYpg: 47.5, recPg: 2.7, catchPct: null, fum: 11 },
    b: { season: "1974", games: 14, rec: 60, recYds: 1092, recTd: 13, ypr: 18.2, recYpg: 78.0, recPg: 4.3, scrimYds: 1092, scrimTd: 13, awards: "First-Team All-Pro, receiving TD title" },
    p: { start: "1974", end: "1980", games: 98, rec: 387, recYds: 6944, recTd: 56, ypr: 17.9, recYpg: 70.9, recPg: 3.9, scrimYds: 6960, scrimTd: 56, awards: "2 titles, 3 First-Team All-Pro" },
    a: { mvp: 0, opoy: 0, champs: 3, sbmvp: 0, ap1: 3, pb: 4, yardTitles: 1, recTitles: 0, tdTitles: 2, triple: 0 }
  },
  { id: "pearson", name: "Drew Pearson", base: false, team: "Cowboys", era: "1973-83", gen: "Original 88", first: 1973, active: false, hof: true,
    c: { career: "11 seasons", games: 156, starts: 131, rec: 489, recYds: 7822, recTd: 48, ypr: 16.0, scrimYds: 7854, scrimTd: 48, retTd: 0, allYds: 7952, recYpg: 50.1, recPg: 3.1, catchPct: null, fum: 11 },
    b: { season: "1977", games: 14, rec: 48, recYds: 870, recTd: 2, ypr: 18.1, recYpg: 62.1, recPg: 3.4, scrimYds: 870, scrimTd: 2, awards: "First-Team All-Pro, league title" },
    p: { start: "1974", end: "1980", games: 100, rec: 372, recYds: 6142, recTd: 34, ypr: 16.5, recYpg: 61.4, recPg: 3.7, scrimYds: 6174, scrimTd: 34, awards: "1 title, 3 First-Team All-Pro" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 3, pb: 3, yardTitles: 1, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "swann", name: "Lynn Swann", base: false, team: "Steelers", era: "1974-82", gen: "Dynasty acrobat", first: 1974, active: false, hof: true,
    c: { career: "9 seasons", games: 116, starts: 96, rec: 336, recYds: 5462, recTd: 51, ypr: 16.3, scrimYds: 5462, scrimTd: 51, retTd: 0, allYds: 5462, recYpg: 47.1, recPg: 2.9, catchPct: null, fum: 7 },
    b: { season: "1978", games: 16, rec: 61, recYds: 880, recTd: 11, ypr: 14.4, recYpg: 55.0, recPg: 3.8, scrimYds: 880, scrimTd: 11, awards: "First-Team All-Pro, league title" },
    p: { start: "1975", end: "1981", games: 93, rec: 310, recYds: 5007, recTd: 47, ypr: 16.2, recYpg: 53.8, recPg: 3.3, scrimYds: 5007, scrimTd: 47, awards: "3 titles, Super Bowl MVP" },
    a: { mvp: 0, opoy: 0, champs: 4, sbmvp: 1, ap1: 1, pb: 3, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "stallworth", name: "John Stallworth", base: false, team: "Steelers", era: "1974-87", gen: "Late-prime dynasty closer", first: 1974, active: false, hof: true,
    c: { career: "14 seasons", games: 165, starts: 116, rec: 537, recYds: 8723, recTd: 63, ypr: 16.2, scrimYds: 8723, scrimTd: 63, retTd: 0, allYds: 8723, recYpg: 52.9, recPg: 3.3, catchPct: null, fum: 13 },
    b: { season: "1984", games: 16, rec: 80, recYds: 1395, recTd: 11, ypr: 17.4, recYpg: 87.2, recPg: 5.0, scrimYds: 1395, scrimTd: 11, awards: "Comeback Player of the Year, Pro Bowl" },
    p: { start: "1978", end: "1984", games: 99, rec: 402, recYds: 6765, recTd: 46, ypr: 16.8, recYpg: 68.3, recPg: 4.1, scrimYds: 6765, scrimTd: 46, awards: "2 titles, 3 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 4, sbmvp: 0, ap1: 1, pb: 4, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "largent", name: "Steve Largent", base: true, team: "Seahawks", era: "1976-89", gen: "Expansion-era record holder", first: 1976, active: false, hof: true,
    c: { career: "14 seasons", games: 200, starts: 197, rec: 819, recYds: 13089, recTd: 100, ypr: 16.0, scrimYds: 13089, scrimTd: 100, retTd: 0, allYds: 13089, recYpg: 65.4, recPg: 4.1, catchPct: null, fum: 10 },
    b: { season: "1985", games: 16, rec: 79, recYds: 1287, recTd: 6, ypr: 16.3, recYpg: 80.4, recPg: 4.9, scrimYds: 1287, scrimTd: 6, awards: "First-Team All-Pro" },
    p: { start: "1978", end: "1984", games: 105, rec: 508, recYds: 8429, recTd: 65, ypr: 16.6, recYpg: 80.3, recPg: 4.8, scrimYds: 8429, scrimTd: 65, awards: "1 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 7, yardTitles: 2, recTitles: 0, tdTitles: 2, triple: 0 }
  },
  { id: "lofton", name: "James Lofton", base: false, team: "Packers / Raiders / Bills", era: "1978-93", gen: "Long-striding vertical volume", first: 1978, active: false, hof: true,
    c: { career: "16 seasons", games: 233, starts: 182, rec: 764, recYds: 14004, recTd: 75, ypr: 18.3, scrimYds: 14478, scrimTd: 76, retTd: 0, allYds: 15719, recYpg: 60.1, recPg: 3.3, catchPct: null, fum: 17 },
    b: { season: "1984", games: 16, rec: 62, recYds: 1361, recTd: 7, ypr: 22.0, recYpg: 85.1, recPg: 3.9, scrimYds: 1405, scrimTd: 7, awards: "Pro Bowl" },
    p: { start: "1979", end: "1985", games: 109, rec: 443, recYds: 8145, recTd: 45, ypr: 18.4, recYpg: 74.7, recPg: 4.1, scrimYds: 8581, scrimTd: 46, awards: "4 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 8, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "monk", name: "Art Monk", base: false, team: "Washington / Jets / Eagles", era: "1980-95", gen: "Chain-moving champion", first: 1980, active: false, hof: true,
    c: { career: "16 seasons", games: 224, starts: 198, rec: 940, recYds: 12721, recTd: 68, ypr: 13.5, scrimYds: 12721, scrimTd: 68, retTd: 0, allYds: 12721, recYpg: 56.8, recPg: 4.2, catchPct: null, fum: 12 },
    b: { season: "1984", games: 16, rec: 106, recYds: 1372, recTd: 7, ypr: 12.9, recYpg: 85.8, recPg: 6.6, scrimYds: 1372, scrimTd: 7, awards: "First-Team All-Pro, receptions title" },
    p: { start: "1984", end: "1990", games: 102, rec: 531, recYds: 7229, recTd: 41, ypr: 13.6, recYpg: 70.9, recPg: 5.2, scrimYds: 7229, scrimTd: 41, awards: "2 titles, 1 First-Team All-Pro" },
    a: { mvp: 0, opoy: 0, champs: 3, sbmvp: 0, ap1: 1, pb: 3, yardTitles: 0, recTitles: 1, tdTitles: 0, triple: 0 }
  },
  { id: "rice", name: "Jerry Rice", base: true, team: "49ers / Raiders / Seahawks", era: "1985-2004", gen: "Record-book standard", first: 1985, active: false, hof: true,
    c: { career: "20 seasons", games: 303, starts: 284, rec: 1549, recYds: 22895, recTd: 197, ypr: 14.8, scrimYds: 23546, scrimTd: 208, retTd: 0, allYds: 23546, recYpg: 75.6, recPg: 5.1, catchPct: null, fum: 27 },
    b: { season: "1995", games: 16, rec: 122, recYds: 1848, recTd: 15, ypr: 15.1, recYpg: 115.5, recPg: 7.6, scrimYds: 1884, scrimTd: 16, awards: "First-Team All-Pro, Offensive Player of the Year" },
    p: { start: "1986", end: "1992", games: 108, rec: 644, recYds: 10537, recTd: 103, ypr: 16.4, recYpg: 97.6, recPg: 6.0, scrimYds: 10832, scrimTd: 108, awards: "2 titles, 6 First-Team All-Pro, 2 OPOY" },
    a: { mvp: 0, opoy: 2, champs: 3, sbmvp: 1, ap1: 10, pb: 13, yardTitles: 6, recTitles: 2, tdTitles: 6, triple: 0 }
  },
  { id: "reed", name: "Andre Reed", base: false, team: "Bills / Washington", era: "1985-2000", gen: "K-Gun volume slot", first: 1985, active: false, hof: true,
    c: { career: "16 seasons", games: 234, starts: 203, rec: 951, recYds: 13198, recTd: 87, ypr: 13.9, scrimYds: 13287, scrimTd: 88, retTd: 0, allYds: 13287, recYpg: 56.4, recPg: 4.1, catchPct: null, fum: 14 },
    b: { season: "1989", games: 16, rec: 88, recYds: 1312, recTd: 9, ypr: 14.9, recYpg: 82.0, recPg: 5.5, scrimYds: 1312, scrimTd: 9, awards: "Pro Bowl" },
    p: { start: "1988", end: "1994", games: 110, rec: 610, recYds: 8342, recTd: 57, ypr: 13.7, recYpg: 75.8, recPg: 5.5, scrimYds: 8431, scrimTd: 58, awards: "7 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 0, pb: 7, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "carter", name: "Cris Carter", base: true, team: "Eagles / Vikings / Dolphins", era: "1987-2002", gen: "Boundary touchdown artist", first: 1987, active: false, hof: true,
    c: { career: "16 seasons", games: 234, starts: 209, rec: 1101, recYds: 13899, recTd: 130, ypr: 12.6, scrimYds: 13905, scrimTd: 130, retTd: 0, allYds: 13905, recYpg: 59.4, recPg: 4.7, catchPct: null, fum: 21 },
    b: { season: "1995", games: 16, rec: 122, recYds: 1371, recTd: 17, ypr: 11.2, recYpg: 85.7, recPg: 7.6, scrimYds: 1371, scrimTd: 17, awards: "First-Team All-Pro, receptions title, receiving TD title" },
    p: { start: "1993", end: "1999", games: 111, rec: 753, recYds: 9004, recTd: 85, ypr: 12.0, recYpg: 81.1, recPg: 6.8, scrimYds: 9004, scrimTd: 85, awards: "2 First-Team All-Pro, 7 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 2, pb: 8, yardTitles: 0, recTitles: 1, tdTitles: 3, triple: 0 }
  },
  { id: "brown", name: "Tim Brown", base: false, team: "Raiders / Buccaneers", era: "1988-2004", gen: "Returner-to-volume star", first: 1988, active: false, hof: true,
    c: { career: "17 seasons", games: 255, starts: 202, rec: 1094, recYds: 14934, recTd: 100, ypr: 13.7, scrimYds: 15124, scrimTd: 101, retTd: 4, allYds: 19074, recYpg: 58.6, recPg: 4.3, catchPct: null, fum: 15 },
    b: { season: "1997", games: 16, rec: 104, recYds: 1408, recTd: 5, ypr: 13.5, recYpg: 88.0, recPg: 6.5, scrimYds: 1408, scrimTd: 5, awards: "Second-Team All-Pro, receptions title" },
    p: { start: "1993", end: "1999", games: 112, rec: 620, recYds: 8670, recTd: 59, ypr: 14.0, recYpg: 77.4, recPg: 5.5, scrimYds: 8860, scrimTd: 60, awards: "7 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 0, pb: 9, yardTitles: 0, recTitles: 1, tdTitles: 0, triple: 0 }
  },
  { id: "irvin", name: "Michael Irvin", base: true, team: "Cowboys", era: "1988-99", gen: "Triplets tone-setter", first: 1988, active: false, hof: true,
    c: { career: "12 seasons", games: 159, starts: 147, rec: 750, recYds: 11904, recTd: 65, ypr: 15.9, scrimYds: 11904, scrimTd: 65, retTd: 0, allYds: 11904, recYpg: 74.9, recPg: 4.7, catchPct: null, fum: 11 },
    b: { season: "1995", games: 16, rec: 111, recYds: 1603, recTd: 10, ypr: 14.4, recYpg: 100.2, recPg: 6.9, scrimYds: 1603, scrimTd: 10, awards: "First-Team All-Pro, league title" },
    p: { start: "1991", end: "1997", games: 111, rec: 665, recYds: 10454, recTd: 58, ypr: 15.7, recYpg: 94.2, recPg: 6.0, scrimYds: 10454, scrimTd: 58, awards: "3 titles, 1 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 3, sbmvp: 0, ap1: 1, pb: 5, yardTitles: 1, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "sharpe", name: "Sterling Sharpe", base: false, team: "Packers", era: "1988-94", gen: "Short-career target hog", first: 1988, active: false, hof: true,
    c: { career: "7 seasons", games: 112, starts: 109, rec: 595, recYds: 8134, recTd: 65, ypr: 13.7, scrimYds: 8134, scrimTd: 65, retTd: 0, allYds: 8134, recYpg: 72.6, recPg: 5.3, catchPct: null, fum: 8 },
    b: { season: "1992", games: 16, rec: 108, recYds: 1461, recTd: 13, ypr: 13.5, recYpg: 91.3, recPg: 6.8, scrimYds: 1461, scrimTd: 13, awards: "First-Team All-Pro, receiving Triple Crown" },
    p: { start: "1988", end: "1994", games: 112, rec: 595, recYds: 8134, recTd: 65, ypr: 13.7, recYpg: 72.6, recPg: 5.3, scrimYds: 8134, scrimTd: 65, awards: "3 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 3, pb: 5, yardTitles: 1, recTitles: 3, tdTitles: 2, triple: 1 }
  },
  { id: "bruce", name: "Isaac Bruce", base: false, team: "Rams / 49ers", era: "1994-2009", gen: "Greatest Show vertical", first: 1994, active: false, hof: true,
    c: { career: "16 seasons", games: 223, starts: 202, rec: 1024, recYds: 15208, recTd: 91, ypr: 14.9, scrimYds: 15258, scrimTd: 91, retTd: 0, allYds: 15258, recYpg: 68.2, recPg: 4.6, catchPct: 55.1, fum: 17 },
    b: { season: "1995", games: 16, rec: 119, recYds: 1781, recTd: 13, ypr: 15.0, recYpg: 111.3, recPg: 7.4, scrimYds: 1781, scrimTd: 13, awards: "Pro Bowl" },
    p: { start: "1995", end: "2001", games: 100, rec: 562, recYds: 8792, recTd: 56, ypr: 15.6, recYpg: 87.9, recPg: 5.6, scrimYds: 8842, scrimTd: 56, awards: "1 title, 3 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 0, pb: 4, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "owens", name: "Terrell Owens", base: true, team: "49ers / Eagles / Cowboys", era: "1996-2010", gen: "Power-volume mismatch", first: 1996, active: false, hof: true,
    c: { career: "15 seasons", games: 219, starts: 201, rec: 1078, recYds: 15934, recTd: 153, ypr: 14.8, scrimYds: 16073, scrimTd: 156, retTd: 0, allYds: 16073, recYpg: 72.8, recPg: 4.9, catchPct: 56.7, fum: 22 },
    b: { season: "2001", games: 16, rec: 93, recYds: 1412, recTd: 16, ypr: 15.2, recYpg: 88.3, recPg: 5.8, scrimYds: 1429, scrimTd: 16, awards: "First-Team All-Pro, receiving TD title" },
    p: { start: "2000", end: "2007", games: 108, rec: 703, recYds: 10038, recTd: 95, ypr: 14.3, recYpg: 92.9, recPg: 6.5, scrimYds: 10177, scrimTd: 98, awards: "5 First-Team All-Pro, 6 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 5, pb: 6, yardTitles: 0, recTitles: 0, tdTitles: 3, triple: 0 }
  },
  { id: "moss", name: "Randy Moss", base: true, team: "Vikings / Patriots", era: "1998-2012", gen: "Field-tilting deep threat", first: 1998, active: false, hof: true,
    c: { career: "14 seasons", games: 218, starts: 193, rec: 982, recYds: 15292, recTd: 156, ypr: 15.6, scrimYds: 15308, scrimTd: 156, retTd: 0, allYds: 15308, recYpg: 70.1, recPg: 4.5, catchPct: 56.4, fum: 13 },
    b: { season: "2007", games: 16, rec: 98, recYds: 1493, recTd: 23, ypr: 15.2, recYpg: 93.3, recPg: 6.1, scrimYds: 1493, scrimTd: 23, awards: "First-Team All-Pro, receiving TD title" },
    p: { start: "1998", end: "2004", games: 109, rec: 574, recYds: 9142, recTd: 90, ypr: 15.9, recYpg: 83.9, recPg: 5.3, scrimYds: 9158, scrimTd: 90, awards: "3 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 4, pb: 6, yardTitles: 0, recTitles: 0, tdTitles: 5, triple: 0 }
  },
  { id: "holt", name: "Torry Holt", base: false, team: "Rams / Jaguars", era: "1999-2009", gen: "Route-speed volume engine", first: 1999, active: false, hof: false,
    c: { career: "11 seasons", games: 173, starts: 158, rec: 920, recYds: 13382, recTd: 74, ypr: 14.5, scrimYds: 13439, scrimTd: 74, retTd: 0, allYds: 13439, recYpg: 77.4, recPg: 5.3, catchPct: 59.7, fum: 8 },
    b: { season: "2003", games: 16, rec: 117, recYds: 1696, recTd: 12, ypr: 14.5, recYpg: 106.0, recPg: 7.3, scrimYds: 1696, scrimTd: 12, awards: "First-Team All-Pro, receiving-yards title" },
    p: { start: "2000", end: "2006", games: 111, rec: 712, recYds: 10324, recTd: 62, ypr: 14.5, recYpg: 93.0, recPg: 6.4, scrimYds: 10381, scrimTd: 62, awards: "1 First-Team All-Pro, 6 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 1, pb: 7, yardTitles: 2, recTitles: 1, tdTitles: 0, triple: 0 }
  },
  { id: "hines", name: "Hines Ward", base: false, team: "Steelers", era: "1998-2011", gen: "Blocking slot champion", first: 1998, active: false, hof: false,
    c: { career: "14 seasons", games: 217, starts: 190, rec: 1000, recYds: 12083, recTd: 85, ypr: 12.1, scrimYds: 12324, scrimTd: 86, retTd: 0, allYds: 12324, recYpg: 55.7, recPg: 4.6, catchPct: 59.8, fum: 12 },
    b: { season: "2002", games: 16, rec: 112, recYds: 1329, recTd: 12, ypr: 11.9, recYpg: 83.1, recPg: 7.0, scrimYds: 1471, scrimTd: 13, awards: "Second-Team All-Pro, Pro Bowl" },
    p: { start: "2001", end: "2007", games: 103, rec: 604, recYds: 7232, recTd: 58, ypr: 12.0, recYpg: 70.2, recPg: 5.9, scrimYds: 7473, scrimTd: 59, awards: "1 title, Super Bowl MVP, 4 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 1, ap1: 0, pb: 4, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "harrison", name: "Marvin Harrison", base: true, team: "Colts", era: "1996-2008", gen: "Timing-route machine", first: 1996, active: false, hof: true,
    c: { career: "13 seasons", games: 190, starts: 188, rec: 1102, recYds: 14580, recTd: 128, ypr: 13.2, scrimYds: 14580, scrimTd: 128, retTd: 0, allYds: 14580, recYpg: 76.7, recPg: 5.8, catchPct: 61.7, fum: 7 },
    b: { season: "2002", games: 16, rec: 143, recYds: 1722, recTd: 11, ypr: 12.0, recYpg: 107.6, recPg: 8.9, scrimYds: 1722, scrimTd: 11, awards: "First-Team All-Pro, receptions and yards titles" },
    p: { start: "1999", end: "2006", games: 110, rec: 826, recYds: 10919, recTd: 95, ypr: 13.2, recYpg: 99.3, recPg: 7.5, scrimYds: 10919, scrimTd: 95, awards: "1 title, 3 First-Team All-Pro, 8 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 3, pb: 8, yardTitles: 2, recTitles: 2, tdTitles: 1, triple: 0 }
  },
  { id: "fitzgerald", name: "Larry Fitzgerald", base: true, team: "Cardinals", era: "2004-20", gen: "Hands / longevity icon", first: 2004, active: false, hof: true,
    c: { career: "17 seasons", games: 263, starts: 261, rec: 1432, recYds: 17492, recTd: 121, ypr: 12.2, scrimYds: 17492, scrimTd: 121, retTd: 0, allYds: 17492, recYpg: 66.5, recPg: 5.4, catchPct: 62.4, fum: 12 },
    b: { season: "2008", games: 16, rec: 96, recYds: 1431, recTd: 12, ypr: 14.9, recYpg: 89.4, recPg: 6.0, scrimYds: 1431, scrimTd: 12, awards: "First-Team All-Pro" },
    p: { start: "2005", end: "2011", games: 107, rec: 613, recYds: 8817, recTd: 65, ypr: 14.4, recYpg: 82.4, recPg: 5.7, scrimYds: 8817, scrimTd: 65, awards: "1 First-Team All-Pro, 6 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 11, yardTitles: 0, recTitles: 2, tdTitles: 2, triple: 0 }
  },
  { id: "wayne", name: "Reggie Wayne", base: false, team: "Colts", era: "2001-14", gen: "Precision WR2-to-WR1", first: 2001, active: false, hof: false,
    c: { career: "14 seasons", games: 211, starts: 197, rec: 1070, recYds: 14345, recTd: 82, ypr: 13.4, scrimYds: 14345, scrimTd: 82, retTd: 0, allYds: 14345, recYpg: 68.0, recPg: 5.1, catchPct: 61.3, fum: 7 },
    b: { season: "2007", games: 16, rec: 104, recYds: 1510, recTd: 10, ypr: 14.5, recYpg: 94.4, recPg: 6.5, scrimYds: 1510, scrimTd: 10, awards: "First-Team All-Pro, receiving-yards title" },
    p: { start: "2004", end: "2010", games: 111, rec: 685, recYds: 9280, recTd: 63, ypr: 13.5, recYpg: 83.6, recPg: 6.2, scrimYds: 9280, scrimTd: 63, awards: "1 title, 1 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 1, pb: 6, yardTitles: 1, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "andre", name: "Andre Johnson", base: false, team: "Texans / Colts / Titans", era: "2003-16", gen: "Target-monster prototype", first: 2003, active: false, hof: true,
    c: { career: "14 seasons", games: 193, starts: 186, rec: 1062, recYds: 14185, recTd: 70, ypr: 13.4, scrimYds: 14230, scrimTd: 70, retTd: 0, allYds: 14230, recYpg: 73.5, recPg: 5.5, catchPct: 60.9, fum: 10 },
    b: { season: "2008", games: 16, rec: 115, recYds: 1575, recTd: 8, ypr: 13.7, recYpg: 98.4, recPg: 7.2, scrimYds: 1575, scrimTd: 8, awards: "First-Team All-Pro, receptions and yards titles" },
    p: { start: "2006", end: "2012", games: 92, rec: 633, recYds: 8669, recTd: 40, ypr: 13.7, recYpg: 94.2, recPg: 6.9, scrimYds: 8714, scrimTd: 40, awards: "2 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 2, pb: 7, yardTitles: 2, recTitles: 2, tdTitles: 0, triple: 0 }
  },
  { id: "boldin", name: "Anquan Boldin", base: false, team: "Cardinals / Ravens / 49ers", era: "2003-16", gen: "Power slot possession", first: 2003, active: false, hof: false,
    c: { career: "14 seasons", games: 202, starts: 188, rec: 1076, recYds: 13779, recTd: 82, ypr: 12.8, scrimYds: 13909, scrimTd: 82, retTd: 0, allYds: 13909, recYpg: 68.2, recPg: 5.3, catchPct: 61.7, fum: 12 },
    b: { season: "2005", games: 14, rec: 102, recYds: 1402, recTd: 7, ypr: 13.7, recYpg: 100.1, recPg: 7.3, scrimYds: 1402, scrimTd: 7, awards: "Pro Bowl" },
    p: { start: "2003", end: "2009", games: 95, rec: 586, recYds: 7520, recTd: 44, ypr: 12.8, recYpg: 79.2, recPg: 6.2, scrimYds: 7650, scrimTd: 44, awards: "3 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 0, pb: 3, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "welker", name: "Wes Welker", base: false, team: "Patriots / Dolphins / Broncos", era: "2004-15", gen: "Modern slot volume", first: 2004, active: false, hof: false,
    c: { career: "12 seasons", games: 175, starts: 102, rec: 903, recYds: 9924, recTd: 50, ypr: 11.0, scrimYds: 9992, scrimTd: 50, retTd: 1, allYds: 14816, recYpg: 56.7, recPg: 5.2, catchPct: 69.7, fum: 20 },
    b: { season: "2011", games: 16, rec: 122, recYds: 1569, recTd: 9, ypr: 12.9, recYpg: 98.1, recPg: 7.6, scrimYds: 1579, scrimTd: 9, awards: "First-Team All-Pro, receptions title" },
    p: { start: "2007", end: "2013", games: 108, rec: 780, recYds: 8781, recTd: 48, ypr: 11.3, recYpg: 81.3, recPg: 7.2, scrimYds: 8849, scrimTd: 48, awards: "2 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 2, pb: 5, yardTitles: 0, recTitles: 3, tdTitles: 0, triple: 0 }
  },
  { id: "marshall", name: "Brandon Marshall", base: false, team: "Broncos / Bears / Jets", era: "2006-18", gen: "High-volume contested target", first: 2006, active: false, hof: false,
    c: { career: "13 seasons", games: 179, starts: 164, rec: 970, recYds: 12351, recTd: 83, ypr: 12.7, scrimYds: 12431, scrimTd: 83, retTd: 0, allYds: 12431, recYpg: 69.0, recPg: 5.4, catchPct: 59.9, fum: 19 },
    b: { season: "2012", games: 16, rec: 118, recYds: 1508, recTd: 11, ypr: 12.8, recYpg: 94.3, recPg: 7.4, scrimYds: 1508, scrimTd: 11, awards: "First-Team All-Pro" },
    p: { start: "2007", end: "2013", games: 109, rec: 712, recYds: 9050, recTd: 57, ypr: 12.7, recYpg: 83.0, recPg: 6.5, scrimYds: 9130, scrimTd: 57, awards: "1 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 6, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "calvin", name: "Calvin Johnson", base: true, team: "Lions", era: "2007-15", gen: "Megatron peak", first: 2007, active: false, hof: true,
    c: { career: "9 seasons", games: 135, starts: 130, rec: 731, recYds: 11619, recTd: 83, ypr: 15.9, scrimYds: 11619, scrimTd: 83, retTd: 0, allYds: 11619, recYpg: 86.1, recPg: 5.4, catchPct: 55.7, fum: 14 },
    b: { season: "2012", games: 16, rec: 122, recYds: 1964, recTd: 5, ypr: 16.1, recYpg: 122.8, recPg: 7.6, scrimYds: 1964, scrimTd: 5, awards: "First-Team All-Pro, receiving-yards title" },
    p: { start: "2008", end: "2014", games: 105, rec: 643, recYds: 10259, recTd: 71, ypr: 16.0, recYpg: 97.7, recPg: 6.1, scrimYds: 10259, scrimTd: 71, awards: "3 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 3, pb: 6, yardTitles: 2, recTitles: 0, tdTitles: 1, triple: 0 }
  },
  { id: "desean", name: "DeSean Jackson", base: false, team: "Eagles / Washington / Buccaneers", era: "2008-22", gen: "Explosive return/deep threat", first: 2008, active: false, hof: false,
    c: { career: "15 seasons", games: 183, starts: 165, rec: 641, recYds: 11263, recTd: 58, ypr: 17.6, scrimYds: 11757, scrimTd: 62, retTd: 4, allYds: 14349, recYpg: 61.5, recPg: 3.5, catchPct: 56.4, fum: 21 },
    b: { season: "2013", games: 16, rec: 82, recYds: 1332, recTd: 9, ypr: 16.2, recYpg: 83.3, recPg: 5.1, scrimYds: 1364, scrimTd: 9, awards: "Pro Bowl" },
    p: { start: "2008", end: "2014", games: 103, rec: 426, recYds: 7116, recTd: 39, ypr: 16.7, recYpg: 69.1, recPg: 4.1, scrimYds: 7610, scrimTd: 43, awards: "3 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 0, pb: 3, yardTitles: 0, recTitles: 0, tdTitles: 0, triple: 0 }
  },
  { id: "abrown", name: "Antonio Brown", base: true, team: "Steelers / Buccaneers", era: "2010-21", gen: "Route / target-share peak", first: 2010, active: false, hof: false,
    c: { career: "12 seasons", games: 146, starts: 116, rec: 928, recYds: 12291, recTd: 83, ypr: 13.2, scrimYds: 12432, scrimTd: 83, retTd: 5, allYds: 15054, recYpg: 84.2, recPg: 6.4, catchPct: 65.5, fum: 14 },
    b: { season: "2015", games: 16, rec: 136, recYds: 1834, recTd: 10, ypr: 13.5, recYpg: 114.6, recPg: 8.5, scrimYds: 1862, scrimTd: 10, awards: "First-Team All-Pro, receptions title" },
    p: { start: "2013", end: "2019", games: 102, rec: 841, recYds: 11263, recTd: 75, ypr: 13.4, recYpg: 110.4, recPg: 8.2, scrimYds: 11404, scrimTd: 75, awards: "1 title, 4 First-Team All-Pro, 7 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 4, pb: 7, yardTitles: 2, recTitles: 2, tdTitles: 1, triple: 0 }
  },
  { id: "julio", name: "Julio Jones", base: true, team: "Falcons / Titans / Buccaneers", era: "2011-23", gen: "Explosive size-speed volume", first: 2011, active: false, hof: false,
    c: { career: "13 seasons", games: 166, starts: 161, rec: 914, recYds: 13629, recTd: 63, ypr: 14.9, scrimYds: 13675, scrimTd: 63, retTd: 0, allYds: 13675, recYpg: 82.1, recPg: 5.5, catchPct: 63.9, fum: 11 },
    b: { season: "2015", games: 16, rec: 136, recYds: 1871, recTd: 8, ypr: 13.8, recYpg: 116.9, recPg: 8.5, scrimYds: 1871, scrimTd: 8, awards: "First-Team All-Pro, receptions and yards titles" },
    p: { start: "2014", end: "2020", games: 94, rec: 658, recYds: 9668, recTd: 43, ypr: 14.7, recYpg: 102.9, recPg: 7.0, scrimYds: 9714, scrimTd: 43, awards: "2 First-Team All-Pro, 6 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 2, pb: 7, yardTitles: 2, recTitles: 1, tdTitles: 0, triple: 0 }
  },
  { id: "hopkins", name: "DeAndre Hopkins", base: false, team: "Texans / Cardinals / Titans", era: "2013-present", gen: "Contested-catch technician", first: 2013, active: true, hof: false,
    c: { career: "13 seasons", games: 182, starts: 170, rec: 1015, recYds: 12965, recTd: 89, ypr: 12.8, scrimYds: 12965, scrimTd: 89, retTd: 0, allYds: 12965, recYpg: 71.2, recPg: 5.6, catchPct: 61.9, fum: 9 },
    b: { season: "2018", games: 16, rec: 115, recYds: 1572, recTd: 11, ypr: 13.7, recYpg: 98.3, recPg: 7.2, scrimYds: 1572, scrimTd: 11, awards: "First-Team All-Pro" },
    p: { start: "2014", end: "2020", games: 110, rec: 736, recYds: 9603, recTd: 60, ypr: 13.0, recYpg: 87.3, recPg: 6.7, scrimYds: 9603, scrimTd: 60, awards: "3 First-Team All-Pro, 5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 3, pb: 5, yardTitles: 0, recTitles: 0, tdTitles: 1, triple: 0 }
  },
  { id: "evans", name: "Mike Evans", base: false, team: "Buccaneers", era: "2014-present", gen: "Touchdown / 1,000-yard machine", first: 2014, active: true, hof: false,
    c: { career: "12 seasons", games: 174, starts: 172, rec: 836, recYds: 12840, recTd: 109, ypr: 15.4, scrimYds: 12840, scrimTd: 109, retTd: 0, allYds: 12840, recYpg: 73.8, recPg: 4.8, catchPct: 57.5, fum: 11 },
    b: { season: "2018", games: 16, rec: 86, recYds: 1524, recTd: 8, ypr: 17.7, recYpg: 95.3, recPg: 5.4, scrimYds: 1524, scrimTd: 8, awards: "Second-Team All-Pro, Pro Bowl" },
    p: { start: "2016", end: "2022", games: 105, rec: 536, recYds: 8437, recTd: 67, ypr: 15.7, recYpg: 80.4, recPg: 5.1, scrimYds: 8437, scrimTd: 67, awards: "1 title, 4 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 0, pb: 6, yardTitles: 0, recTitles: 0, tdTitles: 1, triple: 0 }
  },
  { id: "adams", name: "Davante Adams", base: false, team: "Packers / Raiders / Jets", era: "2014-present", gen: "Release package technician", first: 2014, active: true, hof: false,
    c: { career: "12 seasons", games: 169, starts: 162, rec: 1034, recYds: 12732, recTd: 112, ypr: 12.3, scrimYds: 12732, scrimTd: 112, retTd: 0, allYds: 12732, recYpg: 75.3, recPg: 6.1, catchPct: 63.6, fum: 7 },
    b: { season: "2021", games: 16, rec: 123, recYds: 1553, recTd: 11, ypr: 12.6, recYpg: 97.1, recPg: 7.7, scrimYds: 1553, scrimTd: 11, awards: "First-Team All-Pro" },
    p: { start: "2016", end: "2022", games: 102, rec: 741, recYds: 8925, recTd: 87, ypr: 12.0, recYpg: 87.5, recPg: 7.3, scrimYds: 8925, scrimTd: 87, awards: "3 First-Team All-Pro, 6 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 3, pb: 6, yardTitles: 0, recTitles: 0, tdTitles: 2, triple: 0 }
  },
  { id: "hill", name: "Tyreek Hill", base: false, team: "Chiefs / Dolphins", era: "2016-present", gen: "Horizontal/vertical speed stress", first: 2016, active: true, hof: false,
    c: { career: "10 seasons", games: 146, starts: 129, rec: 819, recYds: 11363, recTd: 77, ypr: 13.9, scrimYds: 11829, scrimTd: 84, retTd: 5, allYds: 15642, recYpg: 77.8, recPg: 5.6, catchPct: 67.6, fum: 9 },
    b: { season: "2023", games: 16, rec: 119, recYds: 1799, recTd: 13, ypr: 15.1, recYpg: 112.4, recPg: 7.4, scrimYds: 1814, scrimTd: 13, awards: "First-Team All-Pro, receiving-yards title" },
    p: { start: "2017", end: "2023", games: 105, rec: 664, recYds: 9680, recTd: 66, ypr: 14.6, recYpg: 92.2, recPg: 6.3, scrimYds: 10145, scrimTd: 73, awards: "2 titles, 5 First-Team All-Pro, 7 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 0, ap1: 5, pb: 8, yardTitles: 1, recTitles: 0, tdTitles: 1, triple: 0 }
  },
  { id: "jefferson", name: "Justin Jefferson", base: false, team: "Vikings", era: "2020-present", gen: "Early-career yardage pace", first: 2020, active: true, hof: false,
    c: { career: "6 seasons", games: 77, starts: 76, rec: 495, recYds: 7432, recTd: 40, ypr: 15.0, scrimYds: 7432, scrimTd: 40, retTd: 0, allYds: 7432, recYpg: 96.5, recPg: 6.4, catchPct: 68.1, fum: 4 },
    b: { season: "2022", games: 17, rec: 128, recYds: 1809, recTd: 8, ypr: 14.1, recYpg: 106.4, recPg: 7.5, scrimYds: 1809, scrimTd: 8, awards: "Offensive Player of the Year, First-Team All-Pro, receptions and yards titles" },
    p: { start: "2020", end: "2025", games: 77, rec: 495, recYds: 7432, recTd: 40, ypr: 15.0, recYpg: 96.5, recPg: 6.4, scrimYds: 7432, scrimTd: 40, awards: "1 OPOY, 2 First-Team All-Pro, 4 Pro Bowls" },
    a: { mvp: 0, opoy: 1, champs: 0, sbmvp: 0, ap1: 2, pb: 4, yardTitles: 1, recTitles: 1, tdTitles: 0, triple: 0 }
  }
];

const lowIsBestMetrics = new Set(["fum", "avg"]);
const rankMetrics = ["games","starts","rec","recYds","recTd","ypr","scrimYds","scrimTd","retTd","allYds","recYpg","recPg","catchPct","fum","mvp","opoy","champs","sbmvp","ap1","pb","yardTitles","recTitles","tdTitles","triple"];
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

function avgPeakRank(player, selected) {
  const source = p => p.p;
  const keys = ["games","rec","recYds","recTd","ypr","recYpg","recPg","scrimYds","scrimTd"];
  const total = keys.reduce((sum, key) => {
    if (player.p[key] == null) return sum;
    return sum + ranksFor(selected, key, source)[player.id];
  }, 0);
  const count = keys.filter(key => player.p[key] != null).length;
  return (total / count).toFixed(2);
}

function renderHeader(table, selected) {
  table.querySelector("thead").innerHTML = "<tr><th>Category</th>" + selected.map(player => "<th>" + player.name + "</th>").join("") + "</tr>";
}

function groupRow(label, count) { return "<tr class=\"group-row\"><td colspan=\"" + (count + 1) + "\">" + label + "</td></tr>"; }
function row(label, selected, render, highlight, cls = "") {
  return "<tr" + (cls ? " class=\"" + cls + "\"" : "") + ">" + cell(label, "category") + dataCells(selected, render, highlight) + "</tr>";
}

function metricRows(selected, source, ranked = false, includeStarts = true) {
  const value = (player, key, suffix = "") => ranked ? rankedValue(player, key, source, suffix) : fmt(source(player)[key], suffix);
  return [
    groupRow("Receiving Stats", selected.length),
    row("Games", selected, p => value(p, "games"), { key: "games", source }),
    ...(includeStarts ? [row("Starts", selected, p => value(p, "starts"), { key: "starts", source })] : []),
    row("Receptions", selected, p => value(p, "rec"), { key: "rec", source }),
    row("Receiving Yards", selected, p => value(p, "recYds"), { key: "recYds", source }),
    row("Receiving TDs", selected, p => value(p, "recTd"), { key: "recTd", source }),
    row("Yards / Reception", selected, p => value(p, "ypr"), { key: "ypr", source }),
    groupRow("Scoring / Versatility", selected.length),
    row("Scrimmage Yards", selected, p => value(p, "scrimYds"), { key: "scrimYds", source }),
    row("Scrimmage TDs", selected, p => value(p, "scrimTd"), { key: "scrimTd", source }),
    ...(includeStarts ? [
      row("Return TDs", selected, p => value(p, "retTd"), { key: "retTd", source }),
      row("All-Purpose Yards", selected, p => value(p, "allYds"), { key: "allYds", source })
    ] : []),
    groupRow("Efficiency / Usage", selected.length),
    row("Receiving Yards / Game", selected, p => value(p, "recYpg"), { key: "recYpg", source }),
    row("Receptions / Game", selected, p => value(p, "recPg"), { key: "recPg", source }),
    ...(includeStarts ? [
      row("Catch Percentage", selected, p => value(p, "catchPct", "%"), { key: "catchPct", source }),
      row("Fumbles", selected, p => value(p, "fum"), { key: "fum", source })
    ] : [])
  ];
}

function renderCareer(selected) {
  const table = document.querySelector("#careerTable");
  renderHeader(table, selected);
  const c = player => player.c;
  const a = player => player.a;
  const rows = [
    row("Team / Era", selected, p => "<span class=\"player\">" + p.team + "<span class=\"era\">" + p.era + " | " + p.gen + "</span></span>"),
    row("Career", selected, p => p.c.career),
    ...metricRows(selected, c, true, true),
    groupRow("Accolades", selected.length),
    row("Hall of Fame", selected, p => p.hof ? "Yes" : "No"),
    row("MVP", selected, p => rankedValue(p, "mvp", a), { key: "mvp", source: a }),
    row("Offensive Player of the Year", selected, p => rankedValue(p, "opoy", a), { key: "opoy", source: a }),
    row("League Titles / Super Bowl Wins", selected, p => rankedValue(p, "champs", a), { key: "champs", source: a }),
    row("Super Bowl MVPs", selected, p => rankedValue(p, "sbmvp", a), { key: "sbmvp", source: a }),
    row("First-Team All-Pro", selected, p => rankedValue(p, "ap1", a), { key: "ap1", source: a }),
    row("Pro Bowl", selected, p => rankedValue(p, "pb", a), { key: "pb", source: a }),
    row("Receiving Yards Titles", selected, p => rankedValue(p, "yardTitles", a), { key: "yardTitles", source: a }),
    row("Receptions Titles", selected, p => rankedValue(p, "recTitles", a), { key: "recTitles", source: a }),
    row("Receiving TD Titles", selected, p => rankedValue(p, "tdTitles", a), { key: "tdTitles", source: a }),
    row("Triple Crown Receiving Seasons", selected, p => rankedValue(p, "triple", a), { key: "triple", source: a }),
    row("Avg Rank", selected, p => avgRank(p, selected), { key: "avg", source: p => ({ avg: Number(avgRank(p, selected)) }), lowIsBest: true }, "avg-rank-row")
  ];
  table.querySelector("tbody").innerHTML = rows.join("");
}

function renderSeasonTable(tableId, sourceKey, includeRange) {
  const selected = selectedPlayers();
  const table = document.querySelector(tableId);
  renderHeader(table, selected);
  const source = player => player[sourceKey];
  const seasonLabel = sourceKey === "p" ? p => "<span class=\"range\"><span>" + p.p.start + "</span><span>through</span><span>" + p.p.end + "</span></span>" : p => p.b.season;
  const rows = [
    row(includeRange ? "Years" : "Season", selected, seasonLabel),
    ...metricRows(selected, source, false, false),
    ...(sourceKey === "b" ? [row("MVP / OPOY / All-Pro", selected, p => source(p).awards || "N/A")] : []),
    ...(sourceKey === "p" ? [
      row("Major Awards During Window", selected, p => source(p).awards || "N/A"),
      row("Avg Rank", selected, p => avgPeakRank(p, selected), { key: "avg", source: p => ({ avg: Number(avgPeakRank(p, selected)) }), lowIsBest: true }, "avg-rank-row")
    ] : [])
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

function setSelectorOpen(isOpen) {
  playerSelectorDropdown.hidden = !isOpen;
  playerMenuButton.setAttribute("aria-expanded", String(isOpen));
}

playerMenuButton.addEventListener("click", event => {
  event.stopPropagation();
  setSelectorOpen(playerSelectorDropdown.hidden);
});
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
