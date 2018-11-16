---
title: Odpovědi na časté otázky
description: Proč zvolit jako svůj operační systém Linux a jak na něj přejít. Některé další zajímavé informace + užitečné odkazy.
permalink: /odpovedi/
redirect_from:
  - odpovedi.html
  - odkazy.html
layout: default
---
Na této stránce shromažďujeme odpovědi na otázky, které se často vyskytují mezi zájemci o Linux.

* TOC
{:toc}

### Kde se Linux nejvíce odlišuje?
Základy Linuxu jsou zcela jiné, než na jakých stojí MS Windows. Linux se vyvinul jako systém [unixového](https://cs.wikipedia.org/wiki/Unix) typu a proto je jeho ovládání a chování v některých směrech odlišné. Podstatou je ale možnost jeho přizpůsobení, a to jak vzhledem, tak chováním. Pokud se vám vaše linuxová distribuce nelíbí, požádejte o pomoc s nastavením na jejím fóru podpory nebo se [podívejte po jiné]({{ site.baseurl }}{% link _pages/kde-ziskat.md %}).

### Co je to distribuce?
Linuxová distribuce je soubor programů vybraných tak, aby spolu tvořily funkční celek. Tedy samotné linuxové jádro a k němu přidané grafické prostředí a nejrůznější aplikace nástroje pro správu počítače, přístup k internetu, práci s dokumenty, hudbou a tak dále. Většinou distribuce obsahují stovky až tisíce programů a bývá dobrým zvykem, že si jako uživatel může vybrat z několika různých programů, které mohou zastat stejnou práci.

Existuje i mnoho speciálních, účelových distribucí, určených pro servery, malá a vestavěná zařízení atd.

### Když si stáhnu Linux z internetu, můžu ho legálně používat?
Ano. Linux a jeho součásti mají [svobodné licence](https://www.gnu.org/licenses/), které umožňují legální používání i v případě stažení distribuce z internetu. Stažení z internetu bývá i hlavní formou získání linuxových distribucí.

### Je verze z internetu nějak omezená (časově, funkčně)? Jaký je rozdíl oproti koupené verzi?
Verze z internetu jsou plně funkční bez jakýchkoli omezení. Převážná většina linuxových distribucí a obsaženého softwaru je zdarma.

Placené distribuce Linuxu obsahují nějakou přidanou hodnotu. U Linuxu je zvykem, že si nekupujeme právo k používání software, ale něco navíc. Např. telefonickou podporu, manuály nebo bezpečnostní tým, který se stará o vydávání ověřených bezpečnostních oprav.

### Na kolika počítačích mohu Linux používat?
Většinu distribucí můžete používat na libovolném množství počítačů. Dokonce mohou být spuštěny zároveň. U placených distribucí je potřeba si předem přečíst licenční smlouvu a zeptat se prodejce.

### Mohu Linux používat ve firmě?
Ano, Linux můžete používat ve firmě. Pro firemní server je dobré zakoupit nějakou placenou komerční distribuci se zárukou aktualizací a podporou pro případ problémů, a na počítače zaměstnanců nainstalovat [uživatelsky přívětivou distribuci]({{ site.baseurl }}{% link _pages/kde-ziskat.md %}).

### Jak mám Linux stáhnout a nainstalovat?
U každé z [vybraných distribucí]({{ site.baseurl }}{% link _pages/kde-ziskat.md %}) najdete odkaz na stránku s popisem jejího stažení a instalace. Nejlepší je sáhnout po nejnovější verzi označené nejvyšším číslem. Pokud máte počítač s procesorem Intel nebo AMD, hledejte verzi pro *x86_64* (pokud máte opravdu starý počítač, tak *x86*).

Z nabízených souborů je potřeba stáhnout ten s příponou *.iso*. *.iso* soubory jsou obrazy CD/DVD a stačí je správným způsobem vypálit, nebo pomocí nástrojů k tomu určených zapsat na USB flash disk. Na CD/DVD se *.iso* nevypalují jako běžný soubor, ale jako celý obraz (image). Pokud si postupem nejste jisti, můžete připravené médium zakoupit v e-shopu [LinuxMarket](https://www.linuxmarket.cz/instalacni-media).

Jakmile máte CD/DVD vypáleno nebo USB flash disk zapsaný, vložte ho do počítače a ten restartujte. Při zapínání pak stiskem speciální klávesy vyvolejte BIOS nebo nabídku pro výběr média. Potřebná klávesa by se měla při startu krátce zobrazit na obrazovce. Po vybrání požadovaného média se na něm nahraný Linux spustí k vyzkoušení v "živém" (live) režimu s možností následné instalace.

Pokud se vám Linux zalíbí a rozhodnete se pro instalaci, nezapomeňte si předem **zazálohovat svá data a nainstalované programy**. Pokud ne, počítač vypněte, vyjměte z něj DVD nebo USB disk, a znovu ho zapněte jako to děláte normálně.

### Jak přejdu na Linux?
Při přechodu na Linux není třeba za sebou pálit mosty. Zkuste si Linux nainstalovat na volný disk, nebo prostě pro jistotu zkuste jen ["živou" verzi spustitelnou z CD nebo flash disku]({{ site.baseurl }}{% link _pages/kde-ziskat.md %}). Můžete Linux také vyzkoušet ve virtuálním počítači, například pomocí programu [VirtualBox](https://www.virtualbox.org/).

Vyzkoušejte si, zda vám aplikace v Linuxu vyhovují. Podívejte se i po aplikacích, které vám třeba pro stávající systém chybí nebo jsou jen placené.

### Jak najdu náhradu za své programy?
Pokud postrádáte v Linuxu některé aplikace ze stávajícího systému a ještě jste nenašli [odpovídající náhradu v našem seznamu]({{ site.baseurl }}{% link _pages/ekvivalenty.md %}), zeptejte se na nějakém fóru své distribuce. Pokud ani tam nepochodíte, můžete zkusit použít program [Wine](https://www.winehq.org/). Wine umožňuje **spouštět některé aplikace z MS Windows** i pod Linuxem.

Další možností je použít tzv. **virtuální počítač**. Můžete k tomu použít např. [Qemu](https://www.qemu.org/) nebo [VirtualBox](https://www.virtualbox.org/) a v něm si váš dosavadní systém nainstalovat a provozovat aplikace, pro které nemáte náhradu.

### Dají se na Linuxu hrát hry?
Ale samozřejmě. Hraní her není typickým využitím Linuxu. Výběr her je ale kvalitní. O hraní na Linuxu je třeba celý web [GamingOnLinux](https://www.gamingonlinux.com/). Linuxové hry najdete na [Steamu](https://store.steampowered.com/linux), kde má Linux i živou [hráčskou komunitu](https://steamcommunity.com/linux).

### Kde najdu další informace? Existují nějaké další stránky věnované Linuxu?
Na české scéně působí několik zpravodajských serverů portálů věnujících se Linuxu nebo svobodnému a otevřenému (free and open source) softwaru. Patří mezi ně [Root.cz](https://www.root.cz/), [AbcLinuxu.cz](https://www.abclinuxu.cz/) nebo [LinuxEXPRES](https://www.linuxexpres.cz/). O Linuxu dokonce [vychází i knihy](https://www.linuxmarket.cz/knihy/knihy-o-linuxu).

Další tipy najdete také v článcích:
- [Informace pro začínající uživatele](https://sandbox.cz/~covex/linux/newbie.html)
- [Kouzlo příkazové řádky](https://sandbox.cz/~covex/linux/kouzlo_cmdline.html)
- [Dokumentace k Linuxu - linux.cz](https://www.linux.cz/doc.html)
