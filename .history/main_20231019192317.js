
const user=prompt("Ваш рік народження?",0);
alert(user);
const value="Київ, Вашингтон, Лондон";
const userAdress=prompt("В якому місті живете?","Київ, Вашингтон, Лондон");
if (value) {
    alert('Ви живете в столиці.'+ userAdress );
}
  else if( !"Київ, Вашингтон, Лондон"){
    alert('Ви живете в місті.' + userAdress);
  }

const userSport=prompt("Ваш улюблений від спорту?",0);
alert(userSport);
const userChampion=prompt("Виберить один із ціх видів спорту:бокс,волейбол,тенисіст");
if ('бокс'){
    alert('Круто ! Ти хочешь стати Александр  Усик?');
}
    else if('волейбол'){
        alert('Круто ! Ти хочешь стати Дмитро Мусєрский ?');
}
    else if('тенисіст'){
        alert('Круто! Ти хочешь стати Джимми Коннорсу?');
    }