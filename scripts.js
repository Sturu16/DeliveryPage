function darkmode(){
   let icon = document.getElementById("fa-toggle").className;
    console.log(icon);

    let tootgleicon = icon.slice(19,22);
    console.log(tootgleicon);

    let color = document.querySelector(":root");
    
    if(tootgleicon == "off"){
        document.getElementById("darkmode").innerHTML = ' <i class="fa-solid fa-toggle-on" id="fa-toggle"></i>';
        color.style.setProperty('--white', '#000000');
        color.style.setProperty('--black', '#ffffff');
        color.style.setProperty('--grey', '#b6b6b6');
        color.style.setProperty('--footercolor', '#4a4a4a');
    }
    else{
        document.getElementById("darkmode").innerHTML = ' <i class="fa-solid fa-toggle-off" id="fa-toggle"></i>';
        color.style.setProperty('--white', '#ffffff');
        color.style.setProperty('--black', '#000000');
        color.style.setProperty('--grey', '#777776');
        color.style.setProperty('--footercolor', '#FEE395');
    }
}