In this tutorial screencast we'll look at **creating realtime web applications**.

Creating realtime web applications has been **possible** for a while now, **however** up until recently it's been kind of a **pain** and required a **big engineering effort**.

I think this is largely **because** the **tools haven’t provided** exactly what we **needed** to do realtime in a **simple** and **painless** **way**.

Luckily this has **all changed**, now it's pretty **easy** to build realtime applications and it's my goal to **prove** that **to you** in this episode.

The best way to prove this is by **showing you**, so we'll **build** a simple single page **application** the uses **realtime** features from **top** to **bottom**.

The **app** we'll build **is** a **realtime question &amp; feedback** application that could be used at a **meetup**. For example when people at the meetup have a question, they could post their question and it would be immediately streamed to everyone using the app.

At it’s core it’s just a **simple crud application**, **except** all **interactions** happen in **realtime**.

Here is the technology stack we'll use:

*   [RethinkDB](http://rethinkdb.com/ "RethinkDB") as our database
*   [Node.js](http://nodejs.org/ "Node.js") or [IO.js](https://iojs.org/en/index.html "Io.js") server platform
*   [Koajs](http://koajs.com/ "Koajs") a cool Node.js web framework
*   [Socket.io](http://socket.io/) a library for bi-directional communication between the server and the client
*   [AngularJs](https://angularjs.org/ "Angularjs") as our client side javascript framework

#### Let's briefly look at each piece of the stack we'll use in this tutorial:

**RethinkDB** which is a relatively new, **open source,** **NoSQL** **database** that stores JSON documents. It’s **fast**, **scalable**, **easy** to **administer** and a **Joy** to program with.
Recently the folks at RethinkDB added some **killer** **features** for doing **realtime**. A feature called [changefeeds](http://rethinkdb.com/docs/changefeeds/javascript/ "ChangeFeeds"), that in my opinion **fills** a big **gap** and makes **implementing** **realtime** features **a breeze**.

We'll use **node.js** as our server platform which is a **great choice** for **realtime** applications.

I chose to use **Koajs** as the web framework, as it is my favorite, but you could also use [express.js](http://expressjs.com/ "Expressjs"), [hapi](http://hapijs.com/ "hapijs") or pretty much any other nodejs web framework.

To **communicate** between the **server** and the **browser** in realtime we'll be using **socket.io**. For those of you who aren't familiar, socket.io is a **library** that creates a **continuous** **connection** between the **server** and the **client**, that allows event based messages to be passed back and forth.

On the **client-side** we'll be using **Angularjs**, a framework with some **cool features** that can be **helpful** in writing well **structured** client-side **JavaScript**.

Don't worry if your not fluent in Angular.js, I'll **provide** just **enough** of an **overview** for you to **understand** what is happening.

Lastly we'll be using a **fun experimental library** I'm building called [BindTable](https://github.com/knowthen/BindTable "BindTable"). BindTable basically allows you to **bind** a client **side object** to a **rethinkDB query**. When changes happen on the server, the changes are automatically synchronized with the clientside object.

Please join my mailing list so I can let you know when new screencasts are released

http://knowthen.com/join/