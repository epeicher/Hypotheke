import numeral from 'numeral'

export default function formatNum(num) {
    return numeral(num).format('0,0.00')
}