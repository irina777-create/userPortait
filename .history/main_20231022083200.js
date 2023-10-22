const user={};
const userAdress={};
userDay = prompt('Ваш рік народження?', 0);
alert(userDay);
userDay = prompt('Ваш рік народження?', '');
alert('Шкода що ви не вписали рік нарождення');

userAdress = prompt("В якому місті живете?", 'Київ, Вашингтон, Лондон');
/*switch (true) {
    case 'Київ':
        cityMessange
    case 'Вашингтон':
    case 'Лондон':
    alert(`Ти живешь у столиці`);
    break;
    default:
    alert(`Ти живешь у місті ${userCity}`)

}*/
  if(userAdress=='Київ, Вашингтон, Лондон'){
    alert('Ти живешь у столиці'+ userAdress)
  }
  else if(userAdress ==!'Київ, Вашингтон, Лондон'){
    alert('Ти живешь у місті'+ userAdress);
  }
  else()

const userSport=prompt("Ваш улюблений від спорту?",0);
alert(userSport);
const userChampion=prompt("Виберить один із ціх видів спорту:'бокс',волейбол,тенисіст","бокс,волейбол,тенисіст");
if (userChampion=='бокс'){
    alert('Круто ! Ти хочешь стати Александр  Усик?');
}
    else if(userChampion=='волейбол')
    {
        alert('Круто ! Ти хочешь стати Дмитро Мусєрский ?');
    }
    else (userChampion=='тенисіст')
    {
        alert('Круто! Ти хочешь стати Джимми Коннорсу?');
    }
 const userDelit=prompt("Шкода, що Ви не захотіли ввести свій(ю) " + user('рік народження') + userAdress('') + userSport + userChampion) 