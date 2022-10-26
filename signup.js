const registerButton = document.getElementById("signup").onclick = ((e) => {
    e.preventDefault()

    const username = document.getElementById("name").value
    const password = document.getElementById("pass").value
    const confirm_password = document.getElementById("pass_con").value
    const email = document.getElementById("email").value

    // verfy user
    if (username.length >= 20 || username.length <= 4){
        $("#name").css("border", "solid red 3px")
        $("#error-name").text("invalid! must be atlest 5 and less than 20 characters")
        return false
    }
    if (password.length >= 7){
        $("#pass").css("border", "solid red 3px")
        $("#error-pass").text("invalid! must be atlest 8 characters")
        return false
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        $("#email").css("border", "solid red 3px")
        $("#error-email").text("invalid email format")
        return false
    }
    if (password !== confirm_password){
        $("#pass").css("border", "solid red 3px")
        $("#pass_con").css("border", "solid red 3px")
        $("#error-pass").text("invalid! passwords do not match")
        $("#error-pass_con").text("invalid! passwords do not match")
        return false
    }

    // check if user exist in db
    firebase.firestore().collection("users").where("username", "==", username)
    .get().then((querySnapshot) => {
        if (doc.data().username === username){
            $("#name").css("border", "solid red 3px")
            $("#error-name").text("user exists, try a different one")
            return false
        }
    }).catch(error => {
        console.log("unable to fetch document", error)
    })

    {
        $("#signup").hide()
        $("#spinner").show()

        const today = new Date()
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            firebase.firestore().collection("users").doc().set({
                username: username,
                email: email,
                userId: userCredentials.user.uid,
                created_at: today.getFullYear() + ' ' + (today.getMonth() + 1) + ' ' + today.getDate()
            })
            swal({
                title: "sign up",
                text: "LOgin successful",
                icon: "success",
                button: "Login"
            }).then(function(){
                window.location.href = "/registrationLogin/login.html"
            })
        }).catch(error => {
            $("#email").css("border", "solid red 3px")
            $("#error-email").text("invalid email format")
            $("#spinner").hide()
            $("#signup").show()
            return false
        })
    }
})