#!bin/bash

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"[$RED!$YELLOW] Eu vou instalar as dependências essenciais pro bot funcinar você só concorda com os programas que vou instalar tá? [y/n]"
read inp
if [ "$inp" = "y" ]; then
    apt update
    apt upgrade
    apt install ruby
    gem install lolcat
    apt install nodejs 
    apt install libwebp 
    apt install ffmpeg 
    apt install wget 
    apt install tesseract 
    apt install graphicsmagick 
    apt install imagemagick 
    yarn install
    echo $GREEN"Hmmm tudo certo pode dar npm start, escanear o código e divirta-se com o bot :)"
fi
if [ "$inp" = "n" ]; then
    echo $RED"Tá bom então, voc escolheu o caminho mais difícil, o de descobrir as dependências sozinho e manualmente :)"
    exit
fi

