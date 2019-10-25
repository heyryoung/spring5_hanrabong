"use strict";
var app = app || {};

app = (()=>{

		let _, js,authjs;
		let run = x =>$.getScript(x+ '/resources/js/cmm/router.js' , 
					()=>{$.extend(new Session(x));
					onCreate();
			}); 
			let init = ()=>{
				_ = $.ctx();
				js = $.js();
				authjs = js+'/cmm/auth.js';
			}
			let onCreate = ()=>{
				init();
				$.when(
						$.getScript(authjs)
				)
				.done(()=>{auth.onCreate()}
				)
				.fail(()=>{alert(WHEN_ERR)}
				)
			}
		return {run};
})();

