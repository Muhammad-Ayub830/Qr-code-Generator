var qr_code = document.getElementById("qr-code");
var input_1_downlaod = document.getElementById("input-1-downlaod");
var result = document.getElementById("result");
var generate_btn = document.getElementById("generate-btn")

generate_btn.addEventListener("click",function(){
    var input = document.querySelectorAll("input")
    // handling the inputs of inputs 
if(input.length>0){
    var m1 = input[0]
    var m2 = input[1]
    if(m1.value.length > 0 && m2.value.length > 0){

        result.style.display = "block";
        var setPatteren = ` the registered name __${m1.value}__ and password __${m2.value}__`
      
      
      
        qr_code.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${setPatteren}`

        fetch(qr_code.src).then(response => response.blob()).then(
            blob => {
                const url = URL.createObjectURL(blob)
                input_1_downlaod.setAttribute("href",url)
            }
        )
        document.getElementById("share_btn").addEventListener('click',share)
        var a = {
            url : qr_code.src
        }
        function share(){
            navigator.share(a)
        }
    }else{
        input[0].classList.add("anim")
        input[1].classList.add("anim")
        setTimeout(() => {
            input[0].classList.remove("anim")
            input[1].classList.remove("anim")
        }, 2000);
        
    } 
}
    
})
document.getElementById("refresh").addEventListener('click',function(){
    result.style.display = "none"
})