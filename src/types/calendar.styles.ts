export const calendarStyles = `
    .rdp {
        margin:0;
     }
        
    .my-selected:not([disabled]) {
        font-weight: bold;
        background-color: tomato;
        color: #dfdfdf;
    }
    
    .my-selected:hover:not([disabled]) {
        color: #dfdfdf;
    }
    
    .my-today {
        font-weight: bold;
        color: tomato;
    }
    
    .my-today:hover:not([selected]) {
        color: tomato;
    }
    
    .my-today:hover {
        color: tomato;
        background-color: tomato;
    }
    
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected):not(.my-today) {
        background-color: tomato;
    }
`;
