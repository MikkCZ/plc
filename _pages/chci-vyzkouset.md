---
title: Chci si Linux vyzkoušet
description: Proč zvolit jako svůj operační systém Linux a jak ho mohu na svém počítači vyzkoušet.
permalink: /chci-vyzkouset/
redirect_from:
  - chci-vyzkouset.html
layout: wide
---
<article markdown="1">

# Chci si Linux vyzkoušet na svém počítači
**Linux** je svobodný a volně šiřitelný software. To jej předurčuje k mnoha způsobům použití. Jedním z nich jsou tzv. live CD (live je česky "živý").

**Live CD** je disk, který obsahuje kompletní operační systém Linux, který se spouští právě z tohoto disku. Takový systém nevyžaduje, aby byl v počítači pevný disk. **Nic totiž na pevný disk neukládá a nemění jeho obsah.**

Technicky je možné, abyste svá data vytvořená v live CD uložili na pevný disk, ale musíte to udělat vy sami, live systém sám nic takového neprovádí. Live CD vám dovolují vyzkoušet, zda Linux na vašem počítači funguje, zda vám vyhovuje a nabízí to, co potřebujete. Je nutné upozornit, že live distribuce, díky tomu, že se nacházejí a spouštějí z nezapisovatelného média omezené kapacity, neposkytují veškerý komfort a aplikace, které najdete v [kompletních distribucích]({{ site.baseurl }}{% link _pages/kde-ziskat.md %}).

<small>Pozn.: Na stránkách jednotlivých projektů mohou být k dispozici novější verze, než jsou zde uváděné.</small>

## ![]({{ 'img/ubuntu_ico.png' | relative_url }}) Ubuntu Live CD
Ubuntu, kromě toho, že je to [plnohodnotná distribuce]({{ site.baseurl }}{% link _pages/kde-ziskat.md %}), vytváří i live CD, které každému umožňuje vyzkoušet si systém zcela nezávazně na svém počítači. Live CD je zároveň i instalační CD systému.

