const players = [
  { id: "vanburen", name: "Steve Van Buren", base: false, team: "Eagles", era: "1944-51", gen: "Two-way war-era workhorse", first: 1944, active: false, hof: true,
    c: { career: "8 seasons", games: 83, starts: null, att: 1320, rushYds: 5860, rushTd: 69, ypc: 4.4, rec: 45, recYds: 523, recTd: 3, scrimYds: 6383, scrimTd: 72, touch: 1365, ypt: 4.7, fum: null, rushYpg: 70.6, scrimYpg: 76.9 },
    b: { season: "1949", games: 12, starts: null, att: 263, rushYds: 1146, rushTd: 11, ypc: 4.4, rec: 3, recYds: 40, recTd: 0, scrimYds: 1186, scrimTd: 11, touch: 266, ypt: 4.5, rushYpg: 95.5, scrimYpg: 98.8 },
    p: { start: "1945", end: "1951", games: 72, starts: null, att: 1247, rushYds: 5511, rushTd: 65, ypc: 4.4, rec: 38, recYds: 441, recTd: 3, scrimYds: 5952, scrimTd: 68, touch: 1285, ypt: 4.6, rushYpg: 76.5, scrimYpg: 82.7 },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 0, ap1: 4, pb: 0, rushTitles: 4, scrimTitles: 3 }
  },
  { id: "perry", name: "Joe Perry", base: false, team: "49ers / Colts", era: "1948-63", gen: "AAFC-to-modern speed fullback", first: 1948, active: false, hof: true,
    c: { career: "16 seasons", games: 181, starts: null, att: 1929, rushYds: 9723, rushTd: 71, ypc: 5.0, rec: 260, recYds: 2021, recTd: 12, scrimYds: 11744, scrimTd: 83, touch: 2189, ypt: 5.4, fum: null, rushYpg: 53.7, scrimYpg: 64.9 },
    b: { season: "1954", games: 12, starts: null, att: 173, rushYds: 1018, rushTd: 8, ypc: 5.9, rec: 12, recYds: 116, recTd: 1, scrimYds: 1134, scrimTd: 9, touch: 185, ypt: 6.1, rushYpg: 84.8, scrimYpg: 94.5, awards: "AP1, rushing title" },
    p: { start: "1949", end: "1955", games: 82, starts: null, att: 1098, rushYds: 5927, rushTd: 44, ypc: 5.4, rec: 149, recYds: 1155, recTd: 6, scrimYds: 7082, scrimTd: 50, touch: 1247, ypt: 5.7, rushYpg: 72.3, scrimYpg: 86.4, awards: "2 rushing titles" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 2, pb: 3, rushTitles: 2, scrimTitles: 1 }
  },
  { id: "motley", name: "Marion Motley", base: false, team: "Browns", era: "1946-55", gen: "AAFC / early power back", first: 1946, active: false, hof: true,
    c: { career: "9 seasons", games: 107, starts: null, att: 828, rushYds: 4720, rushTd: 31, ypc: 5.7, rec: 85, recYds: 1107, recTd: 7, scrimYds: 5827, scrimTd: 38, touch: 913, ypt: 6.4, fum: null, rushYpg: 44.1, scrimYpg: 54.5 },
    b: { season: "1950", games: 12, starts: null, att: 140, rushYds: 810, rushTd: 4, ypc: 5.8, rec: 14, recYds: 181, recTd: 0, scrimYds: 991, scrimTd: 4, touch: 154, ypt: 6.4, rushYpg: 67.5, scrimYpg: 82.6 },
    p: { start: "1946", end: "1952", games: 82, starts: null, att: 739, rushYds: 4557, rushTd: 31, ypc: 6.2, rec: 82, recYds: 1089, recTd: 7, scrimYds: 5646, scrimTd: 38, touch: 821, ypt: 6.9, rushYpg: 55.6, scrimYpg: 68.9 },
    a: { mvp: 0, opoy: 0, champs: 5, sbmvp: 0, ap1: 1, pb: 1, rushTitles: 1, scrimTitles: 1 }
  },
  { id: "moore", name: "Lenny Moore", base: false, team: "Colts", era: "1956-67", gen: "Open-field receiving hybrid", first: 1956, active: false, hof: true,
    c: { career: "12 seasons", games: 143, starts: 81, att: 1069, rushYds: 5174, rushTd: 63, ypc: 4.8, rec: 363, recYds: 6039, recTd: 48, scrimYds: 11213, scrimTd: 111, touch: 1432, ypt: 7.8, fum: 52, rushYpg: 36.2, scrimYpg: 78.4 },
    b: { season: "1964", games: 14, starts: 13, att: 149, rushYds: 584, rushTd: 16, ypc: 3.9, rec: 21, recYds: 472, recTd: 3, scrimYds: 1056, scrimTd: 19, touch: 170, ypt: 6.2, rushYpg: 41.7, scrimYpg: 75.4 },
    p: { start: "1957", end: "1964", games: 94, starts: 69, att: 851, rushYds: 4316, rushTd: 51, ypc: 5.1, rec: 278, recYds: 4822, recTd: 42, scrimYds: 9138, scrimTd: 93, touch: 1129, ypt: 8.1, rushYpg: 45.9, scrimYpg: 97.2 },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 0, ap1: 5, pb: 7, rushTitles: 0, scrimTitles: 1 }
  },
  { id: "walker", name: "Doak Walker", base: false, team: "Lions", era: "1950-55", gen: "All-purpose early-era star", first: 1950, active: false, hof: true,
    c: { career: "6 seasons", games: 67, starts: null, att: 309, rushYds: 1520, rushTd: 12, ypc: 4.9, rec: 152, recYds: 2539, recTd: 21, scrimYds: 4059, scrimTd: 33, touch: 461, ypt: 8.8, fum: null, rushYpg: 22.7, scrimYpg: 60.6 },
    b: { season: "1950", games: 12, starts: null, att: 83, rushYds: 386, rushTd: 4, ypc: 4.7, rec: 35, recYds: 534, recTd: 6, scrimYds: 920, scrimTd: 10, touch: 118, ypt: 7.8, rushYpg: 32.2, scrimYpg: 76.7, awards: "AP1" },
    p: { start: "1950", end: "1955", games: 67, starts: null, att: 309, rushYds: 1520, rushTd: 12, ypc: 4.9, rec: 152, recYds: 2539, recTd: 21, scrimYds: 4059, scrimTd: 33, touch: 461, ypt: 8.8, rushYpg: 22.7, scrimYpg: 60.6, awards: "4 AP1, 2 titles" },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 0, ap1: 4, pb: 5, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "brown", name: "Jim Brown", base: true, team: "Browns", era: "1957-65", gen: "Peak standard setter", first: 1957, active: false, hof: true,
    c: { career: "9 seasons", games: 118, starts: 114, att: 2359, rushYds: 12312, rushTd: 106, ypc: 5.2, rec: 262, recYds: 2499, recTd: 20, scrimYds: 14811, scrimTd: 126, touch: 2621, ypt: 5.7, fum: 57, rushYpg: 104.3, scrimYpg: 125.5 },
    b: { season: "1963", games: 14, starts: 14, att: 291, rushYds: 1863, rushTd: 12, ypc: 6.4, rec: 24, recYds: 268, recTd: 3, scrimYds: 2131, scrimTd: 15, touch: 315, ypt: 6.8, rushYpg: 133.1, scrimYpg: 152.2 },
    p: { start: "1958", end: "1965", games: 104, starts: 102, att: 2089, rushYds: 11070, rushTd: 95, ypc: 5.3, rec: 246, recYds: 2371, recTd: 19, scrimYds: 13441, scrimTd: 114, touch: 2335, ypt: 5.8, rushYpg: 106.4, scrimYpg: 129.2 },
    a: { mvp: 3, opoy: 0, champs: 1, sbmvp: 0, ap1: 8, pb: 9, rushTitles: 8, scrimTitles: 6 }
  },
  { id: "gilchrist", name: "Cookie Gilchrist", base: false, team: "Bills / Broncos", era: "1958-67", gen: "AFL power pioneer", first: 1958, active: false, hof: false,
    c: { career: "6 seasons", games: 66, starts: null, att: 1031, rushYds: 4293, rushTd: 43, ypc: 4.2, rec: 92, recYds: 1249, recTd: 4, scrimYds: 5542, scrimTd: 47, touch: 1123, ypt: 4.9, fum: null, rushYpg: 65.0, scrimYpg: 84.0 },
    b: { season: "1962", games: 14, starts: null, att: 214, rushYds: 1096, rushTd: 13, ypc: 5.1, rec: 24, recYds: 319, recTd: 1, scrimYds: 1415, scrimTd: 14, touch: 238, ypt: 5.9, rushYpg: 78.3, scrimYpg: 101.1, awards: "MVP, AP1, rushing title" },
    p: { start: "1962", end: "1966", games: 62, starts: null, att: 1018, rushYds: 4241, rushTd: 43, ypc: 4.2, rec: 86, recYds: 1158, recTd: 4, scrimYds: 5399, scrimTd: 47, touch: 1104, ypt: 4.9, rushYpg: 68.4, scrimYpg: 87.1, awards: "MVP, 4 AP1" },
    a: { mvp: 1, opoy: 0, champs: 1, sbmvp: 0, ap1: 4, pb: 4, rushTitles: 2, scrimTitles: 1 }
  },
  { id: "sayers", name: "Gale Sayers", base: true, team: "Bears", era: "1965-71", gen: "Open-field lightning", first: 1965, active: false, hof: true,
    c: { career: "7 seasons", games: 68, starts: 61, att: 991, rushYds: 4956, rushTd: 39, ypc: 5.0, rec: 112, recYds: 1307, recTd: 9, scrimYds: 6263, scrimTd: 48, touch: 1103, ypt: 5.7, fum: 34, rushYpg: 72.9, scrimYpg: 92.1 },
    b: { season: "1966", games: 14, starts: 14, att: 229, rushYds: 1231, rushTd: 8, ypc: 5.4, rec: 34, recYds: 447, recTd: 2, scrimYds: 1678, scrimTd: 10, touch: 263, ypt: 6.4, rushYpg: 87.9, scrimYpg: 119.9 },
    p: { start: "1965", end: "1971", games: 68, starts: 61, att: 991, rushYds: 4956, rushTd: 39, ypc: 5.0, rec: 112, recYds: 1307, recTd: 9, scrimYds: 6263, scrimTd: 48, touch: 1103, ypt: 5.7, rushYpg: 72.9, scrimYpg: 92.1 },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 5, pb: 4, rushTitles: 2, scrimTitles: 1 }
  },
  { id: "csonka", name: "Larry Csonka", base: false, team: "Dolphins", era: "1968-79", gen: "Perfect-season power", first: 1968, active: false, hof: true,
    c: { career: "11 seasons", games: 146, starts: 117, att: 1891, rushYds: 8081, rushTd: 64, ypc: 4.3, rec: 106, recYds: 820, recTd: 4, scrimYds: 8901, scrimTd: 68, touch: 1997, ypt: 4.5, fum: 21, rushYpg: 55.3, scrimYpg: 61.0 },
    b: { season: "1972", games: 14, starts: 14, att: 213, rushYds: 1117, rushTd: 6, ypc: 5.2, rec: 21, recYds: 198, recTd: 1, scrimYds: 1315, scrimTd: 7, touch: 234, ypt: 5.6, rushYpg: 79.8, scrimYpg: 93.9 },
    p: { start: "1970", end: "1976", games: 96, starts: 88, att: 1392, rushYds: 6126, rushTd: 45, ypc: 4.4, rec: 73, recYds: 594, recTd: 2, scrimYds: 6720, scrimTd: 47, touch: 1465, ypt: 4.6, rushYpg: 63.8, scrimYpg: 70.0 },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 1, ap1: 2, pb: 5, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "simpson", name: "O.J. Simpson", base: true, team: "Bills", era: "1969-79", gen: "2,000-yard barrier breaker", first: 1969, active: false, hof: true,
    c: { career: "11 seasons", games: 135, starts: 129, att: 2404, rushYds: 11236, rushTd: 61, ypc: 4.7, rec: 203, recYds: 2142, recTd: 14, scrimYds: 13378, scrimTd: 75, touch: 2607, ypt: 5.1, fum: 62, rushYpg: 83.2, scrimYpg: 99.1 },
    b: { season: "1973", games: 14, starts: 14, att: 332, rushYds: 2003, rushTd: 12, ypc: 6.0, rec: 6, recYds: 70, recTd: 0, scrimYds: 2073, scrimTd: 12, touch: 338, ypt: 6.1, rushYpg: 143.1, scrimYpg: 148.1 },
    p: { start: "1972", end: "1978", games: 90, starts: 89, att: 1876, rushYds: 9430, rushTd: 50, ypc: 5.0, rec: 148, recYds: 1535, recTd: 10, scrimYds: 10965, scrimTd: 60, touch: 2024, ypt: 5.4, rushYpg: 104.8, scrimYpg: 121.8 },
    a: { mvp: 1, opoy: 1, champs: 0, sbmvp: 0, ap1: 5, pb: 6, rushTitles: 4, scrimTitles: 3 }
  },
  { id: "franco", name: "Franco Harris", base: false, team: "Steelers", era: "1972-84", gen: "Dynasty feature back", first: 1972, active: false, hof: true,
    c: { career: "13 seasons", games: 173, starts: 162, att: 2949, rushYds: 12120, rushTd: 91, ypc: 4.1, rec: 307, recYds: 2287, recTd: 9, scrimYds: 14407, scrimTd: 100, touch: 3256, ypt: 4.4, fum: 90, rushYpg: 70.1, scrimYpg: 83.3 },
    b: { season: "1975", games: 14, starts: 14, att: 262, rushYds: 1246, rushTd: 10, ypc: 4.8, rec: 28, recYds: 214, recTd: 1, scrimYds: 1460, scrimTd: 11, touch: 290, ypt: 5.0, rushYpg: 89.0, scrimYpg: 104.3 },
    p: { start: "1972", end: "1978", games: 98, starts: 95, att: 1864, rushYds: 8154, rushTd: 60, ypc: 4.4, rec: 223, recYds: 1707, recTd: 8, scrimYds: 9861, scrimTd: 68, touch: 2087, ypt: 4.7, rushYpg: 83.2, scrimYpg: 100.6 },
    a: { mvp: 0, opoy: 0, champs: 4, sbmvp: 1, ap1: 1, pb: 9, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "payton", name: "Walter Payton", base: true, team: "Bears", era: "1975-87", gen: "All-around endurance icon", first: 1975, active: false, hof: true,
    c: { career: "13 seasons", games: 190, starts: 184, att: 3838, rushYds: 16726, rushTd: 110, ypc: 4.4, rec: 492, recYds: 4538, recTd: 15, scrimYds: 21264, scrimTd: 125, touch: 4330, ypt: 4.9, fum: 86, rushYpg: 88.0, scrimYpg: 111.9 },
    b: { season: "1977", games: 14, starts: 14, att: 339, rushYds: 1852, rushTd: 14, ypc: 5.5, rec: 27, recYds: 269, recTd: 2, scrimYds: 2121, scrimTd: 16, touch: 366, ypt: 5.8, rushYpg: 132.3, scrimYpg: 151.5 },
    p: { start: "1976", end: "1982", games: 100, starts: 94, att: 2134, rushYds: 9480, rushTd: 72, ypc: 4.4, rec: 261, recYds: 2375, recTd: 10, scrimYds: 11855, scrimTd: 82, touch: 2395, ypt: 4.9, rushYpg: 94.8, scrimYpg: 118.6 },
    a: { mvp: 1, opoy: 1, champs: 1, sbmvp: 0, ap1: 5, pb: 9, rushTitles: 1, scrimTitles: 1 }
  },
  { id: "dorsett", name: "Tony Dorsett", base: true, team: "Cowboys", era: "1977-88", gen: "Space-era breakaway back", first: 1977, active: false, hof: true,
    c: { career: "12 seasons", games: 173, starts: 146, att: 2936, rushYds: 12739, rushTd: 77, ypc: 4.3, rec: 398, recYds: 3554, recTd: 13, scrimYds: 16293, scrimTd: 90, touch: 3334, ypt: 4.9, fum: 90, rushYpg: 73.6, scrimYpg: 94.2 },
    b: { season: "1981", games: 16, starts: 16, att: 342, rushYds: 1646, rushTd: 4, ypc: 4.8, rec: 32, recYds: 325, recTd: 2, scrimYds: 1971, scrimTd: 6, touch: 374, ypt: 5.3, rushYpg: 102.9, scrimYpg: 123.2 },
    p: { start: "1977", end: "1983", games: 106, starts: 100, att: 1968, rushYds: 8832, rushTd: 55, ypc: 4.5, rec: 274, recYds: 2458, recTd: 10, scrimYds: 11290, scrimTd: 65, touch: 2242, ypt: 5.0, rushYpg: 83.3, scrimYpg: 106.5 },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 1, pb: 4, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "campbell", name: "Earl Campbell", base: true, team: "Oilers", era: "1978-85", gen: "Collision peak", first: 1978, active: false, hof: true,
    c: { career: "8 seasons", games: 115, starts: 102, att: 2187, rushYds: 9407, rushTd: 74, ypc: 4.3, rec: 121, recYds: 806, recTd: 0, scrimYds: 10213, scrimTd: 74, touch: 2308, ypt: 4.4, fum: 43, rushYpg: 81.8, scrimYpg: 88.8 },
    b: { season: "1980", games: 15, starts: 15, att: 373, rushYds: 1934, rushTd: 13, ypc: 5.2, rec: 11, recYds: 47, recTd: 0, scrimYds: 1981, scrimTd: 13, touch: 384, ypt: 5.2, rushYpg: 128.9, scrimYpg: 132.1 },
    p: { start: "1978", end: "1984", games: 100, starts: 91, att: 2064, rushYds: 8959, rushTd: 73, ypc: 4.3, rec: 112, recYds: 772, recTd: 0, scrimYds: 9731, scrimTd: 73, touch: 2176, ypt: 4.5, rushYpg: 89.6, scrimYpg: 97.3 },
    a: { mvp: 1, opoy: 3, champs: 0, sbmvp: 0, ap1: 3, pb: 5, rushTitles: 3, scrimTitles: 2 }
  },
  { id: "riggins", name: "John Riggins", base: false, team: "Washington", era: "1971-85", gen: "Late-career hammer", first: 1971, active: false, hof: true,
    c: { career: "14 seasons", games: 175, starts: 149, att: 2916, rushYds: 11352, rushTd: 104, ypc: 3.9, rec: 250, recYds: 2090, recTd: 12, scrimYds: 13442, scrimTd: 116, touch: 3166, ypt: 4.2, fum: 58, rushYpg: 64.9, scrimYpg: 76.8 },
    b: { season: "1983", games: 16, starts: 16, att: 375, rushYds: 1347, rushTd: 24, ypc: 3.6, rec: 5, recYds: 29, recTd: 0, scrimYds: 1376, scrimTd: 24, touch: 380, ypt: 3.6, rushYpg: 84.2, scrimYpg: 86.0 },
    p: { start: "1978", end: "1984", games: 89, starts: 81, att: 1729, rushYds: 6715, rushTd: 74, ypc: 3.9, rec: 96, recYds: 805, recTd: 6, scrimYds: 7520, scrimTd: 80, touch: 1825, ypt: 4.1, rushYpg: 75.4, scrimYpg: 84.5 },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 1, ap1: 1, pb: 1, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "allen", name: "Marcus Allen", base: true, team: "Raiders / Chiefs", era: "1982-97", gen: "Complete back and closer", first: 1982, active: false, hof: true,
    c: { career: "16 seasons", games: 222, starts: 168, att: 3022, rushYds: 12243, rushTd: 123, ypc: 4.1, rec: 587, recYds: 5412, recTd: 21, scrimYds: 17655, scrimTd: 144, touch: 3609, ypt: 4.9, fum: 65, rushYpg: 55.1, scrimYpg: 79.5 },
    b: { season: "1985", games: 16, starts: 16, att: 380, rushYds: 1759, rushTd: 11, ypc: 4.6, rec: 67, recYds: 555, recTd: 3, scrimYds: 2314, scrimTd: 14, touch: 447, ypt: 5.2, rushYpg: 109.9, scrimYpg: 144.6 },
    p: { start: "1982", end: "1988", games: 101, starts: 93, att: 1754, rushYds: 7548, rushTd: 58, ypc: 4.3, rec: 370, recYds: 3373, recTd: 16, scrimYds: 10921, scrimTd: 74, touch: 2124, ypt: 5.1, rushYpg: 74.7, scrimYpg: 108.1 },
    a: { mvp: 1, opoy: 1, champs: 1, sbmvp: 1, ap1: 2, pb: 6, rushTitles: 0, scrimTitles: 1 }
  },
  { id: "craig", name: "Roger Craig", base: false, team: "49ers", era: "1983-93", gen: "West Coast receiving prototype", first: 1983, active: false, hof: true,
    c: { career: "11 seasons", games: 165, starts: 131, att: 1991, rushYds: 8189, rushTd: 56, ypc: 4.1, rec: 566, recYds: 4731, recTd: 17, scrimYds: 12920, scrimTd: 73, touch: 2557, ypt: 5.1, fum: 44, rushYpg: 49.6, scrimYpg: 78.3 },
    b: { season: "1985", games: 16, starts: 16, att: 214, rushYds: 1050, rushTd: 9, ypc: 4.9, rec: 92, recYds: 1016, recTd: 6, scrimYds: 2066, scrimTd: 15, touch: 306, ypt: 6.8, rushYpg: 65.6, scrimYpg: 129.1 },
    p: { start: "1984", end: "1990", games: 110, starts: 100, att: 1522, rushYds: 6519, rushTd: 43, ypc: 4.3, rec: 483, recYds: 4120, recTd: 15, scrimYds: 10639, scrimTd: 58, touch: 2005, ypt: 5.3, rushYpg: 59.3, scrimYpg: 96.7 },
    a: { mvp: 0, opoy: 1, champs: 3, sbmvp: 0, ap1: 1, pb: 4, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "dickerson", name: "Eric Dickerson", base: true, team: "Rams / Colts", era: "1983-93", gen: "Single-season rushing king", first: 1983, active: false, hof: true,
    c: { career: "11 seasons", games: 146, starts: 136, att: 2996, rushYds: 13259, rushTd: 90, ypc: 4.4, rec: 281, recYds: 2137, recTd: 6, scrimYds: 15396, scrimTd: 96, touch: 3277, ypt: 4.7, fum: 78, rushYpg: 90.8, scrimYpg: 105.5 },
    b: { season: "1984", games: 16, starts: 16, att: 379, rushYds: 2105, rushTd: 14, ypc: 5.6, rec: 21, recYds: 139, recTd: 0, scrimYds: 2244, scrimTd: 14, touch: 400, ypt: 5.6, rushYpg: 131.6, scrimYpg: 140.3 },
    p: { start: "1983", end: "1989", games: 105, starts: 104, att: 2352, rushYds: 10983, rushTd: 75, ypc: 4.7, rec: 225, recYds: 1772, recTd: 6, scrimYds: 12755, scrimTd: 81, touch: 2577, ypt: 4.9, rushYpg: 104.6, scrimYpg: 121.5 },
    a: { mvp: 0, opoy: 2, champs: 0, sbmvp: 0, ap1: 5, pb: 6, rushTitles: 4, scrimTitles: 3 }
  },
  { id: "barry", name: "Barry Sanders", base: true, team: "Lions", era: "1989-98", gen: "Elusiveness and volume apex", first: 1989, active: false, hof: true,
    c: { career: "10 seasons", games: 153, starts: 151, att: 3062, rushYds: 15269, rushTd: 99, ypc: 5.0, rec: 352, recYds: 2921, recTd: 10, scrimYds: 18190, scrimTd: 109, touch: 3414, ypt: 5.3, fum: 41, rushYpg: 99.8, scrimYpg: 118.9 },
    b: { season: "1997", games: 16, starts: 16, att: 335, rushYds: 2053, rushTd: 11, ypc: 6.1, rec: 33, recYds: 305, recTd: 3, scrimYds: 2358, scrimTd: 14, touch: 368, ypt: 6.4, rushYpg: 128.3, scrimYpg: 147.4 },
    p: { start: "1991", end: "1997", games: 107, starts: 107, att: 2194, rushYds: 11297, rushTd: 75, ypc: 5.1, rec: 248, recYds: 2070, recTd: 8, scrimYds: 13367, scrimTd: 83, touch: 2442, ypt: 5.5, rushYpg: 105.6, scrimYpg: 124.9 },
    a: { mvp: 1, opoy: 2, champs: 0, sbmvp: 0, ap1: 6, pb: 10, rushTitles: 4, scrimTitles: 3 }
  },
  { id: "thomas", name: "Thurman Thomas", base: true, team: "Bills", era: "1988-2000", gen: "K-Gun multipurpose engine", first: 1988, active: false, hof: true,
    c: { career: "13 seasons", games: 182, starts: 161, att: 2877, rushYds: 12074, rushTd: 65, ypc: 4.2, rec: 472, recYds: 4458, recTd: 23, scrimYds: 16532, scrimTd: 88, touch: 3349, ypt: 4.9, fum: 50, rushYpg: 66.3, scrimYpg: 90.8 },
    b: { season: "1991", games: 15, starts: 15, att: 288, rushYds: 1407, rushTd: 7, ypc: 4.9, rec: 62, recYds: 620, recTd: 5, scrimYds: 2027, scrimTd: 12, touch: 350, ypt: 5.8, rushYpg: 93.8, scrimYpg: 135.1 },
    p: { start: "1989", end: "1995", games: 108, starts: 107, att: 2058, rushYds: 9082, rushTd: 53, ypc: 4.4, rec: 418, recYds: 3847, recTd: 20, scrimYds: 12929, scrimTd: 73, touch: 2476, ypt: 5.2, rushYpg: 84.1, scrimYpg: 119.7 },
    a: { mvp: 1, opoy: 1, champs: 0, sbmvp: 0, ap1: 2, pb: 5, rushTitles: 0, scrimTitles: 4 }
  },
  { id: "emmitt", name: "Emmitt Smith", base: true, team: "Cowboys", era: "1990-2004", gen: "Career rushing record holder", first: 1990, active: false, hof: true,
    c: { career: "15 seasons", games: 226, starts: 219, att: 4409, rushYds: 18355, rushTd: 164, ypc: 4.2, rec: 515, recYds: 3224, recTd: 11, scrimYds: 21579, scrimTd: 175, touch: 4924, ypt: 4.4, fum: 61, rushYpg: 81.2, scrimYpg: 95.5 },
    b: { season: "1995", games: 16, starts: 16, att: 377, rushYds: 1773, rushTd: 25, ypc: 4.7, rec: 62, recYds: 375, recTd: 0, scrimYds: 2148, scrimTd: 25, touch: 439, ypt: 4.9, rushYpg: 110.8, scrimYpg: 134.3 },
    p: { start: "1991", end: "1997", games: 108, starts: 108, att: 2456, rushYds: 11234, rushTd: 108, ypc: 4.6, rec: 374, recYds: 2554, recTd: 9, scrimYds: 13788, scrimTd: 117, touch: 2830, ypt: 4.9, rushYpg: 104.0, scrimYpg: 127.7 },
    a: { mvp: 1, opoy: 1, champs: 3, sbmvp: 1, ap1: 4, pb: 8, rushTitles: 4, scrimTitles: 1 }
  },
  { id: "watters", name: "Ricky Watters", base: false, team: "49ers / Eagles / Seahawks", era: "1991-2001", gen: "Receiving-heavy West Coast back", first: 1991, active: false, hof: false,
    c: { career: "10 seasons", games: 144, starts: 137, att: 2622, rushYds: 10643, rushTd: 78, ypc: 4.1, rec: 467, recYds: 4248, recTd: 13, scrimYds: 14891, scrimTd: 91, touch: 3089, ypt: 4.8, fum: 40, rushYpg: 73.9, scrimYpg: 103.4 },
    b: { season: "1996", games: 16, starts: 16, att: 353, rushYds: 1411, rushTd: 13, ypc: 4.0, rec: 51, recYds: 444, recTd: 3, scrimYds: 1855, scrimTd: 16, touch: 404, ypt: 4.6, rushYpg: 88.2, scrimYpg: 115.9, awards: "Pro Bowl" },
    p: { start: "1992", end: "1998", games: 104, starts: 102, att: 2022, rushYds: 8388, rushTd: 62, ypc: 4.1, rec: 376, recYds: 3308, recTd: 12, scrimYds: 11696, scrimTd: 74, touch: 2398, ypt: 4.9, rushYpg: 80.7, scrimYpg: 112.5, awards: "5 Pro Bowls" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 0, pb: 5, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "bettis", name: "Jerome Bettis", base: false, team: "Rams / Steelers", era: "1993-2005", gen: "Power-volume finisher", first: 1993, active: false, hof: true,
    c: { career: "13 seasons", games: 192, starts: 145, att: 3479, rushYds: 13662, rushTd: 91, ypc: 3.9, rec: 200, recYds: 1449, recTd: 3, scrimYds: 15111, scrimTd: 94, touch: 3679, ypt: 4.1, fum: 41, rushYpg: 71.2, scrimYpg: 78.7 },
    b: { season: "1997", games: 15, starts: 15, att: 375, rushYds: 1665, rushTd: 7, ypc: 4.4, rec: 15, recYds: 110, recTd: 0, scrimYds: 1775, scrimTd: 7, touch: 390, ypt: 4.6, rushYpg: 111.0, scrimYpg: 118.3 },
    p: { start: "1993", end: "1999", games: 105, starts: 95, att: 2106, rushYds: 8806, rushTd: 46, ypc: 4.2, rec: 136, recYds: 978, recTd: 3, scrimYds: 9784, scrimTd: 49, touch: 2242, ypt: 4.4, rushYpg: 83.9, scrimYpg: 93.2 },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 2, pb: 6, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "martin", name: "Curtis Martin", base: false, team: "Patriots / Jets", era: "1995-2005", gen: "Consistency metronome", first: 1995, active: false, hof: true,
    c: { career: "11 seasons", games: 168, starts: 166, att: 3518, rushYds: 14101, rushTd: 90, ypc: 4.0, rec: 484, recYds: 3329, recTd: 10, scrimYds: 17430, scrimTd: 100, touch: 4002, ypt: 4.4, fum: 29, rushYpg: 83.9, scrimYpg: 103.8 },
    b: { season: "2004", games: 16, starts: 16, att: 371, rushYds: 1697, rushTd: 12, ypc: 4.6, rec: 41, recYds: 245, recTd: 2, scrimYds: 1942, scrimTd: 14, touch: 412, ypt: 4.7, rushYpg: 106.1, scrimYpg: 121.4 },
    p: { start: "1995", end: "2001", games: 112, starts: 110, att: 2324, rushYds: 9679, rushTd: 63, ypc: 4.2, rec: 360, recYds: 2611, recTd: 8, scrimYds: 12290, scrimTd: 71, touch: 2684, ypt: 4.6, rushYpg: 86.4, scrimYpg: 109.7 },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 5, rushTitles: 1, scrimTitles: 0 }
  },
  { id: "terrell", name: "Terrell Davis", base: false, team: "Broncos", era: "1995-2001", gen: "Postseason peak comet", first: 1995, active: false, hof: true,
    c: { career: "7 seasons", games: 78, starts: 77, att: 1655, rushYds: 7607, rushTd: 60, ypc: 4.6, rec: 169, recYds: 1280, recTd: 5, scrimYds: 8887, scrimTd: 65, touch: 1824, ypt: 4.9, fum: 20, rushYpg: 97.5, scrimYpg: 113.9 },
    b: { season: "1998", games: 16, starts: 16, att: 392, rushYds: 2008, rushTd: 21, ypc: 5.1, rec: 25, recYds: 217, recTd: 2, scrimYds: 2225, scrimTd: 23, touch: 417, ypt: 5.3, rushYpg: 125.5, scrimYpg: 139.1 },
    p: { start: "1995", end: "2001", games: 78, starts: 77, att: 1655, rushYds: 7607, rushTd: 60, ypc: 4.6, rec: 169, recYds: 1280, recTd: 5, scrimYds: 8887, scrimTd: 65, touch: 1824, ypt: 4.9, rushYpg: 97.5, scrimYpg: 113.9 },
    a: { mvp: 1, opoy: 2, champs: 2, sbmvp: 1, ap1: 3, pb: 3, rushTitles: 1, scrimTitles: 0 }
  },
  { id: "faulk", name: "Marshall Faulk", base: true, team: "Rams / Colts", era: "1994-2005", gen: "Receiving-back superweapon", first: 1994, active: false, hof: true,
    c: { career: "12 seasons", games: 176, starts: 156, att: 2836, rushYds: 12279, rushTd: 100, ypc: 4.3, rec: 767, recYds: 6875, recTd: 36, scrimYds: 19154, scrimTd: 136, touch: 3603, ypt: 5.3, fum: 36, rushYpg: 69.8, scrimYpg: 108.8 },
    b: { season: "1999", games: 16, starts: 16, att: 253, rushYds: 1381, rushTd: 7, ypc: 5.5, rec: 87, recYds: 1048, recTd: 5, scrimYds: 2429, scrimTd: 12, touch: 340, ypt: 7.1, rushYpg: 86.3, scrimYpg: 151.8 },
    p: { start: "1998", end: "2004", games: 105, starts: 103, att: 1684, rushYds: 8020, rushTd: 75, ypc: 4.8, rec: 557, recYds: 5104, recTd: 31, scrimYds: 13124, scrimTd: 106, touch: 2241, ypt: 5.9, rushYpg: 76.4, scrimYpg: 125.0 },
    a: { mvp: 1, opoy: 3, champs: 1, sbmvp: 0, ap1: 3, pb: 7, rushTitles: 0, scrimTitles: 4 }
  },
  { id: "edgerrin", name: "Edgerrin James", base: false, team: "Colts", era: "1999-2009", gen: "Manning-era workhorse", first: 1999, active: false, hof: true,
    c: { career: "11 seasons", games: 148, starts: 135, att: 3028, rushYds: 12246, rushTd: 80, ypc: 4.0, rec: 433, recYds: 3364, recTd: 11, scrimYds: 15610, scrimTd: 91, touch: 3461, ypt: 4.5, fum: 44, rushYpg: 82.7, scrimYpg: 105.5 },
    b: { season: "2000", games: 16, starts: 16, att: 387, rushYds: 1709, rushTd: 13, ypc: 4.4, rec: 63, recYds: 594, recTd: 5, scrimYds: 2303, scrimTd: 18, touch: 450, ypt: 5.1, rushYpg: 106.8, scrimYpg: 143.9 },
    p: { start: "1999", end: "2005", games: 96, starts: 96, att: 2188, rushYds: 9226, rushTd: 64, ypc: 4.2, rec: 356, recYds: 2839, recTd: 11, scrimYds: 12065, scrimTd: 75, touch: 2544, ypt: 4.7, rushYpg: 96.1, scrimYpg: 125.7 },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 4, rushTitles: 2, scrimTitles: 2 }
  },
  { id: "priest", name: "Priest Holmes", base: false, team: "Chiefs", era: "1997-2007", gen: "Red-zone fantasy-age monster", first: 1997, active: false, hof: false,
    c: { career: "11 seasons", games: 113, starts: 82, att: 1780, rushYds: 8172, rushTd: 86, ypc: 4.6, rec: 339, recYds: 2962, recTd: 8, scrimYds: 11134, scrimTd: 94, touch: 2119, ypt: 5.3, fum: 33, rushYpg: 72.3, scrimYpg: 98.5 },
    b: { season: "2002", games: 14, starts: 14, att: 313, rushYds: 1615, rushTd: 21, ypc: 5.2, rec: 70, recYds: 672, recTd: 3, scrimYds: 2287, scrimTd: 24, touch: 383, ypt: 6.0, rushYpg: 115.4, scrimYpg: 163.4 },
    p: { start: "2001", end: "2007", games: 76, starts: 72, att: 1486, rushYds: 7037, rushTd: 76, ypc: 4.7, rec: 287, recYds: 2441, recTd: 7, scrimYds: 9478, scrimTd: 83, touch: 1773, ypt: 5.3, rushYpg: 92.6, scrimYpg: 124.7 },
    a: { mvp: 0, opoy: 1, champs: 0, sbmvp: 0, ap1: 3, pb: 3, rushTitles: 1, scrimTitles: 1 }
  },
  { id: "alexander", name: "Shaun Alexander", base: false, team: "Seahawks", era: "2000-08", gen: "Goal-line MVP peak", first: 2000, active: false, hof: false,
    c: { career: "9 seasons", games: 123, starts: 97, att: 2187, rushYds: 9453, rushTd: 100, ypc: 4.3, rec: 215, recYds: 1520, recTd: 12, scrimYds: 10973, scrimTd: 112, touch: 2402, ypt: 4.6, fum: 28, rushYpg: 76.9, scrimYpg: 89.2 },
    b: { season: "2005", games: 16, starts: 16, att: 370, rushYds: 1880, rushTd: 27, ypc: 5.1, rec: 15, recYds: 78, recTd: 1, scrimYds: 1958, scrimTd: 28, touch: 385, ypt: 5.1, rushYpg: 117.5, scrimYpg: 122.4 },
    p: { start: "2001", end: "2007", games: 105, starts: 95, att: 2064, rushYds: 8985, rushTd: 98, ypc: 4.4, rec: 197, recYds: 1397, recTd: 11, scrimYds: 10382, scrimTd: 109, touch: 2261, ypt: 4.6, rushYpg: 85.6, scrimYpg: 98.9 },
    a: { mvp: 1, opoy: 1, champs: 0, sbmvp: 0, ap1: 1, pb: 3, rushTitles: 1, scrimTitles: 0 }
  },
  { id: "barber", name: "Tiki Barber", base: false, team: "Giants", era: "1997-2006", gen: "Late-blooming scrimmage engine", first: 1997, active: false, hof: false,
    c: { career: "10 seasons", games: 154, starts: 106, att: 2217, rushYds: 10449, rushTd: 55, ypc: 4.7, rec: 586, recYds: 5183, recTd: 12, scrimYds: 15632, scrimTd: 67, touch: 2803, ypt: 5.6, fum: 53, rushYpg: 67.9, scrimYpg: 101.5 },
    b: { season: "2005", games: 16, starts: 16, att: 357, rushYds: 1860, rushTd: 9, ypc: 5.2, rec: 54, recYds: 530, recTd: 2, scrimYds: 2390, scrimTd: 11, touch: 411, ypt: 5.8, rushYpg: 116.3, scrimYpg: 149.4 },
    p: { start: "2000", end: "2006", games: 109, starts: 103, att: 1954, rushYds: 9550, rushTd: 52, ypc: 4.9, rec: 414, recYds: 3650, recTd: 10, scrimYds: 13200, scrimTd: 62, touch: 2368, ypt: 5.6, rushYpg: 87.6, scrimYpg: 121.1 },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 3, rushTitles: 0, scrimTitles: 1 }
  },
  { id: "stevenjackson", name: "Steven Jackson", base: false, team: "Rams / Falcons", era: "2004-15", gen: "Undervalued volume centerpiece", first: 2004, active: false, hof: false,
    c: { career: "12 seasons", games: 160, starts: 144, att: 2764, rushYds: 11438, rushTd: 69, ypc: 4.1, rec: 461, recYds: 3683, recTd: 9, scrimYds: 15121, scrimTd: 78, touch: 3225, ypt: 4.7, fum: 27, rushYpg: 71.5, scrimYpg: 94.5 },
    b: { season: "2006", games: 16, starts: 16, att: 346, rushYds: 1528, rushTd: 13, ypc: 4.4, rec: 90, recYds: 806, recTd: 3, scrimYds: 2334, scrimTd: 16, touch: 436, ypt: 5.4, rushYpg: 95.5, scrimYpg: 145.9, awards: "AP1" },
    p: { start: "2005", end: "2011", games: 105, starts: 104, att: 2054, rushYds: 8954, rushTd: 50, ypc: 4.4, rec: 357, recYds: 2881, recTd: 8, scrimYds: 11835, scrimTd: 58, touch: 2411, ypt: 4.9, rushYpg: 85.3, scrimYpg: 112.7, awards: "2 Pro Bowls, AP1" },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 1, pb: 3, rushTitles: 0, scrimTitles: 1 }
  },
  { id: "tomlinson", name: "LaDainian Tomlinson", base: true, team: "Chargers", era: "2001-11", gen: "Touchdown and receiving blend", first: 2001, active: false, hof: true,
    c: { career: "11 seasons", games: 170, starts: 154, att: 3174, rushYds: 13684, rushTd: 145, ypc: 4.3, rec: 624, recYds: 4772, recTd: 17, scrimYds: 18456, scrimTd: 162, touch: 3798, ypt: 4.9, fum: 31, rushYpg: 80.5, scrimYpg: 108.6 },
    b: { season: "2006", games: 16, starts: 16, att: 348, rushYds: 1815, rushTd: 28, ypc: 5.2, rec: 56, recYds: 508, recTd: 3, scrimYds: 2323, scrimTd: 31, touch: 404, ypt: 5.8, rushYpg: 113.4, scrimYpg: 145.2 },
    p: { start: "2002", end: "2008", games: 111, starts: 111, att: 2373, rushYds: 10445, rushTd: 121, ypc: 4.4, rec: 476, recYds: 3721, recTd: 15, scrimYds: 14166, scrimTd: 136, touch: 2849, ypt: 5.0, rushYpg: 94.1, scrimYpg: 127.6 },
    a: { mvp: 1, opoy: 1, champs: 0, sbmvp: 0, ap1: 3, pb: 5, rushTitles: 2, scrimTitles: 1 }
  },
  { id: "portis", name: "Clinton Portis", base: false, team: "Broncos / Washington", era: "2002-10", gen: "Explosive Shanahan-to-grinder arc", first: 2002, active: false, hof: false,
    c: { career: "9 seasons", games: 113, starts: 108, att: 2230, rushYds: 9923, rushTd: 75, ypc: 4.4, rec: 247, recYds: 2018, recTd: 5, scrimYds: 11941, scrimTd: 80, touch: 2477, ypt: 4.8, fum: 29, rushYpg: 87.8, scrimYpg: 105.7 },
    b: { season: "2003", games: 13, starts: 13, att: 290, rushYds: 1591, rushTd: 14, ypc: 5.5, rec: 38, recYds: 314, recTd: 0, scrimYds: 1905, scrimTd: 14, touch: 328, ypt: 5.8, rushYpg: 122.4, scrimYpg: 146.5 },
    p: { start: "2002", end: "2008", games: 100, starts: 98, att: 2072, rushYds: 9202, rushTd: 72, ypc: 4.4, rec: 241, recYds: 1965, recTd: 5, scrimYds: 11167, scrimTd: 77, touch: 2313, ypt: 4.8, rushYpg: 92.0, scrimYpg: 111.7 },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 0, pb: 2, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "peterson", name: "Adrian Peterson", base: true, team: "Vikings", era: "2007-21", gen: "Modern downhill rushing titan", first: 2007, active: false, hof: false,
    c: { career: "15 seasons", games: 184, starts: 167, att: 3230, rushYds: 14918, rushTd: 120, ypc: 4.6, rec: 305, recYds: 2474, recTd: 6, scrimYds: 17392, scrimTd: 126, touch: 3535, ypt: 4.9, fum: 49, rushYpg: 81.1, scrimYpg: 94.5 },
    b: { season: "2012", games: 16, starts: 16, att: 348, rushYds: 2097, rushTd: 12, ypc: 6.0, rec: 40, recYds: 217, recTd: 1, scrimYds: 2314, scrimTd: 13, touch: 388, ypt: 6.0, rushYpg: 131.1, scrimYpg: 144.6 },
    p: { start: "2007", end: "2013", games: 104, starts: 103, att: 2033, rushYds: 10057, rushTd: 86, ypc: 4.9, rec: 206, recYds: 1715, recTd: 5, scrimYds: 11772, scrimTd: 91, touch: 2239, ypt: 5.3, rushYpg: 96.7, scrimYpg: 113.2 },
    a: { mvp: 1, opoy: 1, champs: 0, sbmvp: 0, ap1: 4, pb: 7, rushTitles: 3, scrimTitles: 0 }
  },
  { id: "lynch", name: "Marshawn Lynch", base: false, team: "Bills / Seahawks", era: "2007-19", gen: "Tackle-breaking postseason identity", first: 2007, active: false, hof: false,
    c: { career: "13 seasons", games: 149, starts: 138, att: 2453, rushYds: 10413, rushTd: 85, ypc: 4.2, rec: 287, recYds: 2214, recTd: 9, scrimYds: 12627, scrimTd: 94, touch: 2740, ypt: 4.6, fum: 27, rushYpg: 69.9, scrimYpg: 84.7 },
    b: { season: "2012", games: 16, starts: 15, att: 315, rushYds: 1590, rushTd: 11, ypc: 5.0, rec: 23, recYds: 196, recTd: 1, scrimYds: 1786, scrimTd: 12, touch: 338, ypt: 5.3, rushYpg: 99.4, scrimYpg: 111.6, awards: "AP1" },
    p: { start: "2011", end: "2017", games: 91, starts: 87, att: 1681, rushYds: 7391, rushTd: 65, ypc: 4.4, rec: 199, recYds: 1593, recTd: 8, scrimYds: 8984, scrimTd: 73, touch: 1880, ypt: 4.8, rushYpg: 81.2, scrimYpg: 98.7, awards: "4 Pro Bowls, AP1, title" },
    a: { mvp: 0, opoy: 0, champs: 1, sbmvp: 0, ap1: 1, pb: 5, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "mccoy", name: "LeSean McCoy", base: false, team: "Eagles / Bills", era: "2009-20", gen: "Lateral-cut scrimmage creator", first: 2009, active: false, hof: false,
    c: { career: "12 seasons", games: 170, starts: 143, att: 2457, rushYds: 11102, rushTd: 73, ypc: 4.5, rec: 518, recYds: 3898, recTd: 16, scrimYds: 15000, scrimTd: 89, touch: 2975, ypt: 5.0, fum: 31, rushYpg: 65.3, scrimYpg: 88.2 },
    b: { season: "2013", games: 16, starts: 16, att: 314, rushYds: 1607, rushTd: 9, ypc: 5.1, rec: 52, recYds: 539, recTd: 2, scrimYds: 2146, scrimTd: 11, touch: 366, ypt: 5.9, rushYpg: 100.4, scrimYpg: 134.1 },
    p: { start: "2010", end: "2016", games: 103, starts: 99, att: 1774, rushYds: 8489, rushTd: 57, ypc: 4.8, rec: 390, recYds: 3030, recTd: 13, scrimYds: 11519, scrimTd: 70, touch: 2164, ypt: 5.3, rushYpg: 82.4, scrimYpg: 111.8 },
    a: { mvp: 0, opoy: 0, champs: 2, sbmvp: 0, ap1: 2, pb: 6, rushTitles: 1, scrimTitles: 1 }
  },
  { id: "gore", name: "Frank Gore", base: false, team: "49ers / Colts", era: "2005-20", gen: "Durability monument", first: 2005, active: false, hof: false,
    c: { career: "16 seasons", games: 241, starts: 218, att: 3735, rushYds: 16000, rushTd: 81, ypc: 4.3, rec: 484, recYds: 3985, recTd: 18, scrimYds: 19985, scrimTd: 99, touch: 4219, ypt: 4.7, fum: 46, rushYpg: 66.4, scrimYpg: 82.9 },
    b: { season: "2006", games: 16, starts: 16, att: 312, rushYds: 1695, rushTd: 8, ypc: 5.4, rec: 61, recYds: 485, recTd: 1, scrimYds: 2180, scrimTd: 9, touch: 373, ypt: 5.8, rushYpg: 105.9, scrimYpg: 136.3 },
    p: { start: "2006", end: "2012", games: 104, starts: 104, att: 1884, rushYds: 8626, rushTd: 53, ypc: 4.6, rec: 316, recYds: 2613, recTd: 10, scrimYds: 11239, scrimTd: 63, touch: 2200, ypt: 5.1, rushYpg: 83.0, scrimYpg: 108.1 },
    a: { mvp: 0, opoy: 0, champs: 0, sbmvp: 0, ap1: 0, pb: 5, rushTitles: 0, scrimTitles: 0 }
  },
  { id: "henry", name: "Derrick Henry", base: false, team: "Titans / Ravens", era: "2016-present", gen: "Late-era power and breakaway", first: 2016, active: true, hof: false,
    c: { career: "10 seasons", games: 153, starts: 131, att: 2662, rushYds: 13018, rushTd: 122, ypc: 4.9, rec: 189, recYds: 1801, recTd: 5, scrimYds: 14819, scrimTd: 127, touch: 2851, ypt: 5.2, fum: 21, rushYpg: 85.1, scrimYpg: 96.9 },
    b: { season: "2020", games: 16, starts: 16, att: 378, rushYds: 2027, rushTd: 17, ypc: 5.4, rec: 19, recYds: 114, recTd: 0, scrimYds: 2141, scrimTd: 17, touch: 397, ypt: 5.4, rushYpg: 126.7, scrimYpg: 133.8 },
    p: { start: "2019", end: "2025", games: 106, starts: 105, att: 2161, rushYds: 10725, rushTd: 100, ypc: 5.0, rec: 150, recYds: 1429, recTd: 4, scrimYds: 12154, scrimTd: 104, touch: 2311, ypt: 5.3, rushYpg: 101.2, scrimYpg: 114.7 },
    a: { mvp: 0, opoy: 1, champs: 0, sbmvp: 0, ap1: 2, pb: 5, rushTitles: 2, scrimTitles: 0 }
  },
  { id: "mccaffrey", name: "Christian McCaffrey", base: false, team: "Panthers / 49ers", era: "2017-present", gen: "Receiver-grade dual threat", first: 2017, active: true, hof: false,
    c: { career: "9 seasons", games: 112, starts: 105, att: 1658, rushYds: 7589, rushTd: 62, ypc: 4.6, rec: 626, recYds: 5390, recTd: 36, scrimYds: 12979, scrimTd: 98, touch: 2284, ypt: 5.7, fum: 9, rushYpg: 67.8, scrimYpg: 115.9 },
    b: { season: "2019", games: 16, starts: 16, att: 287, rushYds: 1387, rushTd: 15, ypc: 4.8, rec: 116, recYds: 1005, recTd: 4, scrimYds: 2392, scrimTd: 19, touch: 403, ypt: 5.9, rushYpg: 86.7, scrimYpg: 149.5 },
    p: { start: "2017", end: "2023", games: 75, starts: 71, att: 998, rushYds: 4890, rushTd: 43, ypc: 4.9, rec: 509, recYds: 4320, recTd: 30, scrimYds: 9210, scrimTd: 73, touch: 1507, ypt: 6.1, rushYpg: 65.2, scrimYpg: 122.8 },
    a: { mvp: 0, opoy: 1, champs: 0, sbmvp: 0, ap1: 2, pb: 4, rushTitles: 1, scrimTitles: 1 }
  },
];

