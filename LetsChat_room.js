// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHin8x0LKF50BUBJ-jR30RW-T8LbK57eE",
  authDomain: "lets-chat-4d0ba.firebaseapp.com",
  databaseURL: "https://lets-chat-4d0ba-default-rtdb.firebaseio.com",
  projectId: "lets-chat-4d0ba",
  storageBucket: "lets-chat-4d0ba.appspot.com",
  messagingSenderId: "339670243961",
  appId: "1:339670243961:web:789b1703c4cc5dde5892a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  function show(){

    username = localStorage.getItem("User_Name");

    document.getElementById("user_n").innerHTML = "<b>" + "<i>" + username + "!" + "</i>" + "</b>";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+ Room_names +" onclick='redirect(this.id)'># " + Room_names +"</div><hr>";
   
   document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();

function add_room(){

   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({

        purpose : "adding room name"
   });

   localStorage.setItem("room_name" , room_name);

   window.location = "LetsChat_Page.html";
}

function redirect(name)
{
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "LetsChat_page.html";
}

  function logout(){

    localStorage.removeItem("room_name");
    localStorage.removeItem("User_Name");
    window.location = "index.html";
  }

 
