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
            "http://virtualoffice.servcorp.co.jp/popupform/popup.php?lang=ja&enq=yet",
            "http://virtualoffice.servcorp.co.jp/popupform/popup.php?lang=en&enq=yet",
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
});