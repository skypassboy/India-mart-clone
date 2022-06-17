let price = 349;
let ship = "20";
document.getElementById("price8").innerText="₹"+(price+Number(ship));
document.getElementById("price6").innerText=0+"%"
document.getElementById("price5_0").innerText="₹"+ship
document.getElementById("price4").innerText="₹"+price
let x = document.createElement("div");
x.setAttribute("class","imagebox")
let a = document.createElement("div");
let image = document.createElement("img");
image.setAttribute("src","https://cdn.shopify.com/s/files/1/0513/0125/3283/products/CC_Express_20220312_2003250.5135984147080698_small.png?v=1647096494");
let i = document.createElement("b");
a.append(image,i);
let b = document.createElement("div");
let p1 = document.createElement("p");
p1.innerText="Women's Half Sleeve Round Neck Plain T-Shirt - Lilac"
let p2 = document.createElement("p");
p2.innerText="L-39"
b.append(p1,p2)
let c = document.createElement("div")
let p3 = document.createElement("p");
p3.innerText="₹"+price
c.append(p3);
x.append(a,b,c);
document.getElementById("image_details").append(x)

document.getElementById("btn1").addEventListener("click",changePrice);

function changePrice(){
    let code = document.getElementById("coupn").value;
    if(code==""){
        alert("Please Enter Your Code")
    }
   else if(code=="masai30"){
        let p = (price*0.30);
        let price4 = ((price-p)+Number(ship)).toFixed(2)
        price = (price-p).toFixed(2);
        document.getElementById("price1").innerText="₹"+price
        document.getElementById("price3").innerText="₹"+ship
        price = price+Number(ship)
        document.getElementById("price2").innerText="₹"+price4
        document.getElementById("price8").innerText="₹"+price4
        document.getElementById("price5_0").innerText="₹"+ship
        document.getElementById("price6").innerText=30+"%"
    }
    else{
        alert("code might be Expired")
    }
    document.getElementById("coupn").value="";
}

document.querySelector("form").addEventListener("submit",collectData);

function collectData(event){
    event.preventDefault();
    let arr =  [];
    let myObj={
        firstname:document.getElementById("fname").value,
        lastname:document.getElementById("lname").value,
        address:document.getElementById("add").value,
        city:document.getElementById("city").value,
        state:document.getElementById("stste_box").value,
        pin:document.getElementById("pin").value,
        number:document.getElementById("num").value,
        country:document.getElementById("coun").value,
    }
    arr.push(myObj)
    localStorage.setItem("userAddress",JSON.stringify(arr));
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("add").value="";
    document.getElementById("city").value="";
    document.getElementById("stste_box").value="";
    document.getElementById("pin").value="";
    document.getElementById("num").value="";
    document.getElementById("coun").value="";
    let blur = document.getElementById("main");
    blur.classList.toggle('active')
    let popup = document.getElementById("main2");
    popup.classList.toggle('active')
}
document.getElementById("btn2").addEventListener("click",collectdata);

let myData = JSON.parse(localStorage.getItem("paymentData"))||[]
function collectdata(){
   let obj = {name:"Durgashankar Pal",number:"1234567891234567",cvv:"123",date:"05/26"}
   console.log(obj.number)
    let otp = [1,2,3,4]
   if(document.getElementById("myNum").value==obj.number&&document.getElementById("date").value==obj.date&&document.getElementById("cvv").value==obj.cvv){
    let payment = document.getElementById("main2");
         payment.classList.toggle('active')
    let otpPage = document.getElementById("main3");
         otpPage.classList.toggle('active')
   }else{
        alert("credential does not match")
   }
   document.getElementById("myName").value="";
   document.getElementById("myNum").value=""; 
   document.getElementById("date").value="";
   document.getElementById("cvv").value="";
}
document.getElementById("btn4").addEventListener("click",myFun);

function myFun(){
   if(document.getElementById("first").value=="1"&&document.getElementById("second").value=="2"&&document.getElementById("third").value=="3"&&document.getElementById("four").value=="4"){
    alert("Payment Sucessful")
    window.location.href="confirmPage.html"
   }else{
    alert("OTP does not match")
   }
   document.getElementById("first").value="";
   document.getElementById("second").value="";
   document.getElementById("third").value="";
   document.getElementById("four").value="";
}
