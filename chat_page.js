//YOUR FIREBASE LINKS
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

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}