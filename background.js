$(document).ready(function () {

  var p = document.getElementById('output');

  function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
      out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
  }

  var umbracoUrl = "http://admin.servcorp.co.jp/umbraco/umbraco.aspx#content"

  $.getJSON("http://virtualoffice.servcorp.co.jp/public_html/json/locations.json", (data) => {
    testSections(data);
  })

  function testSections( locations ) {
    // /en/serviced-offices/locations/japan/tokyo/shiroyama-trust-tower/
    var scMainTest = "http://52.196.139.221"
    //set page values based on options
    var lang = '/en',
      page = '';

    $('input').click(function () {
      switch ($(this).attr('val')) {
        case 'en':
          lang = '/en';
          if (page === '/rental-offices')
            page = '/serviced-offices';
          break;
        case 'ja':
          lang = '/ja';
          if (page === '/serviced-offices')
            page = '/rental-offices';
          break;
        case 'main':
          page = '';
          break;
        case 'so':
          if (lang === '/ja')
            page = '/rental-offices';
          else
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

    // open all links
    $('#location-all-btn-test').click(function () {
      for (area in locations) {
        var locationsArr = locations[area]
        for (var i = 0; i < locationsArr.length; i++) {
          var location = locationsArr[i]

          var url = '';
          url = scMainTest + lang + page + '/locations' + '/' + area + '/' + location.url;
          chrome.tabs.create({
            'url': url,
            'active': false,
          });
        }
      }
    });

  }

  var servcorpUrls = {
    "all": [
      "http://www.servcorp.co.jp/en/contact-us/?cc=JP",
      "http://www.servcorp.co.jp/en/book-a-meeting-room/?pr=casualmeetingroom&cc=JP",
      "http://www.servcorp.co.jp/en/book-an-office-tour/?pr=servicedoffice&cc=JP",
      "http://www.servcorp.co.jp/ja/contact-us/",
      "http://www.servcorp.co.jp/ja/book-a-meeting-room/?pr=casualmeetingroom&cc=JP",
      "http://www.servcorp.co.jp/ja/book-an-office-tour/?pr=servicedoffice&cc=JP",
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
    "voSignUp": [
      "https://secure.servcorp.co.jp/?Lang=2&c=JP01&i=0",
      "file:///C:/Users/aburdick/Documents/Websites%20Checks/VO_Signup_check/testcarddetails.txt"
        ],
    "voLandingPage": [
  		"http://virtualoffice.servcorp.co.jp/popupform/popup.php?lang=ja&enq=yet",
  		"http://virtualoffice.servcorp.co.jp/popupform/popup.php?lang=en&enq=yet",
  		"http://virtualoffice.servcorp.co.jp/osaka/popupform/popup.php?lang=ja&enq=yet",
  		"http://virtualoffice.servcorp.co.jp/osaka/popupform/popup.php?lang=en&enq=yet"
    	],
    "incognito": [
      "https://www.google.co.jp/",
      "http://www.yahoo.co.jp/"
        ],
    "local": [
      "http://www.rentaloffice-tokyo.jp/",
      "http://www.rentaloffice-yokohama.jp/",
      "http://www.rentaloffice-osaka.jp/",
      "http://www.rentaloffice-nagoya.jp/",
      "http://www.rentaloffice-fukuoka.jp/",
      "http://www.virtualoffice-japan.jp/"
        ],
    "coworking": [
      "/locations/tokyo/marunouchi-yusen-building/",
      "/locations/tokyo/sunshine-city/",
      "/locations/osaka/edobori-center-building/"
        ],

    "backups": {
      vojp: "http://virtualoffice.servcorp.co.jp/index.html",
      voen: "http://virtualoffice.servcorp.co.jp/en/index.html",
      voStyle: "http://virtualoffice.servcorp.co.jp/css/style.css",
      voStyleEn: "http://virtualoffice.servcorp.co.jp/en/style_en.css",
      osakaVo: "http://virtualoffice.servcorp.co.jp/osaka/index.html",
      osakaVoEn: "http://virtualoffice.servcorp.co.jp/osaka/en/index.html",
      osakaVoStyle: "http://virtualoffice.servcorp.co.jp/osaka/en/style_en.css",
      osakaVoStyleJa: "http://virtualoffice.servcorp.co.jp/osaka/css/style.css",
      cws: "http://www.coworkingspace.co.jp/index.html",
      cwsEn: "http://www.coworkingspace.co.jp/en/index.html",
      cwsStyle: "http://www.coworkingspace.co.jp/css/style.css",
      cwsStyleEn: "http://www.coworkingspace.co.jp/en/style_en.css",
      cwsIke: "http://www.coworking-ikebukuro.jp/index.html",
      cwsIkeEn: "http://www.coworking-ikebukuro.jp/en/index.html",
      cwsIkeStyle: "http://www.coworking-ikebukuro.jp/css/style.css",
      cwsIkeStyleEn: "http://www.coworking-ikebukuro.jp/css/style_en.css"
    }
  };

  var locationLinks = {
    "Tokyo": {
      "Marunouchi Yusen Building": "/locations/tokyo/marunouchi-yusen-building/",
      "Marunouchi Trust Tower - Main": "/locations/tokyo/marunouchi-trust-tower-main/",
      "Otemachi Tokyo Sankei Building": "/locations/tokyo/otemachi-tokyo-sankei-building/",
      "Nihonbashi Wakamatsu Building": "/locations/tokyo/nihonbashi-wakamatsu-building/",
      "Hibiya Central Building": "/locations/tokyo/hibiya-central-building/",
      "Shiodome Shibarikyu Building": "/locations/tokyo/shiodome-shibarikyu-building/",
      "Shiroyama Trust Tower": "/locations/tokyo/shiroyama-trust-tower/",
      "Shinagawa Intercity Tower A": "/locations/tokyo/shinagawa-intercity-tower-a/",
      "Tri-Seven Roppongi": "/locations/tokyo/tri-seven-roppongi/",
      "Aoyama Palacio Tower": "/locations/tokyo/aoyama-palacio-tower/",
      "Yebisu Garden Place Tower": "/locations/tokyo/yebisu-garden-place-tower/",
      "Shinjuku Nomura Building": "/locations/tokyo/shinjuku-nomura-building/",
      "Shinjuku Oak City": "/locations/tokyo/shinjuku-oak-city/",
      "Sunshine City": "/locations/tokyo/sunshine-city/",
      "Servcorp Tokyo Big Sight - Ariake Frontier Building": "/locations/tokyo/servcorp-tokyo-big-sight-ariake-frontier-building/"
    },
    "Yokohama": {
      "TOC Minato Mirai": "/locations/yokohama/toc-minato-mirai/"
    },
    "Osaka": {
      "Umeda Hilton Plaza West Office Tower - New floor open!": "/locations/osaka/hilton-plaza-west-office-tower/",
      "Cartier Building - Shinsaibashi Plaza": "/locations/osaka/cartier-building-shinsaibashi-plaza/",
      "Edobori Center Building": "/locations/osaka/edobori-center-building/"
    },
    "Nagoya": {
      "Nagoya Lucent Tower": "/locations/nagoya/nagoya-lucent-tower/",
      "Nagoya Nikko Shoken Building": "/locations/nagoya/nagoya-nikko-shoken-building/"
    },
    "Fukuoka": {
      "Nof Hakata Ekimae Building": "/locations/fukuoka/nof-hakata-ekimae-building/",
      "Fukuoka Tenjin Fukoku Seimei Building": "/locations/fukuoka/fukuoka-tenjin-fukoku-seimei-building/"
    }
  }


  $("#dealmaker").click(function () {
    chrome.tabs.create({
      'url': "deal-maker/dealmaker.html"
    });
  });
  $("#locations").click(function () {
    chrome.tabs.create({
      'url': "http://localhost/location-list"
    });
  });
  $("#useful").click(function () {
    chrome.tabs.create({
      'url': "useful-funcs/useful-funcs.html"
    });
  });
  $("#test-all-btn").click(function () {

    chrome.windows.create({
      'url': servcorpUrls.incognito,
      'incognito': true,
      'width': 1070
    }, function () {
      chrome.windows.create({
        'url': servcorpUrls.all,
        'width': 1070
      });
    });

  });
  $('#test-local-btn').click(function () {
    chrome.windows.create({
      'url': servcorpUrls.local,
      'width': 1070
    });
  });
  $("#test-vo-signup").click(function () {
    chrome.windows.create({
      'url': servcorpUrls.voSignUp,
      'width': 1000
    });
  });

  $('#umbraco-all-btn').click( () => {
    for(var i = 0; i < 23; i++){
      chrome.tabs.create({ url: umbracoUrl, selected: false })
    }
  })

  var lang = '',
    page = '';

  //set page values based on options
  $('input').click(function () {
    switch ($(this).attr('val')) {
      case 'en':
        lang = '/en';
        if (page === '/rental-offices')
          page = '/serviced-offices';
        break;
      case 'ja':
        lang = '/ja';
        if (page === '/serviced-offices')
          page = '/rental-offices';
        break;
      case 'main':
        page = '';
        break;
      case 'so':
        if (lang === '/ja')
          page = '/rental-offices';
        else
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

  //define url for websites
  var scMain = "http://www.servcorp.co.jp",
      scTesting = "http://113.161.77.24:10434",
      scTestingNew = "http://113.161.77.24:10444";
	var base = scMain;

  $('#backups').click(() => {
    var date = new Date();
    var today = `${date.getFullYear()}_${date.getMonth()}_${date.getUTCDay()}`;

    for (var key in servcorpUrls.backups) {
      var url = servcorpUrls.backups[key];
      var ext = url.split(".")[url.split(".").length - 1];
      var path = "./" + key + "." + ext;

      chrome.downloads.download({
        url: url,
        conflictAction: "uniquify",
        filename:'./' + key
      }, (dlId) => {
        chrome.downloads.search({ id: dlId }, (dlItem) => {
          var res = dlItem[0];
          console.log(`Started ${res.url} at ${res.startTime} (${res.fileSize/1024} kbs)`);
        });

      });
    }
  });

  $('#pictures').click(() => {
    var theRange = [12069, 12102];

    for (let i = theRange[0]; i <= theRange[1]; i++) {
      var pictureNumber = i.toString();
      var url = `http://admin.servcorp.co.jp/media/${pictureNumber}/${pictureNumber}.jpg`;

      chrome.downloads.download({
        url: url,
        conflictAction: "uniquify",
        filename:'./' + pictureNumber + ".jpg"
      }, (dlId) => {
        chrome.downloads.search({ id: dlId }, (dlItem) => {
          var res = dlItem[0];
          console.log(`Started ${res.url} at ${res.startTime} (${res.fileSize/1024} kbs)`);
        });

      });
    }
  });


  $('#location-all-btn').click(function () {
    var en = document.getElementById('1');
    for (area in locationLinks) {
      for (floor in locationLinks[area]) {
        var url = '';
        url = base + lang + page + locationLinks[area][floor];
        chrome.tabs.create({
          'url': url,
          'active': false,
        });
      }
    }
  });

  $('#location-tokyo-btn').click(function () {
    for (floor in locationLinks.Tokyo) {
      var url = base + lang + page + locationLinks.Tokyo[floor];
      chrome.tabs.create({
        'url': url,
        'active': false,
      });
    }
  });

  $('#location-yokohama-btn').click(function () {
    for (floor in locationLinks.Yokohama) {
      var url = base + lang + page + locationLinks.Yokohama[floor];
      chrome.tabs.create({
        'url': url,
        'active': false,
      });
    }
  });

  $('#location-osaka-btn').click(function () {
    for (floor in locationLinks.Osaka) {
      var url = base + lang + page + locationLinks.Osaka[floor];
      chrome.tabs.create({
        'url': url,
        'active': false,
      });
    }
  });

  $('#location-nagoya-btn').click(function () {
    for (floor in locationLinks.Nagoya) {
      var url = base + lang + page + locationLinks.Nagoya[floor];
      chrome.tabs.create({
        'url': url,
        'active': false,
      });
    }
  });

  $('#location-fukuoka-btn').click(function () {
    for (floor in locationLinks.Fukuoka) {
      var url = base + lang + page + locationLinks.Fukuoka[floor];
      chrome.tabs.create({
        'url': url,
        'active': false,
      });
    }
  });

  $('#coworking').click(function () {
    if (lang != '') {
      $(servcorpUrls.coworking).each(function (i, floor) {
        var url = base + lang + '/coworking' + floor;
        chrome.tabs.create({
          'url': url,
          'active': false,
        });
      })
    } else {
      alert('Please select a language.');
    }
  });
});
