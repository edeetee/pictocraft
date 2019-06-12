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
    ideas: {
        outside: 'buiten',
        late: 'te-laat-klok',
        night: 'nacht',
        dawn: 'ochtend',
        future: 'toekomst',
        
        when: 'wanneer',
        where: 'waar',
        why: 'waarom',
        how: 'hoe',
    },
    places: {
        hills: 'akkers',
        sea: 'zee',
        mountain: 'bergen',
        cave: 'grot',
        mine: 'mijn',
        jungle: 'jungle',
        icebergs: 'ijsberg',
        snow: 'sneeuw',
    },
    things: {
        tree: 'boom',
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