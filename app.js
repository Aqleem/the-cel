


let celebrities = [
    {
        name: "Shahid Afridi",

        imagpath: "shahid.jpg",
        qoute: "Whenever you feel down, always remember that Almighty Allah has better plans for you."
    }
    ,
    {
        name: "Imran Khan",

        imagpath: "Imran-Khan.jpg",
        qoute: "Do NI IK Pakistan"
    }
    ,

    {
        name: "Malala yousafzai",

        imagpath: "malala.jpg",
        qoute: "One book, one pen, one child, and one teacher can change the world. "
    }
    ,
    {
        name: "Arfa Karim",

        imagpath: "Arfa.jpg",
        qoute: "Never let shyness conquer your mind."
    }
    ,
    {
        name: "Abdul Qadeer Khan",

        imagpath: "AQKhan.jpg",
        qoute: "No money on earth can buy the love and affection that has been given to me by a grateful nation."
    }
    ,
    {
        name: "Abdul sattar Edhi",

        imagpath: "AbdulSattarEdhi.JPG",
        qoute: "No religion is higher than humanity.."
    }
    ,
    {
        name: "Benzair Bhutto",
        imagpath: "Benazir-Bhutto.png",
        qoute: "No money on earth can buy the love and affection that has been given to me by a grateful nation."
    }
    ,
    {
        name: "Younis khan",
        imagpath: "2Younis-Khan-1.jpg",
        qoute: "No money on earth can buy the love and affection that has been given to me by a grateful nation."
    }
    ,
    //    



]
function init() {
    let bodyEi = document.querySelector(".celeb1");
    for (let i = 0; i < celebrities.length; i++) {
        bodyEi.innerHTML += `
        <div class="celebriyt-img" 
        style= "background-image: 
        url( ${celebrities[i].imagpath})">
            <p class="namepara" >
                ${celebrities[i].name}
            </p>
        </div>
        
        `
    }
}

