import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []

        this.prepare()
    }

    // set component before init
    prepare() {
    }

    // Returns component template
    toHTML() {
        return ''
    }

    // notify listeners about event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // subscribe to event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // initialize component
    // add DOM listeners
    init() {
        this.initDOMListeners()
    }

    // delete component
    // clear DOM listeners
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}
