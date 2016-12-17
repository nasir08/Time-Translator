//obsolete file
class dictionary
{
    constructor(lang)
    {
        this.lang = lang;
    }
        
    
    getTranslation(num)
    {
        var res = "";
        if(this.lang == "french")
        {
            var frenchMap = new Map();
           
           /*French numbers*/  frenchMap.set(0,"zéro");frenchMap.set(1,"Une");frenchMap.set(2,"Deux");frenchMap.set(3,"Trois");frenchMap.set(4,"Quatre");frenchMap.set(5,"Cinq");frenchMap.set(6,"Six");frenchMap.set(7,"Sept");frenchMap.set(8,"Huit");frenchMap.set(9,"Neuf");frenchMap.set(10,"Dix");frenchMap.set(11,"Onze");frenchMap.set(12,"Douze");frenchMap.set(13,"Treize");frenchMap.set(14,"Quatorze");frenchMap.set(15,"Quinze");frenchMap.set(16,"Seize");frenchMap.set(17,"Dix-sept");frenchMap.set(18,"Dix-huit");frenchMap.set(19,"Dix-neuf");frenchMap.set(20,"Vingt");frenchMap.set(21,"Vingt et un");frenchMap.set(22,"Vingt-deux");frenchMap.set(23,"Vingt-trois");frenchMap.set(24,"Vingt-quatre");frenchMap.set(25,"Vingt-cinq");frenchMap.set(26,"Vingt-six");frenchMap.set(27,"Vingt-sept");frenchMap.set(28,"Vingt-huit");frenchMap.set(29,"Vingt-neuf");frenchMap.set(30,"Trente");frenchMap.set(31,"Trente et un");frenchMap.set(32,"Trente-deux");frenchMap.set(33,"Trente-trois");frenchMap.set(34,"Trente-quatre");frenchMap.set(35,"Trente-cinq");frenchMap.set(36,"Trente-six");frenchMap.set(37,"Trente-sept");frenchMap.set(38,"Trente-huit");frenchMap.set(39,"Trente-neuf");frenchMap.set(40,"Quarante");frenchMap.set(41,"Quarante et un");frenchMap.set(42,"Quarante-deux");frenchMap.set(43,"Quarante-trois");frenchMap.set(44,"Quarante-quatre");frenchMap.set(45,"Quarante-cinq");frenchMap.set(46,"Quarante-six");frenchMap.set(47,"Quarante-sept");frenchMap.set(48,"Quarante-huit");	frenchMap.set(49,"Quarante-neuf");	frenchMap.set(50,"Cinquante");frenchMap.set(51,"Cinquante et un");frenchMap.set(52,"Cinquante-deux");frenchMap.set(53,"Cinquante-trois");frenchMap.set(54,"Cinquante-quatre");frenchMap.set(55,"Cinquante-cinq");frenchMap.set(56,"Cinquante-six");frenchMap.set(57,"Cinquante-sept");frenchMap.set(58,"Cinquante-huit");frenchMap.set(59,"Cinquante-neuf");
            
            res = frenchMap.get(num);
        }
        
        else if(this.lang == "yoruba")
        {
            var yorubaMap = new Map();
            
            /*Yoruba numbers*/
            yorubaMap.set(1,"Kan");yorubaMap.set(2,"Méjì");yorubaMap.set(3,"Mẹ́ta");yorubaMap.set(4,"Mẹ́rin");yorubaMap.set(5,"Márùn");yorubaMap.set(6,"Mẹ́fà");                  yorubaMap.set(7,"Méje");             yorubaMap.set(8,"Mẹ́jọ");yorubaMap.set(9,"Mẹ́sán");yorubaMap.set(10,"Mẹ́wà");yorubaMap.set(11,"Mọ̀kànlá");yorubaMap.set(12,"Méjìlá");yorubaMap.set(13,"Mẹ́tàlá");yorubaMap.set(14,"Mẹ́rìnlá");yorubaMap.set(15,"Màrúndínlógún");yorubaMap.set(16,"Mẹ́rìndínlógún");yorubaMap.set(17,"Mẹ́tàdínlógún");yorubaMap.set(18,"Méjìdínlógún");   yorubaMap.set(19,"Mọ́kàndínlógún");yorubaMap.set(20,"Ogún");yorubaMap.set(21,"Mọ́kànlélógún");yorubaMap.set(22,"Méjìlélógún");yorubaMap.set(23,"Mẹ́tàlélógún");yorubaMap.set(24,"Mẹ́rìnlélógún");yorubaMap.set(25,"Márùndínlọ́gbọ̀n");yorubaMap.set(26,"Mẹ́rìndínlọ́gbọ̀n");yorubaMap.set(27,"Mẹ́tàdínlọ́gbọ̀n");yorubaMap.set(28,"Méjídínlọ́gbọ̀n");yorubaMap.set(29,"Mọ́kàndínlọ́gbọ̀n");yorubaMap.set(30,"ọgbọ̀n");yorubaMap.set(31,"Mọ́kànlélọ́gbọ̀n");yorubaMap.set(32,"Méjílélọ́gbọ̀n");yorubaMap.set(33,"Mẹ́tàlélọ́gbọ̀n");yorubaMap.set(34,"Mẹ́rìnlélọ́gbọ̀n");yorubaMap.set(35,"Márùndínlógójì");yorubaMap.set(36,"Mẹ́rìndínlógójì");yorubaMap.set(37,"Mẹ́tàdínlógójì");yorubaMap.set(38,"Méjídínlógójì");yorubaMap.set(39,"Mọ́kàndínlógójì");yorubaMap.set(40,"Ogójì");yorubaMap.set(41,"Mọ́kànlélógójì");yorubaMap.set(42,"Méjílélógójì");yorubaMap.set(43,"Mẹ́tàlélógójì");yorubaMap.set(44,"Mẹ́rìnlélógójì");yorubaMap.set(45,"Márùndínláàdọ́ta");yorubaMap.set(46,"Mẹ́rìndínláàdọ́ta");yorubaMap.set(47,"Mẹ́tàdínláàdọ́ta");yorubaMap.set(48,"Méjídínláàdọ́ta");yorubaMap.set(49,"Mọ́kàndínláàdọ́ta");yorubaMap.set(50,"Àádọ́ta");yorubaMap.set(51,"Mọ́kànléláàdọ́ta");yorubaMap.set(52,"Méjílélógójì");yorubaMap.set(53,"Mẹ́tàlélógójì");yorubaMap.set(54,"Mẹ́rìnlélógójì");yorubaMap.set(55,"Márùndínlọ́gọ́ta");yorubaMap.set(56,"Mẹ́rìndínllọ́gọ́ta");yorubaMap.set(57,"Mẹ́tàdínllọ́gọ́ta");yorubaMap.set(58,"Méjídínllọ́gọ́ta");yorubaMap.set(59,"Mọ́kàndínlọ́gọ́ta");
            
            res = yorubaMap.get(num);
        }
        
        else if(this.lang == "english")
        {
            var englishMap = new Map();
            
            /*Yoruba numbers*/
            englishMap.set(1,"One");
            englishMap.set(2,"Two");englishMap.set(3,"Three");englishMap.set(4,"Four");englishMap.set(5,"Five");englishMap.set(6,"Six");englishMap.set(7,"Seven");englishMap.set(8,"Eight");englishMap.set(9,"Nine");englishMap.set(10,"Ten");englishMap.set(11,"Eleven");englishMap.set(12,"Twelve");englishMap.set(13,"Thirteen");englishMap.set(14,"Fourteen");englishMap.set(15,"Fifteen");englishMap.set(16,"Sixteen");englishMap.set(17,"Seventeen");englishMap.set(18,"Eighteen");englishMap.set(19,"Nineteen");englishMap.set(20,"Twenty");englishMap.set(21,"Twenty-one");englishMap.set(22,"Twenty-two");englishMap.set(23,"Twenty-three");englishMap.set(24,"Twenty-four");englishMap.set(25,"Twenty-five");englishMap.set(26,"Twenty-six");englishMap.set(27,"Twenty-seven");englishMap.set(28,"Twenty-eight");englishMap.set(29,"Twenty-nine");englishMap.set(30,"Thirty");englishMap.set(31,"Thirty-one");englishMap.set(32,"Thirty-two");englishMap.set(33,"Thirty-thre");englishMap.set(34,"Thirty-four");englishMap.set(35,"Thirty-five");englishMap.set(36,"Thirty-six");englishMap.set(37,"Thirty-seven");englishMap.set(38,"Thirty-eigth");englishMap.set(39,"Thirty-nine");englishMap.set(40,"Forty");englishMap.set(41,"Forty-one");englishMap.set(42,"Forty-two");englishMap.set(43,"Forty-three");englishMap.set(44,"Forty-four");englishMap.set(45,"Forty-five");englishMap.set(46,"Forty-six");englishMap.set(47,"Forty-seven");englishMap.set(48,"Forty-eigth");englishMap.set(49,"Forty-nine");englishMap.set(50,"Fifty");englishMap.set(51,"Fifty-one");englishMap.set(52,"Fifty-two");englishMap.set(53,"Fifty-three");englishMap.set(54,"Fifty-four");englishMap.set(55,"Fifty-five");englishMap.set(56,"Fifty-six");englishMap.set(57,"Fifty-seven");englishMap.set(58,"Fifty-eigth");englishMap.set(59,"Fifty-nine");
            
            res = englishMap.get(num);
        }
        return res;
    }
}