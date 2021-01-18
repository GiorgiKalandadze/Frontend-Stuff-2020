//Header navigation
document.addEventListener('click', function (e){
	// e.preventDefault();
	if(e.target.id == 'join-button'){
		document.getElementsByClassName('main-content')[0].innerHTML = registerHTML;

	}
	if(e.target.id == 'home-button'){
		document.getElementsByClassName('main-content')[0].innerHTML = startHTML;
	}
	if(e.target.id == 'login-button'){
		if(e.target.innerHTML == "Login"){
			document.getElementsByClassName('main-content')[0].innerHTML = loginHTML;
		} else {
			document.getElementsByClassName('main-content')[0].innerHTML = profileHTML;
		}
	}
	if(e.target.id == 'header-nav-main'){
		
		if(logged){
			document.getElementsByClassName('main-content')[0].innerHTML = mainHTML;
		} else {	
			document.getElementsByClassName('main-content')[0].innerHTML = startHTML;
		}		
	}
	if(e.target.id == 'header-nav-groups'){
		// history.pushState('a','asd','/iasna');
		document.getElementsByClassName('main-content')[0].innerHTML = groupsListHTML;
		loadGroups();
	}
	if(e.target.id == 'header-nav-farmers'){
		document.getElementsByClassName('main-content')[0].innerHTML = peopleListHTML;
		loadFarmers();
	}
	if(e.target.id == 'header-nav-trade'){
		document.getElementsByClassName('main-content')[0].innerHTML = tradeHTML;
		loadItems();
	}
	if(e.target.id == 'header-nav-about'){
		document.getElementsByClassName('main-content')[0].innerHTML = aboutHTML;
	}
	if(e.target.id == 'header-nav-contact'){
		document.getElementsByClassName('main-content')[0].innerHTML = contactHTML;
	}
}); 



//about
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
              <img id="ap" class="member-img" src="../Images/People/apa.jpg">
            </div>
            <h3 class="member-name">Luka Apkhaidze</h3>
            <h5 class="member-occupation">Economist</h5>
            <button class="member-contact">Contact</button>
          </div>
          <div class="member">
            <div class="member-img-div">
              <img id="bara" class="member-img" src="../Images/People/bara.jpg">
            </div>
            <h3 class="member-name">Giorgi Baramidze</h3>
            <h5 class="member-occupation">Business administration</h5>
            <button class="member-contact">Contact</button>
          </div>
          <div class="member">
            <div class="member-img-div">
              <img id="geta" class="member-img" src="../Images/People/geta.jpg">
            </div>
            <h3 class="member-name">Irakli Getashvili</h3>
            <h5 class="member-occupation">Social Media Manager</h5>
            <button class="member-contact">Contact</button>
          </div>
      </div>
  </div>
