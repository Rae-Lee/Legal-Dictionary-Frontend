<p align=center>
<img src="https://raw.githubusercontent.com/Rae-Lee/Legal-Dictionary-Frontend/main/src/assets/logo.png">
</p>
<p align=center>
<a target="_blank" href="https://app.travis-ci.com/github/Rae-Lee/Legal-Dictionary" title="Build Status"><img src="https://img.shields.io/travis/com/Rae-Lee/Legal-Dictionary"></a>
<a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_6.0-green.svg"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</p>



> Your helpful assistant in writing a complaint letter.

Providing with keyword search, find relevant legal provisions and the most cited judgments and take notes.
Best website for those who want to write a simple complaint letter but don't know where to start.

Website: https://rae-lee.github.io/Legal-Dictionary-Frontend

Default account:

| Name  |  Password |                                                                                                                                               
| ----- |---------- | 
| user1 | 12345678  |
| user2 | 12345678  |


Backend-end Repo: [Legal-Dictionary](https://github.com/Rae-Lee/Legal-Dictionary)

Law data came from [全國法規資料庫](https://law.moj.gov.tw/) APIs.

Judgements data was obtained from scraping 司法院裁判書系統 website by [legal-dictinary-crawler](https://github.com/Rae-Lee/legal_dictionary_crawler).


## :book: Feature

![](https://raw.githubusercontent.com/Rae-Lee/Legal-Dictionary-Frontend/main/src/assets/feature1.png)  |  ![](https://raw.githubusercontent.com/Rae-Lee/Legal-Dictionary-Frontend/main/src/assets/feature2.png)


## :flower_playing_cards: Usage

`Legal-Dictionary` provides two sides:

1. User login page: https://rae-lee.github.io/Legal-Dictionary-Frontend/#/login
2. Administrator login page: https://rae-lee.github.io/Legal-Dictionary-Frontend/#/admin/login

### User side

#### Homepage

First, input your name and password to log in.

![](/src/assets/login.gif)

Search for legal terminology keywords or  the criminal charges.(Currently, only criminal case information is available, while civil and administrative cases are still under development)

![](/src/assets/search.gif)


#### Navigate

You will get relevant legal provisions and the most cited judgments.

![](/src/assets/legal.gif)

Click the judgement name to read the complete content of the judgment.

![](/src/assets/verdit.gif)


#### Add notes

Add messages to record your thoughts. 

![](/src/assets/message.gif)
 
And you can see all the messages in your note.

![](/src/assets/note.gif)


### Administrator side

Default administrator account:

| Name  |  Password |                                                                                                                                               
| ----- |---------- | 
| root  | 12345678  |


Administrators can suspend a user'sprivileges. 

Suspended users will be unable to log in until administrators restore the user's privileges.

![](/src/assets/admin-page.PNG)


## Development


* It's simple to run `Legal-Dictionary` on your local computer.  
* The following is step-by-step instruction.

```
$ git clone https://github.com/Rae-Lee/Legal-Dictionary-Frontend.git
$ cd Legal-Dictionary-Frontend
$ npm install
$ npm run serve
```

## License

MIT © [rae-lee](https://github.com/rae-lee)
