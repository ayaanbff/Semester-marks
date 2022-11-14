
var a = document.querySelectorAll("input")
var en = document.querySelectorAll(".e")
var ss = document.querySelectorAll(".ss")
var sci = document.querySelectorAll(".sci")
var math = document.querySelectorAll(".math")[0]
var hin = document.querySelectorAll(".hin")[0]
var comp = document.querySelectorAll(".comp")[0]
var i=0,b=0,h=0,y=0
document.getElementById("nav").className="klkl"
// document.getElementById("feild").style.marginTop=$("#nav").height().toString()+"20px !important"
var asa =document.getElementById("asa")
setTimeout(()=>{
document.getElementById("start").style.animation="slideLeft 1s forwards ease-in-out"
},3000)
setTimeout(()=>{
document.getElementById("start").remove()

},4000)
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
 item.value=""
});
var btn = document.getElementById("calcbtn")
asa.placeholder="Enter your name"
var marksarr=[]
btn.onclick=()=>{

if(sessionStorage.getItem("board")=="xicse"){
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
   let percentage=(f/200*100).toFixed(2)
   showper(asa.value,percentage)


}
else{
 
    var eng = document.getElementsByClassName("litlang")
    var maths = document.getElementsByClassName("mathematics")
    var socials = document.getElementsByClassName("socialscience")
    var hindi = document.getElementsByClassName("hindi")
    var science = document.getElementsByClassName("science")
    var arr=[]
    document.querySelectorAll("input[type='number']").forEach(item=>{
if(item.value!=null||item.value!=""){
arr.push(Math.ceil((parseInt(item.value)/10)))
}
else if(item.value==null||item.value=="")return alert("Marks fields cannot be empty")
    })
    let sum =0
    arr.forEach(item=>{
        console.log(item)
        sum+= parseInt(item)
    })
var percentage=((sum/5)*9.5).toFixed(2)

    showper(asa.value,percentage)
eng.value=""
maths.value=""
socials.value =""
hindi.value=""
science.value=""


}
}
function btna(e){
    var bor= e
// document.getElementById("splash").remove()
console.log(bor)
sessionStorage.clear()
sessionStorage.setItem("board",e)
document.getElementById("xicse").style.animation="mane .5s forwards ease-in"
document.getElementById("xcbse").style.animation="mane .5s forwards ease-in"
setTimeout(()=>{
if(e=="xicse"){
    
document.getElementById("xicse").remove()
document.getElementById("xcbse").remove()
var a= document.createElement("div")
a.id="t1"
a.innerText="Semester 1"
var b= document.createElement("div")
b.id="t1"
b.innerText="Semester 2"
document.getElementById("splash").append(a)
document.getElementById("splash").append(b)
document.querySelectorAll("#t1").forEach(element => {
    element.onclick=()=>m2()
})
}
else if(e=="xcbse"){
    document.getElementById("xicse").remove()
    document.getElementById("xcbse").remove()
    var a= document.createElement("div")
    a.id="t1"
    a.innerText="Term 1"
    var b= document.createElement("div")
    b.id="t1"
    b.innerText="Term 2"
    document.getElementById("splash").append(a)
    document.getElementById("splash").append(b)
document.querySelectorAll("#t1").forEach(element => {
    element.onclick=()=>m2()
})
}
},1000)
}

document.querySelectorAll('input[type="number"]').forEach(item=>{
item.min=0
    item.onchange=()=>{
        if(item.classList[0]=="comp"||item.classList[1]=="comp"){
        if(item.value>50){
            var s=document.createElement("div")
            s.id="warn"
            var a = document.createElement("div")
            a.id="wr-1"
            a.innerText="ICSE semester computer marks cannot be above 50."
            s.append(a)
            document.getElementById("feild").append(s)
            document.getElementById("warn").onclick=()=>{
    item.value=""
                
                warn.remove()}

        }
    }
else if(item.classList[0]=="icse"||item.classList[1]=="icse") {
    if(item.value>40){
        var s=document.createElement("div")
        s.id="warn"
        var a = document.createElement("div")
        a.id="wr"
        a.innerText="ICSE semester marks of all subjects expect computer cannot be above 40."
        s.append(a)
        document.getElementById('feild').append(s)
document.getElementById("warn").onclick=()=>{
    item.value=""
    warn.remove()}
    
}
}
else if(item.classList[0]=="cbse"||item.classList[1]=="cbse"){
    if(item.value>100){
    var s=document.createElement("div")
    s.id="warn"
    var a = document.createElement("div")
    a.id="wr"
    a.innerText="CBSE term marks cannot be above 100."
    s.append(a)
    document.getElementById('feild').append(s)
document.getElementById("warn").onclick=()=>{
item.value=""
warn.remove()}
    }

}
    }
})
function m2(){
    $("#splash").css({"animation":"slideLeft 1s forwards ease-in-out"})
    document.getElementById("feild").style.visibility="hidden"
    setTimeout(()=>{    
if(sessionStorage.getItem("board")=="xcbse"){

 
    document.querySelectorAll("div").forEach(item=>{if(item.classList[0]=="icse"||item.classList[1]=="icse"){item.remove()}})
    document.querySelectorAll("input").forEach(item=>{if(item.classList[0]=="icse"||item.classList[1]=="icse"){item.remove()}})
    document.getElementById("no").remove()
$("#main").css({"height":"118%","background-color":"rgb(17,17,17)"})
$("#feild").css({"min-height":"104%"})
$("#feild").css({"margin-top":"28%"})
$("#feild").css({"overflow-y":"hidden"})
$("#main").css({"overflow-y":"hidden"})
$("#calcbtn").css({"margin-top":"5%"})
}
else if(sessionStorage.getItem("board")=="xicse"){
$("#main").css({"background-color":"rgb(17,17,17)"})

document.querySelectorAll("div").forEach(item=>{if(item.classList[0]=="cbse"||item.classList[1]=="cbse")item.remove()})
document.querySelectorAll("input").forEach(item=>{if(item.classList[0]=="cbse"||item.classList[1]=="cbse")item.remove()})
}
$("#splash").remove()
document.getElementById("feild").style.visibility="visible"

},800)

}


function showper(name,marks){
    if(name==""||marks==NaN){
        var s=document.createElement("div")
        s.id="warn"
        var a = document.createElement("div")
        a.id="wr"
        a.innerText="Input fields cannot be empty ."
        s.append(a)
        document.getElementById('feild').append(s)
    document.getElementById("warn").onclick=()=>{
    document.getElementById("warn").remove()}
    
    
        

    }
    else if (marks==null||marks=="NaN"){
        var s=document.createElement("div")
        s.id="warn"
        var a = document.createElement("div")
        a.id="wr"
        a.innerText="Please fill the marks input fields correctly."
        s.append(a)
        document.getElementById('feild').append(s)
    document.getElementById("warn").onclick=()=>{
    document.getElementById("warn").remove()}
    
    

    }
    else {
var a = document.createElement("div")
a.id="r1"
var b = document.createElement("div")
b.id="result"
var c = document.createElement("div")
c.id="congrats"
c.innerText="Congratulations"
var d = document.createElement("div")
d.id="c1"
d.innerText=name+" you've scored"
var e = document.createElement("div")
e.id="pp"
e.innerText=marks.toString()+"%"
b.append(c,d,e)
a.append(b)
document.getElementById('main').append(a)
firebase.firestore().collection("main").doc(name).set({
    percent : marks+"%",
    userAgent:navigator.userAgent,
    board:sessionStorage.getItem("board")
    })}
}
