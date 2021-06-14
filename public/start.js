let data = [];

var player = new Vue({
    el: '#player',
    data: {
        name: String,
        password: String,
        allScore: Number
    },
    methods:
        function goToGame(){
            let username = document.getElementById("playerName").value;
            if(username == '') {
                alert("You must enter a username");
            } 
            else {
                window.location.href = "index.html";
            }
        }

})
const init = async () => {
    const res = await axios.get('/api/players');
    data = res.data.players;

}

init();

