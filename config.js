import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyCM5X1Fc9NvVXeA5M5LCLApGbW7mJo6Lug",
        authDomain: "team-voting-app-17cfd.firebaseapp.com",
        projectId: "team-voting-app-17cfd",
        storageBucket: "team-voting-app-17cfd.appspot.com",
        messagingSenderId: "326909627561",
        appId: "1:326909627561:web:02e988db5f8ba97799edb8"
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();