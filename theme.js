<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
     <style>
        body {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                to right top,
                #051937
                #004d7a
                #008793
                #00bf72 
                #a8eb12
            );
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(to right,#efa221,#df2097);
            
        }
        Button{
         background-image: linear-gradient(to right, rgb(92, 145,229),rgb(152, 63, 198));;
            border-radius: 10%;
            height: 30px;
            width: 90px;
           
            
        }
     </style>
<body>
    <section>
        <div>
            <button id="myButton">#0524db</button>
            <button id="myButton2">#45bd25</button>
        </div>
        <h1>Copy your Code here</h1>
        <div class="copyCode">
            background-image: linear-gradient(to right, rgb(92, 145,229),(152, 63, 198));

        </div>
    </section>
    <script>
        let btn1 = document.getElementById("myButton");
        let btn2 = document.getElementById("myButton2");
        let copyDiv = document.querySelector(".copyCode");
        let rgb1 = "#004773";
        let rgb2 = "#54d542";

        const myHexValues = () => {
            let myHexValues = "0123456789abcdef";
            let colors = "#";
            for(let i = 0; i < 6; i++){
                colors = colors +  myHexValues[Math.floor(Math.random()* 16)];
                
            }
           return colors;
        }

        const handleButton1 = () => {
             rgb1 = myHexValues();
            console.log(rgb1);
            rgb1.innerText = rgb1;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            copyDiv.innerHTML = 
            `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
            
        };
         
        const handleButton2 = () => {
             rgb2 = myHexValues();
            console.log(rgb2); 
            rgb2.innerText = rgb2;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            copyDiv.innerHTML =  `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
            
        };

        btn1.addEventListener("click", handleButton1)
        btn2.addEventListener("click", handleButton2)

        copyDiv.addEventListener("click", () => {
            navigator.clipboard.writeText(copyDiv.innerText);
        });
    </script>
</body>
</html>
