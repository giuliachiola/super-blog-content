---
title: 'Vue JS: basic project setup'
abstract: 'How to setup a Vue JS project step by step from scratch.'
quote: Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.
quoteAuthor: Lou Holtz
img: 'https://source.unsplash.com/RPMcxbm2zi4'
imgAuthorName: '@pawel_czerwinski'
imgAuthorProfile: 'https://unsplash.com/@pawel_czerwinski'
date: 2020-04-04
mainTag: vuejs
tags:
  - vuejs
---

// REVIEW:

Di recente ci siamo avvicinati al mondo di Vue JS e al suo fedele compare webpack. Ecco alcune chicche semplici semplici per iniziare un progetto al meglio.

Divido la guida in 5 installazioni indipendenti:
1. Vue + Webpack
2. Vuex
3. Git Lab + Gitflow
4. SASS
5. Boostrap

## 1. Installare Vue + Webpack

Per prima cosa controlliamo di avere **vue-cli** aggiornato. Se non lo fosse, questo comando lo installa/aggiorna all'ultima versione:  
`npm i -g vue-cli`

Dentro alla cartella dove vogliamo il progetto (nel mio caso _sites_)  
`vue init webpack projectname`

Diamo Invio (Yes implicito) a tutti i punti, tranne quelli del Setup Unit Test, a cui personalmente ho dato No perché non mi servono in questo semplice progetto (in ogni caso se dopo vi accorgete che servono si possono sempre installare!).

<!-- ```
Project name projectname
? Project description A Vue.js project
? Author Giulia Chiola <giulia.chiola@modo.md>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm
``` -->

