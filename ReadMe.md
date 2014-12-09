# Gulp met SASS

## VagrantBox ##

Omdat er reeds een `package.json` bestand is kun je met onderstaand aan de gang.

```
cd /var/www
mkdir gulp
sudo apt-get install ruby-full
sudo gem install compass
sudo npm install -g gulp
sudo npm install --no-bin-link
```

Mocht je nu nog geen 'packages' in je project (`package.json`) hebben staan kun je de volgende regel gebruiken:

```
sudo npm install gulp gulp-util gulp-concat gulp-uglify gulp-rename gulp-ruby-sass gulp-notify gulp-autoprefixer gulp-sourcemaps del --save-dev --no-bin-link
```

De parameter `--no-bin-link` gebruik je omdat je in een 'VagrantBox' bezig bent en de data 'shared' is.

