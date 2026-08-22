const players = [
  { id:"bayloel01", name:"Elgin Baylor", pos:"SF", base:true, team:"Lakers", era:"1958-72", c:{career:"14 seasons",games:846,ppg:27.4,rpg:13.5,apg:4.3,fg:43.1,three:null,ft:78.0,stl:null,blk:null}, b:{season:"1961-62",ppg:38.3,rpg:18.6,apg:4.6,fg:42.8,three:null,ft:75.4,stl:null,blk:null}, p:{start:"1958-59",end:"1964-65",games:477,ppg:31.9,rpg:15.6,apg:4.3,fg:43.3,three:null,ft:78.2,stl:null,blk:null}, a:{champ:0,mvp:0,allstar:11,allnba:10,alldef:null,dpoy:null,anniv:3,annivText:"35th, 50th, 75th"} },
  { id:"havlijo01", name:"John Havlicek", pos:"SF/SG", base:true, team:"Celtics", era:"1962-78", c:{career:"16 seasons",games:1270,ppg:20.8,rpg:6.3,apg:4.8,fg:43.9,three:null,ft:81.5,stl:null,blk:null}, b:{season:"1970-71",ppg:28.9,rpg:9.0,apg:7.5,fg:45.0,three:null,ft:81.8,stl:null,blk:null}, p:{start:"1968-69",end:"1974-75",games:542,ppg:25.4,rpg:7.8,apg:6.6,fg:44.4,three:null,ft:82.6,stl:null,blk:null}, a:{champ:8,mvp:0,allstar:13,allnba:11,alldef:8,dpoy:null,anniv:3,annivText:"35th, 50th, 75th"} },
  { id:"cunnibi01", name:"Billy Cunningham", pos:"SF/PF", base:false, team:"76ers", era:"1965-76", c:{career:"9 pro seasons",games:654,ppg:21.2,rpg:10.4,apg:4.3,fg:44.6,three:null,ft:72.0,stl:null,blk:null}, b:{season:"1969-70",ppg:26.1,rpg:13.6,apg:4.3,fg:46.9,three:null,ft:72.9,stl:null,blk:null}, p:{start:"1966-67",end:"1972-73",games:490,ppg:22.7,rpg:11.2,apg:4.3,fg:45.0,three:null,ft:72.3,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:4,allnba:4,alldef:0,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"barryri01", name:"Rick Barry", pos:"SF", base:true, team:"Warriors / Rockets", era:"1965-80", c:{career:"10 pro seasons",games:794,ppg:23.2,rpg:6.5,apg:5.1,fg:44.9,three:null,ft:90.0,stl:null,blk:null}, b:{season:"1966-67",ppg:35.6,rpg:9.2,apg:3.6,fg:45.1,three:null,ft:88.4,stl:null,blk:null}, p:{start:"1965-66",end:"1975-76",games:485,ppg:27.6,rpg:7.1,apg:5.3,fg:45.4,three:null,ft:89.3,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:8,allnba:6,alldef:0,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"ervinju01", name:"Julius Erving", pos:"SF", base:true, team:"76ers", era:"1976-87", c:{career:"11 pro seasons",games:836,ppg:22.0,rpg:6.7,apg:3.9,fg:50.7,three:26.1,ft:77.7,stl:1.8,blk:1.5}, b:{season:"1980-81",ppg:24.6,rpg:8.0,apg:4.4,fg:52.1,three:22.2,ft:78.7,stl:2.1,blk:1.8}, p:{start:"1976-77",end:"1982-83",games:557,ppg:23.4,rpg:7.2,apg:4.0,fg:51.0,three:26.4,ft:78.3,stl:2.0,blk:1.7}, a:{champ:1,mvp:1,allstar:11,allnba:7,alldef:0,dpoy:0,anniv:3,annivText:"35th, 50th, 75th"} },
  { id:"dandibo01", name:"Bob Dandridge", pos:"SF", base:false, team:"Bucks / Bullets", era:"1969-82", c:{career:"13 seasons",games:839,ppg:18.5,rpg:6.8,apg:3.4,fg:48.4,three:null,ft:78.0,stl:null,blk:null}, b:{season:"1972-73",ppg:20.2,rpg:8.2,apg:2.8,fg:52.1,three:null,ft:79.5,stl:null,blk:null}, p:{start:"1970-71",end:"1976-77",games:543,ppg:19.5,rpg:7.6,apg:3.2,fg:50.2,three:null,ft:79.0,stl:null,blk:null}, a:{champ:2,mvp:0,allstar:4,allnba:1,alldef:1,dpoy:null,anniv:0,annivText:"None"} },
  { id:"walkech01", name:"Chet Walker", pos:"SF", base:false, team:"Nationals / 76ers / Bulls", era:"1962-75", c:{career:"13 seasons",games:1032,ppg:18.2,rpg:7.1,apg:2.1,fg:47.0,three:null,ft:79.6,stl:null,blk:null}, b:{season:"1971-72",ppg:22.0,rpg:6.1,apg:2.3,fg:50.5,three:null,ft:85.9,stl:null,blk:null}, p:{start:"1967-68",end:"1973-74",games:563,ppg:20.3,rpg:6.8,apg:2.2,fg:48.0,three:null,ft:82.1,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:7,allnba:0,alldef:0,dpoy:null,anniv:0,annivText:"None"} },
  { id:"mcadobo01", name:"Bob McAdoo", pos:"C/PF/SF", base:false, team:"Braves / Lakers +", era:"1972-86", c:{career:"14 seasons",games:852,ppg:22.1,rpg:9.4,apg:2.3,fg:50.3,three:null,ft:75.4,stl:null,blk:null}, b:{season:"1974-75",ppg:34.5,rpg:14.1,apg:2.2,fg:51.2,three:null,ft:80.5,stl:1.1,blk:2.1}, p:{start:"1972-73",end:"1978-79",games:484,ppg:28.1,rpg:12.0,apg:2.5,fg:50.4,three:null,ft:78.3,stl:null,blk:null}, a:{champ:2,mvp:1,allstar:5,allnba:2,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"birdla01", name:"Larry Bird", pos:"SF/PF", base:true, team:"Celtics", era:"1979-92", c:{career:"13 seasons",games:897,ppg:24.3,rpg:10.0,apg:6.3,fg:49.6,three:37.6,ft:88.6,stl:1.7,blk:0.8}, b:{season:"1987-88",ppg:29.9,rpg:9.3,apg:6.1,fg:52.7,three:41.4,ft:91.6,stl:1.6,blk:0.8}, p:{start:"1981-82",end:"1987-88",games:542,ppg:26.2,rpg:10.1,apg:6.7,fg:50.5,three:39.1,ft:89.2,stl:1.8,blk:0.9}, a:{champ:3,mvp:3,allstar:12,allnba:10,alldef:3,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"kingbe01", name:"Bernard King", pos:"SF", base:false, team:"Nets / Knicks / Bullets +", era:"1977-93", c:{career:"14 seasons",games:874,ppg:22.5,rpg:5.8,apg:3.3,fg:51.8,three:null,ft:73.0,stl:1.0,blk:0.3}, b:{season:"1984-85",ppg:32.9,rpg:5.8,apg:3.7,fg:53.0,three:10.0,ft:77.2,stl:1.3,blk:0.3}, p:{start:"1978-79",end:"1984-85",games:482,ppg:25.1,rpg:6.5,apg:3.3,fg:53.5,three:null,ft:72.8,stl:1.1,blk:0.3}, a:{champ:0,mvp:0,allstar:4,allnba:4,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"dantlad01", name:"Adrian Dantley", pos:"SF", base:false, team:"Jazz / Pistons +", era:"1976-91", c:{career:"15 seasons",games:955,ppg:24.3,rpg:5.7,apg:3.0,fg:54.0,three:null,ft:81.8,stl:1.0,blk:0.2}, b:{season:"1980-81",ppg:30.7,rpg:6.4,apg:4.0,fg:55.9,three:28.6,ft:80.6,stl:1.4,blk:0.2}, p:{start:"1979-80",end:"1985-86",games:485,ppg:30.0,rpg:6.1,apg:3.8,fg:55.9,three:16.8,ft:82.3,stl:1.1,blk:0.1}, a:{champ:0,mvp:0,allstar:6,allnba:2,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"englial01", name:"Alex English", pos:"SF", base:false, team:"Nuggets / Bucks +", era:"1976-91", c:{career:"15 seasons",games:1193,ppg:21.5,rpg:5.5,apg:3.6,fg:50.7,three:null,ft:83.2,stl:0.9,blk:0.7}, b:{season:"1985-86",ppg:29.8,rpg:5.0,apg:4.0,fg:50.4,three:20.0,ft:86.2,stl:0.9,blk:0.4}, p:{start:"1981-82",end:"1987-88",games:574,ppg:28.0,rpg:5.6,apg:4.4,fg:51.3,three:21.6,ft:84.6,stl:1.0,blk:0.7}, a:{champ:0,mvp:0,allstar:8,allnba:3,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"wilkido01", name:"Dominique Wilkins", pos:"SF", base:true, team:"Hawks / Clippers +", era:"1982-99", c:{career:"15 seasons",games:1074,ppg:24.8,rpg:6.7,apg:2.5,fg:46.1,three:31.9,ft:81.1,stl:1.3,blk:0.6}, b:{season:"1985-86",ppg:30.3,rpg:7.9,apg:2.6,fg:46.8,three:18.6,ft:81.8,stl:1.8,blk:0.6}, p:{start:"1985-86",end:"1992-93",games:537,ppg:29.1,rpg:7.0,apg:2.8,fg:46.5,three:31.9,ft:82.3,stl:1.4,blk:0.6}, a:{champ:0,mvp:0,allstar:9,allnba:7,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"worthja01", name:"James Worthy", pos:"SF", base:false, team:"Lakers", era:"1982-94", c:{career:"12 seasons",games:926,ppg:17.6,rpg:5.1,apg:3.0,fg:52.1,three:24.1,ft:76.9,stl:1.1,blk:0.7}, b:{season:"1990-91",ppg:21.4,rpg:4.6,apg:3.5,fg:49.2,three:28.9,ft:79.7,stl:1.3,blk:0.4}, p:{start:"1984-85",end:"1990-91",games:550,ppg:19.7,rpg:5.4,apg:3.1,fg:53.1,three:25.2,ft:77.3,stl:1.1,blk:0.8}, a:{champ:3,mvp:0,allstar:7,allnba:2,alldef:0,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"johnsma02", name:"Marques Johnson", pos:"SF", base:false, team:"Bucks / Clippers / Warriors", era:"1977-90", c:{career:"11 seasons",games:691,ppg:20.1,rpg:7.0,apg:3.6,fg:51.8,three:null,ft:73.9,stl:1.3,blk:0.8}, b:{season:"1978-79",ppg:25.6,rpg:7.6,apg:3.0,fg:55.0,three:null,ft:76.0,stl:1.5,blk:1.2}, p:{start:"1977-78",end:"1983-84",games:529,ppg:21.6,rpg:7.5,apg:3.8,fg:52.8,three:null,ft:74.2,stl:null,blk:null}, a:{champ:0,mvp:0,allstar:5,allnba:3,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"mullich01", name:"Chris Mullin", pos:"SF", base:false, team:"Warriors / Pacers", era:"1985-2001", c:{career:"16 seasons",games:986,ppg:18.2,rpg:4.1,apg:3.5,fg:50.9,three:38.4,ft:86.5,stl:1.6,blk:0.6}, b:{season:"1988-89",ppg:26.5,rpg:5.9,apg:5.1,fg:50.9,three:23.0,ft:89.2,stl:2.1,blk:0.5}, p:{start:"1988-89",end:"1994-95",games:504,ppg:24.9,rpg:5.0,apg:4.1,fg:52.5,three:36.0,ft:88.2,stl:1.8,blk:0.7}, a:{champ:0,mvp:0,allstar:5,allnba:4,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"pippesc01", name:"Scottie Pippen", pos:"SF", base:true, team:"Bulls / Rockets / Trail Blazers", era:"1987-2004", c:{career:"17 seasons",games:1178,ppg:16.1,rpg:6.4,apg:5.2,fg:47.3,three:32.6,ft:70.4,stl:2.0,blk:0.8}, b:{season:"1993-94",ppg:22.0,rpg:8.7,apg:5.6,fg:49.1,three:32.0,ft:66.0,stl:2.9,blk:0.8}, p:{start:"1990-91",end:"1997-98",games:550,ppg:20.0,rpg:7.3,apg:6.0,fg:48.7,three:33.5,ft:69.8,stl:2.4,blk:0.9}, a:{champ:6,mvp:0,allstar:7,allnba:7,alldef:10,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"piercpa01", name:"Paul Pierce", pos:"SF", base:false, team:"Celtics / Nets +", era:"1998-2017", c:{career:"19 seasons",games:1343,ppg:19.7,rpg:5.6,apg:3.5,fg:44.5,three:36.8,ft:80.6,stl:1.3,blk:0.6}, b:{season:"2005-06",ppg:26.8,rpg:6.7,apg:4.7,fg:47.1,three:35.4,ft:77.2,stl:1.4,blk:0.4}, p:{start:"2000-01",end:"2007-08",games:551,ppg:25.0,rpg:6.5,apg:4.1,fg:44.8,three:36.0,ft:80.4,stl:1.6,blk:0.7}, a:{champ:1,mvp:0,allstar:10,allnba:4,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"hillgr01", name:"Grant Hill", pos:"SF", base:false, team:"Pistons / Magic / Suns +", era:"1994-2013", c:{career:"19 seasons",games:1026,ppg:16.7,rpg:6.0,apg:4.1,fg:48.3,three:31.4,ft:76.9,stl:1.2,blk:0.6}, b:{season:"1996-97",ppg:21.4,rpg:9.0,apg:7.3,fg:49.6,three:30.3,ft:71.1,stl:1.8,blk:0.6}, p:{start:"1994-95",end:"2000-01",games:435,ppg:21.6,rpg:7.9,apg:6.3,fg:47.9,three:25.7,ft:74.6,stl:1.6,blk:0.6}, a:{champ:0,mvp:0,allstar:7,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"cartevi01", name:"Vince Carter", pos:"SG/SF", base:false, team:"Raptors / Nets +", era:"1998-2020", c:{career:"22 seasons",games:1541,ppg:16.7,rpg:4.3,apg:3.1,fg:43.5,three:37.1,ft:79.8,stl:1.0,blk:0.6}, b:{season:"2000-01",ppg:27.6,rpg:5.5,apg:3.9,fg:46.0,three:40.8,ft:76.5,stl:1.5,blk:1.1}, p:{start:"1999-00",end:"2006-07",games:527,ppg:25.1,rpg:5.4,apg:4.2,fg:44.6,three:38.5,ft:79.0,stl:1.3,blk:0.8}, a:{champ:0,mvp:0,allstar:8,allnba:2,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"mcgratr01", name:"Tracy McGrady", pos:"SG/SF", base:false, team:"Raptors / Magic / Rockets +", era:"1997-2012", c:{career:"15 seasons",games:938,ppg:19.6,rpg:5.6,apg:4.4,fg:43.5,three:33.8,ft:74.6,stl:1.2,blk:0.9}, b:{season:"2002-03",ppg:32.1,rpg:6.5,apg:5.5,fg:45.7,three:38.6,ft:79.3,stl:1.7,blk:0.8}, p:{start:"2000-01",end:"2006-07",games:508,ppg:27.6,rpg:6.6,apg:5.3,fg:43.9,three:35.0,ft:76.0,stl:1.5,blk:0.9}, a:{champ:0,mvp:0,allstar:7,allnba:7,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"jamesle01", name:"LeBron James", pos:"SF/PF", base:true, team:"Cavaliers / Heat / Lakers", era:"2003-present", c:{career:"23 seasons",games:1562,ppg:27.1,rpg:7.5,apg:7.4,fg:50.6,three:34.9,ft:73.6,stl:1.5,blk:0.7}, b:{season:"2008-09",ppg:28.4,rpg:7.6,apg:7.2,fg:48.9,three:34.4,ft:78.0,stl:1.7,blk:1.1}, p:{start:"2005-06",end:"2012-13",games:549,ppg:28.3,rpg:7.5,apg:7.1,fg:50.5,three:34.7,ft:75.6,stl:1.7,blk:0.9}, a:{champ:4,mvp:4,allstar:22,allnba:21,alldef:6,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"anthoca01", name:"Carmelo Anthony", pos:"SF/PF", base:false, team:"Nuggets / Knicks +", era:"2003-22", c:{career:"19 seasons",games:1260,ppg:22.5,rpg:6.2,apg:2.7,fg:44.7,three:35.5,ft:81.4,stl:1.0,blk:0.5}, b:{season:"2012-13",ppg:28.7,rpg:6.9,apg:2.6,fg:44.9,three:37.9,ft:83.0,stl:0.8,blk:0.5}, p:{start:"2005-06",end:"2012-13",games:530,ppg:26.2,rpg:6.8,apg:3.2,fg:45.9,three:34.8,ft:81.0,stl:1.1,blk:0.5}, a:{champ:0,mvp:0,allstar:10,allnba:6,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"duranke01", name:"Kevin Durant", pos:"SF/PF", base:true, team:"SuperSonics / Thunder / Warriors +", era:"2007-present", c:{career:"19 seasons",games:1123,ppg:27.2,rpg:7.0,apg:4.4,fg:50.1,three:38.7,ft:88.4,stl:1.1,blk:1.1}, b:{season:"2013-14",ppg:32.0,rpg:7.4,apg:5.5,fg:50.3,three:39.1,ft:87.3,stl:1.3,blk:0.7}, p:{start:"2009-10",end:"2016-17",games:539,ppg:29.1,rpg:7.7,apg:4.3,fg:49.3,three:38.4,ft:88.7,stl:1.2,blk:1.1}, a:{champ:2,mvp:1,allstar:15,allnba:11,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"butleji01", name:"Jimmy Butler", pos:"SF/SG", base:false, team:"Bulls / Timberwolves / 76ers / Heat +", era:"2011-present", c:{career:"15 seasons",games:914,ppg:18.3,rpg:5.3,apg:4.3,fg:47.0,three:32.9,ft:84.4,stl:1.6,blk:0.4}, b:{season:"2016-17",ppg:23.9,rpg:6.2,apg:5.5,fg:45.5,three:36.7,ft:86.5,stl:1.9,blk:0.4}, p:{start:"2014-15",end:"2022-23",games:509,ppg:21.5,rpg:5.8,apg:4.9,fg:46.6,three:33.5,ft:85.8,stl:1.8,blk:0.4}, a:{champ:0,mvp:0,allstar:6,allnba:5,alldef:5,dpoy:0,anniv:0,annivText:"None"} },
  { id:"georgpa01", name:"Paul George", pos:"SF/SG", base:false, team:"Pacers / Thunder / Clippers / 76ers", era:"2010-present", c:{career:"16 seasons",games:961,ppg:20.6,rpg:6.3,apg:3.7,fg:44.0,three:38.4,ft:85.3,stl:1.7,blk:0.4}, b:{season:"2018-19",ppg:28.0,rpg:8.2,apg:4.1,fg:43.8,three:38.6,ft:83.9,stl:2.2,blk:0.4}, p:{start:"2012-13",end:"2018-19",games:481,ppg:23.1,rpg:6.9,apg:3.7,fg:42.9,three:37.8,ft:85.4,stl:1.9,blk:0.4}, a:{champ:0,mvp:0,allstar:9,allnba:6,alldef:4,dpoy:0,anniv:0,annivText:"None"} },
  { id:"leonaka01", name:"Kawhi Leonard", pos:"SF", base:true, team:"Spurs / Raptors / Clippers", era:"2011-present", c:{career:"15 seasons",games:696,ppg:20.0,rpg:6.4,apg:3.0,fg:49.7,three:39.1,ft:86.2,stl:1.7,blk:0.6}, b:{season:"2016-17",ppg:25.5,rpg:5.8,apg:3.5,fg:48.5,three:38.0,ft:88.0,stl:1.8,blk:0.7}, p:{start:"2014-15",end:"2020-21",games:400,ppg:23.5,rpg:6.5,apg:3.2,fg:49.6,three:38.7,ft:87.3,stl:1.9,blk:0.7}, a:{champ:2,mvp:0,allstar:6,allnba:6,alldef:7,dpoy:2,anniv:1,annivText:"75th"} },
  { id:"marionsh01", name:"Shawn Marion", pos:"SF/PF", base:false, team:"Suns / Mavericks +", era:"1999-2015", c:{career:"16 seasons",games:1163,ppg:15.2,rpg:8.7,apg:1.9,fg:48.4,three:33.1,ft:81.0,stl:1.5,blk:1.1}, b:{season:"2005-06",ppg:21.8,rpg:11.8,apg:1.8,fg:52.5,three:33.1,ft:80.9,stl:2.0,blk:1.7}, p:{start:"2000-01",end:"2006-07",games:566,ppg:19.4,rpg:9.9,apg:2.0,fg:47.6,three:34.2,ft:83.4,stl:1.9,blk:1.4}, a:{champ:1,mvp:0,allstar:4,allnba:2,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"aguirma01", name:"Mark Aguirre", pos:"SF", base:false, team:"Mavericks / Pistons", era:"1981-94", c:{career:"13 seasons",games:923,ppg:20.0,rpg:5.0,apg:3.1,fg:48.4,three:31.2,ft:74.1,stl:0.7,blk:0.3}, b:{season:"1983-84",ppg:29.5,rpg:5.9,apg:4.5,fg:52.4,three:26.8,ft:74.9,stl:1.0,blk:0.3}, p:{start:"1982-83",end:"1988-89",games:519,ppg:25.7,rpg:5.7,apg:3.7,fg:49.5,three:29.0,ft:74.1,stl:0.9,blk:0.3}, a:{champ:2,mvp:0,allstar:3,allnba:0,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"tatumja01", name:"Jayson Tatum", pos:"SF/PF", base:false, team:"Celtics", era:"2017-present", c:{career:"9 seasons",games:672,ppg:23.4,rpg:7.3,apg:3.8,fg:45.9,three:37.5,ft:84.3,stl:1.1,blk:0.7}, b:{season:"2022-23",ppg:30.1,rpg:8.8,apg:4.6,fg:46.6,three:35.0,ft:85.4,stl:1.1,blk:0.7}, p:{start:"2019-20",end:"2025-26",games:506,ppg:27.0,rpg:8.0,apg:4.2,fg:46.0,three:37.0,ft:85.2,stl:1.1,blk:0.7}, a:{champ:1,mvp:0,allstar:7,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} }
];

const hofPlayers = new Set([
  "bayloel01", "havlijo01", "cunnibi01", "barryri01", "ervinju01",
  "dandibo01", "walkech01", "mcadobo01", "birdla01", "kingbe01",
  "dantlad01", "englial01", "wilkido01", "worthja01", "johnsma02",
  "mullich01", "pippesc01", "piercpa01", "hillgr01", "cartevi01",
  "mcgratr01", "anthoca01"
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
    .filter(player => checked.has(player.id) && (showCombo || player.pos === "SF"))
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
    if (!player || player.pos === "SF") return;
    input.closest(".player-option").hidden = !showComboToggle.checked;
    if (!showComboToggle.checked) input.checked = false;
  });
  renderAll();
});
