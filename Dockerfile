FROM openjdk:15

ENV ENVIRONMENT=prod

MAINTAINER Laura Strouhal <laura_strouhal@hotmail.com>

ADD backend/target/triviap.jar triviap.jar

CMD [ "sh", "-c", "java -jar /triviap.jar" ]