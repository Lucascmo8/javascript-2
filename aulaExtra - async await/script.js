// function n1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("esperou isso aqui")
//             resolve()
//         },2000)
//     })
// }

// async function n2(){
//     console.log("inicio")
//     await n1()
//     console.log("fim")
// }

// n2()

function getUser(id) {
    return fetch(`https://regres.in/api/user?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function showUserName(id) {
    try {
        var user = await getUser(id)

        console.log(`O nome do Usuário é: ${user.data.first_name}`)
    } catch (err) {
        console.log(`erro: ${err}`)
    }

}

showUserName(1)