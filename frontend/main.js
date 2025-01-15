window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "https://getresumecounteramed.azurewebsites.net/api/GetResumeCounter?code=02PYYd_LlZO5k2xzQUxed2y-z7vDe3Nd-Y3ckWqwzog7AzFuZBbaIA%3D%3D";
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("website called function API")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count
}