const lowIsBestMetrics = new Set(["fum", "avg"]);
const rankMetrics = ["games","starts","att","rushYds","rushTd","ypc","rec","recYds","recTd","scrimYds","scrimTd","touch","ypt","fum","rushYpg","scrimYpg","mvp","opoy","champs","sbmvp","ap1","pb","rushTitles","scrimTitles"];
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
  const keys = ["games","att","rushYds","rushTd","ypc","rec","recYds","recTd","scrimYds","scrimTd","touch","ypt","rushYpg","scrimYpg"];
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

function metricRows(selected, source, ranked = false) {
  const value = (player, key, suffix = "") => ranked ? rankedValue(player, key, source, suffix) : fmt(source(player)[key], suffix);
  return [
    groupRow("Rushing Stats", selected.length),
    row("Games", selected, p => value(p, "games"), { key: "games", source }),
    row("Starts", selected, p => value(p, "starts"), { key: "starts", source }),
    row("Rushing Attempts", selected, p => value(p, "att"), { key: "att", source }),
    row("Rushing Yards", selected, p => value(p, "rushYds"), { key: "rushYds", source }),
    row("Rushing TDs", selected, p => value(p, "rushTd"), { key: "rushTd", source }),
    row("Yards / Carry", selected, p => value(p, "ypc"), { key: "ypc", source }),
    groupRow("Receiving / Scrimmage Stats", selected.length),
    row("Receptions", selected, p => value(p, "rec"), { key: "rec", source }),
    row("Receiving Yards", selected, p => value(p, "recYds"), { key: "recYds", source }),
    row("Receiving TDs", selected, p => value(p, "recTd"), { key: "recTd", source }),
    row("Yards From Scrimmage", selected, p => value(p, "scrimYds"), { key: "scrimYds", source }),
    row("Scrimmage TDs", selected, p => value(p, "scrimTd"), { key: "scrimTd", source }),
    groupRow("Efficiency / Ball Security", selected.length),
    row("Touches", selected, p => value(p, "touch"), { key: "touch", source }),
    row("Yards / Touch", selected, p => value(p, "ypt"), { key: "ypt", source }),
    row("Rushing Yards / Game", selected, p => value(p, "rushYpg"), { key: "rushYpg", source }),
    row("Scrimmage Yards / Game", selected, p => value(p, "scrimYpg"), { key: "scrimYpg", source })
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
    ...metricRows(selected, c, true),
    row("Fumbles", selected, p => rankedValue(p, "fum", c), { key: "fum", source: c }),
    groupRow("Accolades", selected.length),
    row("Hall of Fame", selected, p => p.hof ? "Yes" : "No"),
    row("MVP", selected, p => rankedValue(p, "mvp", a), { key: "mvp", source: a }),
    row("Offensive Player of the Year", selected, p => rankedValue(p, "opoy", a), { key: "opoy", source: a }),
    row("League Titles / Super Bowl Wins", selected, p => rankedValue(p, "champs", a), { key: "champs", source: a }),
    row("Super Bowl MVPs", selected, p => rankedValue(p, "sbmvp", a), { key: "sbmvp", source: a }),
    row("First-Team All-Pro", selected, p => rankedValue(p, "ap1", a), { key: "ap1", source: a }),
    row("Pro Bowl", selected, p => rankedValue(p, "pb", a), { key: "pb", source: a }),
    row("Rushing Titles", selected, p => rankedValue(p, "rushTitles", a), { key: "rushTitles", source: a }),
    row("Scrimmage-Yard Titles", selected, p => rankedValue(p, "scrimTitles", a), { key: "scrimTitles", source: a }),
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
    row(includeRange ? "Seasons" : "Season", selected, seasonLabel),
    ...metricRows(selected, source, false),
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
