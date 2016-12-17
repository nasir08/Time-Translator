function getTranslation(num)
{
        var res = "";
        var englishMap = new Map();
            
        /*Yoruba numbers*/
        englishMap.set(1,"One");
        englishMap.set(2,"Two");englishMap.set(3,"Three");englishMap.set(4,"Four");englishMap.set(5,"Five");englishMap.set(6,"Six");englishMap.set(7,"Seven");englishMap.set(8,"Eight");englishMap.set(9,"Nine");englishMap.set(10,"Ten");englishMap.set(11,"Eleven");englishMap.set(12,"Twelve");englishMap.set(13,"Thirteen");englishMap.set(14,"Fourteen");englishMap.set(15,"Fifteen");englishMap.set(16,"Sixteen");englishMap.set(17,"Seventeen");englishMap.set(18,"Eighteen");englishMap.set(19,"Nineteen");englishMap.set(20,"Twenty");englishMap.set(21,"Twenty-one");englishMap.set(22,"Twenty-two");englishMap.set(23,"Twenty-three");englishMap.set(24,"Twenty-four");englishMap.set(25,"Twenty-five");englishMap.set(26,"Twenty-six");englishMap.set(27,"Twenty-seven");englishMap.set(28,"Twenty-eight");englishMap.set(29,"Twenty-nine");englishMap.set(30,"Thirty");englishMap.set(31,"Thirty-one");englishMap.set(32,"Thirty-two");englishMap.set(33,"Thirty-thre");englishMap.set(34,"Thirty-four");englishMap.set(35,"Thirty-five");englishMap.set(36,"Thirty-six");englishMap.set(37,"Thirty-seven");englishMap.set(38,"Thirty-eigth");englishMap.set(39,"Thirty-nine");englishMap.set(40,"Forty");englishMap.set(41,"Forty-one");englishMap.set(42,"Forty-two");englishMap.set(43,"Forty-three");englishMap.set(44,"Forty-four");englishMap.set(45,"Forty-five");englishMap.set(46,"Forty-six");englishMap.set(47,"Forty-seven");englishMap.set(48,"Forty-eigth");englishMap.set(49,"Forty-nine");englishMap.set(50,"Fifty");englishMap.set(51,"Fifty-one");englishMap.set(52,"Fifty-two");englishMap.set(53,"Fifty-three");englishMap.set(54,"Fifty-four");englishMap.set(55,"Fifty-five");englishMap.set(56,"Fifty-six");englishMap.set(57,"Fifty-seven");englishMap.set(58,"Fifty-eigth");englishMap.set(59,"Fifty-nine");
            
        res = englishMap.get(num);
        return res;
}

function doEnglish()
{
    var date = new Date();
        var H = date.getHours();
        var M = date.getMinutes();
        var S = date.getSeconds;
        var text = "";
        var timeOfDay = "";
        var newH = 0;
        if(H>12){ newH = H-12;}
        else{ newH = H; }
        
        if(M==00){ text=getTranslation(newH)+" O'clock"; }
        else if(M==30){ text="Half Past "+getTranslation(newH); }
        else if(M==15){ text="Quater Past "+getTranslation(newH); }
        else if(M==45){ text="Quater To "+getTranslation(newH+1); }
        else if(M<30){ text=getTranslation(M)+" Minutes Past "+getTranslation(newH); }
        else if(M>30){ text=getTranslation(60-M)+" Minutes To "+getTranslation(newH+1); }
        
        if(H>=00 && H<=3) { timeOfDay="Midnight"; }
        else if(H>3 && H<12) { timeOfDay="Morning"; }
        else if(H==12) { timeOfDay="Noon"; }
        else if(H>12 && H<17) { timeOfDay="Afternoon"; }
        else if(H>=17 && H<=19) { timeOfDay="Evening"; }
        else if(H>19 && H<=23) { timeOfDay="Night"; }
    var res = [text,timeOfDay];
    return res;
}