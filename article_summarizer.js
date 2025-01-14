
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3d58ccc0f2msh05d8a2814b4d08ap15ee2djsncbdb57794b71',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn = document.querySelector(".btn")
const summary = document.querySelector(".summary")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const input = document.querySelector("#url").value
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

    fetch(url, options)
    .then(data => data.json())
    .then(data => {
        // console.log(data)
       summary.innerText = data?.summary
    })
    .catch(error => {
        console.log(error)
    })
    
})


