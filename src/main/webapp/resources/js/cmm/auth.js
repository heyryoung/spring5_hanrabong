"use strict";
var auth = auth || {}

auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _,js,auth_vuejs;
	let init = ()=>{
		_=$.ctx();
		js=$.js();
		auth_vuejs = js+'/vue/auth_vue.js';
	} 
	let onCreate =()=>{
		init();
		$.getScript(auth_vuejs).done(()=>{
        	setContentView()
    		$('#a_go_join').click(e=>{
         		e.preventDefault()
         		join()
    		})
        }).fail(()=>{alert(WHEN_ERR)})
	}
	
	let setContentView = ()=>{
		login()
	}
	
	let join = ()=>{
				$.getScript(auth_vuejs)
					$('head').html(auth_vue.join_head())
					$('body').html(auth_vue.join_body())
					$('<button>',{
							text : 'Continue to checkout' , 
							href: '#' ,
							click : e=>{
								e.preventDefault();
								let data = { 
										cid :  $('#cid').val() ,
										cpw : $('#cpw').val(),
										cname : $('#cname').val()
								}
								$.ajax({
									url : _+'/hcusts/', 
									type : 'POST',
									dataType : 'json',
									data: JSON.stringify(data) , 
									contentType : 'application/json',
									success : d =>{
										alert(d.cid + '님 환영합니다.')
										login()
									},
									error : e =>{
										alert('AJAX실패' + url)
									}
								})    
							} 
						})
						.addClass('btn btn-primary btn-lg btn-block')
						.appendTo('#btn_join')
	}	
	
	let login = ()=>{

		let x = {css : $.css(), img : $.img(), js:$.js() }
		$('head').html(auth_vue.login_head(x))
		$('body')
		.addClass('text-center')
		.html(auth_vue.login_body(x))
		$('<button>',{
			type: "submit",
			text : "Log In",
			click: 	e=>{									
					e.preventDefault()
					let data = { cid :  $('#cid').val() ,
							cpw : $('#cpw').val()}
					$.ajax({
						url : _+'/hcusts/login', 
						type : 'POST',
						dataType : 'json',
						data: JSON.stringify(data) , 
						contentType : 'application/json',
						success : d =>{
								alert(d.cid + '님 환영합니다.')
								mypage(d)
						},
						error : e =>{
							alert('AJAX ERROR' )
						}
					})    
			}
		})
		.addClass('btn btn-lg btn-primary btn-block')
		.appendTo('#btn_login')		
	}
	
	let mypage = d=>{
		let x = {css : $.css(), img : $.img(), js:$.js(), resultData: d}
		$('head').html(auth_vue.mypage_head(x))
		$('body')
		.addClass('text-center')
		.html(auth_vue.mypage_body(x))
	}
	
	return {onCreate, join, login,mypage}
})();





