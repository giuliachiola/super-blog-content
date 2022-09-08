# How to use GitFlow integrated with GitLab

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
