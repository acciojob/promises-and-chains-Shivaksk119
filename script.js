//your JS code here. If required.
let nameInp  = document.getElementById("name");
let ageInp = document.getElementById("age");
let submitBtn = document.getElementById("btn");

submitBtn.addEventListener('click', ()=>{
	if(nameInp.value==='' || ageInp.value===''){
		alert('Both fields are required')
		return
	}

	const promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(ageInp.value>=18){
				resolve(`Welcome, ${nameInp.value}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${nameInp.value}. You aren't old enough.`)
			}
		},4000)
	})

	promise.then((message)=>{
		alert(message)
	}).catch((error)=>{
		alert(error)
	})
})