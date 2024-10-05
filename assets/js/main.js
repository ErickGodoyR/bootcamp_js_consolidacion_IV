//https://swapi.dev/api/people/

$(document).ready(()=>{
    const urlAPI = "https://swapi.dev/api/people/"

    $.ajax({
        url: urlAPI,
        method: "GET",
        dataType: "json",
        success: {

        },
        error: {}
    })

})