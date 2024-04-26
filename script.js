let id = null;

const getIdPromise = new Promise((resolve) => {
    checkInterval = setInterval(() => {
        id = window.rb_sync?.id;

        if (id) {
            clearInterval(checkInterval)
            resolve(id);
        }
    }, 500)
})

getIdPromise.then(async (id) => {
    const res = await fetch(`https://ad.mail.ru/adq/?q=1530853&fpid=${id}`);
    
    console.log('!!!!! res', res)
});
