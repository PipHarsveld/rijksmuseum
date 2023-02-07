// Variables
const title = document.querySelector('h1')

// Logica
fetchData()

// Functions
function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/member?id=cldepf0283y3h0avwy7t83ohj'

    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // aanroepen van de functie
                        changeHTML(data)
                    })

}

function changeHTML (data) {
    const name =  [data.member.name + ' ' + data.member.surname]

    title.innerHTML = name
}

