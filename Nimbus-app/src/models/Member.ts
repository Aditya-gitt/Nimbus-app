export class Member {
    name: string;
    posLeft: string;
    posTop: string;
    posBottom: string;
    posRight: string;
    display: string;

    constructor(name: string, posLeft: string, posTop: string, posRight: string, posBottom: string, display: string) {
        this.name = name;
        this.posLeft = posLeft;
        this.posTop = posTop;
        this.posBottom = posBottom;
        this.posRight = posRight;
        this.display = display;
    }

}