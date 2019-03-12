var datetime = null,
date = null;    

$(document).ready(function(){
    //datetime = $('#datetime')
    //update();
    //setInterval(update, 1000);
});



var update = function () {
    var data = $('#saida').val();
    var dataSplit = data.split('/');
    var dia = dataSplit[0];
    var mes = dataSplit[1];
    var anoS = dataSplit[2].split(" ");
    var ano = anoS[0];
    var timeSplit = anoS[1].split(':');
    var hora = timeSplit[0];
    var min = timeSplit[1];
    var seg = timeSplit[2];
    var instanciaDateTime = new Date(ano, mes-1, dia, hora, min, seg, '0');
    var novadate = moment(instanciaDateTime).add(1, 'second');
    datetime = moment(novadate).format('DD/MM/YYYY h:mm:ss');
    var timelouco = moment(novadate).format('YYYYMMDDhhmmss');
    $('#saida').val(datetime);
    $('#saida2').val(timelouco);
    setTimeout(update, 1000);
};

var iniciar = function() {
    var data = $('#date').val();
    var time = $('#time').val();
    var dataSplit = data.split('-');
    var timeSplit = time.split(':');
    var instanciaDateTime = new Date(dataSplit[0], dataSplit[1]-1, dataSplit[2], timeSplit[0], timeSplit[1], '0', '0');
    $('#saida').val(moment(instanciaDateTime).format('DD/MM/YYYY h:mm:ss'));
    update();
}