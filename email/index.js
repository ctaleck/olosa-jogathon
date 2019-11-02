var createPara = function(currentDiv, element) {
    var newDiv = document.createElement("p"); 
    var newContent = document.createTextNode(element); 
    newDiv.appendChild(newContent);  
    currentDiv.appendChild(newDiv); 
};

// Email app
var app = new Vue({
    el: '#app',
    data: function() {
        return {
            frame: document.querySelector('[name=template]'),
            showHero: true,
            image: 'https://ourladyofsorrows-academy.com/sites/sspx/files/media/usa-s-phoenix/miscellaneous/2019-olosa-students-email.jpg',
            preview: '',
            title: '',
            header1: '',
            body1: '',
            showAction: true,
            actionLabel: "Donate",
            actionUrl: "https://jogathon.olosa.org/",
            showArticle1Detail: false,
            showArticle2: false,
            header2: '',
            body2: ''
        }
    },
    mounted: function() {
    },
    methods: {
        reset: function() {
            var frame = document.querySelector('[name=template]')
            frame.contentWindow.location.reload();
        },
        show: function () {
            var iframeBody = document.querySelector('[name=template]').contentDocument;
            head = iframeBody['head'].innerHTML;
            body = iframeBody['body'].innerHTML;
            document.body.innerHTML = body;
            document.head.innerHTML = head;
        },
        generate: function() {
            var frame = document.querySelector('[name=template]')
            var t = frame.contentWindow.document;

            t.querySelector('title').innerHTML = this.title;
            t.getElementById('preview').innerHTML = this.preview;
        
            if (!this.showHero) {
                t.getElementById('hero').innerHTML = ''; 
            }
            t.getElementById('header1').innerHTML = this.header1;
            t.getElementById('body1').innerHTML = '';
            if (this.body1) {
                this.body1.split('\n').forEach(function(element) {
                    createPara(t.getElementById('body1'), element);
                });
            }

            t.getElementById('actionLink').innerHTML = this.actionLabel;
            t.getElementById('actionLink').href = this.actionUrl;
        
            if (!this.showAction) {
                t.getElementById('action').innerHTML='';
            }
        
            if (!this.showArticle1Detail) {
                t.getElementById('article1detail').innerHTML='';
            }
        
            t.getElementById('article2column').innerHTML='';
        
            if (!this.showArticle2) {
                t.getElementById('article2spacer').innerHTML='';
                t.getElementById('article2').innerHTML='';
            }
        }
    },
    computed: {
    }
});
