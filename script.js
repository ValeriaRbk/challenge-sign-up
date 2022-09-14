const submitBtn = document.querySelector('.submit-button')
const form = document.forms[0]


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validator(form)
    
})

function validator(form){
    for(const elem of form.elements){
        if(elem.tagName == 'INPUT'){
            const errorList = document.querySelectorAll(`.${elem.name}`)
            if(elem.value.length > 0 ){
                for(let item of errorList) item.classList -= ' error'
            }
            else{
                elem.placeholder = ''
                if(elem.type == 'email') elem.placeholder = 'email@example/com'
                for(let item of errorList) item.classList += ' error'
            }
        }
    }
}