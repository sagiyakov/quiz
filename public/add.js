const { addQuestion } = require("../server/db");

new Vue({
    el: "#app",
    data() {
      return {
        dialog: false,
        inputValue: "",
        stringArray: []
      };
    },
    methods: {
      createArray() {
        if (this.inputValue !== "") {
          this.stringArray.push(this.inputValue);
          console.log(this.stringArray);
        }
      },
      closeDialog() {
        this.dialog = false;
        this.inputValue = "";
        this.stringArray = [];
      }
      


      
    }
  });
// db.addQuestion({
    //     question: '12+2',
    //     answers:[43,112, 14,56],
    //     correct: 2
    // })