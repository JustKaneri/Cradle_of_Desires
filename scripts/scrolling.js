const NavPanel = document.getElementsByClassName('nav-panel')[0];
const ItemLink = document.getElementsByClassName('item__link');

const ArrayPoint = ['main-page','title-discript','title-projects','title-skills'];

window.addEventListener('scroll', function(){

      if(pageYOffset > 20){

        for(var i = 0; i <4 ;i++){
          ItemLink[i].classList.add('item__link-scroll');
        }
        
        NavPanel.classList.add('nav-panel-scroll');
      }
      else
      {
        NavPanel.classList.remove('nav-panel-scroll');

        for(var i = 0; i <4 ;i++){
          ItemLink[i].classList.remove('item__link-scroll');
        }
      }

});

ItemLink[0].onclick = function(){

    doScrolling(GetCoordinateY(0),500);
}

ItemLink[1].onclick = function(){

    doScrolling(GetCoordinateY(1),500);
}
ItemLink[2].onclick = function(){

    doScrolling(GetCoordinateY(2),500);
}

ItemLink[3].onclick = function(){

    doScrolling(GetCoordinateY(3),600);
}

function GetCoordinateY(index){

    var element = document.getElementsByClassName(ArrayPoint[index])[0];
    var rect = element.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var elemRect = element.getBoundingClientRect();
    var offset   = elemRect.top - bodyRect.top;

    return offset;
}


function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset;//Текущее растояние от верха страницы
  var diff = elementY - startingY;//разница между ТП и НП
  var start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp; //Если старт не указан то устанавливаем его на 0

    var time = timestamp - start; //Получаем время анимации

    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent); // само пермещение

    if (time < duration) {
      window.requestAnimationFrame(step);//добавление кадра анимации
    }
  })

}