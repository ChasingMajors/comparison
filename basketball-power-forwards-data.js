const players = [
  { id:"duncati01", name:"Tim Duncan", pos:"PF/C", base:true, team:"Spurs", era:"1997-2016", c:{career:"19 seasons",games:1392,ppg:19.0,rpg:10.8,apg:3.0,fg:50.6,three:17.9,ft:69.6,stl:0.7,blk:2.2}, b:{season:"2002-03",ppg:23.3,rpg:12.9,apg:3.9,fg:51.3,three:27.3,ft:71.0,stl:0.7,blk:2.9}, p:{start:"1999-00",end:"2006-07",games:554,ppg:22.3,rpg:12.0,apg:3.3,fg:50.7,three:20.3,ft:70.6,stl:0.8,blk:2.5}, a:{champ:5,mvp:2,allstar:15,allnba:15,alldef:15,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"malonka01", name:"Karl Malone", pos:"PF", base:true, team:"Jazz / Lakers", era:"1985-2004", c:{career:"19 seasons",games:1476,ppg:25.0,rpg:10.1,apg:3.6,fg:51.6,three:27.4,ft:74.2,stl:1.4,blk:0.8}, b:{season:"1989-90",ppg:31.0,rpg:11.1,apg:2.8,fg:56.2,three:37.2,ft:76.2,stl:1.5,blk:0.6}, p:{start:"1987-88",end:"1994-95",games:643,ppg:28.4,rpg:11.4,apg:3.0,fg:53.1,three:24.2,ft:74.7,stl:1.5,blk:0.8}, a:{champ:0,mvp:2,allstar:14,allnba:14,alldef:4,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"nowitdi01", name:"Dirk Nowitzki", pos:"PF", base:true, team:"Mavericks", era:"1998-2019", c:{career:"21 seasons",games:1522,ppg:20.7,rpg:7.5,apg:2.4,fg:47.1,three:38.0,ft:87.9,stl:0.8,blk:0.8}, b:{season:"2005-06",ppg:26.6,rpg:9.0,apg:2.8,fg:48.0,three:40.6,ft:90.1,stl:0.7,blk:1.0}, p:{start:"2000-01",end:"2007-08",games:557,ppg:24.9,rpg:9.0,apg:2.8,fg:47.6,three:39.0,ft:88.0,stl:1.0,blk:1.1}, a:{champ:1,mvp:1,allstar:14,allnba:12,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"garneke01", name:"Kevin Garnett", pos:"PF/C", base:true, team:"Timberwolves / Celtics / Nets", era:"1995-2016", c:{career:"21 seasons",games:1462,ppg:17.8,rpg:10.0,apg:3.7,fg:49.7,three:27.5,ft:78.9,stl:1.3,blk:1.4}, b:{season:"2003-04",ppg:24.2,rpg:13.9,apg:5.0,fg:49.9,three:25.6,ft:79.1,stl:1.5,blk:2.2}, p:{start:"1999-00",end:"2006-07",games:555,ppg:22.6,rpg:12.7,apg:5.1,fg:49.7,three:28.5,ft:78.6,stl:1.5,blk:1.8}, a:{champ:1,mvp:1,allstar:15,allnba:9,alldef:12,dpoy:1,anniv:1,annivText:"75th"} },
  { id:"barklch01", name:"Charles Barkley", pos:"PF", base:true, team:"76ers / Suns / Rockets", era:"1984-2000", c:{career:"16 seasons",games:1073,ppg:22.1,rpg:11.7,apg:3.9,fg:54.1,three:26.6,ft:73.5,stl:1.5,blk:0.8}, b:{season:"1987-88",ppg:28.3,rpg:11.9,apg:3.2,fg:58.7,three:28.0,ft:75.1,stl:1.3,blk:1.3}, p:{start:"1986-87",end:"1992-93",games:533,ppg:25.2,rpg:12.0,apg:4.2,fg:58.1,three:27.0,ft:74.1,stl:1.5,blk:0.9}, a:{champ:0,mvp:1,allstar:11,allnba:11,alldef:0,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"antetgi01", name:"Giannis Antetokounmpo", pos:"PF", base:true, team:"Bucks", era:"2013-present", c:{career:"13 seasons",games:895,ppg:24.1,rpg:9.9,apg:5.0,fg:55.4,three:28.5,ft:69.1,stl:1.1,blk:1.2}, b:{season:"2019-20",ppg:29.5,rpg:13.6,apg:5.6,fg:55.3,three:30.4,ft:63.3,stl:1.0,blk:1.0}, p:{start:"2016-17",end:"2023-24",games:512,ppg:29.3,rpg:11.7,apg:5.7,fg:56.1,three:29.0,ft:68.5,stl:1.2,blk:1.2}, a:{champ:1,mvp:2,allstar:10,allnba:9,alldef:5,dpoy:1,anniv:1,annivText:"75th"} },
  { id:"mchalke01", name:"Kevin McHale", pos:"PF/C", base:true, team:"Celtics", era:"1980-93", c:{career:"13 seasons",games:971,ppg:17.9,rpg:7.3,apg:1.7,fg:55.4,three:26.1,ft:79.8,stl:0.4,blk:1.7}, b:{season:"1986-87",ppg:26.1,rpg:9.9,apg:2.6,fg:60.4,three:0.0,ft:83.6,stl:0.5,blk:2.2}, p:{start:"1983-84",end:"1989-90",games:533,ppg:21.7,rpg:8.4,apg:2.0,fg:57.9,three:22.0,ft:80.9,stl:0.4,blk:1.9}, a:{champ:3,mvp:0,allstar:7,allnba:1,alldef:6,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"pettibo01", name:"Bob Pettit", pos:"PF/C", base:true, team:"Hawks", era:"1954-65", c:{career:"11 seasons",games:792,ppg:26.4,rpg:16.2,apg:3.0,fg:43.6,three:null,ft:76.1,stl:null,blk:null}, b:{season:"1961-62",ppg:31.1,rpg:18.7,apg:3.7,fg:45.0,three:null,ft:77.1,stl:null,blk:null}, p:{start:"1955-56",end:"1963-64",games:514,ppg:27.9,rpg:17.0,apg:3.0,fg:43.5,three:null,ft:76.3,stl:null,blk:null}, a:{champ:1,mvp:2,allstar:11,allnba:11,alldef:null,dpoy:null,anniv:4,annivText:"25th, 35th, 50th, 75th"} },
  { id:"hayesel01", name:"Elvin Hayes", pos:"PF/C", base:true, team:"Rockets / Bullets", era:"1968-84", c:{career:"16 seasons",games:1303,ppg:21.0,rpg:12.5,apg:1.8,fg:45.2,three:null,ft:67.0,stl:null,blk:null}, b:{season:"1968-69",ppg:28.4,rpg:17.1,apg:1.4,fg:44.7,three:null,ft:62.6,stl:null,blk:null}, p:{start:"1968-69",end:"1976-77",games:650,ppg:24.0,rpg:14.1,apg:1.9,fg:45.3,three:null,ft:67.3,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:12,allnba:6,alldef:2,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"rodmade01", name:"Dennis Rodman", pos:"PF", base:true, team:"Pistons / Spurs / Bulls +", era:"1986-2000", c:{career:"14 seasons",games:911,ppg:7.3,rpg:13.1,apg:1.8,fg:52.1,three:23.1,ft:58.4,stl:0.7,blk:0.6}, b:{season:"1991-92",ppg:9.8,rpg:18.7,apg:2.3,fg:53.9,three:31.7,ft:60.0,stl:0.8,blk:0.9}, p:{start:"1988-89",end:"1995-96",games:543,ppg:8.2,rpg:15.7,apg:2.1,fg:53.6,three:25.4,ft:59.0,stl:0.7,blk:0.7}, a:{champ:5,mvp:0,allstar:2,allnba:2,alldef:8,dpoy:2,anniv:1,annivText:"75th"} },
  { id:"gasolpa01", name:"Pau Gasol", pos:"PF/C", base:false, team:"Grizzlies / Lakers / Bulls +", era:"2001-19", c:{career:"18 seasons",games:1226,ppg:17.0,rpg:9.2,apg:3.2,fg:50.7,three:36.8,ft:75.3,stl:0.5,blk:1.6}, b:{season:"2006-07",ppg:20.8,rpg:9.8,apg:3.4,fg:53.8,three:27.3,ft:74.8,stl:0.5,blk:2.1}, p:{start:"2005-06",end:"2011-12",games:497,ppg:19.1,rpg:10.0,apg:3.4,fg:52.0,three:27.9,ft:77.0,stl:0.5,blk:1.7}, a:{champ:2,mvp:0,allstar:6,allnba:4,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"davisan02", name:"Anthony Davis", pos:"PF/C", base:false, team:"Pelicans / Lakers / Mavericks", era:"2012-present", c:{career:"14 seasons",games:807,ppg:24.1,rpg:10.7,apg:2.5,fg:52.3,three:29.7,ft:79.5,stl:1.3,blk:2.3}, b:{season:"2017-18",ppg:28.1,rpg:11.1,apg:2.3,fg:53.4,three:34.0,ft:82.8,stl:1.5,blk:2.6}, p:{start:"2014-15",end:"2022-23",games:441,ppg:25.8,rpg:10.8,apg:2.6,fg:52.1,three:30.7,ft:80.1,stl:1.4,blk:2.4}, a:{champ:1,mvp:0,allstar:10,allnba:5,alldef:5,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"webbech01", name:"Chris Webber", pos:"PF/C", base:false, team:"Warriors / Bullets / Kings +", era:"1993-2008", c:{career:"15 seasons",games:831,ppg:20.7,rpg:9.8,apg:4.2,fg:47.9,three:29.9,ft:64.9,stl:1.4,blk:1.4}, b:{season:"2000-01",ppg:27.1,rpg:11.1,apg:4.2,fg:48.1,three:7.1,ft:70.3,stl:1.3,blk:1.7}, p:{start:"1996-97",end:"2002-03",games:471,ppg:23.6,rpg:10.6,apg:4.6,fg:49.0,three:29.0,ft:66.9,stl:1.5,blk:1.6}, a:{champ:0,mvp:0,allstar:5,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"greendr01", name:"Draymond Green", pos:"SF/PF", base:false, team:"Warriors", era:"2012-present", c:{career:"13 seasons",games:949,ppg:8.7,rpg:6.8,apg:5.6,fg:44.7,three:32.1,ft:71.2,stl:1.3,blk:1.0}, b:{season:"2015-16",ppg:14.0,rpg:9.5,apg:7.4,fg:49.0,three:38.8,ft:69.6,stl:1.5,blk:1.4}, p:{start:"2014-15",end:"2021-22",games:497,ppg:9.1,rpg:7.2,apg:6.1,fg:44.0,three:32.8,ft:70.8,stl:1.5,blk:1.2}, a:{champ:4,mvp:0,allstar:4,allnba:2,alldef:9,dpoy:1,anniv:0,annivText:"None"} },
  { id:"lucasje01", name:"Jerry Lucas", pos:"PF/C", base:false, team:"Royals / Warriors / Knicks", era:"1963-74", c:{career:"11 seasons",games:829,ppg:17.0,rpg:15.6,apg:3.3,fg:49.9,three:null,ft:78.3,stl:null,blk:null}, b:{season:"1965-66",ppg:21.5,rpg:21.1,apg:2.7,fg:45.3,three:null,ft:78.7,stl:null,blk:null}, p:{start:"1963-64",end:"1971-72",games:530,ppg:19.1,rpg:17.8,apg:3.3,fg:50.3,three:null,ft:78.2,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:7,allnba:5,alldef:null,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"schaydo01", name:"Dolph Schayes", pos:"PF/C", base:false, team:"Nationals / 76ers", era:"1949-64", c:{career:"15 seasons",games:996,ppg:18.5,rpg:12.1,apg:3.1,fg:38.0,three:null,ft:84.9,stl:null,blk:null}, b:{season:"1957-58",ppg:24.9,rpg:14.2,apg:3.1,fg:39.8,three:null,ft:90.4,stl:null,blk:null}, p:{start:"1952-53",end:"1960-61",games:503,ppg:21.4,rpg:13.8,apg:3.0,fg:39.1,three:null,ft:86.8,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:12,allnba:12,alldef:null,dpoy:null,anniv:4,annivText:"25th, 35th, 50th, 75th"} },
  { id:"debunda01", name:"Dave DeBusschere", pos:"PF", base:false, team:"Pistons / Knicks", era:"1962-74", c:{career:"12 seasons",games:875,ppg:16.1,rpg:11.0,apg:2.9,fg:43.2,three:null,ft:69.9,stl:null,blk:null}, b:{season:"1967-68",ppg:17.9,rpg:13.5,apg:2.3,fg:44.7,three:null,ft:72.8,stl:null,blk:null}, p:{start:"1966-67",end:"1972-73",games:506,ppg:16.7,rpg:11.8,apg:2.8,fg:43.8,three:null,ft:70.4,stl:null,blk:null}, a:{champ:2,mvp:0,allstar:8,allnba:1,alldef:6,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"kempsh01", name:"Shawn Kemp", pos:"PF", base:false, team:"SuperSonics / Cavaliers +", era:"1989-2003", c:{career:"14 seasons",games:1051,ppg:14.6,rpg:8.4,apg:1.6,fg:48.8,three:27.7,ft:74.1,stl:1.1,blk:1.2}, b:{season:"1995-96",ppg:19.6,rpg:11.4,apg:2.2,fg:56.1,three:41.7,ft:74.2,stl:1.2,blk:1.6}, p:{start:"1991-92",end:"1997-98",games:547,ppg:17.7,rpg:10.3,apg:1.8,fg:52.3,three:27.2,ft:74.0,stl:1.3,blk:1.5}, a:{champ:0,mvp:0,allstar:6,allnba:3,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"wallara01", name:"Rasheed Wallace", pos:"PF/C", base:false, team:"Bullets / Trail Blazers / Pistons +", era:"1995-2013", c:{career:"16 seasons",games:1109,ppg:14.4,rpg:6.7,apg:1.8,fg:46.7,three:33.6,ft:72.1,stl:1.0,blk:1.3}, b:{season:"2000-01",ppg:19.2,rpg:7.8,apg:2.8,fg:50.1,three:32.1,ft:76.6,stl:1.2,blk:1.8}, p:{start:"1999-00",end:"2005-06",games:548,ppg:17.5,rpg:7.4,apg:2.1,fg:47.9,three:34.6,ft:74.0,stl:1.1,blk:1.5}, a:{champ:1,mvp:0,allstar:4,allnba:0,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"stoudam01", name:"Amar'e Stoudemire", pos:"PF/C", base:false, team:"Suns / Knicks +", era:"2002-16", c:{career:"14 seasons",games:846,ppg:18.9,rpg:7.8,apg:1.2,fg:53.7,three:23.6,ft:76.1,stl:0.8,blk:1.2}, b:{season:"2004-05",ppg:26.0,rpg:8.9,apg:1.6,fg:55.9,three:18.8,ft:73.3,stl:1.0,blk:1.6}, p:{start:"2003-04",end:"2010-11",games:494,ppg:23.3,rpg:8.7,apg:1.5,fg:54.6,three:20.0,ft:77.6,stl:0.9,blk:1.4}, a:{champ:0,mvp:0,allstar:6,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"griffbl01", name:"Blake Griffin", pos:"PF", base:false, team:"Clippers / Pistons / Nets +", era:"2010-23", c:{career:"13 seasons",games:765,ppg:19.0,rpg:8.0,apg:4.0,fg:49.3,three:32.8,ft:69.6,stl:0.8,blk:0.5}, b:{season:"2013-14",ppg:24.1,rpg:9.5,apg:3.9,fg:52.8,three:27.3,ft:71.5,stl:1.2,blk:0.6}, p:{start:"2010-11",end:"2018-19",games:503,ppg:22.1,rpg:8.9,apg:4.5,fg:50.2,three:32.0,ft:70.0,stl:0.9,blk:0.6}, a:{champ:0,mvp:0,allstar:6,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"aldrila01", name:"LaMarcus Aldridge", pos:"PF/C", base:false, team:"Trail Blazers / Spurs / Nets", era:"2006-22", c:{career:"16 seasons",games:1076,ppg:19.1,rpg:8.1,apg:1.9,fg:49.3,three:32.0,ft:81.3,stl:0.7,blk:1.1}, b:{season:"2014-15",ppg:23.4,rpg:10.2,apg:1.7,fg:46.6,three:35.2,ft:84.5,stl:0.7,blk:1.0}, p:{start:"2009-10",end:"2016-17",games:535,ppg:21.9,rpg:8.8,apg:2.0,fg:49.0,three:32.0,ft:81.9,stl:0.8,blk:1.1}, a:{champ:0,mvp:0,allstar:7,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"boshch01", name:"Chris Bosh", pos:"PF/C", base:false, team:"Raptors / Heat", era:"2003-16", c:{career:"13 seasons",games:893,ppg:19.2,rpg:8.5,apg:2.0,fg:49.4,three:33.5,ft:79.9,stl:0.8,blk:1.0}, b:{season:"2009-10",ppg:24.0,rpg:10.8,apg:2.4,fg:51.8,three:36.4,ft:79.7,stl:0.6,blk:1.0}, p:{start:"2005-06",end:"2012-13",games:507,ppg:21.2,rpg:9.0,apg:2.2,fg:50.0,three:30.5,ft:80.4,stl:0.8,blk:1.0}, a:{champ:2,mvp:0,allstar:11,allnba:1,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"heinsto01", name:"Tom Heinsohn", pos:"PF", base:false, team:"Celtics", era:"1956-65", c:{career:"9 seasons",games:654,ppg:18.6,rpg:8.8,apg:2.0,fg:40.5,three:null,ft:79.0,stl:null,blk:null}, b:{season:"1961-62",ppg:22.1,rpg:9.5,apg:2.1,fg:42.9,three:null,ft:81.9,stl:null,blk:null}, p:{start:"1956-57",end:"1963-64",games:510,ppg:19.6,rpg:9.3,apg:2.0,fg:40.9,three:null,ft:79.4,stl:null,blk:null}, a:{champ:8,mvp:0,allstar:6,allnba:4,alldef:null,dpoy:null,anniv:0,annivText:"None"} },
  { id:"haywosp01", name:"Spencer Haywood", pos:"PF/C", base:false, team:"SuperSonics / Knicks / Lakers +", era:"1970-83", c:{career:"12 seasons",games:760,ppg:19.2,rpg:9.3,apg:1.8,fg:46.5,three:null,ft:80.0,stl:null,blk:null}, b:{season:"1972-73",ppg:29.2,rpg:12.9,apg:2.5,fg:47.6,three:null,ft:83.9,stl:null,blk:null}, p:{start:"1970-71",end:"1976-77",games:478,ppg:24.0,rpg:11.1,apg:1.9,fg:46.1,three:null,ft:81.1,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:4,allnba:4,alldef:0,dpoy:null,anniv:0,annivText:"None"} },
  { id:"willibu01", name:"Buck Williams", pos:"PF", base:false, team:"Nets / Trail Blazers / Knicks", era:"1981-98", c:{career:"17 seasons",games:1307,ppg:12.8,rpg:10.0,apg:1.3,fg:54.9,three:16.7,ft:66.4,stl:0.8,blk:0.8}, b:{season:"1982-83",ppg:17.0,rpg:12.5,apg:1.5,fg:58.8,three:0.0,ft:62.0,stl:1.1,blk:1.3}, p:{start:"1981-82",end:"1989-90",games:574,ppg:16.4,rpg:12.0,apg:1.5,fg:55.8,three:12.5,ft:67.2,stl:0.9,blk:1.0}, a:{champ:0,mvp:0,allstar:3,allnba:1,alldef:4,dpoy:0,anniv:0,annivText:"None"} },
  { id:"jonesbo01", name:"Bobby Jones", pos:"SF/PF", base:false, team:"Nuggets / 76ers", era:"1976-86", c:{career:"10 seasons",games:774,ppg:11.5,rpg:5.5,apg:2.4,fg:55.0,three:7.7,ft:78.0,stl:1.4,blk:1.3}, b:{season:"1977-78",ppg:14.5,rpg:8.5,apg:3.4,fg:57.8,three:null,ft:75.1,stl:1.8,blk:1.7}, p:{start:"1976-77",end:"1982-83",games:548,ppg:12.7,rpg:6.3,apg:2.7,fg:56.3,three:7.7,ft:77.4,stl:1.6,blk:1.4}, a:{champ:1,mvp:0,allstar:4,allnba:0,alldef:11,dpoy:0,anniv:0,annivText:"None"} },
  { id:"nancela01", name:"Larry Nance", pos:"PF/C", base:false, team:"Suns / Cavaliers", era:"1981-94", c:{career:"13 seasons",games:920,ppg:17.1,rpg:8.0,apg:2.6,fg:54.6,three:14.5,ft:75.5,stl:0.9,blk:2.2}, b:{season:"1986-87",ppg:22.5,rpg:8.7,apg:3.4,fg:55.1,three:20.0,ft:77.3,stl:1.2,blk:2.1}, p:{start:"1983-84",end:"1990-91",games:554,ppg:19.3,rpg:8.5,apg:2.9,fg:55.1,three:13.9,ft:75.9,stl:1.0,blk:2.4}, a:{champ:0,mvp:0,allstar:3,allnba:0,alldef:3,dpoy:0,anniv:0,annivText:"None"} },
  { id:"randolza01", name:"Zach Randolph", pos:"PF", base:false, team:"Trail Blazers / Knicks / Grizzlies +", era:"2001-18", c:{career:"17 seasons",games:1116,ppg:16.6,rpg:9.1,apg:1.8,fg:47.1,three:27.3,ft:76.4,stl:0.7,blk:0.3}, b:{season:"2006-07",ppg:23.6,rpg:10.1,apg:2.2,fg:46.7,three:29.2,ft:81.9,stl:0.8,blk:0.2}, p:{start:"2006-07",end:"2013-14",games:518,ppg:19.8,rpg:10.6,apg:2.0,fg:47.4,three:20.2,ft:77.4,stl:0.8,blk:0.3}, a:{champ:0,mvp:0,allstar:2,allnba:1,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"granthor01", name:"Horace Grant", pos:"PF/C", base:false, team:"Bulls / Magic / Lakers +", era:"1987-2004", c:{career:"17 seasons",games:1165,ppg:11.2,rpg:8.1,apg:2.2,fg:50.9,three:6.3,ft:69.2,stl:1.0,blk:1.0}, b:{season:"1993-94",ppg:15.1,rpg:11.0,apg:3.4,fg:52.4,three:0.0,ft:59.6,stl:1.1,blk:1.2}, p:{start:"1990-91",end:"1996-97",games:550,ppg:13.7,rpg:9.8,apg:2.7,fg:52.1,three:8.3,ft:67.2,stl:1.1,blk:1.2}, a:{champ:4,mvp:0,allstar:1,allnba:0,alldef:4,dpoy:0,anniv:0,annivText:"None"} }
];

const hofPlayers = new Set([
  "duncati01", "malonka01", "nowitdi01", "garneke01", "barklch01",
  "mchalke01", "pettibo01", "hayesel01", "rodmade01", "gasolpa01",
  "webbech01", "lucasje01", "schaydo01", "debunda01", "boshch01",
  "heinsto01", "haywosp01", "jonesbo01", "stoudam01"
]);

const rankMetrics = ["games","ppg","rpg","apg","fg","ft","champ","mvp","allstar","allnba"];
const fmt = (value, suffix = "") => value == null ? "N/A" : `${value}${suffix}`;
const cell = (html, cls = "") => `<td${cls ? ` class="${cls}"` : ""}>${html}</td>`;
const comboToggle = () => document.querySelector("#comboToggle");
const playerStartYear = player => Number(player.era.match(/\d{4}/)?.[0] ?? 9999);
const byStartYear = (a, b) => playerStartYear(a) - playerStartYear(b) || a.name.localeCompare(b.name);

function selectedPlayers() {
  const checked = new Set([...document.querySelectorAll(".player-check:checked")].map(input => input.value));
  const showCombo = comboToggle()?.checked ?? true;
  return players
    .filter(player => checked.has(player.id) && (showCombo || player.pos === "PF"))
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
    if (!player || player.pos === "PF") return;
    input.closest(".player-option").hidden = !showComboToggle.checked;
    if (!showComboToggle.checked) input.checked = false;
  });
  renderAll();
});
