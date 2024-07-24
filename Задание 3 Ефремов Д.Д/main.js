$(document).ready(()=>{
    $.getJSON("https://randomuser.me/api/?results=50", (data)=>{
        for(i = 0; i< data.results.length; i++){
           console.log(data.results[i]);
        
             $("#row").append($('<div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"></div>')
                        .append($('<div class="card" style="width: 18rem;"></div>')
                        .append($('<ul class="list-group list-group-flush"></ul>')
                        .append('<li class="list-group-item"> Имя: '+ data.results[i].name.first +'</li>', 
                                '<li class="list-group-item"> Фамилия: '+ data.results[i].name.last +'</li>', 
                                '<li class="list-group-item"> Пол: '+ data.results[i].gender +'</li>',
                                '<li class="list-group-item"> Почта: '+ data.results[i].email +'</li>',
                                '<li class="list-group-item"> Номер: '+ data.results[i].phone +'</li>'))));
        
            
        }
    });
})
