"use strict"
var brd = brd || {};
brd =(()=>{
	let _,js,brd_vuejs,cname,cid,router_js;
	let init = ()=>{
		_=$.ctx();
		js=$.js();
		brd_vuejs= js+'/vue/brd_vue.js';
		cname = $.cname();
		cid = $.cid();
	}
	
	let onCreate =()=>{
		init();
		$.when(
				$.getScript(brd_vuejs)
			)
			.done(()=>{		
				setContentView()
				$('<a>',{
					href : '#',
					click : e =>{
						e.preventDefault()
						write()
					},
					text: '글쓰기'
				})
				.addClass('nav-link')
				.appendTo('#ago_write')				
				
			})
			.fail(()=>{alert(WHEN_ERR)}
			)		
			
			
	}
	
	let setContentView = ()=>{
		$('head').html(brd_vue.brd_head({css : $.css(), img : $.img(), js:$.js()}))
		$('body').html(brd_vue.brd_body_recentnot({ctx: '/web' , css : $.css(), img : $.img(), js:$.js() , cname}))	
		$('#recent_updates .media').remove()
		$('#recent_updates .d-block').remove()
		$('#recent_updates_text').remove()
		$('#recent_updates').append('<h1>등록된 글이 없습니다.</h1>')
	}	
	
	let write = () =>{
		$('#Suggestions').remove();
		$('#recent_updates').html(brd_vue.brd_write({cname,cid}));
	}
	return { onCreate};
})();