`
//Start
var startHTML = `<div class="top-row">
  		<div class="welcome">
		  	<h1>Adding Green to your Life</h1>
		  	<h3>Millions of people use agrolife to turn their ideas into reality.</h3>
		  	<button id="join-button" class="join">Join Agronet</button>
	  	</div>
		<div class="video">
		  	 <!-- <video autoplay loop muted width="auto" height="400">
			 	<source src="../Images/Agro.mp4" type="video/mp4">
		  		Your browser does not support the video tag.
			</video> -->
			<iframe width="560" height="315" src="https://www.youtube.com/embed/1bieukoWx1Q?autoplay=1&mute=1" frameborder="0"></iframe>
			
		</div>
		
	</div>

	<div class="mid-container">
		<div class="mid-text">
		<h3>AgroNet</h3>
		<h4>AgroNet - the viziers said, "King, why do you insist that you are old so soon? 
			For though it's true our rose has faded, we all know it as a boon.
			It still excels in scent and color though its day is far past noon.
			What kind of star dares offer challenge even to a waning moon.
		 </h4>
		 <h5>Oh, king, please don't speak thus to us: your rose is not faded today.
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
			<h4>Although a woman, she is a sovereign, ordained by God's decree. 
				We are not flattering you; but even in your absence agree. 
				Like her radiance, her deeds are as bright as the sunshine to see. 
				Lion's whelps are equally lions, though female or male they be.
			 </h4>
			 <h5>He kept his love-madness hidden, lodged deep within him like a dart.
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
				<p class="feature-description">	he who created the firmament, by that mighty power made beings
					inspired from on high with souls celestial; 
				</p>
			</div>

			<div class="feature-elem">
				
				<i class="fas fa-shield-alt"></i>
				<h4 class="feature-title">Safe</h4>
				<p class="feature-description">	when the soldiers hunted and sought their lord, and could no longer find the sun-faced, their countenances paled.
				</p>
			</div>

			<div class="feature-elem">
				
				<i class="fab fa-hubspot"></i>
				<h4 class="feature-title">Modern</h4>
				<p class="feature-description">	Shermadin assembled together the courtiers and nobles; he showed them the letter in which Avt’handil.
				</p>
			</div>

			<div class="feature-elem">
				
				<i class="fas fa-bolt"></i>
				<h4 class="feature-title">Fast</h4>
				<p class="feature-description">	When the soldiers hunted and sought their lord, and could no longer find the sun-faced, their countenances paled.
				</p>
			</div>
		</div>
	</div>`

//Register
var registerHTML = `<div class="register-container">
		<div class="registerBox">
			<form class="registerForm"action="" method="GET">
				<h2 class="registerFormTitle">Sign up</h2>
				<h5 id="register-alert">Register alert</h5>
				<div class="inputBox first">
					<div class="i">
						<i class="fas fa-user"></i>
					</div>
					<div>
						<input class="input" id="username-input-reg" name="username" type="text" placeholder="Username" onfocus="this.placeholder=''" onblur="this.placeholder='Username'">
					</div>
				</div>	
				<div class="inputBox third">
					<div class="i">
						<i class="fas fa-envelope-square"></i>
					</div>
					<div>
						<input class="input" id="email-input-reg" name="email" type="text" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'">			
					</div>
				</div>	
				<div class="inputBox second">
					<div class="i">
						<i class="fas fa-lock"></i>
					</div>
					<div>
						<input class="input" id="password-input-reg" name="password" type="password" placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'">	
					</div>
				</div>	
				<div class="inputBox fourth">
					<div class="i">
						<i class="fas fa-id-badge"></i>
					</div>
						<select id="status-input-reg" class="registerStatus">
							<option value="Status" selected="selected" class="initial">Status:</option>
							<option value="Farmer">Farmer</option>
							<option value="Company">Company</option>
							<option value="Agro-Expert">Agro-Expert</option>
							<option value="Agro-Journalist">Agro-Journalist</option>
							<option value="Volunteer">Volunteer</option>
						</select>
					
				</div>		
				<input type="submit" id="register-button" class="btn" value="Sign Up">
			</form>
		</div>
		<img id="registerBackImg"src="../Images/Register/reg.png">
	</div>`


//Login
var loginHTML = `<div class="login-container">
		<img id="loginBackImg" src="../Images/Login/log.svg">
		<div class="loginBox">
			<form class="loginForm"action="" method="GET">
				<img src="../Images/Login/profile2.png" class="avatar">
				<h2>Welcome</h2>
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

				<a id="forgot"href="#">Forgot Password?</a>
				<input type="submit" id="loginFormButton" value="Login">

			</form>
		</div>
	</div>`


//Main page - logged in; posts; contact; ads
var mainHTML = `<div id="main-feed-cont">
  		<div id="main-feed-left">
        <div class="left-ad">
          <img class="left-ad-img" src="../Images/Ads/ad3.png">
        </div>
        <div class="left-ad">
          <img class="left-ad-img" src="../Images/Ads/ad4.png">
        </div>
      </div>

  		<div class="containerPost">
  		 <div id="vip">
          <button class="vip-slide" id="prev">&#10094;</button>
          <div class="vip-item">
            <img class="vip-img" id="0" src="../Images/Items/tools1.png">
          </div>
          <div class="vip-item">
            <img class="vip-img" id="1"src="../Images/Items/tools2.jpg">
          </div>
          <div class="vip-item">
            <img class="vip-img" id="2"src="../Images/Items/tools3.jpg">
          </div>
           <div class="vip-item">
            <img class="vip-img"  id="3"src="../Images/Items/tractor1.jpg">
          </div> 
          <button class="vip-slide" id="next">&#10095;</button>
        </div>
		  	<div class="post">
		  		<div class="postfirstRow">
		  			<img class="postAvatar" src="../Images/People/farmer0M.jpg">
		  			<p class="postAuthorName">Giorgi Beridze</p>
		  			<p class="postDate">26 Oct</p>
		  		</div>
		  		<hr>
		  		<div class="postSecondRow">
		  		<p class="postText">
		  			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		  		</p>
		  		</div>
		  		<div class="postThirdRow">
		  			<img class="postImg" src="../Images/Posts/post1.jpg">
		  		</div>

		  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
		  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
		  	</div>
		  	<div class="ad">
          		<img class="post-ad" src="../Images/Ads/ad2.jpg">
        	</div>
		  	<div class="post">
		  		<div class="postfirstRow">
		  			<img class="postAvatar" src="../Images/People/farmer3F.jpg">
		  			<p class="postAuthorName">Nino Menabdze</p>
		  			<p class="postDate">24 Nov</p>
		  		</div>
		  		<hr>
		  		<div class="postSecondRow">
		  		<p class="postText">
		  			Aenean vel nunc quam. Sed a enim lacinia, condimentum nisl vel, commodo dui. Maecenas luctus orci non leo consectetur, consequat dictum ipsum eleifend.
		  		</p>
		  		</div>
		  		<div class="postThirdRow">
		  			<img class="postImg du" src="../Images/Posts/post 2.jpg">
		  			<img class="postImg du" src="../Images/Posts/post 2(2).jpg">
		  		</div>

		  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
		  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
		  	</div>

		  	<div class="post">
		  		<div class="postfirstRow">
		  			<img class="postAvatar" src="../Images/People/farmer6M.jpg">
		  			<p class="postAuthorName">Archil Gamzardia</p>
		  			<p class="postDate">05 Sep</p>
		  		</div>
		  		<hr>
		  		<div class="postSecondRow">
		  		<p class="postText">
		  			Check out new vision in AgroCulture <3. France
		  		</p>
		  		</div>
		  		<div class="postThirdRow">
		  			<iframe width="560" height="315" src="https://www.youtube.com/embed/1bieukoWx1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		  		</div>

		  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
		  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
		  	</div>
  		</div>


  		<div id="main-feed-right">
  			<h3 id="contact-label">Contact</h3>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer0M.jpg">
  				<h5 class="chat-name">James Gordon</h5>
  			</div>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer1M.jpg">
  				<h5 class="chat-name">Selena Brimms</h5>
  			</div>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer2M.jpg">
  				<h5 class="chat-name">Gustav Pather</h5>
  			</div>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer3F.jpg">
  				<h5 class="chat-name">Oscar Merchant</h5>
  			</div>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer4F.jpg">
  				<h5 class="chat-name">Steve O'Brien</h5>
  			</div>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer5F.jpg">
  				<h5 class="chat-name">Helen Gomez</h5>
  			</div>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer6M.jpg">
  				<h5 class="chat-name">Leonard Swift</h5>
  			</div>
  			<div class="main-contact-row">
  				<img class="chat-img" src="../Images/People/farmer7F.jpg">
  				<h5 class="chat-name">George Halpert</h5>
  			</div>
  			
  			<div id="fixed-ad">
          		<img id="fixed-img" src="../Images/Ads/ad1.jpg">
        	</div>
        	<div id="fixed-ad">
          		<img id="fixed-img" src="../Images/Ads/ad5.png">
        	</div>
  		</div>
	
  	</div>`

//User profile
var profileHTML = `<div class="biggest">
  <div id="container">
    <div id="left-box">
      <img id="profile-img" src="../Images/People/farmer0M.jpg" style="width: 100%">
      <div id="info">
        <h3>Giorgi Beridze</h3>
        <p>
          <i class="fas fa-briefcase"></i>
          Farmer
        </p>
        <p>
          <i class="fas fa-home"></i>
          Kvareli,GEO
        </p>
        <p>
          <i class="fas fa-envelope"></i>
          giorgi_beridze@gmail.com
        </p>
        <p>
          <i class="fas fa-phone-alt"></i>
          +995503875695
        </p>
        
        <!-- <footer class="social-footer">
          <hr class="profile-hr">
          <p>Find me on social media</p>
          <div class="social-icons">
            <i class="social fab fa-twitter"></i>
            <i class="social fab fa-facebook"></i>
            <i class="social fab fa-instagram"></i>
            <i class="social fab fa-google"></i>
            <i class="social fab fa-linkedin"></i>
          </div>
          <hr class="profile-hr">
        </footer> -->
        
      </div>
      <div class="profile-left-buttons">
        <button id="edit-profile" class="profile-left-button">Edit Profile</button>
        <button id="log-out" class="profile-left-button">Log Out</button>
      </div>
    </div>
    
    <div id="right-box">
      
     <div class="experience">
        <h2><i class="mm fas fa-suitcase"></i>Work Experience</h2>
        <div class="work-box">
          <h4>Front end Developer</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2015 - Present
          </p>
          <h5>Ut a metus bibendum, venenatis ex non, bibendum ligula. Suspendisse convallis venenatis ultricies. Donec eu massa a lectus lacinia egestas. Curabitur a lacus sed sem convallis ultricies at eu orci.</h5>
        </div>
        <hr>
        <div class="work-box">
          <h4>Software Developer</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2007 - 2015
          </p>
          <h5>Ut a metus bibendum, venenatis ex non, bibendum ligula. Suspendisse convallis venenatis ultricies. Donec eu massa a lectus lacinia egestas. Curabitur a lacus sed sem convallis ultricies at eu orci.</h5>
        </div>
    
      </div>

      <div class="experience">
        <h2><i class="mm fas fa-graduation-cap"></i>Education</h2>

        <div class="education-box">
          <h4>42 Public School</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2015 - Present
          </p>
          <h5>UNam volutpat velit eu elit malesuada, vel fringilla est ullamcorper. Curabitur accumsan mauris ex, eu feugiat erat venenatis sed. Vivamus vel quam tortor.</h5>
        </div>
        <hr>
        <div class="education-box">
          <h4>Buckswood School Tbilisi</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2010 - 2014
          </p>
          <h5>Curabitur eget nisl tincidunt, congue lectus sed, dictum leo. Etiam viverra diam sed condimentum efficitur.</h5>
        </div>
        
      </div> 
    </div>  
  </div>
