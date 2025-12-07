const para = document.querySelector('p')
const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz'
const text = para.innerText;

let iteration = 0



para.addEventListener('mouseenter',function(){

    setInterval(() => {
        
        let str = text.split('').map((char,index) =>{
            if (index < iteration){
                return char
            }
            return character.split('')[Math.floor(Math.random()*character.length)]
        }).join('')
        
        para.innerText = str
        iteration += 0.2

    }, 30);
})
    



    
