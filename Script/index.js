document.addEventListener('click', function (e){
	if(e.target.id == 'join-button'){
		router.navigate('/Register');
	} else if(e.target.id == 'home-button'){
		if(logged){
			router.navigate('/Home/' + loggedID);
		} else {	
			router.navigate('/Home');
		}	
	} else if(e.target.id == 'login-button'){
		if(e.target.innerHTML == "Login"){
			router.navigate('/Login');
		} else {
			router.navigate('/Profile/' + loggedID);
		}
		closeNav();
	}
	if(e.target.className == "navTitle" || e.target.className == "navElem"){
		closeNav();
	}
	if(e.target.id == 'header-nav-main'){
		if(logged){
			router.navigate('/Home/' + loggedID);
		} else {	
			router.navigate('/Home');
		}	
	} else if(e.target.id == 'header-nav-groups'){
		router.navigate('/Groups');
	} else if(e.target.id == 'header-nav-people'){
		router.navigate('/People');
	} else if(e.target.id == 'header-nav-trade'){
		router.navigate('/Items');	
	} else if(e.target.id == 'header-nav-about'){
		router.navigate('/About');
	} else if(e.target.id == 'header-nav-contact'){
		router.navigate('/Contact');
	} else if(e.target.id == 'privacy-link'){
		router.navigate('/Privacy');
	}

	if(e.target.id == 'contact-send-button'){ //Contact Page Send
		document.getElementById('message-sent').style.display = 'inline';
		document.getElementById('contact-left').style.display = 'none';
	}	
	
}); 


var indexHTML = 
`
<div class="top-row">
	  		<div class="welcome">
			  	<h1>Adding Green to your Life</h1>
			  	<h3>Millions of people use agrolife to turn their ideas into reality.</h3>
			  	<button id="join-button" class="join">Join Agronet</button>
		  	</div>
			<div class="video">
				<iframe class="home-video" width=100% height="315" src="https://www.youtube.com/embed/1bieukoWx1Q?autoplay=1&mute=1" frameborder="0"></iframe>
			</div>
		</div>
		<div class="mid-container">
			<div class="mid-text">
				<h3>AgroNet</h3>
				<h4>	AgroNet - the viziers said, "King, why do you insist that you are old so soon? 
						For though it's true our rose has faded, we all know it as a boon.
						It still excels in scent and color though its day is far past noon.
						What kind of star dares offer challenge even to a waning moon.
				 </h4>
				 <h5>	Oh, king, please don't speak thus to us: your rose is not faded today.
						Bad counsel from you is better than the good another might say.
						It is right to do whatever will make your heartache go away.
				</h5>
			</div>
			<i class="fas fa-search-location"></i>
		</div>
		<div class="mid-container">
			<i class="fas fa-handshake"></i>
			<div class="mid-text">
				<h3>Grow naturally, Live natural</h3>
				<h4>	Although a woman, she is a sovereign, ordained by God's decree. 
						We are not flattering you; but even in your absence agree. 
						Like her radiance, her deeds are as bright as the sunshine to see. 
						Lion's whelps are equally lions, though female or male they be.
				 </h4>
				 <h5>	He kept his love-madness hidden, lodged deep within him like a dart.
						Whenever he couldn't see her, though, his rose's fading would start; 
						Whenever he saw her, fire leapt up, his wound more sharply would smart. 
				</h5>
			</div>
		</div>
		<div class="feature-container">
			<h3>Key features of AgroNet</h3>
			<div class="features-row">
				<div class="feature-elem">	
					<i class="fas fa-globe"></i>
					<h4 class="feature-title">Global</h4>
					<p class="feature-description">	
						he who created the firmament, by that mighty power made beings
						inspired from on high with souls celestial; 
					</p>
				</div>
				<div class="feature-elem">
					<i class="fas fa-shield-alt"></i>
					<h4 class="feature-title">Safe</h4>
					<p class="feature-description">	
						when the soldiers hunted and sought their lord, and could no 
						longer find the sun-faced, their countenances paled.
					</p>
				</div>
				<div class="feature-elem">
					<i class="fab fa-hubspot"></i>
					<h4 class="feature-title">Modern</h4>
					<p class="feature-description">	
						Shermadin assembled together the courtiers and nobles; 
						he showed them the letter in which Avt’handil.
					</p>
				</div>
				<div class="feature-elem">
					<i class="fas fa-bolt"></i>
					<h4 class="feature-title">Fast</h4>
					<p class="feature-description">	
						When the soldiers hunted and sought their lord, 
						and could no longer find the sun-faced, their countenances paled.
					</p>
				</div>
			</div>
		</div>
`