</div>`


//user edit profile 
var editProfileHTML = 
`
	<div id="edit-profile-box">
    	<div id="edit-profile-row">
        	<h4 id="first-edit-profile-label"class="edit-profile-row-label">Username</h4>
          	<input class="edit-profile-input" type="text" id="edit-profile-row-username" name="username">
        </div> 
        <div id="edit-profile-row">
        	<h4 class="edit-profile-row-label">Password</h4>
          	<input class="edit-profile-input"type="text" id="edit-profile-row-password" name="password">
        </div>
        <div id="edit-profile-row">
        	<h4 class="edit-profile-row-label">Email</h4>
          	<input class="edit-profile-input"type="text" id="edit-profile-row-email" name="email">
        </div>
        <div id="edit-profile-row">
          	<h4 class="edit-profile-row-label">Status</h4>
          	<input class="edit-profile-input" type="text" id="edit-profile-row-status" name="status">
        </div>

        <button id="edit-profile-save-changes">Save Changes</button>
	</div>
 `

//profile experience
var profileExperienceHTML = 
`<div class="experience">
        <h2><i class="mm fas fa-suitcase"></i>Work Experience</h2>
        <div class="work-box">
          <h4>Front end Developer</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2015 - Present
          </p>
          <h5>Ut a metus bibendum, venenatis ex non, bibendum ligula. Suspendisse convallis venenatis ultricies. Donec eu massa a lectus lacinia egestas. Curabitur a lacus sed sem convallis ultricies at eu orci.</h5>
        </div>
        <hr>
        <div class="work-box">
          <h4>Software Developer</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2007 - 2015
          </p>
          <h5>Ut a metus bibendum, venenatis ex non, bibendum ligula. Suspendisse convallis venenatis ultricies. Donec eu massa a lectus lacinia egestas. Curabitur a lacus sed sem convallis ultricies at eu orci.</h5>
        </div>
    
      </div>

      <div class="experience">
        <h2><i class="mm fas fa-graduation-cap"></i>Education</h2>

        <div class="education-box">
          <h4>42 Public School</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2015 - Present
          </p>
          <h5>UNam volutpat velit eu elit malesuada, vel fringilla est ullamcorper. Curabitur accumsan mauris ex, eu feugiat erat venenatis sed. Vivamus vel quam tortor.</h5>
        </div>
        <hr>
        <div class="education-box">
          <h4>Buckswood School Tbilisi</h4>
          <p>
            <i class="fas fa-calendar-alt"></i>
            2010 - 2014
          </p>
          <h5>Curabitur eget nisl tincidunt, congue lectus sed, dictum leo. Etiam viverra diam sed condimentum efficitur.</h5>
        </div>
        
      </div>
      `
//contact us page
var contactHTML = `<div id="contact-cont">
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
				  	<button id="send-button">Send</button>
				  	</div>
			  	</div>
  		</div>

		<div id="contact-right">
		  		<div id="map">
		  		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.6461618650137!2d44.73647295042225!3d41.70657368400889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447344e8047ced%3A0xb53d8ecd4495903f!2sBusiness%20and%20Technology%20University!5e0!3m2!1sen!2sge!4v1610695757399!5m2!1sen!2sge" width="800" height="550" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		  		</div>
		 </div>
  	</div>`



var groupsListHTML = 
`<div class="group-cont">
		<div class="group-left">
			<div class="group-categorys">
				<button id="birds" class="category">Birds</button>
				<button id="animals"class="category">Animals</button>
				<button id="fruit"class="category">Fruit</button>
				<button id="vegetable"class="category">Vegetable</button>
				<button id="tech"class="category">Technology</button>
			</div>	
		</div>
		<div class="group-right">
			<div class="group-list">
			</div>
		</div>
