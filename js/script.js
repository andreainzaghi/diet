var app = new Vue({
    el: '#app',
    data: {

      Peso:null,
      Altezza:null,
      Eta:null,
      Sesso:null,
      Calorie:null,
      percCarb:null,
      percGrassi:null,
      percProte:null,
      selected: null,
      Caloriemeno:null,
      Calorieaumento:null,
      Bmi:null,
      PesoIdeale:null,
      pesooo:null

   /* percCarb:(0.35*Calorie),
      percGrassi:(0.25*Calorie),
      percProte:(0.40*Calorie),
       i : 0*/
    },


    methods:{
      Prova:function(){


        if (this.Sesso == 'Uomo') {
          this.Calorie = (5 + (this.Peso * 10) + (this.Altezza * 6.25) - (this.Eta * 5));
            this.PesoIdeale = ((this.Altezza /100) * (this.Altezza/100)) * 22.1;
        } else if (this.Sesso == 'Donna') {
          this.Calorie = (-161 + (this.Peso * 10) + (this.Altezza * 6.25) - (this.Eta * 5));
            this.PesoIdeale = ((this.Altezza /100) * (this.Altezza/100)) * 20.6;
        } else {
          this.Calorie = 22.1 + (this.Peso  * 31.05 ) + (this.Altezza  * 1.16) ;
            this.PesoIdeale = ((this.Altezza /100) * (this.Altezza/100)) * 20.6;
        }

        if (this.selected == 'poca') {
        this.Calorie = this.Calorie * 0.9  ;
        } else if (this.selected == 'media') {
        this.Calorie = this.Calorie ;
        }  else  {
        this.Calorie = this.Calorie * 1.1 ;
        }

        this.Caloriemeno = this.Calorie * 0.85;
        this.Calorieaumento = this.Calorie * 1.15;
        this.Bmi = this.Peso / ((this.Altezza /100) * (this.Altezza/100));
         var pesodaperdere = this.PesoIdeale - this.Peso;
         var pesodaaumentare = this.Peso - this.PesoIdeale;
         // var pesooo = this.Peso + this.PesoIdeale;

        if (this.PesoIdeale < this.Peso) {
            document.getElementById('pesodasistemare').innerHTML= 'perdere' +  pesodaperdere;
        }else if(this.PesoIdeale == this.Peso){
            document.getElementById('pesodasistemare').innerHTML= 'seguire una diete che continui con un apporto calorico e attivita fisica uguale a quella che stai gia attuando,ottimo';
        }else {
          document.getElementById('pesodasistemare').innerHTML= 'aumentare apporto calorico di' + pesodaaumentare;
        }



        var percCarb = 0.35 * this.Calorie;
          document.getElementById('percCarb').innerHTML=percCarb;
        var percGrassi = 0.25 * this.Calorie;
          document.getElementById('percGrassi').innerHTML=percGrassi;
        var percProte = 0.4 * this.Calorie;
          document.getElementById('percProte').innerHTML=percProte;
// grafico mesi

          var currentDate = new Date();
          var currentMonth1 = currentDate.getMonth()+1;
          var currentMonth2 = currentDate.getMonth()+2;
          var currentMonth3 = currentDate.getMonth()+3;
          var currentMonth4 = currentDate.getMonth()+4;
          var currentMonth5 = currentDate.getMonth()+5;
          var currentMonth6 = currentDate.getMonth()+6;
          var currentMonth7 = currentDate.getMonth()+7;


          const monthName1 = currentMonth1.toLocaleString("default", {month: "long"});
          const monthName2 = currentMonth2.toLocaleString("default", {month: "long"});
          const monthName3 = currentMonth3.toLocaleString("default", {month: "long"});
          const monthName4 = currentMonth4.toLocaleString("default", {month: "long"});
          const monthName5 = currentMonth5.toLocaleString("default", {month: "long"});
          const monthName6 = currentMonth6.toLocaleString("default", {month: "long"});
          const monthName7 = currentMonth7.toLocaleString("default", {month: "long"});





// canvas grafico
          var ctx = document.getElementById('myChart').getContext('2d');
          var myChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: [monthName1, monthName2, monthName3, monthName4, monthName5, monthName6, monthName7],
                  datasets: [{
                      label: '# of Votes',
                      data: [this.Peso,pesooo, this.PesoIdeale],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      y: {
                          beginAtZero: true
                      }
                  }
              }
          });

      },

    /*  getRandomInt:function (max){
        return Math.floor(Math.random() * max);
      },
      percentuale:function(){
      do {
        RProte =getRandomInt(this.percProte);
        RGrassi =getRandomInt(this.percGrassi);
        RCarb =getRandomInt(this.percCarb);
        this.i++;
      }
      while ((RProte+RGrassi+RCarb)==this.Calorie);

      if ((RProte+RGrassi+RCarb)==this.Calorie) {
          document.getElementById(randomPRG).innerHTML='RProte'+'RGrassi'+'RCarb';
      }
    }*/
    }
  })
