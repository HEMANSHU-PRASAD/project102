var firebaseConfig = {
      apiKey: "AIzaSyBsN6Ehfe_lSlP1MV08TyrVbwIbWwHTyZk",
      authDomain: "twitter--ka-sasta-copy.firebaseapp.com",
      projectId: "twitter--ka-sasta-copy",
      storageBucket: "twitter--ka-sasta-copy.appspot.com",
      messagingSenderId: "923928126415",
      appId: "1:923928126415:web:c07533551eb4460e25e8ba",
      measurementId: "G-B4H7QH5FGV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class+'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHtml += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout(name) {
      console.log(name);
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}