</div>`



var groupinHTML =
`<div class="group-in">
				<div class="group-info">
					<div id="group-back-img-div">
						<img class="group-background-img" src="">
					</div>
					<div id="group-in-second-line">
						<div id="group-description">
							<h3>Tech in Agro</h3>
							<h5>2,560 Members</h5>
						</div>
						<div class='two-buttons'>
							<button id="back">Back</button>
							<button id="follow-group">Follow</button>
							<button id="followed-group"><i class="fas fa-check"></i>Followed</button>
						</div>
					</div>
				</div>
				<div class="containerPost">
		  			<div class="post">
				  		<div class="postfirstRow">
				  			<img class="postAvatar" src="../Images/People/farmer0M.jpg">
				  			<p class="postAuthorName">Giorgi Beridze</p>
				  			<p class="postDate">26 Oct</p>
				  		</div>
		  				<hr>
			  			<div class="postSecondRow">
				  			<p class="postText">
				  				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				  			</p>
			  			</div>
				  		<div class="postThirdRow">
				  			<img class="postImg" src="../Images/Posts/post1.jpg">
				  		</div>
				  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
				  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
		  			</div>

		  			<div class="post">
		  				<div class="postfirstRow">
		  					<img class="postAvatar" src="../Images/People/farmer3M.jpg">
				  			<p class="postAuthorName">Nino Menabdze</p>
				  			<p class="postDate">24 Nov</p>
		  				</div>
		  				<hr>
		  				<div class="postSecondRow">
		  					<p class="postText">
		  						Aenean vel nunc quam. Sed a enim lacinia, condimentum nisl vel, commodo dui. Maecenas luctus orci non leo consectetur, consequat dictum ipsum eleifend.
		  					</p>
		  				</div>
				  		<div class="postThirdRow">
				  			<img class="postImg du" src="../Images/Posts/post 2.jpg">
				  			<img class="postImg du" src="../Images/Posts/post 2(2).jpg">
				  		</div>
				  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
				  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
		  			</div>

				  	<div class="post">
				  		<div class="postfirstRow">
				  			<img class="postAvatar" src="../Images/People/farmer6M.jpg">
				  			<p class="postAuthorName">Archil Gamzardia</p>
				  			<p class="postDate">05 Sep</p>
				  		</div>
				  		<hr>
				  		<div class="postSecondRow">
					  		<p class="postText">
					  			Check out new vision in AgroCulture <3. France
					  		</p>
				  		</div>
				  		<div class="postThirdRow">
				  			<iframe width="560" height="315" src="https://www.youtube.com/embed/1bieukoWx1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				  		</div>

				  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
				  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
				  	</div>
  				</div>
			</div>
