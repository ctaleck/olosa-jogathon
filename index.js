// Donate app
var app = new Vue({
    el: '#app',
    data: () => ({
        students: window.students,
        urls: window.urls,
        progress: window.progress,
        query: null,
        isDirty: false
    }),
    methods: {
        reset: function () {
            this.query = null;
        },
        cardClass: function (student) {
            return {
                'list-group-item-secondary': !student.selected,
                'list-group-item-primary': student.selected,
                'bg-secondary text-white': !student.selected && student.grade === 'Faculty',
                'list-group-item-danger': student.selected && student.amount < 1
            }
        },
        fullname: function (student) {
            return student.title + ' ' + student.firstname + ' ' + student.lastname;
        },
        select: function (student) {
            this.isDirty = true;
            student.selected = !student.selected;
        }
    },
    computed: {
        progressDisplay: function () {
            return '$' + this.progress.amount.toLocaleString();
        },
        progressoverDisplay: function () {
            var progressover = this.progress.goal - this.progress.amount;
            return '$' + progressover.toLocaleString();
        },
        progressStyle: function () {
            var width = Math.floor((this.progress.amount / this.progress.goal) * 100);
            return { width: width + '%'};
        },
        progressoverStyle: function () {
            var amountover = this.progress.goal - this.progress.amount;
            var width = (amountover / (this.progress.max - this.progress.goal) * 100) * .25;
            return { width: width + '%'};
        },
        amountValid: function () {
            return this.students.every(function (student) {
                return student.selected ? student.amount > 0 : true;
            });
        },
        amountTotal: function () {
            return this.students.reduce(function (total, student) {
                return student.selected ? total + student.amount : total;
            }, 0);
        },
        studentList: function () {
            var selected = this.students.filter(student => student.selected);
            if (selected.length > 0) {
                var names = selected.map(student =>
                    student.amount && student.amount
                        ? student.title + ' ' + student.firstname + ' ' + student.lastname + ' ($' + student.amount.toLocaleString() + ')'
                        : ''
                    );
                var list = names.join('; ');
            }
            return list;
        },
        url: function () {
            return [
                this.urls.paypalBase,
                "?cmd=", "_donations",
                "&business=", this.urls.paypalEmail,
                "&item_name=", this.urls.paypalItem,
                "&item_number=", encodeURI(this.studentList),
                "&amount=", this.amountTotal,
                "&currency_code=", "USD"
            ].join("")
        },
        studentsFiltered: function () {
            var students = this.students.sort((a, b) => a.order - b.order);
            if (this.query) {
                var query = this.query.toLowerCase();
                students = this.students.filter(function (student) {
                    return student.title.toLowerCase().indexOf(query) > -1 ||
                        student.firstname.toLowerCase().indexOf(query) > -1 ||
                        student.lastname.toLowerCase().indexOf(query) > -1 ||
                        student.grade.toLowerCase().indexOf(query) > -1;
                });
            }
            return students;
        }
    }
});