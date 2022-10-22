export const css = `
  .my-selected:hover:not([disabled]) { 
    color: #dfdfdf;
    background-color: tomato
  }
  .my-today { 
    font-weight: bold;
    color: tomato;
  }
  
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected),.rdp-day_selected,.rdp-day_selected:hover {
    background-color: tomato;
    color: #dfdfdf;
  }
  
  .rdp-day_selected,.rdp-day_selected:hover {
    background-color: tomato
  }

`;
