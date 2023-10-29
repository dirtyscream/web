"use strict";
document.addEventListener("DOMContentLoaded",()=>{

    let timerId;
    const mob_find = document.querySelector("#mob_find");
    const imgure = document.querySelector(".img_steping");
    const fins = document.querySelector("#last_li");
    const nones = document.querySelector(".nones");
    const close = document.querySelector(".close_modal");
    const button_modal = document.querySelector(".FISTING_DEN_ASS");
    const slid = document.querySelector(".project");
    const step1 = document.querySelector("#step1");
    const step2 = document.querySelector("#step2");
    const step3 = document.querySelector("#step3");
    const step4 = document.querySelector("#step4");
    const PROVODIMENZ = document.querySelector("#PROVODIMENZ");
    const PROVODIMENZP = document.querySelector("#PROVODIMENZPS");
    const burger = document.querySelector(".burger");
    const burger_modal = document.querySelector(".burger_modal");
    const burger_close = document.querySelector(".burger_close");
    const ilove = document.querySelectorAll(".NIOS");
    const mobile_modal = document.querySelector(".mobile_modal");
    const Logo = document.querySelector(".Logo");
    button_modal.addEventListener("click", function (evt){
        evt.preventDefault();
        fins.classList.add("modal_esx_p");
        nones.classList.remove("nones");
        ilove.forEach((e)=>{
           e.style.display = "none";
        });
    });
    close.addEventListener("click",function (evt){
        evt.preventDefault();
        fins.classList.remove("modal_esx_p");
        nones.classList.add("nones");
        ilove.forEach((e)=>{
            e.style.display = "block";
        });
    });

    function rightingure(){
        slid.style.background = 'url("/img/slider2.png"), lightgray 50% / cover no-repeat';
        slid.classList.add("animated");
    }
    function leftignuere() {
        slid.style.background = 'url("/img/slider3.png"), lightgray 50% / cover no-repeat';
        slid.classList.add("animated");
    }
    function FILE_IMGURE() {
        slid.style.background = 'url("/img/constrection.png"), lightgray 50% / cover no-repeat';
        slid.classList.add("animated");
    }
    function autoSliderone() {
        timerId = setInterval(rightingure,5000);
    }
    function autoslidertwo(){
        let timers = setInterval(leftignuere,10000);
    }
    function autosliderRR() {
        let lasttimers = setInterval(FILE_IMGURE,13000);
    }
    autoSliderone();
    autoslidertwo();
    autosliderRR();

    step1.addEventListener("click",(evt)=>{
        evt.preventDefault();
        PROVODIMENZ.textContent = 'Проводим консультацию';
        PROVODIMENZP.textContent = '                  Влечёт за собой процесс внедрения и модернизации приоритизации\n' +
            '                  разума над эмоциями. В рамках спецификации современных\n' +
            '                  стандартов, некоторые особенности внутренней политики будут\n' +
            '                  объективно рассмотрены соответствующими инстанциями. А также\n' +
            '                  представители современных социальных резервов, инициированные\n' +
            '                  исключительно синтетически, ограничены исключительно образом\n' +
            '                  мышления. Являясь всего лишь частью общей картины,\n' +
            '                  реплицированные с зарубежных источников, современные\n' +
            '                  исследования подвергнуты целой серии независимых исследований.\n' +
            '                  Кстати, стремящиеся вытеснить традиционное производство,\n' +
            '                  нанотехнологии освещают чрезвычайно интересные особенности\n' +
            '                  картины в целом, однако конкретные выводы, разумеется,\n' +
            '                  призваны к ответу.'
        imgure.src = "/img/treaty.png";
    });
    step2.addEventListener("click",(evt)=>{

        evt.preventDefault();
        PROVODIMENZ.textContent = 'Составляем смету';
        imgure.src = "/img/smeta.png";
        PROVODIMENZP.textContent = 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.'
    });
    step3.addEventListener("click",(evt)=>{

        evt.preventDefault();
        imgure.src = "/img/note.png";
        PROVODIMENZ.textContent = 'Привлекаем подрядчиков';
        PROVODIMENZP.textContent = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.'
    });
    step4.addEventListener("click",(evt)=>{
        imgure.src = "/img/lookd.png";
        evt.preventDefault();
        PROVODIMENZ.textContent = 'Инспектируем все этапы работ';
        PROVODIMENZP.textContent = 'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит \n' +
            'о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.'
    });

    burger.addEventListener("click",(evt)=>{
        evt.preventDefault();
        burger_modal.classList.remove("burger_modal");
        burger_modal.classList.add("burger_modeal");
    })
burger_close.addEventListener("click",(evt)=>{
    evt.preventDefault();
    burger_modal.classList.add("burger_modal");
    burger_modal.classList.remove("burger_modeal");
});


mob_find.addEventListener("click",(e)=>{
    e.preventDefault();
    fins.classList.add("modal_esx_p");
    nones.classList.remove("nones");
    mob_find.style.display = "none";

Logo.addEventListener('click',(evt)=>{
    evt.preventDefault();
    Logo.classList.add("None_logo");
})
});
});
