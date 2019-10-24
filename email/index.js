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
            showHero: true,
            image: 'http://',
            preview: '',
            title: '',
            header1: '',
            body1: '',
            showAction: true,
            showArticle1Detail: false,
            showArticle2: false,
            header2: '',
            body2: ''
        }
    },
    mounted: function() {
    },
    methods: {
        done: function() {
            var frame = document.querySelector('[name=template]')
            frame.contentWindow.location.reload();
            Vue.nextTick(function() {
                this.refresh();
            },this);
        },
        refresh: function() {
            var t = window.frames['template'].document;
            t.querySelector('title').innerHTML = this.title;
            t.getElementById('preview').innerHTML = this.preview;
        
            if (!this.showHero) {
                t.getElementById('hero').innerHTML = ''; 
            }
            t.getElementById('header1').innerHTML = this.header1;
            t.getElementById('body1').innerHTML = '';
            if (this.body1) {
                this.body1.split('\n').forEach(element => {
                    createPara(t.getElementById('body1'), element);
                });
            }
        
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
