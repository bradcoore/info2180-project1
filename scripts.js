/* Add your JavaScript to this file */
window.onload=function(){
    const button= document.querySelector("button");

    button.addEventListener("click",(e)=>{
    e.preventDefault();
    let msg=document.getElementsByClassName("message")[0];
    let email= document.getElementById('email').value;

    if (email===''){
        msg.innerHTML=('Please enter a valid email address');
    }else{
        msg.innerHTML= `Thank you! Your email address ${email} has been added to our mailing list.`;
        console.log("Form has been submitted");
    }    
})

}