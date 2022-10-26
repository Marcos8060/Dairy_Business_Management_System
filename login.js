$(document).ready(function(){
    $("#spinner").hide()
})

const loginButton = document.getElementById("signin").onclick = ((e) => {
    e.preventDefault()

    const password = document.getElementById("password").value
    const email = document.getElementById("email").value

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        $("#email").css("border", "solid red 3px")
        $("#error-email").text("invalid email format")
        return false
    }else {
        $("#signin").hide()
        $("#spinner").show()

        firebase.auth().signInWithEmailAndPassword(email.password)
        .then((userCredentials) => {
            sessionStorage.setItem("uid", userCredentials.user.uid)
            window.location.href = "/registrationLogin/main.html"
        }).catch((error) => {
            swal({
                title: "Sign In",
                text: error.message,
                icon: "error",
                button: "Try again"
            }).then(function(){
                $("#spinner").hide()
                $("#signin").show()
                return false
            })
        })
    }

})