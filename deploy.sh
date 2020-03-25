#!/user/bin/env bash


git pull origin master

composer install --no-dev

php artisan optimize

php artisan route:cache

php artisan config:cache

npm run prod
