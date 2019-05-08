FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=taskManager-backend/target/taskManager-backend-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} taskmanager.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/taskmanager.jar"]


