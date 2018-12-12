# Proč.Linux.cz

[![Build Status](https://travis-ci.com/MikkCZ/proc-linux-cz.svg?branch=master)](https://travis-ci.com/MikkCZ/proc-linux-cz)

Repositář pro web proc.linux.cz. Web používá generátor statických stránek [Jekyll](https://jekyllrb.com/).

## Úpravy obsahu

### Šablona
Soubory tvořící šablonu HTML se nachází v adresářích `_includes` a `_layouts`, styly v adresáři `css`.

### Obsah
Obsah všech stránek je v adresáři `_pages` a je psaný v Markdownu. Jako jeho dobrý přehled poslouží články:
- [Mastering Markdown - GitHub Guides](https://guides.github.com/features/mastering-markdown/)
- [Basic writing and formatting syntax - User Documentation](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
- [Syntax | kramdown](https://kramdown.gettalong.org/syntax.html)

### Příprava
Abyste byli schopni spustit níže uvedené příkazy, je nutné mít nainstalovaný [Ruby](https://www.ruby-lang.org/en/documentation/installation/) a [Bundler](https://bundler.io/#getting-started).

Před prvním zobrazením (nebo po změně souboru `Gemfile`) je potřeba stáhnout potřebné závislosti.
```
$ bundle install --path vendor/bundle
```

### Náhled
Při úpravách vzhledu i obsahu je dobré rovnou se podívat na výsledek. Níže uvedený příkaz sestaví obsah repositáře a zpřístupní ho na lokální adrese http://localhost:4000/.
```
$ bundle exec jekyll serve
```
Příkaz stačí spustit jednou v samostatném terminálu a nechat běžet. Pokud pak ve zdrojových souborech provedete nějakou změnu, Jekyll sestaví stránky znovu. Pro zobrazení efektu změn stačí obnovit načtenou stránku v prohlížeči (*F5*).

## Sestavení statické verze
Pro sestavení webu slouží tento příkaz.
```
$ bundle exec jekyll build
```
Statická verze stránek je vygenerovaná do adresáře `_site`. Pro nasazení stačí jeho obsah nahrát na server třeba přes FTP.

## Označení verze k vydání
Pro označení libovolné verze k vydání ji stačí označit tagem. Ve větvi `master` k tomu lze použít skript `release.sh`, který označí poslední commit tagem podle jeho data a času.
```
$ ./release.sh
$ git push --tags origin master
```
Z každého commitu s tagem je pomocí Travis CI sestavena statická verze a nahrána do [seznamu vydaných verzí](https://github.com/MikkCZ/proc-linux-cz/releases).
