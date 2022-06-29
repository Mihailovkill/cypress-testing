This is my first Git project


Zadání úkolu: 

jdi na https://bughunters.cz/, za pomoci kliknutí přejdi do sekce “naše služby” a zkontroluj že na webu jsou právě 3 tyto obrázky: 


Řešení:

Nastavil jsem si baseUrl na default https://bughunters.cz/. 
Použil jsem funkci .visit(), aby se cypress dostal na stránku, kterou jsem si nastavil jako default. 
Pomocí fuknce .get() jsem si označil element, ve kterém se nachází sekce "Naše služby" a použil jsem .click(). 
Načetla se mi nová stránka v sekci "Naše služby". 

Označil jsem si element, ve kterém se nachází hledaný obrázek pomocí funkce .get() a pomocí .should() jsem si ověřil a označil v seznamu testu, že se je hledaný obrázek viditelný v označeném elementu.
Takto jsem to opakoval pro další dva hledané obrázky.


Komentář:

Vyřešil jsem to nejlepším způsobem na jaký jsem přišel. Rád se naučím nové způsoby, jak ověřovat pomocí .should() a .and() více elementů najednou, jestli je to možné. Já si myslím, že ano, ale nedokázal jsem na to přijít.
