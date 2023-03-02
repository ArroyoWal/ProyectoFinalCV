function getPeople(){
    const url = 'https://randomuser.me/api/?nat=es';

    fetch(url)
        .then(res => res.json())
        .then(function (data){
            let people = data.results;
            return people.map(function (person) {
                document.getElementById('picture').src = person.picture.large;
                document.getElementsByClassName('name')[0].innerText = `${person.name.first} ${person.name.last}`;
                document.getElementsByClassName('name')[1].innerText = `${person.name.first} ${person.name.last}`;
                document.getElementById('age').innerHTML = person.dob.age;
                document.getElementById('phone').innerHTML = person.phone;
                document.getElementById('email').innerHTML = person.email;
                document.getElementById('adress').innerHTML = `${person.location.street.name} ${person.location.street.number}`;
                if (person.gender == 'female'){
                    document.getElementById('aboutme').innerHTML = getDescription('f');
                    getExperienceF();
                    getAbilitiesF();
                }else {
                    document.getElementById('aboutme').innerHTML = getDescription('m');
                    getExperienceM();
                    getAbilitiesM();
                }

            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getDescription(gender){

    let descriptionF = "Diseñadora gráfica con tres años de experiencia en agencias de publicidad. Especializada en ilustración digital en 2D para redes sociales. Coordinadora de la campaña de diseño para la marca PediaFun, la cual elevó los índices de engagement en Facebook e Instagram en un 25%. En busca de utilizar mis conocimientos de diseño digital y social media para alcanzar los objetivos del área de diseño de Andares Corp.";
    let descriptionM = "Técnico en informática con más de 5 años de experiencia en industrias de tecnología. Especializado en brindar apoyo asesoría técnica a empresas con más de 500 empleados y en mantener un índice de satisfacción del usuario de 9,5. Busco brindar la misma calidad de atención y optimizar el rendimiento de los sistemas informáticos de Land Lord Technologies.";

    if (gender == 'f')
        return descriptionF
    if (gender == 'm')
        return descriptionM

}

function getExperienceM(){

    let experienceM = ['A cargo de proporcionar mantenimiento y soporte para los más de 500 equipos informáticos de la empresa', 'Creé un protocolo de actuación en caso de averías y problemas que redujo los tiempos de reparación en un 15%.', 'Gracias a la creación de una serie de videos tutoriales dirigidos al usuario, reduje el número de solicitudes de ayuda diaria en un 25%.', 'Instauré un nuevo sistema de encuestas para revelar sus índices de satisfacción anuales.'];
    var ul = document.createElement('ul');

    for( i=0 ; i<experienceM.length ; i++)

    {
        var li = document.createElement('li');
        li.innerHTML = experienceM[i];
        ul.appendChild(li);
    }
    document.getElementById('experienceCV').appendChild(ul);

}

function getExperienceF(){

    let experienceF = ['Diseño de catálogos web para los 10 clientes de la empresa.', 'Diseño de personaje para la mascota oficial de la marca JulesDoc.', 'Produje un promedio de 15 ilustraciones semanales para campañas de redes sociales.', 'Rediseño de dos logotipos para nuevos clientes de la empresa.'];

    var ul = document.createElement('ul');



    for( i=0 ; i<experienceF.length ; i++)

    {
        var li=document.createElement('li');
        li.innerHTML= experienceF[i];
        ul.appendChild(li);
    }
    document.getElementById('experienceCV').appendChild(ul);

}

function getAbilitiesM(){

    let abilitiesM = [
                        'Conocimientos de redes LAN y WAN',
                        'Resolución de problemas',
                        'Trabajo bajo presión',
                        'Bases de datos SQLServer',
                        'Bases de datos Oracle',
                        'Atención al usuario',
                        'Administración de la nube',
                        'Aprendizaje rápido'];
    var ul = document.createElement('ul');

    for(i=0 ; i<abilitiesM.length ; i++)

    {
        var li = document.createElement('li');
        li.innerHTML = abilitiesM[i];
        ul.appendChild(li);
    }
    document.getElementById('abilitiesCV').appendChild(ul);

}

function getAbilitiesF(){

    let abilitiesF = ['Illustración digital',
                        'Adobe Photoshop',
                        'Diseño de personaje',
                        'Administración del tiempo',
                        'Diseño de storyboard',
                        'Teoría del color'];

    var ul = document.createElement('ul');



    for( i=0 ; i<abilitiesF.length ; i++)

    {
        var li=document.createElement('li');
        li.innerHTML= abilitiesF[i];
        ul.appendChild(li);
    }
    document.getElementById('abilitiesCV').appendChild(ul);

}

function viewInfo(){
    let articlePersonalInfo = document.getElementById('personalInfo');

    document.getElementById('experience').style.display = 'none'
    document.getElementById('abilities').style.display = 'none';
    fadeIn(articlePersonalInfo);

}

function viewExperience(){
    let articleExperiencie = document.getElementById('experience');

    document.getElementById('personalInfo').style.display = 'none';
    document.getElementById('abilities').style.display = 'none';
    fadeIn(articleExperiencie);

}

function viewAbilities(){
    let articleAbilities = document.getElementById('abilities');

    document.getElementById('personalInfo').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    fadeIn(articleAbilities);

}

function hiddenExperienceAbilities(){
    document.getElementById('experience').style.display = 'none';
    document.getElementById('abilities').style.display = 'none';
}

function fadeIn(element, duration = 600) {
    element.style.display = '';
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}


window.onload = function() {

    hiddenExperienceAbilities();
    getPeople();

}