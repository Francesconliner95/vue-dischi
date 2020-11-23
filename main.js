var app = new Vue({
    el: '#root',
    data: {
        discs: [],
        categories: 'All',
        },
    methods: {
        yearOrder: function(){
            // this.discs.sort(this.discs[].year);
            for (i = 0; i < this.discs.length; i++) {
                for (j = 0; j < this.discs.length; j++) {
                    if (this.discs[j].year > this.discs[j + 1].year) {
                        let tmp = this.discs[j];
                        this.discs[j] = this.discs[j + 1];
                        this.discs[j + 1] = tmp;
                    }
                }
            }
            console.log(this.discs);
        },
    },

    mounted: function(){

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(function(risposta) {
                    console.log(risposta);
                    app.discs=risposta.data.response;
                });
    },

})
