var $doc = $(document);

var page = {
	init: function() {
		this.events();
		this.gotoBtn();
	},
	events: function() {
		$doc.on('click', '.goto-help', function (e) {
			e.preventDefault();
		});
		$doc.on('mouseenter', '.goto-help', function (e) {
			$('.help-img').show();
		});
		$doc.on('mouseleave', '.goto-help', function (e) {
			$('.help-img').hide();
		});

		$doc.on('click', '.goto-chat', function (e) {
			e.preventDefault();
		});
		$doc.on('mouseenter', '.goto-chat', function (e) {
			$('.chat-img').show();
		});
		$doc.on('mouseleave', '.goto-chat', function (e) {
			$('.chat-img').hide();
		});
		
		$doc.on('click', '.goto-top', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		});
	},

	gotoBtn: function() {
  
    var height = $(window).height();
  
  $doc.scroll(function() {
      var $goto = $('.goto-top');
   if($(this).scrollTop() > height) {
        $goto.css('display', 'block');
   } else {
    $goto.hide();
   }
  });
 }
};

page.init();