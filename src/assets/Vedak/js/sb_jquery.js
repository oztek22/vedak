
 
 $(document).ready(function () {
    $('.main_menu').meanmenu();		
	
	$('.user-detail').click(function(){
		if($('.on-click-pop').css('display') == 'none')
			$('.on-click-pop').show();
		else
			$('.on-click-pop').hide();
	});
	
	$('.add-note a').click(function(){
		if($('.add-note textarea').css('display') == 'none')
			$('.add-note textarea').show();
		else
			$('.add-note textarea').hide();
	});
	
	if ($(window).width() < 1025){
		$('#profile').appendTo('.nav-tabs .nav-item.profile').insertAfter('a[href="#profile"]');
		$('#hr').appendTo('.nav-tabs .nav-item.hr').insertAfter('a[href="#hr"]');
		$('#marketing').appendTo('.nav-tabs .nav-item.marketing').insertAfter('a[href="#marketing"]');
		$('#account-finance').appendTo('.nav-tabs .nav-item.account-finance').insertAfter('a[href="#account-finance"]');
		$('#investment').appendTo('.nav-tabs .nav-item.investment').insertAfter('a[href="#investment"]');
		$('#sales').appendTo('.nav-tabs .nav-item.sales').insertAfter('a[href="#sales"]');
		$('#technology').appendTo('.nav-tabs .nav-item.technology').insertAfter('a[href="#technology"]');
		$('#fixed-price').appendTo('.nav-tabs .nav-item.fixed-price').insertAfter('a[href="#fixed-price"]');
		$('#payperhour').appendTo('.nav-tabs .nav-item.payperhour').insertAfter('a[href="#payperhour"]');
		
		$('.content .tab-content .nav-link').removeClass('active');
		
		$('.content .tab-content .nav-link').click(function(e) {
				e.preventDefault();		 		
				$(this).next('.tab-content .tab-pane').slideToggle(300);
				$(this).toggleClass( "active"); 
				return false;  
			});
	}
	if ($(window).width() < 767){
		$('header .right-wrap nav').appendTo('header .right-wrap').insertAfter('header .user');
		$('footer .copyright').appendTo('footer .footer-content').insertAfter('footer ul');
	}	
		
	
	 $('#sandbox-container input').datepicker({
    });
	
 });
 
