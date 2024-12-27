var arr = [
    {dp:"https://images.unsplash.com/photo-1669804227127-0876cb0f5474?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95JTIwZHB8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1654444046350-a388c3ef0a8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FkJTIwYm95fGVufDB8fDB8fHww",
      username:"prashant",
    },

    {dp:"https://images.unsplash.com/photo-1504494701988-c068aedece14?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveSUyMGRwfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1593362313859-8a32fcc6fede?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhZCUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
      username:"Jayash",
    },

    
    {dp:"https://images.unsplash.com/photo-1457301608316-fc12b0d40dbc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJveSUyMGRwfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1513605250897-7cdd5ce3b46d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhZCUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
      username:"Varun",},
    
    {dp:"https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1530981785497-a62037228fe9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username:"suman",},
      {dp:"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username:"Mahi",},
]

var overlay = document.querySelector(".overlay");
var storiyan = document.querySelector("#storiyan");
var sum = "";

arr.forEach(function(elem,index){
    sum += `<div class="story">
                <img id=${index} src="${elem.dp}" alt="">
            </div>`
})

var growth = document.querySelector(".growth");
var h3 = document.querySelector('h3');

storiyan.innerHTML = sum;

storiyan.addEventListener("click",function(dets){

    console.log('storiyan');
    
    var grow = 0;

    var start = setInterval(function(){
        grow++;
        growth.style.width = grow + '%'
        },30)
    

     overlay.style.display = "block"
      overlay.style.backgroundImage = `url(${arr[dets.target.id].story })`
      h3.innerHTML = arr[dets.target.id].username;

      setTimeout(function(){
        overlay.style.display = "none";
        clearInterval(start);
      },3000)
    
})
