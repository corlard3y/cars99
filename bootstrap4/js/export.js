
	$(document).ready(function() {
			$("#lol").click(function()
			{
				alert();
			})
			$("#click").click(function()
			{	
				$(this).toggleClass('button2');
				$('#bottombar').toggle(2000);
				$('.ok').toggleClass('bg');
				$(this).find('i').toggleClass('fa-arrow-up fa-arrow-down');
			})
			$(".do").click(function()
			{
				$('.navbar-collapse').collapse('hide');
			})
			$("#nav li").click(function()
			{
				$("#nav li").removeClass('click');
				$(this).addClass('click');
			})
			$("#do li").click(function()
			{
				alert();
				$(this).addClass('myclick');
			})
			if($(window).width()>768)
			{
				$('.go').click(function()
				{
					$(this).removeAttr('data-toggle');
				})
			}
			else
			{
				$('.go').click(function()
				{
					$(this).addAttr('data-toggle','dropdown');
				})
			}
		
			$check=false;
			$('#but').click(function()
			{
				
				if($check==false)
				{
					$('.ok').animate({height:'200px'});
					$(this).toggleClass('fa-arrow-up fa-arrow-down');
					$check=true;
				}
				else if($check==true)
				{
					$('.ok').animate({height:'20px'});
					$(this).toggleClass('fa-arrow-down fa-arrow-up');
					$check=false;
				}
			})

		});
	}

		
