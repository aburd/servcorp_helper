// reverses strings
function reverseString(s){
	var o = "";
	s = s.split('').reverse();
	for(var i=0;i<s.length;i++){
		o += s[i];
	}

	return o;
}

// checks that the string has commas
function check(stringName){
    var msg = true;
    if(typeof stringName != "string"){
        stringName = String(stringName);
    } 

    var theString = stringName.split('');
    for(var i=0;i<theString.length;i++){
        if(theString[i]===","){
            msg = false;
        }
    }

    return msg;
}

// adds commas if they are not there
function addComma(number){
	var numberWithCommas = "";
	
	if ( typeof number != "string" ){ number = String(number); }
	
	number = reverseString(number);
	
	for ( var i=0; i < number.length ; i++ ){
		if( i%3===0 && i!=0 ){
			numberWithCommas += ("," + number[i]);
		} else {
			numberWithCommas += number[i];
		}
	}

	return reverseString(numberWithCommas);
}