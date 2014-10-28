# Слушатели:

Фронтенд разработчики, не новички. Люди, которые в курсе технических
аспектов.

# Цели:

* Рассказать как развивались фронтенд JS-фреймворки уровня приложений

* Назвать основных игроков на данный момент, попытаться их
  классифицировать по фичам, техническим приёмам

* Порассуждать о направлении развития фреймворков вцелом


# Конспект:

> There are three kinds of lies: lies, damned lies, and statistics.

-- Mark Twain


# Вступление

Рассказывать о фреймворках, сравнивать их, непросто.

Одно неверное слово, и за тобой гонится разъярённая толпа с факелами и
вилами.

Поэтому сегодня я постараюсь полагаться только на факты. Только на факты
и кое-какую статистику.

# История

Если оценивать размеры комьюнити фреймворка по количеству вопросов на SO и
звёздочек на GH. Вот что мы получим:

* SO

  - Angular 54,500 (+4,500 каждый месяц и это количество постоянно растёт)
  - Backbone 16,000
  - Knockout, Ember ~11,700
  - Meteor 6,600
  - Marionette 1,600
  - Polymer, React, BEM, Flight < 1,000


Новые SO/месяц

  - Angular 4,500
  - Ember, Meteor 500
  - Backbone, Knockout 300
  - Polymer 150
  - React 100


* GH

  - Angular 29,300
  - Backbone, Meteor ~18,000
  - Ember 11,300
  - React 9,300
  - Polymer, Knockout, Marionette, Flight ~5,500


Angular по всем показателям сейчас самый популярный клиент-сайд фреймворк
уровня приложений. Второй по популярности Backbone. Затем Knockout, Ember,
Meteor и другие.

Почему получилось именно так? Давайте попробуем вернуться назад, ко
времени когда эти фреймворки только появлялись. И попробуем ответить на
эти вопросы.

Если присмотрется, можно выделить 3 волны адаптации фреймфорков.

 - 2011 год (Backbone и Knockout)
 - 2012 год (Ember, Meteor, Angular, Marionette)
 - 2013 год (Flight, BEM, Polymer, React)

## Первая волна (2011 год)

Первые фреймворки уровня приложений для фронтенда появились в 2008 году.

До этого мы пользовались библиотеками вроде JQuery, Dojo и Prototype.
Которые нужны были просто для того, чтобы писать одинаковый код во всех
браузерах.

Также были популярны фреймворки вроде ExtJS, YUI, которые большинство
использовали как библиотеки готовых UI-элементов.

Были намёки на `MVC`, но Backbone первым реализовал эту концепцию удобно
для фронтенд разработчиков, и начал быстро расти.

- Knockout: July 5, 2010
- Backbone: October 13, 2010

Backbone:

  - View на основе JQuery (которые уже все знают)
  - Абстракции Models, Collections (тоже JQuery)
  - String templates (underscore templates)
  - Routing


Knockout:

  - Только View
  - Two-way data-bindings (via setters)
  - DOM-templates
  - Obserbale паттерн


Knockout, судя по фичам был самым продвинутым для своего времени. Но
Backbone вырвался вперёд.

Backbone решал больший спектр задач. Это фреймворк уровня
приложения, тогда как Knockout -- небольшая библиотека для ваших View.

Backbone базировался на том, что все и так уже знали: JQuery, MVC модель.

Knockout представлял новые концепции двусторонних биндингов, DOM-шаблонов,
observables.

## Вторая волна (2012 год)

* Ember (Release 2011, Talks 2012)
* Meteor (Realease 2012, Talks 2012)
* Angular (Release 2009, Talks 2012 closer to 1.0)
* Marionette (Release Dec 2011, Talks 2012)

В 2012 году разработчики обращают внимание на Ember и Backbone.

Они во многом похожи

Angular and Ember:

  - MVC
  - Two-way data-bindings (loop-based)
  - Routing
  - Работа с сервером

Ember (inspired by Rails):

  - String templates
  - Opinionated
  - Obserbables

Angular (inspired by classical OO: Java etc):

  - DOM Templates
  - Directives
  - Dirty checking
  - Dependency Injection

В начале 2012 также начинают говорить о Meteor

Meteor

  - Two-way data-binding
  - DOM-templating
  - Spacebars templates (on top of HandleBars, later replaced with Blaze)
  - Isomorphic
  - Client Side DB access

Angular release: 2009, activity starts in spring 2011, v1.0 2012-06-13

В конце 2012 из фреймворков первой волны самым популярный - Backbone, из
второй Angular и Ember.


## Третья волна (2013)

- Flight (Release 01.02.2013)
- React (Release, Activity June 2013)
- Polymer (Release, Activity June 2013)
- BEM-core (Release, Oct 2013)

Год спустя, когда уже очевидно что Angular бьёт все рекорды роста. На
горизонте появляются сначала Flight, позже React, Polymer, в октябре
выходит BEM-core.

Больше всего шума вокруг Polymer и React.


React, Polymer

  - Components
  - It's all about incapsulation
  - Two-way Data bindings
  - View only