var registerHTML = 
`
<div class="register-container">
	<div class="registerBox">
		<div class="registerForm">
			<h2 class="registerFormTitle">Sign up</h2>
			<h5 id="register-alert">Username taken</h5>
			<div class="inputBox first">
				<div class="i">
					<i class="fas fa-user registerI"></i>
				</div>
				<div>
					<input class="input-register" id="username-input-reg"name="username" type="text" placeholder="Username" onfocus="this.placeholder=''" onblur="this.placeholder='Username'">
				</div>
			</div>	
			<div class="inputBox third">
				<div class="i">
					<i class="fas fa-envelope-square registerI"></i>
				</div>
				<div>
					<input class="input-register" id="password-input-reg" name="email" type="text" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'">			
				</div>
			</div>	
			<div class="inputBox second">
				<div class="i">
					<i class="fas fa-lock registerI"></i>
				</div>
				<div>
					<input class="input-register" id="email-input-reg" name="password" type="password" placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'">	
				</div>
			</div>		
			<button id="register-button">Sign Up</button>
		</div>
	</div>
	<img id="registerBackImg" src="./Images/Register/reg.png" alt="Register Background">
</div>
`


//Login
var loginHTML = 
`
<div class="login-container">
	<img id="loginBackImg" src="./Images/Login/log.svg" alt="Login Background">
	<div class="loginBox">
		<div class="loginForm">
			<img src="./Images/Login/profile.png" class="avatar" alt="Login Avatar">
			<h2 id="login-welcome-label">Welcome</h2>
			<h5 id="wrong-login">Wrong username or password</h5>
			<div class="inputBox first">
				<div class="i">
					<i class="fas fa-user"></i>
				</div>
				<div>
					<input class="input" id="username-input" name="username" type="text" placeholder="Username" onfocus="this.placeholder=''" onblur="this.placeholder='Username'">
				</div>
			</div>	
			<div class="inputBox second">
				<div class="i">
					<i class="fas fa-lock"></i>
				</div>
				<div>
					<input class="input" id="password-input" name="password" type="password" placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'">
				</div>
			</div>	
			<input type="submit" id="loginFormButton" value="Login">

		</div>
	</div>
</div>
`


//Main page - logged in; posts; contact; ads
var mainHTML = 
`
	<div id="main-feed-cont">
  		<div id="main-feed-left">
  			<h3 id="news-label">News</h3>
      	</div>

      	<div class="main-feed-mid">
      		<div id="new-post">
	            <textarea id="new-post-text" rows=5></textarea>
	            <button id="new-post-button">Post</button>
	        </div>
	  		<div class="containerPost">
			</div>
		</div>
  		<div id="main-feed-right">
  			<h3 id="advertisement-label">Advertisement</h3>
  			<div class="ad">
          		<img class="ad-img" src="./Images/Ads/ad3.png" alt="Ads">
        	</div>
	        <div class="ad">
	          <img class="ad-img" src="./Images/Ads/ad4.png" alt="Ads">
	        </div>	
  		</div>
	
  	</div>`


var tradeHTML = 
`
<div class="trade-cont">	
		<button id="hamburger-trade" onclick="openNavTrade()">Category</button>
		<div class="trade-left">
			<button id="closebtnGroup" onclick="closeNavTrade()">&times;</button>
			<div class="trade-categorys">
				<div class="filter-box">
					<label class="trade-category-label">Type</label>
					<button class="trade-category-button" id="category1">Agrochemical</button>
					<button class="trade-category-button" id="category2">Crop Protection</button>
					<button class="trade-category-button" id="category3">Decorative Plants</button>
					<button class="trade-category-button" id="category4">Seeds</button>
					<button class="trade-category-button" id="category5">Vehicle</button>
					<button class="trade-category-button" id="category6">Plant Growth Regulators</button>
				</div>
				<hr class="trade-hr">
				<!--
				<div class="filter-box">
					<label class="trade-category-label" id="price-inp">Price</label>
					<label class="price-border-label">Min</label>
					<input type="number">
					<label class="price-border-label">Max</label>
					<input type="number">
					<button id="set-trade-price">Set Price</button>
				</div>	
				<hr class="trade-hr">
				-->
			</div>	
		</div>
		<div class="trade-right">
			
		</div>
	</div>
`
var itemInHTML = 
`
<div class="item-in">
	<div class="item-in-left">
		<img class="item-in-back-img" src="">
	</div>
	<div class="item-in-right">

		<div class="item-in-data">
			<div class="item-in-attribute">
				<label>Name:</label>
				<label class="item-in-value" id="item-in-name"></label>
			</div>
			<div class="item-in-attribute">
				<label>Price:</label>
				<label class="item-in-value" id="item-in-price"></label>
			</div>
			<div class="item-in-attribute">
				<label>Description:</label>
				<label class="item-in-value" id="item-in-description"></label>
			</div>
		</div>
	</div>
</div>
`


