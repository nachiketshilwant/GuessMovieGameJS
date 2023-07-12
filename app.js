//array for random answer and hint
const ans = ["robot", "kites","delhi6", "toiletekpremkatha","dangal","dhoom","secretsuperstar",
"trafficsignal","manjhithemountainman", "page3","tubelight","talvar","chakdeindia","delhibelly","super30",
"article15","taxino9211","chocolate","earth","koimilgaya","queen","barsaat","rocketsingh","ekchaliskilastlocal",
"rajahindustani","noentry","fire","lagaanonceuponatimeinindia","nosmoking","marykom","rockstar"];
const hint = [`🤖`, `🪁`, `❤6️⃣`, `🚽💑`, `🤼👧👧`, `🏍💨`, `🤫 👌⭐`,`🚦`,`⛰⛏🧔`,`📄3️⃣`,
`🧪💡`,`⚔`,`👅 🏑 🇮🇳`,`❤ -e-🐱`,`👌 3️⃣ 0️⃣`,`📃1️⃣5️⃣`,`🚕9️⃣2️⃣1️⃣1️⃣`,`🍫`,`🌎`,`🛸👽🦸‍♂️`,`👸`,`🌧☔`,
`🚀👳‍♂️`,`1️⃣4️⃣0️⃣🚆`,`🤴🇮🇳`,`✋🚫`,`🔥👩‍❤️‍👩`,`🧑‍🌾🏏🇮🇳🏴󠁧󠁢󠁥󠁮󠁧󠁿`,`🚭`,`🥊👩🏅`,`👦🎤🤟⭐`];


//sounds
let lsucc= new Audio("./sound/lsucc.mp3");
let succ=new Audio("./sound/succ.mp3");
let llfail=new Audio("./sound/llfail.mp3");
let fail=new Audio("./sound/fail.mp3");


//getting dom
let strt = document.querySelector('#start');
let ltr = document.querySelector('.letter');
let gm = document.querySelector('.gmdvm');
let ht = document.querySelector('.hntwd');
let wrd=document.querySelector('.word');
let chances=document.querySelector('.chances')
let msg=document.querySelector('.msg');
let cmp=document.querySelector('.cmp');

//vars
let rnd=Math.floor((Math.random()*100)%31);
var answ=ans[rnd];    
let chance=5,win=0;


strt.addEventListener('click', () => {
    chance=5;
    win=0;
    var ltw = document.querySelectorAll(".success");
    ltw.forEach((item)=>{
         item.removeAttribute('class','success');
    })
    var ltw = document.querySelectorAll(".fail");
    ltw.forEach((item)=>{
         item.removeAttribute('class','fail');
    })

    msg.innerText="";
    cmp.innerText=""

    rnd=Math.floor((Math.random()*100)%31);
    answ=ans[rnd];
    ht.innerHTML=hint[rnd];
    while(wrd.firstChild) wrd.removeChild(wrd.firstChild);
    for(var i=0;i<ans[rnd].length;i++){
        let u=document.createElement('u');
        u.innerText='?';
        wrd.appendChild(u);
    }
    chances.innerText=`Chances left : ${chance}`
    strt.style.display = 'none';
    gm.style.display = 'block';
})

for (var i = 48; i < 58; i++) {
    var lt = document.createElement('p')
    lt.classList.add('ltr')
    lt.innerText = String.fromCharCode(i);
    ltr.appendChild(lt)
}

for (var i = 97; i < 123; i++) {
    var lt = document.createElement('p')
    lt.classList.add('ltr')
    lt.innerText = String.fromCharCode(i-32);
    ltr.appendChild(lt)
}

let ltw = document.querySelectorAll(".ltr");
ltw.forEach((item) => {
    item.addEventListener("click", function () {
        var a=item.innerText;
        if(answ.includes(a.toLowerCase())){
            item.setAttribute("class", "success")
            msg.innerText="Correct Letter";
            msg.style.color='#4bb543';
            for(var i=0;i<ans[rnd].length;i++){
                if(ans[rnd][i]==a.toLowerCase()){
                    wrd.children[i].innerText=a;
                    lsucc.play();
                    ++win;
                }
            }
        }
        else{
            chance--;
            chances.innerText=`Chances left : ${chance}`
            item.setAttribute("class","fail")
            msg.innerText="Incorrect Letter";
            msg.style.color='red';
            llfail.play()
        }
        if(chance<0){
            strt.style.display='block';
            gm.style.display='none';
            cmp.innerHTML=`You lost😢😞 <br><br> Word was : ${answ.toUpperCase()}`;
            fail.play()
        }
        if(win==answ.length){
            strt.style.display='block';
            gm.style.display='none';
            cmp.innerHTML=`You Won🥳🎉🎉 <br><br> Word was : ${answ.toUpperCase()}`; 
            succ.play()           
        }

})
});


