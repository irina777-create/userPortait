
const user=prompt("Ваш рік народження?",0);
alert(user);
const userAdress=prompt("В якому місті живете?","Київ, Вашингтон, Лондон",0);
  switch(userAdress){
    case "1":
        alert('Ви живете в столиці' + userAdress );
        break;
    case "2":
        alert('Ви живете в місті' + userAdress);
        break;

  }

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