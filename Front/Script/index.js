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
			loadProfile(loggedID - 1);
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
	if(e.target.id == 'header-nav-people'){
		document.getElementsByClassName('main-content')[0].innerHTML = peopleListHTML;
		loadPeople();
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
              <img id="ap" class="member-img" src="../Images/People/tristan.jpg">
            </div>
            <h3 class="member-name">Tristan Harris</h3>
            <h5 class="member-occupation">Computer Scientist</h5>
            <button class="member-contact">Contact</button>
          </div>
          
          <div class="member">
            <div class="member-img-div">
              <img id="geta" class="member-img" src="../Images/People/cv.jpg">
            </div>
            <h3 class="member-name">Giorgi Kalandadze</h3>
            <h5 class="member-occupation">Software Developer</h5>
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
		<img id="registerBackImg"src="../Images/Register/reg.png">
	</div>
`


//Login
var loginHTML = `<div class="login-container">
		<img id="loginBackImg" src="../Images/Login/log.svg">
		<div class="loginBox">
			<div class="loginForm">
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

			</div>
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
      <img id="profile-left-img" src="">
      <div id="info">
        <h3 id="profile-name"></h3>
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
     <div class="experience" id="experience-work">
        <h2><i class="mm fas fa-suitcase"></i>Work Experience</h2> 
      </div>
      <div class="experience" id="experience-education">
        <h2><i class="mm fas fa-graduation-cap"></i>Education</h2>
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
		  		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.6461618650137!2d44.73647295042225!3d41.70657368400889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447344e8047ced%3A0xb53d8ecd4495903f!2sBusiness%20and%20Technology%20University!5e0!3m2!1sen!2sge!4v1610695757399!5m2!1sen!2sge" width="800" height="550" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		  		</div>
		 </div>
  	</div>`



var groupsListHTML = 
`<div class="group-cont">
		<div class="group-left">
			<div class="group-categorys">
				<button id="Animals"class="category">Animals</button>
				<button id="Birds" class="category">Birds</button>
				<button id="Birds" class="category">Chemicals</button>
				<button id="Birds" class="category">Equipment</button>
				<button id="Fruit"class="category">Fruit</button>
				<button id="Birds" class="category">Plants</button>
				<button id="Birds" class="category">Seeds</button>
				<button id="Vegetable"class="category">Vegetable</button>
				<button id="Technology"class="category">Technology</button>
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
	<div class="people-container">
      <div class="search-container">
        <input id='people-search-name'  class="people-search" "type="text" placeholder="Search by name" name="search">
        <input id='people-search-occupation' class="people-search" "type="text" placeholder="Search by Occupation" name="search">
        <!--
        <button id="people-search-button" type="submit"><i class="fa fa-search"></i></button>
        -->
		  </div>
		  <div class="avatarList" id='people-list'>
		  </div>
    </div>
`





var nav1 = '<h3>NAV1</h3>'
var nav2 = '<h3>NAV2</h3>'
var nav3 = '<h3>NAV3</h3>'
var nav4 = '<h3>NAV4</h3>'
var nav4 = '<h3>NAV5</h3>'





//Profile
document.addEventListener('click', function (e){
	
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


/*Peope, farmers */
function loadPeople(){
	for(i in profiles){
		person = profiles[i];
		var farmer = person[i];
		var div = document.createElement('div');
		div.className = 'info';
		var img = document.createElement('img');
		img.className = 'listAvatar';
		img.src  = "../Images/People/" + person.img;
		img.id = person.id;
		var name = document.createElement('h4');
		name.className = "personName";
		name.id = "personNameID";
		name.innerHTML = person.name + " " + person.surname;
		var occupation = document.createElement('h4');
		occupation.className = "occupation";
		occupation.innerHTML = person.occupation;
		div.appendChild(img);
		div.appendChild(name);
		div.appendChild(occupation);
		document.getElementById('people-list').appendChild(div);
	}
}
document.addEventListener('keyup', function(e){
	if(e.target.className == 'people-search'){	
		filterPeople(document.getElementById('people-search-name').value, document.getElementById('people-search-occupation').value);
	}
});

//On page people filters people
function filterPeople(searchValue1, searchValue2){
	var divs = document.getElementsByClassName('info');
	for(i=0; i < divs.length; i++){
		var currDiv = divs[i];
		var currName = currDiv.getElementsByClassName('personName')[0].innerHTML;
		var currOccu = currDiv.getElementsByClassName('occupation')[0].innerHTML;
		if(currName.toUpperCase().indexOf(searchValue1.toUpperCase()) > -1 && 
			currOccu.toUpperCase().indexOf(searchValue2.toUpperCase()) > -1){
			currDiv.style.display = "";
			console.log('1');
		} else {
			console.log('2');
			currDiv.style.display = "none";
		}
	}
}













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

