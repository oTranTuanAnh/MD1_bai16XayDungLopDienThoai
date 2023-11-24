class Phone {
    constructor (battery, draft, inbox, sent) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }
    charge(){
        this.battery = 100;
    }
    textMessage (text){
        this.draft = text;
    }
    showInbox(){
        return this.inbox;
    }
    showSent(){
        return this.sent;
    }
    sendMessage (phone){
        //B1 chuyen thu nhap cua dt hien tai vao inbox
        this.sent.push(this.draft);
        //B2 chuyen tu inbox vao sent cua dt hien tai --> chuyen den sent cua phone
        phone.inbox.push(this.draft);
        //B3 xoa thu nhap
        this.draft = "";
    }

}