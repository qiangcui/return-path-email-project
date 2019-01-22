FROM ubuntu:16.04

MAINTAINER Paul Cui "paulcui0618@gmail.com"

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev && \
    apt-get install -y iputils-ping curl

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

EXPOSE 1234

ENTRYPOINT ["python"]

CMD ["app/main.py"]