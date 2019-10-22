"use strict";
var auth = auth || {}
auth = (()=>{
	const WHEN_ERR ="호출하는 js를 찾지 못 했습니다."
	let _,js,auth_vuejs;
	let init =()=>{
		_=$.ctx()
		js=$.js()
		auth_vuejs = js +'/vue/auth_vue.js';
	}
	let onCreate=()=>{
		init()
		$.getScript(auth_vuejs).done(()=>{
			setContentView()
			$('a_go_join').click(e=>{
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
				text : 'JOIN' , 
				href : '#',
				click : e=>{
					e.preventDefault()
					let data = {
						cid : $().val(),
						cpw : $().val(),
						cname: $().val()
					}
					$.ajax({
						url:_+'/hcust/joiin',
						type : 'POST',
						dataType:'json',
						data : JSON.stringify(data),
						contentType : 'application/json',
						success : d =>{},
						error : e =>{
							
						}
					})
					
					
					
				}
		})
		
		
	}
	
	
	
})()