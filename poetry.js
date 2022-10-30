const verses = [
    'به لاله نرگس مخمور گفت وقت سحر - که هر که در صف باغ است صاحب هنریست',
    'دختری خرد، شکایت سر کرد - که مرا حادثه بی مادر کرد',
    'گفت تیری با کمان، روز نبرد - کاین ستمکاری تو کردی، کس نکرد',
    'روز شکار، پیرزنی با قباد گفت - کاز آتش فساد تو، جز دود و آه نیست',
    'شاهدی گفت بشمعی کامشب - در و دیوار، مزین کردم',
    'نارونی بود به هندوستان - زاغچه‌ای داشت در آن آشیان',
    'تاجری در کشور هندوستان - طوطئی زیبا خرید از دوستان',
    'سرو خندید سحر، بر گل سرخ - که صفای تو به جز یکدم نیست',
    'موشکی را بمهر، مادر گفت - که بسی گیر و دار در ره ماست',
    'اینچنین خواندم که روزی روبهی - پایبند تله گشت اندر رهی',
]

export function poetry (verse) {

    let result = null

    let lastChar = verse.split('').pop()
    
    if(lastChar === 'آ' || lastChar === 'ء' || lastChar === 'أ' || lastChar === 'إ' ){
        lastChar = 'ا'
    }
    
    let foundedVerse = verses.find(verse => verse.split('')[0] === lastChar)

    if(!foundedVerse) {
        let lastChar = verse.split('-')[0].split('').pop()
        foundedVerse = verses.find(verse => verse.split('')[0] === lastChar)
    }
    result = foundedVerse
    return result
}

