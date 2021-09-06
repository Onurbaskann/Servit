function Login(form) {
    username = new Array("admin", "musteri");
    password = new Array("admin", "musteri");
    page = new Array("index1.html")
    if (form.uname.value == uname[0] && form.psw.value == psw[0] || form.uname.value == uname[1] && form.psw.value == psw[1]) {
        self.location.href = page;
    }
    else {
        alert("Adınız veya şifreniz yanlış");
        form.uname.focus();
        form.psw.focus();
    }
    return true;
}