FROM php:8.1-fpm-alpine

# vim文字化け対策LANG環境変数を設定
ENV LANG C.UTF-8
ENV LANGUAGE en_US

COPY conf/php.ini /usr/local/etc/php/php.ini
COPY conf/docker.conf /usr/local/etc/php-fpm.d/docker.conf

#mysqlコンテナ接続用PDO
RUN docker-php-ext-install pdo_mysql

RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

RUN apk update \
&& apk add \
git \
zip \
unzip \
vim \
libzip-dev \
libpng-dev \
libpq-dev

#imagemagick&imagick
ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/
RUN chmod uga+x /usr/local/bin/install-php-extensions && sync && \
    install-php-extensions imagick

WORKDIR /usr/share/nginx/html
# WORKDIR /app