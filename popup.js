var date
var now
chrome.runtime.onInstalled.addListener(function() {
now = new Date()
date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
chrome.alarms.create("timer", {when: date.getTime()})
})

chrome.alarms.onAlarm.addListener(function timed(){
now = new Date();
date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
date.setDate((date.getDate() + 1));
chrome.alarms.create("timer", {when: date.getTime()})

var list = ["five", "four", "three", "two", "one", "make", "some", "noise", "you", "are", "my", "friend", "ahh", "ill", "use", "all", "of", "my", "power", "full", "tilt", "mister", "nice", "watch", "fourty", "bottles", "time", "stop", "za", "warudo", "moko", "jin", "my", "name", "is", "shakezula","jojo", "lovely", "ooh", "shah", "things", "are", "gonna", "get", "easier", "things", "will", "get", "brighter",
  "child", "beast", "wolf", "death", "life", "rebirth", "anima", "wild", "hearts", "beatiful", "king", "lift", "off", "femi", "owo", "life", "love", "fury", "blinder", "fatal", "fury", "bomba", "lovin", "no", "love", "fighting", "dreamers", "cherry", "spirit", "Josefumi", "Cuball", "bulge", "explosion", "once", "again", "sacrifice", "maniacle", "laugh", "instant", "transmission", "lea", "Axel", "got", "memorized",
  "love", "finale", "fort", "abcd", "efgh", "ijkl", "mnop", "abaculus","Acrididae","Acridiidae","acridine","acridinic","acridinium","acridity","Acridium","acridness","acridone","acridonium","acridophagus", "seven", "eight", "nine", "old", "jerk", "no", "fun", "devil", "fellas", "dabura", "ultima", "weapon", "satan", "gray", "wrong", "fat", "lady", "sings", "super+perfect+cell", "super+saiyan+god+super+saiyan", "super+saiyan+blue",
  "acridyl","acriflavin","acriflavine","acrimonious","acrimoniously","acrimoniousness", "versace", "villain", "ultimate", "genkidama", "cha", "la", "head", "its", "the", "final", "countdown", "prolouge", "homecoming", "Goku", "Son", "Sun", "Wu", "Kong","kamehameha", "demon", "king", "piccolo", "kaioken", "burning", "finger", "future", "blue", "orange", "best", "color", "from", "now", "villain", "Gohan", "Mystic", "Trunks", "Super", "Saiyan",
  "acrimony","acrindoline","acrinyl","acrisia","Acrisius","Acrita","acritan","acrite","acritical","acritol","Acroa","acroaesthesia","acroama","capriped","capripede", "Jonathan", "Jostar", "Joeseph", "Josuke", "Higashikata", "teamwork", "makes", "dream", "work", "Hinata", "Giorno", "Giovanna", "imperfect", "semiperfect", "good", "fight", "had", "stay", "die", "suck", "succ", "wiped", "zut", "energy", "power waves", "gold", "experience", "Dio", "Brando",
  "caprizant","caproate","caproic","caproin","Capromys","caprone","capronic","capronyl","caproyl","capryl","caprylate","caprylene","caprylic","caprylin", "know", "filth", "cool", "shit", "zero", "saiyaman", "halo", "rock", "crystal", "gem", "fantastic", "total", "ascended", "away", "kokoro", "hikarateku", "fortune", "absorbing", "knowledge", "chance", "hope", "despair", "interference", "hamon", "stone", "free", "King", "crimson", "tusk", "soft and wet",
  "caprylone","caprylyl","capsa","capsaicin","Capsella","capsheaf","capshore","Capsian","capsicin","Capsicum","capsicum","capsid","Capsidae","capsizal", "billions", "trillions", "quadrillions", "quintillion", "million", "inifinite", "Jotaro", "Kujo", "Jolyne", "Cujoh", "cough", "destruction", "beerus", "Natsu", "complete", "weak", "final", "kamehameha", "rasenshuriken", "armless", "star finger", "johnny", "kira", "killer queen", "bites", "dust",
  "capsize","capstan","capstone","capsula","capsular","capsulate","capsulated","capsulation", "kyuubi", "kurama", "dattebayo", "wonderful", "rasengan", "raseringan", "dai", "walk", "on", "water", "fire", "ball", "jutsu", "shaved", "eighteen", "she", "is", "doing", "robot", "flying", "practice", "sweat", "technique", "brilliant", "tasted", "store", "masenko", "father", "mask", "beam", "struggle", "Yoshikage", "Hokage", "stray", "cat",
  "capsulectomy","capsuler","capsuliferous","capsuliform","capsuligerous","capsulitis","capsulociliary","capsulogenous","capsulolenticular","capsulopupillary","capsulorrhaphy", "median", "Z", "fighters", "freedom", "planet", "back", "in", "fault", "gosh", "beyond", "shoes", "crown", "hercule", "end", "games", "extinction", "bug", "monster", "intact", "buddhist", "jhadist", "daoist", "pincer", "claw", "Dende", "obliteration",
  "capsulotome","capsulotomy","capsumin","captaculum","captain","captaincy","captainess","captainly","captainry","captainship","captance","captation","caption", "schadenfreud", "delightful", "bolt", "delectable", "wine", "great", "main", "girl", "taste", "pooped", "aura", "bloody", "kingdom", "omni", "core", "being", "regeneration", "multiply", "concious", "shapeless", "mass", "aperture", "crazy", "diamond",
  "captious","captiously","captiousness","captivate","captivately","captivatingkatatonia","katatonic","katatype","katchung","katcina","Kate","kath", "ionize", "shuriken", "dragon", "shinigami", "spiral", "fountain", "pity", "lesser", "subterra", "disapear", "filthy", "rich", "publicity", "golden", "star", "load", "survival", "vain", "hack", "rewards", "buddha", "Vegeta", "Vegito", "tribeam", "pig", "headed", "requiem",
  "Katha","katha","kathal","Katharina","Katharine","katharometer","katharsis","kathartic","kathemoglobin","kathenotheism","Kathleen","kathodic","Kathopanishad", "why", "fort", "blonde", "weirdos", "paparazzi", "worms", "Goten", "level", "supa", "saiyajin", "godo", "saiyajin", "smoke", "purple", "haze", "roar", "toying", "him", "foolish", "fear", "pickles", "nail gun", "beam", "cannon", "turtle", "tortoise",
  "Kathryn","Kathy","Katie","Katik","Katinka","katipo","Katipunan","Katipuneros","katmon","katogle","Katrine","Katrinka","katsup","Katsuwonidae","katuka", "bell", "pill", "blade", "ounce", "health", "multi", "missiles", "thousand", "birds", "crows", "boar", "foil", "opposite", "feedback", "everybody", "meet", "has", "a", "different", "point", "view", "hair", "forgetfullness", "gunshot", "plateu", "draw", "blank",
  "Katukina","katun","katurai","Katy","katydid","Kauravas","kauri","kava","kavaic","kavass","Kavi","Kaw","kawaka","Kawchodinne","kawika","Kay", "wild", "peaceful", "bind", "punch", "clone", "kansho", "crater", "lightning", "plasma", "force", "phase", "conduct", "credibility", "oppposite", "dictionary", "namek", "hear", "nickel", "route", "wounds", "flash", "burst", "limit", "break", "combo", "tides", "shockwaves", "edge", "fujin",
  "kay","kayak","kayaker","Kayan","Kayasth","Kayastha","kayles","kayo","Kayvan","Kazak","kazi","kazoo","Kazuhiro","kea","keach","keacorn", "Keatsian","keawe","perpetuation","perpetuator","perpetuity","perplantar","perplex","perplexable", "wish", "shenlong", "red", "perfecto", "incredible", "every", "day", "we", "walking", "down", "the", "street", "grit", "grape", "Seru", "voice", "volume", "inanimate", "ninja", "crackling", "sparking",
  "perplexed","perplexedly","perplexedness","perplexer","perplexing","perplexingly","perplexity", "amazing", "exact", "same", "system", "all", "difference", "colliding", "hearts", "thing", "of", "beauty", "Kakashi", "Sensei", "leaves", "assist", "around", "special", "eyes", "tail", "Kaiosama", "rita", "repulsa", "aardvark", "arthur", "pick", "mouse", "mammal", "prayer", "huge", "headache", "holding", "slipping", "slug", "wings",
  "perplexment","perplication","perquadrat","stylostegium","stylotypite","stylus","stymie","Stymphalian","Stymphalid","Stymphalides","Styphelia","styphnate","styphnic","stypsis","styptic","styptical","pokemon"];
var urlcur
var i = 0;//webNavigation listenter sentinel
var searchtab;
chrome.tabs.create({url: "http://www.bing.com"}, function (tab){searchtab = tab.id;})//puts the created tabs id in a variable to be referenced later
urlmake();
chrome.tabs.update(searchtab, {url: urlcur});

chrome.webNavigation.onCompleted.addListener(function search(tab){//listens for page updet 30 times. Needs o only do this for one tab.
 if(tab.tabId == searchtab)//supposed to make this listener only function for one tab but instead cancels out all updates
 {
  urlmake();
  if(i >= 30)
  {
    chrome.webNavigation.onCompleted.removeListener(search);
    userAgentSwitch();
    search2();
  }
  chrome.tabs.update(searchtab, {url: urlcur});//updates tab
  i++;
 }
})

function search2(){
   chrome.webNavigation.onCompleted.addListener(function search2(tab){//switches the user agent and searches 20 tiems.
      urlmake();
      if(i > 50)
      {
        chrome.webNavigation.onCompleted.removeListener(search2);
        chrome.debugger.detach({tabId: searchtab});//undoes the user agent swithc
        i = 0;
      }
      chrome.tabs.update(searchtab, {url:urlcur});
      i++
  })
}

function urlmake(){//use in order to generate urls that search bing
  word1 = list[Math.floor(Math.random()*list.length)];
  word2 = list[Math.floor(Math.random()*list.length)];
  urlcur = "http://www.bing.com/search?q=" + word1 + "+" + word2;
}

function userAgentSwitch(){//supposed to switch user agent to android so that mobile searches can be done.
  chrome.debugger.attach({tabId: searchtab}, '1.0', function(){
    chrome.debugger.sendCommand({tabId: searchtab}, "Network.enable", {}, function(response){
      chrome.debugger.sendCommand({tabId: searchtab}, "Network.setUserAgentOverride", {userAgent: 'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>'})
    })
  })
}
})
