const getIdPromise = new Promise((resolve) => {
    checkInterval = setInterval(() => {
        const id = window.rb_sync?.id;

        if (id) {
            clearInterval(checkInterval)
            resolve(id);
        }
    }, 500)
})

const getResponse = (id) => {
    fetch(`https://ad.mail.ru/adp/?q=1530853&fpid=${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log('fpid: ', id)
            console.log('response', data)

            const textarea = document.querySelector('#TextArea')

            textarea.value = JSON.stringify(data[0].json)
        });
}

const handleSendFpid = () => {
    const fpidInput = document.querySelector('#fpidInput');

    const fpid = fpidInput.value;

    getResponse(fpid);
}


getIdPromise.then(getResponse);

document.querySelector('#fpidButton').addEventListener('click', handleSendFpid);
