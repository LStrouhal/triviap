FROM openjdk:15

ENV ENVIRONMENT=prod

MAINTAINER Laura Strouhal <laura_strouhal@hotmail.com>

ADD backend/target/triviap-app.jar triviap-app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dsecurity.jwt.secret=$JWT_SECRET -jar /triviap-app.jar"]