React

  - Virtual DOM
  - Isomorphic

Polymer

  - Web Components (спека с ~Nov 2011)
  - Инкапсуляция Shadow DOM крутая
  - Data flow - down via properties, up via events


И так мы приходим к тому, что есть сейчас.

Angular определённо доминирует. И не только потому что существует уже
давно, а потому что темпы его роста сейчас гораздо больше чем у других
фреймворков.

(График Количество новых вопросов в месяц)


## Классификация фреймворков

Есть несколько способов классифицировать фреймворки. От очевидных, вроде
какая парадигма используется (MVC, Компонентный подход).

И если сравнивать, понимаешь, что всё построено вокруг одних и тех же
идей.

Начнём с простого:

MV&lowast;:

  * Knockout
  * Backbone
  * Ember
  * Meteor (moving towars componet-like UI-Engine)
  * Angular

Components:

  * Flight
  * React
  * Om
  * Polymer
  * BEM


### Модель/Данные

Plain JS Objects:

    * Angular
    * Polymer
    * React

Обёртки:

    * Backbone
    * Knockout
    * Ember


### Биндинги

Биндинги одна из самых сложных проблем на клиенте. Каждый фреймворк решает
её по своему. Ну и все, кроме Backbone и Flight снимают эту задачу с
пользователей.

Односторонние:

  * Backbone

Двусторонние:

  * Knockout (-getters, -setters)
  * Ember    (-getters, -setters, run loop)
  * Meteor   (слушать события, забирать данные вручную)
  * Angular  (двусторонние)
  * React    (двусторонние)
  * Polymer  (двусторонние)

Двусторонние биндинги стали стандартом.


### Контроль изменений

* Реактивный

  - Knockout
  - Ember
  - Meteor
  - React

* Object.observe/dirty-checking

  - Angular
  - Polymer


### Шаблонизация

Строки:

  * Backbone
  * Marionette
  * Ember -> [HTMLBars][htmlbars] - переходит на DOM

DOM:

  * Knockout
  * Angular
  * Polymer
  * React
  * Meteor


### Перенос изменений данных в DOM

* Внутренний цикл

  - Angular ($digest)
  - Ember (run-loop)
  - Polymer (microtasts)

* "Промежуточный HTML"

  - React (Virtual DOM, Diff HTML or Data)
  - Meteor (diff data)

* Knockout


### Изоморфные/Полиморфные

Node.js развивается.
Больше приложений переходит на него.
Теперь, когда JavaScript и на клиенте и на сервере, мы можем
переиспользовать код.

Изоморфные

  * Meteor
  * React
  * Derby

Полиморфные

  * Все остальные


## Куда всё идёт

У создателей фреймворков есть блоги, микроблоги, они ходят в подкасты и
выступают на конференциях.

Разве что на национальном телевидении мы их пока не видим.

Не так сложно узнать, куда движутся фреймворки. Какие у мейнтейнеров планы
по развитию. И тут также есть несколько трендов.


### Общее

* ES6

    - Angular (в том числе DI на модули)
    - Ember (классы)
    - React (классы)

* Tooling

    - Meteor (packaging system)
    - Polymer (build tools)
    - Angular (build tools, es6 modules)

* Mobile

    - Angular (touch animations)
    - Meteor (недавно поддержка PhoneGap)

* Animations

    - Angular
    - React (что-то есть, хотят переделать)
    - Polymer (Web Animations)


### Частное, но очень крутое

* Meteor

    - Componets
    - OptLog Tailing

* Angular

    - Новые модули для работы с сервером и локальных хранилищем

* Ember

    - DOM - шаблонизация

* Polymer

    - Всё, что нужно Polymer-у из WebComponents есть в Chrome 36
    - Ждём поддержку других браузеров

# Концовка

Большинство популярных фреймворков сейчас это MVC фреймворки с
двусторонними биндингами, "монолитные".

Если бы мы строили профиль "Типычный фреймворк 2014", он был бы

- MVC
- Решал множество задач
- С двусторонними биндингами
- DOM шаблонизатором

Сейчас появляются компонетные фреймворки, которые по темпу роста
приближаются к Ember, Meteor, Knockout. Но до Angular ещё всем далеко.

Интересно, как одни и те же идеи, помещённый в разный контескст работают
по-разному. Двусторонние биндинги в Knockout, Ember, Angular например.



---


Backbone

  - Неясно

Knockout

  - Неясно

Ember

  - ES6
  - Handlebars 2.0
  - DOM шаблонизация

Angular

  - ES6
  - Скорость
  - Упрощения (DI, директивы)
  - Инструментарий
  - Работа с данными с сервера/локальным хранилищем
  - Мобильные штуки (touch animations)


Meteor

  - 1.0 на носу
  - OptLog Tailing
  - Новая система пакетов
  - Новый UI-Engine


React

  - Descriptors -- a way to separate virtual DOM from components logic
  - ES6
  - Animations


Polymer

  - Tooling (build tools)
  - Web Animations





[htmlbars]: https://github.com/tildeio/htmlbars
