---
title: Stáhnout a vyzkoušet
description: Proč zvolit jako svůj operační systém Linux, jaký si vybrat a jak se instaluje.
permalink: /kde-ziskat/
redirect_from:
  - kde-ziskat.html
  - chci-vyzkouset.html
layout: default
scripts:
  - distro-details.js
---
* TOC
{:toc .icons-flex}

### Jaký Linux vybrat
{:.no_toc}
Operační systém Linux můžete získat v tzv. distribucích. **Distribuce** je předem připravený balík kombinující linuxové jádro, grafické prostředí, nástroje pro ovládání i nejrůznější uživatelské aplikace. Níže jsou distribuce vybrané podle toho, jestli se hodí pro začínající uživatele (<i class="fas fa-user-check badge"></i>) použití na osobním počítači a laptopu, zda mají český překlad (<img src="{{ 'img/layout/czech-flag.svg' | relative_url }}" style="border: 1px solid #ddd" class="badge" alt="cs" />) a aktivní českou komunitu.

### Jak si mohu Linux vyzkoušet
{:.no_toc}
Linux si můžete vyzkoušet i bez instalace. Většina distribucí nabízí tzv. *živou (live) variantu*, která bývá i prvním krokem před instalací. Celý systém se spustí z USB flash disku nebo DVD a po vyzkoušení se rozhodnete, jestli ho chcete nainstalovat, nebo chcete dál používat Windows. Pokud se po vyzkoušení rozhodnete pro instalaci, nezapomeňte na zálohu svých dat.

<!-- Jak psát informace o distribucích
Nadpis: SVG logo + název distribuce
Snímek (*): v malé verzi na stránce a ve větším rozlišení po kliknutí
První odstavec: stručně max. na 4 řádky něco o distribuci, vytučněná jedna nebo dvě přednosti pro začátečníky
Druhý odstavec (*): různé verze, např. grafická prostředí nebo delší podpora
Třetí odstavec: kdo je autorem a vývojářem distribuce
Seznam odkazů: web české komunity, české fórum, oficiální stránky, stránka ke stažení (nejlépe v češtině)
(*) - pro prvních pár nejaktivnějších distribucí

Šablona:

{% include distro.html
  id=''
  name=''
  logo=''
  czech=''
  beginner=''
  screenshot_preview='' screenshot_full=''
  text='

  '
  community='Česká komunita ...' community_link=''
  support='Fórum podpory' support_link=''
  website='Oficiální stránky' website_link=''
  download='Stáhnout ...' download_link=''
%}
-->

