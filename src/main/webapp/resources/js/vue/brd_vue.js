"use strict";
var brd_vue = brd_vue || {}
brd_vue ={
		  brd_head:x=>{
              return '<head>'+
              '    <meta charset="utf-8">'+
              '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
              '    <meta name="description" content="">'+
              '    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
              '    <meta name="generator" content="Jekyll v3.8.5">'+
              '    <title></title>'+
              '    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/offcanvas/">'+
              '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'+
              '    <!-- Bootstrap core CSS -->'+
              '<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
              '    <!-- Custom styles for this template -->'+             
              '    <link href="https://getbootstrap.com/docs/4.3/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
              '    <style>'+
              '.container{text-align : left;}'+
              '      .bd-placeholder-img {'+
              '        font-size: 1.125rem;'+
              '        text-anchor: middle;'+
              '        -webkit-user-select: none;'+
              '        -moz-user-select: none;'+
              '        -ms-user-select: none;'+
              '        user-select: none;'+
              '      }'+
              '      @media (min-width: 768px) {'+
              '        .bd-placeholder-img-lg {'+
              '          font-size: 3.5rem;'+
              '        }'+
              '      }'+
              '    </style>'+
              '  </head>'
            },
            brd_body: x=>{
              return  '<body class="bg-light">'+
              '    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">'+
              '  <a class="navbar-brand mr-auto mr-lg-0" href="#"><i class="fab fa-angrycreative"></i>'+
              '</a>'+
              '  <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
              '    <span class="navbar-toggler-icon"></span>'+
              '  </button>'+
              '  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
              '    <ul class="navbar-nav mr-auto">'+
              '      <li class="nav-item active">'+
              '        <a class="nav-link" href="#"><i class="fab fa-angrycreative"></i>Dashboard <span class="sr-only">(current)</span></a>'+
              '      </li>'+
              '      <li class="nav-item">'+
              '        <a class="nav-link" href="#">Notifications</a>'+
              '      </li>'+
              '      <li class="nav-item">'+
              '        <a class="nav-link" href="#">Profile</a>'+
              '      </li>'+
              '      <li class="nav-item">'+
              '        <a class="nav-link" href="#">Switch account</a>'+
              '      </li>'+
              '      <li class="nav-item dropdown">'+
                      '<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>'+
              '        <div class="dropdown-menu" aria-labelledby="dropdown01">'+
              '          <a class="dropdown-item" href="#">Action</a>'+
              '          <a class="dropdown-item" href="#">Another action</a>'+
              '          <a class="dropdown-item" href="#">Something else here</a>'+
              '        </div>'+
              '      </li>'+
              '    </ul>'+
              '    <form class="form-inline my-2 my-lg-0">'+
                    '<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
              '      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
              '    </form>'+
              '  </div>'+
              '</nav>'+
              '<div class="nav-scroller bg-white shadow-sm">'+
              '  <nav class="nav nav-underline">'+
              '    <a class="nav-link active" href="#">Dashboard</a>'+
              '    <a class="nav-link" href="#">'+
              '      Friends'+
              '      <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
              '    </a>'+
              '    <a class="nav-link" href="#">Explore</a>'+
              '    <a class="nav-link" href="#">Suggestions</a>'+
              '    <a class="nav-link" href="#">Link</a>'+
              '    <a class="nav-link" href="#">Link</a>'+
              '    <a class="nav-link" href="#">Link</a>'+
              '    <a class="nav-link" href="#">Link</a>'+
              '    <a class="nav-link" href="#">Link</a>'+
              '  </nav>'+
              '</div>'+
              '<main role="main" class="container">'+
                '<div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">'+
                  '<img class="mr-3" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
              '    <div class="lh-100">'+
              '      <h6 class="mb-0 text-white lh-100"></h6>'+
              '      <small>Since 2011</small>'+
              '    </div>'+
              '  </div>'+
              '  <div class="my-3 p-3 bg-white rounded shadow-sm">'+
              '    <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>'+
              '    <div class="media text-muted pt-3">'+
                    '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
              '      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
              '        <strong class="d-block text-gray-dark">@username</strong>'+
                      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
              '      </p>'+
              '    </div>'+
              '    <div class="media text-muted pt-3">'+
                    '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>'+
              '      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
              '        <strong class="d-block text-gray-dark">@username</strong>'+
                      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
              '      </p>'+
              '    </div>'+
              '    <div class="media text-muted pt-3">'+
                    '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>'+
              '      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
              '        <strong class="d-block text-gray-dark">@username</strong>'+
                      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
              '      </p>'+
              '    </div>'+
              '    <small class="d-block text-right mt-3">'+
              '      <a href="#">All updates</a>'+
              '    </small>'+
              '  </div>'+
              '  <div class="my-3 p-3 bg-white rounded shadow-sm">'+
              '    <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
              '    <div class="media text-muted pt-3">'+
                    '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
              '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
              '        <div class="d-flex justify-content-between align-items-center w-100">'+
              '          <strong class="text-gray-dark">Full Name</strong>'+
              '          <a href="#">Follow</a>'+
              '        </div>'+
              '        <span class="d-block">@username</span>'+
              '      </div>'+
              '    </div>'+
              '    <div class="media text-muted pt-3">'+
                    '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
              '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
              '        <div class="d-flex justify-content-between align-items-center w-100">'+
              '          <strong class="text-gray-dark">Full Name</strong>'+
              '          <a href="#">Follow</a>'+
              '        </div>'+
              '        <span class="d-block">@username</span>'+
              '      </div>'+
              '    </div>'+
              '    <div class="media text-muted pt-3">'+
                    '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
              '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
              '        <div class="d-flex justify-content-between align-items-center w-100">'+
              '          <strong class="text-gray-dark">Full Name</strong>'+
              '          <a href="#">Follow</a>'+
              '        </div>'+
              '        <span class="d-block">@username</span>'+
              '      </div>'+
              '    </div>'+
              '    <small class="d-block text-right mt-3">'+
              '      <a href="#">All suggestions</a>'+
              '    </small>'+
              '  </div>'+
              '</main>'+
              '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'+
                    '<script src="https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>'+
              '        <script src="https://getbootstrap.com/docs/4.3/examples/offcanvas/offcanvas.js"></script>'+
              '</body>'
            },
            brd_body_recentnot: x=>{
                return  '<body class="bg-light">'+
                '    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">'+
                '  <a class="navbar-brand mr-auto mr-lg-0" href="#">'+
                '<i class="fab fa-angrycreative"></i>'+
                '</a>'+
                '  <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
                '    <span class="navbar-toggler-icon"></span>'+
                '  </button>'+
                '  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
                '    <ul class="navbar-nav mr-auto">'+
                '      <li id="ago_write" class="nav-item active">'+
                '      </li>'+
                '      <li class="nav-item">'+
                '        <a class="nav-link" href="#">Notifications</a>'+
                '      </li>'+
                '      <li class="nav-item">'+
                '        <a class="nav-link" href="#">Profile</a>'+
                '      </li>'+
                '      <li class="nav-item">'+
                '        <a class="nav-link" href="#">Switch account</a>'+
                '      </li>'+
                '      <li class="nav-item dropdown">'+
                        '<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>'+
                '        <div class="dropdown-menu" aria-labelledby="dropdown01">'+
                '          <a class="dropdown-item" href="#">Action</a>'+
                '          <a class="dropdown-item" href="#">Another action</a>'+
                '          <a class="dropdown-item" href="#">Something else here</a>'+
                '        </div>'+
                '      </li>'+
                '    </ul>'+
                '    <form class="form-inline my-2 my-lg-0">'+
                      '<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
                '      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
                '    </form>'+
                '  </div>'+
                '</nav>'+
                '<div class="nav-scroller bg-white shadow-sm">'+
                '  <nav class="nav nav-underline">'+
                '    <a class="nav-link active" href="#" >Dashboard</a>'+
                '    <a class="nav-link" href="#">'+
                '      Friends'+
                '      <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
                '    </a>'+
                '    <a class="nav-link" href="#">Explore</a>'+
                '    <a class="nav-link" href="#">Suggestions</a>'+
                '    <a class="nav-link" href="#">Link</a>'+
                '    <a class="nav-link" href="#">Link</a>'+
                '    <a class="nav-link" href="#">Link</a>'+
                '    <a class="nav-link" href="#">Link</a>'+
                '    <a class="nav-link" href="#">Link</a>'+
                '  </nav>'+
                '</div>'+
                '<main role="main" class="container">'+
                  '<div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">'+
                    '<img class="mr-3" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
                '    <div class="lh-100">'+
                '      <h6 class="mb-0 text-white lh-100">  '+x.cname+' 님 어서 오세요! 반갑습니다.</h6>'+
                '    </div>'+
                '  </div>'+
                '  <div  class="my-3 p-3 bg-white rounded shadow-sm">'+
                '    <h6 id="recent_updates_text" class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>'+
                '    <div class="media text-muted pt-3" >'+
                '      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
                '        <strong id="recent_updates" class="d-block text-gray-dark"></strong>'+
                '      </p>'+
                    '    <small  class="d-block text-right mt-3">'+
                '    </small>'+
                '  </div> '+
                '  <div id="Suggestions" class="my-3 p-3 bg-white rounded shadow-sm">'+
                '    <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
                '    <div class="media text-muted pt-3">'+
                      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
                '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
                '        <div class="d-flex justify-content-between align-items-center w-100">'+
                '          <strong class="text-gray-dark">Full Name</strong>'+
                '          <a href="#">Follow</a>'+
                '        </div>'+
                '        <span class="d-block">@username</span>'+
                '      </div>'+
                '    </div>'+
                '    <div class="media text-muted pt-3">'+
                      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
                '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
                '        <div class="d-flex justify-content-between align-items-center w-100">'+
                '          <strong class="text-gray-dark">Full Name</strong>'+
                '          <a href="#">Follow</a>'+
                '        </div>'+
                '        <span class="d-block">@username</span>'+
                '      </div>'+
                '    </div>'+
                '    <div class="media text-muted pt-3">'+
                      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
                '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
                '        <div class="d-flex justify-content-between align-items-center w-100">'+
                '          <strong class="text-gray-dark">Full Name</strong>'+
                '          <a href="#">Follow</a>'+
                '        </div>'+
                '        <span class="d-block">@username</span>'+
                '      </div>'+
                '    </div>'+
                '    <small class="d-block text-right mt-3">'+
                '      <a href="#">All suggestions</a>'+
                '    </small>'+
                '  </div>'+
                '</main>'+
                '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'+
                      '<script src="https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>'+
                '        <script src="https://getbootstrap.com/docs/4.3/examples/offcanvas/offcanvas.js"></script>'+
                '</body>'
              }         
		      ,
		      brd_write: x=>{
		    	  return '<div class="container-fluid" style="width:80%">'
		    	  +'<h1>ARTICLE WRITING</h1>'
		    	  +'<form>'
		    	  +'<input type="text" name="writer" style="margin-top:20px" class="form-control" placeholder="" value= "'+x.cname+'"/>'
		    	  +'<input type="text" name="title" style="margin-top:20px" class="form-control" placeholder="제목" /><br />'
		    	  +'<div class="row">'
		    	  +'<div style="width:97%; margin:10px auto" >'
		    	  +'<textarea name="content" class="form-control" rows="10" id="comment"></textarea>'
		    	  +' </div>'
		    	  +' </div>'
		    	  +' <input type="reset" class="btn btn-danger" style="float:right;width:100px;margin-right:10px" value="CANCEL"/>'
		    	  +'<input name="write" type="submit" class="btn btn-primary" style="float:right;width:100px;margin-right:10px" value="SUBMIT"/>'
		    	  +'<input type="hidden" name="action" value="write"/>'
		    	  +'<input type="hidden" name="pageName" value="detail" />'
		    	  +'</form>'
		    	  +'</div>'
		    	 }

}