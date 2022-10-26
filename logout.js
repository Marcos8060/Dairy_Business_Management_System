document.getElementById("logout-btn").onclick = (() => {
    firebase.auth().signOut().then(() => {
        sessionStorage.removeItem("uid")
        swal({
            title: "logged out",
            text: "logged out successfully",
            icon: "success",
            button: "login"
        }).then(function(){
            $("#spinner").hide()
            $("#signin").show()
            window.location.href = "/registrationLogin/login"
            return false
        })
    }).catch(error => {
        swal({
            title: "logged out",
            text: error.message,
            icon: "error",
            button: "login"
        }).then(function(){
            $("#spinner").hide()
            $("#signin").show()
            return false
        })
    })
    return false
})