Affichage dynamique d'un gif du site giphy
==========================================

Receveur 
--------------------------
Le receveur reçoit des requêtes rest contenant l'url ou juste la fin de l'url minifiée

Afficheur 
-------
Affiche dans un navigateur plein écran le dernier gif reçu avec un délai de 3secondes



Elements techniques
----
* Gradle
* Spring boot
* Js ?
* Queue java pour affichage avec conservation des messages envoyés
* Voir si utilisation de Docker
* Voir si utilisation de Reactive ?
* http 2 ?
* un petit jeton CSRF ?
* utilisation de liveReload
* gestion des exceptions

fonctionnalitées à ajouter : 
-------------------
* faire disparaître le gif au bout de 10s si pas de nouveau push
* mettre en place une queue
* Créer une image docker avec le build gradle
* linker avec un ELK
* Ajouter une gestion de la perte de connexion stomp
* Ajouter un message si l'envois est réussi 
Pour mémoire :
* mettre un bouton qui amène sur un site de gif (ou plusieurs)
* proposer les liens des gifs récemment utilisés par tout le monde ?
* mettre un second input pour un message + affichage du message en bas du gif
* mettre les envois de gif en queue
* possibilité d'afficher plusieurs gifs simultanément (splitter l'écran)
* proposer des gif aléatoire ou mettre la barre de recherche giphy ?


Sources 
---
tuto push google :
https://developers.google.com/web/fundamentals/getting-started/codelabs/push-notifications/``

tuto push spring
https://spring.io/guides/gs/messaging-stomp-websocket/

tuto  html teaser
https://webdesign.tutsplus.com/articles/quickly-build-a-swish-teaser-page-with-css3--webdesign-6532

exemples css 3 :
https://1stwebdesigner.com/css-effects/

doc pour stomp ? :

https://github.com/JSteunou/webstomp-client

https://github.com/bmuschko/gradle-docker-plugin

Build continus
----

* `./gradlew build -t`
* `./gradlew bootRun`

Attention le scan des classes de springboot n'est pas relancé à chaud 
(donc ne trouve pas l'ajout de classes)


Utiliser un serveur web dans chrome :
---

https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb


Aide d'intellij sur les websocket
---

Attention, si la page n'est pas lancée, les gifs envoyés ne sont pas pris en compte 
---
Solution : faire un canal perpétuel

host
-------
http://www.eatj.com/plans.jsp
https://cloud.google.com/appengine/?hl=fr
https://github.com/GoogleCloudPlatform/getting-started-java/tree/master/helloworld-springboot

Exemples 
---
* https://giphy.com/gifs/3og0IDEbp5uLAEsQ9y/html5