const E = windiw.wangEditor;
const editor = new E("#edit");
editor.create();
function htmlshow(){
  $("#htmlshowcontainer").show();
  document.getElementById("htmlshowcontainer").innerHTML = editor.txt.html();
}
function htmlhide(){
  $("#htmlshowcontainer").hide();
  document.getElementById("htmlshowcontainer").innerHTML = "";
}
function textshow(){
  $("#htmlshowcontainer").show();
  document.getElementById("htmlshowcontainer").innerHTML = editor.txt.text();
}
