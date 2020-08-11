# TAROT READING APP TO GO

### Tools:
<h1>
<img src="https://imgur.com/T1TApg1.png" alt="React" width="20%">
<img src="https://imgur.com/plyrZV7.png" alt="React" width="10%">
</h1>


#### Preview

##### first page: intro

![screenshot 1](./readme_img/screenshot_app_1.png)

##### second page: card choice

![screenshot 2](./readme_img/screenshot_app_2.png)

##### third page: result, card reading

![screenshot 3](./readme_img/screenshot_app_3.png)

#### Special features

We used the Fisher Yates algorithm to shuffle the cards and applied it to our code:

(Fisher Yates Shuffle Wikipedia) [https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle]

```
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
```

####  Structure:

```
Project
│   README.md
│   package.json
|   package-lock.json
└───src
│   │   index.html
│   └───styles
|   └───scss
|   │    └───main
│   │    └───abstracts
│   │    └───base
│   │    └───pages
│   └───scripts
│   │     └───data
│   │     └───index.js
|   └───img
└───dist
```

```

Task management
│
│
|
└───Romain-Kevin-Gabriela
│   │
│   └───javaScript
|           └───import from database
|           └───generate list of cards
|           └───when click display infos
|
└───Gabriela
│   │
│   └───more javaScript
|           └───delay
|           └───random cards
|           └───only 3 cards
└───Romain
|    │
|    └───Layout
│             └───intro
|             └───card selection
|             └───card info
|
└───Kevin
     └───Animation
     └───Responsive

```


#### External Tools

Animista: (animista) [https://animista.net/]
