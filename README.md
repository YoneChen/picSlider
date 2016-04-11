# picSlider
A light-weight pictures carossel plugin based on jQuey.
It includes two common animations:Fade animation and Slide animation.
## Step1: Make sure both the picslider and jQuery scripts are included,and add picslider css to your html.
        <link rel="stylesheet" type="text/css" href="picSlider.css">
				<script type="text/javascript" src = "jquery.min.js"></script>
				<script type="text/javascript" src = "picSlider.js"></script>
## Step2: You just need a div and an unordered list to contain your pictures like this.
        <div class="picSlider">
					<ul>
						<li><img src="img/0.jpg" height="360" width="640"></li>
						<li><img src="img/1.jpg" height="360" width="640"></li>
						<li><img src="img/2.jpg" height="360" width="640"></li>
						<li><img src="img/3.jpg" height="360" width="640"></li>
					</ul>
				</div>
## Step3: Call your function as follow,and you will see your pictures sliding.
        $(document).ready(function() {
					$('.picSlider').picSlider();
				});
## Custom the options: You can define your options like this:
        $('.picSlider').eq(1).picSlider({
					delay:1000,         //picture pause delay (ms); default value:2000
					speed:600,          //animation speed (ms); default value:1000
					event:'mouseover',  //trigger type :click or mouseover; default value:'fade'
					animate:'fade'      //animation type :fade or slide; default value:'slide'
				});