var profileHTML = 
`
<div class="biggest">
	<div id="container">
    	<div id="left-box">
      		<img id="profile-left-img" src="">
      		<div id="info">
        		<h3 id="profile-name"></h3>
				<h4 id="profile-username"></h4>
        		<p>
          			<i class="fas fa-briefcase"></i>
          			<label id="profile-occupation"></label>
        		</p>
        		<p>
          			<i class="fas fa-home"></i>
          			<label id="profile-location"></label>
        		</p>
        		<p>
          			<i class="fas fa-envelope"></i>
          			<label id="profile-email"></label>
        		</p>
        		<p>
          			<i class="fas fa-phone-alt"></i>
          			<label id="profile-phone"></label>
        		</p>
      		</div>
      		<div class="profile-left-buttons">
				<button id="edit-profile" class="profile-left-button">Edit Profile</button>
				<button id="log-out" class="profile-left-button">Log Out</button>
      		</div>
    	</div>
    
    	<div id="right-box">
			<p id="about"></p>
    	</div>  
  	</div>
</div>
`


//user edit profile 
var editProfileHTML = 
`
<div id="edit-profile-box">
	<button id="edit-profile-save-changes">Save Changes</button>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">Password</h4>
			<input class="edit-profile-input"type="text" id="edit-profile-row-password" name="password">
		</div>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">Email</h4>
			<input class="edit-profile-input"type="text" id="edit-profile-row-email" name="email">
		</div>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">Name</h4>
			<input class="edit-profile-input"type="text" id="edit-profile-row-name" name="name">
		</div>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">Surname</h4>
			<input class="edit-profile-input"type="text" id="edit-profile-row-surname" name="surname">
		</div>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">Occupation</h4>
			<input class="edit-profile-input"type="text" id="edit-profile-row-occupation" name="surname">
		</div>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">Location</h4>
			<input class="edit-profile-input"type="text" id="edit-profile-row-location" name="location">
		</div>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">Phone</h4>
			<input class="edit-profile-input"type="text" id="edit-profile-row-phone" name="phone">
		</div>
		<div class="edit-profile-row">
			<h4 class="edit-profile-row-label">About</h4>
			<textarea class="edit-profile-input"type="text" id="edit-profile-row-about">
		</div>
		
</div>
 `

 
 

var groupsListHTML = 
`
<div class="group-cont">
	<input id="group-search-name" "type="text" placeholder="Search">
	<div class="group-list">
	</div>
</div>
`	  
var groupinHTML =
`
<div class="group-in">
	<div class="group-info">
		<div id="group-back-img-div">
			<img class="group-background-img" src="">
		</div>
		<div id="group-in-second-line">
			<div id="group-description">
				<h3 id="group-name"></h3>	
			</div>
		</div>
	</div>
	<div class="group-post-cont">
		<div id="new-post-group">
			<textarea id="new-post-text-group" rows=5></textarea>
			<button class="postButton" id="group-new-post-button">Post</button>
		</div>
		<div class="group-posts">
		</div>
	</div>
</div>
`
	  
var peopleListHTML = 
`
<div class="people-container">
	<div class="search-container">
		<input id='people-search-name'  		class="people-search" "type="text" placeholder="Search by name" name="search">
		<input id='people-search-occupation' 	class="people-search" "type="text" placeholder="Search by Occupation" name="search">
	</div>
	<div class="avatarList" id='people-list'>
	</div>
</div>
`

