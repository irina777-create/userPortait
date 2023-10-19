
const user=prompt("Ваш рік народження?",0);
alert(user);
const userAdress=prompt("В якому місті живете?","Київ, Вашингтон, Лондон");
if ('Київ '||'Вашингтон'||'Лондон') {
    console.log('Ви живете в столиці.'+userAdress );
}
  else {
    console.log('Ви живете в місті.' + userAdress);
  }

const userSport=prompt("Ваш улюблений від спорту?",0);
alert(userSport);
const fuse = 'userChampion';
const userChampion=prompt("Виберить один із ціх видів спорту:легка атлетіка,бокс,фигурне катаня");
alert(userChampion);