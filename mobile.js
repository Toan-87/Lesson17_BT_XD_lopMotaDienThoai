class Mobile {
    battery;
    draft;
    inbox;
    sent;
    status;
    constructor(battery, draft, inbox, sent, status,) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
        this.status = status;
    }
    get Battery() {
        return this.battery;
    }
    set Battery (battery){
        this.battery = battery;
    }
    get Draft() {
        return this.draft;
    }
    set Draft (draft){
        this.draft = draft;
    }
    get Inbox() {
        return this.inbox;
    }
    set Inbox (inbox){
        this.inbox = inbox;
    }
    get Sent() {
        return this.battery;
    }
    set Sent (sent){
        this.sent = sent;
    }
    get Status() {
        return this.status;
    }
    set Status (status){
        this.status = status;
    }
    checkstatus(){
        return this.status;
    }
    switch() {
        this.status =!this.status;
    }
    chargeBattery() {
        this.battery++;
    }
    creatMessage(content) {
        this.draft.push(content);
    }
    reciveMessage(content, mobile) {
        this.inbox.push(content);
        mobile.sent.push(content);
    }
    sentMessage(content, mobile) {
        this.sent.push(content);
        mobile.inbox.push(content);
    }
}