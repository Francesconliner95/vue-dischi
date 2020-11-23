var app = new Vue({
    el: '#root',
    data: {
        discs: [],
        order_discs: [],
        is_order: false,
        categories: 'All',
        },
    methods: {
        Order: function(){
            /*Clono l'array discs attraverso la funzione map*/
            this.order_discs = this.discs.map((element, index) => {
                return element;
            });

            /*eseguo l'ordinamento all'interno del nuovo array*/
            /*mi creo ua struttura bidimensionale che mi permette di confrontare ogni singolo anno con l'anno presente nell'emento array successivo*/
            for (i = 0; i < this.order_discs.length; i++) {
                for (j = 0; j < this.order_discs.length; j++) {
                    /*se l'elemento successivo non esitiste passa avanti*/
                    if(this.order_discs[j+1]!=undefined){
                        /*se il confronto di anno è vero mi sostituisce di posizione i due elementi all'interno dell'array*/
                        if (this.order_discs[j].year > this.order_discs[j + 1].year) {
                            let tmp = this.order_discs[j];
                            this.order_discs[j] = this.order_discs[j + 1];
                            this.order_discs[j + 1] = tmp;
                            console.log("fatto");
                        }
                    }
                }
            }
        },
        yearOrder: function(){
            /*ogni volta che premo il pulsante mi inverte lo stato da orinato a non ordinato, mostrandomi il relativo array*/
            this.is_order=!this.is_order;
        },
    },

    mounted: function(){

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(function(risposta) {
                    console.log(risposta);
                    app.discs=risposta.data.response;
                    app.Order();
                });


    },

})