`

var peopleListHTML = 
`
	<div class="farmers-container">
      <div class="search-container">
        <input id='farmers-search'type="text" placeholder="Search.." name="search">
        <button id="farmer-search-button" type="submit"><i class="fa fa-search"></i></button>
		  </div>
		  <div class="avatarList" id='farmers-list'>
		  </div>
    </div>
`





var nav1 = '<h3>NAV1</h3>'
var nav2 = '<h3>NAV2</h3>'
var nav3 = '<h3>NAV3</h3>'
var nav4 = '<h3>NAV4</h3>'
var nav4 = '<h3>NAV5</h3>'







var logged = false;
var loggedID = 0;
/*Login and Register*/
var users = 
[
	{"username":"giorgi", "password": "giorgi123", "id":"0", 
		"email":"giorgi@gmail.com", "status":"Farmer"},
	{"username":"taso", "password": "taso123", "id":"1",
		"email":"taso@gmail.com", "status":"Company"},
	{"username":"dito", "password": "dito123", "id":"2",	
		"email":"dito@gmail.com", "status":"Volunteer"},
	{"username":"sandro", "password": "sandro123", "id":"3",
		"email":"sandro@gmail.com", "status":"Agro-Expert"}
]



//Buttons
document.addEventListener('click', function (e){
	// e.preventDefault();
	if(e.target.id == 'loginFormButton'){
		var valid = checkUserLogin();
		if(valid){
			document.getElementById('login-button').innerHTML = document.getElementById("username-input").value;
			document.getElementsByClassName('main-content')[0].innerHTML = mainHTML;
			logged = true;
			
		} else {
			document.getElementsByClassName('main-content')[0].innerHTML = loginHTML;
			document.getElementById('wrong-login').style.visibility = "visible";
		}
	}

	if(e.target.id == 'register-button'){
		var exist = checkUserExist();
		if(exist){
			document.getElementById("register-alert").innerHTML = 'Username taken';
			document.getElementById("register-alert").style.visibility = 'visible';
		} else {
			var username = document.getElementById("username-input-reg").value;
			var password = document.getElementById("password-input-reg").value;
			var email = document.getElementById("email-input-reg").value;
			var status = document.getElementById("status-input-reg").value;

			if(username == "" || password == "" || email == "" || status=="Status"){
				document.getElementById("register-alert").style.visibility = 'visible';
				document.getElementById("register-alert").innerHTML = 'Please fill all fields';
			} else {
				users.push({
					"username": username, 
					"password": password, "id":"?", 
					"email": email, "status":status
				}
				)

				document.getElementById("register-alert").innerHTML = "";
				document.getElementById("register-alert").style.visibility = "hidden";
				document.getElementsByClassName('main-content')[0].innerHTML = mainHTML;
			}
		}
	}

})


function checkUserExist(){
	var username = document.getElementById("username-input-reg").value;
	for(i in users){
		var user = users[i];
		if(user.username == username){
			return true;
		}
	}
	return false;

}
function checkUserLogin(){
	var username = document.getElementById("username-input").value;
	var password = document.getElementById("password-input").value;

	for(i in users){
		var user = users[i];
		if(user.username == username){
			if(user.password == password){
				return true;
			}
		}
	}
	return false;
}

//Profile
document.addEventListener('click', function (e){
	if(e.target.id == "log-out"){
		document.getElementsByClassName('main-content')[0].innerHTML = startHTML;
	}
	if(e.target.id == "edit-profile"){
		document.getElementById('right-box').innerHTML = editProfileHTML;
		user = users[loggedID];
		document.getElementById('edit-profile-row-username').value = user.username;
		document.getElementById('edit-profile-row-password').value = user.password;
		document.getElementById('edit-profile-row-email').value = user.email;
		document.getElementById('edit-profile-row-status').value = user.status;
	}
	if(e.target.id == 'edit-profile-save-changes'){
		//var username = document.getElementById('edit-profile-row-username').value;
		var password = document.getElementById('edit-profile-row-password').value;
		var email = document.getElementById('edit-profile-row-email').value;
		var status = document.getElementById('edit-profile-row-status').value;
		
		users[loggedID].password = password;
		users[loggedID].email = email;
		users[loggedID].status = status;

		document.getElementById('right-box').innerHTML = profileExperienceHTML;
	}
})

//Groups List
var groups = 
[
	{"name":"West Birds", "category": "bird", "id":"0", 
		"img":"../Images/Group/birds1.png", 
		"description":"Sed non purus nec mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"followers":"2,345"},
	{"name":"Tech in Agro", "category": "tech", "id":"1", 
		"img":"../Images/Group/tech1.jpg", 
		"description":"Ut molestie sodales molestie. Praesent euismod turpis eu posuere elementum.Pellentesque ac eros eu urna tincidunt feugiat.  ",
		"followers":"1,593"},
	{"name":"Winter Fruit", "category": "fruit", "id":"2", 
		"img":"../Images/Group/fruit1.jpeg", 
		"description":"sodales ante eu tellus feugiat pulvinar. Nullam in velit felis. Phasellus blandit pretium lacus sit amet semper. ",
		"followers":"3,153"},
	{"name":"Asian Horses", "category": "animal", "id":"3", 
		"img":"../Images/Group/animals2.jpg", 
		"description":"Pellentesque ac eros eu urna tincidunt feugiat. Sed lacinia est et interdum efficitur. Curabitur eu consectetur libero, vitae maximus quam. ",
		"followers":"6,784"},
	{"name":"Mountain birds", "category": "bird", "id":"4", 
		"img":"../Images/Group/birds2.jpg", 
		"description":"Phasellus ac ligula eu elit tincidunt congue. Mauris vitae orci porta, blandit massa eu, malesuada neque.",
		"followers":"897"},
	{"name":"west birds", "category": "bird", "id":"5", 
		"img":"../Images/Group/birds3.jpeg", 
		"description":"Sed non purus nec mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"followers":"2,345"},
]
document.addEventListener('click', function (e){
	// e.preventDefault();
	if(e.target.id == 'birds'){
		filterGroups(e, 'group bird');
	}
	if(e.target.id == 'animals'){
		filterGroups(e, 'group animal');
	}
	if(e.target.id == 'fruit'){
		filterGroups(e, 'group fruit');
	}
	if(e.target.id == 'vegetable'){
		filterGroups(e, 'group vegetable');
	}
	if(e.target.id == 'tech'){
		filterGroups(e, 'group tech');
	}
	if(e.target.id == 'back'){
		document.getElementsByClassName('group-cont')[0].innerHTML = groupsListHTML;
		loadGroups();
		checked = 0;
	}
	if(e.target.id == 'follow-group'){
		document.getElementById('follow-group').style.display = 'none';
		document.getElementById('followed-group').style.display = 'block';
		
	}
	if(e.target.id == 'followed-group'){
		document.getElementById('followed-group').style.display = 'none';
		document.getElementById('follow-group').style.display = 'block';
	}
	if(e.target.className == 'groupImg'){
		document.getElementsByClassName('group-right')[0].innerHTML = groupinHTML;
		var src = '';
		for(i = 0; i < groups.length; i++){
			if(groups[i].id == e.target.id){
				src = groups[i].img;
			}
		}
		
		document.getElementsByClassName('group-background-img')[0].src = src;
	}
	if(e.target.className == 'listAvatar'){
		document.getElementsByClassName('main-content')[0].innerHTML = profileHTML;
		document.getElementsByClassName('profile-left-button')[0].style.visibility = 'hidden';
		document.getElementsByClassName('profile-left-button')[1].style.visibility = 'hidden';
		var src = '';
		for(i = 0; i < farmers.length; i++){
			if(farmers[i].id == e.target.id){
				src = farmers[i].img;
			}
		}
		
		document.getElementById('profile-img').src = src;
	}
	
})
var checked = 0;

function displayAllGroups(){
	var buttons = document.getElementsByClassName("category");	
	for(j = 0; j < buttons.length; j++){
		buttons[j].style.backgroundColor='white';
		buttons[j].style.color='black';
		buttons[j].style.display='block';
	}
	var groups = document.getElementsByClassName("group");
	for(i = 0; i < groups.length; i++){
		groups[i].style.display = "block";
	}
}
function removeAllGroups(){
	var groups = document.getElementsByClassName("group");
	for(i = 0; i < groups.length; i++){
		groups[i].style.display = "none";
	}
}

function filterGroups(e, type){
	var elem = document.getElementById(e.target.id);
	
	var st = window.getComputedStyle(elem, null);

	if(checked == 0){
		removeAllGroups();
	}
	var groups = document.getElementsByClassName(type);
	
	if(st.backgroundColor == 'rgb(255, 255, 255)'){
		
		checked += 1;
		for(i = 0; i < groups.length; i++){
			groups[i].style.display = 'block';
			
		}
		e.target.style.backgroundColor = '#536272';
		e.target.style.color = 'white';
		
	} else {
		
		checked -= 1;
		if(checked == 0){
			displayAllGroups();
		} else {
			for(i = 0; i < groups.length; i++){
				groups[i].style.display = 'none';
				
			}
			e.target.style.backgroundColor = 'white';
			e.target.style.color = 'black';
		}
	}
}

function loadGroups(){

	for(i = 0; i < groups.length; i++){
		var group = groups[i];
		var div = document.createElement('div');
		div.className = 'group ' + group.category;
		var img = document.createElement('img');
		img.src = group.img;
		img.className = 'groupImg';
		img.id = group.id;
		var h3 = document.createElement('h3');
		h3.className = 'groupTitle';
		h3.innerHTML  = group.name;
		
		var p = document.createElement('p');
		p.innerHTML = group.description;
		p.className = 'groupDescription';
		div.appendChild(img);
		div.appendChild(h3);
		
		div.appendChild(p);
		document.getElementsByClassName('group-list')[0].appendChild(div);

	}
}

/*Peope, farmers */
var farmers = 
[
	{"name":"Aidan Butler", 'gender':'male', 'profession':'Soil and plant scientist', 
		'img':'../Images/People/farmer0M.jpg', 'id':'0'},
	{"name":"Olive Peterson", 'fegender':'female', 'profession':'Farmer', 
		'img':'../Images/People/farmer3F.jpg', 'id':'1'},
	{"name":"Aaron Jenkins", 'gender':'male', 'profession':'Agricultural economist', 
		'img':'../Images/People/farmer1M.jpg', 'id':'2'},
	{"name":"Joey Cox", 'gender':'male', 'profession':'Conservation planner', 
		'img':'../Images/People/farmer2M.jpg', 'id':'3'},
	{"name":"Luna Evans", 'gender':'female', 'profession':'Farmer', 
		'img':'../Images/People/farmer4F.jpg', 'id':'4'},
	{"name":"Valentina Flores", 'gender':'female', 'profession':'Agricultural salesperson ', 
		'img':'../Images/People/farmer5F.jpg', 'id':'5'},
	{"name":"Martin Murray", 'gender':'male', 'profession':'Farmer', 
		'img':'../Images/People/farmer6M.jpg', 'id':'6'},
	{"name":"Angelina Everly", 'gender':'mfeale', 'profession':'Agricultural Expert', 
		'img':'../Images/People/farmer7F.jpg', 'id':'7'},
]

function loadFarmers(){
	for(i = 0; i < farmers.length; i++){
		var farmer = farmers[i];
		var div = document.createElement('div');
		div.className = 'info';
		var img = document.createElement('img');
		img.className = 'listAvatar';
		img.src  = farmer.img;
		img.id = farmer.id;
		var name = document.createElement('h4');
		name.innerHTML = farmer.name;
		var profession = document.createElement('h4');
		profession.innerHTML = farmer.profession;
		div.appendChild(img);
		div.appendChild(name);
		div.appendChild(profession);
		document.getElementById('farmers-list').appendChild(div);
	}
}





//Trade, Items, Item info  ///////////////////////////////////////////////////////////////////////////////////
var checkedCounter = 0;

function displayAllItems(){
	var itemsArr = document.getElementsByClassName("trade-item");
	for(i = 0; i < itemsArr.length; i++){
		itemsArr[i].style.display = "block";
	}
}
function removeAllItems(){
	var itemsArr = document.getElementsByClassName("trade-item");
	for(i = 0; i < itemsArr.length; i++){
		itemsArr[i].style.display = "none";
	}
}

function filterItems(e){
	if(checkedCounter == 0){
		removeAllItems();
	}
	var itemsArr = document.getElementsByClassName('trade-item');
	var splitted = e.target.className.split("-");
	var filter = splitted[1];
	var elem = splitted[2];
	var checked = document.getElementsByClassName(e.target.className)[0].checked;
	
	if(checked){
		checkedCounter += 1;
		for(i = 0; i < itemsArr.length; i++){
			var item = itemsArr[i];
			
			if(item.getElementsByClassName('item-' + filter)[0].innerHTML == elem){
				item.style.display = 'block';
			} 	
		}
	} else {
		checkedCounter -= 1;
		if(checkedCounter == 0){
			displayAllItems();
		} else {
			for(i = 0; i < itemsArr.length; i++){
			var item = itemsArr[i];
			
			if(item.getElementsByClassName('item-' + filter)[0].innerHTML == elem){
				item.style.display = 'none';
			} 	
		}
		}
	}
	
}

document.addEventListener('click', function (e){
	//e.preventDefault();
	if(e.target.className == 'item-img'){
		document.getElementsByClassName('trade-right')[0].innerHTML = itemInHTML;
		loadItemIn(e);
	}
	if(e.target.className.includes("trade", 0)){
		filterItems(e);
	}
	if(e.target.id == 'trade-in-back'){
		document.getElementsByClassName('trade-right')[0].innerHTML = '';
		loadItems();
	}
	
})

var items = 
[
	{"name":"Agro Tools", "type": "tools", "id":"0", 
		"img":"../Images/Items/tools1.png", 
		"description":"Sed non purus nec mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"price":"78$", "location":"Tbilisi", 'delivery':'Yes'},
	{"name":"Agro Tools", "type": "tools", "id":"1", 
		"img":"../Images/Items/tools2.jpg", 
		"description":" mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"price":"85$", "location":"Kutaisi", 'delivery':'No'},
	{"name":"Agro Tools", "type": "tools", "id":"2", 
		"img":"../Images/Items/tools3.jpg", 
		"description":"Scelerisque in dictum non consectetur a erat nam at lectus. ",
		"price":"94$", "location":"Batumi", 'delivery':'Yes'},

	{"name":"Tractor", "type": "transport", "id":"3", 
		"img":"../Images/Items/tractor1.jpg", 
		"description":"Arcu felis bibendum ut tristique et. Sed adipiscing diam donec adipiscing tristique. ",
		"price":"4700$", "location":"Batumi", 'delivery':'No'},
	{"name":"Tractor", "type": "transport", "id":"4", 
		"img":"../Images/Items/tractor2.jpg", 
		"description":"Semper feugiat nibh sed pulvinar proin. Habitant morbi tristique senectus et.",
		"price":"7100$", "location":"Tbilisi", 'delivery':'No'},
	{"name":"Tractor", "type": "transport", "id":"5", 
		"img":"../Images/Items/tractor3.jpg", 
		"description":"Senectus et netus et malesuada. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. ",
		"price":"10200$", "location":"Kutaisi", 'delivery':'No'},
	{"name":"Tractor", "type": "transport", "id":"6", 
		"img":"../Images/Items/tractor4.png", 
		"description":"Tellus pellentesque eu tincidunt tortor. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.",
		"price":"15700$", "location":"Tbilisi", 'delivery':'No'},
]


function loadItems(){
	var d = document.createElement('div');
	d.className = 'trade-list';
	for(i = 0; i < items.length; i++){
		var item = items[i];
		var div = document.createElement('div');
		div.className = 'trade-item';
		var img = document.createElement('img');
		img.src = item.img;
		img.className = 'item-img';
		img.id = item.id;
		var h3 = document.createElement('h3');
		h3.className = 'item-title';
		h3.innerHTML  = item.name;
		var type = document.createElement('p');
		type.className ='item-type';
		type.innerHTML = item.type;
		var location = document.createElement('p');
		location.className ='item-location';
		location.innerHTML = item.location;
		var p = document.createElement('p');
		p.innerHTML = item.description;
		p.className = 'item-description';
		div.appendChild(img);
		div.appendChild(h3);
		div.appendChild(type);
		div.appendChild(location);
		div.appendChild(p);
		d.appendChild(div);
	}
	document.getElementsByClassName('trade-right')[0].appendChild(d);
	
}



// var slider = document.getElementById("price-ranger");
// var output = document.getElementById("price-value");
// output.innerHTML = slider.value; // Display the default slider value
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = document.getElementById("price-ranger").value;
// }



var itemInHTML = 
`<div class="item-in">
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
							<label>Location:</label>
							<label class="item-in-value" id="item-in-location"></label>
						</div>
					
					</div>
					<button id="trade-in-back">Back</button>
				</div>
			</div>
