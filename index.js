var a = document.querySelectorAll("input")
var en = document.querySelectorAll(".e")
var ss = document.querySelectorAll(".ss")
var sci = document.querySelectorAll(".sci")
var math = document.querySelectorAll(".math")[0]
var hin = document.querySelectorAll(".hin")[0]
var comp = document.querySelectorAll(".comp")[0]
var i=0,b=0,h=0,y=0
var asa =document.getElementById("asa")
const firebaseConfig = {
    apiKey: "AIzaSyD1RkD0m6u34TXziPR6beqrraiSnz1UwB4",
    authDomain: "marks-b94f8.firebaseapp.com",
    projectId: "marks-b94f8",
    storageBucket: "marks-b94f8.appspot.com",
    messagingSenderId: "420622341062",
    appId: "1:420622341062:web:3299eda8240528b26a18c7",
    measurementId: "G-1VGEFHDG4J"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
a.forEach(item => {
 item.placeholder="Enter your marks"
 item.required=true
});
var btn = document.getElementById("calcbtn")
asa.placeholder="Enter your name"
var marksarr=[]
btn.onclick=()=>{
sci.forEach(item=>{
     i += parseInt(item.value)
})
marksarr.push((i/3))
en.forEach(item=>{
    b += parseInt(item.value)
})
marksarr.push((b/2))
marksarr.push(parseInt(math.value))
marksarr.push(parseInt(hin.value))
ss.forEach(item=>{
    h+=parseInt(item.value)
})
marksarr.push((h/2))
let y = (comp.value/50)*100
let u= Math.ceil((y/100)*40)
marksarr.push(u)
console.log(marksarr)

     var min = marksarr.reduce((a, b) => Math.min(a, b))
       for(let a=0;a<marksarr.length;a++){
        if(marksarr[a]==min)
        {marksarr[a]=0
            min = 0 
        }
       }
       console.log(min)
console.log(marksarr)
var f=0
marksarr.forEach((b)=>{
    f+=b
})
console.log(f)
document.getElementById("marks").style.visibility="visible"
document.getElementById("marks").innerText="Congratulations! "+asa.value+" you got "+(f/200*100).toFixed(2)+"%"
firebase.firestore().collection("main").doc(asa.value.toString()).set({
percent : ((f/200)*100).toFixed(2)+"%"
})
}

//a[0]=null
//     a.forEach(item => {
//         console.log(item.value)
//     if(typeof parseInt(item.value) == 'number')
//     {
//         if(item.value<=40){
// marksarr.push(item.value)
//         }
//     }
//        });
