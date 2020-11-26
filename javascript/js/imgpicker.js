// JavaScript Document
function pilih(){
    var pil=document.getElementById("form1").pic.value;
     if (pil=="1")
       {
           document.getElementById("image").innerHTML="<img src='image/aladdin.jpg'>";
           window.alert("Jangan menilai dari penampilan yang terlihat. Seperti banyak hal, bukan apa yang terlihat, tapi apa yang bernilai di dalamnya. -Merchant-");
       }
       else if (pil=="2")
       {
           document.getElementById("image").innerHTML="<img src='image/cocoo.jpg'>";
           window.alert("Jangan pernah meremehkan kekuatan musik. Tidak ada yang akan menyerahkan masa depanku, terserah padaku untuk meraih mimpiku, raih erat-erat dan wujudkanlah. -De La Cruz-");
       }
       else if (pil=="3")
       {
           document.getElementById("image").innerHTML="<img src='image/frozen2.jpg'>";
           window.alert("Kebenaran perlu ditemukan. Jika tidak, tidak akan ada masa depan. -Pabbie-");
       }
       else if (pil=="4")
       {
           document.getElementById("image").innerHTML="<img src='image/maleficent2.jpg'>";
           window.alert("Kebohongan tidak akan bertahan lama sebesar apa pun kamu berusaha menutupinya.");
       }
       else if (pil=="5")
       {
           document.getElementById("image").innerHTML="<img src='image/onward.jpg'>";
           window.alert("Jangan terpaku dengan keburukan orang lain.");
       }
       else if (pil=="6")
       {
           document.getElementById("image").innerHTML="<img src='image/ralph.jpg'>";
           window.alert("Jangan mudah percaya pada komentar negatif di internet. Seburuk-buruknya kamu, hanya sahabat, orang terdekat, dan dirimu sendiri yang tahu.");
       }
       else if (pil=="7")
       {
           document.getElementById("image").innerHTML="<img src='image/toystory4.jpg'>";
           window.alert("Mungkin kamu merasa dirimu adalah sampah, tapi kamu tak tahu betapa berharganya dirimu. Di luar sana, ada seseorang yang menyayangimu. Ketika kamu masih diberikan hidup berarti kamu masih berguna di dunia. Setidaknya bagi Sang Pencipta. -Woody-");
       }else{
           document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
       }
       
   }