- [Ubuntu CZ](http://www.ubuntu.cz/)
- [Stáhnout Ubuntu desktop 15.04](http://releases.ubuntu.com/vivid/ubuntu-15.04-desktop-i386.iso) (1.1GB)
{:.download}

## ![]({{ 'img/fedora_ico.png' | relative_url }}) Fedora Live CD
Fedora Live CD vzniklo v rámci [Fedora projektu](http://fedoraproject.org/wiki/FedoraLiveCD) a je aplikačním Live CD vzniklým z distribuce Fedora. Z CD je možné Fedoru jednoduše nainstalovat. Zároveň slouží jako demonstrační CD možností Fedory.

- [Fedora Live CD](http://fedoraproject.org/wiki/FedoraLiveCD)
- [Stáhnout Fedora Workstation 22 Live CD](http://ftp.linux.cz/pub/linux/fedora/linux/releases/22/Workstation/i386/iso/Fedora-Live-Workstation-i686-22-3.iso) (cca 900MB)
{:.download}

## ![]({{ 'img/suse_ico.png' | relative_url }}) OpenSuSE
I OpenSuSE nabízí zdarma ke stažení Live CD.

- [SuSE portal](http://suseportal.cz/)
- [Stáhnout OpenSuSE LiveCD 13.2](http://mirror.karneval.cz/pub/opensuse/openSUSE-current/iso/openSUSE-13.2-KDE-Live-i686.iso) (900MB)
{:.download}

## ![]({{ 'img/debian_ico.png' | relative_url }}) Debian
Debian nabízí zdarma ke stažení Live DVD.

- [Live Debian](http://live.debian.net/)
- [Debian 7.6](http://live.debian.net/cdimage/release/stable/i386/iso-hybrid/debian-live-7.6.0-i386-gnome-desktop.iso) (1.3GB)
{:.download}

## ![]({{ 'img/slax_ico.png' | relative_url }}) Slax Live CD - česky
Slax sice není oficiálním live CD distribuce Slackware, jak by se mohlo na první pohled zdát, je na ní ale zcela založeno. Distribuci vytváří Čech Tomáš Matějíček a je tedy dostupná i v češtině. Nejen z tohoto důvodu ji lze vřele doporučit. Slax obsahuje skupinu dobře spolupracujících aplikací a kompaktní desktopové prostředí [KDE](http://www.kde.org/international/czechia/) se základními aplikacemi pro dnešní domácí počítače. To vše poskytuje v pouhých 200 MB, které se vejdou i na CD malých průměrů. Slax je možné nainstalovat a používat jako normální operační systém.

- [Slax](http://www.slax.cz/)
- [Stránky stáhnutí](http://www.slax.org/get_slax.php?lang=cs)
{:.download}

## ![]({{ 'img/mageia_ico.png' | relative_url }}) Mageia Live CD
Mageia (dříve Mandriva, Mandrake) Live CD je velmi dobře uzpůsobeno pro začínající uživatele. LiveCD je pro obe architektury x86 i x86_64.

- [Mageia](http://mageia.cz/)
- [Mageia 5](http://mageia.supp.name/iso/5/Mageia-5-LiveDVD-GNOME-i586-DVD/Mageia-5-LiveDVD-GNOME-i586-DVD.iso) (1.5GB)
{:.download}

## ![]({{ 'img/gentoo_ico.png' | relative_url }}) gentoo
Live DVD gentoo není přímo určeno pro běžné použití, ale spíše jako instalační DVD. Přesto obsahuje desktopové prostředí, ve kterém můžete pracovat nebo z něj spustit instalaci gentoo.

- [gentoo linux](http://www.gentoo.org/)
- [Stáhnout gentoo Live DVD 2014.8](http://gentoo.osuosl.org//releases/x86/20140826/livedvd-x86-amd64-32ul-20140826.iso)
{:.download}

Live už není pro mne, [chci kompletní linuxový systém]({{ site.baseurl }}{% link _pages/kde-ziskat.md %}).

</article>

<aside>

<section class="centr" markdown="1">
![]({{ 'img/ubuntu_ico.png' | relative_url }})
![]({{ 'img/slax_ico.png' | relative_url }})
![]({{ 'img/fedora_ico.png' | relative_url }})
<!--![]({{ 'img/mageia_one_ico.png' | relative_url }})-->
![]({{ 'img/danix_ico.png' | relative_url }})
![]({{ 'img/suse_ico.png' | relative_url }})

**Live CD**
</section>

{% capture submenu %}{% include submenu.md %}{% endcapture %}
{{ submenu | markdownify }}

<section markdown="1">
# Jak stáhnout Linux?

## Jak postupovat při stahování Linuxu
U každé distribuce na této stránce je odkaz na stránku popisující, jak a kde můžete příslušnou distribuci stáhnout. Některé stránky jsou však v angličtině a mohou obsahovat termíny, které nemusí být zcela zřejmé.

Při stahování distribuce je nejlepší sáhnout po verzi pokud možno nejnovější. Z nabízených adresářů je tedy záhodno vybrat **verzi označenou nejvyšším číslem**. Další komplikace mohou nastat u **volby vhodné architektury** - to znamená specifikace typu vašeho počítače. (Linux je dostupný pro mnoho různých architektur - např. Intel, AMD, PowerPC (Mac) a další.) Pokud vlastníte počítač postavený na procesoru firmy **Intel nebo AMD**, neuděláte chybu, pokud **zvolíte architekturu i386, i486, i586 (od Pentia I výš) či i686**, souhrnně se tato architektura někdy označuje **x86**. Pokud máte novější **64bitový procesor AMD**, bylo by škoda nezvolit příslušnou 64bitovou architekturu - tedy **AMD64 nebo x86_64**.

Z nabízených adresářů a souborů je pak potřeba **stáhnout soubory s příponou .iso**, což jsou CD případně DVD obrazy.
</section>

<section markdown="1">
# Co s .iso soubory?

## Jak přenést .iso soubory na CD
**.iso** soubory jsou obrazy instalačních CD resp. DVD a je potřeba je správným způsobem přenést, vypálit na CD. **Tyto soubory se nevypalují jako běžný soubor**, ale ve vašem vypalovacím programu je potřeba zvolit vypalování obrazu (image) CD. Příslušné volby jsou závislé na vašem vypalovacím softwaru.

Pokud si postupem nejste jisti, můžete CD zakoupit za velmi příznivé ceny v [Linux CD shopu](http://www.linuxsoft.cz/shop/?kategorie=109).
</section>

<section markdown="1">
# Jak spustit Live CD?

## Jak "nabootovat" Linux z Live CD

Pokud máte CD správně vypáleno, budete muset restartovat počítač. Poté bude zřejmě potřeba v BIOSu nastavit, resp. povolit, startování z CD. Do BIOSu se zpravidla dostanete stiskem nějaké speciální klávesy při startu počítače - tato klávesa by se měla při startu vypisovat na obrazovce. Jestliže máte startování z CD povoleno, po restartu počítače by se měl z CD začít zavádět vybraný operační systém Linux.
</section>

</aside>