`

var tradeHTML = 
`
<div class="trade-cont">
		<div class="trade-left">
			<div class="trade-categorys">
				<div class="filter-box">
					<label class="trade-category-label">Type</label>
					<ul class='filter-checkboxes'>

						<li>
							<input type="checkbox" class="trade-type-fruit"><label>Fruit
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-vegetable"><label>Vegetable
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-animal"><label>Animal
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-bird"><label>Bird
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-bean"><label>Bean
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-transport"><label>Transport
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-tools"><label>Tools
							</label>
						</li><li>
							<input type="checkbox" class="trade-type-farms"><label>Farms
							</label>
						</li>
						
					</ul>
				</div>
				<hr class="trade-hr">
				<div class="filter-box">
					<label class="trade-category-label" id="price-inp">Price</label>
					<input type="range" min="1" max="1000" value="500" class="slider" 
							id="price-ranger">
					<p id="price">Value: <span id="price-value"></span></p>
				</div>	
				<hr class="trade-hr">
				<div class="filter-box">
					<label class="trade-category-label">Location</label>
					<ul class='filter-checkboxes'>
						<li>
							<input type="checkbox" class="trade-location-Tbilisi"><label>Tbilisi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Batumi"><label >Batumi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Kutaisi"><label>Kutaisi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Telavi"><label>Telavi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Zugdidi"><label>Zugdidi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Abroad"><label>Abroad
							</label>
						</li>
						
					</ul>
				</div>
				<hr class="trade-hr">
				<div class="filter-box">
					<label class="trade-category-label">Delivery</label>
					<ul class='filter-checkboxes'>
						<li>
							<input type="checkbox" class="trade-delivery-yes">Yes<label>
							</label>
						</li>
					</ul>
				</div>
				<hr class="trade-hr">
			</div>	
		</div>
		
		<div class="trade-right">
			
		</div>
	</div>
