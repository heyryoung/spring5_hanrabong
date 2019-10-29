"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js', x + '/resources/js');
	sessionStorage.setItem('css', x + '/resources/css');
	sessionStorage.setItem('img', x + '/resources/img');
	return{
		ctx : () =>{return sessionStorage.getItem('ctx');},
		js : () =>{return sessionStorage.getItem('js');},
		css : () =>{return sessionStorage.getItem('css');},
		img  : () =>{return sessionStorage.getItem('img');}
	}
}

function User(d){
	sessionStorage.setItem('cname',d.cname);
	sessionStorage.setItem('cid',d.cid);
	sessionStorage.setItem('cnum',d.cnum);
	return{
		cname : () =>{return sessionStorage.getItem('cname');},
		cid : () =>{return sessionStorage.getItem('cid');},
		cnum : () =>{return sessionStorage.getItem('cnum');}
	}
}



