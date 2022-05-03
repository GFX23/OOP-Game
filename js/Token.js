class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`
        this.dropped = false
    }

    drawHTMLToken() {
        const div = document.createElement("div")
        document.querySelector("#game-board-underlay").append(div)
        div.setAttribute("id", this.id)
        div.setAttribute("class", "token")
        div.style.backgroundColor = owner.color
    }

    get htmlToken() {

    }
}