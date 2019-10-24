"use strict";
var auth = auth || {}

auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _,js,auth_vuejs,brd_vuejs;
	let init = ()=>{
		_=$.ctx();
		js=$.js();
		auth_vuejs = js+'/vue/auth_vue.js';
		brd_vuejs= js+'/vue/brd_vue.js';
	} 
	let onCreate =()=>{
		init();
		$.getScript(auth_vuejs).done(()=>{
        	setContentView()
    		$('#a_go_join').click(e=>{
         		e.preventDefault()
					$('head').html(auth_vue.join_head())
					$('body').html(auth_vue.join_body())
					$('<button>',{
							text : 'Continue to checkout' , 
							href: '#' ,
							click : e=>{
				         		e.preventDefault()
								let data = { 
										cid :  $('#cid').val() ,
										cpw : $('#cpw').val(),
										cname : $('#cname').val()
								}
				         		existId(data)
							} 
						})
						.addClass('btn btn-primary btn-lg btn-block')
						.appendTo('#btn_join')       		
    		})
        }).fail(()=>{alert(WHEN_ERR)})
	}
	
	let setContentView = ()=>{
		login()
	}
	
	let join = data=>{
				$.ajax({
					url : _+'/hcusts/', 
					type : 'POST',
					dataType : 'json',
					data: JSON.stringify(data) , 
					contentType : 'application/json',
					success : d =>{
						alert('회원가입  ' + d.msg)
						if (d.msg==='SUCCESS') 
							login()
					},
					error : e =>{
						alert('AJAX실패' )
					}
				})    
	}	
	
	let existId = data =>{
		$.ajax({
			url : _+'/hcusts/'+data.cid +'/exist', 
			type : 'GET',
			contentType : 'application/json',
			success : d =>{
				if (d==='SUCCESS') {
					alert('없는 아이디 입니다 ' + d);
					join(data)
					return true;
				}else{
					alert('있는 아이디 입니다.');	
				return false;
				}
			},
			error : e =>{
				alert('error' )
				return 'false';
			}
		})    
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
						url : _+'/hcusts/'+data.cid, 
						type : 'POST',
						dataType : 'json',
						data: JSON.stringify(data) , 
						contentType : 'application/json',
						success : d =>{
								alert(d.cid + '님 환영합니다.')
								brd_home(d)
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
	
	
	
	let brd_home = d=>{
		let x = {css : $.css(), img : $.img(), js:$.js(), resultData: d}
		$.getScript(brd_vuejs).done(()=>{
			$('head').html(brd_vue.brd_head(x))
			$('body').html(brd_vue.brd_body(x))
		}).fail(()=>{
			
		})

	}
	
	return {onCreate, join, login,brd_home}
})();





