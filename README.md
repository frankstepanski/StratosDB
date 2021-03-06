<div align="center">

<img src="./client/assets/images/stratosdb_logo_black.png" width=250px>

<br>

<br>

<a href="https://stratosdb.io">StratosDB.io</a>

<br>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/oslabs-beta/StratosDB)
![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-blue.svg)
[![Github stars](https://img.shields.io/github/stars/oslabs-beta/StratosDB?style=social)](https://github.com/oslabs-beta/StratosDB)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fteamstratosdb)](https://twitter.com/TeamStratosDB)

<br>

<p><b>StratosDB: </b>An all-in-one tool for Cloud SQL</p>

</div>

<br>

## Table of Contents

- <a href="https://github.com/oslabs-beta/StratosDB#beta-stage">Beta Stage</a>
- <a href="https://github.com/oslabs-beta/StratosDB#overview">Overview</a>
- <a href="https://github.com/oslabs-beta/StratosDB#getting-started">Getting Started</a>
- <a href="https://github.com/oslabs-beta/StratosDB#main-features">Main Features</a>
- <a href="https://github.com/oslabs-beta/StratosDB#built-with">Built With</a>
- <a href="https://github.com/oslabs-beta/StratosDB#core-team">Core Team</a>
- <a href="https://github.com/oslabs-beta/StratosDB#license">License</a>

<br>

## Beta Stage

Team StratosDB will strive to continuously release updates and additional features.

1. If you would like to contribute to this project:

   - Please feel free to <a href="https://github.com/oslabs-beta/StratosDB/pulls">submit a PR</a>

2. If you happen to come across any issues while tinkering with the application:
   - Please <a href="https://github.com/oslabs-beta/StratosDB/issues">report the bug/issue</a> by submitting a ticket located in the Issues Tab within this repository

<br>

## Overview

With the current trajectory of technological improvements, businesses and applications are moving towards a “serverless” architecture. With cloud computing becoming more reliable, it just makes more sense for businesses to take the “pay as you go and avoid upfront costs” approach.

Although cloud computing and serverless architecture has all these great qualities, not everything is rainbows and sunshine! Cloud services are still pretty new and user interfaces for these services are not very intuitive. Amazon’s AWS, itself, does not offer a platform that is intuitive for the users. The platform itself can be extremely confusing when using services such as AWS RDS. As such, third party applications are often used to alleviate these problems one at a time.

In response, our team decided that we wanted to tackle this issue by creating a tool that can be used for all AWS RDS database instances. We would like to introduce StratosDB, a one stop shop for users of AWS RDS to create, test, and deploy their RDS database instances! StratosDB offers a platform built on NodeJS that connects to your specific AWS RDS instance with a streamlined GUI that makes using AWS RDS much more simple and efficient.

<br>

<center>
	<img src="./client/assets/images/stratosdb.gif" />
</center>

<br>

## Getting Started

1.  Clone StratosDB to your local machine and point to the StratosDB directory:

        git clone https://github.com/oslabs-beta/StratosDB.git

        cd StratosDB

2.  Install all required dependencies with the following script:

        npm install

3.  Run the following script to open StratosDB on http://localhost:8080:

        npm run beta

4.  Once StratosDB is opened on http://localhost:8080, click on the Cloud Icon (located on the Left Sidebar) and enter your AWS RDS Information and press <strong>Connect</strong>:

    <strong>User:</strong> Database Username
    <br />
    <strong>Host:</strong> AWS RDS Endpoint Link \*
    <br />
    <strong>Database:</strong> Database name \*\*
    <br />
    <strong>Password:</strong> Database Password

<center>
	<img
		src="./client/assets/images/aws-modal.gif"
	/>
</center>

\* Sourced from AWS RDS Database Instance Dashboard

\*\* If Database name was left blank when the AWS RDS Datbase Instance was created, use <strong>postgres</strong>

<br>

## Main Features

### Importing .sql & .txt Files

1.  Click on the Import Icon (located on the Left Sidebar)
2.  Choose the .SQL or .TXT file you would like to import
3.  Select <strong>Import</strong> to populate your file's code base into the application's built-in code editor.

<center>
<img src="./client/assets/images/upload-modal.gif">
</center>

### Schema Code Editor

Use the Schema Code Editor to input any psql command queries (EG. <strong>CREATE TABLE</strong>, <strong>INSERT INTO</strong>) to create/read tables
and/or data entries from your tethered AWS RDS database

<center>
	<img
		src="./client/assets/images/info-modal-code-editor.jpg"
	/>
</center>

### Query Text Editor

Enter your <strong>SELECT</strong> psql commands into the provided
text editor and press <strong>Submit Query</strong> to initiate the
performance analysis on your existing schema design

EG. SELECT \* FROM <em>TABLE_NAME</em>;

<center>
<img
	src="./client/assets/images/info-modal-query-text-area.jpg"
/>
</center>

### Return Table

A scrollable table will render based on the <strong>SELECT</strong> query you have entered in the <strong>Query Text Editor</strong>

<center>
<img
	src="./client/assets/images/info-modal-returned-table.jpg"
/>
</center>

### Visual Line Graph

A visual line graph representation will render the performance time
(milliseconds) for each successfully performed <strong>SELECT</strong> query \*\*

<center>
	<img
		src="./client/assets/images/info-modal-line-graph.jpg"
	/>
</center>

\*\* You can hover over each point in the line graph to view the query
that was ran and its corresponding the performance time (ms)

### Information Modal

A dedicated modal (located on the Left Sidebar) guides first time users through the application's features in detail and provides more information about StratosDB

<center>
	<img
		src="./client/assets/images/info-modal.gif"
	/>
</center>

<br>

## Built With

- React
- TypeScript
- CodeMirror
- React-ChartJS
- Node.JS
  - Express
  - Multer
- AWS RDS
  - PostgreSQL

<br>

## Core Team

<div>
<table>
<tr>
<td>
<a href="https://github.com/joalk"><img src="./client/assets/images/joalk.png" width="120px"/></a>
<br>
<a href="https://github.com/joalk">Joal Kim</a>
</td>
<td >
<a href="https://github.com/sophiapak"><img src="./client/assets/images/sophiapak.png" width="120px"/></a>
<br>
<a href="https://github.com/sophiapak">Sophia Pak</a>
</td>
<td>
<a href="https://github.com/tysong24"><img src="./client/assets/images/tysong24.png" width="120px"/></a>
<br>
<a href="https://github.com/tysong24">Tommy Song</a>
</td>
<td>
<a href="https://github.com/morgan562"><img src="./client/assets/images/morgan562.png" width="120px"/></a>
<br>
<a href="https://github.com/morgan562">Tyler Morgan</a>
</td>
</tr>
</table>
</div>

<br>

## License

This project is licensed under the MIT License
