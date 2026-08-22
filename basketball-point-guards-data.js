const players = [
  { id:"cousybo01", name:"Bob Cousy", pos:"PG", base:true, team:"Celtics / Royals", era:"1950-70", c:{career:"14 seasons",games:924,ppg:18.4,rpg:5.2,apg:7.5,fg:37.5,three:null,ft:80.3,stl:null,blk:null}, b:{season:"1956-57",ppg:20.6,rpg:4.8,apg:7.5,fg:37.8,three:null,ft:82.1,stl:null,blk:null}, p:{start:"1951-52",end:"1959-60",games:484,ppg:20.2,rpg:5.8,apg:8.1,fg:37.5,three:null,ft:82.0,stl:null,blk:null}, a:{champ:6,mvp:1,allstar:13,allnba:12,alldef:null,dpoy:null,anniv:4,annivText:"25th, 35th, 50th, 75th"} },
  { id:"roberos01", name:"Oscar Robertson", pos:"PG", base:true, team:"Royals / Bucks", era:"1960-74", c:{career:"14 seasons",games:1040,ppg:25.7,rpg:7.5,apg:9.5,fg:48.5,three:null,ft:83.8,stl:null,blk:null}, b:{season:"1961-62",ppg:30.8,rpg:12.5,apg:11.4,fg:47.8,three:null,ft:80.3,stl:null,blk:null}, p:{start:"1960-61",end:"1966-67",games:539,ppg:30.4,rpg:9.4,apg:10.7,fg:48.5,three:null,ft:83.5,stl:null,blk:null}, a:{champ:1,mvp:1,allstar:12,allnba:11,alldef:0,dpoy:null,anniv:3,annivText:"35th, 50th, 75th"} },
  { id:"johnsma02", name:"Magic Johnson", pos:"PG", base:true, team:"Lakers", era:"1979-96", c:{career:"13 seasons",games:906,ppg:19.5,rpg:7.2,apg:11.2,fg:52.0,three:30.3,ft:84.8,stl:1.9,blk:0.4}, b:{season:"1986-87",ppg:23.9,rpg:6.3,apg:12.2,fg:52.2,three:20.5,ft:84.8,stl:1.7,blk:0.5}, p:{start:"1982-83",end:"1990-91",games:538,ppg:20.2,rpg:7.1,apg:12.1,fg:52.0,three:31.7,ft:86.5,stl:1.8,blk:0.4}, a:{champ:5,mvp:3,allstar:12,allnba:10,alldef:0,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"thomais01", name:"Isiah Thomas", pos:"PG", base:true, team:"Pistons", era:"1981-94", c:{career:"13 seasons",games:979,ppg:19.2,rpg:3.6,apg:9.3,fg:45.2,three:29.0,ft:75.9,stl:1.9,blk:0.3}, b:{season:"1984-85",ppg:21.2,rpg:4.5,apg:13.9,fg:45.8,three:25.7,ft:80.9,stl:2.3,blk:0.3}, p:{start:"1983-84",end:"1989-90",games:563,ppg:20.0,rpg:3.8,apg:10.3,fg:46.2,three:28.2,ft:77.9,stl:2.0,blk:0.3}, a:{champ:2,mvp:0,allstar:12,allnba:5,alldef:0,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"stockjo01", name:"John Stockton", pos:"PG", base:true, team:"Jazz", era:"1984-2003", c:{career:"19 seasons",games:1504,ppg:13.1,rpg:2.7,apg:10.5,fg:51.5,three:38.4,ft:82.6,stl:2.2,blk:0.2}, b:{season:"1989-90",ppg:17.2,rpg:2.6,apg:14.5,fg:51.4,three:41.6,ft:81.9,stl:2.7,blk:0.2}, p:{start:"1987-88",end:"1994-95",games:570,ppg:16.0,rpg:3.0,apg:13.5,fg:52.5,three:38.0,ft:83.1,stl:2.8,blk:0.2}, a:{champ:0,mvp:0,allstar:10,allnba:11,alldef:5,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"kiddja01", name:"Jason Kidd", pos:"PG", base:true, team:"Mavericks / Nets / Suns / Knicks", era:"1994-2013", c:{career:"19 seasons",games:1391,ppg:12.6,rpg:6.3,apg:8.7,fg:40.0,three:34.9,ft:78.5,stl:1.9,blk:0.3}, b:{season:"2002-03",ppg:18.7,rpg:6.3,apg:8.9,fg:41.4,three:34.1,ft:84.1,stl:2.2,blk:0.3}, p:{start:"1998-99",end:"2004-05",games:489,ppg:15.9,rpg:6.8,apg:9.5,fg:40.6,three:33.4,ft:80.9,stl:2.1,blk:0.3}, a:{champ:1,mvp:0,allstar:10,allnba:6,alldef:9,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"nashst01", name:"Steve Nash", pos:"PG", base:true, team:"Suns / Mavericks / Lakers", era:"1996-2014", c:{career:"18 seasons",games:1217,ppg:14.3,rpg:3.0,apg:8.5,fg:49.0,three:42.8,ft:90.4,stl:0.7,blk:0.1}, b:{season:"2005-06",ppg:18.8,rpg:4.2,apg:10.5,fg:51.2,three:43.9,ft:92.1,stl:0.8,blk:0.2}, p:{start:"2001-02",end:"2009-10",games:556,ppg:17.4,rpg:3.4,apg:10.1,fg:50.0,three:44.4,ft:90.6,stl:0.8,blk:0.1}, a:{champ:0,mvp:2,allstar:8,allnba:7,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"paulch01", name:"Chris Paul", pos:"PG", base:true, team:"Hornets / Clippers / Suns +", era:"2005-26", c:{career:"21 seasons",games:1370,ppg:16.8,rpg:4.4,apg:9.2,fg:46.9,three:37.0,ft:87.0,stl:2.0,blk:0.2}, b:{season:"2007-08",ppg:21.1,rpg:4.0,apg:11.6,fg:48.8,three:36.9,ft:85.1,stl:2.7,blk:0.1}, p:{start:"2007-08",end:"2015-16",games:506,ppg:19.8,rpg:4.3,apg:10.4,fg:48.2,three:36.9,ft:87.3,stl:2.4,blk:0.1}, a:{champ:0,mvp:0,allstar:12,allnba:11,alldef:9,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"westbru01", name:"Russell Westbrook", pos:"PG", base:true, team:"Thunder / Rockets / Lakers +", era:"2008-26", c:{career:"18 seasons",games:1301,ppg:20.9,rpg:6.9,apg:8.0,fg:43.8,three:30.8,ft:77.1,stl:1.7,blk:0.3}, b:{season:"2016-17",ppg:31.6,rpg:10.7,apg:10.4,fg:42.5,three:34.3,ft:84.5,stl:1.6,blk:0.4}, p:{start:"2012-13",end:"2020-21",games:528,ppg:25.3,rpg:9.0,apg:9.9,fg:43.7,three:31.2,ft:77.7,stl:1.8,blk:0.3}, a:{champ:0,mvp:1,allstar:9,allnba:9,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"curryst01", name:"Stephen Curry", pos:"PG", base:true, team:"Warriors", era:"2009-present", c:{career:"17 seasons",games:1069,ppg:24.8,rpg:4.7,apg:6.3,fg:47.1,three:42.2,ft:91.2,stl:1.5,blk:0.3}, b:{season:"2015-16",ppg:30.1,rpg:5.4,apg:6.7,fg:50.4,three:45.4,ft:90.8,stl:2.1,blk:0.2}, p:{start:"2014-15",end:"2021-22",games:485,ppg:27.1,rpg:5.0,apg:6.4,fg:47.8,three:42.4,ft:91.3,stl:1.7,blk:0.2}, a:{champ:4,mvp:2,allstar:12,allnba:11,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"paytoga01", name:"Gary Payton", pos:"PG", base:false, team:"SuperSonics / Bucks / Lakers / Celtics / Heat", era:"1990-2007", c:{career:"17 seasons",games:1335,ppg:16.3,rpg:3.9,apg:6.7,fg:46.6,three:31.7,ft:72.9,stl:1.8,blk:0.2}, b:{season:"1997-98",ppg:19.2,rpg:4.6,apg:8.3,fg:45.3,three:33.8,ft:74.4,stl:2.3,blk:0.2}, p:{start:"1994-95",end:"2001-02",games:541,ppg:21.2,rpg:4.7,apg:8.1,fg:46.8,three:32.2,ft:73.9,stl:2.2,blk:0.2}, a:{champ:1,mvp:0,allstar:9,allnba:9,alldef:9,dpoy:1,anniv:1,annivText:"75th"} },
  { id:"hardeja01", name:"James Harden", pos:"PG/SG", base:false, team:"Thunder / Rockets / Nets / 76ers / Clippers / Cavaliers", era:"2009-present", c:{career:"17 seasons",games:1221,ppg:24.0,rpg:5.6,apg:7.3,fg:43.9,three:36.4,ft:86.3,stl:1.5,blk:0.6}, b:{season:"2018-19",ppg:36.1,rpg:6.6,apg:7.5,fg:44.2,three:36.8,ft:87.9,stl:2.0,blk:0.7}, p:{start:"2012-13",end:"2020-21",games:502,ppg:29.9,rpg:6.4,apg:8.2,fg:44.4,three:36.2,ft:86.1,stl:1.8,blk:0.7}, a:{champ:0,mvp:1,allstar:11,allnba:8,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"iversal01", name:"Allen Iverson", pos:"PG/SG", base:false, team:"76ers / Nuggets / Pistons / Grizzlies", era:"1996-2010", c:{career:"15 seasons",games:914,ppg:26.7,rpg:3.7,apg:6.2,fg:42.5,three:31.3,ft:78.0,stl:2.2,blk:0.2}, b:{season:"2000-01",ppg:31.1,rpg:3.8,apg:4.6,fg:42.0,three:32.0,ft:81.4,stl:2.5,blk:0.3}, p:{start:"1998-99",end:"2005-06",games:478,ppg:29.9,rpg:4.0,apg:5.8,fg:42.0,three:30.7,ft:79.2,stl:2.4,blk:0.2}, a:{champ:0,mvp:1,allstar:11,allnba:7,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"fraziwa01", name:"Walt Frazier", pos:"PG", base:false, team:"Knicks / Cavaliers", era:"1967-80", c:{career:"13 seasons",games:825,ppg:18.9,rpg:5.9,apg:6.1,fg:49.0,three:null,ft:78.6,stl:null,blk:null}, b:{season:"1971-72",ppg:23.2,rpg:6.7,apg:5.8,fg:51.2,three:null,ft:80.8,stl:null,blk:null}, p:{start:"1969-70",end:"1975-76",games:529,ppg:21.2,rpg:6.6,apg:6.5,fg:49.3,three:null,ft:80.0,stl:null,blk:null}, a:{champ:2,mvp:0,allstar:7,allnba:6,alldef:7,dpoy:null,anniv:1,annivText:"75th"} },
  { id:"westje01", name:"Jerry West", pos:"PG/SG", base:false, team:"Lakers", era:"1960-74", c:{career:"14 seasons",games:932,ppg:27.0,rpg:5.8,apg:6.7,fg:47.4,three:null,ft:81.4,stl:null,blk:null}, b:{season:"1965-66",ppg:31.3,rpg:7.1,apg:6.1,fg:47.3,three:null,ft:86.0,stl:null,blk:null}, p:{start:"1961-62",end:"1969-70",games:495,ppg:30.0,rpg:6.4,apg:6.0,fg:47.5,three:null,ft:82.4,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:14,allnba:12,alldef:5,dpoy:null,anniv:4,annivText:"25th, 35th, 50th, 75th"} },
  { id:"architi01", name:"Tiny Archibald", pos:"PG", base:false, team:"Royals / Kings / Nets / Celtics / Bucks", era:"1970-84", c:{career:"14 seasons",games:876,ppg:18.8,rpg:2.3,apg:7.4,fg:46.7,three:null,ft:81.0,stl:null,blk:null}, b:{season:"1972-73",ppg:34.0,rpg:2.8,apg:11.4,fg:48.8,three:null,ft:84.7,stl:null,blk:null}, p:{start:"1971-72",end:"1980-81",games:510,ppg:23.3,rpg:2.6,apg:8.5,fg:47.3,three:null,ft:83.1,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:6,allnba:5,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"parketo01", name:"Tony Parker", pos:"PG", base:false, team:"Spurs / Hornets", era:"2001-19", c:{career:"18 seasons",games:1254,ppg:15.5,rpg:2.7,apg:5.6,fg:49.1,three:32.4,ft:75.1,stl:0.8,blk:0.1}, b:{season:"2008-09",ppg:22.0,rpg:3.1,apg:6.9,fg:50.6,three:29.2,ft:78.2,stl:0.9,blk:0.1}, p:{start:"2005-06",end:"2013-14",games:492,ppg:19.1,rpg:3.0,apg:6.4,fg:51.1,three:31.2,ft:77.5,stl:0.9,blk:0.1}, a:{champ:4,mvp:0,allstar:6,allnba:4,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"lillada01", name:"Damian Lillard", pos:"PG", base:false, team:"Trail Blazers / Bucks", era:"2012-present", c:{career:"13 seasons",games:900,ppg:25.1,rpg:4.3,apg:6.7,fg:43.9,three:37.1,ft:89.9,stl:1.0,blk:0.3}, b:{season:"2019-20",ppg:30.0,rpg:4.3,apg:8.0,fg:46.3,three:40.1,ft:88.8,stl:1.1,blk:0.3}, p:{start:"2015-16",end:"2022-23",games:494,ppg:27.7,rpg:4.5,apg:7.0,fg:44.5,three:37.7,ft:90.7,stl:1.0,blk:0.3}, a:{champ:0,mvp:0,allstar:9,allnba:7,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"billuch01", name:"Chauncey Billups", pos:"PG", base:false, team:"Pistons / Nuggets / Clippers +", era:"1997-2014", c:{career:"17 seasons",games:1043,ppg:15.2,rpg:2.9,apg:5.4,fg:41.5,three:38.7,ft:89.4,stl:1.0,blk:0.2}, b:{season:"2005-06",ppg:18.5,rpg:3.1,apg:8.6,fg:41.8,three:43.3,ft:89.4,stl:0.9,blk:0.1}, p:{start:"2002-03",end:"2008-09",games:540,ppg:17.1,rpg:3.3,apg:6.4,fg:42.3,three:40.1,ft:89.5,stl:1.1,blk:0.2}, a:{champ:1,mvp:0,allstar:5,allnba:3,alldef:2,dpoy:0,anniv:0,annivText:"None"} },
  { id:"irvinky01", name:"Kyrie Irving", pos:"PG/SG", base:false, team:"Cavaliers / Celtics / Nets / Mavericks", era:"2011-present", c:{career:"14 seasons",games:779,ppg:23.7,rpg:4.1,apg:5.6,fg:47.4,three:39.4,ft:88.8,stl:1.3,blk:0.4}, b:{season:"2020-21",ppg:26.9,rpg:4.8,apg:6.0,fg:50.6,three:40.2,ft:92.2,stl:1.4,blk:0.7}, p:{start:"2012-13",end:"2022-23",games:447,ppg:24.4,rpg:4.0,apg:5.8,fg:48.1,three:39.9,ft:88.6,stl:1.3,blk:0.4}, a:{champ:1,mvp:0,allstar:9,allnba:3,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"doncilu01", name:"Luka Doncic", pos:"PG/SG", base:false, team:"Mavericks / Lakers", era:"2018-present", c:{career:"8 seasons",games:514,ppg:29.2,rpg:8.5,apg:8.2,fg:46.9,three:35.2,ft:75.5,stl:1.3,blk:0.5}, b:{season:"2023-24",ppg:33.9,rpg:9.2,apg:9.8,fg:48.7,three:38.2,ft:78.6,stl:1.4,blk:0.5}, p:{start:"2019-20",end:"2025-26",games:447,ppg:29.6,rpg:8.8,apg:8.6,fg:47.4,three:35.2,ft:75.6,stl:1.2,blk:0.5}, a:{champ:0,mvp:0,allstar:6,allnba:6,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"wilkele01", name:"Lenny Wilkens", pos:"PG", base:false, team:"Hawks / SuperSonics / Cavaliers / Trail Blazers", era:"1960-75", c:{career:"15 seasons",games:1077,ppg:16.5,rpg:4.7,apg:6.7,fg:43.2,three:null,ft:77.4,stl:null,blk:null}, b:{season:"1968-69",ppg:22.4,rpg:6.2,apg:8.2,fg:44.0,three:null,ft:77.6,stl:null,blk:null}, p:{start:"1963-64",end:"1970-71",games:543,ppg:18.6,rpg:5.3,apg:7.4,fg:43.1,three:null,ft:77.8,stl:null,blk:null}, a:{champ:0,mvp:0,allstar:9,allnba:0,alldef:null,dpoy:null,anniv:1,annivText:"75th"} },
  { id:"bingda01", name:"Dave Bing", pos:"PG/SG", base:false, team:"Pistons / Bullets / Celtics", era:"1966-78", c:{career:"12 seasons",games:901,ppg:20.3,rpg:3.8,apg:6.0,fg:44.1,three:null,ft:77.5,stl:null,blk:null}, b:{season:"1970-71",ppg:27.0,rpg:4.4,apg:5.0,fg:46.7,three:null,ft:79.7,stl:null,blk:null}, p:{start:"1967-68",end:"1973-74",games:522,ppg:23.6,rpg:4.1,apg:6.6,fg:44.5,three:null,ft:76.2,stl:null,blk:null}, a:{champ:0,mvp:0,allstar:7,allnba:3,alldef:0,dpoy:null,anniv:1,annivText:"75th"} },
  { id:"johnsde01", name:"Dennis Johnson", pos:"PG/SG", base:false, team:"SuperSonics / Suns / Celtics", era:"1976-90", c:{career:"14 seasons",games:1100,ppg:14.1,rpg:3.9,apg:5.0,fg:44.5,three:17.2,ft:79.7,stl:1.3,blk:0.6}, b:{season:"1981-82",ppg:19.5,rpg:5.1,apg:4.6,fg:47.0,three:19.0,ft:80.6,stl:1.3,blk:0.7}, p:{start:"1978-79",end:"1984-85",games:545,ppg:16.2,rpg:4.3,apg:4.5,fg:45.0,three:17.7,ft:78.7,stl:1.3,blk:0.7}, a:{champ:3,mvp:0,allstar:5,allnba:2,alldef:9,dpoy:0,anniv:0,annivText:"None"} },
  { id:"johnske02", name:"Kevin Johnson", pos:"PG", base:false, team:"Cavaliers / Suns", era:"1987-2000", c:{career:"12 seasons",games:735,ppg:17.9,rpg:3.3,apg:9.1,fg:49.3,three:30.5,ft:84.1,stl:1.5,blk:0.2}, b:{season:"1988-89",ppg:20.4,rpg:4.2,apg:12.2,fg:50.5,three:9.1,ft:88.2,stl:1.7,blk:0.3}, p:{start:"1988-89",end:"1994-95",games:491,ppg:20.4,rpg:3.6,apg:10.4,fg:50.1,three:23.3,ft:84.6,stl:1.6,blk:0.2}, a:{champ:0,mvp:0,allstar:3,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"hardati01", name:"Tim Hardaway", pos:"PG", base:false, team:"Warriors / Heat / Mavericks +", era:"1989-2003", c:{career:"13 seasons",games:867,ppg:17.7,rpg:3.3,apg:8.2,fg:43.1,three:35.5,ft:78.2,stl:1.6,blk:0.1}, b:{season:"1991-92",ppg:23.4,rpg:3.8,apg:10.0,fg:46.1,three:33.8,ft:76.6,stl:2.0,blk:0.2}, p:{start:"1990-91",end:"1997-98",games:499,ppg:21.1,rpg:3.6,apg:9.3,fg:44.1,three:36.5,ft:78.8,stl:1.8,blk:0.1}, a:{champ:0,mvp:0,allstar:5,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"lowryky01", name:"Kyle Lowry", pos:"PG", base:false, team:"Grizzlies / Rockets / Raptors / Heat / 76ers", era:"2006-26", c:{career:"20 seasons",games:1187,ppg:13.8,rpg:4.2,apg:6.0,fg:42.3,three:36.7,ft:81.5,stl:1.5,blk:0.3}, b:{season:"2015-16",ppg:21.2,rpg:4.7,apg:6.4,fg:42.7,three:38.8,ft:81.1,stl:2.1,blk:0.4}, p:{start:"2013-14",end:"2019-20",games:498,ppg:18.2,rpg:4.9,apg:7.1,fg:42.7,three:37.9,ft:82.5,stl:1.6,blk:0.3}, a:{champ:1,mvp:0,allstar:6,allnba:1,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"rondora01", name:"Rajon Rondo", pos:"PG", base:false, team:"Celtics / Mavericks / Bulls / Lakers +", era:"2006-22", c:{career:"16 seasons",games:957,ppg:9.8,rpg:4.5,apg:7.9,fg:45.6,three:32.4,ft:61.1,stl:1.6,blk:0.1}, b:{season:"2009-10",ppg:13.7,rpg:4.4,apg:9.8,fg:50.8,three:21.3,ft:62.1,stl:2.3,blk:0.1}, p:{start:"2008-09",end:"2015-16",games:497,ppg:11.7,rpg:5.1,apg:9.9,fg:46.2,three:28.3,ft:61.7,stl:1.9,blk:0.1}, a:{champ:2,mvp:0,allstar:4,allnba:1,alldef:4,dpoy:0,anniv:0,annivText:"None"} },
  { id:"rosede01", name:"Derrick Rose", pos:"PG", base:false, team:"Bulls / Knicks / Cavaliers / Timberwolves +", era:"2008-24", c:{career:"15 seasons",games:723,ppg:17.4,rpg:3.2,apg:5.2,fg:45.6,three:31.6,ft:83.1,stl:0.7,blk:0.3}, b:{season:"2010-11",ppg:25.0,rpg:4.1,apg:7.7,fg:44.5,three:33.2,ft:85.8,stl:1.0,blk:0.6}, p:{start:"2009-10",end:"2016-17",games:405,ppg:19.6,rpg:3.6,apg:5.7,fg:45.5,three:30.3,ft:83.3,stl:0.8,blk:0.3}, a:{champ:0,mvp:1,allstar:3,allnba:1,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"pricema01", name:"Mark Price", pos:"PG", base:false, team:"Cavaliers / Bullets / Warriors / Magic", era:"1986-98", c:{career:"12 seasons",games:722,ppg:15.2,rpg:2.6,apg:6.7,fg:47.2,three:40.2,ft:90.4,stl:1.2,blk:0.1}, b:{season:"1988-89",ppg:18.9,rpg:3.0,apg:8.4,fg:52.6,three:44.1,ft:90.1,stl:1.5,blk:0.1}, p:{start:"1988-89",end:"1994-95",games:444,ppg:17.6,rpg:2.7,apg:7.8,fg:48.3,three:41.0,ft:91.0,stl:1.3,blk:0.1}, a:{champ:0,mvp:0,allstar:4,allnba:4,alldef:0,dpoy:0,anniv:0,annivText:"None"} }
];

const hofPlayers = new Set([
  "cousybo01", "roberos01", "johnsma02", "thomais01", "stockjo01",
  "kiddja01", "nashst01", "paytoga01", "iversal01", "fraziwa01",
  "westje01", "architi01", "parketo01", "billuch01", "wilkele01",
  "bingda01", "johnsde01", "hardati01"
]);

const rankMetrics = ["games","ppg","rpg","apg","fg","ft","champ","mvp","allstar","allnba"];
const fmt = (value, suffix = "") => value == null ? "N/A" : `${value}${suffix}`;
const cell = (html, cls = "") => `<td${cls ? ` class="${cls}"` : ""}>${html}</td>`;
const comboToggle = () => document.querySelector("#comboToggle");
const debutYear = player => Number(player.era.match(/^\d{4}/)?.[0] ?? 9999);

function selectedPlayers() {
  const checked = new Set([...document.querySelectorAll(".player-check:checked")].map(input => input.value));
  const showCombo = comboToggle()?.checked ?? true;
  return players
    .filter(player => checked.has(player.id) && (showCombo || player.pos === "PG"))
    .sort((a, b) => debutYear(a) - debutYear(b) || players.indexOf(a) - players.indexOf(b));
}

function ranksFor(selected, key, source) {
  const values = selected
    .map(player => ({ id: player.id, value: source(player)[key] }))
    .filter(item => item.value != null);
  const ordered = [...new Set(values.map(item => item.value))].sort((a, b) => b - a);
  return Object.fromEntries(values.map(item => [item.id, ordered.indexOf(item.value) + 1]));
}

function rankedValue(player, key, source, suffix = "") {
  const value = source(player)[key];
  if (value == null) return "N/A";
  const ranks = ranksFor(selectedPlayers(), key, source);
  return `${fmt(value, suffix)} (${ranks[player.id]})`;
}

function bestIds(selected, key, source, lowIsBest = false) {
  const values = selected
    .map(player => ({ id: player.id, value: source(player)[key] }))
    .filter(item => item.value != null);
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
    const rank = ranksFor(selected, key, source)[player.id];
    return sum + rank;
  }, 0);
  const count = rankMetrics.filter(key => (key in player.c ? player.c[key] : player.a[key]) != null).length;
  return (total / count).toFixed(2);
}

function renderHeader(table, selected) {
  table.querySelector("thead").innerHTML = `<tr><th>Category</th>${selected.map(player => `<th>${player.name}<span class="era">${player.pos}</span></th>`).join("")}</tr>`;
}

function groupRow(label, count) {
  return `<tr class="group-row"><td colspan="${count + 1}">${label}</td></tr>`;
}

function renderCareer(selected) {
  const table = document.querySelector("#careerTable");
  renderHeader(table, selected);
  const rows = [
    ["Team / Era", p => `<span class="player">${p.team}<span class="era">${p.era}</span></span>`],
    ["Career", p => p.c.career],
    ["Games", p => rankedValue(p, "games", x => x.c), "", { key:"games", source:x => x.c }],
    ["PPG", p => rankedValue(p, "ppg", x => x.c), "", { key:"ppg", source:x => x.c }],
    ["RPG", p => rankedValue(p, "rpg", x => x.c), "", { key:"rpg", source:x => x.c }],
    ["APG", p => rankedValue(p, "apg", x => x.c), "", { key:"apg", source:x => x.c }],
    ["FG%", p => rankedValue(p, "fg", x => x.c), "", { key:"fg", source:x => x.c }],
    ["3P%", p => rankedValue(p, "three", x => x.c), "", { key:"three", source:x => x.c }],
    ["FT%", p => rankedValue(p, "ft", x => x.c), "", { key:"ft", source:x => x.c }],
    ["__group", "Defensive Stats"],
    ["Steals", p => rankedValue(p, "stl", x => x.c), "", { key:"stl", source:x => x.c }],
    ["Blocks", p => rankedValue(p, "blk", x => x.c), "", { key:"blk", source:x => x.c }],
    ["__group", "Box-Score Trends"],
    ["__group", "Accolades"],
    ["Championships", p => rankedValue(p, "champ", x => x.a), "", { key:"champ", source:x => x.a }],
    ["MVPs", p => rankedValue(p, "mvp", x => x.a), "", { key:"mvp", source:x => x.a }],
    ["All-Star", p => rankedValue(p, "allstar", x => x.a), "", { key:"allstar", source:x => x.a }],
    ["All-League", p => rankedValue(p, "allnba", x => x.a), "", { key:"allnba", source:x => x.a }],
    ["All-Defensive", p => rankedValue(p, "alldef", x => x.a), "", { key:"alldef", source:x => x.a }],
    ["DPOY", p => rankedValue(p, "dpoy", x => x.a), "", { key:"dpoy", source:x => x.a }],
    ["75th Anniversary Teams", p => p.a.annivText],
    ["HOF", p => hofPlayers.has(p.id) ? "Yes" : "No"],
    ["Avg Rank", p => avgRank(p, selected), "avg-rank-row", { key:"avg", source:x => ({ avg:Number(avgRank(x, selected)) }), lowIsBest:true }]
  ];
  table.querySelector("tbody").innerHTML = rows.map(row => {
    if (row[0] === "__group") return groupRow(row[1], selected.length);
    return `<tr${row[2] ? ` class="${row[2]}"` : ""}>${cell(row[0], "category")}${dataCells(selected, row[1], row[3])}</tr>`;
  }).join("");
}

function renderSeasonTable(tableId, sourceKey, includeGames) {
  const selected = selectedPlayers();
  const table = document.querySelector(tableId);
  renderHeader(table, selected);
  const source = player => player[sourceKey];
  const seasonLabel = sourceKey === "p"
    ? p => `<span class="range"><span>${p.p.start}</span><span>through</span><span>${p.p.end}</span></span>`
    : p => p.b.season;
  const rows = [
    [sourceKey === "p" ? "Seasons" : "Season", seasonLabel],
    ...(includeGames ? [["Games", p => fmt(p.p.games), { key:"games", source:p => p.p }]] : []),
    ["__group", "Offensive Stats"],
    ["PPG", p => fmt(source(p).ppg), { key:"ppg", source }],
    ["RPG", p => fmt(source(p).rpg), { key:"rpg", source }],
    ["APG", p => fmt(source(p).apg), { key:"apg", source }],
    ["FG%", p => fmt(source(p).fg, "%"), { key:"fg", source }],
    ["3P%", p => fmt(source(p).three, "%"), { key:"three", source }],
    ["FT%", p => fmt(source(p).ft, "%"), { key:"ft", source }],
    ["__group", "Defensive Stats"],
    ["Steals", p => fmt(source(p).stl), { key:"stl", source }],
    ["Blocks", p => fmt(source(p).blk), { key:"blk", source }],
    ["__group", "Box-Score Trends"],
  ];
  table.querySelector("tbody").innerHTML = rows.map(row => {
    if (row[0] === "__group") return groupRow(row[1], selected.length);
    return `<tr>${cell(row[0], "category")}${dataCells(selected, row[1], row[2])}</tr>`;
  }).join("");
}

function clearTables() {
  ["#careerTable", "#bestTable", "#peakTable"].forEach(selector => {
    const table = document.querySelector(selector);
    if (!table) return;
    table.querySelector("thead").innerHTML = "<tr><th>Category</th><th>Status</th></tr>";
    table.querySelector("tbody").innerHTML = "<tr><td class=\"category\">Selection</td><td>Select at least one player to populate this table.</td></tr>";
  });
}

function renderAll() {
  const selected = selectedPlayers();
  document.querySelector("#selectedCount").textContent = `${selected.length} selected`;
  if (!selected.length) { clearTables(); return; }
  renderCareer(selected);
  renderSeasonTable("#bestTable", "b", false);
  renderSeasonTable("#peakTable", "p", true);
}

function buildSelector() {
  const container = document.querySelector("#playerSelector");
  container.innerHTML = players.map(player => `
    <label class="player-option">
      <input class="player-check" type="checkbox" value="${player.id}" ${player.base ? "checked" : ""}>
      <span><strong>${player.name}</strong><span>${player.pos}${player.a.annivText.includes("75th") ? " | pro basketball 75" : ""}</span></span>
    </label>
  `).join("");
  container.addEventListener("change", renderAll);
}

buildSelector();
renderAll();

const playerMenuButton = document.querySelector("#playerMenuButton");
const playerSelectorDropdown = document.querySelector("#playerSelectorDropdown");
const resetBaseButton = document.querySelector("#resetBaseButton");
const showComboToggle = document.querySelector("#comboToggle");

function setSelectorOpen(isOpen) {
  playerSelectorDropdown.hidden = !isOpen;
  playerMenuButton.setAttribute("aria-expanded", String(isOpen));
}

playerMenuButton.addEventListener("click", event => {
  event.stopPropagation();
  setSelectorOpen(playerSelectorDropdown.hidden);
});

playerSelectorDropdown.addEventListener("click", event => {
  event.stopPropagation();
});

document.addEventListener("click", () => setSelectorOpen(false));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setSelectorOpen(false);
});

resetBaseButton.addEventListener("click", () => {
  showComboToggle.checked = true;
  document.querySelectorAll(".player-check").forEach(input => {
    const player = players.find(item => item.id === input.value);
    input.checked = Boolean(player?.base);
    input.closest(".player-option").hidden = false;
  });
  renderAll();
});

showComboToggle.addEventListener("change", () => {
  document.querySelectorAll(".player-check").forEach(input => {
    const player = players.find(item => item.id === input.value);
    if (!player || player.pos !== "PG/SG") return;
    input.closest(".player-option").hidden = !showComboToggle.checked;
    if (!showComboToggle.checked) input.checked = false;
  });
  renderAll();
});
