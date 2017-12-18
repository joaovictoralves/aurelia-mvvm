export class Tabs {
    constructor(
    public disabled: boolean = false,
    public vertical: boolean = false,
    public type: string = 'pills',
    public active: number = 2 ){}
}