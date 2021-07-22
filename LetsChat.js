function add_user(){


    
    user_name = document.getElementById("user_name").value;

    if(user_name == " "){

        document.getElementById("name").innerHTML = "<i>" + "<b>" + "Please Enter Your Name" + "</b>" + "</i>";
      }

      else{

        localStorage.setItem("User_Name", user_name);
        window.location = "LetsChat_room.html" ;
        
      }

    
}

