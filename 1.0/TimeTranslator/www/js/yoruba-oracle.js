function getTranslation(num)
{
        var res = "";
        var yorubaMap = new Map();
            
        /*Yoruba numbers*/
         yorubaMap.set(1,"Kan");yorubaMap.set(2,"Méjì");yorubaMap.set(3,"Mẹ́ta");yorubaMap.set(4,"Mẹ́rin");yorubaMap.set(5,"Márùn");yorubaMap.set(6,"Mẹ́fà");                  yorubaMap.set(7,"Méje");             yorubaMap.set(8,"Mẹ́jọ");yorubaMap.set(9,"Mẹ́sán");yorubaMap.set(10,"Mẹ́wà");yorubaMap.set(11,"Mọ̀kànlá");yorubaMap.set(12,"Méjìlá");yorubaMap.set(13,"Mẹ́tàlá");yorubaMap.set(14,"Mẹ́rìnlá");yorubaMap.set(15,"Màrúndínlógún");yorubaMap.set(16,"Mẹ́rìndínlógún");yorubaMap.set(17,"Mẹ́tàdínlógún");yorubaMap.set(18,"Méjìdínlógún");   yorubaMap.set(19,"Mọ́kàndínlógún");yorubaMap.set(20,"Ogún");yorubaMap.set(21,"Mọ́kànlélógún");yorubaMap.set(22,"Méjìlélógún");yorubaMap.set(23,"Mẹ́tàlélógún");yorubaMap.set(24,"Mẹ́rìnlélógún");yorubaMap.set(25,"Márùndínlọ́gbọ̀n");yorubaMap.set(26,"Mẹ́rìndínlọ́gbọ̀n");yorubaMap.set(27,"Mẹ́tàdínlọ́gbọ̀n");yorubaMap.set(28,"Méjídínlọ́gbọ̀n");yorubaMap.set(29,"Mọ́kàndínlọ́gbọ̀n");yorubaMap.set(30,"ọgbọ̀n");yorubaMap.set(31,"Mọ́kànlélọ́gbọ̀n");yorubaMap.set(32,"Méjílélọ́gbọ̀n");yorubaMap.set(33,"Mẹ́tàlélọ́gbọ̀n");yorubaMap.set(34,"Mẹ́rìnlélọ́gbọ̀n");yorubaMap.set(35,"Márùndínlógójì");yorubaMap.set(36,"Mẹ́rìndínlógójì");yorubaMap.set(37,"Mẹ́tàdínlógójì");yorubaMap.set(38,"Méjídínlógójì");yorubaMap.set(39,"Mọ́kàndínlógójì");yorubaMap.set(40,"Ogójì");yorubaMap.set(41,"Mọ́kànlélógójì");yorubaMap.set(42,"Méjílélógójì");yorubaMap.set(43,"Mẹ́tàlélógójì");yorubaMap.set(44,"Mẹ́rìnlélógójì");yorubaMap.set(45,"Márùndínláàdọ́ta");yorubaMap.set(46,"Mẹ́rìndínláàdọ́ta");yorubaMap.set(47,"Mẹ́tàdínláàdọ́ta");yorubaMap.set(48,"Méjídínláàdọ́ta");yorubaMap.set(49,"Mọ́kàndínláàdọ́ta");yorubaMap.set(50,"Àádọ́ta");yorubaMap.set(51,"Mọ́kànléláàdọ́ta");yorubaMap.set(52,"Méjílélógójì");yorubaMap.set(53,"Mẹ́tàlélógójì");yorubaMap.set(54,"Mẹ́rìnlélógójì");yorubaMap.set(55,"Márùndínlọ́gọ́ta");yorubaMap.set(56,"Mẹ́rìndínllọ́gọ́ta");yorubaMap.set(57,"Mẹ́tàdínllọ́gọ́ta");yorubaMap.set(58,"Méjídínllọ́gọ́ta");yorubaMap.set(59,"Mọ́kàndínlọ́gọ́ta");
            
        res = yorubaMap.get(num);
        return res;
}

function doYoruba()
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
        
    if(M==00){ text="Aago "+getTranslation(newH); }
    else if(M==30){ text="Aago "+getTranslation(newH)+" Àti Ààbò"; }
    else if(M<30){ text="Aago "+getTranslation(newH)+" Kojá Ìṣéjú "+getTranslation(M); }
    else if(M>30){ text="Aago "+getTranslation(newH+1)+" Kù Ìṣéjú "+getTranslation(60-M); }
        
    if(H>=00 && H<=3) { timeOfDay="Òru"; }
    else if(H>3 && H<12) { timeOfDay="Òwúrò"; }
    else if(H>=12 && H<17) { timeOfDay="Òsán"; }
    else if(H>=17 && H<=19) { timeOfDay="Ìròlé"; }
    else if(H>19 && H<=23) { timeOfDay="Alé"; }
    var res = [text,timeOfDay];
    return res;
}