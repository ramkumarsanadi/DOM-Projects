
function getElement(selection) {
    const element = document.querySelector(selection)

    if(element){
        return element
    }
    throw new Error (
        `please check "${selection} selector, no such element exists"`
    )
}
function getElementAll(selection) {
    const element = document.querySelectorAll(selection)

    if(element){
        return element
    }
    throw new Error(
        `please check "${selection} selector, no such element exists"`
    )
}

function Counter(element, value) {
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')
    this.valueDOM.textContent = this.value
    // bind this to all function
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)

    this.increseBtn.addEventListener('click', this.increase)
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset)
 }

 Counter.prototype.increase = function() {
    console.log(this);
    this.value++
    this.valueDOM.textContent = this.value
 }
 Counter.prototype.decrease = function() {
    this.value--
    this.valueDOM.textContent = this.value
 }
 Counter.prototype.reset = function() {
    console.log(this);
    this.value = 0
    this.valueDOM.textContent = this.value
 }



const firstCounter = new Counter(getElement(".first-counter"), 10)
const secondCounter = new Counter(getElement(".second-counter"), 20)



