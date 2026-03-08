---
layout: post
title: "What I Learned While Making My Own Notes App"
---

## Introduction

Hello! Welcome to the start of my blog.

I made my own notes app, [QANotz](http://github.com/alexsvianzon/qanotz){: .visible-link}, and I discovered many things about Python, tkinter, Pyinstaller, and more. There was a lot that went into this project, and a lot that came out of it as well. I wanted to share some of the things I learned about all of it while making QANotz.

## Type Safety

A big thing I have been trying to achieve with some of my more recent projects is better type safety. We all know that Python is pretty lenient with this sort of thing, but it still is good practice and it increases readability. It also helps the code completion.

One of the ways I made sure of my type safety, is I set my Pylance mode to strict. I was able to get through most of the project fine, but I did run into one big problem: tkinter has some unknown returns. `ttk.Listbox.curselection()` returns unknown! Fortunately, the documentation reveals it returns a list, but I am not going to edit my copy of tkinter for some type safety. Sometimes you have to pick your battles.

## GitHub Actions and Pyinstaller

I had a lot of difficulty trying to get my release workflow up and running. I use Pyinstaller to build the project, and it was going great on my machine. When I decided to make this an automatic thing on push in GitHub, I was aware I might hit some snags. Little did I know, I would go down a rabbit hole of imports.

At first, I was building with a manual command `pyinstaller --noconsole -n QANotz main.py --paths . --icon=$ICON_ARG --clean --collect-all qanotz --hidden-import=qanotz.data.data`. This really did not go well, and if any of you are well versed in Pyinstaller, you may be a little confused or might be yelling at the screen. There were a lot of little things I was doing, and it was just not good. Eventually, I figured out how to use the `.spec` file. This changed how I was building, and it was finally working. At the time of writing this, I am migrating to a new structure where the core functionality is it's own repo and import as a submodule. Time to reconfigure it all again!

## Writing My Own Components

I knew that, for the scope of this project, a lot of exisiting libraries or resources were just not what I needed. First, the language for writing notes. I had a lot of pre-existing languages to consider. JSON was good contender, but it had a lot of features that would probably never be used, meaning a parser library could create extra bloat. XML is smaller, but it has a tag system that I just didn't want to use. Eventually, I landed on just creating my own language. The idea was to have small tags built into whatever was going on. Also, I wanted each note to be its own `.qan` file. So, I made my own file database that was based off of a lookup table (Which I also decided to use QANLang for because it made parsing easier).

## Design Choices

I also had to make a lot of design choices for this project. For example, the UI. There were a couple of good ways I could've gone about making the different UI views. Ultimately, I went with a class based approach where each frame class could be initialized into the window root as a `ttk.Frame()`. I also created a master UIController class to help manage the DatabaseManagerInstance.

## Conclusion

There was a lot that went into this project, and I hope you got something out of this article. I'll be posting more like it soon!