const players = [
  { id:"sharmbi01", name:"Bill Sharman", pos:"SG", base:false, team:"Capitols / Celtics", era:"1950-61", c:{career:"11 seasons",games:711,ppg:17.8,rpg:3.9,apg:3.0,fg:42.6,three:null,ft:88.3,stl:null,blk:null}, b:{season:"1957-58",ppg:22.3,rpg:4.7,apg:2.7,fg:42.4,three:null,ft:89.3,stl:null,blk:null}, p:{start:"1952-53",end:"1959-60",games:506,ppg:20.0,rpg:4.3,apg:3.1,fg:42.5,three:null,ft:88.8,stl:null,blk:null}, a:{champ:4,mvp:0,allstar:8,allnba:7,alldef:null,dpoy:null,anniv:3,annivText:"25th, 50th, 75th"} },
  { id:"jonesam01", name:"Sam Jones", pos:"SG", base:false, team:"Celtics", era:"1957-69", c:{career:"12 seasons",games:871,ppg:17.7,rpg:4.9,apg:2.5,fg:45.6,three:null,ft:80.3,stl:null,blk:null}, b:{season:"1964-65",ppg:25.9,rpg:5.1,apg:2.8,fg:45.2,three:null,ft:82.0,stl:null,blk:null}, p:{start:"1961-62",end:"1967-68",games:559,ppg:21.5,rpg:5.3,apg:2.8,fg:46.3,three:null,ft:80.9,stl:null,blk:null}, a:{champ:10,mvp:0,allstar:5,allnba:3,alldef:null,dpoy:null,anniv:3,annivText:"25th, 50th, 75th"} },
  { id:"greerha01", name:"Hal Greer", pos:"SG/PG", base:false, team:"Nationals / 76ers", era:"1958-73", c:{career:"15 seasons",games:1122,ppg:19.2,rpg:5.0,apg:4.0,fg:45.2,three:null,ft:80.1,stl:null,blk:null}, b:{season:"1967-68",ppg:24.1,rpg:5.4,apg:4.5,fg:47.8,three:null,ft:76.9,stl:null,blk:null}, p:{start:"1962-63",end:"1968-69",games:558,ppg:22.9,rpg:5.4,apg:4.5,fg:45.5,three:null,ft:79.5,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:10,allnba:7,alldef:null,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"westje01", name:"Jerry West", pos:"SG/PG", base:true, team:"Lakers", era:"1960-74", c:{career:"14 seasons",games:932,ppg:27.0,rpg:5.8,apg:6.7,fg:47.4,three:null,ft:81.4,stl:2.6,blk:0.7}, b:{season:"1965-66",ppg:31.3,rpg:7.1,apg:6.1,fg:47.3,three:null,ft:86.0,stl:null,blk:null}, p:{start:"1961-62",end:"1968-69",games:522,ppg:29.2,rpg:6.6,apg:6.0,fg:47.0,three:null,ft:83.4,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:14,allnba:12,alldef:5,dpoy:null,anniv:3,annivText:"35th, 50th, 75th"} },
  { id:"goodrga01", name:"Gail Goodrich", pos:"SG/PG", base:false, team:"Lakers / Suns / Jazz", era:"1965-79", c:{career:"14 seasons",games:1031,ppg:18.6,rpg:3.2,apg:4.7,fg:45.6,three:null,ft:80.7,stl:1.3,blk:0.2}, b:{season:"1971-72",ppg:25.9,rpg:3.6,apg:4.5,fg:48.7,three:null,ft:85.0,stl:null,blk:null}, p:{start:"1969-70",end:"1975-76",games:550,ppg:23.0,rpg:3.4,apg:4.9,fg:47.0,three:null,ft:82.5,stl:1.4,blk:0.2}, a:{champ:1,mvp:0,allstar:5,allnba:1,alldef:0,dpoy:null,anniv:0,annivText:"None"} },
  { id:"hudsolo01", name:"Lou Hudson", pos:"SF/SG", base:false, team:"Hawks / Lakers", era:"1966-79", c:{career:"13 seasons",games:890,ppg:20.2,rpg:4.4,apg:2.7,fg:48.9,three:null,ft:79.7,stl:1.4,blk:0.3}, b:{season:"1969-70",ppg:25.4,rpg:4.7,apg:3.5,fg:53.1,three:null,ft:82.4,stl:null,blk:null}, p:{start:"1967-68",end:"1973-74",games:509,ppg:23.3,rpg:4.9,apg:3.2,fg:49.8,three:null,ft:80.6,stl:1.8,blk:0.3}, a:{champ:0,mvp:0,allstar:6,allnba:0,alldef:0,dpoy:null,anniv:0,annivText:"None"} },
  { id:"monroea01", name:"Earl Monroe", pos:"SG/PG", base:false, team:"Bullets / Knicks", era:"1967-80", c:{career:"13 seasons",games:926,ppg:18.8,rpg:3.0,apg:3.9,fg:46.4,three:null,ft:80.7,stl:1.0,blk:0.3}, b:{season:"1968-69",ppg:25.8,rpg:3.5,apg:4.9,fg:44.0,three:null,ft:76.8,stl:null,blk:null}, p:{start:"1967-68",end:"1974-75",games:516,ppg:20.5,rpg:3.1,apg:4.0,fg:45.6,three:null,ft:79.8,stl:1.3,blk:0.3}, a:{champ:1,mvp:0,allstar:4,allnba:1,alldef:0,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"maravpe01", name:"Pete Maravich", pos:"SG/PG", base:false, team:"Hawks / Jazz / Celtics", era:"1970-80", c:{career:"10 seasons",games:658,ppg:24.2,rpg:4.2,apg:5.4,fg:44.1,three:66.7,ft:82.0,stl:1.4,blk:0.3}, b:{season:"1976-77",ppg:31.1,rpg:5.1,apg:5.4,fg:43.3,three:null,ft:83.5,stl:1.2,blk:0.3}, p:{start:"1972-73",end:"1978-79",games:464,ppg:27.1,rpg:4.5,apg:5.6,fg:44.0,three:null,ft:82.7,stl:1.5,blk:0.3}, a:{champ:0,mvp:0,allstar:5,allnba:4,alldef:0,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"thompda01", name:"David Thompson", pos:"SF/SG", base:false, team:"Nuggets / SuperSonics", era:"1976-84", c:{career:"8 pro seasons",games:509,ppg:22.1,rpg:3.8,apg:3.2,fg:50.4,three:27.7,ft:77.8,stl:0.9,blk:0.8}, b:{season:"1977-78",ppg:27.2,rpg:4.9,apg:4.5,fg:52.1,three:null,ft:77.8,stl:1.2,blk:1.2}, p:{start:"1976-77",end:"1982-83",games:446,ppg:24.1,rpg:4.3,apg:3.5,fg:51.0,three:24.1,ft:78.3,stl:1.0,blk:0.9}, a:{champ:0,mvp:0,allstar:4,allnba:2,alldef:0,dpoy:null,anniv:0,annivText:"None"} },
  { id:"gervige01", name:"George Gervin", pos:"SF/SG", base:true, team:"Spurs / Bulls", era:"1976-86", c:{career:"10 seasons",games:791,ppg:26.2,rpg:4.6,apg:2.8,fg:51.1,three:29.7,ft:84.4,stl:1.2,blk:0.8}, b:{season:"1979-80",ppg:33.1,rpg:5.2,apg:2.6,fg:52.8,three:31.4,ft:85.2,stl:1.4,blk:1.0}, p:{start:"1976-77",end:"1982-83",games:560,ppg:29.6,rpg:5.0,apg:2.9,fg:51.7,three:27.9,ft:84.8,stl:1.3,blk:0.9}, a:{champ:0,mvp:0,allstar:9,allnba:7,alldef:0,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"davisw01", name:"Walter Davis", pos:"SF/SG", base:false, team:"Suns / Nuggets / Trail Blazers", era:"1977-92", c:{career:"15 seasons",games:1033,ppg:18.9,rpg:3.0,apg:3.8,fg:51.1,three:27.2,ft:85.1,stl:1.2,blk:0.2}, b:{season:"1977-78",ppg:24.2,rpg:6.0,apg:3.4,fg:52.6,three:null,ft:83.0,stl:1.4,blk:0.2}, p:{start:"1977-78",end:"1983-84",games:522,ppg:22.2,rpg:3.9,apg:4.4,fg:52.2,three:25.5,ft:84.0,stl:1.4,blk:0.2}, a:{champ:0,mvp:0,allstar:6,allnba:2,alldef:0,dpoy:null,anniv:0,annivText:"None"} },
  { id:"jordami01", name:"Michael Jordan", pos:"SG", base:true, team:"Bulls / Wizards", era:"1984-2003", c:{career:"15 seasons",games:1072,ppg:30.1,rpg:6.2,apg:5.3,fg:49.7,three:32.7,ft:83.5,stl:2.3,blk:0.8}, b:{season:"1987-88",ppg:35.0,rpg:5.5,apg:5.9,fg:53.5,three:13.2,ft:84.1,stl:3.2,blk:1.6}, p:{start:"1986-87",end:"1992-93",games:550,ppg:33.2,rpg:6.4,apg:6.0,fg:51.8,three:30.2,ft:84.3,stl:2.8,blk:1.0}, a:{champ:6,mvp:5,allstar:14,allnba:11,alldef:9,dpoy:1,anniv:2,annivText:"50th, 75th"} },
  { id:"drexlcl01", name:"Clyde Drexler", pos:"SF/SG", base:true, team:"Trail Blazers / Rockets", era:"1983-98", c:{career:"15 seasons",games:1086,ppg:20.4,rpg:6.1,apg:5.6,fg:47.2,three:31.8,ft:78.8,stl:2.0,blk:0.7}, b:{season:"1988-89",ppg:27.2,rpg:7.9,apg:5.8,fg:49.6,three:26.0,ft:79.9,stl:2.7,blk:0.7}, p:{start:"1987-88",end:"1994-95",games:534,ppg:24.9,rpg:6.9,apg:6.4,fg:48.1,three:32.4,ft:79.0,stl:2.2,blk:0.8}, a:{champ:1,mvp:0,allstar:10,allnba:5,alldef:0,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"dumarsjo01", name:"Joe Dumars", pos:"SG/PG", base:false, team:"Pistons", era:"1985-99", c:{career:"14 seasons",games:1018,ppg:16.1,rpg:2.2,apg:4.5,fg:46.0,three:38.2,ft:84.3,stl:0.9,blk:0.1}, b:{season:"1992-93",ppg:23.5,rpg:1.9,apg:4.0,fg:46.6,three:37.5,ft:86.4,stl:1.0,blk:0.1}, p:{start:"1988-89",end:"1994-95",games:559,ppg:19.6,rpg:2.1,apg:4.4,fg:46.6,three:38.8,ft:85.4,stl:0.9,blk:0.1}, a:{champ:2,mvp:0,allstar:6,allnba:3,alldef:5,dpoy:0,anniv:0,annivText:"None"} },
  { id:"moncrsi01", name:"Sidney Moncrief", pos:"SG", base:false, team:"Bucks / Hawks", era:"1979-91", c:{career:"11 seasons",games:767,ppg:15.6,rpg:4.7,apg:3.6,fg:50.2,three:28.4,ft:83.1,stl:1.2,blk:0.3}, b:{season:"1982-83",ppg:22.5,rpg:5.8,apg:3.9,fg:52.4,three:10.0,ft:82.6,stl:1.5,blk:0.3}, p:{start:"1981-82",end:"1987-88",games:532,ppg:20.2,rpg:5.5,apg:4.1,fg:50.7,three:27.8,ft:84.1,stl:1.4,blk:0.3}, a:{champ:0,mvp:0,allstar:5,allnba:5,alldef:5,dpoy:2,anniv:0,annivText:"None"} },
  { id:"millere01", name:"Reggie Miller", pos:"SG", base:true, team:"Pacers", era:"1987-2005", c:{career:"18 seasons",games:1389,ppg:18.2,rpg:3.0,apg:3.0,fg:47.1,three:39.5,ft:88.8,stl:1.1,blk:0.2}, b:{season:"1989-90",ppg:24.6,rpg:3.6,apg:3.8,fg:51.4,three:41.4,ft:86.8,stl:1.3,blk:0.2}, p:{start:"1989-90",end:"1997-98",games:561,ppg:21.3,rpg:3.1,apg:3.2,fg:48.7,three:40.6,ft:88.6,stl:1.2,blk:0.2}, a:{champ:0,mvp:0,allstar:5,allnba:3,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"richmmi01", name:"Mitch Richmond", pos:"SG", base:false, team:"Warriors / Kings / Wizards / Lakers", era:"1988-2002", c:{career:"14 seasons",games:976,ppg:21.0,rpg:3.9,apg:3.5,fg:45.5,three:38.8,ft:85.0,stl:1.2,blk:0.3}, b:{season:"1996-97",ppg:25.9,rpg:3.9,apg:4.2,fg:45.4,three:42.8,ft:86.1,stl:1.5,blk:0.3}, p:{start:"1988-89",end:"1996-97",games:559,ppg:23.1,rpg:4.3,apg:3.7,fg:46.2,three:39.6,ft:85.4,stl:1.4,blk:0.3}, a:{champ:1,mvp:0,allstar:6,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"allenra02", name:"Ray Allen", pos:"SG", base:true, team:"Bucks / SuperSonics / Celtics / Heat", era:"1996-2014", c:{career:"18 seasons",games:1300,ppg:18.9,rpg:4.1,apg:3.4,fg:45.2,three:40.0,ft:89.4,stl:1.1,blk:0.2}, b:{season:"2006-07",ppg:26.4,rpg:4.5,apg:4.1,fg:43.8,three:37.2,ft:90.3,stl:1.5,blk:0.2}, p:{start:"1999-00",end:"2006-07",games:531,ppg:22.4,rpg:4.8,apg:4.2,fg:44.8,three:40.4,ft:89.4,stl:1.3,blk:0.2}, a:{champ:2,mvp:0,allstar:10,allnba:2,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"iversonal01", name:"Allen Iverson", pos:"SG/PG", base:true, team:"76ers / Nuggets / Pistons +", era:"1996-2010", c:{career:"14 seasons",games:914,ppg:26.7,rpg:3.7,apg:6.2,fg:42.5,three:31.3,ft:78.0,stl:2.2,blk:0.2}, b:{season:"2005-06",ppg:33.0,rpg:3.2,apg:7.4,fg:44.7,three:32.3,ft:81.4,stl:1.9,blk:0.1}, p:{start:"1998-99",end:"2005-06",games:548,ppg:30.3,rpg:3.9,apg:6.4,fg:42.4,three:31.4,ft:78.9,stl:2.4,blk:0.2}, a:{champ:0,mvp:1,allstar:11,allnba:7,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"bryanko01", name:"Kobe Bryant", pos:"SG", base:true, team:"Lakers", era:"1996-2016", c:{career:"20 seasons",games:1346,ppg:25.0,rpg:5.2,apg:4.7,fg:44.7,three:32.9,ft:83.7,stl:1.4,blk:0.5}, b:{season:"2005-06",ppg:35.4,rpg:5.3,apg:4.5,fg:45.0,three:34.7,ft:85.0,stl:1.8,blk:0.4}, p:{start:"2000-01",end:"2007-08",games:561,ppg:29.1,rpg:5.8,apg:5.2,fg:45.4,three:34.4,ft:84.7,stl:1.6,blk:0.6}, a:{champ:5,mvp:1,allstar:18,allnba:15,alldef:12,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"ginobma01", name:"Manu Ginobili", pos:"SG", base:false, team:"Spurs", era:"2002-18", c:{career:"16 seasons",games:1057,ppg:13.3,rpg:3.5,apg:3.8,fg:44.7,three:36.9,ft:82.7,stl:1.3,blk:0.3}, b:{season:"2007-08",ppg:19.5,rpg:4.8,apg:4.5,fg:46.0,three:40.1,ft:86.0,stl:1.5,blk:0.4}, p:{start:"2003-04",end:"2010-11",games:526,ppg:16.0,rpg:4.1,apg:4.1,fg:45.2,three:38.0,ft:84.3,stl:1.5,blk:0.4}, a:{champ:4,mvp:0,allstar:2,allnba:2,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"cartvi01", name:"Vince Carter", pos:"SF/SG", base:false, team:"Raptors / Nets / Magic +", era:"1998-2020", c:{career:"22 seasons",games:1541,ppg:16.7,rpg:4.3,apg:3.1,fg:43.5,three:37.1,ft:79.8,stl:1.0,blk:0.6}, b:{season:"2000-01",ppg:27.6,rpg:5.5,apg:3.9,fg:46.0,three:40.8,ft:76.5,stl:1.5,blk:1.1}, p:{start:"1999-00",end:"2006-07",games:518,ppg:24.9,rpg:5.4,apg:4.1,fg:44.5,three:38.2,ft:79.2,stl:1.4,blk:0.8}, a:{champ:0,mvp:0,allstar:8,allnba:2,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"mcgratr01", name:"Tracy McGrady", pos:"SF/SG", base:false, team:"Raptors / Magic / Rockets +", era:"1997-2013", c:{career:"15 seasons",games:938,ppg:19.6,rpg:5.6,apg:4.4,fg:43.5,three:33.8,ft:74.6,stl:1.2,blk:0.9}, b:{season:"2002-03",ppg:32.1,rpg:6.5,apg:5.5,fg:45.7,three:38.6,ft:79.3,stl:1.7,blk:0.8}, p:{start:"2000-01",end:"2006-07",games:498,ppg:27.4,rpg:6.7,apg:5.3,fg:44.6,three:34.8,ft:76.1,stl:1.5,blk:0.9}, a:{champ:0,mvp:0,allstar:7,allnba:7,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"wadedw01", name:"Dwyane Wade", pos:"SG", base:true, team:"Heat / Bulls / Cavaliers", era:"2003-19", c:{career:"16 seasons",games:1054,ppg:22.0,rpg:4.7,apg:5.4,fg:48.0,three:29.3,ft:76.5,stl:1.5,blk:0.8}, b:{season:"2008-09",ppg:30.2,rpg:5.0,apg:7.5,fg:49.1,three:31.7,ft:76.5,stl:2.2,blk:1.3}, p:{start:"2004-05",end:"2011-12",games:509,ppg:26.3,rpg:5.1,apg:6.4,fg:48.8,three:28.8,ft:76.6,stl:1.8,blk:1.0}, a:{champ:3,mvp:0,allstar:13,allnba:8,alldef:3,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"johnsjo02", name:"Joe Johnson", pos:"SF/SG", base:false, team:"Celtics / Suns / Hawks / Nets +", era:"2001-18", c:{career:"17 seasons",games:1277,ppg:16.0,rpg:4.0,apg:3.9,fg:44.1,three:37.1,ft:80.2,stl:0.8,blk:0.2}, b:{season:"2006-07",ppg:25.0,rpg:4.2,apg:4.4,fg:47.1,three:38.1,ft:74.8,stl:1.1,blk:0.2}, p:{start:"2005-06",end:"2011-12",games:506,ppg:21.2,rpg:4.4,apg:5.0,fg:45.2,three:37.5,ft:79.9,stl:1.0,blk:0.2}, a:{champ:0,mvp:0,allstar:7,allnba:1,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"hardeja01", name:"James Harden", pos:"SG/PG", base:true, team:"Thunder / Rockets / Nets / 76ers / Clippers", era:"2009-present", c:{career:"16 seasons",games:1110,ppg:24.1,rpg:5.6,apg:7.2,fg:44.1,three:36.3,ft:86.1,stl:1.5,blk:0.5}, b:{season:"2018-19",ppg:36.1,rpg:6.6,apg:7.5,fg:44.2,three:36.8,ft:87.9,stl:2.0,blk:0.7}, p:{start:"2012-13",end:"2019-20",games:543,ppg:29.6,rpg:6.0,apg:7.7,fg:44.3,three:36.2,ft:86.2,stl:1.8,blk:0.6}, a:{champ:0,mvp:1,allstar:10,allnba:7,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"thompkl01", name:"Klay Thompson", pos:"SG", base:false, team:"Warriors / Mavericks", era:"2011-present", c:{career:"12 seasons",games:793,ppg:19.6,rpg:3.5,apg:2.3,fg:45.3,three:41.3,ft:85.8,stl:0.9,blk:0.5}, b:{season:"2016-17",ppg:22.3,rpg:3.7,apg:2.1,fg:46.8,three:41.4,ft:85.3,stl:0.8,blk:0.5}, p:{start:"2014-15",end:"2022-23",games:500,ppg:21.1,rpg:3.8,apg:2.4,fg:45.6,three:41.0,ft:85.9,stl:0.9,blk:0.5}, a:{champ:4,mvp:0,allstar:5,allnba:2,alldef:1,dpoy:0,anniv:0,annivText:"None"} },
  { id:"butleji01", name:"Jimmy Butler", pos:"SF/SG", base:false, team:"Bulls / Timberwolves / 76ers / Heat / Warriors", era:"2011-present", c:{career:"14 seasons",games:839,ppg:18.3,rpg:5.3,apg:4.3,fg:47.0,three:32.9,ft:84.4,stl:1.6,blk:0.4}, b:{season:"2016-17",ppg:23.9,rpg:6.2,apg:5.5,fg:45.5,three:36.7,ft:86.5,stl:1.9,blk:0.4}, p:{start:"2014-15",end:"2021-22",games:487,ppg:21.4,rpg:5.9,apg:4.8,fg:46.8,three:33.4,ft:85.3,stl:1.8,blk:0.5}, a:{champ:0,mvp:0,allstar:6,allnba:5,alldef:5,dpoy:0,anniv:0,annivText:"None"} },
  { id:"georgpa01", name:"Paul George", pos:"SF/SG", base:false, team:"Pacers / Thunder / Clippers / 76ers", era:"2010-present", c:{career:"15 seasons",games:867,ppg:20.6,rpg:6.3,apg:3.7,fg:44.0,three:38.5,ft:85.4,stl:1.7,blk:0.4}, b:{season:"2018-19",ppg:28.0,rpg:8.2,apg:4.1,fg:43.8,three:38.6,ft:83.9,stl:2.2,blk:0.4}, p:{start:"2013-14",end:"2020-21",games:486,ppg:23.2,rpg:6.8,apg:3.9,fg:43.5,three:38.7,ft:85.6,stl:1.9,blk:0.4}, a:{champ:0,mvp:0,allstar:9,allnba:6,alldef:4,dpoy:0,anniv:0,annivText:"None"} },
  { id:"bookede01", name:"Devin Booker", pos:"SG", base:false, team:"Suns", era:"2015-present", c:{career:"10 seasons",games:673,ppg:24.4,rpg:4.0,apg:5.2,fg:46.4,three:35.7,ft:87.1,stl:0.9,blk:0.3}, b:{season:"2022-23",ppg:27.8,rpg:4.5,apg:5.5,fg:49.4,three:35.1,ft:85.5,stl:1.0,blk:0.3}, p:{start:"2017-18",end:"2024-25",games:505,ppg:26.1,rpg:4.3,apg:5.5,fg:46.9,three:36.0,ft:87.1,stl:0.9,blk:0.3}, a:{champ:0,mvp:0,allstar:4,allnba:2,alldef:0,dpoy:0,anniv:0,annivText:"None"} }
];

const hofPlayers = new Set([
  "sharmbi01", "jonesam01", "greerha01", "westje01", "monroea01",
  "hudsolo01", "maravpe01", "thompda01", "gervige01", "davisw01", "jordami01", "drexlcl01",
  "dumarsjo01", "moncrsi01", "millere01", "richmmi01", "allenra02",
  "iversonal01", "bryanko01", "ginobma01", "cartvi01", "mcgratr01",
  "wadedw01"
]);

const rankMetrics = ["games","ppg","rpg","apg","fg","three","ft","stl","blk","champ","mvp","allstar","allnba","alldef","dpoy"];
const fmt = (value, suffix = "") => value == null ? "N/A" : `${value}${suffix}`;
const cell = (html, cls = "") => `<td${cls ? ` class="${cls}"` : ""}>${html}</td>`;
const comboToggle = () => document.querySelector("#comboToggle");
const playerStartYear = player => Number(player.era.match(/\d{4}/)?.[0] ?? 9999);
const byStartYear = (a, b) => playerStartYear(a) - playerStartYear(b) || a.name.localeCompare(b.name);

function selectedPlayers() {
  const checked = new Set([...document.querySelectorAll(".player-check:checked")].map(input => input.value));
  const showCombo = comboToggle()?.checked ?? true;
  return players
    .filter(player => checked.has(player.id) && (showCombo || player.pos === "SG"))
    .sort(byStartYear);
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
    ["__group", "Offensive Stats"],
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
    table.querySelector("thead").innerHTML = "<tr><th>Category</th></tr>";
    table.querySelector("tbody").innerHTML = "<tr><td class=\"category\">Selection</td></tr>";
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
  container.innerHTML = [...players].sort(byStartYear).map(player => `
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
    if (!player || player.pos === "SG") return;
    input.closest(".player-option").hidden = !showComboToggle.checked;
    if (!showComboToggle.checked) input.checked = false;
  });
  renderAll();
});
