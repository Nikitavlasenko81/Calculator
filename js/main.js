 let signs = [
        'AC', '( )','%','/',
        '1', '2', '3', '*',
        '4', '5', '6', '+',
        '7', '8', '9', '-',
         '0', '.', '='
    ];
    let calc = document.querySelector('#calc')
    let textArea = document.querySelector('#inputVal')

    signs.forEach((el)=>{
        let signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = el;
        if (signElement.innerHTML ==='0'){
            signElement.style.cssText = `
                width: 100px;
                border-radius: 50px;
                text-align: left;
                padding-left: 18px;
                box-sizing: border-box;
            `
        }
        if (signElement.innerHTML === 'AC'|| signElement.innerHTML === '( )' || signElement.innerHTML === '%'){
            signElement.style.cssText = `
                background: #999999;
            `
        }
        if (signElement.innerHTML === '/' || signElement.innerHTML === '*' || signElement.innerHTML === '+' || signElement.innerHTML === '-' || signElement.innerHTML === '='){
            signElement.style.cssText = `
                background: #f70;
            `
        }
        calc.append(signElement);
    })
    calc.querySelectorAll(".btn").forEach((btn)=>{
        btn.addEventListener('click', onButtonClick)
    })

    function onButtonClick(event) {
        if(event.target.innerHTML === 'AC') {
                textArea.innerHTML = '0';
        }else if(event.target.innerHTML === '='){
            textArea.innerHTML = eval(textArea.innerHTML)
        }else if(textArea.innerHTML === '0'){
            textArea.innerHTML = event.target.innerHTML;
        }else if(event.target.innerHTML === '%'){
            textArea.innerHTML = (textArea.innerHTML)/100
        }else if(event.target.innerHTML === '( )'){
            textArea.innerHTML = `(${textArea.innerHTML})`;
        }else if(event.target.innerHTML === '+/-'){
            if(eval(textArea.innerHTML) > 0){
                textArea.innerHTML = `(-${eval(textArea.innerHTML)})`;
            }else if (eval(textArea.innerHTML) < 0){
                textArea.innerHTML = `${textArea.innerHTML.slice(2)}`;
            }
        }

        else {
            textArea.innerHTML += event.target.innerHTML;
        }
}