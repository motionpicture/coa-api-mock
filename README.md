# COA Ticket System mock API

[![CircleCI](https://circleci.com/gh/motionpicture/coa-api-mock.svg?style=svg)](https://circleci.com/gh/motionpicture/coa-api-mock)

## Table of contents

* [Background](#background)
* [Requirement](#requirement)
* [Usage](#usage)
* [Jsdoc](#jsdoc)
* [License](#license)

## Background

## Requirement

## Usage

### インフラ
#### web server
node.js application  
- iis on [Azure WebApps](https://azure.microsoft.com/ja-jp/services/app-service/web/)
- nginx on [GCP AppEngine](https://cloud.google.com/appengine/?hl=ja)
- nginx on [AWS elastic beanstalk](https://aws.amazon.com/jp/elasticbeanstalk/)

#### DB
- Redis Cache

### Environment variables

| Name       | Required | Value          | Purpose |
| ---------- | -------- | -------------- | ------- |
| `DEBUG`    | false    | coa-api-mock:* | Debug   |
| `NODE_ENV` | true     |                | 環境名  |

## Jsdoc

`npm run doc`でjsdocを作成できます。./docに出力されます。

## License

ISC