{% include distro.html
  id='ubuntu'
  name='Ubuntu'
  logo='ubuntu-logo.svg'
  czech='true'
  beginner='true'
  screenshot_preview='ubuntu_t.png' screenshot_full='ubuntu.png'
  text='
**Ubuntu** je postaveno na spolehlivém základě po mnoho let vyvíjené distribuce [Debian](#debian). Cílem Ubuntu je přiblížit Linux uživatelům **pro běžné použití** na osobních počítačích. Ubuntu vychází ve dvou verzích - stabilnější LTS s delším obdobím podpory, a běžné verze s rychlejším přidáváním nových funkcí. Novým uživatelům doporučujeme verzi LTS.

Výchozí grafické prostředí [GNOME](https://www.gnome.org/) doplňují další varianty (flavours/příchutě) např. s prostředím [KDE](https://www.kde.org/), které udržuje komunita. Jejich seznam najdete na [této stránce](https://www.ubuntu.com/download/flavours).

Vývoj Ubuntu zajišťuje komerční společnost **Canonical**. V rámci této aktivity podporuje i řadu dalších projektů a poskytuje nástroje a podporu pro vývoj otevřeného software.
  '
  community='Česká komunita Ubuntu' community_link='https://www.ubuntu.cz/'
  support='Fórum podpory' support_link='https://forum.ubuntu.cz/'
  website='Oficiální stránky' website_link='https://www.ubuntu.com/'
  download='Stáhnout Ubuntu' download_link='https://www.ubuntu.cz/ziskat-ubuntu/'
%}

{% include distro.html
  id='fedora'
  name='Fedora'
  logo='fedora-logo.svg'
  czech='true'
  beginner='true'
  screenshot_preview='fedora_t.png' screenshot_full='fedora.png'
  text='
  **Fedora** je progresivní distribuce, která vznikla jako nekomerční odnož Red Hat Linuxu. Fedora je známa svou pokrokovostí a zpravidla přináší v každé verzi několik zásadních novinek. Je znatelně zaměřená na **používání běžnými uživateli** na osobních počítačích a laptopech.

  Standardní Fedora používá grafické prostředí [GNOME](https://www.gnome.org/). Existují také varianty (spiny) s jinými prostředími včetně [KDE](https://www.kde.org/) nebo [Cinnamonu](https://cs.wikipedia.org/wiki/Cinnamon). Jejich seznam najdete na [této stránce](https://spins.fedoraproject.org/).

  Vývoj Fedory podporuje firma **Red Hat**, která se zabývá i vývojem, prodejem a podporou komerční distribuce Red Hat Enterprise Linux určené pro podniky, která na základě Fedory staví.
  '
  community='Česká komunita Fedory' community_link='https://mojefedora.cz/'
  support='Fórum podpory' support_link='https://forum.mojefedora.cz/'
  website='Oficiální stránky' website_link='https://getfedora.org/'
  download='Stáhnout Fedoru' download_link='https://mojefedora.cz/jak-stahnout/'
%}

{% include distro.html
  id='suse'
  name='openSUSE'
  logo='opensuse-logo.svg'
  czech='true'
  beginner='true'
  screenshot_preview='opensuse_t.png' screenshot_full='opensuse.png'
  text='
Distribuce **openSUSE** má některé specifické nástroje, které se snaží distribuci co nejvíce zpřístupnit **běžným uživatelům osobních počítačů**. Kromě openSUSE je dostupná také komerční varianta SUSE Linux Enterprise.

openSUSE je dostupné ve dvou variantách vydávání nových verzí. Konzervativnější Leap nabízí pravidelně vydávané "velké" verze, kdežto varianta Tumbleweed je aktualizována průběžně.
  '
  website='Oficiální stránky' website_link='https://www.opensuse.org/'
  download='Stáhnout openSUSE' download_link='https://www.opensuse.org/'
%}

{% include distro.html
  id='linux-mint'
  name='Linux Mint'
  logo='linux-mint-logo.svg'
  czech='true'
  beginner='true'
  screenshot_preview='linuxmint_t.png' screenshot_full='linuxmint.png'
  text='
**Linux Mint** je distribuce založená na [Ubuntu](#ubuntu). Liší se grafickým uspořádáním plochy a uživatelského rozhraní a má také vlastní sadu systémových nástrojů a aplikací.

Mint používá prostředí [Cinnamon](https://cs.wikipedia.org/wiki/Cinnamon), jsou však k dispozici i varianty s prostředími [MATE](https://mate-desktop.org/) a [Xfce](https://xfce.org/).
  '
  community='Česká komunita Mintu' community_link='https://www.linux-mint-czech.cz/'
  support='Fórum podpory' support_link='https://forum.linux-mint-czech.cz/'
  website='Oficiální stránky' website_link='https://www.linuxmint.com/'
  download='Stáhnout Linux Mint' download_link='https://www.linux-mint-czech.cz/ke-stazeni/'
%}

{% include distro.html
  id='solus'
  name='Solus'
  logo='solus-logo.svg'
  czech='true'
  beginner='true'
  screenshot_preview='solus_t.png' screenshot_full='solus.png'
  text='
**Solus** je distribuce zaměřená na **běžné uživatele** a **jednoduchost použití**. Přináší například jedinečnou integraci herní platformy [Steam](https://store.steampowered.com/about/), jejíž cílem je zlepšení výkonu ve hrách.

Jako výchozí používá Solus grafické prostředí [Budgie](https://budgie-desktop.org/), jsou však k dispozici i varianty s prostředími [GNOME](https://www.gnome.org/) a [MATE](https://mate-desktop.org/).
  '
  website='Oficiální stránky' website_link='https://getsol.us'
  download='Stáhnout Solus' download_link='https://getsol.us/download/'
%}

{% include distro.html
  id='mageia'
  name='Mageia'
  logo='mageia-logo.svg'
  czech='true'
  beginner='true'
  screenshot_preview='mageia_t.png' screenshot_full='mageia.png'
  text='
**Mageia** je úspěšným pokračováním distribuce Mandriva, dříve Mandrake Linux. Je vyvíjena komunitou vývojářů za podpory vlastní neziskové organizace. Je vhodná jak pro Linuxové **začátečníky**, tak **zkušené** profesionály.

  **Náš úkol:** tvořit pro lidi úžasné nástroje.
  '
  community='Česká komunita Mageia Linuxu' community_link='https://mageia.cz/'
  support='Fórum podpory' support_link='https://forum.mageia.cz/'
  website='Oficiální stránky' website_link='https://www.mageia.org/'
  download='Stáhnout Mageia Linux' download_link='https://mageia.cz/stahnout-mageia/'
%}

{% include distro.html
  id='debian'
  name='Debian'
  logo='debian-logo.svg'
  czech='true'
  text='
**Debian** je jedna z velmi dlouho vyvíjených distribucí, zcela vycházející z myšlenky <abbr title="GNU is Not Unix">GNU</abbr> a open source. Debian je rozsáhlý a komplexní celek s univerzálním použitím, ale **není úplně vhodný pro začátečníky**. Má tři větve - otestovanou *stable (stabilní)*, *testing (testovací)* a zcela neodzkoušenou *unstable (nestabilní)*.

Debian **vyvíjejí dobrovolníci** a tedy vždy a za všech okolností zůstane svobodným softwarem.
  '
  community='Česká komunita Debianu' community_link='https://www.debian.cz/'
  support='Podpora' support_link='https://www.debian.org/support'
  website='Oficiální stránky' website_link='https://www.debian.org/'
  download='Stáhnout Debian' download_link='https://www.debian.org/distrib/'
%}

{% include distro.html
  id='manjaro'
  name='Manjaro'
  logo='manjaro-logo.svg'
  czech='true'
  text='
**Manjaro** je distribuce založená na Arch Linuxu, který je známý pro svou vyčerpávající dokumentaci [ArchWiki](https://wiki.archlinux.org/) mnohdy použitelnou i pro ostatní linuxové distribuce. Oproti Archu je ale cílem Manjara hlavně **uživatelská přívětivost** a bezproblémové fungování ihned po instalaci.
  '
  community='Česká komunita Manjara' community_link='https://www.manjaro.cz/'
  website='Oficiální stránky' website_link='https://manjaro.org/'
  download='Stáhnout Manjaro' download_link='https://manjaro.org/get-manjaro/'
%}

{% include distro.html
  id='slax'
  name='Slax'
  logo='slax-logo.svg'
  text='
**Slax** je malou a primárně Live CD distribucí. Funguje jako **"kapesní" Linux**, který není potřeba instalovat a do počítače neukládá žádná data. Je vhodný pro používání z USB flash disku, kam lze ukládání dat nastavit.

Autorem Slaxu je Čech **Tomáš Matějíček** a jako základ používá [Debian](#debian).
  '
  website='Oficiální stránky' website_link='https://www.slax.org/'
  download='Stáhnout Slax' download_link='https://www.slax.org/'
%}

{% include distro.html
  id='tails'
  name='Tails'
  logo='tails-logo.svg'
  czech='true'
  text='
**Tails** je live distribuce s rozhraním [GNOME](https://www.gnome.org/) zaměřená na **bezpečnost, soukromí a anonymitu**. Všechna síťová spojení procházejí přes síť Tor a jakákoliv neanonymní připojení jsou blokována. Funguje jako "kapesní" Linux z USB flash disku a do počítače neukládá žádná data. Ukládání dat lze nastavit na flash disk včetně jejich šifrování. Jako základ používá [Debian](#debian).
  '
  website='Oficiální stránky' website_link='https://tails.boum.org/'
  download='Stáhnout Tails' download_link='https://tails.boum.org/install/'
%}
