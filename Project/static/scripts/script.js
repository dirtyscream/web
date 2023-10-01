"use strict";
document.addEventListener("DOMContentLoaded",()=>{
    let timerId;
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
    const step_text = document.querySelector(".step_text");
    const PROVODIMENZ = document.querySelector("#PROVODIMENZ");
    const PROVODIMENZP = document.querySelector("#PROVODIMENZPS");
    button_modal.addEventListener("click", function (evt){
        evt.preventDefault();
        fins.classList.add("modal_esx_p");
        nones.classList.remove("nones");
    });
    close.addEventListener("click",function (evt){
        evt.preventDefault();
        fins.classList.remove("modal_esx_p");
        nones.classList.add("nones");
    });

    function rightingure(){
        slid.style.background = 'url("/img/slider2.png"), lightgray 50% / cover no-repeat';

    }
    function leftignuere() {
        slid.style.background = 'url("/img/slider3.png"), lightgray 50% / cover no-repeat';
    }
    function FILE_IMGURE() {
        slid.style.background = 'url("/img/constrection.png"), lightgray 50% / cover no-repeat';
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
        imgure.src = '/img/treaty.png';

    });
    step2.addEventListener("click",(evt)=>{
    imgure.src = "/img/smeta.png";

        let NewHeader = document.createElement('h1');
        let NewParg = document.createElement('p');
        NewHeader.textContent = "Составляем смету";
        NewHeader.classList.add('consultation_jobs');
        NewParg.textContent = "Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.";
        NewParg.classList.add('consultation_block_p');
        step_text.appendChild(NewHeader);
        step_text.appendChild(NewParg);
        PROVODIMENZ.classList.add("death");
        PROVODIMENZP.classList.add("death");

    });
    step3.addEventListener("click",(evt)=>{
    imgure.src = "/img/note.png";
        let NewHeader = document.createElement('h1');
        let NewParg = document.createElement('p');
        NewHeader.textContent = "Привлекаем подрядчиков";
        NewHeader.classList.add('consultation_jobs');
        NewParg.textContent = "Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества."
        NewParg.classList.add('consultation_block_p');
        step_text.appendChild(NewHeader);
        step_text.appendChild(NewParg);
        PROVODIMENZ.classList.add("death");
        PROVODIMENZP.classList.add("death");
    });
    step4.addEventListener("click",(evt)=>{
    imgure.src = "/img/lookd.png";
        let NewHeader = document.createElement('h1');
        let NewParg = document.createElement('p');
        NewHeader.textContent = "Инспектируем все этапы работ";
        NewHeader.classList.add('consultation_jobs');
        NewParg.textContent = "Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит \n" +
            "о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.";
        NewParg.classList.add('consultation_block_p');
        step_text.appendChild(NewHeader);
        step_text.appendChild(NewParg);
        PROVODIMENZ.classList.add("death");
        PROVODIMENZP.classList.add("death");
    });
});
