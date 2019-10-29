"use strict"
var brd = brd || {};
brd =(()=>{
	let _,js, brd_vuejs,cname,cid,cnum,router_js , $form;
	let init = ()=>{
		_=$.ctx();
		js=$.js();
		brd_vuejs= js+'/vue/brd_vue.js';
		cname = $.cname();
		cid = $.cid();
		cnum = $.cnum();
	}
	
	let onCreate =()=>{
		init();
		$.when(
				$.getScript(brd_vuejs)
			)
			.done(()=>{
				setContentView()
				contentList()
				navigation()		
			})
			.fail(()=>{alert(WHEN_ERR)}
			)		
			
			
	}
	
	let setContentView = ()=>{
		$('head').html(brd_vue.brd_head({css : $.css(), img : $.img(), js:$.js()}))
	}
	
	let write = () =>{
		alert('asdfasdf')
		$('#Suggestions').remove();
		$('#recent').html(brd_vue.brd_write({cname,cid,cnum}));
		$('#write_form input[name="writer"]').val(cname);
		$('#write_form input[name="cnum"]').val(cnum);
		$('<button>',{
			text : 'SUBMIT' , 
			href: '#' ,
			style:  'float:right;width:100px;margin-right:10px'
		})
		.addClass('btn btn-primary')
		.appendTo("#write_form")     
		.click(e=>{
			let json = { 
					cnum :  $('#write_form input[name="cnum"]').val() ,
					writer : $('#write_form input[name="writer"]').val(),
					content : $('#write_form textarea[name="content"]').val()
			}
			
			$.ajax({
				url : _+'/articles/', 
				type : 'POST',
				dataType : 'json',
				data: JSON.stringify(json) , 
				contentType : 'application/json',
				success : d =>{
					alert('게시 성공');
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
		
	}
	
	let content= data =>{


	}
	

	let contentList = () =>{
		$('body').empty()
		$('body').html(brd_vue.brd_body({ctx: '/web' ,  js , cname , cid ,cnum}))	
		$('#recent div[class="media text-muted pt-3"]').remove()
		$('#recent small[class="d-block text-right mt-3"]').remove()
		let res = ''
		$.getJSON(_+'/articles/',(d=>{
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
			})
			$('#recent').append( brd_vue.brd_allUpdatest())
			})
		)
	}
	
	
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
		})
		.addClass('btn btn-info')
		.appendTo("#write_form")   
		.click(e=>{
			e.preventDefault()
			contentList()
		})
	
		
		$('<button>',{
			text : '삭제하기' , 
			href: '#' ,
			style : 'float:right;width:100px;margin-right:10px'
		})
		.addClass('btn btn-danger')
		.appendTo("#write_form")   
		.click(e=>{
			let json = { 
	     			brdseq :  $('#write_form input[name="brdseq"]').val() ,
				}     	
			$.ajax({
				url : _+'/articles/'+data.brdseq, 
				type : 'DELETE',
				dataType : 'json',
				data: JSON.stringify(json) , 
				contentType : 'application/json',
				success : d =>{
					alert('삭제성공');
					contentList()
				},
				error : e =>{
					alert('삭제 실패');
				}
			})      		
		})
		

		$('<button>',{
			text : 'Modify' , 
			href: '#' ,
			style:  'float:right;width:100px;margin-right:10px;'
		})
		.addClass('btn btn-success')
		.appendTo("#write_form")     
		.click(e=>{
	 		e.preventDefault()
	 		alert('수정 시작')
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
					alert('수정성공');
					content(d)
					//contentList()
				},
				error : e =>{
					alert('게시수정성공 실패');
				}
			})      		
	 		
		})
				
			
			
		
		
		
	}

		
	return { onCreate};
})();