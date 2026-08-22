const players = [
  { id:"mikan ge01".replace(" ",""), name:"George Mikan", pos:"C", base:true, team:"Lakers", era:"1948-56", c:{career:"7 seasons",games:439,ppg:23.1,rpg:13.4,apg:2.8,fg:40.4,three:null,ft:78.2,stl:null,blk:null}, b:{season:"1950-51",ppg:28.4,rpg:14.1,apg:3.1,fg:42.8,three:null,ft:80.3,stl:null,blk:null}, p:{start:"1948-49",end:"1953-54",games:400,ppg:24.7,rpg:13.9,apg:2.8,fg:40.5,three:null,ft:78.4,stl:null,blk:null}, a:{champ:5,mvp:0,allstar:4,allnba:6,alldef:null,dpoy:null,anniv:4,annivText:"25th, 35th, 50th, 75th"} },
  { id:"johnsne01", name:"Neil Johnston", pos:"C", base:false, team:"Warriors", era:"1951-59", c:{career:"8 seasons",games:516,ppg:19.4,rpg:11.3,apg:2.5,fg:44.4,three:null,ft:76.8,stl:null,blk:null}, b:{season:"1954-55",ppg:22.7,rpg:15.1,apg:3.0,fg:44.0,three:null,ft:76.6,stl:null,blk:null}, p:{start:"1952-53",end:"1957-58",games:394,ppg:21.8,rpg:12.9,apg:2.8,fg:44.9,three:null,ft:76.5,stl:null,blk:null}, a:{champ:1,mvp:0,allstar:6,allnba:5,alldef:null,dpoy:null,anniv:0,annivText:"None"} },
  { id:"russell01", name:"Bill Russell", pos:"C", base:true, team:"Celtics", era:"1956-69", c:{career:"13 seasons",games:963,ppg:15.1,rpg:22.5,apg:4.3,fg:44.0,three:null,ft:56.1,stl:null,blk:null}, b:{season:"1961-62",ppg:18.9,rpg:23.6,apg:4.5,fg:45.7,three:null,ft:59.5,stl:null,blk:null}, p:{start:"1958-59",end:"1964-65",games:529,ppg:16.8,rpg:23.8,apg:4.4,fg:44.8,three:null,ft:57.0,stl:null,blk:null}, a:{champ:11,mvp:5,allstar:12,allnba:11,alldef:1,dpoy:null,anniv:4,annivText:"25th, 35th, 50th, 75th"} },
  { id:"chambwi01", name:"Wilt Chamberlain", pos:"C", base:true, team:"Warriors / 76ers / Lakers", era:"1959-73", c:{career:"14 seasons",games:1045,ppg:30.1,rpg:22.9,apg:4.4,fg:54.0,three:null,ft:51.1,stl:null,blk:null}, b:{season:"1961-62",ppg:50.4,rpg:25.7,apg:2.4,fg:50.6,three:null,ft:61.3,stl:null,blk:null}, p:{start:"1959-60",end:"1965-66",games:542,ppg:39.6,rpg:24.8,apg:3.2,fg:51.1,three:null,ft:52.4,stl:null,blk:null}, a:{champ:2,mvp:4,allstar:13,allnba:10,alldef:2,dpoy:null,anniv:4,annivText:"25th, 35th, 50th, 75th"} },
  { id:"reedwi01", name:"Willis Reed", pos:"C/PF", base:false, team:"Knicks", era:"1964-74", c:{career:"10 seasons",games:650,ppg:18.7,rpg:12.9,apg:1.8,fg:47.6,three:null,ft:74.7,stl:0.6,blk:1.1}, b:{season:"1969-70",ppg:21.7,rpg:13.9,apg:2.0,fg:50.7,three:null,ft:75.6,stl:null,blk:null}, p:{start:"1964-65",end:"1970-71",games:526,ppg:20.1,rpg:14.0,apg:1.9,fg:47.9,three:null,ft:74.6,stl:null,blk:null}, a:{champ:2,mvp:1,allstar:7,allnba:5,alldef:1,dpoy:null,anniv:3,annivText:"50th, 75th"} },
  { id:"unselwe01", name:"Wes Unseld", pos:"C", base:false, team:"Bullets", era:"1968-81", c:{career:"13 seasons",games:984,ppg:10.8,rpg:14.0,apg:3.9,fg:50.9,three:50.0,ft:63.3,stl:1.1,blk:0.6}, b:{season:"1968-69",ppg:13.8,rpg:18.2,apg:2.6,fg:47.6,three:null,ft:60.5,stl:null,blk:null}, p:{start:"1968-69",end:"1974-75",games:561,ppg:12.4,rpg:15.9,apg:4.0,fg:50.2,three:null,ft:62.4,stl:1.1,blk:0.7}, a:{champ:1,mvp:1,allstar:5,allnba:1,alldef:1,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"abdulka01", name:"Kareem Abdul-Jabbar", pos:"C", base:true, team:"Bucks / Lakers", era:"1969-89", c:{career:"20 seasons",games:1560,ppg:24.6,rpg:11.2,apg:3.6,fg:55.9,three:5.6,ft:72.1,stl:0.9,blk:2.6}, b:{season:"1971-72",ppg:34.8,rpg:16.6,apg:4.6,fg:57.4,three:null,ft:68.9,stl:null,blk:null}, p:{start:"1969-70",end:"1975-76",games:560,ppg:30.4,rpg:15.3,apg:4.3,fg:55.2,three:null,ft:70.1,stl:1.2,blk:3.8}, a:{champ:6,mvp:6,allstar:19,allnba:15,alldef:11,dpoy:0,anniv:4,annivText:"35th, 50th, 75th"} },
  { id:"thurmna01", name:"Nate Thurmond", pos:"C", base:false, team:"Warriors / Bulls / Cavaliers", era:"1963-77", c:{career:"14 seasons",games:964,ppg:15.0,rpg:15.0,apg:2.7,fg:42.1,three:null,ft:66.7,stl:0.5,blk:2.1}, b:{season:"1967-68",ppg:20.5,rpg:22.0,apg:4.2,fg:42.1,three:null,ft:75.3,stl:null,blk:null}, p:{start:"1966-67",end:"1972-73",games:521,ppg:19.2,rpg:19.1,apg:3.3,fg:42.2,three:null,ft:70.1,stl:null,blk:null}, a:{champ:0,mvp:0,allstar:7,allnba:0,alldef:5,dpoy:null,anniv:2,annivText:"50th, 75th"} },
  { id:"bellawa01", name:"Walt Bellamy", pos:"C", base:false, team:"Packers / Bullets / Hawks +", era:"1961-75", c:{career:"14 seasons",games:1043,ppg:20.1,rpg:13.7,apg:2.4,fg:51.6,three:null,ft:63.2,stl:0.6,blk:0.7}, b:{season:"1961-62",ppg:31.6,rpg:19.0,apg:2.7,fg:51.9,three:null,ft:64.4,stl:null,blk:null}, p:{start:"1961-62",end:"1967-68",games:555,ppg:24.8,rpg:16.0,apg:2.7,fg:51.8,three:null,ft:64.2,stl:null,blk:null}, a:{champ:0,mvp:0,allstar:4,allnba:0,alldef:null,dpoy:null,anniv:0,annivText:"None"} },
  { id:"cowenda01", name:"Dave Cowens", pos:"C/PF", base:false, team:"Celtics / Bucks", era:"1970-83", c:{career:"11 seasons",games:766,ppg:17.6,rpg:13.6,apg:3.8,fg:46.0,three:7.1,ft:78.3,stl:1.1,blk:0.9}, b:{season:"1975-76",ppg:19.0,rpg:16.0,apg:4.2,fg:46.8,three:null,ft:75.6,stl:1.2,blk:0.9}, p:{start:"1972-73",end:"1978-79",games:521,ppg:18.9,rpg:15.2,apg:4.2,fg:45.7,three:null,ft:78.1,stl:1.2,blk:1.0}, a:{champ:2,mvp:1,allstar:8,allnba:3,alldef:3,dpoy:null,anniv:1,annivText:"75th"} },
  { id:"gilmoar01", name:"Artis Gilmore", pos:"C", base:false, team:"Bulls / Spurs / Celtics", era:"1976-88", c:{career:"12 seasons",games:909,ppg:17.1,rpg:10.1,apg:2.0,fg:59.9,three:7.7,ft:71.3,stl:0.5,blk:1.9}, b:{season:"1981-82",ppg:18.5,rpg:10.2,apg:1.7,fg:65.2,three:0.0,ft:76.8,stl:0.6,blk:2.7}, p:{start:"1977-78",end:"1983-84",games:555,ppg:18.7,rpg:10.7,apg:2.4,fg:61.8,three:0.0,ft:72.7,stl:0.6,blk:2.3}, a:{champ:0,mvp:0,allstar:6,allnba:1,alldef:5,dpoy:0,anniv:0,annivText:"None"} },
  { id:"mcd00bo01".replace("00","a"), name:"Bob McAdoo", pos:"PF/C", base:false, team:"Braves / Knicks / Lakers +", era:"1972-86", c:{career:"14 seasons",games:852,ppg:22.1,rpg:9.4,apg:2.3,fg:50.3,three:8.1,ft:75.4,stl:1.0,blk:1.5}, b:{season:"1974-75",ppg:34.5,rpg:14.1,apg:2.2,fg:51.2,three:null,ft:80.5,stl:1.1,blk:2.1}, p:{start:"1972-73",end:"1978-79",games:494,ppg:27.8,rpg:11.7,apg:2.4,fg:50.5,three:null,ft:77.8,stl:1.0,blk:1.9}, a:{champ:2,mvp:1,allstar:5,allnba:2,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"waltobi01", name:"Bill Walton", pos:"C", base:false, team:"Trail Blazers / Clippers / Celtics", era:"1974-87", c:{career:"10 seasons",games:468,ppg:13.3,rpg:10.5,apg:3.4,fg:52.1,three:0.0,ft:66.0,stl:0.8,blk:2.2}, b:{season:"1977-78",ppg:18.9,rpg:13.2,apg:5.0,fg:52.2,three:null,ft:72.0,stl:1.0,blk:2.5}, p:{start:"1974-75",end:"1985-86",games:401,ppg:14.3,rpg:11.0,apg:3.6,fg:52.5,three:0.0,ft:66.1,stl:0.9,blk:2.4}, a:{champ:2,mvp:1,allstar:2,allnba:2,alldef:2,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"malonmo01", name:"Moses Malone", pos:"C", base:true, team:"Rockets / 76ers / Hawks +", era:"1976-95", c:{career:"19 seasons",games:1329,ppg:20.6,rpg:12.2,apg:1.4,fg:49.5,three:9.6,ft:76.0,stl:0.8,blk:1.3}, b:{season:"1981-82",ppg:31.1,rpg:14.7,apg:1.8,fg:51.9,three:0.0,ft:76.2,stl:0.9,blk:1.5}, p:{start:"1978-79",end:"1984-85",games:552,ppg:26.4,rpg:14.7,apg:1.6,fg:50.9,three:5.6,ft:75.8,stl:0.9,blk:1.6}, a:{champ:1,mvp:3,allstar:12,allnba:8,alldef:2,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"parisro01", name:"Robert Parish", pos:"C", base:false, team:"Warriors / Celtics / Bulls +", era:"1976-97", c:{career:"21 seasons",games:1611,ppg:14.5,rpg:9.1,apg:1.4,fg:53.7,three:0.0,ft:72.1,stl:0.8,blk:1.5}, b:{season:"1981-82",ppg:19.9,rpg:10.8,apg:1.8,fg:54.2,three:null,ft:71.0,stl:0.9,blk:2.4}, p:{start:"1980-81",end:"1986-87",games:560,ppg:18.5,rpg:10.4,apg:1.7,fg:55.2,three:0.0,ft:72.2,stl:0.9,blk:1.9}, a:{champ:4,mvp:0,allstar:9,allnba:2,alldef:0,dpoy:0,anniv:1,annivText:"75th"} },
  { id:"olajuha01", name:"Hakeem Olajuwon", pos:"C", base:true, team:"Rockets / Raptors", era:"1984-2002", c:{career:"18 seasons",games:1238,ppg:21.8,rpg:11.1,apg:2.5,fg:51.2,three:20.2,ft:71.2,stl:1.7,blk:3.1}, b:{season:"1992-93",ppg:26.1,rpg:13.0,apg:3.5,fg:52.9,three:0.0,ft:77.9,stl:1.8,blk:4.2}, p:{start:"1988-89",end:"1994-95",games:555,ppg:25.3,rpg:12.7,apg:3.0,fg:51.5,three:14.3,ft:76.5,stl:1.9,blk:3.9}, a:{champ:2,mvp:1,allstar:12,allnba:12,alldef:9,dpoy:2,anniv:2,annivText:"50th, 75th"} },
  { id:"ewingpa01", name:"Patrick Ewing", pos:"C", base:true, team:"Knicks / SuperSonics / Magic", era:"1985-2002", c:{career:"17 seasons",games:1183,ppg:21.0,rpg:9.8,apg:1.9,fg:50.4,three:15.2,ft:74.0,stl:1.0,blk:2.4}, b:{season:"1989-90",ppg:28.6,rpg:10.9,apg:2.2,fg:55.1,three:25.0,ft:77.5,stl:1.0,blk:4.0}, p:{start:"1987-88",end:"1993-94",games:530,ppg:25.5,rpg:10.6,apg:2.1,fg:52.7,three:16.7,ft:75.2,stl:1.0,blk:3.3}, a:{champ:0,mvp:0,allstar:11,allnba:7,alldef:3,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"robinda01", name:"David Robinson", pos:"C", base:true, team:"Spurs", era:"1989-2003", c:{career:"14 seasons",games:987,ppg:21.1,rpg:10.6,apg:2.5,fg:51.8,three:25.0,ft:73.6,stl:1.4,blk:3.0}, b:{season:"1993-94",ppg:29.8,rpg:10.7,apg:4.8,fg:50.7,three:34.5,ft:74.9,stl:1.7,blk:3.3}, p:{start:"1989-90",end:"1995-96",games:555,ppg:26.5,rpg:11.8,apg:3.1,fg:52.0,three:26.7,ft:74.4,stl:1.6,blk:3.6}, a:{champ:2,mvp:1,allstar:10,allnba:10,alldef:8,dpoy:1,anniv:2,annivText:"50th, 75th"} },
  { id:"mutomdi01", name:"Dikembe Mutombo", pos:"C", base:false, team:"Nuggets / Hawks / 76ers +", era:"1991-2009", c:{career:"18 seasons",games:1196,ppg:9.8,rpg:10.3,apg:1.0,fg:51.8,three:null,ft:68.4,stl:0.4,blk:2.8}, b:{season:"1999-00",ppg:11.5,rpg:14.1,apg:1.3,fg:56.2,three:null,ft:70.8,stl:0.3,blk:3.3}, p:{start:"1993-94",end:"2000-01",games:532,ppg:12.4,rpg:12.4,apg:1.3,fg:52.4,three:null,ft:68.7,stl:0.4,blk:3.6}, a:{champ:0,mvp:0,allstar:8,allnba:3,alldef:6,dpoy:4,anniv:0,annivText:"None"} },
  { id:"o'neasha01".replace("'",""), name:"Shaquille O'Neal", pos:"C", base:true, team:"Magic / Lakers / Heat +", era:"1992-2011", c:{career:"19 seasons",games:1207,ppg:23.7,rpg:10.9,apg:2.5,fg:58.2,three:4.5,ft:52.7,stl:0.6,blk:2.3}, b:{season:"1999-00",ppg:29.7,rpg:13.6,apg:3.8,fg:57.4,three:0.0,ft:52.4,stl:0.5,blk:3.0}, p:{start:"1993-94",end:"2001-02",games:529,ppg:28.1,rpg:12.0,apg:2.8,fg:57.7,three:0.0,ft:52.8,stl:0.7,blk:2.7}, a:{champ:4,mvp:1,allstar:15,allnba:14,alldef:3,dpoy:0,anniv:2,annivText:"50th, 75th"} },
  { id:"mourial01", name:"Alonzo Mourning", pos:"C", base:false, team:"Hornets / Heat / Nets", era:"1992-2008", c:{career:"15 seasons",games:838,ppg:17.1,rpg:8.5,apg:1.1,fg:52.7,three:24.7,ft:69.2,stl:0.5,blk:2.8}, b:{season:"1998-99",ppg:20.1,rpg:11.0,apg:1.6,fg:51.1,three:0.0,ft:65.2,stl:0.7,blk:3.9}, p:{start:"1992-93",end:"1999-00",games:519,ppg:21.1,rpg:10.1,apg:1.4,fg:52.4,three:29.4,ft:69.5,stl:0.6,blk:3.2}, a:{champ:1,mvp:0,allstar:7,allnba:2,alldef:2,dpoy:2,anniv:0,annivText:"None"} },
  { id:"wallabe01", name:"Ben Wallace", pos:"C/PF", base:false, team:"Wizards / Magic / Pistons +", era:"1996-2012", c:{career:"16 seasons",games:1088,ppg:5.7,rpg:9.6,apg:1.3,fg:47.4,three:13.7,ft:41.4,stl:1.3,blk:2.0}, b:{season:"2002-03",ppg:6.9,rpg:15.4,apg:1.6,fg:48.1,three:16.7,ft:45.0,stl:1.4,blk:3.2}, p:{start:"2000-01",end:"2006-07",games:560,ppg:7.3,rpg:12.9,apg:1.7,fg:45.1,three:13.0,ft:42.7,stl:1.6,blk:2.8}, a:{champ:1,mvp:0,allstar:4,allnba:5,alldef:6,dpoy:4,anniv:0,annivText:"None"} },
  { id:"sabonar01", name:"Arvydas Sabonis", pos:"C", base:false, team:"Trail Blazers", era:"1995-2003", c:{career:"7 seasons",games:470,ppg:12.0,rpg:7.3,apg:2.1,fg:50.0,three:32.8,ft:78.6,stl:0.8,blk:1.1}, b:{season:"1997-98",ppg:16.0,rpg:10.0,apg:3.0,fg:49.3,three:26.1,ft:79.8,stl:0.9,blk:1.1}, p:{start:"1995-96",end:"2002-03",games:470,ppg:12.0,rpg:7.3,apg:2.1,fg:50.0,three:32.8,ft:78.6,stl:0.8,blk:1.1}, a:{champ:0,mvp:0,allstar:0,allnba:0,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"yaomi01", name:"Yao Ming", pos:"C", base:false, team:"Rockets", era:"2002-11", c:{career:"8 seasons",games:486,ppg:19.0,rpg:9.2,apg:1.6,fg:52.4,three:20.0,ft:83.3,stl:0.4,blk:1.9}, b:{season:"2006-07",ppg:25.0,rpg:9.4,apg:2.0,fg:51.6,three:0.0,ft:86.2,stl:0.4,blk:2.0}, p:{start:"2002-03",end:"2008-09",games:481,ppg:19.1,rpg:9.3,apg:1.6,fg:52.5,three:20.0,ft:83.2,stl:0.4,blk:1.9}, a:{champ:0,mvp:0,allstar:8,allnba:5,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"howardw01", name:"Dwight Howard", pos:"C", base:false, team:"Magic / Rockets / Lakers +", era:"2004-22", c:{career:"18 seasons",games:1242,ppg:15.7,rpg:11.8,apg:1.3,fg:58.7,three:21.4,ft:56.7,stl:0.9,blk:1.8}, b:{season:"2010-11",ppg:22.9,rpg:14.1,apg:1.4,fg:59.3,three:0.0,ft:59.6,stl:1.4,blk:2.4}, p:{start:"2007-08",end:"2013-14",games:548,ppg:20.0,rpg:13.4,apg:1.6,fg:58.9,three:9.1,ft:58.9,stl:1.1,blk:2.4}, a:{champ:1,mvp:0,allstar:8,allnba:8,alldef:5,dpoy:3,anniv:0,annivText:"None"} },
  { id:"gasolma01", name:"Marc Gasol", pos:"C", base:false, team:"Grizzlies / Raptors / Lakers", era:"2008-21", c:{career:"13 seasons",games:891,ppg:14.0,rpg:7.4,apg:3.4,fg:48.1,three:36.0,ft:77.6,stl:0.9,blk:1.4}, b:{season:"2016-17",ppg:19.5,rpg:6.3,apg:4.6,fg:45.9,three:38.8,ft:83.7,stl:0.9,blk:1.3}, p:{start:"2010-11",end:"2016-17",games:513,ppg:15.5,rpg:7.7,apg:3.6,fg:49.2,three:34.4,ft:79.5,stl:0.9,blk:1.6}, a:{champ:1,mvp:0,allstar:3,allnba:2,alldef:1,dpoy:1,anniv:0,annivText:"None"} },
  { id:"couside01", name:"DeMarcus Cousins", pos:"C/PF", base:false, team:"Kings / Pelicans / Warriors +", era:"2010-22", c:{career:"11 seasons",games:654,ppg:19.6,rpg:10.2,apg:3.0,fg:46.0,three:33.1,ft:73.7,stl:1.3,blk:1.1}, b:{season:"2016-17",ppg:27.0,rpg:11.0,apg:4.6,fg:45.2,three:36.1,ft:77.2,stl:1.4,blk:1.3}, p:{start:"2013-14",end:"2019-20",games:398,ppg:24.4,rpg:11.6,apg:3.6,fg:46.1,three:33.3,ft:74.3,stl:1.5,blk:1.3}, a:{champ:0,mvp:0,allstar:4,allnba:2,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"goberru01", name:"Rudy Gobert", pos:"C", base:false, team:"Jazz / Timberwolves", era:"2013-present (stats through 2024-25)", c:{career:"12 seasons",games:839,ppg:12.6,rpg:11.7,apg:1.3,fg:65.5,three:0.0,ft:63.9,stl:0.7,blk:2.1}, b:{season:"2021-22",ppg:15.6,rpg:14.7,apg:1.1,fg:71.3,three:0.0,ft:69.0,stl:0.7,blk:2.1}, p:{start:"2016-17",end:"2023-24",games:512,ppg:14.1,rpg:12.7,apg:1.4,fg:66.0,three:0.0,ft:64.5,stl:0.7,blk:2.3}, a:{champ:0,mvp:0,allstar:3,allnba:4,alldef:7,dpoy:4,anniv:0,annivText:"None"} },
  { id:"jokicni01", name:"Nikola Jokic", pos:"C", base:true, team:"Nuggets", era:"2015-present (stats through 2024-25)", c:{career:"10 seasons",games:745,ppg:21.8,rpg:10.9,apg:7.2,fg:55.7,three:35.9,ft:82.8,stl:1.2,blk:0.7}, b:{season:"2024-25",ppg:29.6,rpg:12.7,apg:10.2,fg:57.6,three:41.7,ft:80.0,stl:1.8,blk:0.6}, p:{start:"2018-19",end:"2024-25",games:517,ppg:25.5,rpg:11.8,apg:8.3,fg:58.2,three:37.1,ft:82.4,stl:1.3,blk:0.7}, a:{champ:1,mvp:3,allstar:7,allnba:7,alldef:0,dpoy:0,anniv:0,annivText:"None"} },
  { id:"embiijo01", name:"Joel Embiid", pos:"C", base:false, team:"76ers", era:"2016-present (stats through 2024-25)", c:{career:"9 seasons",games:452,ppg:27.7,rpg:11.0,apg:3.7,fg:50.4,three:34.1,ft:82.7,stl:0.9,blk:1.7}, b:{season:"2022-23",ppg:33.1,rpg:10.2,apg:4.2,fg:54.8,three:33.0,ft:85.7,stl:1.0,blk:1.7}, p:{start:"2017-18",end:"2023-24",games:375,ppg:29.1,rpg:11.1,apg:3.9,fg:51.0,three:34.5,ft:83.6,stl:0.9,blk:1.7}, a:{champ:0,mvp:1,allstar:7,allnba:5,alldef:3,dpoy:0,anniv:0,annivText:"None"} }
];

const hofPlayers = new Set([
  "mikange01", "johnsne01", "russell01", "chambwi01", "reedwi01",
  "unselwe01", "abdulka01", "thurmna01", "bellawa01", "cowenda01",
  "gilmoar01", "mcdabo01", "waltobi01", "malonmo01", "parisro01", "olajuha01",
  "ewingpa01", "robinda01", "mutomdi01", "oneasha01", "mourial01",
  "wallabe01", "sabonar01", "yaomi01", "howardw01"
]);

const rankMetrics = ["games","ppg","rpg","apg","fg","three","ft","stl","blk","champ","mvp","allstar","allnba","alldef","dpoy"];
const avgRankMetrics = rankMetrics.filter(key => !["games", "three"].includes(key));
const fmt = (value, suffix = "") => value == null ? "N/A" : `${value}${suffix}`;
const cell = (html, cls = "") => `<td${cls ? ` class="${cls}"` : ""}>${html}</td>`;
const comboToggle = () => document.querySelector("#comboToggle");
const playerStartYear = player => Number(player.era.match(/\d{4}/)?.[0] ?? 9999);
const byStartYear = (a, b) => playerStartYear(a) - playerStartYear(b) || a.name.localeCompare(b.name);

function selectedPlayers() {
  const checked = new Set([...document.querySelectorAll(".player-check:checked")].map(input => input.value));
  const showCombo = comboToggle()?.checked ?? true;
  return players
    .filter(player => checked.has(player.id) && (showCombo || player.pos === "C"))
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
  const total = avgRankMetrics.reduce((sum, key) => {
    const source = key in player.c ? p => p.c : p => p.a;
    const value = source(player)[key];
    if (value == null) return sum;
    const rank = ranksFor(selected, key, source)[player.id];
    return sum + rank;
  }, 0);
  const count = avgRankMetrics.filter(key => (key in player.c ? player.c[key] : player.a[key]) != null).length;
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
    if (!player || player.pos === "C") return;
    input.closest(".player-option").hidden = !showComboToggle.checked;
    if (!showComboToggle.checked) input.checked = false;
  });
  renderAll();
});
