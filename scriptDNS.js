let M = ['https://facts.net/wp-content/uploads/2021/04/hamster-in-a-basket.jpg', 'https://proprikol.ru/wp-content/uploads/2019/10/smeshnye-kartinki-homyakov-19.jpg', 'https://gas-kvas.com/uploads/posts/2022-06/1655199844_2-gas-kvas-com-p-khomyak-foto-zhivotnogo-2.jpg', 'https://o-tendencii.com/uploads/posts/2022-05/1652317427_59-o-tendencii-com-p-tatu-khomyachok-foto-64.jpg','https://phonoteka.org/uploads/posts/2022-09/1664058211_29-phonoteka-org-p-oboi-na-telefon-khomyaki-instagram-32.jpg','https://shutniks.com/wp-content/uploads/2019/11/homyak_11_26101259.jpg','https://kartinkof.club/uploads/posts/2022-09/1662319805_28-kartinkof-club-p-novie-i-krasivie-kartinki-khomyachok-30.jpg','https://phonoteka.org/uploads/posts/2022-04/1651148561_32-phonoteka-org-p-khomyaki-oboi-krasivo-42.jpg','https://funart.pro/uploads/posts/2022-05/1652851613_11-funart-pro-p-khomka-khomyachok-zhivotnie-krasivo-foto-11.jpg','https://pibig.info/uploads/posts/2022-06/1655668612_23-pibig-info-p-kartinki-khomyakov-krasivo-26.jpg','https://i.pinimg.com/originals/56/fb/46/56fb4692e3a41ef17143070f3803a0ff.jpg','https://proprikol.ru/wp-content/uploads/2019/10/smeshnye-kartinki-homyakov-32.jpg','https://proprikol.ru/wp-content/uploads/2019/10/smeshnye-kartinki-homyakov-32.jpg','https://pibig.info/uploads/posts/2022-06/1655668671_11-pibig-info-p-kartinki-khomyakov-krasivo-12.jpg','https://fikiwiki.com/uploads/posts/2022-02/1644815440_22-fikiwiki-com-p-khomyaki-krasivie-kartinki-25.jpg','https://proprikol.ru/wp-content/uploads/2019/10/smeshnye-kartinki-homyakov-14.jpg','https://severdv.ru/wp-content/uploads/2020/05/pochemu-vonyaet-homyak-2048x1370.jpg','https://fthmb.tqn.com/3wko5S4Vk7UZzmm6p3G1_gCs3qM%3D/4288x2848/filters:no_upscale%28%29:fill%28transparent%2C1%29/you-have-called-me-dwarf-hamster-6-weeks-old-184337772-5848b1065f9b58dccc9fc10c.jpg'];
var arr = document.getElementsByClassName("catalog-product__image-link");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `<picture data-gtm-vis-has-fired-32166084_1461="1"><source type="image/webp" media="(min-width: 768px)" data-srcset="https://c.dns-shop.ru/thumb/st4/fit/200/200/4f5cd0bcfbaa6ec8e6b4d54044d85204/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg.webp" data-gtm-vis-has-fired-32166084_1461="1" srcset="${M[i]}"><source type="image/webp" media="(max-width: 767px)" data-srcset="https://c.dns-shop.ru/thumb/st4/fit/120/120/8cc4a5fcd6cc490fd2e941e5f4ec8ddb/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg.webp" data-gtm-vis-has-fired-32166084_1461="1" srcset="${M[i]}"><img alt="Фен Goodhelper HD-F082 черный/красный" data-src="https://c.dns-shop.ru/thumb/st4/fit/200/200/4f5cd0bcfbaa6ec8e6b4d54044d85204/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg" data-gtm-vis-has-fired-32166084_1461="1" class="loaded" src="https://c.dns-shop.ru/thumb/st4/fit/200/200/4f5cd0bcfbaa6ec8e6b4d54044d85204/46fc7ff60b4e94cb9ebc38ea24b24f1335affc54381a439e96643c156cd7f444.jpg"
GIF3 МБ
data-was-processed="true"></picture>`;
}
const N = ['Хомячёк Вася', 'Хомячёк Света', 'Хомячёк ', 'Хомячёк Коля', 'Хомячёк Миша', 'Хомячёк Кирилл', 'Хомячёк Женя', 'Хомячёк Данил', 'Хомячёк Серёжа', 'Хомячёк Егор', 'Хомячёк Саша', 'Хомячёк Карим', 'Хомячёк Ислам', 'Хомячёк Катя', 'Хомячёк Наташа', 'Хомячёк Алия', 'Хомячёк Эвелина', 'Хомячёк Латыф',];
var arr = document.getElementsByClassName("catalog-product__name ui-link ui-link_black");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `<span data-gtm-vis-has-fired-32166084_1461="1">${N[i]}</span>`;
}
const X = ['бесплатно','за пожалуйста','кто первый заберёт','за стих','просто так','бесплатно','за песню','за танец','бесплатно','бесплатно','в хорошие руки','бесплатно','бесплатно','бесплатно','бесплатно','за хорошее поведение','бесплатно','за хорошее отношение'];
var arr = document.getElementsByClassName("product-buy__price");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `${X[i]}`;
}
$(".catalog-product__discount-vobler").remove()
$(".catalog-product__avails avails-container").remove()
$(".catalog-product__stat").remove()
$(".product-buy__sub").remove()
const catalogProducts = document.querySelectorAll(".catalog-products")
catalogProducts.forEach((e) => e.style.gridTemplateColumns = "1fr 1fr")
catalogProducts.style.gridTemplateColumns = "1fr 1fr"
