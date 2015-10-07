

$(document).ready(function(){

var p = document.getElementById('output');

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}

    var xhr = new XMLHttpRequest();
    var url = "managers-test.json";

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            var managersObj = JSON.parse(xhr.responseText);
            console.log(managersObj.tokyo);
            showTokyoLocations(managersObj.tokyo);
        }
    }

    xhr.open("GET", url, true);
    xhr.send();

    function showTokyoLocations(object) {
        var out = "";
        
        for(place in object){
            console.log("The manager of " + place + " is " + object[place].manager.name + ".\n");
        }

    }

    var servcorpUrls = {
    	"all": 
    	[
            "http://www.servcorp.co.jp/ja/contact-us/",
            "http://www.servcorp.co.jp/ja/book-an-office-tour/",
            "http://www.servcorp.co.jp/ja/book-a-meeting-room/",
            "http://www.servcorp.co.jp/en/contact-us/",
            "http://www.servcorp.co.jp/en/book-an-office-tour/",
            "http://www.servcorp.co.jp/en/book-a-meeting-room/",
            "http://virtualoffice.servcorp.co.jp/osaka/popupform/popup.php?lang=en&enq=yet",
            "http://virtualoffice.servcorp.co.jp/osaka/popupform/popup.php?lang=ja&enq=yet",
            "http://virtualoffice.servcorp.co.jp/popup.php?lang=ja&enq=yet",
            "http://virtualoffice.servcorp.co.jp/popup.php?lang=en&enq=yet",
            "http://www.servcorp.co.jp/ja/",
            "http://www.servcorp.co.jp/en/",
            "http://virtualoffice.servcorp.co.jp/",
            "http://virtualoffice.servcorp.co.jp/osaka/",
            "http://vo30.co.jp/",
            "http://vo30.jp/",
            "http://virtualoffice.co.jp/",
            "http://www.virtualoffice-japan.jp/contact_vosite",
            "http://www.rentaloffice-tokyo.jp/contact_tokyo",
            "file:///C:/Users/aburdick/Documents/Websites%20Checks/VO_Signup_check/testcarddetails.txt",
    		"https://secure.servcorp.co.jp/?Lang=2&c=JP01&i=0"
        ],
    	"voSignUp": 
        [
            "https://secure.servcorp.co.jp/?Lang=2&c=JP01&i=0",
            "https://secure.servcorp.co.jp/?Lang=1&c=%270%27"
        ],
    	"voLandingPage":
    	[
    		"http://virtualoffice.servcorp.co.jp/popupform/popup.php?lang=ja&enq=yet",
    		"http://virtualoffice.servcorp.co.jp/popupform/popup.php?lang=en&enq=yet",
    		"http://virtualoffice.servcorp.co.jp/osaka/popupform/popup.php?lang=ja&enq=yet",
    		"http://virtualoffice.servcorp.co.jp/osaka/popupform/popup.php?lang=en&enq=yet"
    	],
        "incognito":[
            "https://www.google.co.jp/",
            "http://www.yahoo.co.jp/"
        ],
        "local":
        [
            "http://www.rentaloffice-tokyo.jp/",
            "http://www.rentaloffice-osaka.jp/",
            "http://www.rentaloffice-nagoya.jp/",
            "http://www.rentaloffice-fukuoka.jp/",
            "http://www.virtualoffice-japan.jp/"
        ]
    };
    
    var locationLinks = {
        "Tokyo":{
            "Marunouchi Yusen Building":"/locations/tokyo/marunouchi-yusen-building",
            "Marunouchi Trust Tower - Main":"/locations/tokyo/marunouchi-trust-tower-main",
            "Otemachi Tokyo Sankei Building":"/locations/tokyo/otemachi-tokyo-sankei-building",
            "Nihonbashi Wakamatsu Building":"/locations/tokyo/nihonbashi-wakamatsu-building",
            "Hibiya Central Building":"/locations/tokyo/hibiya-central-building",
            "Shiodome Shibarikyu Building":"/locations/tokyo/shiodome-shibarikyu-building",
            "Shiroyama Trust Tower":"/locations/tokyo/shiroyama-trust-tower",
            "Shinagawa Intercity Tower A":"/locations/tokyo/shinagawa-intercity-tower-a",
            "Aoyama Palacio Tower":"/locations/tokyo/aoyama-palacio-tower",
            "Yebisu Garden Place Tower":"/locations/tokyo/yebisu-garden-place-tower",
            "Shinjuku Nomura Building":"/locations/tokyo/shinjuku-nomura-building",
            "Shinjuku Oak City":"/locations/tokyo/shinjuku-oak-city",
            "Sunshine City":"/locations/tokyo/sunshine-city",
            "Servcorp Tokyo Big Sight - Ariake Frontier Building":"/locations/tokyo/servcorp-tokyo-big-sight-ariake-frontier-building"
            },
        "Yokohama":{
            "TOC Minato Mirai":"/locations/yokohama/toc-minato-mirai"
        },
        "Osaka":{
            "Umeda Hilton Plaza West Office Tower - New floor open!":"/locations/osaka/hilton-plaza-west-office-tower",
            "Cartier Building - Shinsaibashi Plaza":"/locations/osaka/cartier-building-shinsaibashi-plaza",
            "Edobori Center Building":"/locations/osaka/edobori-center-building"
        },
        "Nagoya":{
            "Nagoya Lucent Tower":"/locations/nagoya/nagoya-lucent-tower",
            "Nagoya Nikko Shoken Building":"/locations/nagoya/nagoya-nikko-shoken-building"
        },
        "Fukuoka":{
            "Nof Hakata Ekimae Building":"/locations/fukuoka/nof-hakata-ekimae-building",
            "Fukuoka Tenjin Fukoku Seimei Building":"/locations/fukuoka/fukuoka-tenjin-fukoku-seimei-building"
        }
    }

    
    $("#dealmaker").click( function(){
        chrome.tabs.create({'url':"deal-maker/dealmaker.html"});
    });
    $("#mailgen").click(function(){
        chrome.tabs.create({'url':"mail-gen/mail_gen.html"});
    });
    $("#test-all-btn").click(function(){

        chrome.windows.create({'url':servcorpUrls.incognito, 'incognito':true, 'width':1070}, function(){
            chrome.windows.create({'url':servcorpUrls.all, 'width':1070});
        });
        
    });
    $('#test-local-btn').click( function(){
        chrome.windows.create({ 'url':servcorpUrls.local, 'width':1070 });
    });
    $("#test-vo-signup").click(function(){
    	chrome.windows.create({ 'url':servcorpUrls.voSignUp, 'width':1000 } );
    });
    
    var lang = '',
        page = '';
    
    $('input').click(function(){
        switch($(this).attr('val')){
            case 'en':
                lang = '/en';
                break;
            case 'ja':
                lang = '/ja';
                break;
            case 'main':
                 page = '';
                break;
            case 'so':
                page = '/serviced-offices';
                break;
            case 'vo':
                 page = '/virtual-offices';
                break;
            case 'shared':
                page = '/private-shared-office';
                break;
            case 'meeting':
                page = '/casual-meeting-rooms';
                break;
        }
    });
    
    $('#location-all-btn').click(function(){
        var en = document.getElementById('1');
        for( area in locationLinks ){
            for( floor in locationLinks[area] ) {
                var url = '';
                url = "http://www.servcorp.co.jp"+ lang + locationLinks[area][floor] + page;
                chrome.tabs.create( { 'url':url, 'active':false, } );            
            }
        }
    });
    
    $('#location-tokyo-btn').click(function(){
          for( floor in locationLinks.Tokyo ) {
            var url = "http://www.servcorp.co.jp" + locationLinks.Tokyo[floor];
            chrome.tabs.create({ 'url':url, 'active':false, } );
          }
    });
    
    $('#location-yokohama-btn').click(function(){
          for( floor in locationLinks.Yokohama ) {
            var url = "http://www.servcorp.co.jp" + locationLinks.Yokohama[floor];
            chrome.tabs.create({ 'url':url, 'active':false, } );
          }
    });
    
    $('#location-osaka-btn').click(function(){
          for( floor in locationLinks.Osaka ) {
            var url = "http://www.servcorp.co.jp" + locationLinks.Osaka[floor];
            chrome.tabs.create({ 'url':url, 'active':false, } );
          }
    });
    
    $('#location-nagoya-btn').click(function(){
          for( floor in locationLinks.Nagoya ) {
            var url = "http://www.servcorp.co.jp" + locationLinks.Nagoya[floor];
            chrome.tabs.create({ 'url':url, 'active':false, } );
          }
    });
    
    $('#location-fukuoka-btn').click(function(){
          for( floor in locationLinks.Fukuoka ) {
              var url = "http://www.servcorp.co.jp" + locationLinks.Fukuoka[floor];
              chrome.tabs.create({ 'url':url, 'active':false, } );          
          }
    });
});