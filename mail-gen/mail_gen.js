    var managerNames = [ "Kaori", "Maya", "Mari", "Aya", "Hiroki", "Aileen", "Sayaka", "Rie", "Hisami", "Seung-yeon", "Kumiko", "Sanae", "Manami", "Yume", "Risa", "Hitomi", "Chinami", "Sophia", "Sayuri", "Ayano", "Haruka", "Ayaka" ];

    
    
    for(i=0;i<managerNames.length; i++){
        var mailNaiyou = `Hello ${managerNames[i]},<br><br>

I hope all is well. This is just a friendly reminder that the due date for the monthly e-mail is today.<br><br>

If you have any questions, please do not hesitate to e-mail me at [aburdick@servcorp.co.jp]. Or you can always call me at *905 8139.<br><br>

Thank you,<br><br>


===================<br><br>`;
        console.log(mailNaiyou);
        var y = $(".mails").html();
        $(".mails").html(y+=mailNaiyou);
    };