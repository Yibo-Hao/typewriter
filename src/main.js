let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `/*大家好给大家表演一个八卦
接下來我要加样式了
首先我准备一个正方形*/

#taiji{
    border: 1px solid red;
    width: 300px;
    height: 300px;
}

/*接下来我会把正方形变成八卦图
首先把正方形变成圆*/

#taiji{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,5);
    border:none;
}

/*八卦阴阳形成*/

#taiji{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%);
}

/*阴阳互相融合*/

#taiji::before{
    background: white;
}
#taiji::after{
    background: black;    
}

/*太极*/

#taiji::before{
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 44%, rgba(255,255,255,1) 100%);  
}
#taiji::after{
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%); 
}`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp";
    } else {
      string2 = string2 + string[n];
    }

    if (n < string.length) {
      demo.innerHTML = string2;
      style.innerHTML = string.substring(0, n + 1);
      n = n + 1;
      window.scrollTo(0,9999)
      demo.scrollTo(0,9999)

      step();
    } else {
    }
  }, 0);
};
step();
