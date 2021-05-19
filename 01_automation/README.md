# Selenium + WebdriverIO
## 1. lekce 

Základní nastavení WebdriverIO s podporu autocomplete do VSCode. Obsahuje jeden "test" v `test/spects/01_uvod.e2e.js`

### Požadavky
* nainstalovaný git
* nainstalované [nodejs](https://nodejs.org/en/) 
  * Můžete zkontrolovat v terminálu (= příkazový řádek) příkazem `node -v`
* webový prohlížeč [Chrome](https://www.google.com/intl/cs_CZ/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)

### Instalace 
1. Vytvoř si složku, kde chceš mít všechny materiály - doporučuji něco ve stylu `Dokumenty/czechitas/automatizace`
2. V terminálu jdi do vytvořené složky - pomocí příkazu `cd <dana slozka>`
2. Stáhni si repozitář do svého počítače pomocí `git clone https://github.com/czechitas-da2020/01_automation`
3. V daném adresáři pusť `npm install` 
    * Tenhle příkaz Ti nainstaluje všechny potřebné balíčky, které pak budeme používat. 
3. Otevři si VSCode a otevři v něm danou složku - `Dokumenty/czechitas/automatizace/01_automation`

### Struktura repozitáře
Po instalaci bys měla vidět v levém panelu několik souborů a složek. Pojďme si je vysvětlit, které jsou pro nás důležité:
1. složka `node_modules` - zde jsou uložené všechny balíčky (programy/scripty), které jsi nainstalovala pomocí `npm install`. To je vše, co o ní potřebujeme momentálně vědět, dále s ní nebudeme pracovat.
2. `package.json` - konfigurační soubor našeho projektu. Zde jsou uloženy všechny data, díky kterým nodejs ví, co má spouštět, jaké balíčky má stáhnout, licenci, autora atd.
3. `wdio.conf.js` - další konfigurační soubor, nyní pro webdriverIO. Zde je uloženo nastavení, aby webdriverIO věděl, jaký prohlížeč má spustit, jaký web je jako výchozí, jaké jsou výchozí timeouty. Pokud budeme něco nastavovat a měnit, pak to bude v tomto souboru. 
4. Složka `test` - zde budou uloženy všechny soubory s testy. Momentálně v něm je jeden soubor `01_uvod.e2e.js`. WebdriverIO spustí všechny testy, které jsou v této složce. Pokud přidáš nový soubor s testy, pak se i on automaticky spustí. Nezapomeň, že každý soubor musí mít příponu `js`.
5. Soubor `test/01_uvod.e2e.js` má v sobě jeden test. Ten nic sice nic neověřuje, ale jako úvod nám stačí. V něm najdeš strukturu testu a první dva příkazy. Otevři si daný soubor, abys zjistili víc.

### Spuštění
V `package.json` můžeš v sekci `scripts` vidět toto:
```
  "scripts": {
    "test": "wdio wdio.conf.js"
  },

```

Tímto příkazem říkáme, že se má spustit balíček `wdio` a balíček má použít konfigurační soubor `wdio.conf.js`. Pokud tedy v terminálu spustíme `npm test`, pak se by se měl Ti měl otevřít prohlížeč a vykonat příkazy, které jsou v `01_uvod.e2e.js`. V terminálu uvidíš výpis toho, co se děje, co webdriverio pouští. Na konci bys měla vidět report testu.

#### Příklad výpisu
```
[0-0] 2020-09-17T20:44:07.838Z INFO webdriver: COMMAND navigateTo("https://www.czechitas.cz/cs/")
[0-0] 2020-09-17T20:44:07.839Z INFO webdriver: [POST] http://localhost:9515/session/608f4d1d3186f8496e70513292db0bee/url
[0-0] 2020-09-17T20:44:07.840Z INFO webdriver: DATA { url: 'https://www.czechitas.cz/cs/' }
[0-0] 2020-09-17T20:44:14.615Z INFO webdriver: COMMAND deleteSession()
[0-0] 2020-09-17T20:44:14.617Z INFO webdriver: [DELETE] http://localhost:9515/session/608f4d1d3186f8496e70513292db0bee
[0-0] PASSED in chrome - /test/01_uvod.e2e.js
2020-09-17T20:44:14.789Z INFO @wdio/cli:launcher: Run onComplete hook
```

#### Příklad reportu testu
```
 "spec" Reporter:
------------------------------------------------------------------
[chrome 85.0.4183.83 linux #0-0] Spec: /home/vojtech-cerveny/Documents/dev/personal/czechitas/01_selenium/test/01_uvod.e2e.js
[chrome 85.0.4183.83 linux #0-0] Running: chrome (v85.0.4183.83) on linux
[chrome 85.0.4183.83 linux #0-0] Session ID: 608f4d1d3186f8496e70513292db0bee
[chrome 85.0.4183.83 linux #0-0]
[chrome 85.0.4183.83 linux #0-0] Web Czechitas
[chrome 85.0.4183.83 linux #0-0]    ✓ se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře
[chrome 85.0.4183.83 linux #0-0]
[chrome 85.0.4183.83 linux #0-0] 1 passing (6.9s)

Spec Files:      1 passed, 1 total (100% completed) in 00:00:08 
```

Pokud toto vidíš, tak skvěle! Jsi připravena testy přidávat, testy upravovat a profitovat z toho :) 
Pokud toto nevidíš (nebo máš jakékoliv dotazy), tak se neboj napsat na Slack do kanálu **#05_automatizovane_testovani**. 


### Pojmy 

#### timeouty

Timeout - Je čas většinou nasatevený v sekundách, po který program bude čekat na nějakou operaci.

* Příklad: Timeout pro načtení webovké stránky je 10s
* Pokud se do 10s webová stránka načte, nic se nestane
* Pokud se do 10s webová stránka nenačte, program zahlasi chybu

### Odkazy a zdroje
* [webdriverIO dokumentace](https://webdriver.io/docs/gettingstarted.html)  