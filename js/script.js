// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

//Crea la data per Vue
const app = Vue.createApp({
    data() {
      return {
        newTask: { text: '', done: false },
        tasks: [
          { text: "Completare un markup", done: false },
          { text: "Andare a fare sport", done: true },
        ]
      };
    },
//Methods

    methods: {
      addTask() {
        if (this.newTask.text !== '') {
          this.tasks.push({ ...this.newTask });
          this.newTask.text = '';
          this.newTask.done = false;
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
      toggleDone(index) {
        this.tasks[index].done = !this.tasks[index].done;
      }
    }

  });
  //Montare il vue
  app.mount('#app');