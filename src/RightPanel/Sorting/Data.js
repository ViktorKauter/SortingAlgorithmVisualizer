export default class Data{
    constructor(count){
        this.count=count;
        this.data = Array.from({length: count}, () => Math.floor(Math.random() * 100));
        this.color = Array.from({length: count},() => 0);
    }
}