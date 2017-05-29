// ###USEFUL FUNCTIONS### //

//Add li to each
//str:string [req]. text to mod, divider:string [req]. how to split, isStr:bool def=string . return as string or arr
var addTagToEach = (str, elName, divider, isStr) => {
  isStr = isStr || true;
  elName = elName || "li"
  divider = divider || "\n"

  var arr = str.split(divider)
  var modArr = arr.map(function (e){ return `<${elName}>${e}</${elName}>` })
  if(isStr===true)
    return modArr.join("\n")
  else
    return modArr
}

var toCamel = (str) => {
  return str.replace(/(.{0,1})(.{1,})/, (a,b,c,d) => {return `${b.toUpperCase()}${c.toLowerCase()}`})
}

var hexToRgb = function(hex) {
  var res = [];
  var cur = hex;
  for(var i = 0; i < 3; i++) {
    res.push(cur % 100)
    cur = Math.floor(cur / 100);
  }
  return res.reverse().map( num => parseInt(num, 16))
}

// Monthly deal functions
function makeDealBox(codes, locObj) {
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date();
	var monthNumber = d.getMonth() !== 11 ? d.getMonth() + 1 : 0;
  var curMonth = monthNames[monthNumber];
  var locs = Object.keys(locObj).reduce(function(concatted, city) { return concatted.concat(locObj[city]) }, [])

  if(typeof codes == "object") {

    var locations = locs.filter(function(location) { return codes.indexOf(location.locationCode) > -1 })
    var str = locations.map(function(location) {
      var city = location.address.split('<br>')[2].split(" ")[0].toLowerCase();
      return `<li><a href="http://www.servcorp.co.jp/en/virtual-offices/locations/${city}/${location.url}/">${location.name}, ${city.capitalize()}</a></li>`
    }).join("\n");

    return `<div class="deal-article">
            <h3><span style="font-size: 16px;">New Client</span> <br />${curMonth} Special!</h3>
            <div class="inner">
            <div class="deal-content">
            <p><strong>FIRST MONTH FREE!</strong> at any location <br /> + <br /> Get a reduced price at</p>
            <ul>` + str + `</ul>
            <p class="phone">+81 3 6269 3400</p>
            <p><span style="font-size: large;"> <a class="cta-link" href="https://secure.servcorp.co.jp/?Lang=1&amp;c=JP01&amp;L=1&amp;i=6&amp;domainCode=12" target="_blank">Try it now</a> </span> &raquo;</p>
            </div>
            </div>
            </div>`;

  } else {
    var location = locs.filter(function(location) { return location.locationCode == codes })[0]
    var city = location.address.split('<br>')[2].split(" ")[0].toLowerCase();

    return `<div class="deal-article">
    <h3><span style="font-size: 16px;">New Client</span> <br />${curMonth} Special!</h3>
    <div class="inner">
    <div class="deal-content">
    <p><strong>FIRST MONTH FREE!</strong> + <br /> Get a reduced price at <br /> ${location.name}</p>
    <p class="phone">Sign up by the end of ${curMonth.capitalize()} <br />or call: <br /> +81 ${location.phoneNumberVo}</p>
    <p><span style="font-size: large; margin-top: 5px; display: inline-block;"> <a class="cta-link" href="https://secure.servcorp.co.jp/?Lang=1&amp;c=JP01&amp;L=${location.locationCode}&amp;i=6&amp;domainCode=12" target="_blank">Try it now</a> </span> &raquo;</p>
    </div>
    </div>
    </div>`
  }

}

function makeDealBoxJa(codes, locObj) {
  var d = new Date();
	var monthNumber = d.getMonth() !== 11 ? d.getMonth() + 1 : 1;
  var locs = Object.keys(locObj).reduce(function(concatted, city) { return concatted.concat(locObj[city]) }, [])

  if(typeof codes == "object") {
    var locations = locs.filter(function(location) { return codes.indexOf(location.locationCode) > -1 })
    var str = locations.map(function(location) {
			var city = location.address.split('<br>')[2].split(" ")[0].toLowerCase();
      return `<li><a href="http://www.servcorp.co.jp/ja/virtual-offices/locations/${city}/${location.url}/">${location.namae}</a></li>`
    }).join("\n")

    return `<div class="deal-article">
            <h3><span style="font-size: 16px;">新規のお客様向け</span> <br />${monthNumber}月限定オファー!</h3>
            <div class="inner">
            <div class="deal-content">
            <p><strong>初期1ヶ月無料!</strong> <span style="font-size: 10px;">（全拠点対象）</span> <br /> + <br /> 上記拠点が特別割引価格！</p>
            <ul>` + str + `</ul>
            <p class="phone">0120 8945 77 または</p>
            <p><a class="cta-link" href="https://secure.servcorp.co.jp/?Lang=2&amp;c=JP01&amp;i=0&amp;domainCode=12" target="_blank">オンラインでお申込み</a> &raquo;</p>
            </div>
            </div>
            </div>`
  } else {
    var location = locs.filter(function(location) { return location.locationCode == codes })[0]
    var city = location.address.split('<br>')[2].split(" ")[0].toLowerCase();

    return `<div class="deal-article">
            <h3><span style="font-size: 16px;">新規のお客様向け</span> <br />${monthNumber}月限定オファー!</h3>
            <div class="inner">
            <div class="deal-content">
            <p><strong>初期1ヶ月無料</strong> + <br /> ${location.namae} <br />が特別割引価格！</p>
            <p class="phone">${monthNumber}月末までのお申込み限定 <br />0${location.phoneNumberVo} または</p>
            <p><span style="font-size: 15px;"> <a class="cta-link" href="https://secure.servcorp.co.jp/?Lang=2&amp;c=JP01&amp;i=0&amp;domainCode=12&amp;L=${location.locationCode}" target="_blank">オンラインでお申込み</a> &raquo; </span></p>
            </div>
            </div>
            </div>`
  }
}
// End Monthly deal functions

// MIGHT BE USEFUL AT SOME POINT

function lengthOk(word, limit) {
  if(word.length > limit) {
    return true;
  }
  else {
    return null;
  }
}

function checkCells(thePhrases) {
  var individualPhrases = thePhrases.split('\n').map( (line) => { return line.split('\t') });
  individualPhrases.forEach( (line, lineNumber) => {
    line.forEach( (thePhrase, phraseNumber) => {
      if(phraseNumber === 2 && lengthOk(thePhrase, 80)) {
        console.log(thePhrase, phraseNumber === 2, lengthOk(thePhrase, 80))
        console.log(`Line: ${lineNumber}, Phrase: ${phraseNumber}, Charlength: ${thePhrase.length}, Phrase: ${thePhrase}`);
      } else if(phraseNumber < 2 && lengthOk(thePhrase, 30)) {
        console.log(`Line: ${lineNumber}, Phrase: ${phraseNumber}, Charlength: ${thePhrase.length}, Phrase: ${thePhrase}`);
      }
    });
  });
}
