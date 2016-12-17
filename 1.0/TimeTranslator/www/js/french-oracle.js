function getTranslation(num)
{
    var res = "";
    var frenchMap = new Map();
           
    /*French numbers*/  frenchMap.set(0,"zéro");frenchMap.set(1,"Une");frenchMap.set(2,"Deux");frenchMap.set(3,"Trois");frenchMap.set(4,"Quatre");frenchMap.set(5,"Cinq");frenchMap.set(6,"Six");frenchMap.set(7,"Sept");frenchMap.set(8,"Huit");frenchMap.set(9,"Neuf");frenchMap.set(10,"Dix");frenchMap.set(11,"Onze");frenchMap.set(12,"Douze");frenchMap.set(13,"Treize");frenchMap.set(14,"Quatorze");frenchMap.set(15,"Quinze");frenchMap.set(16,"Seize");frenchMap.set(17,"Dix-sept");frenchMap.set(18,"Dix-huit");frenchMap.set(19,"Dix-neuf");frenchMap.set(20,"Vingt");frenchMap.set(21,"Vingt et un");frenchMap.set(22,"Vingt-deux");frenchMap.set(23,"Vingt-trois");frenchMap.set(24,"Vingt-quatre");frenchMap.set(25,"Vingt-cinq");frenchMap.set(26,"Vingt-six");frenchMap.set(27,"Vingt-sept");frenchMap.set(28,"Vingt-huit");frenchMap.set(29,"Vingt-neuf");frenchMap.set(30,"Trente");frenchMap.set(31,"Trente et un");frenchMap.set(32,"Trente-deux");frenchMap.set(33,"Trente-trois");frenchMap.set(34,"Trente-quatre");frenchMap.set(35,"Trente-cinq");frenchMap.set(36,"Trente-six");frenchMap.set(37,"Trente-sept");frenchMap.set(38,"Trente-huit");frenchMap.set(39,"Trente-neuf");frenchMap.set(40,"Quarante");frenchMap.set(41,"Quarante et un");frenchMap.set(42,"Quarante-deux");frenchMap.set(43,"Quarante-trois");frenchMap.set(44,"Quarante-quatre");frenchMap.set(45,"Quarante-cinq");frenchMap.set(46,"Quarante-six");frenchMap.set(47,"Quarante-sept");frenchMap.set(48,"Quarante-huit");	frenchMap.set(49,"Quarante-neuf");	frenchMap.set(50,"Cinquante");frenchMap.set(51,"Cinquante et un");frenchMap.set(52,"Cinquante-deux");frenchMap.set(53,"Cinquante-trois");frenchMap.set(54,"Cinquante-quatre");frenchMap.set(55,"Cinquante-cinq");frenchMap.set(56,"Cinquante-six");frenchMap.set(57,"Cinquante-sept");frenchMap.set(58,"Cinquante-huit");frenchMap.set(59,"Cinquante-neuf");
            
    res = frenchMap.get(num);
    return res;
}
        
function doFrench()
{
    var date = new Date();
    var H = date.getHours();
    var M = date.getMinutes();
    var S = date.getSeconds;
    var text = "";
    var timeOfDay = "";
    if(H==12 && M==00){ text="Il Est Midi"; }
    else if(H==12 && M==15){ text="Il Est Midi Et Quatre"; }
    else if(H==12 && M==30){ text="Il Est Midi Et Demie"; }
    else if(H==12 && M<30){ text="Il Est Midi Et " +getTranslation(M); }
    else if(H==11 && M==45){ text="Il Est Midi Moins Quatre"; }
    else if(H==11 && M>30 ){ text="Il Est Midi Moins "+getTranslation(60-M); }
                
    else if(H==00 && M==00){ text="Il Est Minuit"; }
    else if(H==00 && M==15){ text="Il Est Minuit Et Quatre"; }
    else if(H==00 && M==30){ text="Il Est Minuit Et Demie"; }
    else if(H==00 && M<30){ text="Il Est Minuit Et " +getTranslation(M); }
    else if(H==23 && M==45){ text="Il Est Minuit Moins Quatre"; }
    else if(H==23 && M>30 ){ text="Il Est Minuit Moins "+getTranslation(60-M); }
                
    else if(M==00){ text="Il Est "+getTranslation(H)+" Heures"; }
    else if(M==15){ text="Il Est "+getTranslation(H)+" Heures Et Quatre"; }
    else if(M==30){ text="Il Est "+getTranslation(H)+" Heures Et Demie"; }
    else if(M==45){ text="Il Est "+getTranslation(H+1)+" Heures Moins Quatre"; }
    else if(M<30){ text="Il Est "+getTranslation(H)+" Heures Et "+getTranslation(M); }
    else if(M>30){ text="Il Est "+getTranslation(H+1)+" Heures Moins "+getTranslation(60-M); }
        
    if(H>=00 && H<=3) { timeOfDay="Minuit"; }
    else if(H>3 && H<12) { timeOfDay="Le Matin"; }
    else if(H==12) { timeOfDay="Midi"; }
    else if(H>12 && H<=17) { timeOfDay="L'après-Midi"; }
    else if(H>17 && H<=19) { timeOfDay="Le Soir"; }
    else if(H>19 && H<=23) { timeOfDay="La Nuit"; }
    var res = [text,timeOfDay];
    return res;
}