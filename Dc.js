const firebaseConfig = {
    apiKey: "AIzaSyB__eHz89uOBwy21VYkYv3L5rkrjl-6Rs0",
    authDomain: "project-trung-dt3.firebaseapp.com",
    databaseURL: "https://project-trung-dt3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-trung-dt3",
    storageBucket: "project-trung-dt3.appspot.com",
    messagingSenderId: "900385667199",
    appId: "1:900385667199:web:06b08a61823b52d0ea674a"
  };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
  var slider = document.getElementById("pwmSlider");
  var dataSlider = document.getElementById("textslider_value")
  var database = firebase.database();
  database.ref().on("value", function(snap){      
      slider.value = snap.val().slider;           
      dataSlider.innerHTML = snap.val().slider; 	
  });
  
  slider.oninput = function(){
      dataSlider.innerHTML = this.value; /* able to change the value*/
    //   var firebaseRef = firebase.database().ref().child("ValueSlider");         
      var firebaseRef = firebase.database().ref().child("slider");         
      firebaseRef.set(slider.value);           
  }
  
  
  function updateSliderPWM(element) {
    var slider_value = document.getElementById("pwmSlider").value;
    var Speed__fan = document.getElementById("rotate_03");
    if (slider_value > 240 && slider_value<=255 ) {
      Speed__fan.style.animationDuration = "0.1s";
      console.log("1");
    } else if (slider_value > 210 && slider_value <= 240) {
      Speed__fan.style.animationDuration = "0.2s";
      console.log("2");
    } else if (slider_value > 180 && slider_value <= 210) {
      Speed__fan.style.animationDuration = "0.3s";
      console.log("3");
    } else if (slider_value > 150 && slider_value <= 180) {
      Speed__fan.style.animationDuration = "0.4s";
    } else if (slider_value > 120 && slider_value <= 150) {
      Speed__fan.style.animationDuration = "0.5s";
    } else if (slider_value > 90 && slider_value <= 120) {
      Speed__fan.style.animationDuration = "0.6s";
    } else if (slider_value > 60 && slider_value <= 90) {
      Speed__fan.style.animationDuration = "0.7s";
    } else if (slider_value > 30 && slider_value <= 60) {
      Speed__fan.style.animationDuration = "0.8s";
    } else if (slider_value > 0 && slider_value <= 30) {
      Speed__fan.style.animationDuration = "0.9s";
    } else if (slider_value == 0) {
      Speed__fan.style.animationDuration = "0s";
    }
  //   document.getElementById("rotate_03").style.animationDuration = '0.' + slider_value + 's';
  }
  
  const checked = () => {
    if (document.getElementById("checkbox").checked == true) {
      console.log("true")
      document.getElementById("slider-data").style.display = "block";
      var value = document.getElementById("pwmSlider").value;
      var dataSlider = document.getElementById("textslider_value")
      dataSlider.innerHTML = value;
  
      console.log(value);
      
    } else {
      console.log("false");
      document.getElementById("slider-data").style.display = "none"
      var value = document.getElementById("pwmSlider").value = 0;
      document.getElementById("rotate_03").style.animationDuration = "0s";
      // set lai value
      var firebaseRef = firebase.database().ref().child("slider");         
      firebaseRef.set(0);  
  
    }
  }
  
  

  // nhiet do do am