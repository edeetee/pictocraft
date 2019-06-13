interface stringMap<T>{
    [key: string]: T
}

export const imgCategories: stringMap<stringMap<string>> = {
    subjects: {
        me: 'ik',
        you: 'jij',
        us: 'wij'
    },
    comparisons: {
        //comparators
        and: 'plus',
        "equal to": 'gelijkheidsteken'
    },
    feelings: {
        angry: 'boos',
        good: 'goed',
        bad: 'slecht',
        painHurt: 'pijn',
        crazy: 'onnozel-doen',
        haha: 'lachen',
    },
    actions: {
        question: 'vraagteken',
        hello: 'hallo-zeggen-2',
        greetings: 'dag-zeggen',
        dance: 'dansen',
        lookAt: 'vinden',
        run: 'lopen',
        timeOut: 'time-out',
    },
    questions: {
        when: 'wanneer',
        where: 'waar',
        why: 'waarom',
        how: 'hoe',
    },
    time: {
        outside: 'buiten',
        late: 'te-laat-klok',
        night: 'nacht',
        dawn: 'ochtend',
        future: 'toekomst',
    },
    places: {
        hills: 'akkers',
        sea: 'zee',
        mountain: 'bergen',
        cave: 'grot',
        mine: 'mijn',
        jungle: 'jungle',
    },
    things: {
        tree: 'boom',
        iceberg: 'ijsberg',
        snow: 'sneeuw',
        bed: 'bed',
        rails: 'trein-rails',
    }
}

Object.assign(imgCategories.subjects, imgCategories.comparisons)
delete imgCategories.comparisons;

const baseImgUrl = "http://webservices.ccl.kuleuven.be/picto/sclera/"

export function idToUrl(imgId: string){
    return baseImgUrl + imgId + ".png"
}