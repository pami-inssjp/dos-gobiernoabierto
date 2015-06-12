if [ "$(id -u)" != "0" ];
	then echo "This script must be run as root with -E parameter for proxy settings" 1>&2
	exit 1
fi

docker exec -t ga_dos_1 git config --system http.proxy $http_proxy
docker exec -t ga_dos_1 git config --system https.proxy $http_proxy
docker exec -t ga_dos_1 git clone https://github.com/pami-inssjp/dos-gobiernoabierto.git
docker exec -t ga_dos_1 cp -frv dos-gobiernoabierto/gobiernoabierto-theme/app/public .
