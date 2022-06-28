
System user roles logins:
ADMIN:
    username: admin@admin.lt
    password: admin@admin.lt

USER:
    username: user@user.lt
    password: user@user.lt


#### Technologies used: 
- React 17.0.2,  Boostrap 5.1.3
- Spring Boot 2.6.3, Java 11
- Spring security
- H2 database
- Apache Tomcat 9.0.58 server
- Swagger-UI, Maven
- Selenium 4.1.1
- TestNG 

## Getting Started

- Clone the repository `git clone https://github.com/MargaUt/Slytherin.git`

### Run on Tomcat Server

- go to project folder `cd .../Egzaminas/back`
- run the application on Tomcat Server (port 8081):
  
```
 mvn clean install org.codehaus.cargo:cargo-maven2-plugin:1.7.7:run -Dcargo.maven.containerId=tomcat9x -Dcargo.servlet.port=8081 -Dcargo.maven.containerUrl=https://repo1.maven.org/maven2/org/apache/tomcat/tomcat/9.0.40/tomcat-9.0.40.zip
 ```
 - the application will start on your browser http://localhost:8081/egzaminas

### Run with Spring boot and npm/yarn

- go to project folder `cd .../Egzaminas/back`
- Run `mvn spring-boot:run` (application will start on port 8080)
- go to project folder `cd .../Egzaminas/front`
- run `npm install` or `yarn install`
- open file `..\Egzaminas\front\src\components\10Services\endpoint.js`
- change `const apiEndpoint= process.env.PUBLIC_URL` to `const apiEndpoint = "http://localhost:8080"`
- run `npm run start` or `yarn start`
- application will open on your browser at http://localhost:3000

### Accessing the database

http://localhost:8081/darzelis/console

```
JDBC URL:jdbc:h2:file:~/home/h2/egzaminas.db
User Name:sa
Password:

```

### Accessing API documentation 

http://localhost:8081/darzelis/swagger-ui/


```

## Deployment

To make a war file for deployment:
- run `mvn clean install` while in the project folder `.../Egzaminas/back`
- `darzelis.war` file will appear in the `..\Egzaminas\back\target` folder
