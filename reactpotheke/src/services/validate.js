export default function validate(prop, value) {
    switch(prop) {
        case 'Years':
            if((0 > value || value > 100)) {
                return false;
            }             
        break;
        case 'Capital':
            if(1 > value || value > 1000000000) {
                return false;
            } 
        break;
        default:
            return true;
    }
    return true;
}