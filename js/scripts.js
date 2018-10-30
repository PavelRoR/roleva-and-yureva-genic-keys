$(document).ready(function () {
    /* Работа формы */
    $(function () {
        var check = $('.check', this),
            email = $('.mail', this),
            message = $('.alert_message', this);
        $(".form_newsletter").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert_message', this),
                reNone = /.+/,
                reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{1,20}$/,
                email = $('.mail', this),
                button = $('.button_mail', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            } else if (!email.val().match(reEm)) {
                message.text('Email введен некорректно').slideDown(500);
                return false;
            } else if (!check.prop("checked")) {
                check.next().css("color", "#000");
                check.next().children().css("color", "#000");
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            } else {
                // $('.infront', this).addClass('hide');
                $(".infront_submit", this).addClass("hide");
                $(".infront_submit", this).html("Зарегистрирован Ваш e-mail: " + email.val() + "<br>Бонус уже у Вас на почте").removeClass("hide");
                button.text('Отправлено');
            }
        });
        email.click(function () {
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css("color", "#fefdfc");
            check.next().children().css("color", "#fefdfc");
            message.slideUp(500);
        });
    });

    /*Отзывы*/
    $('#revs_container').owlCarousel({
        slideSpeed: 2000,
        paginationSpeed: 2000,
        items: 1,
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoHeightClass: 'owl-height',
        autoHeight: true
    })
    /*Страые браузеры*/
    var yaBrowserUpdater = new ya.browserUpdater.init({
        "lang": "ru",
        "browsers": {
            "yabrowser": "15.10",
            "chrome": "52",
            "ie": "10",
            "opera": "40",
            "safari": "8",
            "fx": "47",
            "iron": "35",
            "flock": "Infinity",
            "palemoon": "25",
            "camino": "Infinity",
            "maxthon": "4.5",
            "seamonkey": "2.3",
            "theme": "blue"
        }
    });
    /*Конец документа*/
});