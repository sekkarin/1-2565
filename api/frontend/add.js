async function add() {
    console.log("ADD");
    const mytype = document.getElementById("type").value
    const name = document.getElementById("name").value
    const image = document.getElementById("image").value
    try {
        await fetch(`http://localhost:3000/restaurant/add/?name=${name}&type=${mytype}&imageurl=${image}`,
            {
                method: "POST",
                mode: 'cors', cache: 'no-cache',
                credentials: 'same-origin', headers: { "Content-Type": "application/json" },
            }
        )
    }
    catch (err) {
        console.log(err);
    }

}