`


function loadItemIn(e){
	var id = e.target.id;
	var item = items[id];
	document.getElementsByClassName('item-in-back-img')[0].src = item.img;
	document.getElementById('item-in-name').innerHTML = item.name;
	document.getElementById('item-in-price').innerHTML = item.price;
	document.getElementById('item-in-location').innerHTML = item.location;
	document.getElementsByClassName('trade-right')[0].style.height = '650px';
	
}


//Vip slider ///////////////////////////////////////////////////////////////////////
document.addEventListener('click', function (e){
	
	if(e.target.className == 'vip-slide'){
		if(e.target.id == 'next'){
			vipCounter += 1;
		} else {
			vipCounter -= 1;
		}
		changeSlide(vipCounter);
	}
	if(e.target.className == 'vip-img'){
		document.getElementsByClassName('main-content')[0].innerHTML = tradeHTML;
		loadItems();
		document.getElementsByClassName('trade-right')[0].innerHTML = itemInHTML;
		loadItemIn(e);

	}
});
var vipCounter = 0;
function changeSlide(counter){
	if(counter < 0){
		counter = items.length + counter;
	}
	if(counter >= items.length){
		counter = counter % items.length;
	}

	var slides = document.getElementsByClassName('vip-img');
	slides[0].src = items[counter].img;
	slides[1].src = items[(counter + 1) % items.length].img;
	slides[2].src = items[(counter + 2) % items.length].img;
	slides[3].src = items[(counter + 3) % items.length].img;
}