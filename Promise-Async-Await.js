const makeRequest = (request) => {
    return new Promise((resolve, reject) => {
        if (request === 'Malli') resolve('Request successful')
        reject('Request rejected')
    })
}

const postRequest = (resp) => {
    return new Promise((resolve, reject) => {
        resolve('Processing request ' + resp)
    })
}

// makeRequest('Malli').then((resp) => {
//     console.log('Response Received')
//     return postRequest(resp)
// }).then(postResp => {
//     console.log(postResp)
// }).catch(err=> {
//     console.log(err)
// })

async function doWork() {
    try {
        const request  = await makeRequest('Malli')
        console.log(request)
        const post = await postRequest(request)
        console.log(post)
    } catch (err) {
        console.log(err)
    }
}

doWork()
