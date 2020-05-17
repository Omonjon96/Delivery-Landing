$(function() {
    $(document).ready(function(){
        // $('.tab-group__item a').on('click', function (e) {
        //     e.preventDefault();
        //     $(this).parent().addClass('active');
        //     $(this).parent().siblings().removeClass('active');
            
        //     var href = $(this).attr('href');
        //     $('.contact__form > form').hide();
        //     $(href).fadeIn(500);
        // });


        $(".logistics").click(function(e){
			e.preventDefault();
			$(".logistics-tab__wrap").show();
			$(".contact__form-content").hide();
			$(".logistics").addClass('active');
			$(".express").removeClass('active');
		});
		$(".express").click(function(e){
			e.preventDefault();
			$(".contact__form-content").show();
			$(".logistics-tab__wrap").hide();
			$(".express").addClass('active');
			$(".logistics").removeClass('active');
		});
    });
});