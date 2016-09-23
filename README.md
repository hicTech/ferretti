# cssp


per ora ci sono due componenti principali: Grunt e tagsManager.js

- grunt (default task):
    webpack:            prende tutti i file .less in cssp/core/ e li butta in dist/main.style.css
                        prende tutti i tag <style> dei file .html in TAGS/ e li butta in dist/main.style.css

    less:               compila il file dist/main.style.css

    purifycss:          osserva tutte le classi css usate in TAGS/app/**/*.html (che poi sono tutti e soli i tag usanti nell'app)
                        e genera il file dist/purified.main.style.css eliminando le classi non utilizzate

    cssmin:             genera dist/purified.main.styles.min.css minificando il purified






- tagsManager.js:   gestisce i tags in TAGS/app come prima (funzione all'on, inclusione ecc) ma prima di pompare il tag
                    nel DOM lo epura del tag <style> visto che sta tutto in dist/purified.main.styles.min.css