export default function validate(prop, value) {
    switch(prop) {
        case 'n':
            if((0 > value || value > 100)) {
                return false;
            }             
        break;
        case 'C':
            if(1 > value || value > 1000000000) {
                return false;
            } 
        break;
        default:
            return true;
    }
    return true;
}