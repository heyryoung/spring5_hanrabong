"use strict"
var brd = brd || {};
brd =(()=>{
	    let _, js,css,img, brd_vuejs, navi_js, cookie_js,cname,cid,cnum,navivue_js,router_js,routerInfo
	    let init = ()=>{
	       _= $.ctx()
	        js = $.js()
	        css = $.css()
	        img = $.img()
	        cname : getCookie("CNAME") 
	        cid : getCookie("CID")
	        cnum : getCookie("CNUM")
	       brd_vuejs = js+'/vue/brd_vue.js'
	       navi_js = js+'/cmm/navi.js'
	       navivue_js = js+'/vue/navi_vue.js'
	       cookie_js = js+'/cmm/cookie.js'
	       router_js =  js+'/cmm/router.js'
	       routerInfo = {_,js,css,img,cookie_js,router_js,cookie_js}
	   }
	let run =x=>$.getScript(x+'/resources/js/cmm/router.js',
		            ()=>{$.extend(new Session(x));
		    })	
	let onCreate =()=>{
		run('/web');
		init();
		$.getScript(brd_vuejs)
		$.getScript(navi_js)
		$.getScript(cookie_js)
		setContentView();
		contentList();
	}
	
	let setContentView = ()=>{
		$('head').html(brd_vue.brd_head({css , img, js}))
	}
	
	let write = ()=>{
		$('#Suggestions').remove();
		$('#recent').html(brd_vue.brd_write({cname ,cid ,cnum}));
		$('#write_form input[name="writer"]').val(getCookie("CNAME"));
		$('#write_form input[name="cnum"]').val(getCookie("CNUM"));
		$('<button>',{
			text : 'SUBMIT' , 
			href: '#' ,
			style:  'float:right;width:100px;margin-right:10px'
		})
		.addClass('btn btn-primary')
		.appendTo("#write_form")     
		.click(e=>{
			e.preventDefault()
			let json = { 
					cnum :  $('#write_form input[name="cnum"]').val() ,
					writer : $('#write_form input[name="writer"]').val(),
					content : $('#write_form textarea[name="content"]').val()
			}
			$.ajax({
				url : '/web/articles/', 
				type : 'POST',
				dataType : 'json',
				data: JSON.stringify(json) , 
				contentType : 'application/json',
				success : d =>{
					alert('게시 성공');
					e.preventDefault()
					$.getScript(brd_vuejs)
					contentList()
				},
				error : e =>{
					alert('게시 실패');
				}
			})  	
		})
		
		$('<reset>',{
			text : 'CANCEL' , 
			href: '#' ,
			style : 'float:right;width:100px;margin-right:10px'
		})
		.addClass('btn btn-danger')
		.appendTo("#write_form")   
		.click(e=>{
			e.preventDefault()
			contentList()
		})
	}
	
	let navigation =()=>{
		navi.onCreate()
	}
	

	let contentList = () =>{
		$('main[class="container"]').html(brd_vue.brd_body({ctx: '/web' , js, cname : getCookie("CNAME") , cid : getCookie("CID") , cnum : getCookie("CNUM")}))
		$('#recent div[class="media text-muted pt-3"]').remove()
		$('#recent small[class="d-block text-right mt-3"]').remove()
	
		$.ajax({
			url : '/web/articles/', 
			type : 'GET',
			contentType : 'application/json',
			success : d =>{
				$.each(d, ( i , brd)=>{
					$('<div>',{
						href : '#'
					})
					.append(brd_vue.brd_contentList(brd))
					.appendTo('#recent')			
					.click(e=>{
						e.preventDefault()
						readArticle(brd)
					})				
				})// each
				$('#recent').append( brd_vue.brd_allUpdatest())
			},
			error : e =>{
			}
		}) 

	}// contentList
	
	let readArticle = data =>{
		$('#recent').html(brd_vue.brd_write(data));
		$('#write_form input[name="writer"]').val(data.writer);
		$('#write_form input[name="cnum"]').val(data.cnum);		
		$('#write_form textarea[name="content"]').val(data.content);		
		$('#write_form input[name="cnum"]').val(data.cnum);		
		$('#write_form input[name="brdseq"]').val(data.brdseq);		
		$('#Suggestions').remove();
		$('h1').text('ARTICLE DETAIL');
	
		$('<button>',{
			text : '목록으로' , 
			href: '#' ,
			style : 'float:right;width:100px;margin-right:10px'
		})// button
		.addClass('btn btn-info')
		.appendTo("#write_form")   
		.click(e=>{
			e.preventDefault()
			contentList(data)
		})// click
	
		
		$('<button>',{
			text : 'Delete' , 
			href: '#' ,
			style : 'float:right;width:100px;margin-right:10px'
		})//button
		.addClass('btn btn-danger')
		.appendTo("#write_form")   
		.click(e=>{
			e.preventDefault()			
			let json = { 
	     			brdseq :  $('#write_form input[name="brdseq"]').val() ,
				}     	
			$.ajax({
				url : _+'/articles/'+json.brdseq, 
				type : 'DELETE',
				dataType : 'json',
				data: JSON.stringify(json) , 
				contentType : 'application/json',
				success : d =>{
					alert('Delete success');
					contentList()					
				},
				error : e =>{
					alert('Delete fail');
				}
			}) // ajax
		})// click

		$('<button>',{
			text : 'Modify' , 
			href: '#' ,
			style:  'float:right;width:100px;margin-right:10px;'
		})// button
		.addClass('btn btn-success')
		.appendTo("#write_form")     
		.click(e=>{
	 		e.preventDefault()
			let json = { 
	 			brdseq :  $('#write_form input[name="brdseq"]').val() ,
				content : $('#write_form textarea[name="content"]').val()
			}     	
			$.ajax({
				url : _+'/articles/'+data.brdseq, 
				type : 'PUT',
				dataType : 'json',
				data: JSON.stringify(json) , 
				contentType : 'application/json',
				success : d =>{
					alert('Modify성공');
					contentList()
				},
				error : e =>{
					alert('Modify fail');
				}
			})   // ajax
		})// click
	}// readArticle()

		
	return { onCreate , write ,contentList};
})();