// const firebaseConfig = { 
//   apiKey: "AIzaSyB__eHz89uOBwy21VYkYv3L5rkrjl-6Rs0",
//   authDomain: "project-trung-dt3.firebaseapp.com",
//   databaseURL: "https://project-trung-dt3-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "project-trung-dt3",
//   storageBucket: "project-trung-dt3.appspot.com",
//   messagingSenderId: "900385667199",
//   appId: "1:900385667199:web:06b08a61823b52d0ea674a"
// };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  var nhietdo_f;
  var dbRef = firebase.database().ref().child('temp');
  dbRef.on('value', snap => {
    nhietdo_f = snap.val();
  console.log("nhiệt độ firebase",nhietdo_f);

  const volueProg = document.querySelector('.vt-temperature'),
  circularPro = document.querySelector('.ct-temperature');
 
 
 let progressStartValue = 0,
 nhietDo = nhietdo_f,
  progressEndValue = nhietDo.toFixed(0),
 
  speed = 10;
 //  console.log(progressEndValue);
 const progress = setInterval(()=>{
 progressStartValue++;
 // nhietDo++
   // volueProg.textContent = progressStartValue + '°C'
   volueProg.textContent = nhietDo + '°C'
   circularPro.style.background = `conic-gradient(rgb(243, 66, 66) ${progressStartValue * 3.6}deg, #ededed 0deg)`
   if(progressStartValue == progressEndValue){
     clearInterval(progress)
   }
 }, speed);
    // có thể in giá trị của biến nhietdo ra console để kiểm tra
  });



// // Hàm khởi tạo đồng hồ
// function startTime()
// {
//      // Lấy Object ngày hiện tại
//     var today = new Date();
 
//     // Giờ, phút, giây hiện tại
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
 
//     // Chuyển đổi sang dạng 01, 02, 03
//     m = checkTime(m);
//     s = checkTime(s);
 
//     // Ghi ra trình duyệt
//     document.getElementById('current-time').innerHTML = date +" " + h + ":" + m + ":" + s;
 
//     // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
//     var t = setTimeout(function() {
//         startTime();
//     }, 500);
// }
 
// // Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
// function checkTime(i)
// {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }


// nhiệt độ

var doAm_f;
var dbRef = firebase.database().ref().child('humi');
dbRef.on('value', snap => {
  doAm_f = snap.val();
  const volueProg_t = document.querySelector('.vt-humidity'),
 circularPro_t = document.querySelector('.ct-humidity');
  let progressStartValue_t = 0,
  doAm = doAm_f,
 progressEndValue_t = doAm.toFixed(0),
 speed_t = 10;
const progress_t = setInterval(()=>{
progressStartValue_t++;
  volueProg_t.textContent = doAm + '%'
  circularPro_t.style.background = `conic-gradient(#4070f4 ${progressStartValue_t * 3.6}deg, #ededed 0deg)`
  if(progressStartValue_t == progressEndValue_t){
    clearInterval(progress_t)
  }
}, speed_t);
  // có thể in giá trị của biến nhietdo ra console để kiểm tra
  console.log("độ ẩm firebase", doAm_f);
});


// khoi


var khoi;
var dbRef = firebase.database().ref().child('smoke');
dbRef.on('value', snap => {
  khoi = snap.val();
  const volueProg_t = document.querySelector('.vt-smoke'),
 circularPro_t = document.querySelector('.ct-smoke');
  let progressStartValue_t = 0,
  doAm = khoi,
 progressEndValue_t = doAm.toFixed(0),
 speed_t = 10;
const progress_t = setInterval(()=>{
progressStartValue_t++;
  volueProg_t.textContent = doAm + '%'
  circularPro_t.style.background = `conic-gradient(#4070f4 ${progressStartValue_t * 3.6}deg, #ededed 0deg)`
  if(progressStartValue_t == progressEndValue_t){
    clearInterval(progress_t)
  }
}, speed_t);
  // có thể in giá trị của biến nhietdo ra console để kiểm tra
  console.log("độ ẩm firebase", khoi);
});