![shell_01](https://res.cloudinary.com/kifo17/image/upload/v1585162768/super-blog/blog/shell_01_wn5plp.jpg)

Benissimo, abbiamo appena creato lo scaffolding del progetto.  
Se vogliamo vedere cosa abbiamo ottenuto fino adesso facciamo quello che dice la console: entriamo nella cartella e facciamo girare il server in development mode

```
cd projectname
npm run dev
```

![shell_02](https://res.cloudinary.com/kifo17/image/upload/v1585162774/super-blog/blog/shell_02_oqupox.jpg)

Sul browser a http://localhost:8080 troviamo il nostro bellissimo Hello Vue!

![HelloVue](https://res.cloudinary.com/kifo17/image/upload/v1585162775/super-blog/blog/HelloVue_mkrgsd.jpg)

Vediamo un secondo cosa c'è di importante nella cartella del progetto:

- _index.html_  
è la pagina che viene compilata in Server Side Rendering e che stiamo guardando.
All'interno di index.html troviamo `<div id="app"></div>` che è _where the magic happens_: in mezzo a quel div c'è tutta la nostra app.  

- _App.vue_  
il tag `<template>` ha un unico tag all'interno `<div id="app">`, ed è proprio il suo contenuto che stiamo vedendo sul browser.  
(Importante: non è un caso che questo componente abbia un unico tag! Ogni componente Vue deve avere **necessariamente** un unico grande tag al suo interno, che a sua volta ne può contenere quanti vogliamo)  

- _main.js_  
è il file JavaScript principale del progetto, qui vengono istanziati Vue e il router (e lo store nel caso installassimo Vuex)

In teoria a questo punto avremmo finito, ma a noi piace essere organizzati quindi facciamo un pezzettino in più: di default Vue vuole i componenti `.vue` nella cartella `components`, ma possiamo creare delle sottocartelle per averli più ordinati. Bisogna tenere a mente che è _webpack_ a risolvere le cartelle dei _components_, quindi è a lui che dobbiamo dire cosa fare. Aggiungiamo quindi degli _alias_ a quelli già presenti, nel mio caso aggiungo _icons, elements, layout, templates_.

```
├── src
│   ├── components
│       └── elements
│           └── HelloWord.vue
│       └── icons
│       └── layout
│       └── templates
```

```
// webpack.base.conf.js

resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@elements': resolve('src/components/elements'),
      '@icons': resolve('src/components/icons'),
      '@layout': resolve('src/layout'),
      '@templates': resolve('src/components/templates'),
      '@components': resolve('src/components'),
      '@root': resolve('src')
    }
}
```

<!-- ![webpack_resolve_01](images/webpack_resolve_01.png) -->

A questo punto da ogni componente in _components_ possiamo includerne altri preceduti dall'alias della cartella.  
Es. HelloVue è dentro elements quindi:  
`import HelloWorld from '@elements/HelloWorld.vue'`

![webpack_resolve_02](https://res.cloudinary.com/kifo17/image/upload/v1585162774/super-blog/blog/webpack_resolve_02_mqwiiu.jpg)  
^ Lascio commentata la vecchia sintassi, dove pescava il componente da 'components' e non dalla sottocartella 'elements'

In questa prima fase di scaffolding chiamo il componente di test `HelloVue.vue` da _main.js_ e controllo che tutto funzioni, **ma** una best-practice sarebbe di _non_ includere componenti dentro main.js, se non l'istanza Vue vera e propria. I componenti li includiamo nei templates, e i templates li chiameremo dal router. Ma questa è un'altra (lunga) storia e la vediamo un'altra volta.


## 2. Vuex

Per farla breve: Vuex è uno _state management pattern_ per applicazioni Vue. Serve come archivio centralizzato per tutti i componenti di un'applicazione, con regole che garantiscono che lo stato possa essere mutato solo in modo prevedibile. [Guida dettagliata](https://vuex.vuejs.org/en/intro.html)

Installare Vuex è decisamente facoltativo. Non tutte le applicazioni Vue lo utilizzano. Nel mio progetto in particolare so che dovrò gestire dei dati e mi serve un posto unico in cui salvarli e andarli a recuperare, quindi vediamo come installarlo. 

La cosa migliore da fare è fermarsi e pensare "Mi serve un posto dove salvare dati e fare `get` e `set` da diversi componenti?", se la risposta è Sì, vi conviene installarlo subito. Se la risposta è No, rifatevi la domanda. Se è ancora No, ok va bene così.

Perché farsi due volte la domanda?  
Perché è semplicissimo cadere nella tentazione di sfruttare un altro posto (apparentemente più semplice) dove salvare i dati: la magica `$root`. Nel mio primo progetto con Vue ho ceduto - come tutti - alla tentazione di utilizzare la root per salvare i dati. Pessima scelta. Non fatelo. Esplode il computer, giuro. 

//spiegazione del perché non va bene + link


Installiamo Vuex:
`npm install vuex`

Dentro a `src` creiamo una nuova cartella `store` con al suo interno il file `store.js`. Dentro store.js andiamo a mettere i settaggi per lo store di Vuex, e in main.js importiamo lo store stesso:

```
├── src
│   ├── assets
│   ├── components
│   ├── router
│       └── index.js
│   ├── store
│       └── store.js
```

<!-- ![vuex_store](images/vuex_store.png) -->

```
// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
})
```

<!-- ![vuex_storejs](images/vuex_storejs.png) -->

```
// main.js

import { store } from './store/store'

new Vue({
  store: store,
})
```
![vuex_mainjs](https://res.cloudinary.com/kifo17/image/upload/v1585162770/super-blog/blog/vuex_mainjs_ogofdk.jpg)

[Guida dettagliata](https://css-tricks.com/intro-to-vue-4-vuex/)

Perfetto, Vuex pronto. Quando servirà potremo usarlo subito.

## 3 Git Lab + Gitflow

### 3.1 Mettiamo il progetto su un repo

Andiamo su Git Lab, click su **New Project**  
<!-- https://gitlab.com/projects/new -->

![gitlab_newproject](https://res.cloudinary.com/kifo17/image/upload/v1585162773/super-blog/blog/gitlab_newproject_degurn.jpg)

e poi **Create project**

Leggiamo le istruzioni per creare un repo da una _cartella esistente_
```
cd existing_folder
git init
git remote add origin git@gitlab.com:giuliachiola/vueproject.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

Et voilà, prima commit sul repo fatta!

### 3.2 Utilizziamo Gitflow

Gitflow è semplicemente un'idea astratta di un flusso di lavoro Git. Con Gitflow quando si lavora in team risulta molto più chiaro se il branch è in sviluppo, è stato rilasciato, oppure se è un ramo di bugfixing al volo.  
[Guida dettagliata](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

Per iniziare a lavorare con Gitflow:  
`git flow init` e diamo Ok a tutto quello che ci chiede (trust the computer, the computer is your friend!)

![gitflow_init](https://res.cloudinary.com/kifo17/image/upload/v1585162763/super-blog/blog/gitflow_init_twkyzo.jpg)

_Gitflow in super-breve:_  
Ci sono due grossi branch: `master` e `develop`.  
_master_ è quello principale che viene rilasciato man mano al cliente, mentre _develop_ è quello in sviluppo. **Non** si sviluppa direttamente su questi due rami, ma si sviluppa su branch che partono rispettivamente da uno di questi.

Situazione: siamo con un nuovo progetto, come in questo tutorial, su quale branch lavoriamo? Dopo _git flow init_ mi sono ritrovata su `develop`, coincidenze?? Io non credo.

Da qui creiamo un nuovo branch, ma non con il solito modo _git checkout -b branchname_; Gitflow ha una sua (più furba) sintassi: `git flow feature start branchname`. 

![gitflow_feature_start](https://res.cloudinary.com/kifo17/image/upload/v1585162755/super-blog/blog/gitflow_feature_start_ajnwvk.jpg)

Viene creato un branch a partire da develop, lavoriamo su questo nuovo branch e quando la feature è conclusa diamo `git flow feature finish branchname` 

![gitflow_feature_end](https://res.cloudinary.com/kifo17/image/upload/v1585162756/super-blog/blog/gitflow_feature_end_rxaj8t.jpg)

e automaticamente branchname viene mergiato su develop e cancellato dal repo (Niente più branch morti in giro! Evviva!).

Idem con patate per `master`. Su master non abbiamo lo sviluppo, ma i rilasci. Quindi non faremo le features, ma solo bugfixes al volo. Da master `git flow hotfix start branchname`, fixo e concludo con `git flow hotfix finish branchname`  

![gitflow_hotfix_start](https://res.cloudinary.com/kifo17/image/upload/v1585162765/super-blog/blog/gitflow_hotfix_start_jhabzd.jpg)
![gitflow_hotfix_start](https://res.cloudinary.com/kifo17/image/upload/v1585162757/super-blog/blog/gitflow_hotfix_end_01_qr5bej.jpg)
![gitflow_hotfix_end](https://res.cloudinary.com/kifo17/image/upload/v1585162759/super-blog/blog/gitflow_hotfix_end_02_i1c9sy.jpg)

Nota: tra le cose interessanti che offre Gitflow, ti impedisce (o meglio ti sconsiglia vivamente, perché si può comunque aggirare) di _non_ aprire un nuovo branch di hotfix se non hai chiuso il precedente. E ha senso in effetti, non bisognerebbe correggere più di un bug alla volta.

![gitflow_hotfix_2branches](https://res.cloudinary.com/kifo17/image/upload/v1585162762/super-blog/blog/gitflow_hotfix_2branches_sdpxsf.jpg)


## 4. SASS

Nei componenti Vue la strada più comune è  quella di mettere il CSS al fondo del componente nel tag `<style>` 
<!-- (scoped = riguarda _solo ed esclusivamente_ quel componente, non influisce su altro).  -->

Se al posto di CSS puro vogliamo utilizzare il SASS, no problem:

`npm install sass-loader node-sass webpack --save-dev`

Nella configurazione di webpack aggiungiamo dentro a _module > rules_
```
// webpack.base.conf.js

{
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "sass-loader" // compiles Sass to CSS
    }]
}
```

![webpack_sass](https://res.cloudinary.com/kifo17/image/upload/v1585162775/super-blog/blog/webpack_sass_qvwvrn.jpg)

A questo punto nei componenti Vue possiamo scrivere in SASS
```
<style lang="scss">
.test {
  color: red;

  &.test--main {
    color: blue;
  }
}
</style>
```


## 5. Bootstrap
Piccole precisazioni: in linea di massima sono contraria a  Bootstrap, ma ci sono casi in cui è davvero comodo utilizzarlo: classi pronte per mockup veloci. L'importante IMO è non avere 1000 rige di CSS di cui 999 sono overrides... in quel caso _vade retro Bootstrap_!  

Vediamo come integrarlo nel progetto.

`npm install bootstrap --save`

`npm install file-loader url-loader --save-dev\n`

Per utilizzare Bootstrap ci serve un _require_ dei file nel main.js, e io voglio utilizzare solamente il CSS quindi importerò soltanto quello.

`require('bootstrap/dist/css/bootstrap.min.css')`

![bootstrap_mainjs](https://res.cloudinary.com/kifo17/image/upload/v1585162753/super-blog/blog/bootstrap_mainjs_mt5z5n.jpg)

A questo punto aggiungete un componente di prova `<input type="button" class="btn btn-primary" value="I'm a Bootstrap button">` e se tutto funziona lo vedrete apparire bello come il sole:

![HelloVue_bootstrap](https://res.cloudinary.com/kifo17/image/upload/v1585162774/super-blog/blog/HelloVue_bootstrap_z8ppen.jpg)


