(proposta di p3cus)

**Problema**  
console.log() che escono anche in produzione non sono troppo eleganti

**Soluzione**  
includere nel main del progetto un piccolo script, nel quale viene assegnata ad una variabile la console del browser e  **solo** quando viene settata la variabile di test a 'true' vengono visualizzati i console.log().  
Nota: 'cip' = cinema in piazza

```
// main.js

let cip = {};

if (localStorage.test && localStorage.test === 'true') {
  cip.debug = window.console
} else {
  cip.debug = () => {}
}
```

```
// altro file javascript
cip.debug.log('Hello!')
```

```
// console del browser
localStorage.test = 'true'  // --> nota: true come stringa, non come booleano
> Hello!
```
