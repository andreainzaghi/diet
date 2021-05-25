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
          this.Calorie = this.Calorie.toFixed(2);
        } else if (this.selected == 'media') {
        this.Calorie = this.Calorie ;
          this.Calorie = this.Calorie.toFixed(2);
        }  else  {
        this.Calorie = this.Calorie * 1.1 ;
          this.Calorie = this.Calorie.toFixed(2);
        }


        this.Bmi = this.Peso / ((this.Altezza /100) * (this.Altezza/100));
         var pesodaperdere = this.PesoIdeale - this.Peso;
         var pesodaaumentare = this.Peso - this.PesoIdeale;
         var pesooo2 = (this.PesoIdeale * 2);

         var pesooo = (pesodaaumentare + pesooo2)/2;



        if (this.PesoIdeale < this.Peso) {
            document.getElementById('pesodasistemare').innerHTML= 'perdere' +  pesodaperdere.toFixed(2);
        }else if(this.PesoIdeale == this.Peso){
            document.getElementById('pesodasistemare').innerHTML= 'seguire una diete che continui con un apporto calorico e attivita fisica uguale a quella che stai gia attuando,ottimo';
        }else {
          document.getElementById('pesodasistemare').innerHTML= 'aumentare apporto calorico di' + pesodaaumentare.toFixed(2);
        }

        var x = pesodaaumentare; x = Math.abs(x);
        if (x < 5) {
      document.getElementById('pesocheaumenta').innerHTML= 'Consigliamo di perdere '+ x + 'in tre mesi per non accellerare il tuo metabolismo';
      xy=3;
    } else if (x > 5 && x < 10) {
      document.getElementById('pesocheaumenta').innerHTML= 'Consigliamo di perdere '+ x + 'in sei mesi per non accellerare il tuo metabolismo';
        xy=6;
      } else if (x > 10 && x < 20) {
      document.getElementById('pesocheaumenta').innerHTML= 'Consigliamo di perdere '+ x + 'in 12 mesi per non accellerare il tuo metabolismo';
        xy=12;
      } else {
      document.getElementById('pesocheaumenta').innerHTML= 'Consigliamo di perdere '+ x + 'in 18 mesi per non accellerare il tuo metabolismo';
        xy=18;
      }



      var mediax = xy/2;
 var pesorazionatoingiorni = x/xy;
 document.getElementById('pesorazionatoingiorni').innerHTML=pesorazionatoingiorni.toFixed(2);
 var kcalingiorni = pesorazionatoingiorni * 250 ;


        var percCarb = 0.35 * this.Calorie;
          document.getElementById('percCarb').innerHTML=percCarb;
        var percGrassi = 0.25 * this.Calorie;
          document.getElementById('percGrassi').innerHTML=percGrassi;
        var percProte = 0.4 * this.Calorie;
          document.getElementById('percProte').innerHTML=percProte;
// grafico mesi

          var currentDate = new Date();

  const monthName = d.toLocaleString("default", {month: "long"});




// canvas grafico
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [monthName,mediax, xy ],
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
      Prova1:function(){


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

      var percCarb = 0.35 * this.Calorie;
        document.getElementById('percCarb').innerHTML=percCarb;
      var percGrassi = 0.25 * this.Calorie;
        document.getElementById('percGrassi').innerHTML=percGrassi;
      var percProte = 0.4 * this.Calorie;
        document.getElementById('percProte').innerHTML=percProte;

        let myChart = document.getElementById('myChart1').getContext('2d');

          // Global Options
          Chart.defaults.global.defaultFontFamily = 'Lato';
          Chart.defaults.global.defaultFontSize = 18;
          Chart.defaults.global.defaultFontColor = '#777';

          let massPopChart = new Chart(myChart1, {
            type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data:{
              labels:['carboidrati', 'grassi', 'proteine' ],
              datasets:[{
                label:'Population',
                data:[
                percCarb,
                  percGrassi,
                percProte
                ],
                //backgroundColor:'green',
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'
              }]
            },
            options:{
              title:{
                display:true,
                text:'',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }
          });

      }

      // outer grafico ciambella



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
