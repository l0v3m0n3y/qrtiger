class qrtiger{
    constructor(){
        this.api = "https://qrtiger.com"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest","Content-Type":"application/vnd.api+json"}
    }
    async req(url, data,method="GET"){
    if (data) {
            method="POST"
            data = JSON.stringify(data);
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.text()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async generate_qr(data,type){
        return (await this.req(`${this.api}/qrcodes/qr2`,{"size": 500,"colorDark": "#054080","logo": null,"eye_outer": "eyeOuter2","eye_inner": "eyeInner1","qrData": "pattern0","backgroundColor": "rgb(255,255,255)","transparentBkg": false,"qrCategory": type,"text": data}));
    }
}
module.exports = {qrtiger};