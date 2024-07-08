let data = [
    {id : 1 , Title : "My Story" , content : "A Garden in Bloom — In the face of unimaginable adversity, we also witnessed heartwarming humanity. Glimpses of hope amid escalating crises in the Middle East. Donate Now. Give now. Your Donation Counts. Donate Now."},
    {id : 2 , Title : "Myfsf Story" , content : "A Garden in Bloom — In the face of unimaginable adversity, we also witnessed heartwarming humanity. Glimpses of hope amid escalating crises in the Middle East. Donate Now. Give now. Your Donation Counts. Donate Now."},
    {id : 3 , Title : "Mydsf Story" , content : "A Garden in Bloom — In the face of unimaginable adversity, we also witnessed heartwarming humanity. Glimpses of hope amid escalating crises in the Middle East. Donate Now. Give now. Your Donation Counts. Donate Now."},
    

]

function creatAll(array){

    array.forEach(element => {
        console.log(element)
        let card = document.createElement("div")

        let title = document.createElement("p")
        title.innerHTML = element.Title
        let content = document.createElement("p")
        content.innerHTML = `${ element.content} <button>Update</button><button>Delete</button>`

        card.append(title , content)

        PostData.append(card)

    });
}


function creatPost(){
    document.querySelector("#create-post-form").style.display = "block";
    document.querySelector("#submit3").style.display = "none";
}


function add(){
    var title = document.querySelector("#title").value;
    var content = document.querySelector("#content").value;

    var newObj = {title , content};
    console.log(data.push(newObj));
    

   
    document.querySelector("#create-post-form").style.display = "none";
    document.querySelector("#submit3").style.display = "bloke";

//  return creatAll(array)
}

creatAll(data)