function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie() {
    const cokie = document.getElementById("bruh");
    document.cookie = "cookie=" + cokie.value; + ";"
}

function refreshCookie() {
    const spen = document.querySelector("span");
    spen.innerHTML = getCookie("cookie");
}