## Dependencies
- Java 8 JDK
- Embedded Tomcat 9 server
- MySQL Database
- NPM
- Maven
## Installation
### Backend
 - Import the backend from this repo with option "import existing maven project".
 - Build the maven project to install all the required dependencies.
 - To setup database, install MySQL. Make any database.
 - Then update below three configuration fields in file application.properties inside /resources folder
>

    spring.datasource.url=jdbc:mysql://localhost:3306/tms
    spring.datasource.username=root
    spring.datasource.password=root
- For email services you need to use email via SMTP. For that you need to update **application.properties** below fields. 

>
    spring.mail.host=smtp.gmail.com
	spring.mail.smtp.ssl.trust=smtp.gmail.com
	spring.mail.port=587
	spring.mail.transport.protocol=smtp
	spring.mail.username=your.email@gmail.com
	spring.mail.password=password`

- Run the project from **BackendApplication.java**, all the tables will be initialised in database with its first run.
- Now execute **roles.sql** on your database.

### Frontend
- have node.js installed on your system.
- GOTO the path of **frontend** folder in comand-prompt and run `npm start`
- Now your frontend will be hosted on http://localhost:8001.