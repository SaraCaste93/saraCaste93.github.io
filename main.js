// ============================================================
//  MAIN.JS — Sara Castellanos Portfolio
//  Traducciones y funcionalidad completa
// ============================================================

(function() {
    'use strict';

    // --------------------------------------------
    // 1. TRADUCCIONES
    // --------------------------------------------
    var translations = {
        es: {
            'nav.skills': 'Habilidades',
            'nav.education': 'Educación',
            'nav.about': 'Sobre Mí',
            'nav.contact': 'Contacto',
            'nav.cv': 'Descargar CV',
            'nav.home': 'Inicio',
            'hero.eyebrow': 'Desarrolladora Software · Madrid',
            'hero.greeting': 'Hola, soy',
            'hero.subtitle': 'Apasionada por la ingeniería del software, la arquitectura limpia y las soluciones que impactan. Actualmente becaria en CDS (Hewlett Packard Enterprise) y estudiante en la UPM.',
            'hero.btn1': 'Conóceme',
            'hero.btn2': 'Contáctame',
            'skills.label': 'Tecnologías',
            'skills.title': 'Habilidades',
            'skills.subtitle': 'Lenguajes, herramientas y entornos que uso en mis proyectos',
            'skills.langs': 'Lenguajes de programación',
            'skills.web': 'Desarrollo Web',
            'skills.data': 'Datos & Automatización',
            'skills.tools': 'Entornos & Herramientas',
            'skills.design': 'Diseño & Productividad',
            'skills.soft': 'Aptitudes',
            'soft.1': 'Resolución de problemas',
            'soft.2': 'Comunicación',
            'soft.3': 'Aprendizaje rápido',
            'soft.4': 'Trabajo en equipo',
            'soft.5': 'Creatividad',
            'edu.label': 'Trayectoria',
            'edu.title': 'Educación & Experiencia',
            'edu.subtitle': 'Mi recorrido académico y profesional',
            'edu.experience-title': 'Experiencia Profesional',
            'edu.education-title': 'Formación Académica',
            'tl.cds.date': 'Ene 2026 – Actualidad',
            'tl.cds.title': 'Becaria en CDS',
            'tl.cds.org': 'CDS, a Hewlett Packard Enterprise company',
            'tl.cds.desc': 'Desarrollo de una aplicación de análisis de datos sobre un Data Lake en PostgreSQL con automatización de pipelines mediante Apache Airflow. Diseño de interfaz web con Python Shiny (principios SOLID), integración con SQLAlchemy y sistema de pre-validación de ficheros.',
            'tl.upm.date': '2020 – Actualidad',
            'tl.upm.title': 'Grado en Ingeniería del Software',
            'tl.upm.desc': 'Especialización en desarrollo de aplicaciones, diseño de sistemas y metodologías ágiles. Nivel B2 de inglés — Escuela Oficial de Idiomas.',
            'tl.aurora.date': 'Mar 2024 – Jun 2025',
            'tl.aurora.title': 'Becaria — Aurora Project (H2020)',
            'tl.aurora.desc': 'Durante casi nueve meses participé en la promoción de la app Aurora H2020, demostraciones al público, gestión de redes sociales, organización de eventos y análisis de datos de usuario.',
            'tl.nostromo.date': '2021 – Actualidad',
            'tl.nostromo.title': 'Junta Directiva — Nostromo',
            'tl.nostromo.org': 'Asociación universitaria · ETSI SI',
            'tl.nostromo.desc': 'Gestión administrativa, organización de eventos, liderazgo estratégico y fomento de la colaboración entre miembros durante tres años.',
            'tl.tutor.title': 'Profesora de clases particulares',
            'tl.tutor.org': 'Primaria a Bachillerato',
            'tl.tutor.desc': 'Enseñanza personalizada adaptada a cada estudiante, fomentando la motivación y la comprensión en distintas asignaturas.',
            'tl.gsd.title': 'Bachillerato Tecnológico',
            'tl.gsd.desc': 'Dual Diploma Program — Academica International Studies (nivel C1 estadounidense). Titulación de Monitora de Ocio y Tiempo Libre.',
            'about.label': 'Perfil',
            'about.title': 'Sobre Mí',
            'about.subtitle': 'Conoce más sobre mi trayectoria y pasiones',
            'about.heading': 'Mi historia',
            'about.p1': 'Soy una apasionada de la Ingeniería del Software con un firme compromiso con la excelencia técnica y la innovación. Me considero una persona que funciona muy bien dentro de un equipo, siempre dispuesta a dar soluciones a los problemas que se puedan plantear.',
            'about.p2': 'Nacida y criada en Madrid, mi camino académico me llevó a la UPM donde me especialicé en desarrollo de aplicaciones, diseño de sistemas y metodologías ágiles. Actualmente estoy adquiriendo experiencia real como becaria en CDS (HPE), trabajando con datos, ETL pipelines y arquitecturas SOLID.',
            'about.p3': 'Además de la tecnología, me encanta el cine, explorar Madrid y viajar. Creo que esa curiosidad por el mundo se traduce también en mi forma de abordar los proyectos de software.',
            'stat.langs': 'Idiomas',
            'stat.prog': 'Lenguajes',
            'stat.tools': 'Herramientas',
            'footer.bio': 'Desarrolladora y estudiante de Ingeniería del Software apasionada por crear soluciones que impacten positivamente en las personas.',
            'footer.links': 'Navegación',
            'footer.aptitudes': 'Aptitudes',
            'footer.contact': 'Contacto',
            'footer.copy': '© 2025 Sara Castellanos García. Todos los derechos reservados.'
        },
        en: {
            'nav.skills': 'Skills',
            'nav.education': 'Education',
            'nav.about': 'About Me',
            'nav.contact': 'Contact',
            'nav.cv': 'Download CV',
            'nav.home': 'Home',
            'hero.eyebrow': 'Software Developer · Madrid',
            'hero.greeting': "Hi, I'm",
            'hero.subtitle': 'Passionate about software engineering, clean architecture and impactful solutions. Currently an intern at CDS (Hewlett Packard Enterprise) and a student at UPM.',
            'hero.btn1': 'About Me',
            'hero.btn2': 'Contact Me',
            'skills.label': 'Technologies',
            'skills.title': 'Skills',
            'skills.subtitle': 'Languages, tools and environments I use in my projects',
            'skills.langs': 'Programming Languages',
            'skills.web': 'Web Development',
            'skills.data': 'Data & Automation',
            'skills.tools': 'Environments & Tools',
            'skills.design': 'Design & Productivity',
            'skills.soft': 'Soft Skills',
            'soft.1': 'Problem solving',
            'soft.2': 'Communication',
            'soft.3': 'Fast learner',
            'soft.4': 'Teamwork',
            'soft.5': 'Creativity',
            'edu.label': 'Journey',
            'edu.title': 'Education & Experience',
            'edu.subtitle': 'My academic and professional path',
            'edu.experience-title': 'Professional Experience',
            'edu.education-title': 'Academic Background',
            'tl.cds.date': 'Jan 2026 – Present',
            'tl.cds.title': 'Intern at CDS',
            'tl.cds.org': 'CDS, a Hewlett Packard Enterprise company',
            'tl.cds.desc': 'Developing a data analysis application on a PostgreSQL Data Lake with pipeline automation via Apache Airflow. Web interface design with Python Shiny (SOLID principles), SQLAlchemy integration and file pre-validation system.',
            'tl.upm.date': '2020 – Present',
            'tl.upm.title': "Bachelor's Degree in Software Engineering",
            'tl.upm.desc': 'Specialisation in application development, system design and agile methodologies. B2 level English — Official Language School.',
            'tl.aurora.date': 'Mar 2024 – Jun 2025',
            'tl.aurora.title': 'Intern — Aurora Project (H2020)',
            'tl.aurora.desc': 'Over nearly nine months I participated in promoting the Aurora H2020 app, public demonstrations, social media management, event organisation and user data analysis.',
            'tl.nostromo.date': '2021 – Present',
            'tl.nostromo.title': 'Board Member — Nostromo',
            'tl.nostromo.org': 'University association · ETSI SI',
            'tl.nostromo.desc': 'Administrative management, event organisation, strategic leadership and fostering collaboration among members over three years.',
            'tl.tutor.title': 'Private Tutor',
            'tl.tutor.org': 'Primary to Sixth Form',
            'tl.tutor.desc': 'Personalised teaching adapted to each student, fostering motivation and understanding across different subjects.',
            'tl.gsd.title': 'Technology Baccalaureate',
            'tl.gsd.desc': 'Dual Diploma Program — Academica International Studies (US C1 level). Leisure & Youth Activity Monitor certification.',
            'about.label': 'Profile',
            'about.title': 'About Me',
            'about.subtitle': 'Learn more about my background and passions',
            'about.heading': 'My story',
            'about.p1': 'I am passionate about Software Engineering with a strong commitment to technical excellence and innovation. I consider myself a team player, always ready to find solutions to challenges that arise.',
            'about.p2': 'Born and raised in Madrid, my academic path led me to UPM where I specialised in application development, system design and agile methodologies. I am currently gaining real-world experience as an intern at CDS (HPE), working with data, ETL pipelines and SOLID architectures.',
            'about.p3': 'Beyond technology, I love cinema, exploring Madrid and travelling. I believe that curiosity about the world also translates into the way I approach software projects.',
            'stat.langs': 'Languages',
            'stat.prog': 'Languages',
            'stat.tools': 'Tools',
            'footer.bio': 'Software Engineering developer and student passionate about building solutions that positively impact people.',
            'footer.links': 'Navigation',
            'footer.aptitudes': 'Soft Skills',
            'footer.contact': 'Contact',
            'footer.copy': '© 2025 Sara Castellanos García. All rights reserved.'
        }
    };

    // --------------------------------------------
    // 2. FUNCIÓN DE TRADUCCIÓN (global)
    // --------------------------------------------
    window.setLang = function(lang) {
        if (!translations[lang]) {
            console.warn('Idioma no soportado:', lang);
            return;
        }

        var dict = translations[lang];
        var elements = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            } else {
                console.warn('Clave no encontrada:', key);
            }
        }

        // Actualizar botones
        var btnEs = document.getElementById('btn-es');
        var btnEn = document.getElementById('btn-en');
        if (btnEs) btnEs.classList.toggle('active', lang === 'es');
        if (btnEn) btnEn.classList.toggle('active', lang === 'en');

        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    };

    // --------------------------------------------
    // 3. CARGA INICIAL DEL IDIOMA
    // --------------------------------------------
    var savedLang = localStorage.getItem('lang') || 'es';
    window.setLang(savedLang);

    // --------------------------------------------
    // 4. MENÚ MÓVIL
    // --------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        var toggle = document.getElementById('menu-toggle');
        var nav = document.querySelector('#site-header nav');

        if (toggle && nav) {
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                var isOpen = nav.classList.toggle('open');
                toggle.setAttribute('aria-expanded', isOpen);
            });

            // Cerrar al hacer clic fuera
            document.addEventListener('click', function(e) {
                if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== toggle) {
                    nav.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });

            // Cerrar al hacer clic en un enlace
            nav.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    nav.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        }

        // --------------------------------------------
        // 5. STICKY HEADER
        // --------------------------------------------
        var header = document.getElementById('site-header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 80) {
                header.style.background = 'rgba(10,25,47,0.98)';
                header.style.paddingTop = '0';
                header.style.paddingBottom = '0';
            } else {
                header.style.background = '';
                header.style.paddingTop = '';
                header.style.paddingBottom = '';
            }
        });

        // --------------------------------------------
        // 6. SCROLL SUAVE
        // --------------------------------------------
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });

    // --------------------------------------------
    // 7. ASIGNAR EVENTOS A BOTONES DE IDIOMA
    // (por si el HTML no tiene onclick)
    // --------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        var btnEs = document.getElementById('btn-es');
        var btnEn = document.getElementById('btn-en');
        if (btnEs) {
            btnEs.addEventListener('click', function() { window.setLang('es'); });
        }
        if (btnEn) {
            btnEn.addEventListener('click', function() { window.setLang('en'); });
        }
    });

    console.log('✅ main.js cargado correctamente.');
})();