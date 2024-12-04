
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  var tally = parseInt(document.getElementById('tally-clnts').innerText);
  var tallyweb = document.getElementById('tally-webs');
  const duration = '1s';
  if (tally < 1446){
    addclients();
  }
  else  if (tally >= 1446){
    clearInterval(intervalId);
  }
  let intervalId = setInterval(() => { 
    addclients(); 
    if (tally >= 1446) {
      clearInterval(intervalId);
    }
  }, 10);

function addclients(){
    let no = parseInt(document.getElementById('tally-clnts').innerText);
    ans = no + 1;
    tally = ans;
    document.getElementById('tally-clnts').innerText = tally; 
}

var tallyweb = document.getElementById('tally-webs');
if (tallyweb < 62){
  addwebs();
}
else  if (tallyweb >= 62){
  clearInterval(intervalIdweb);
}
let intervalIdweb = setInterval(() => { 
  addwebs(); 
  if (tallyweb >= 62) {
    clearInterval(intervalIdweb);
  }
}, 200);

function addwebs(){
  let no = parseInt(document.getElementById('tally-webs').innerText);
  ans = no + 1;
  tallyweb = ans;
  document.getElementById('tally-webs').innerText = tallyweb; 
}
function activateReviews() {
 const star1 = document.getElementById('star1');
 const star2 = document.getElementById('star2');
 const star3 = document.getElementById('star3');
 const star4 = document.getElementById('star4');
 const star5 = document.getElementById('star5');
 const reviewstars = document.getElementById('review-stars');
const p = document.getElementById('pp');

 star1.addEventListener('click', () => {
   reviewstars.style.animation = 'star1 2s infinite';
   p.innerHTML = 'star1 2s infinite';
 });
 star2.addEventListener('click', () => {
   reviewstars.style.animation = 'star2 2s infinite';
   p.innerHTML = 'star2 2s infinite';
 });
 star3.addEventListener('click', () => {
   reviewstars.style.animation = 'star3 2s infinite';
   p.innerHTML = 'star3 2s infinite';
 });
 star4.addEventListener('click', () => {
   reviewstars.style.animation = 'star4 2s infinite';
   p.innerHTML = 'star4 2s infinite';
 });
 star5.addEventListener('click', () => {
   reviewstars.style.animation = 'star5 2s infinite';
   p.innerHTML = 'star5 2s infinite';
 });
}

activateReviews();

function hideReview() {
  var reviewwindow = document.getElementById('review-window');
  reviewwindow.style.display = 'none';
  localStorage.setItem('BeaconHide', '...');
  localStorage.setItem('BeaconHiden', '...');

  checkHide();
}

var addReviewBtn = document.getElementById('addReviewBtn');
addReviewBtn.addEventListener('click', () => {
var  p = document.getElementById('pp');
  var name = document.getElementById('name').value;
  var loc = document.getElementById('location').value;
  var country = document.getElementById('country').value;
  var msg = document.getElementById('reviewmsg').value;
  div = document.createElement('div');
  div.classList.add('game-store-list');
  gameImage = document.createElement('div');
  gameImage.classList.add('game-image');
  customerloader = document.createElement('div');
  p1 = document.createElement('h4');
  p1.innerHTML = name;
  p2 = document.createElement('span');
  p2.innerHTML = `${loc}, ${country}`;
  p3 = document.createElement('span');
  p3.innerHTML = msg;
  p4 = document.createElement('p');
  customerloader.classList.add('loader-customer');
  customerloader.style.animation = p.innerHTML;
var errormsg = document.getElementById('errormsg');
  if(name && loc && country && msg){
  gameImage.appendChild(customerloader);
  div.appendChild(gameImage);
  div.appendChild(p1);
  div.appendChild(p2);
  p4.appendChild(p3);
  div.appendChild(p4);
const rs01 = document.getElementById('pp').innerText; 
localStorage.setItem('A-tr/usn/pr',name );
localStorage.setItem('re-sc-0psh', rs01);
localStorage.setItem('L-us-tr-pr', p2.innerHTML );
localStorage.setItem('ms-pr tr-usn',msg );
setTimeout(() => {document.getElementById('refresh').click();},2000);

  } else{
    errormsg.style.color = 'red';
    errormsg.style.display = 'block';
    setTimeout(() => {
      errormsg.style.display = 'none';
    }, 3000);
  }
});

function displayAll(){
  var name =localStorage.getItem('A-tr/usn/pr');
  var anime =  localStorage.getItem('re-sc-0psh');
 var loc =  localStorage.getItem('L-us-tr-pr');
 
  var msg = localStorage.getItem('ms-pr tr-usn');
  if(name && loc && country && msg){
  document.getElementById('customerReview').style.display = 'block';

    var nameoutput = document.getElementById('name-output')
   var locoutput = document.getElementById('loc-output');
var loaderOutput = document.getElementById('loader-output');
var msgOutput = document.getElementById('msg-output');
nameoutput.innerText = name;
locoutput.innerText = loc;
loaderOutput.style.animation = `${anime}`;
msgOutput.innerText = msg;
  } 
}


setInterval(() => {checkReview();
}, 1000);
function checkReview() {
  var customerReview = document.getElementById('customerReview');
  if(customerReview.style.display == 'block'){
    localStorage.setItem('Beacon', '...');
    confirmBeacon();
  } else{
    setTimeout(() => {
     checkHide();
    },60000);
  }
}
setInterval(() => {
  displayAll();
}, 0);

function confirmBeacon() {
  const Beacon = localStorage.getItem('Beacon');
if(Beacon){
  setTimeout(() => {
    var reviewwindow = document.getElementById('review-window');
    reviewwindow.style.display = 'none';
  }, 1000);
  
}
else{
null;}
}
console.log('<Developed by Lutan Tech Developers>');

function checkHide() {
  var BeaconHiden = localStorage.getItem('BeaconHide');
  if(BeaconHiden){
    var reviewwindow = document.getElementById('review-window');
    reviewwindow.style.display = 'none';
  } else{
    var reviewwindow = document.getElementById('review-window');
    reviewwindow.style.display = 'block';
  }
}
function reminder() {
  var remDiv = document.getElementById('remDiv');
  var BeaconHiden  = localStorage.getItem('BeaconHiden');
  if(BeaconHiden){
  remDiv.classList.add('seen');
} else{
  null;
}
}
setTimeout(() => {
reminder();
} ,1000);

function removePromise() {
  var promiseDiv = document.getElementById('remDiv');
  promiseDiv.classList.remove('seen');
  localStorage.removeItem('BeaconHiden','...');
  
}
setTimeout(() => {
  localStorage.removeItem('Beacon')
}, 10100000);

function addPromise(){
  var promiseDiv = document.getElementById('remDiv');
  promiseDiv.classList.remove('seen');
  localStorage.removeItem('BeaconHiden','...');
  localStorage.removeItem('BeaconHide');
  localStorage.removeItem('Beacon');

  console.log('removed beacon');
setTimeout(() => {document.getElementById('review-window').style.display = 'block'}, 5000);
}