---
title: Převod profilů aplikací
description: Proč zvolit jako svůj operační systém Linux, jak převést profily některých běžných apliací.
permalink: /prevod-dat/
redirect_from:
  - prevod-dat.html
layout: wide
---
<div class="lcol" markdown="1">

# Převod profilů některých běžných aplikací

### z MS Windows do Linuxu

Při přechodu na Linux můžete snadno převést data profilů některých aplikací. Převod je nejsnadnější u aplikací, které jsou tzv. multiplatformí. Které to jsou můžete zjistit v [tabulce ekvivalentních aplikací]({{ site.baseurl }}{% link _pages/ekvivalenty.md %}).

- [Mozilla Firefox](#firefox)
- [Mozilla Thunderbird](#thunderbird)

## ![]({{ 'img/ff.png' | relative_url }}) Mozilla Firefox
{: id="firefox"}
Převést data vašeho profilu prohlížeče Mozilla Firefox je velmi snadné, není to však zcela automatické. Pokud budete postupovat podle následujícího jednoduché návodu, měl by se převod povést.

1. Na stránkách o aplikaci Firefox si můžete nalézt [kde se se nachází profil této aplikace](http://firefox.czilla.cz/otazky/#otazka-6) pod MS Windows. Většinou by se mělo jednat o adresář *Application Data*, např.: `C:\WINDOWS\Application Data\Mozilla\Firefox\Profiles\`

   Tento adresář obsahuje podadresář s vlastnímy daty profilu. Tento podadresář má jméno složené s náhodných písmen a číslic a přípony *.default*. Např.: `da0z37ev.default`

   Pokud máte více profilů bude se přípona lišit.

1. Po nastartování Linuxu byste měli mít připojeny a dostupny soubory z operačního systému MS Windows. Jejich umístění se však může lišit, ať již podle toho, jak jste si jejich připojení sami nastavili, nebo jak vám je prezentuje váš oblíbený správce souborů.

   Pokud nejste schopni z Linuxu váš profil z MS Windows najít vypalte si jej v MS Windows na CD a následně postupujte stejně.

1. Spusťte a poté ukončete kompletně v Linuxu aplikaci Firefox. Data profilu Firefoxu by se v Linuxu měla nacházet ve vašem domovském adresáři v podadresáři `~/.mozilla/firefox/`

   Tento adresář nemusí být běžně vidět a je potřeba povolit zobrazování skrytých souborů. I v tomto adresáři najdete podadresář jehož název je složen z náhodných znaků a číslic, bude však jiné než to jaké máte na MS Windows. Např.: `n85ie7kc.default`

   Kromě něj se v adresáři nachází i další dva soubory `pluginreg.dat` `profiles.ini`

1. Pokud si jste jisti, že tento profil neobsahuje zatím žádná důležitá data, smažte tento (např.: n85ie7kc.default) podadresář.

1. Místo něj nakopírujte adresář s podobným označením z MS Windows. (Např. místo n85ie7kc.default nakopírujte da0z37ev.default)

1. Otevřte textovým editorem (kate, gedit) soubor *profiles.ini* a změňte v něm řádek: `Path=n85ie7kc.default` na `Path=da0z37ev.default`

1. Spusťte Firefox. Vaše nastavení by měla být převedena.

## ![]({{ 'img/tb.png' | relative_url }}) Mozilla Thunderbird
{: id="thunderbird"}
Převést data vašeho profilu poštovního klienta Mozilla Thunderbird je v podstatě stejné jako u prohlížeče Firefox a je velmi snadné, není to však zcela automatické. Pokud budete postupovat podle následujícího jednoduché návodu, měl by se převod povést.

1. Na stránkách o aplikaci Thunderbird si můžete nalézt [kde se se nachází profil této aplikace](http://thunderbird.czilla.cz/otazky/#otazka-prechod-kde-jsou-ulozena-data) pod MS Windows. Většinou by se mělo jednat o adresář *Application Data*, např.: `C:\WINDOWS\Application Data\Thunderbird\Profiles\`

   Tento adresář obsahuje podadresář s vlastnímy daty profilu. Tento podadresář má jméno složené s náhodných písmen a číslic a přípony *.default*. Např.: `da0z37ev.default`

   Pokud máte více profilů bude se přípona lišit.

1. Po nastartování Linuxu byste měli mít připojeny a dostupny soubory z operačního systému MS Windows. Jejich umístění se však může lišit, ať již podle toho, jak jste si jejich připojení sami nastavili, nebo jak vám je prezentuje váš oblíbený správce souborů.

   Pokud nejste schopni z Linuxu váš profil z MS Windows najít vypalte si jej v MS Windows na CD a následně postupujte stejně.

1. Spusťte a poté ukončete kompletně v Linuxu aplikaci Firefox. Data profilu Firefoxu by se v Linuxu měla nacházet ve vašem domovském adresáři v podadresáři `~/.thunderbird/`

   Tento adresář nemusí být běžně vidět a je potřeba povolit zobrazování skrytých souborů. I v tomto adresáři najdete podadresář jehož název je složen z náhodných znaků a číslic, bude však jiné než to jaké máte na MS Windows. Např.: `n85ie7kc.default`

   Kromě něj se v adresáři nachází i další dva soubory `appreg` `profiles.ini`

1. Pokud si jste jisti, že tento profil neobsahuje zatím žádná důležitá data, smažte tento (např.: n85ie7kc.default) podadresář.

1. Místo něj nakopírujte adresář s podobným označením z MS Windows. (Např. místo n85ie7kc.default nakopírujte da0z37ev.default)

1. Otevřte textovým editorem (kate, gedit) soubor *profiles.ini* a změňte v něm řádek: `Path=n85ie7kc.default` na `Path=da0z37ev.default`

1. Spusťte Thunderbird. Vaše nastavení by měla být převedena.

</div>

<div class="rcol">

{% capture submenu %}{% include submenu.md %}{% endcapture %}
{{ submenu | markdownify }}

<div markdown="1">
# Multiplatformní

## Už vím proč používat multiplatformní aplikace

Zde vidíte jednu z výhod, proč používat tzv. multiplatformní aplikace. Tedy aplikace, které lze provozovat na více operačních systémech a mnohdy i na více architekturách.

Ne jen, že se nemusíte zdržovat zvykáním si na nové chování jiné aplikace, ale i převod dat je velmi snadný. Krom toho většina aplikací s otevřeným zdrojovým kódem využívá i tzv. otevřených formátů - tedy struktury ve kterých jsou uloženy jejich data jsou veřejně známy a zdokumentovány. Převod jimi vytvořených dat je pak mnohem snadnější.
</div>

</div>
