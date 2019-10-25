"use strict";
var auth = auth || {}

auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _,js,auth_vuejs,brd_vuejs,brd_js, router_js;
	let init = ()=>{
		_=$.ctx();
		js=$.js();
		auth_vuejs = js+'/vue/auth_vue.js';
		brd_vuejs= js+'/vue/brd_vue.js';
		brd_js= js+'/brd/brd.js';
		router_js = js + '/cmm/router.js';
	} 
	let onCreate =()=>{
		init();
		$.getScript(auth_vuejs).done(()=>{
        	setContentView()
    		$('#a_go_join').click(e=>{
         		e.preventDefault()
					$('head').html(auth_vue.join_head())
					$('body').html(auth_vue.join_body())
					$('#cid').keyup(()=>{
							if($('#cid').val().length > 2){
								$.ajax({
									url : _+'/hcusts/'+$('#cid').val()+'/exist', 
									contentType : 'application/json',
									success : d =>{
										if (d.msg==='SUCCESS') {
											$('#dupl_check').val('사용가능한 ID 입니다').css('color','green');
										}else{
											$('#dupl_check').val('사용불가능한 ID입니다.').css('color','red');	
										}
									},
									error : e =>{
										alert('error' )
										return 'false';
									}
								})  
							}
						});
									
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
		$('head').html(auth_vue.login_head( {css : $.css(), img : $.img(), js:$.js() }))
		$('body')
		.addClass('text-center')
		.html(auth_vue.login_body( {css : $.css(), img : $.img(), js:$.js() }))
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
							$('head').html(auth_vue.login_head( {css : $.css(), img : $.img(), js:$.js() }))
							$('body')
							.addClass('text-center')
							.html(auth_vue.login_body( {css : $.css(), img : $.img(), js:$.js() }))
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
				if (d.msg==='SUCCESS') {
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
							$.when(
									$.getScript(brd_js),		
									$.getScript(router_js )	
							).done(()=>{
								$.extend(new User(d));
								brd.onCreate()
							})
							alert(d.cid + '님 환영합니다.');
						},
						error : e =>{
							alert('아이디와 비밀번호가 맞지 않습니다.' )
						}
					})    
			}
		})
		.addClass('btn btn-lg btn-primary btn-block')
		.appendTo('#btn_login')		
	}
	
	return {onCreate, join, login }
})();





