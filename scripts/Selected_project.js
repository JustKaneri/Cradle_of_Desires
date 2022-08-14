const NameProjectArray = ['Bookshelf',
						 'Random Wallpaper',
						 'Manga Parser',
						 'DBMS Hotel',
						 '2048'];

const LinkProjectArray = ['https://github.com/JustKaneri/Bookshelf',
						 'https://github.com/JustKaneri/RandomWallpaper',
						 'https://github.com/JustKaneri/MangaParser',
						 'https://github.com/JustKaneri/Hotel',
						 'https://github.com/JustKaneri/Web_2048'];


const ImageNameArray = ['Bookshelf.svg',
					   'RandomWallpaper.svg',
					   'MangaParser.svg',
					   'Hotel.svg',
					   '2048.svg'];

const BtnNex = document.getElementById('next-option');
const BtnPrevios = document.getElementById('previous-option');

const ProjectImage = document.getElementsByClassName('image')[0];
const ProjectName = document.getElementsByClassName('project__link')[0];

var Index = 0;

PreLoadImage();

BtnNex.onclick = function(){

	BtnNex.disabled = true;
	BtnPrevios.disabled = true;
	
	Index++;

	if(Index >= NameProjectArray.length){
		Index = 0;
	}

	ProjectName.classList.add("animation_text");
	ProjectImage.classList.add('anim_next_image');
	document.documentElement.style.setProperty("--image", "linear-gradient(0deg, rgba(11, 9, 23, 0.6) 0.64%, rgba(36, 32, 82, 0.6) 100%),url(../images/Projects/"+ImageNameArray[Index]+")  center center / cover no-repeat ");	

	setTimeout(() => {

		ProjectName.innerHTML = NameProjectArray[Index];
    	ProjectName.href = LinkProjectArray[Index];
		ProjectImage.style.background = "linear-gradient(0deg, rgba(11, 9, 23, 0.6) 0.64%, rgba(36, 32, 82, 0.6) 100%),url(./images/Projects/"+ImageNameArray[Index]+")  center center / cover no-repeat ";
	
	},340);

	setTimeout(() => {

    	ProjectName.innerHTML = NameProjectArray[Index];
    	ProjectName.href = LinkProjectArray[Index];
    	ProjectName.classList.remove("animation_text");
    	ProjectImage.classList.remove('anim_next_image');

    	//document.documentElement.style.setProperty("--image",'');

    	BtnNex.disabled = false;
		BtnPrevios.disabled = false;
    	

  	}, 650);
}

BtnPrevios.onclick = function(){

	BtnNex.disabled = true;
	BtnPrevios.disabled = true;


	Index--;

	if(Index < 0){
		Index = NameProjectArray.length-1;
	}

	ProjectName.classList.add("animation_text");
	ProjectImage.classList.add('anim_previous_image');
	document.documentElement.style.setProperty("--image", "linear-gradient(0deg, rgba(11, 9, 23, 0.6) 0.64%, rgba(36, 32, 82, 0.6) 100%),url(../images/Projects/"+ImageNameArray[Index]+")  center center / cover no-repeat ");	

	setTimeout(() => {
		
		ProjectName.innerHTML = NameProjectArray[Index];
    	ProjectName.href = LinkProjectArray[Index];
		ProjectImage.style.background = "linear-gradient(0deg, rgba(11, 9, 23, 0.6) 0.64%, rgba(36, 32, 82, 0.6) 100%),url(./images/Projects/"+ImageNameArray[Index]+")  center center / cover no-repeat ";
	
	},340);

	setTimeout(() => {

    	ProjectName.innerHTML = NameProjectArray[Index];
    	ProjectName.href = LinkProjectArray[Index];
    	ProjectName.classList.remove("animation_text");
    	ProjectImage.classList.remove('anim_previous_image');

    	//document.documentElement.style.setProperty("--image",'');

    	BtnNex.disabled = false;
		BtnPrevios.disabled = false;

  	}, 650);
}


function PreLoadImage(){

	for(var i = 0; i < NameProjectArray.length; i++){
		ProjectImage.style.background = "linear-gradient(0deg, rgba(11, 9, 23, 0.6) 0.64%, rgba(36, 32, 82, 0.6) 100%),url(./images/Projects/"+ImageNameArray[i]+")  center center / cover no-repeat ";
	}

	ProjectImage.style.background = "linear-gradient(0deg, rgba(11, 9, 23, 0.6) 0.64%, rgba(36, 32, 82, 0.6) 100%),url(./images/Projects/"+ImageNameArray[0]+")  center center / cover no-repeat ";
}