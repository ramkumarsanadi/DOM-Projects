function getElement(selection){
    const element = document.querySelector(selection)
    if(element){
        return element
    }
    throw new Error(`please check the "${element}" selector, no such element exists`)
}

class Counter{
    constructor(element, value){
        this.element = element
        this.value = value
        this.increasebtn = element.querySelector('.increase')
        this.decreaseBtn = element.querySelector('.decrease')
        this.resetBtn = element.querySelector('.reset')
        this.valueDOM = element.querySelector('.value')
        this.valueDOM.textContent = this.value

        // bind functions
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.reset = this.reset.bind(this)

        this.increasebtn.addEventListener('click', this.increase)
        this.decreaseBtn.addEventListener('click', this.decrease)
        this.resetBtn.addEventListener('click', this.reset)

    }

    increase(){
        this.value++
        this.valueDOM.textContent = this.value
    }
    decrease(){
        this.value--
        this.valueDOM.textContent = this.value
    }
    reset(){
        this.value = 0
        this.valueDOM.textContent = this.value
    }
}

const fistCounter = new Counter(getElement(".first-counter"), 0)
const secondCounter = new Counter(getElement(".second-counter"), 0)