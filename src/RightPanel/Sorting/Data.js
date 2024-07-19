export default class Data{
    constructor(count){
        this.count=count;
        this.data = Array.from({length: count}, () => Math.floor(Math.random() * 100));
        this.colors={}
        this.colors.red = Array.from({length: count},() => 0);
        this.colors.blue = Array.from({length: count},() => 0);

    }
}