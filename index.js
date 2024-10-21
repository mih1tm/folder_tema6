
const set_intrebari = {
    name: "set intrebari",
    id_counter: 1,
    array_seturi: [],

    create_set: function(question, response1, response2){
        const set_nou={
        id: this.id_counter++,
        question: question,
        response1: response1,
        response2: response2,
        }
        this.array_seturi.push(set_nou)
    }
}

const add_seturi = {

    reset_fields: function(){
        document.getElementById('question_1').value = ""
        document.getElementById('response_1').value = ""
        document.getElementById('response_2').value = ""
    },
    verificare_lungime_input: function(){
        let q1 = document.getElementById('question_1').value
        let r1 = document.getElementById('response_1').value
        let r2 = document.getElementById('response_2').value
        
        if(r1.length < 3 && r2.length < 3){
            alert("raspunsurile trebuie sa fie mai lungi de 3 caractere")
            document.getElementById('response_1').value = ""
            document.getElementById('response_2').value = ""
        }
        else{
            set_intrebari.create_set( q1, r1, r2)
            this.reset_fields()
        
            console.log(set_intrebari.array_seturi)
        }
    },
    
    verificare_input_finish: function(){
        let q1 = document.getElementById('question_1').value
        if(q1.toLowerCase() == "finish" || set_intrebari.array_seturi.length == 5){
            document.getElementById('add_button').disabled = true
            document.getElementById('question_1').disabled = true
            document.getElementById('response_1').disabled = true
            document.getElementById('response_2').disabled = true
            salvare_info.salvare_info_localstorage()
            add_seturi.reset_fields()
            alert('Au fost introduse toate intrebarile!')
            alert('Inchideti pagina!')
            
            
        }
        else document.getElementById('add_button').disabled = false
    }
}

const salvare_info = {
    salvare_info_localstorage: function(){
            localStorage.setItem('array_seturi' , JSON.stringify(set_intrebari.array_seturi))       
    }
}

const printare_istoric = {
    preluare_info_localstorage: function(){
        let set_preluat = localStorage.getItem('array_seturi')
        if(set_preluat = localStorage.getItem('array_seturi')){
            let array_preluat = JSON.parse(set_preluat)
            console.log(array_preluat)
            for(i = 0; i < array_preluat.length; i++){
                let print = document.getElementById('zona_print_istoric' + i)
                print.innerHTML ='ID: ' + array_preluat[i].id +'<br>' + 'Intrebare: ' + array_preluat[i].question
                +'<br>'+ 'Primul raspuns: ' +array_preluat[i].response1 + '<br>' + 'Al doilea raspuns: ' + array_preluat[i].response2
            }
        }
        else null;
    }
}
printare_istoric.preluare_info_localstorage()
