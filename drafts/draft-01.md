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


# История

## Первая волна (2010 год)

Первые фреймворки уровня приложений для фронтенда появились в 2008 году.

- JavaScriptMVC: May 2008 -> Broken into CanJS April 2012
- Knockout: July 5, 2010
- Backbone: October 13, 2010


JavaScriptMVC:

  - DOM manipulations, events - JQuery
  - String templates
  - Simple Models

Backbone:

  - DOM manipulations, events - JQuery, Zepto
  - String templates
  - Domain events
  - OO-style Models, Collections (Getters-Setters)
  - Views that are actually controllers
  - Routing


Knockout

  - Two-way data-bindings (via setters)
  - DOM-templates
  - View-Models (Getters-Setters)
  - Non-monolythic


Knockout, судя по фичам был самым продвинутым для своего времени. Но
Backbone вырвался вперёд. Можно только гадать, почему так произошло.
Возможно, из-за логики в шаблонах, возможно из-за непривычной концепции
ViewModel (но так ли она непривычна?).

## Вторая волна (2012 год)

* Ember
* Meteor
* Angular
* Marionette

В декабре 2011 начинают говорить об Ember.

Ember

  - Two-way data-bindings (run loop)
  - String? templates
  - Routing
  - Opinionated


В Апреле 2012 о Meteor

Meteor

  - Two-way data-binding
  - DOM-Reactive-templating
  - Spacebars templates (on top of HandleBars, later replaced with Blaze)
  - Isomorphic

В Июне 2012 (после 1.0) начинает светится Angular. Хотя выпущен в свет он
ещё в 2009. Он в чём-то внешне похож на Knockout. К примеру, логикой в
шаблонах, DOM-шаблонизацией, Двусторонними биндингами. Но представляет
несколько уникальных штук, вроде DI.

Angular release: 2009, activity starts in spring 2011, v1.0 2012-06-13

Angular

  - Two-way data-bindings (dirty-checking)
  - DOM-templates
  - Data as POJOs
  - Dependency Injection
  - Testability
  - Directives


В конце 2012 из фреймворков первой волны самым популярный - Backbone, из
второй Angular и Ember.


## Третья волна (2013 - сейчас)

Посмотреть версии

1 февраля 2013 Twitter выкладывает Flight
http://www.infoq.com/news/2013/02/Twitter-Flight

Сколько вопросов на StackOverflow? 3 :)

Flight

  - Event-Driven
  - Component
  - Non-Monolythic
  - Data flow - down via properties, up via events


May 29, 2013 React 0.3.0 - первый публичный релиз. Но первая активность на
SO в июне 2013

React

  - Virtual DOM
  - Component
  - Non-Monolythic


Где-то в Мае 2013 выходит Polymer

Polymer

  - Web Components (спека с ~Nov 2011)
  - Domain Events
  - Non-Monolythic
  - Component
  - Data flow - down via properties, up via events


BEM-core v1.0.0 Oct 16, 2013

## Определяющие фичи фреймворков

Что определяет фреймворк? Две основных характеристики.

* Внешняя состовляющая. API. Удобство, скорость разработки.

  - Как быстро мы можем изучить фреймворк и начать разработку
  - Инструменты разработчика (сборка, отладка)
  - Насколько сложно добавлять фичи, поддерживать код
  - Насколько сложно разобраться в коде сторонним людям

* Внутренности. Реализация. Производительность, расширяемость.

  - Производительность
  - Расширяемость (сторонние модули/библиотеки на основе фреймворка)

Часто приходится жертвовать одним ради другого.

### Дизайн

Первые фреймворки уровня приложения -- фокус на архитектуре. Первые
использовали какую-то разновидность MVC паттерна.

Большая проблема таких фреймворков -- модульность. Нет очевидного
подхода, чтобы разбить приложение на переиспользуемые части.

Фреймворки и библиотеки, которые начали развиваться в 2013 как раз
адресуют эту проблему. Для Backbone появился Ampersand.js.

Сейчас он сдвинулся больше в сторону конкретных проблемных частей. То есть
работу с DOM. И модульности/переиспользования.

Фреймворки смотрят в эту сторону. И *стандарты* смотрят туда же.

MV&lowast;:

  * Knockout
  * Backbone
  * Ember
  * Meteor
  * Angular

Components:

  * Flight
  * React
  * Om
  * Polymer
  * BEM

Flux

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

### Шаблонизация

Строки:

  * Backbone
  * Marionette
  * Ember -> [HTMLBars][htmlbars] - переходит на DOM

DOM:

  * Knockout
  * Angular
  * Polymer
  * React (реактивные, виртуальный DOM)
  * Meteor (реактивные, типа виртуальный DOM)

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


## Уникальные фичи

#### 1 волна

Backbone

  - Минимализм
  - Для сложных проектов нужно либо изобретать структуру самому, либо
    использовать что-то вроде Marionette, Chaplin и т д.

Knockout

  - Ранние биндинги

#### 2 волна

Ember

   - Convention over Configuration
   - Run Loop -- позволяет переносить изменения из данных в DOM пачками

Angular

  - Directives
  - Dirty Checking (no getters and setters)
  - DI

Meteor

  - DB bindings, cursors

#### 3 волна

React

  - Virtual DOM
  - State

Polymer

  - Web Components, incapsulation


## Куда всё идёт

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
