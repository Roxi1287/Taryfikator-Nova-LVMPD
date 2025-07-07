
$(document).ready(function() {
    // obiekt z całym taryfikatorem
    var obj = {
        'Wykroczenia drogowe': {
            'Przekroczenie prędkości 10-20 mph': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10mph',
                'Kwota min': 100,
                'Kwota max': 400,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Przekroczenie prędkości 20-40 mph': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10mph',
                'Kwota min': 400,
                'Kwota max': 550,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Przekroczenie prędkości 40+ mph': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10mph',
                'Kwota min': 550,
                'Kwota max': 800,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Jazda pod wpływem alkoholu lub substancji odurzających': {
                'Dodatkowe': 'Konfiskata prawo jazdy, Odholowanie pojazdu',
                'Kwota min': 400,
                'Kwota max': 800,
                'Więzienie min': 0,
                'Więzienie max': 12
            },
            'Jazda bez prawa jazdy': {
                'Dodatkowe': 'W przypadku recydywy więzienie, Odholowanie pojazdu',
                'Kwota min': 180,
                'Kwota max': 600,
                'Więzienie min': 'Brak',
                'Więzienie max': 6
            },
            'Jazda bez włączonych świateł': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 60,
                'Kwota max': 200,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Przejazd na czerwonym świetle': {
                'Dodatkowe': 'Brak',
                'Kwota min': 50,
                'Kwota max': 300,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Nieprzestrzeganie znaków drogowych': {
                'Dodatkowe': 'Brak',
                'Kwota min': 100,
                'Kwota max': 300,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Brawurowa jazda': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 800,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Stwarzanie zagrożenia w ruchu lądowym': {
                'Dodatkowe': 'Konfiskata prawo jazdy',
                'Kwota min': 300,
                'Kwota max': 1100,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Spowodowanie kolizji/wypadku': {
                'Dodatkowe': 'Brak',
                'Kwota min': 100,
                'Kwota max': 600,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Jazda pod prąd': {
                'Dodatkowe': 'Brak',
                'Kwota min': 150,
                'Kwota max': 700,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Niezatrzymanie pojazdu do kontroli': {
                'Dodatkowe': 'Brak',
                'Kwota min': 100,
                'Kwota max': 400,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Nielegalne wyścigi uliczne': {
                'Dodatkowe': 'Konfiskata prawa jazdy',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 'Brak',
                'Więzienie max': 6
            },
            'Wprowadzanie pojazdu w niekontrolowany poślizg (drift)': {
                'Dodatkowe': 'Wezwanie dot',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Niewłaściwe parkowanie': {
                'Dodatkowe': 'Brak',
                'Kwota min': 50,
                'Kwota max': 100,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Zły stan techniczny pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu, Skierowanie na inspekcję DOT',
                'Kwota min': 80,
                'Kwota max': 500,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Zniszczenie mienia': {
                'Dodatkowe': 'Naprawa uszkodzenia',
                'Kwota min': 100,
                'Kwota max': 400,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Potrącenie przechodnia': {
                'Dodatkowe': 'Brak',
                'Kwota min': 300,
                'Kwota max': 500,
                'Więzienie min': 'Brak',
                'Więzienie max': 10
            },
            'Przechodzenie przez jezdnię w niedozwolonym miejscu': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 50,
                'Kwota max': 250,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            }
        },
        'Przestępstwa lekkie': {
            'Chodzenie zamaskowanym po mieście': {
                'Dodatkowe': 'Upomnienie/Rewizja',
                'Kwota min': 100,
                'Kwota max': 300,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Niszczenie mienia publicznego': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Niewykonywanie poleceń funkcjonariusza': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 100,
                'Kwota max': 350,
                'Więzienie min': 'Brak',
                'Więzienie max': 12
            },
            'Stawianie oporu': {
                'Dodatkowe': 'Brak',
                'Kwota min': 300,
                'Kwota max': 500,
                'Więzienie min': 6,
                'Więzienie max': 12
            },
            'Utrudnianie pracy służbom publicznym': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 100,
                'Kwota max': 400,
                'Więzienie min': 'Brak',
                'Więzienie max': 12
            },
            'Składanie fałszywych zeznań': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 6,
                'Więzienie max': 20
            },
            'Fałszywe zgłoszenie': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Kradzież pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 400,
                'Kwota max': 800,
                'Więzienie min': 15,
                'Więzienie max': 36
            },
            'Posiadanie kontrabandy': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 250,
                'Kwota max': 500,
                'Więzienie min': 10,
                'Więzienie max': 60
            },
            'Niszczenie cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Kradzież cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 6,
                'Więzienie max': 24
            },
            'Latanie dronem bez licencji': {
                'Dodatkowe': 'Rekwiracja drona',
                'Kwota min': 500,
                'Kwota max': 1000,
                'Więzienie min': 'Brak',
                'Więzienie max': 15
            },
            'Próba przekupstwa': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 250,
                'Kwota max': 500,
                'Więzienie min': 'Brak',
                'Więzienie max': 10
            },
            'Zakłócanie spokoju': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 50,
                'Kwota max': 350,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Zakłócanie ruchu drogowego': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 100,
                'Kwota max': 1000,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Nielegalne zgromadzenie (ok 6 osób)': {
                'Dodatkowe': 'Tylko mandat',
                'Kwota min': 100,
                'Kwota max': 1000,
                'Więzienie min': 10,
                'Więzienie max': 48
            }
        },
        'Przestępstwa ciężkie': {
            'Prowokacja policji': {
                'Dodatkowe': 'Brak',
                'Kwota min': 50,
                'Kwota max': 700,
                'Więzienie min': 'Brak',
                'Więzienie max': 24
            },
            'Włamanie na teren zbrojowni LVMPD': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 'Brak',
                'Więzienie max': 20
            },
            'Włamanie': {
                'Dodatkowe': 'Brak',
                'Kwota min': 400,
                'Kwota max': 400,
                'Więzienie min': 'Brak',
                'Więzienie max': 15
            },
            'Ucieczka przed policją': {
                'Dodatkowe': 'Brak',
                'Kwota min': 300,
                'Kwota max': 550,
                'Więzienie min': 12,
                'Więzienie max': 24
            },
            'Pomoc w ucieczce': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200, 
                'Kwota max': 600,
                'Więzienie min': 12,
                'Więzienie max': 20
            },
            'Porwanie': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 800,
                'Więzienie min': 15,
                'Więzienie max': 48
            },
            'Współudział w przestępstwie': {
                'Dodatkowe': 'Brak',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 10,
                'Więzienie max': 40
            },
            'Napad na sklep/stację': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 200,
                'Kwota max': 800,
                'Więzienie min': 15,
                'Więzienie max': 24
            },
            'Napad na Bank/jubiler': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 700,
                'Więzienie min': 20,
                'Więzienie max': 50
            },
            'Napad na konwój': {
                'Dodatkowe': 'Konfiskata licencji na broń, Konfiskata gotówki przy sobie',
                'Kwota min': 300,
                'Kwota max': 800,
                'Więzienie min': 15,
                'Więzienie max': 40
            },
            'Próba napadu/napaści': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 10,
                'Więzienie max': 24
            },
            'Podszywanie się pod funkcjonariusza LVMPD': {
                'Dodatkowe': 'Brak',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 20,
                'Więzienie max': 50
            },
            'Nękanie obywatela/obywatelki': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Terroryzm': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 10000,
                'Kwota max': 100000,
                'Więzienie min': 300,
                'Więzienie max': 600
            }
        },
        'Przestępstwa związane z bronią': {
            'Groźby przy użyciu broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 12,
                'Więzienie max': 20
            },
            'Bezpodstawne użycie broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 400,
                'Kwota max': 700,
                'Więzienie min': 6,
                'Więzienie max': 24
            },
            'Posiadanie broni bez zezwolenia': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 0,
                'Więzienie max': 20
            },
            'Posiadanie nielegalnej broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 950,
                'Więzienie min': 20,
                'Więzienie max': 60
            },
            'Handel bronią': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 35,
                'Więzienie max': 80
            }
        },
        'Przestępstwa związane z nielegalnymi substancjami': {
            'Posiadanie narkotyków miękkich (marihuana powyżej 5g)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 150,
                'Kwota max': 600,
                'Więzienie min': 6,
                'Więzienie max': 15
            },
            'Posiadanie narkotyków twardych (metamfetamina/kokaina/MDMA)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 300,
                'Kwota max': 800,
                'Więzienie min': 15,
                'Więzienie max': 30
            },
            'Handel narkotykami miękkimi (marihuana)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 250,
                'Kwota max': 600,
                'Więzienie min': 10,
                'Więzienie max': 24
            },
            'Handel narkotykami twardymi (metamfetamina/kokaina)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 200,
                'Kwota max': 1200,
                'Więzienie min': 30,
                'Więzienie max': 60
            }
        },
        'Przestępstwa związane z użyciem siły/uszczerbkiem na zdrowiu': {
            'Usiłowanie zabójstwa': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 800,
                'Kwota max': 800,
                'Więzienie min': 30,
                'Więzienie max': 74
            },
            'Usiłowanie zabójstwa funkcjonariusza LVMPD': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 500,
                'Kwota max': 1600,
                'Więzienie min': 40,
                'Więzienie max': 90
            },
            'Napaść na funkcjonariusza LVMPD': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 15,
                'Więzienie max': 30
            },
            'Groźby karalne': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 'Brak',
                'Więzienie max': 15
            },
            'Nieumyślne spowodowanie uszczerbku na zdrowiu': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 'Brak',
                'Więzienie max': 15
            },
            'Naruszenie nietykalności cielesnej': {
                'Dodatkowe': 'Brak',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 'Brak',
                'Więzienie max': 10
            },
            'Udział w bójce': {
                'Dodatkowe': 'Brak',
                'Kwota min': 150,
                'Kwota max': 300,
                'Więzienie min': 'Brak',
                'Więzienie max': 6
            },
            'Morderstwo': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 300000,
                'Kwota max': 500000,
                'Więzienie min': 360,
                'Więzienie max': 360
            }
        },
        'Grupy przestępcze': {
            'Wymuszenia haraczy przez członków gangu': {
                'Dodatkowe': 'Brak',
                'Kwota min': 600,
                'Kwota max': 1000,
                'Więzienie min': 10,
                'Więzienie max': 30
            },
            'Prowadzenie grupy przestępczej': {
                'Dodatkowe': 'Brak',
                'Kwota min': 1500,
                'Kwota max': 20000,
                'Więzienie min': 50,
                'Więzienie max': 150
            },
            'Przynależność do zorganizowanej grupy przestępczej': {
                'Dodatkowe': 'Brak',
                'Kwota min': 1000,
                'Kwota max': 15000,
                'Więzienie min': 40,
                'Więzienie max': 100
            },
            'Współpraca z zorganizowaną grupą przestępczą': {
                'Dodatkowe': 'Brak',
                'Kwota min': 5000,
                'Kwota max': 10000,
                'Więzienie min': 30,
                'Więzienie max': 75
            }
        },
        'Przestępstwa korupcyjne': {
            'Nadużycie praw specjalnych przez pojazdy uprzywilejowane': {
                'Dodatkowe': 'Brak',
                'Kwota min': 150,
                'Kwota max': 1000,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Korupcja': {
                'Dodatkowe': 'Brak',
                'Kwota min': 800,
                'Kwota max': 5000,
                'Więzienie min': 40,
                'Więzienie max': 80
            },
            'Nieuprawnione użycie broni palnej': {
                'Dodatkowe': 'Brak',
                'Kwota min': 350,
                'Kwota max': 800,
                'Więzienie min': 'Brak',
                'Więzienie max': 24
            },
            'Nieuprawnione użycie paralizatora': {
                'Dodatkowe': 'Brak',
                'Kwota min': 150,
                'Kwota max': 1000,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Nieprzestrzeganie procedur': {
                'Dodatkowe': 'Brak',
                'Kwota min': 300,
                'Kwota max': 1000,
                'Więzienie min': 'Brak',
                'Więzienie max': 'Brak'
            },
            'Przekroczenie obowiązków służbowych pod wpływem alkoholu lub narkotyków': {
                'Dodatkowe': 'Brak',
                'Kwota min': 400,
                'Kwota max': 1000,
                'Więzienie min': 10,
                'Więzienie max': 40
            }
        }
    };

    // tworzenie HTML-a
    $("body").append('<input type="submit" id="show" value="Pokaż"/>');
    var i = 1;
    $.each(obj, function(catName, catObj) {
        $("body").append('<div id="cat' + i + '"><p class="category">' + catName + '</p><div class="checkboxes" id="cb' + i + '" style="display:none;"></div></div>');
        $.each(catObj, function(itemName, itemProps) {
            var safeId = itemName.replace(/[\s,()\/+-]+/g, '');
            var line = '<p><label><input type="checkbox" value="' + itemName + '"> ' + itemName +
                       ' <input type="text" id="' + safeId + '" value="1" size="2"></label><br>(';
            $.each(itemProps, function(k, v) {
                if (v === '' || v == null) v = 'Brak';
                line += ' ' + k + ': ' + v + ',';
            });
            line += ' )</p>';
            $("#cb" + i).append(line);
        });
        i++;
    });
    $("body").append('<div class="footer"><p>Copyright 2025 © by Roxi1287 & white1225</p></div>');

    // tablice przechowujące zaznaczone wartości
    var arrayWyrok = [], arrayDodatkowe = [],
        arrayMinKwota = [], arrayMaxKwota = [],
        arrayMinWiezienie = [], arrayMaxWiezienie = [];

    // rozwijanie kategorii
    $('.category').click(function() {
        $(this).next().toggle();
    });

    // obsługa przycisku Pokaż
    $('#show').click(function() {
        arrayWyrok = []; arrayDodatkowe = [];
        arrayMinKwota = []; arrayMaxKwota = [];
        arrayMinWiezienie = []; arrayMaxWiezienie = [];

        $('input:checkbox:checked').each(function() {
            var name = $(this).val();
            var qty = parseInt($('#' + name.replace(/[\s,()\/+-]+/g, '')).val(), 10) || 1;
            var suffix = qty > 1 ? ' x' + qty : '';
            arrayWyrok.push(name + suffix);

            // szukaj w obj i akumuluj wartości
            $.each(obj, function(_, catObj2) {
                $.each(catObj2, function(itemName2, itemProps2) {
                    if (itemName2 === name) {
                        $.each(itemProps2, function(k3, v3) {
                            if (k3 === 'Dodatkowe' && v3) {
                                if (arrayDodatkowe.indexOf(v3) === -1) arrayDodatkowe.push(v3);
                            } else if (k3 === 'Kwota min') {
                                arrayMinKwota.push(parseInt(v3 === 'Brak' ? 0 : v3) * qty);
                            } else if (k3 === 'Kwota max') {
                                arrayMaxKwota.push(parseInt(v3 === 'Brak' ? 0 : v3) * qty);
                            } else if (k3 === 'Więzienie min') {
                                arrayMinWiezienie.push(v3 === 'Brak' ? 0 : parseInt(v3) * qty);
                            } else if (k3 === 'Więzienie max') {
                                arrayMaxWiezienie.push(v3 === 'Brak' ? 0 : parseInt(v3) * qty);
                            }
                        });
                    }
                });
            });

            $(this).prop('checked', false);
        });

        if (arrayWyrok.length === 0) {
            alertify.error("Najpierw wybierz wykroczenie!");
            return;
        }

        var wyrok  = arrayWyrok.join(", "),
            dodatkowe = arrayDodatkowe.join(", "),
            minKwota = arrayMinKwota.reduce((a,b)=>a+b,0),
            maxKwota = arrayMaxKwota.reduce((a,b)=>a+b,0),
            minWiez  = arrayMinWiezienie.reduce((a,b)=>a+b,0),
            maxWiez  = arrayMaxWiezienie.reduce((a,b)=>a+b,0);

        alertify.success("Pomyślnie uzyskano sugestię wyroku");
        setTimeout(function(){
            if (maxWiez > 0) {
                alertify.alert(
                    "<b>Wyrok:</b><br>" + wyrok +
                    "<br><br><b>Proponowana kara:</b><br>" +
                    "Grzywna: Od " + minKwota + "$ do " + maxKwota + "$<br>" +
                    "Więzienie: Od " + minWiez + " miesięcy do " + maxWiez + " miesięcy<br>" +
                    "Dodatkowe: " + dodatkowe
                ).setting({ 'title': "<b><font size='4'>Sugestia wyroku</font></b>", 'movable': false }).show();
            } else {
                alertify.alert(
                    "<b>Wykroczenie:</b><br>" + wyrok +
                    "<br><br><b>Proponowana kara:</b><br>" +
                    "Mandat: Od " + minKwota + "$ do " + maxKwota + "$<br>" +
                    "Dodatkowe: " + dodatkowe
                ).setting({ 'title': "<b><font size='4'>Sugestia mandatu</font></b>", 'movable': false }).show();
            }
        }, 700);
    });
});

