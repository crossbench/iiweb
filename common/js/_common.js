
//ブラウザー判断 body クラス追加

jQuery(function($) {
    function ua_addClass( a ){
        $('body').addClass( a );
    }

    // ブラウザのUAを小文字で取得
    var userAgent = window.navigator.userAgent.toLowerCase();
    // IEの判定
    var isIE = (userAgent.indexOf('msie') >= 0
                || userAgent.indexOf('trident') >= 0);
    // IEのバージョンを取得
    if (isIE) {
        // 正規表現によりUA文字列を配列に分割
        var arr = /(msie|rv:?)\s?([\d\.]+)/.exec(userAgent);
        version = (arr) ? arr[2] : '';
        ua_addClass('ie'+version);
        ua_addClass('ie');
    } else {
        // IE以外のブラウザ判定
        if (userAgent.indexOf('edge') != -1) {
            /* Edge. */
            ua_addClass('edge');
        }
        else if (userAgent.indexOf('chrome') != -1) {
            /* Google Chrome. */
            ua_addClass('chrome');
        } else if (userAgent.indexOf('firefox') != -1) {
            /* FireFox. */
            ua_addClass('firefox');
        } else if (userAgent.indexOf('safari') != -1) {
            /* Safari. */
            ua_addClass('safari');
        } else if (userAgent.indexOf('opera') != -1) {
            /* Opera. */
            ua_addClass('opera');
        }  else if (userAgent.indexOf('gecko') != -1) {
            /* Gecko. */
            ua_addClass('gecko');
        } else {
            return false;
        }
    }

    /*
     *  機種判別
     */
    var ua = navigator.userAgent.toLowerCase();

    // iPhone
    var isiPhone = (ua.indexOf('iphone') > -1);
    // iPad
    var isiPad = (ua.indexOf('ipad') > -1);
    // Android
    var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
    // Android Tablet
    var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);

    if(isiPhone) {
        ua_addClass('iPhone');
    }
    if(isiPad) {
        ua_addClass('iPad');
    }
    if(isAndroid) {
        ua_addClass('android');
    }
    if(isAndroidTablet) {
        ua_addClass('android_tablet');
    }

    // OSを判断する
    if (navigator.userAgent.indexOf('Win') > 0) {
        $('body').addClass('win');
    } else if (navigator.userAgent.indexOf('Mac') > 0){
        $('body').addClass('mac');
    }

});
