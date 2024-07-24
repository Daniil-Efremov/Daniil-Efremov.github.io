$(document).ready(()=>{
    //Запрос к API
    $.getJSON("https://randomuser.me/api/?results=50", (data)=>{
        for(i = 0; i< data.results.length; i++){
            //Формирование новых элементов на основе данных от API
             $("#row").append($('<div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"></div>')
                        .append($('<div class="card" style="min-width: 100%; max-width:100%;"></div>')
                        .append($('<ul class="list-group list-group-flush"></ul>')
                        .append('<li class="list-group-item"> Имя: '+ data.results[i].name.first +'</li>', 
                                '<li class="list-group-item"> Фамилия: '+ data.results[i].name.last +'</li>', 
                                '<li class="list-group-item"> Пол: '+ data.results[i].gender +'</li>',
                                '<li class="list-group-item"> Почта: '+ data.results[i].email +'</li>',
                                '<li class="list-group-item"> Номер: '+ data.results[i].phone +'</li>',
                                '<li class="list-group-item ageLi" data-age="' + data.results[i].registered.age + '"> Возраст: '+ data.results[i].registered.age +'</li>'))));
        
            
        };

        var
        ageInput = document.getElementById("ageInput"),
        ageLi = document.getElementsByClassName("ageLi");
        //Всем карточкам добавляется прослушка ивента click, при его срабатывание карточке добавляетя класс border-success или убирается если он уже есть
        for(i = 0; i < ageLi.length; i++){
            ageLi[i].parentElement.parentElement.addEventListener("click", (el)=>{
                console.log(event.target.parentElement.parentElement.classList);
                if(event.target.parentElement.parentElement.classList.contains("border-success")){
                    event.target.parentElement.parentElement.classList.remove("border-success");
                }else{
                    event.target.parentElement.parentElement.classList.add("border-success");
                };
            });
        };
        //Текстовому полю добавляется прослушка ивента input, при его срабатывание у всех колонок убирается класс visually-hidden, 
        //после этот класс добавляетмя всем колонкам, содержащим карточку где значение возраста меньше, указанного в текстовом поле. 
        ageInput.addEventListener("input", (eventData)=>{
            for(i = 0; i < ageLi.length; i++){
                if(parseInt(ageLi[i].dataset.age) < parseInt(ageInput.value)){
                    if( ageLi[i].parentElement.parentElement.classList.contains("border-success")){
                        
                    }else{
                        ageLi[i].parentElement.parentElement.parentElement.classList.add("visually-hidden");
                    };
                }else{
                    ageLi[i].parentElement.parentElement.parentElement.classList.remove("visually-hidden");
                };
            };
        });
    });
});
