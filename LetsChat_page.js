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

user_name = localStorage.getItem("User_Name");
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> " + name1 + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4>'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
      console.log(user_name + " has typed a message")
}

function updateLike(message_id)
{

      console.log(user_name + " clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
like:updated_likes


      });
}

function logout()
{
      localStorage.removeItem("User_Name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
