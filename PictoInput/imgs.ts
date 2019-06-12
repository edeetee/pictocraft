const imgs = {
    //subjects
    me: 'ik',
    you: 'jij',
    us: 'wij',

    //feelings
    angry: 'boos',
    question: 'vraagteken',
    hello: 'hallo-zeggen-2',
    greetings: 'dag-zeggen',
    good: 'goed',
    bad: 'slecht',
    painHurt: 'pijn',
    crazy: 'onnozel-doen',
    haha: 'lachen',
    dance: 'dansen',

    //ideas
    lookAt: 'vinden',
    run: 'lopen',
    timeOut: 'time-out',
    whereIs: 'waar',
    outside: 'buiten',
    late: 'te-laat-klok',
    when: 'wanneer',
    night: 'nacht',
    dawn: 'ochtend',
    future: 'toekomst',
    why: 'waarom',
    how: 'hoe',
    
    //places
    hills: 'akkers',
    sea: 'zee',
    mountain: 'bergen',
    cave: 'grot',
    mine: 'mijn',
    jungle: 'jungle',
    iceberg: 'ijsberg',
    snow: 'sneeuw',

    //things
    tree: 'boom',
    bed: 'bed',
    rails: 'trein-rails',

    //comparators
    andPlus: 'plus',
    isEquals: 'gelijkheidsteken'
}

const baseImgUrl = "http://webservices.ccl.kuleuven.be/picto/sclera/"

export function getImgs(){
    return Object.values(imgs)
}

export function getUrls(){
    return getImgs().map(img => baseImgUrl + img + ".png")
}