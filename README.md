# GUIDELINES

## Prerequisites

1) Local Angular / JAVA environment
2) IDE (vscode)
3) Alternatively use an online IDE to review code snippets

## To verify angular and java installs, check versions from the command line:

### For example: ng --version

 Angular CLI: 10.0.0
 Node: 12.18.1
 OS: win32 x64

### For example: java - version

 openjdk 14.0.1 2020-04-14
 OpenJDK Runtime Environment (build 14.0.1+7)
 OpenJDK 64-Bit Server VM (build 14.0.1+7, mixed mode, sharing)

## Getting started

Generate a skeleton angular application from command line

### From command line, create workspace folder

mkdir c:\labs\
cd c:\labs\ 
ng new ngLab
choose CSS

Now the angular skeleton application dependencies will download and initialize, once completed
cd ngLab
code .
From vscode terminal, generate component skeleton
ng generate component collectiontotable

create a second default home page for testing the new feature
ng generate component home

Now see the code review section for changes

## Code review

Code changes to the default skeletons were made in the following folders/files
/src/app/collectiontotable contents
/src/assets/collection1.json
/src/app/app-routing.module.ts  index.html appcomponent.ts