var aboutHTML =
`
<div class="about">
	<div class="about-info">
  		<h2>AgroNet - A new Agri Perspective</h2>
      	<p>
        	Praesent interdum velit justo, in dignissim dolor bibendum sed. Curabitur ac accumsan ligula. Cras nec est sed felis volutpat sodales. Morbi venenatis feugiat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque nec pellentesque lectus, in luctus turpis. Pellentesque tristique quam quis nisi laoreet cursus. Proin rutrum elit ut lacus volutpat, sit amet laoreet lacus interdum. Duis dui sem, varius iaculis ipsum ut, egestas molestie massa. Suspendisse ut libero non eros interdum finibus id ac arcu. Sed sit amet purus fermentum, porta sapien at, aliquet massa. Nunc imperdiet nunc sem, euismod cursus sapien mollis vel. Sed pretium, libero eget laoreet dignissim, quam mauris hendrerit dolor, vel consequat nibh tortor ac quam. Sed rutrum, turpis non condimentum efficitur, libero ante egestas elit, non dictum nunc erat ac erat.
		</p>
    </div>
    <div class="team">
      	<div class="member">
        	<div class="member-img-div">
           		<img class="member-img" src="./Images/People/tristan.jpg" alt="Tristan Harris">
            </div>
            <h3 class="member-name">Tristan Harris</h3>
            <h5 class="member-occupation">Computer Scientist</h5>
            <button class="member-contact">Contact</button>
       	</div>
    	<div class="member">
           	<div class="member-img-div">
            	<img id="geta" class="member-img" src="./Images/People/cv.jpg" alt="Giorgi Kalandadze">
            </div>
            <h3 class="member-name">Giorgi Kalandadze</h3>
            <h5 class="member-occupation">Software Developer</h5>
            <button class="member-contact">Contact</button>
        </div>
    </div>
</div>
`

var contactHTML = 
`
<div id="contact-cont">
	<div id="contact-left">
		<div id="contact-info">
			<h5>82 Ilia Chavchavadze Avenue, Tbilisi</h5>
			<h5>Phone: +99585696856</h5>
			<h5>E-mail: info@agronet.edu.ge</h5>
		</div>
		<div id="contact-form">
			<div class="contact-row">
				<h4 class="contact-label">Name</h4>
				<input class="contact-input" type="text" name="name">
			</div>
			<div class="contact-row">
				<h4 class="contact-label">Email</h4>
				<input class="contact-input" type="text" name="email">
			</div>
			<div class="contact-row text">
			  	<h4 class="contact-label text">Text</h4>
			  	<textarea class="contact-input text" name="text"></textarea> 
			</div>
			<div class="contact-row">
				<button id="contact-send-button">Send</button>
			</div>
		</div>
  	</div>
  	<div id="message-sent">
		<p id="message-sent-alert">
			Your message has been submitted. We will answer you within 24 hours.
		</p>
	</div>
	<div id="contact-right">
		<div id="map">
			<iframe id="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.6461618650137!2d44.73647295042225!3d41.70657368400889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447344e8047ced%3A0xb53d8ecd4495903f!2sBusiness%20and%20Technology%20University!5e0!3m2!1sen!2sge!4v1610695757399!5m2!1sen!2sge" width="100%" height="550" frameborder="0" style="border:0;" allowfullscreen></iframe>
		</div>
	</div>
</div>
`

var privacyHTML =
`
<div id="privacy-cont">
	<h1>Privacy Policy for AgroNet</h1>

<p>At agronet.com, accessible from agronet.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by agronet.com and how we use it.</p>

<p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

<p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in agronet.com. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Free Privacy Policy Generator</a>.</p>

<h2>Consent</h2>

<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

<h2>Information we collect</h2>

<p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
<p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
<p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

<h2>How we use your information</h2>

<p>We use the information we collect in various ways, including to:</p>

<ul>
<li>Provide, operate, and maintain our webste</li>
<li>Improve, personalize, and expand our webste</li>
<li>Understand and analyze how you use our webste</li>
<li>Develop new products, services, features, and functionality</li>
<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
<li>Send you emails</li>
<li>Find and prevent fraud</li>
</ul>

<h2>Log Files</h2>

<p>agronet.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

<h2>Cookies and Web Beacons</h2>

<p>Like any other website, agronet.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

<p>For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/">"What Are Cookies" from Cookie Consent</a>.</p>

<h2>Google DoubleClick DART Cookie</h2>

<p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

<h2>Our Advertising Partners</h2>

<p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

<ul>
    <li>
        <p>Google</p>
        <p><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
    </li>
</ul>

<h2>Advertising Partners Privacy Policies</h2>

<P>You may consult this list to find the Privacy Policy for each of the advertising partners of agronet.com.</p>

<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on agronet.com, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

<p>Note that agronet.com has no access to or control over these cookies that are used by third-party advertisers.</p>

<h2>Third Party Privacy Policies</h2>

<p>agronet.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

<p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

<h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

<p>Under the CCPA, among other rights, California consumers have the right to:</p>
<p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
<p>Request that a business delete any personal data about the consumer that a business has collected.</p>
<p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

<h2>GDPR Data Protection Rights</h2>

<p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
<p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
<p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
<p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
<p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
<p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
<p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

<h2>Children's Information</h2>

<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

<p>agronet.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>		
</div>
`

////////////////////////////////////////////////////////////////////////////////////////
