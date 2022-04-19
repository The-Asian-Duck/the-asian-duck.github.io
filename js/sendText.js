
function checkMessageAmount() {
    if (document.getElementsByClassName("msg").length !== 0){
        if(document.getElementById("no-messages")){
            const noMessageContainer = document.getElementById("no-messages").parentNode;
            noMessageContainer.remove()
        }
    }
}

checkMessageAmount()

function sendText(messageString){

    const path = `73.220.38.85:3000/send?message=${messageString}`

    if(messageString !== '' && messageString !== undefined){
        async function postData () {
            const response = await fetch(path, {
              method: "POST",
            })
          
            if (!response.ok) {
              throw new Error(`Request failed with status ${reponse.status}`)
            }
            console.log("Request successful!")
        }
        
        postData()
    }
}

function writeText(messageString){
    if(messageString !== '' && messageString !== undefined){
        const msgContainer = document.getElementById('messages')
        const username = document.getElementById('username-input');
        const messageElement = `
        <div class="msg">
            <span class="msg-username">${username.value} : </span>
            <span class="msg-text">${messageString}</span>
        </div>
        `
        msgContainer.insertAdjacentHTML('beforeend', messageElement)
    }
    checkMessageAmount()
}

const textInputElement = document.getElementById('text-input')

textInputElement.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        sendText(textInputElement.value)
        textInputElement.value = ''
    }
})

const sendButtonElement = document.getElementById('send')

sendButtonElement.addEventListener('click', event => {
    sendText(textInputElement.value)
    textInputElement.value = ''
    textInputElement.focus()
})

console.log('js loaded')