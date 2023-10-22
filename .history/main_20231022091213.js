const user = {};
userDay = prompt('Ваш рік народження?', 0);
if (userDay == '') {
    alert('Шкода що ви не вписали рік нарождення');
}
userAdress = prompt('В якому місті живете?', 0);
if (userAdress == '') {
    alert('Шкода що ви не вписали місто де живете');
}
userSport = prompt('Який улюблений від спорту', 0);
if (userSport == '') {
    alert('Шкода що ви не вписали свій улюблений від спорту');
}
const adressMessange='';
const sportMessange='';

switch (userAdress) {
    case 'Київ':
        adressMessange=(`Ти живешь у столиці`);
    case 'Вашингтон':
        adressMessange=(`Ти живешь у столиці`);
    case 'Лондон':
        adressMessange=(`Ти живешь у столиці`);
    break;
    default:
    adressMessange=(`Ти живешь у місті ${userAdress}`)

}
switch (userSport) {
    case 'бокс':
        sportMessange=(`Круто ! Ти хочешь стати Александр  Усик?`);
    case 'волейбол':
        sportMessange=(`Круто ! Ти хочешь стати Дмитро Мусєрский ?`);
    case 'тенисіст':
        sportMessange=(`Круто! Ти хочешь стати Джимми Коннорсу?`);
    break;

}




    