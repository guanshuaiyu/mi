window.onload = function(){
var datu = document.getElementsByClassName('datu'),
lun = document.getElementsByClassName('lun'),
zuo= document.getElementsByClassName('iconfont3');
haha = datu[0],index=0,hehe = lun[0],kaiguan =true,
t=setInterval(function(){	
	haha.style.display = 'none';
	hehe.removeAttribute('id');
	index++;
	if (index==5) {index=0;};
	datu[index].style.display = 'block';
	lun[index].setAttribute('id','lu');
	haha = datu[index];
	hehe = lun[index];
},2000);
zuo[0].onclick = function(){
	clearInterval(t);
	kaiguan=false;
	index--;
	if (index==(-1)){index=4;};
	haha.style.display = 'none';
	hehe.removeAttribute('id');
	datu[index].style.display = 'block';
	lun[index].setAttribute('id','lu');
	haha = datu[index];
	hehe = lun[index];
};
zuo[1].onclick = function(){
	kaiguan=false;
	clearInterval(t);
	index++;
	if (index==5) {index=0;};
	haha.style.display = 'none';
	hehe.removeAttribute('id');
	datu[index].style.display = 'block';
	lun[index].setAttribute('id','lu');
	haha = datu[index];
	hehe = lun[index];
};
for (var i = 0; i < lun.length; i++) {	
	lun[i].x=i;
	lun[i].onclick = function(){
		kaiguan=false;
		haha.style.display = 'none';
		hehe.removeAttribute('id');
		this.setAttribute('id','lu');
		haha = datu[this.x];
		hehe = this;
		clearInterval(t);
		datu[this.x].style.display = 'block';
		index=(this.x ==lun.length)?0:this.x;
	};
}
for (var i = 0; i < datu.length; i++) {
	datu[i].onmouseover= function(){
		clearInterval(t);
	};
	datu[i].onmouseout= function(){
		if (kaiguan) {		
			t=setInterval(function(){	
				haha.style.display = 'none';
				hehe.removeAttribute('id');
				index++;
				if (index==5) {index=0;};
				datu[index].style.display = 'block';
				lun[index].setAttribute('id','lu');
				haha = datu[index];
				hehe = lun[index];
			},2000);
		}
	};
};


var aa = document.getElementsByTagName('a');
for (var i = 0; i < aa.length; i++) {
	aa[i].onclick = function(e){
		e.preventDefault();//阻止跳转到顶部
		return false;//阻止跳转到其他页面
	}
};




// var slides = document.getElementsByClassName('slide'),
// links=document.getElementsByClassName('ui-pager-link'),
// prev = document.getElementById('prev'),
// next = document.getElementById('next'),
// currentSlide =slides[0],
// currentlink = links[0];
// homeSlide = document.getElementById(j_homesSlide),
// kaiguan = ture,
// timeId = setInterval(fn,1000),
// fn =function(){
// 	var i = 1;
// 	var limit = slides.length;
// 	return function(){
// 		currentlink.setAttribute('class','ui-pager-link');
// 		links[i].setAttribute('class','ui-pager-link active');
// 		currentSlide = slides[i];
// 		currentSlide.setAttribute('class','slide');
// 		slides[i].setAttribute('class','slide show');
// 		currentlink = links[i];
// 		i +=1; 
// 		if (i==limit) {i=0;}
// 	};
// }();
// homeSlide.onmouseover = function(){
// 	clearInterval(timeId);
// };
// homeSlide.onmouseout = function(){
// 	if(kaiguan = true){
// 		clearInterval(timeId);
// 		timeId = setInte-rval(fn,1000);
// 	}
// };
// for (var i = 0; i < links.length; i++) {
// 	links[i].index = i;
// 	links[i].onclick = function(){
// 		clearInterval(timeId);
// 		kaiguan = false;
// 		slides[index].setAttribute('class','slide show');
// 		currentSlide.setAttribute('class','slide');
// 		currentSlide = slides[index];
// 		currentlink.setAttribute('class','ui-pager-link');
// 		this.setAttribute('class','ui-pager-link active');
// 		currentlink = this;
// 	};
// };
// next.onclick = function(){
// 	clearInterval(timeId);
// 	kaiguan = false;
// 	var next = (currentSlide.nextElementSibling)?currentSlide.nextElementSibling:slides[0];
// 	currentSlide.setAttribute('class','slide');
// 	next('class','slide show');
// 	currentSlide = next;
// 	currentlink.setAttribute('class','ui-pager-link');
// 	var nextl =(currentlink.nextElementSibling)?currentlink.nextElementSibling:links[0];
// 	nextl.setAttribute('class','ui-pager-link active');
// 	currentlink = nextl;
// };
// prev.onclick = function(){
// 	clearInterval(timeId);
// 	kaiguan = false;
// 	var prev = (currentSlide.previousElementSibling)?currentSlide.previousSibling:slides[4];
// 	currentSlide.setAttribute('class','slide');
// 	prev('class','slide show');
// 	currentSlide = prev;
// 	currentlink.setAttribute('class','ui-pager-link');
// 	var prevl =(currentlink.previousElementSibling)?currentlink.previousSibling:links[4];
// 	prevl.setAttribute('class','ui-pager-link active');
// 	currentlink =prevl;
// };


//闭包小练习
// zuo[0].onclick = (function(){
// 	var i = 0;
// 	return function(){
// 		if (i==3) {return;}
// 		console.log(1);
// 		i++;
// 	}
// })();


















};